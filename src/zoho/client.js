/**
 * Client OAuth Zoho CRM.
 *
 * Utilise un refresh token (OAuth 2.0 self-client) pour générer
 * un access token, mis en cache 50 minutes (l'API Zoho délivre 1h).
 *
 * Référence API :
 *   https://www.zoho.com/crm/developer/docs/api/v8/refresh.html
 *
 * Variables d'environnement requises (mode `live` ou `shadow`) :
 *   - ZOHO_CLIENT_ID
 *   - ZOHO_CLIENT_SECRET
 *   - ZOHO_REFRESH_TOKEN
 *   - ZOHO_ACCOUNTS_DOMAIN  (ex: https://accounts.zoho.eu)
 *   - ZOHO_API_DOMAIN       (ex: https://www.zohoapis.eu)
 */

const ACCESS_TOKEN_TTL_MS = 50 * 60 * 1000;

let tokenCache = {
    accessToken: null,
    expiresAt: 0,
};

function getEnv(name, { required = true } = {}) {
    const value = process.env[name];
    if (required && (!value || value.trim() === '')) {
        throw new Error(`[zoho] Variable d'environnement manquante : ${name}`);
    }
    return value;
}

async function fetchAccessToken() {
    const clientId = getEnv('ZOHO_CLIENT_ID');
    const clientSecret = getEnv('ZOHO_CLIENT_SECRET');
    const refreshToken = getEnv('ZOHO_REFRESH_TOKEN');
    const accountsDomain = getEnv('ZOHO_ACCOUNTS_DOMAIN');

    const params = new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
    });

    const url = `${accountsDomain}/oauth/v2/token`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || !payload.access_token) {
        const message = payload.error || `HTTP ${response.status}`;
        throw new Error(`[zoho] Echec refresh OAuth : ${message}`);
    }

    return payload.access_token;
}

async function getAccessToken({ forceRefresh = false } = {}) {
    const now = Date.now();
    if (!forceRefresh && tokenCache.accessToken && tokenCache.expiresAt > now) {
        return tokenCache.accessToken;
    }

    const accessToken = await fetchAccessToken();
    tokenCache = {
        accessToken,
        expiresAt: now + ACCESS_TOKEN_TTL_MS,
    };
    return accessToken;
}

function clearTokenCache() {
    tokenCache = { accessToken: null, expiresAt: 0 };
}

/**
 * Effectue une requête authentifiée vers l'API Zoho CRM.
 * Tente un refresh forcé sur 401 unique.
 */
async function zohoFetch(path, { method = 'GET', body, query } = {}) {
    const apiDomain = getEnv('ZOHO_API_DOMAIN');

    const url = new URL(path.startsWith('/') ? path : `/${path}`, apiDomain);
    if (query) {
        Object.entries(query).forEach(([k, v]) => {
            if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
        });
    }

    const doRequest = async (token) => {
        return fetch(url.toString(), {
            method,
            headers: {
                Authorization: `Zoho-oauthtoken ${token}`,
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined,
        });
    };

    let token = await getAccessToken();
    let response = await doRequest(token);

    if (response.status === 401) {
        clearTokenCache();
        token = await getAccessToken({ forceRefresh: true });
        response = await doRequest(token);
    }

    return response;
}

module.exports = {
    getAccessToken,
    clearTokenCache,
    zohoFetch,
};
