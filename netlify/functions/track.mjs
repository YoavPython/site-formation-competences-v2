/**
 * Netlify Function : POST /api/track — reçoit les événements de la landing Lilmod.
 * Routée par netlify.toml (/api/track → /.netlify/functions/track).
 * Les e-mails sont envoyés par la fonction programmée notify-visits.
 */
import { getStore } from '@netlify/blobs';
import { STORE_NAME, entryKey, isBot, sanitizePayload } from '../lib/visits.mjs';

const MAX_BODY = 32 * 1024;
const ALLOWED_HOSTS = /(^|\.)formation-competences\.fr$|\.netlify\.app$|^localhost(:\d+)?$/;

export default async (req, context) => {
    if (req.method !== 'POST') return new Response(null, { status: 405 });

    const origin = req.headers.get('origin') || req.headers.get('referer') || '';
    try {
        if (origin && !ALLOWED_HOSTS.test(new URL(origin).host)) return new Response(null, { status: 403 });
    } catch {
        return new Response(null, { status: 403 });
    }

    const ua = req.headers.get('user-agent') || '';
    if (isBot(ua)) return new Response(null, { status: 204 });

    const raw = await req.text();
    if (raw.length > MAX_BODY) return new Response(null, { status: 413 });
    let body;
    try {
        body = JSON.parse(raw);
    } catch {
        return new Response(null, { status: 400 });
    }
    const payload = sanitizePayload(body);
    if (!payload) return new Response(null, { status: 400 });

    // Géolocalisation approximative fournie par Netlify ; l'adresse IP n'est pas conservée.
    const g = context.geo || {};
    const geo = { city: g.city, subdivision: g.subdivision?.name, country: g.country?.name };

    const store = getStore(STORE_NAME);
    await store.setJSON(entryKey(payload.sid), { ...payload, ua: ua.slice(0, 300), geo, receivedAt: Date.now() });
    return new Response(null, { status: 204 });
};
