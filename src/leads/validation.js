/**
 * Validation des payloads envoyés par les formulaires du site.
 *
 * Inputs supportés :
 *  - Form long  (Home / Bilan / VAE) :
 *      name, email, phone, situation, objectif|experience, message, consent
 *  - Modal éligibilité :
 *      prenom, nom, email, telephone, statut, experience_france
 *
 * Anti-spam :
 *  - Honeypot : un champ caché côté frontend (`website`) doit rester vide.
 *    Si présent → on retourne success (200) sans rien faire pour ne pas
 *    informer le bot de l'échec.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s().]{7,25}$/;
const MAX_TEXT = 2000;

function clean(value, max = 200) {
    if (value === undefined || value === null) return '';
    return String(value).trim().slice(0, max);
}

function pickFirstNonEmpty(...values) {
    for (const v of values) {
        if (v !== undefined && v !== null && String(v).trim() !== '') return String(v).trim();
    }
    return '';
}

/**
 * Normalise un payload entrant en un objet propre.
 * @returns {{ ok: true, normalized, isHoneypot } | { ok: false, errors }}
 */
function validateLeadPayload(raw) {
    if (!raw || typeof raw !== 'object') {
        return { ok: false, errors: { _global: 'Payload invalide.' } };
    }

    const honeypot = clean(raw.website || raw.url_honeypot, 100);
    if (honeypot !== '') {
        return { ok: true, normalized: null, isHoneypot: true };
    }

    const normalized = {
        name: clean(raw.name, 120),
        prenom: clean(raw.prenom, 60),
        nom: clean(raw.nom, 60),
        email: clean(raw.email, 150).toLowerCase(),
        phone: pickFirstNonEmpty(raw.phone, raw.telephone, raw.tel).slice(0, 30),
        situation: clean(raw.situation, 60),
        statut: clean(raw.statut, 60),
        objectif: clean(raw.objectif, 60),
        experience: clean(raw.experience, 60),
        experience_france: clean(raw.experience_france, 60),
        message: clean(raw.message, MAX_TEXT),
        consent: Boolean(raw.consent === true || raw.consent === 'on' || raw.consent === '1'),
    };

    const errors = {};

    if (!normalized.email) {
        errors.email = 'Email requis.';
    } else if (!EMAIL_RE.test(normalized.email)) {
        errors.email = 'Email invalide.';
    }

    const hasName = normalized.name || normalized.nom || normalized.prenom;
    if (!hasName) errors.name = 'Nom requis.';

    if (!normalized.phone) {
        errors.phone = 'Téléphone requis.';
    } else if (!PHONE_RE.test(normalized.phone)) {
        errors.phone = 'Téléphone invalide.';
    }

    if (Object.keys(errors).length > 0) {
        return { ok: false, errors };
    }

    return { ok: true, normalized, isHoneypot: false };
}

function extractMeta(req) {
    const utm = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    if (req.body?.utm && typeof req.body.utm === 'object') {
        utmKeys.forEach((k) => {
            if (req.body.utm[k]) utm[k] = clean(req.body.utm[k], 120);
        });
    }

    const formType = clean(req.body?.formType || 'unknown', 60);
    const page = clean(req.body?.page || req.headers.referer || '', 500);
    const sourceLabel = formType ? `Site - ${formType}` : 'Site';

    return {
        source: sourceLabel,
        page,
        utm,
        formType,
        consent: req.body?.consent ? new Date().toISOString() : null,
        ip: req.ip,
        userAgent: clean(req.headers['user-agent'] || '', 300),
    };
}

module.exports = {
    validateLeadPayload,
    extractMeta,
};
