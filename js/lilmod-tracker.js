/**
 * Landing Lilmod — suivi des visites (envoyé à /api/track, récapitulatif par e-mail côté serveur).
 *
 * Respect du consentement (bandeau js/lilmod-cookies.js, catégorie « Mesure d'audience ») :
 *  - Toujours : un signal d'ouverture minimal (page, provenance, type d'appareil), sans cookie
 *    ni stockage sur l'appareil, puis le choix fait dans le bandeau.
 *  - Avec accord : le parcours complet (sections vues, clics, défilement, formulaire, durée).
 *    Les actions faites avant l'accord sont envoyées au moment de l'accord.
 *  - Refus : les actions en mémoire sont effacées, plus rien n'est enregistré.
 * Les valeurs saisies dans le formulaire ne sont jamais suivies, sauf nom, téléphone et disponibilité
 * lors de l'envoi effectif d'une demande de rappel (et uniquement avec accord).
 */
const ENDPOINT = '/api/track';
const SID_KEY = 'lilmod_visit_id';
const FLUSH_MS = 5000;
const PING_MS = 15000;

const randomId = () => [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');

let mode = 'pending'; // pending | full | refused
let sid = randomId();
let buffer = [];
let flushTimer = null;
let pingTimer = null;

function record(type, data = {}) {
    if (mode === 'refused') return;
    buffer.push({ type, t: Date.now(), ...data });
    if (mode === 'full') scheduleFlush();
}

function send(events, consent, { beacon = false } = {}) {
    if (!events.length) return;
    const body = JSON.stringify({ sid, consent, events });
    try {
        if (beacon && navigator.sendBeacon) {
            navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
            return;
        }
        fetch(ENDPOINT, { method: 'POST', headers: { 'content-type': 'application/json' }, body, keepalive: true }).catch(() => {});
    } catch {
        /* le suivi ne doit jamais gêner la page */
    }
}

function flush(opts) {
    clearTimeout(flushTimer);
    flushTimer = null;
    if (mode !== 'full' || !buffer.length) return;
    while (buffer.length) send(buffer.splice(0, 50), 'full', opts);
}

function scheduleFlush() {
    if (!flushTimer) flushTimer = setTimeout(flush, FLUSH_MS);
}

/* ---------- Ouverture ---------- */

function deviceCategory() {
    const w = window.innerWidth;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    if (w < 768) return 'mobile';
    if (coarse && w < 1200) return 'tablet';
    return 'desktop';
}

function openEvent() {
    const params = new URLSearchParams(location.search);
    let referrer = '';
    try {
        const host = document.referrer ? new URL(document.referrer).host : '';
        if (host && host !== location.host) referrer = host;
    } catch { /* ignore */ }
    const e = { type: 'open', t: Date.now(), path: location.pathname, device: deviceCategory(), referrer };
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
        if (params.get(k)) e[k] = params.get(k);
    }
    return e;
}

/* ---------- Consentement ---------- */

function applyConsent(consent) {
    if (!consent) return;
    if (consent.audience && mode !== 'full') {
        mode = 'full';
        try {
            const kept = sessionStorage.getItem(SID_KEY);
            if (kept && /^[a-f0-9]{32}$/.test(kept) && kept !== sid) {
                // même onglet, page rechargée : on rattache à la visite en cours
                sid = kept;
            } else {
                sessionStorage.setItem(SID_KEY, sid);
            }
        } catch { /* ignore */ }
        buffer.push({ type: 'consent', t: Date.now(), label: 'acceptés' });
        flush();
        startPing();
    } else if (!consent.audience && mode !== 'refused') {
        const wasFull = mode === 'full';
        mode = 'refused';
        buffer = [];
        stopPing();
        try { sessionStorage.removeItem(SID_KEY); } catch { /* ignore */ }
        send([{ type: 'consent', t: Date.now(), label: wasFull ? 'acceptés puis refusés' : 'refusés' }], 'anon');
    }
}

/* ---------- Durée de visite ---------- */

function startPing() {
    stopPing();
    pingTimer = setInterval(() => {
        if (document.visibilityState === 'visible') record('ping');
    }, PING_MS);
}
function stopPing() {
    clearInterval(pingTimer);
}

/* ---------- Actions ---------- */

const SECTIONS = [
    ['.hero', 'Accueil'],
    ['#rappel', 'Formulaire de rappel'],
    ['#parcours', 'Le parcours'],
    ['#programme', 'Programme de formation'],
    ['.banner', 'Bandeau Parler à un conseiller'],
    ['#questions', 'Questions fréquentes'],
    ['footer', 'Pied de page'],
];

const FIELD_LABELS = {
    nom: 'Prénom et nom',
    telephone: 'Téléphone',
    email: 'E-mail',
    disponibilite: 'Disponibilité',
    consent: 'Case de consentement',
};

