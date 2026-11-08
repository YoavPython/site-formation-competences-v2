/**
 * Landing Lilmod — lien Mon Compte Formation du bilan de compétences.
 *
 * Renseigner MCF_URL avec la fiche moncompteformation.gouv.fr de la formation.
 * Tant qu'elle est vide, le bouton reste masqué (aucun lien cassé publié).
 */
const MCF_URL = 'https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/91182949700013_LILMODBC13/91182949700013_LILMODBC13?contexteFormation=ACTIVITE_PROFESSIONNELLE';

function isMcfUrl(url) {
    try {
        const { protocol, hostname } = new URL(url);
        return protocol === 'https:' && (hostname === 'moncompteformation.gouv.fr' || hostname.endsWith('.moncompteformation.gouv.fr'));
    } catch {
        return false;
    }
}

function init() {
    if (!isMcfUrl(MCF_URL)) return;
    document.querySelectorAll('[data-mcf]').forEach((a) => {
        a.href = MCF_URL;
        a.hidden = false;
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
