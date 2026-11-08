/**
 * Landing Lilmod — bandeau de consentement cookies (conforme aux lignes directrices CNIL).
 *
 * - « Tout accepter » et « Tout refuser » au même niveau, sans case pré-cochée.
 * - Choix mémorisé 6 mois (localStorage), modifiable à tout moment via [data-open-cookies].
 * - Aucun traceur n'est déposé avant consentement : les scripts optionnels doivent
 *   s'abonner via window.lilmodConsent.onChange(cb) et ne se charger que si consent.audience === true.
 */
const STORAGE_KEY = 'lilmod_cookie_consent';
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 mois
const listeners = [];

function readConsent() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || typeof data.date !== 'number' || Date.now() - data.date > MAX_AGE_MS) return null;
        return data;
    } catch {
        return null;
    }
}

function saveConsent(audience) {
    const data = { necessary: true, audience: Boolean(audience), date: Date.now() };
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        /* stockage indisponible : le choix vaut pour la visite en cours */
    }
    current = data;
    listeners.forEach((cb) => {
        try { cb(data); } catch { /* ignore */ }
    });
    return data;
}

let current = readConsent();

window.lilmodConsent = {
    get: () => current,
    onChange(cb) {
        listeners.push(cb);
        if (current) cb(current);
    },
};

function init() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    const prefs = banner.querySelector('[data-cookie-prefs]');
    const audienceToggle = banner.querySelector('input[name="cookie-audience"]');

    const open = (showPrefs = false) => {
        if (audienceToggle) audienceToggle.checked = Boolean(current?.audience);
        if (prefs) prefs.hidden = !showPrefs;
        banner.hidden = false;
    };
    const close = () => { banner.hidden = true; };

    banner.addEventListener('click', (event) => {
        const action = event.target.closest('[data-cookie-action]')?.dataset.cookieAction;
        if (!action) return;
        if (action === 'accept') { saveConsent(true); close(); }
        if (action === 'refuse') { saveConsent(false); close(); }
        if (action === 'customize') { if (prefs) prefs.hidden = !prefs.hidden; }
        if (action === 'save') { saveConsent(audienceToggle?.checked); close(); }
    });

    document.querySelectorAll('[data-open-cookies]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('confidentialite')?.close?.();
            open(true);
        });
    });

    if (!current) open(false);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
