/**
 * Express router pour la capture de leads.
 *
 *   POST /api/leads
 *     Body JSON :
 *       {
 *         name, email, phone, situation?, objectif?, experience?, message?, consent,
 *         prenom?, nom?, telephone?, statut?, experience_france?,
 *         website? (honeypot, doit rester vide),
 *         formType: "home" | "bilan" | "vae" | "eligibility" | ...,
 *         page?: string,
 *         utm?: { utm_source, utm_medium, utm_campaign, utm_term, utm_content }
 *       }
 *
 *     Réponses :
 *       200 OK { ok: true, mode, simulated?, id? }
 *       400 { ok: false, errors: { ... } }
 *       429 { ok: false, error: "Trop de requêtes" }
 *       502 { ok: false, error: "Erreur côté CRM" } (fallback en place)
 *
 * Anti-spam : rate limit en mémoire (par IP, par minute) + honeypot.
 */

const express = require('express');
const { createContact, getMode } = require('../zoho/contacts');
const { validateLeadPayload, extractMeta } = require('./validation');

const router = express.Router();

const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = Number(process.env.LEAD_RATE_LIMIT_PER_MIN || 5);
const ipBuckets = new Map();

function rateLimit(ip) {
    const now = Date.now();
    const bucket = ipBuckets.get(ip) || [];
    const recent = bucket.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) {
        ipBuckets.set(ip, recent);
        return false;
    }
    recent.push(now);
    ipBuckets.set(ip, recent);
    return true;
}

setInterval(() => {
    const now = Date.now();
    for (const [ip, bucket] of ipBuckets.entries()) {
        const recent = bucket.filter((t) => now - t < RATE_WINDOW_MS);
        if (recent.length === 0) ipBuckets.delete(ip);
        else ipBuckets.set(ip, recent);
    }
}, RATE_WINDOW_MS).unref?.();

router.post('/leads', async (req, res) => {
    const ip = req.ip || req.connection?.remoteAddress || 'unknown';

    if (!rateLimit(ip)) {
        return res.status(429).json({ ok: false, error: 'Trop de requêtes. Réessayez dans une minute.' });
    }

    const result = validateLeadPayload(req.body);

    if (result.ok && result.isHoneypot) {
        console.warn(`[leads] Honeypot déclenché depuis ${ip}`);
        return res.status(200).json({ ok: true, simulated: true, mode: getMode() });
    }

    if (!result.ok) {
        return res.status(400).json({ ok: false, errors: result.errors });
    }

    const meta = extractMeta(req);
    if (!meta.formType || meta.formType === 'unknown') meta.formType = 'site-web';

    try {
        const created = await createContact(result.normalized, meta);

        if (!created.ok) {
            console.error('[leads] Echec côté CRM :', created.error);
            return res.status(502).json({
                ok: false,
                error: 'Le formulaire a bien été reçu, mais sa transmission au CRM a échoué. Notre équipe vous recontactera.',
                mode: created.mode,
            });
        }

        return res.status(200).json({
            ok: true,
            mode: created.mode,
            simulated: Boolean(created.simulated),
            id: created.id,
        });
    } catch (err) {
        console.error('[leads] Erreur inattendue :', err);
        return res.status(500).json({ ok: false, error: 'Erreur serveur.' });
    }
});

router.get('/leads/health', (req, res) => {
    res.json({ ok: true, mode: getMode() });
});

module.exports = router;