const text = (el) => (el?.dataset?.trackLabel || el?.getAttribute?.('aria-label') || el?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);

function linkKind(a) {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) return 'tel';
    if (href.startsWith('mailto:')) return 'mail';
    if (/\.pdf($|\?)/i.test(href)) return 'pdf';
    if (/moncompteformation\.gouv\.fr/.test(href)) return 'mcf';
    if (href.startsWith('#')) return 'anchor';
    try {
        if (new URL(href, location.href).host !== location.host) return 'external';
    } catch { /* ignore */ }
    return 'link';
}

function initActions() {
    document.addEventListener('click', (event) => {
        const el = event.target.closest('a, button, summary');
        if (!el || el.tagName === 'SUMMARY' || el.closest('#cookie-banner')) return;
        if (el.tagName === 'A') {
            record('click', { label: text(el), kind: linkKind(el), href: (el.getAttribute('href') || '').slice(0, 200) });
        } else {
            record('click', { label: text(el), kind: 'button' });
        }
    }, true);

    document.addEventListener('toggle', (event) => {
        const d = event.target;
        if (d.tagName === 'DETAILS' && d.open) record('details', { label: text(d.querySelector('summary')) });
    }, true);

    const seen = new Set();
    const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const label = entry.target.dataset.trackSection;
            const visibleEnough = entry.intersectionRatio >= 0.35 || entry.intersectionRect.height >= window.innerHeight * 0.5;
            if (entry.isIntersecting && visibleEnough && !seen.has(label)) {
                seen.add(label);
                record('section', { label });
                io.unobserve(entry.target);
            }
        }
    }, { threshold: [0, 0.35, 0.6] }) : null;
    for (const [selector, label] of SECTIONS) {
        const el = document.querySelector(selector);
        if (el && io) {
            el.dataset.trackSection = label;
            io.observe(el);
        }
    }

    const milestones = [25, 50, 75, 100];
    let scrollTick = false;
    window.addEventListener('scroll', () => {
        if (scrollTick) return;
        scrollTick = true;
        setTimeout(() => {
            scrollTick = false;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 100;
            while (milestones.length && pct >= milestones[0] - 2) record('scroll', { value: milestones.shift() });
        }, 250);
    }, { passive: true });

    const form = document.getElementById('contact');
    if (form) {
        let started = false;
        form.addEventListener('focusin', (event) => {
            if (!started && event.target.matches('input, select, textarea')) {
                started = true;
                record('form_start');
            }
        });
        form.addEventListener('change', (event) => {
            const name = event.target.name;
            if (FIELD_LABELS[name]) {
                const filled = event.target.type === 'checkbox' ? event.target.checked : Boolean(event.target.value);
                if (filled) record('form_field', { label: FIELD_LABELS[name] });
            }
        });
        let invalid = new Set();
        form.addEventListener('invalid', (event) => {
            if (!invalid.size) {
                setTimeout(() => {
                    record('form_invalid', { label: [...invalid].join(', ') });
                    invalid = new Set();
                }, 0);
            }
            invalid.add(FIELD_LABELS[event.target.name] || event.target.name);
        }, true);
    }
    document.addEventListener('lilmod:lead', (event) => {
        const d = event.detail || {};
        record('lead', { nom: d.nom, telephone: d.telephone, disponibilite: d.disponibilite });
        flush();
    });
    document.addEventListener('lilmod:lead-error', () => record('lead_error'));

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            record('hidden');
            flush({ beacon: true });
        } else {
            record('visible');
        }
    });

    window.addEventListener('pagehide', () => {
        if (mode === 'full') {
            record('leave');
            flush({ beacon: true });
        } else if (mode !== 'refused') {
            // Fin de visite sans accord : seul l'horodatage de fermeture, pour clôturer la visite.
            send([{ type: 'leave', t: Date.now() }], 'anon', { beacon: true });
        }
    });
}

/* ---------- Démarrage ---------- */

function init() {
    const open = openEvent();
    const consent = window.lilmodConsent?.get?.();
    if (consent?.audience) {
        buffer.push(open);
        applyConsent(consent);
    } else {
        // Signal d'ouverture minimal, envoyé sans attendre le consentement.
        const events = [{ type: 'open', t: open.t, path: open.path, device: open.device, referrer: open.referrer,
            utm_source: open.utm_source, utm_medium: open.utm_medium, utm_campaign: open.utm_campaign }];
        if (consent && !consent.audience) {
            mode = 'refused';
            events.push({ type: 'consent', t: open.t, label: 'refusés (choix déjà enregistré)' });
        }
        send(events, 'anon');
    }
    initActions();
    window.lilmodConsent?.onChange?.(applyConsent);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
