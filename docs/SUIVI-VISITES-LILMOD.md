# Suivi des visites de la landing Lilmod

Chaque visite de `/lilmod-2e3f4a5` déclenche un e-mail récapitulatif envoyé aux destinataires configurés,
en général 1 à 10 minutes après la fin de la visite.

## Fonctionnement

| Élément | Rôle |
|---|---|
| `js/lilmod-tracker.js` | Enregistre l'ouverture et les actions dans le navigateur, envoie à `/api/track`. |
| `netlify/functions/track.mjs` | Reçoit les événements, ajoute la localisation approximative (Netlify), stocke dans Netlify Blobs (store `lilmod-visits`). L'adresse IP n'est pas conservée. |
| `netlify/functions/notify-visits.mjs` | Tâche programmée toutes les 5 min : pour chaque visite terminée (page fermée depuis 1 min, ou 10 min sans activité, ou 3 h max), envoie l'e-mail puis efface les données. |
| `netlify/lib/visits.mjs` | Validation, rédaction de l'e-mail, envoi via Brevo. |

## Consentement (RGPD / CNIL)

- **Sans accord** (cookies refusés ou bandeau ignoré) : seule l'ouverture est connue (date, provenance, appareil, ville approximative). E-mail « 👀 Ouverture ».
- **Avec accord** (« Mesure d'audience ») : parcours complet — sections vues, clics (PDF, Mon Compte Formation, téléphone…), défilement, FAQ dépliées, étapes du formulaire, durée. E-mail « 👀 Visite · durée ».
- **Demande de rappel envoyée** : e-mail « 🔥 Demande de rappel · Nom » avec nom, téléphone et disponibilité.
- Les valeurs saisies dans le formulaire ne sont jamais transmises avant l'envoi effectif de la demande.

## Configuration (Netlify > Site configuration > Environment variables)

| Variable | Valeur |
|---|---|
| `BREVO_API_KEY` | Clé API Brevo (brevo.com > SMTP & API > API keys). |
| `NOTIFY_FROM` | Adresse d'expéditeur **vérifiée** dans Brevo (Senders & IP > Senders). |
| `NOTIFY_FROM_NAME` | Optionnel, défaut « Suivi landing Lilmod ». |
| `NOTIFY_EMAILS` | Destinataires, séparés par des virgules. |

Tant que ces variables manquent, rien n'est envoyé : les e-mails sont seulement écrits dans les logs de la fonction
`notify-visits` (Netlify > Logs > Functions), ce qui permet de vérifier le fonctionnement.

Après avoir ajouté les variables : **Deploys > Trigger deploy > Deploy site** pour qu'elles soient prises en compte.

## Limites

- Une visite = un onglet. Un rechargement dans le même onglet reste la même visite (avec accord).
- Les robots connus sont ignorés ; certains scanners de liens (antivirus de messagerie) peuvent malgré tout générer une « ouverture ».
- Brevo gratuit : 300 e-mails / jour.
