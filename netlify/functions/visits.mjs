/**
 * Netlify Function : GET /api/visits — historique des visites de la landing Lilmod (archive 13 mois).
 * Protégée par VISITS_ADMIN_TOKEN (en-tête « X-Admin-Token » ou paramètre ?token=).
 * Paramètres : status=sent|failed|abandoned|dryrun, months=1..13 (défaut 2), format=json.
 */
import { timingSafeEqual } from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { ARCHIVE_STORE_NAME, listArchive } from '../lib/visits.mjs';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATUS = { sent: '✅ envoyé', failed: '⚠️ échec Brevo (nouvel essai en cours)', abandoned: '❌ non envoyé (abandon après 24 h)', dryrun: '🧪 test (Brevo non configuré)' };

function authorized(req, url) {
    const expected = process.env.VISITS_ADMIN_TOKEN || '';
    const given = req.headers.get('x-admin-token') || url.searchParams.get('token') || '';
    if (!expected || expected.length < 16) return false;
    const a = Buffer.from(given);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}

export default async (req) => {
    const url = new URL(req.url);
    const headers = { 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' };
    if (!process.env.VISITS_ADMIN_TOKEN) return new Response('Not found', { status: 404, headers });
    if (!authorized(req, url)) return new Response('Accès refusé', { status: 401, headers });

    const status = url.searchParams.get('status');
    const months = Math.min(13, Math.max(1, Number(url.searchParams.get('months')) || 2));
    const visits = await listArchive(getStore(ARCHIVE_STORE_NAME), { months, status: STATUS[status] ? status : null });

    if (url.searchParams.get('format') === 'json') {
        return Response.json({
            count: visits.length,
            failed: visits.filter((v) => v.status === 'failed' || v.status === 'abandoned').length,
            visits: visits.map(({ events, ...v }) => ({ ...v, eventsCount: events?.length || 0 })),
        }, { headers });
    }

    const date = (t) => new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', dateStyle: 'short', timeStyle: 'short' }).format(new Date(t));
    const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Visites landing Lilmod</title>
<style>body{margin:0;background:#f4f6f6;color:#192d38;font:14px/1.5 Arial,sans-serif}main{max-width:900px;margin:auto;padding:20px 16px}
h1{font-size:22px}details{background:#fff;border:1px solid #dce4e3;border-radius:10px;margin:8px 0;padding:10px 14px}
summary{cursor:pointer;display:flex;gap:12px;flex-wrap:wrap}summary b{flex:1;min-width:220px}pre{white-space:pre-wrap;font:13px/1.5 monospace;color:#33464f}
.s{font-size:12px;color:#566771}nav a{margin-right:12px}</style></head><body><main>
<h1>Visites de la landing Lilmod (${visits.length})</h1>
<nav class="s">Filtrer : <a href="?months=${months}">toutes</a><a href="?status=failed&months=${months}">échecs Brevo</a><a href="?status=abandoned&months=${months}">non envoyées</a><a href="?months=13">13 mois</a></nav>
${visits.map((v) => `<details><summary><span class="s">${esc(date(v.start))}</span><b>${esc(v.subject.replace('[Landing Lilmod] ', ''))}</b><span class="s">${esc(STATUS[v.status] || v.status)}</span></summary>
<pre>${esc(v.text)}${v.lastError ? `\n\nDernière erreur : ${esc(v.lastError)} (essais : ${v.attempts})` : ''}</pre></details>`).join('') || '<p>Aucune visite sur la période.</p>'}
</main></body></html>`;
    return new Response(html, { headers: { ...headers, 'content-type': 'text/html; charset=utf-8' } });
};
