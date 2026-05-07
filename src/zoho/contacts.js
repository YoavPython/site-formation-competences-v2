/**
 * Création de Contacts Zoho CRM, avec 3 modes de fonctionnement :
 *
 *   1. dry_run  → ne contacte JAMAIS Zoho. Logge la charge utile.
 *                 Utile en dev local et avant la validation du référent.
 *
 *   2. shadow   → crée le Contact dans Zoho mais avec `trigger: []`.
 *                 Aucun workflow, blueprint, approval, pathfinder ni
 *                 orchestration ne sera déclenché. Le contact est
 *                 visible dans Zoho mais "passif" : parfait pour la
 *                 démo au référent technique Lead Gen.
 *
 *   3. live     → mode de production. Triggers par défaut côté Zoho.
 *
 * Le mode est piloté par la variable d'environnement ZOHO_MODE.
 * Par défaut : `dry_run` (sécurité maximale).
 */

const { zohoFetch } = require('./client');
const { mapToZohoContact } = require('./mapper');

const VALID_MODES = ['dry_run', 'shadow', 'live'];

function getMode() {
    const mode = (process.env.ZOHO_MODE || 'dry_run').toLowerCase();
    if (!VALID_MODES.includes(mode)) {
        console.warn(`[zoho] ZOHO_MODE="${mode}" invalide. Bascule sur "dry_run".`);
        return 'dry_run';
    }
    return mode;
}

function isZohoConfigured() {
    return Boolean(
        process.env.ZOHO_CLIENT_ID &&
        process.env.ZOHO_CLIENT_SECRET &&
        process.env.ZOHO_REFRESH_TOKEN &&
        process.env.ZOHO_ACCOUNTS_DOMAIN &&
        process.env.ZOHO_API_DOMAIN
    );
}

/**
 * Crée un Contact dans Zoho CRM.
 * @returns {Promise<{ ok: boolean, mode: string, id?: string, contact: object, raw?: any, error?: string }>}
 */
async function createContact(payload, meta = {}) {
    const mode = getMode();
    const contact = mapToZohoContact(payload, meta);

    if (mode === 'dry_run') {
        console.log('[zoho][dry_run] Contact qui SERAIT envoyé :');
        console.log(JSON.stringify({ contact, meta }, null, 2));
        return { ok: true, mode, contact, simulated: true };
    }

    if (!isZohoConfigured()) {
        const error = 'Credentials Zoho manquants (voir .env.example).';
        console.error(`[zoho] ${error}`);
        return { ok: false, mode, contact, error };
    }

    const triggers = mode === 'shadow' ? [] : ['workflow', 'approval', 'blueprint'];

    const body = {
        data: [contact],
        trigger: triggers,
    };

    let response;
    try {
        response = await zohoFetch('/crm/v8/Contacts', {
            method: 'POST',
            body,
        });
    } catch (e) {
        console.error('[zoho] Erreur réseau :', e.message);
        return { ok: false, mode, contact, error: e.message };
    }

    let json;
    try {
        json = await response.json();
    } catch {
        json = null;
    }

    if (!response.ok) {
        const detail = json?.data?.[0]?.message || json?.message || `HTTP ${response.status}`;
        console.error('[zoho] Echec création Contact :', detail, json);
        return { ok: false, mode, contact, error: detail, raw: json };
    }

    const record = json?.data?.[0];
    if (record?.status !== 'success') {
        const detail = record?.message || 'Réponse inattendue de Zoho';
        console.error('[zoho] Création non confirmée :', detail, record);
        return { ok: false, mode, contact, error: detail, raw: json };
    }

    const id = record?.details?.id;
    console.log(`[zoho][${mode}] Contact créé : id=${id}`);
    return { ok: true, mode, id, contact, raw: json };
}

module.exports = {
    createContact,
    getMode,
    isZohoConfigured,
    VALID_MODES,
};
