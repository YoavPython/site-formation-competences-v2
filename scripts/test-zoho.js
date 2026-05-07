#!/usr/bin/env node
/**
 * Vérifie la connectivité avec Zoho CRM.
 *
 * Usage :
 *   node scripts/test-zoho.js              # vérifie l'OAuth + ping
 *   node scripts/test-zoho.js --create     # crée un Contact de test (mode courant)
 */

try { require('dotenv').config(); } catch (_) {}

const { getAccessToken, zohoFetch } = require('../src/zoho/client');
const { createContact, getMode, isZohoConfigured } = require('../src/zoho/contacts');

async function main() {
    const mode = getMode();
    console.log(`\n[test-zoho] Mode courant : ${mode}`);

    if (mode === 'dry_run') {
        console.log('[test-zoho] Mode dry_run → aucun appel réseau ne sera fait.');
        console.log('[test-zoho] Pour tester l\'auth Zoho, mettez ZOHO_MODE=shadow dans .env.\n');

        if (process.argv.includes('--create')) {
            const result = await createContact(
                {
                    name: 'Test Dryrun',
                    email: 'dryrun@example.com',
                    phone: '+33600000000',
                    situation: 'salarie',
                    objectif: 'reconversion',
                    message: 'Soumission de test (dry_run).',
                },
                {
                    source: 'Site - test-script',
                    page: 'http://localhost:8080/',
                    utm: { utm_source: 'cli', utm_medium: 'test' },
                    formType: 'test-script',
                }
            );
            console.log('\n[test-zoho] Résultat :', result);
        }
        return;
    }

    if (!isZohoConfigured()) {
        console.error('[test-zoho] ❌ Credentials Zoho manquants dans .env.');
        console.error('[test-zoho]    Voir docs/ZOHO-SETUP.md pour les obtenir.\n');
        process.exitCode = 1;
        return;
    }

    console.log('[test-zoho] → Récupération access token via refresh token...');
    let token;
    try {
        token = await getAccessToken({ forceRefresh: true });
    } catch (e) {
        console.error('[test-zoho] ❌ OAuth échoué :', e.message, '\n');
        process.exitCode = 1;
        return;
    }
    console.log(`[test-zoho] ✅ access_token reçu (${token.slice(0, 12)}...)`);

    console.log('[test-zoho] → Ping module Contacts (org/modules)...');
    const res = await zohoFetch('/crm/v8/settings/modules/Contacts', { method: 'GET' });
    if (!res.ok) {
        console.error(`[test-zoho] ❌ HTTP ${res.status} sur Contacts. Vérifier les scopes OAuth.`);
        const err = await res.text();
        console.error(err.slice(0, 500));
        process.exitCode = 1;
        return;
    }
    console.log('[test-zoho] ✅ Module Contacts accessible.');

    if (process.argv.includes('--create')) {
        console.log(`\n[test-zoho] → Création d'un Contact de test (mode ${mode})...`);
        const result = await createContact(
            {
                name: 'Test Integration',
                email: `test+${Date.now()}@formation-competences.test`,
                phone: '+33600000000',
                situation: 'salarie',
                objectif: 'reconversion',
                message: `Soumission de test depuis test-zoho.js (mode ${mode}).`,
            },
            {
                source: 'Site - test-script',
                page: 'http://localhost:8080/',
                utm: { utm_source: 'cli', utm_medium: 'test', utm_campaign: 'integration-check' },
                formType: 'test-script',
            }
        );
        if (result.ok) {
            console.log(`[test-zoho] ✅ Contact créé. id=${result.id}, mode=${result.mode}\n`);
        } else {
            console.error('[test-zoho] ❌ Echec création :', result.error, '\n');
            process.exitCode = 1;
        }
    } else {
        console.log('[test-zoho] (Ajouter --create pour tester aussi la création de Contact.)\n');
    }
}

main().catch((e) => {
    console.error('[test-zoho] Erreur fatale :', e);
    process.exit(1);
});
