# Intégration Zoho CRM — Guide setup

Ce document explique comment connecter le formulaire du site à Zoho CRM
en mode **safe** (validation référent), puis basculer en production.

---

## 1. Vue d'ensemble

Le code envoie les soumissions du formulaire vers le module **Contacts** de
Zoho CRM. Le comportement est piloté par la variable d'environnement
`ZOHO_MODE` (3 modes possibles) :

| Mode      | Appel Zoho ? | Triggers ?               | Quand l'utiliser                          |
|-----------|--------------|--------------------------|-------------------------------------------|
| `dry_run` | ❌ Non       | —                        | Dev local, avant credentials              |
| `shadow`  | ✅ Oui       | ❌ Aucun (`trigger: []`) | Validation par le référent technique      |
| `live`    | ✅ Oui       | ✅ workflow + approval + blueprint | Production                       |

> En mode `shadow`, les Contacts sont bien créés dans Zoho, mais **aucun
> workflow, blueprint, approval, pathfinder ou orchestration** ne sera
> déclenché. Idéal pour montrer le résultat à un référent sans perturber
> les processus en place.

---

## 2. Créer une application OAuth Zoho

1. Aller sur **https://api-console.zoho.com/** (avec un compte ayant les
   droits admin sur l'org Zoho CRM cible).

2. Cliquer **"ADD CLIENT"** puis choisir **"Self Client"**.
   - C'est le type le plus simple : pas de redirect URL nécessaire,
     parfait pour un serveur Node back-end.

3. Vous obtenez :
   - **Client ID** → `ZOHO_CLIENT_ID`
   - **Client Secret** → `ZOHO_CLIENT_SECRET`

4. Onglet **"Generate Code"** → renseigner :
   - **Scope** : `ZohoCRM.modules.contacts.CREATE,ZohoCRM.modules.contacts.READ`
     - (ajouter `ZohoCRM.settings.READ` si on veut explorer les champs)
   - **Time Duration** : 10 min (suffisant)
   - **Description** : `site-formation-competences server`

5. Cliquer **"Create"** → un code temporaire est généré (commence par `1000.xxx`).
   ⚠️ Ce code expire en 10 minutes : passer immédiatement à l'étape 3.

---

## 3. Échanger le code contre un refresh token

Adapter les domaines selon votre data center :
- Europe (par défaut) : `accounts.zoho.eu`
- USA : `accounts.zoho.com`

```bash
curl -X POST "https://accounts.zoho.eu/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=VOTRE_CLIENT_ID" \
  -d "client_secret=VOTRE_CLIENT_SECRET" \
  -d "code=LE_CODE_GENERE_A_L_ETAPE_2"
```

Réponse attendue :

```json
{
  "access_token": "1000.xxxxx...",
  "refresh_token": "1000.yyyyy...",
  "scope": "ZohoCRM.modules.contacts.CREATE ...",
  "expires_in": 3600,
  "api_domain": "https://www.zohoapis.eu",
  "token_type": "Bearer"
}
```

→ Récupérer le **`refresh_token`** : c'est `ZOHO_REFRESH_TOKEN`.
   Il est valable indéfiniment (sauf révocation explicite).

→ Récupérer **`api_domain`** : c'est `ZOHO_API_DOMAIN`.

---

## 4. Configurer le projet

```bash
cp .env.example .env
```

Éditer `.env` :

```env
ZOHO_MODE=shadow
ZOHO_CLIENT_ID=...
ZOHO_CLIENT_SECRET=...
ZOHO_REFRESH_TOKEN=...
ZOHO_ACCOUNTS_DOMAIN=https://accounts.zoho.eu
ZOHO_API_DOMAIN=https://www.zohoapis.eu
```

Redémarrer le serveur :

```bash
npm start
```

---

## 5. Tester

### Test connectivité OAuth

```bash
node scripts/test-zoho.js
```

### Test soumission formulaire

```bash
curl -X POST http://localhost:8080/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jean Test",
    "email": "jean.test@example.com",
    "phone": "+33612345678",
    "situation": "salarie",
    "objectif": "reconversion",
    "message": "Test depuis curl",
    "consent": true,
    "formType": "test-curl"
  }'
```

Réponse attendue :
- `dry_run` → `{ "ok": true, "mode": "dry_run", "simulated": true }`
- `shadow`  → `{ "ok": true, "mode": "shadow", "id": "..." }`
- `live`    → `{ "ok": true, "mode": "live", "id": "..." }`

---

## 6. Mapping des champs (Contacts)

| Champ formulaire    | Champ Zoho Contacts | Type     | Notes                          |
|---------------------|---------------------|----------|--------------------------------|
| `name` / `nom`      | `Last_Name`         | text     | Mandatory côté Zoho            |
| `prenom` (split)    | `First_Name`        | text     |                                |
| `email`             | `Email`             | email    |                                |
| `phone`/`telephone` | `Phone`             | phone    |                                |
| `formType`          | `Lead_Source`       | picklist | `Site - home`, `Site - eligibility`... |
| `utm_source`        | `Source`            | text     | custom                         |
| `utm_medium`        | `Medium`            | text     | custom                         |
| `utm_campaign`      | `Campagne`          | text     | custom                         |
| `page` (referer)    | `URL`               | text     | custom                         |
| `situation`/`objectif`/`experience`/`message` | `Description` | textarea | Concaténé lisible dans la description |

⚠️ **Volontairement minimaliste** pour la validation référent. Les champs
métier sensibles (`TYPE_DE_LEAD`, `Statut_d_appel`, `Lead_fourni_par`,
`Organisme_de_formation`...) ne sont **pas** remplis automatiquement.
Le référent pourra étendre le mapping dans `src/zoho/mapper.js` après revue.

---

## 7. Bascule en production

Une fois validé par le référent technique :

```env
ZOHO_MODE=live
```

Redémarrer le serveur. Les triggers Zoho (workflows, blueprints, etc.)
seront alors actifs sur les nouveaux contacts.

---

## 8. Sécurité

- `.env` est dans `.gitignore`. **Ne jamais commit** les credentials.
- Pour Netlify / Vercel / autre PaaS : injecter les variables via le
  dashboard de l'hébergeur (jamais dans le code).
- Le `refresh_token` Zoho est sensible : si compromis, le révoquer
  depuis https://accounts.zoho.eu/u/h#sessions/userauthtoken puis en
  régénérer un.
