/**
 * Netlify Scheduled Function (toutes les 5 minutes) : envoie un e-mail récapitulatif
 * pour chaque visite terminée de la landing Lilmod, puis efface ses données.
 * Configuration : voir netlify/lib/visits.mjs (BREVO_API_KEY, NOTIFY_EMAILS, NOTIFY_FROM).
 */
import { getStore } from '@netlify/blobs';
import { STORE_NAME, flushVisits } from '../lib/visits.mjs';

export default async () => {
    const results = await flushVisits(getStore(STORE_NAME));
    if (results.length) console.log('[notify-visits]', JSON.stringify(results));
    return new Response(null, { status: 204 });
};

export const config = { schedule: '*/5 * * * *' };
