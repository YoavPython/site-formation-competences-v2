/**
 * Suivi des visites de la landing Lilmod : validation des événements, regroupement par visite,
 * rédaction et envoi de l'e-mail récapitulatif.
 *
 * Stockage (Netlify Blobs, store « lilmod-visits ») : une entrée par envoi du navigateur,
 * clé `v/<sid>/<horodatage serveur>-<aléa>`. Une clé par envoi évite toute écriture concurrente.
 *
 * Variables d'environnement (Netlify > Site configuration > Environment variables) :
 *   BREVO_API_KEY      clé API Brevo (Transactional e-mails). Absente : e-mails écrits dans les logs (dry run).
 *   NOTIFY_EMAILS      destinataires, séparés par des virgules.
 *   NOTIFY_FROM        adresse d'expéditeur vérifiée dans Brevo.
 *   NOTIFY_FROM_NAME   nom d'expéditeur (défaut : « Suivi landing Lilmod »).
 */

export const STORE_NAME = 'lilmod-visits';
export const PREFIX = 'v/';
const IDLE_MS = 10 * 60 * 1000;          // visite terminée après 10 min sans signe de vie
const AFTER_LEAVE_MS = 60 * 1000;        // ou 1 min après la fermeture de la page
const MAX_VISIT_MS = 3 * 60 * 60 * 1000; // une visite est envoyée au plus tard 3 h après son début
const GIVE_UP_MS = 24 * 60 * 60 * 1000;  // échec d'envoi persistant : abandon après 24 h
const MAX_EVENTS_PER_POST = 60;
const MAX_LABEL = 200;

export const EVENT_TYPES = new Set([
    'open', 'consent', 'section', 'scroll', 'click', 'details', 'dialog',
    'form_start', 'form_field', 'form_invalid', 'lead', 'lead_error',
    'hidden', 'visible', 'ping', 'leave',
]);

const BOT_UA = /bot|crawl|spider|slurp|preview|headless|lighthouse|pagespeed|facebookexternalhit|whatsapp|telegram|curl|wget|python|scan/i;

export function isBot(ua) {
    return !ua || BOT_UA.test(ua);
}

const clip = (v, n = MAX_LABEL) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, n) : undefined);

/** Valide le corps envoyé par le navigateur. Retourne null si invalide. */
export function sanitizePayload(body) {
    if (!body || typeof body !== 'object') return null;
    const sid = typeof body.sid === 'string' && /^[a-f0-9]{16,40}$/.test(body.sid) ? body.sid : null;
    if (!sid || !Array.isArray(body.events)) return null;
    const consent = ['full', 'anon'].includes(body.consent) ? body.consent : 'anon';
    const now = Date.now();
    const events = body.events.slice(0, MAX_EVENTS_PER_POST).map((e) => {
        if (!e || !EVENT_TYPES.has(e.type)) return null;
        const t = Number(e.t);
        const out = { type: e.type, t: Number.isFinite(t) && Math.abs(now - t) < GIVE_UP_MS ? t : now };
        for (const k of ['label', 'kind', 'href', 'path', 'referrer', 'device', 'lang', 'nom', 'telephone', 'disponibilite']) {
            const v = clip(e[k]);
            if (v) out[k] = v;
        }
        for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
            const v = clip(e[k], 100);
            if (v) out[k] = v;
        }
        if (Number.isFinite(Number(e.value))) out.value = Math.round(Number(e.value));
        return out;
    }).filter(Boolean);
    // Sans accord : uniquement l'ouverture minimale, le choix de cookies et la fermeture.
    if (consent === 'anon') {
        const ANON_FIELDS = { open: ['path', 'device', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign'], consent: ['label'], leave: [] };
        for (let i = events.length - 1; i >= 0; i--) {
            const keep = ANON_FIELDS[events[i].type];
            if (!keep) { events.splice(i, 1); continue; }
            for (const k of Object.keys(events[i])) if (!['type', 't', ...keep].includes(k)) delete events[i][k];
        }
    }
    if (!events.length) return null;
    // Données personnelles du formulaire : uniquement dans l'événement « lead », et seulement avec consentement.
    for (const e of events) {
        if (e.type !== 'lead' || consent !== 'full') {
            delete e.nom; delete e.telephone; delete e.disponibilite;
        }
    }
    return { sid, consent, events };
}

export function entryKey(sid, now = Date.now()) {
    return `${PREFIX}${sid}/${now}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Regroupe les clés par visite et indique celles qui sont terminées. */
export function finishedVisits(keys, now = Date.now()) {
    const bySid = new Map();
    for (const key of keys) {
        const m = key.match(/^v\/([a-f0-9]+)\/(\d+)-/);
        if (!m) continue;
        const v = bySid.get(m[1]) || { sid: m[1], keys: [], first: Infinity, last: 0 };
        const ts = Number(m[2]);
        v.keys.push(key);
        v.first = Math.min(v.first, ts);
        v.last = Math.max(v.last, ts);
        bySid.set(m[1], v);
    }
    return [...bySid.values()].map((v) => ({
        ...v,
        idle: now - v.last > IDLE_MS,
        tooLong: now - v.first > MAX_VISIT_MS,
        giveUp: now - v.first > GIVE_UP_MS,
        recentLeaveCheck: now - v.last > AFTER_LEAVE_MS,
    }));
}

/** Fusionne les entrées stockées d'une visite. */
export function mergeEntries(sid, entries) {
    const visit = { sid, consent: 'anon', geo: null, ua: '', events: [] };
    for (const entry of entries.filter(Boolean)) {
        if (entry.consent === 'full') visit.consent = 'full';
        if (!visit.geo && entry.geo) visit.geo = entry.geo;
        if (!visit.ua && entry.ua) visit.ua = entry.ua;
        visit.events.push(...(entry.events || []));
    }
    visit.events.sort((a, b) => a.t - b.t);
    // dédoublonnage (un envoi peut être répété par sendBeacon)
    const seen = new Set();
    visit.events = visit.events.filter((e) => {
        const k = `${e.t}|${e.type}|${e.label || ''}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });
    return visit;
}

