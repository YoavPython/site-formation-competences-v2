/**
 * Netlify Scheduled Function (toutes les 5 minutes) : pour chaque visite terminée de la landing Lilmod,
 * archive la visite, envoie l'e-mail récapitulatif (Brevo) et, en cas d'échec, une alerte de secours
 * via Netlify Forms. Voir netlify/lib/visits.mjs et docs/SUIVI-VISITES-LILMOD.md.
 */
import { getStore } from '@netlify/blobs';
import { ARCHIVE_STORE_NAME, STORE_NAME, flushVisits } from '../lib/visits.mjs';

export default async () => {
    const results = await flushVisits(getStore(STORE_NAME), { archive: getStore(ARCHIVE_STORE_NAME) });
    if (results.length) console.log('[notify-visits]', JSON.stringify(results));
    return new Response(null, { status: 204 });
};

export const config = { schedule: '*/5 * * * *' };
