# Intégration du modèle email dans Zoho CRM

Utilisez le fichier **email-zoho-integration.html** : il ne contient **aucune** syntaxe de champ de fusion dans le HTML. Vous ajoutez les champs dans Zoho après avoir collé le code.

## Étapes

1. Dans Zoho CRM : **Configuration** → **Personnalisation** → **Modèles** → **Modèles d'e-mail** → **Nouveau modèle**.
2. **Objet** du mail :  
   `CPF & Bilan de compétences : plafonnement du financement — sécurisez avant le 1er mars`
3. Collez le **contenu** de `email-zoho-integration.html` dans le corps du modèle (mode HTML / Source).
4. Dans l’éditeur Zoho, utilisez **« Insérer un champ de fusion »** pour remplacer les **3 placeholders** suivants :

| Placeholder   | À remplacer par (module Contact) |
|---------------|----------------------------------|
| `[PRENOM]`    | Prénom (First Name)              |
| `[GESTIONNAIRE]` | Gestionnaire du Contact      |
| `[ID_CONTACT]`   | ID Contact                    |

### Emplacements

- **Bonjour [PRENOM],** → cliquer à la place de `[PRENOM]` → insérer le champ **Prénom** du contact.
- **Signature** : remplacer `[GESTIONNAIRE]` par le champ **Gestionnaire du Contact**.
- **Lien du bouton** : l’URL contient `id=[ID_CONTACT]&prenom=[PRENOM]`.  
  Remplacer `[ID_CONTACT]` par le champ **ID Contact** et `[PRENOM]` par le champ **Prénom** (même champ que pour « Bonjour »).

Après remplacement, chaque placeholder doit être exactement le champ de fusion Zoho (par ex. le prénom du contact, le nom du gestionnaire, l’ID du contact). L’URL du bouton restera correcte avec les paramètres `id` et `prenom` pour la page de confirmation et le webhook.
