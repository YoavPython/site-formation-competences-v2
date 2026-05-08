/**
 * Netlify Function : POST /api/leads
 *
 * Routée par netlify.toml :
 *   /api/leads  →  /.netlify/functions/leads
 *
 * Réutilise sans modification les modules backend :
 *   - src/leads/validation.js   (validation + extraction meta)
 *   - src/zoho/contacts.js      (modes dry_run / shadow / live)
 *   - src/zoho/client.js        (OAuth + fetch Zoho)
 *   - src/zoho/mapper.js        (mapping Contacts)
 *
 * Variables d'environnement requises (à configurer dans
 *   Netlify > Site settings > Environment variables) :
 *
 *   ZOHO_MODE                = dry_run | shadow | live
 *   ZOHO_CLIENT_ID
 *   ZOHO_CLIENT_SECRET
 *   ZOHO_REFRESH_TOKEN
 *   ZOHO_ACCOUNTS_DOMAIN     = https://accounts.zoho.com   (USA) ou .eu / .in / ...
 *   ZOHO_API_DOMAIN          = https://www.zohoapis.com    (USA) ou .eu / .in / ...
 *   LEAD_RATE_LIMIT_PER_MIN  (optionnel, défaut 5)
 */

const { createContact, getMode } = require('../../src/zoho/contacts');
const { validateLeadPayload, extractMeta } = require('../../src/leads/validation');

// Rate-limit best-effort : la Map persiste tant que l'instance Lambda reste
// "warm". En cold start le bucket est vide, ce qui est acceptable pour un
// formulaire grand public protégé en plus par le honeypot.
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

function jsonResponse(statusCode, body) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
        },
        body: JSON.stringify(body),
    };
}

function getClientIp(event) {
    const xff = event.headers?.['x-forwarded-for'] || event.headers?.['X-Forwarded-For'];
    if (xff) return String(xff).split(',')[0].trim();
    return event.headers?.['client-ip'] || 'unknown';
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return jsonResponse(405, { ok: false, error: 'Méthode non autorisée.' });
    }

    let body = {};
    try {
        body = event.body ? JSON.parse(event.body) : {};
    } catch (_) {
        return jsonResponse(400, { ok: false, error: 'JSON invalide.' });
    }

    const ip = getClientIp(event);
    if (!rateLimit(ip)) {
        return jsonResponse(429, { ok: false, error: 'Trop de requêtes. Réessayez dans une minute.' });
    }

    const result = validateLeadPayload(body);

    if (result.ok && result.isHoneypot) {
        console.warn(`[leads] Honeypot déclenché depuis ${ip}`);
        return jsonResponse(200, { ok: true, simulated: true, mode: getMode() });
    }

    if (!result.ok) {
        return jsonResponse(400, { ok: false, errors: result.errors });
    }

    // Construit un pseudo-req compatible avec extractMeta()
    const fakeReq = {
        body,
        headers: {
            referer: event.headers?.referer || event.headers?.referrer || '',
            'user-agent': event.headers?.['user-agent'] || '',
        },
        ip,
    };
    const meta = extractMeta(fakeReq);
    if (!meta.formType || meta.formType === 'unknown') meta.formType = 'site-web';

    try {
        const created = await createContact(result.normalized, meta);

        if (!created.ok) {
            console.error('[leads] Echec côté CRM :', created.error);
            return jsonResponse(502, {
                ok: false,
                error: 'Le formulaire a bien été reçu, mais sa transmission au CRM a échoué. Notre équipe vous recontactera.',
                mode: created.mode,
            });
        }

        return jsonResponse(200, {
            ok: true,
            mode: created.mode,
            simulated: Boolean(created.simulated),
            id: created.id,
        });
    } catch (err) {
        console.error('[leads] Erreur inattendue :', err);
        return jsonResponse(500, { ok: false, error: 'Erreur serveur.' });
    }
};
