/**
 * Landing Lilmod — programme PDF et liens Mon Compte Formation (CPF).
 *
 * Pour activer :
 *  1. Déposer le programme dans assets/lilmod/ sous le nom PROGRAMME_PDF ci-dessous.
 *  2. Renseigner MCF_LINKS avec la ou les fiches formation moncompteformation.gouv.fr.
 * Tant qu'un élément n'est pas disponible, son bloc reste masqué (aucun lien cassé publié).
 */
const PROGRAMME_PDF = '/assets/lilmod/programme-bilan-competences-lilmod.pdf';

/** @type {{ label: string, detail?: string, url: string }[]} */
const MCF_LINKS = [
    // { label: 'Bilan de compétences — 24 h', detail: '100 % à distance', url: 'https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/...' },
];

function isMcfUrl(url) {
    try {
        const { protocol, hostname } = new URL(url);
        return protocol === 'https:' && (hostname === 'moncompteformation.gouv.fr' || hostname.endsWith('.moncompteformation.gouv.fr'));
    } catch {
        return false;
    }
}

async function initProgramme() {
    const block = document.querySelector('[data-programme]');
    if (!block) return false;
    try {
        const res = await fetch(PROGRAMME_PDF, { method: 'HEAD' });
        const type = res.headers.get('content-type') || '';
        if (!res.ok || !type.includes('pdf')) return false;
    } catch {
        return false;
    }
    block.querySelectorAll('a[data-programme-link]').forEach((a) => { a.href = PROGRAMME_PDF; });
    block.hidden = false;
    return true;
}

function initMcf() {
    const block = document.querySelector('[data-mcf]');
    const list = block?.querySelector('[data-mcf-list]');
    const links = MCF_LINKS.filter((l) => l && l.label && isMcfUrl(l.url));
    if (!block || !list || links.length === 0) return false;
    list.replaceChildren(...links.map(({ label, detail, url }) => {
        const a = document.createElement('a');
        a.className = 'mcf-link';
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        const strong = document.createElement('strong');
        strong.textContent = label;
        a.append(strong);
        if (detail) {
            const span = document.createElement('span');
            span.textContent = detail;
            a.append(span);
        }
        const cta = document.createElement('em');
        cta.textContent = 'Voir sur Mon Compte Formation ↗';
        a.append(cta);
        return a;
    }));
    block.hidden = false;
    return true;
}

async function init() {
    const section = document.getElementById('programme');
    const [hasPdf, hasMcf] = await Promise.all([initProgramme(), Promise.resolve(initMcf())]);
    if (section && (hasPdf || hasMcf)) section.hidden = false;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
