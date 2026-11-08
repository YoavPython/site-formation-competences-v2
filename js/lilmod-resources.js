/**
 * Landing Lilmod — programmes des 3 bilans (présentations Gamma intégrées) et liens Mon Compte Formation.
 *
 * - Les programmes viennent de https://lilmod-formation.fr/nos-formations/ (iframes gamma.app).
 *   gamma.app étant un service tiers, l'iframe n'est chargée qu'avec le consentement « Contenus intégrés ».
 * - MCF_LINKS : fiches moncompteformation.gouv.fr par parcours. Tant qu'une URL est vide,
 *   le bouton CPF correspondant reste masqué (aucun lien cassé publié).
 */

/** @type {Record<string, string>} id du parcours → URL de la fiche Mon Compte Formation */
const MCF_LINKS = {
    'droit-au-but': '',
    'transition-eclairee': '',
    'vision-360': '',
};

function isMcfUrl(url) {
    try {
        const { protocol, hostname } = new URL(url);
        return protocol === 'https:' && (hostname === 'moncompteformation.gouv.fr' || hostname.endsWith('.moncompteformation.gouv.fr'));
    } catch {
        return false;
    }
}

function initTabs(root) {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const select = (tab, focus = false) => {
        tabs.forEach((t) => {
            const on = t === tab;
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
            document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
        if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', (e) => {
            const delta = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
            if (!delta) return;
            e.preventDefault();
            select(tabs[(i + delta + tabs.length) % tabs.length], true);
        });
    });
}

function syncEmbeds(consent) {
    const allowed = Boolean(consent?.embeds);
    document.querySelectorAll('[data-gamma]').forEach((frame) => {
        const placeholder = frame.parentElement.querySelector('[data-embed-placeholder]');
        if (allowed && !frame.src) frame.src = frame.dataset.gamma;
        if (!allowed && frame.src) frame.removeAttribute('src');
        frame.hidden = !allowed;
        if (placeholder) placeholder.hidden = allowed;
    });
}

function initMcf() {
    document.querySelectorAll('[data-mcf]').forEach((a) => {
        const url = MCF_LINKS[a.dataset.mcf];
        if (url && isMcfUrl(url)) {
            a.href = url;
            a.hidden = false;
        }
    });
}

function init() {
    const section = document.getElementById('programme');
    if (!section) return;
    initTabs(section);
    initMcf();
    section.querySelectorAll('[data-allow-embeds]').forEach((btn) => {
        btn.addEventListener('click', () => window.lilmodConsent?.allow('embeds'));
    });
    syncEmbeds(window.lilmodConsent?.get());
    window.lilmodConsent?.onChange(syncEmbeds);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