export function hasLeft(visit) {
    return visit.events.some((e) => e.type === 'leave');
}

/* ---------- Rédaction du récapitulatif ---------- */

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function fmtDuration(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    if (s < 60) return `${s} s`;
    const m = Math.floor(s / 60);
    return m < 60 ? `${m} min ${String(s % 60).padStart(2, '0')}` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')}`;
}

function fmtOffset(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return `+${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

const fmtDate = (t) => new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit',
}).format(new Date(t));

function describeUa(ua = '') {
    const os = /iPhone|iPad/.test(ua) ? (/iPad/.test(ua) ? 'iPad' : 'iPhone')
        : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac'
            : /Linux/.test(ua) ? 'Linux' : 'Système inconnu';
    const browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /SamsungBrowser/.test(ua) ? 'Samsung Internet'
        : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'navigateur inconnu';
    return `${os} · ${browser}`;
}

function describeGeo(geo) {
    if (!geo) return 'inconnue';
    return [geo.city, geo.subdivision, geo.country].filter(Boolean).join(', ') || 'inconnue';
}

function describeSource(open) {
    if (!open) return 'inconnue';
    const utm = ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => open[k]).filter(Boolean);
    if (utm.length) return `Campagne : ${utm.join(' / ')}`;
    if (open.referrer) return `Lien depuis ${open.referrer}`;
    return 'Accès direct (lien ouvert depuis un e-mail, SMS, messagerie ou saisi)';
}

const CONSENT_LABEL = { full: 'Acceptés — parcours complet suivi', refused: 'Refusés — seule l’ouverture est connue', none: 'Sans réponse — seule l’ouverture est connue' };

function describeEvent(e) {
    switch (e.type) {
    case 'open': return 'Ouverture de la page';
    case 'consent': return `Cookies : ${e.label}`;
    case 'section': return `Consulte la section « ${e.label} »`;
    case 'scroll': return `Fait défiler la page jusqu’à ${e.value} %`;
    case 'click': return `Clique sur « ${e.label} »${e.kind === 'pdf' ? ' (téléchargement PDF)' : e.kind === 'mcf' ? ' (Mon Compte Formation)' : e.kind === 'tel' ? ' (appel téléphonique)' : e.kind === 'mail' ? ' (e-mail)' : e.kind === 'external' ? ' (lien externe)' : ''}`;
    case 'details': return `Déplie « ${e.label} »`;
    case 'dialog': return `Ouvre « ${e.label} »`;
    case 'form_start': return 'Commence à remplir le formulaire de rappel';
    case 'form_field': return `Renseigne le champ « ${e.label} »`;
    case 'form_invalid': return `Tente d’envoyer le formulaire — champs à corriger : ${e.label}`;
    case 'lead': return `<strong>Envoie une demande de rappel</strong>${e.nom ? ` : ${esc(e.nom)}` : ''}${e.telephone ? ` · ${esc(e.telephone)}` : ''}${e.disponibilite ? ` · disponibilité : ${esc(e.disponibilite)}` : ''}`;
    case 'lead_error': return 'Envoi du formulaire en échec';
    case 'hidden': return 'Quitte l’onglet (page en arrière-plan)';
    case 'visible': return 'Revient sur la page';
    case 'leave': return 'Ferme la page';
    default: return e.type;
    }
}

const HTML_EVENTS = new Set(['lead']); // libellés déjà échappés dans describeEvent

/** Construit l'e-mail (sujet, HTML, texte) à partir d'une visite fusionnée. */
export function buildReport(visit) {
    const ev = visit.events;
    const open = ev.find((e) => e.type === 'open') || ev[0];
    const start = ev[0]?.t || Date.now();
    const end = ev[ev.length - 1]?.t || start;
    const consentEvent = [...ev].reverse().find((e) => e.type === 'consent');
    const consent = visit.consent === 'full' ? 'full' : consentEvent && /refus/i.test(consentEvent.label || '') ? 'refused' : 'none';
    const lead = ev.find((e) => e.type === 'lead');
    const device = open?.device === 'mobile' ? 'Mobile' : open?.device === 'tablet' ? 'Tablette' : open?.device === 'desktop' ? 'Ordinateur' : '';
    const city = visit.geo?.city || visit.geo?.country || '';
    const maxScroll = Math.max(0, ...ev.filter((e) => e.type === 'scroll').map((e) => e.value || 0));
    const sections = [...new Set(ev.filter((e) => e.type === 'section').map((e) => e.label))];
    const keyActions = [
        lead && 'Demande de rappel envoyée',
        ev.some((e) => e.type === 'click' && e.kind === 'pdf') && 'Programme PDF téléchargé',
        ev.some((e) => e.type === 'click' && e.kind === 'mcf') && 'Clic vers Mon Compte Formation',
        ev.some((e) => e.type === 'click' && e.kind === 'tel') && 'Clic sur le téléphone',
        !lead && ev.some((e) => e.type === 'form_start') && 'Formulaire commencé sans être envoyé',
    ].filter(Boolean);

    const duration = consent === 'full' ? fmtDuration(end - start) : 'non mesurée';
    const subjectParts = [
        lead ? `🔥 Demande de rappel${lead.nom ? ` · ${lead.nom}` : ''}` : consent === 'full' ? `👀 Visite · ${fmtDuration(end - start)}` : '👀 Ouverture',
        city, device,
    ].filter(Boolean);
    const subject = `[Landing Lilmod] ${subjectParts.join(' · ')}`;

    const rows = [
        ['Date', fmtDate(start)],
        ['Durée', duration],
        ['Appareil', [device, describeUa(visit.ua)].filter(Boolean).join(' — ')],
        ['Localisation (approx.)', describeGeo(visit.geo)],
        ['Provenance', describeSource(open)],
        ['Cookies', CONSENT_LABEL[consent]],
    ];
    if (consent === 'full') {
        rows.push(['Défilement max', `${maxScroll} %`]);
        rows.push(['Sections vues', sections.join(', ') || '—']);
    }
    rows.push(['À retenir', keyActions.join(' · ') || '—']);

    const timeline = ev.filter((e) => (consent === 'full' ? e.type !== 'ping' : ['open', 'consent'].includes(e.type)));
    const html = `<!doctype html><html lang="fr"><body style="margin:0;background:#f4f6f6;font:14px/1.5 Arial,sans-serif;color:#192d38">
<div style="max-width:640px;margin:0 auto;padding:24px">
  <div style="background:#143d4b;color:#fff;border-radius:12px 12px 0 0;padding:18px 22px">
    <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#ffb44d">Landing Lilmod · suivi des visites</div>
    <div style="font-size:20px;font-weight:bold;margin-top:4px">${esc(subjectParts.join(' · '))}</div>
  </div>
  <div style="background:#fff;border:1px solid #dce4e3;border-top:0;border-radius:0 0 12px 12px;padding:18px 22px">
    <table style="width:100%;border-collapse:collapse">${rows.map(([k, v]) => `
      <tr><td style="padding:6px 12px 6px 0;color:#566771;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:bold">${esc(v)}</td></tr>`).join('')}
    </table>
    <h3 style="margin:22px 0 8px;font-size:15px">Parcours</h3>
    <table style="width:100%;border-collapse:collapse">${timeline.map((e) => `
      <tr><td style="padding:5px 12px 5px 0;color:#07839d;font-family:monospace;white-space:nowrap;vertical-align:top;border-top:1px solid #eef2f2">${fmtOffset(e.t - start)}</td><td style="padding:5px 0;border-top:1px solid #eef2f2">${HTML_EVENTS.has(e.type) ? describeEvent(e) : esc(describeEvent(e))}</td></tr>`).join('')}
    </table>
    ${consent !== 'full' ? '<p style="color:#566771;font-size:12px;margin-top:14px">Le visiteur n’a pas accepté la mesure d’audience : conformément au RGPD, seule l’ouverture de la page est enregistrée.</p>' : ''}
  </div>
  <p style="color:#8a979e;font-size:11px;text-align:center">Page : https://www.formation-competences.fr/lilmod-2e3f4a5 · visite ${esc(visit.sid.slice(0, 8))}</p>
</div></body></html>`;

    const text = [
        subjectParts.join(' · '), '',
        ...rows.map(([k, v]) => `${k} : ${v}`), '',
        'Parcours :',
        ...timeline.map((e) => `${fmtOffset(e.t - start)}  ${describeEvent(e).replace(/<[^>]+>/g, '')}`),
    ].join('\n');

    return { subject, html, text };
}

/** Envoie l'e-mail via Brevo. Sans clé API : écrit l'e-mail dans les logs et renvoie dryRun. */
export async function sendReport(report, env = process.env, fetchImpl = fetch) {
    const to = String(env.NOTIFY_EMAILS || '').split(',').map((s) => s.trim()).filter(Boolean);
    if (!env.BREVO_API_KEY || !env.NOTIFY_FROM || !to.length) {
        console.log('[visits] dry run (BREVO_API_KEY, NOTIFY_FROM ou NOTIFY_EMAILS manquant)\n' + report.subject + '\n' + report.text);
        return { ok: true, dryRun: true };
    }
    const res = await fetchImpl('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
            sender: { email: env.NOTIFY_FROM, name: env.NOTIFY_FROM_NAME || 'Suivi landing Lilmod' },
            to: to.map((email) => ({ email })),
            subject: report.subject,
            htmlContent: report.html,
            textContent: report.text,
        }),
    });
    if (!res.ok) {
        console.error('[visits] Brevo', res.status, await res.text().catch(() => ''));
        return { ok: false, status: res.status };
    }
    return { ok: true };
}

/** Traite les visites terminées : envoi du récapitulatif puis suppression. */
export async function flushVisits(store, { now = Date.now(), send = sendReport } = {}) {
    const keys = [];
    let cursor;
    do {
        const page = await store.list({ prefix: PREFIX, ...(cursor ? { cursor } : {}) });
        keys.push(...page.blobs.map((b) => b.key));
        cursor = page.cursor;
    } while (cursor);

    const results = [];
    for (const v of finishedVisits(keys, now)) {
        if (!v.idle && !v.tooLong && !v.recentLeaveCheck) continue;
        const entries = await Promise.all(v.keys.map((k) => store.get(k, { type: 'json' }).catch(() => null)));
        const visit = mergeEntries(v.sid, entries);
        if (!v.idle && !v.tooLong && !hasLeft(visit)) continue;
        const res = visit.events.length ? await send(buildReport(visit)) : { ok: true };
        if (res.ok || v.giveUp) await Promise.all(v.keys.map((k) => store.delete(k)));
        results.push({ sid: v.sid, ok: res.ok, events: visit.events.length });
    }
    return results;
}
