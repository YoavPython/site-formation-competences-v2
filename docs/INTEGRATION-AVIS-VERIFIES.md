# Intégration Avis Vérifiés sur le site

Ce guide explique comment connecter votre compte Avis Vérifiés au site Formation Compétences.

## 1. Créer un compte et récupérer les identifiants

1. Inscrivez-vous sur [Avis Vérifiés](https://www.avis-verifies.com/) (offre « Avis site » pour avis sur l’entreprise, pas seulement produits).
2. Dans l’espace client, allez dans **Config > Mon Compte** (ou équivalent).
3. Notez :
   - **Identifiant site web** (ou « Merchant ID »)
   - **Clé secrète** (pour les appels API si besoin)
   - L’**URL de votre page d’avis** (ex. `https://www.avis-verifies.com/...` ou lien personnalisé qu’ils vous donnent).

## 2. Afficher le badge dans le footer

Dans le fichier **`components/Footer.js`**, en haut du fichier, remplacez l’URL vide par l’URL de votre page Avis Vérifiés :

```javascript
const AVIS_VERIFIES_PAGE_URL = 'https://www.avis-verifies.com/votre-page';
```

Si vous laissez une chaîne vide `''`, le bloc Avis Vérifiés dans le footer ne s’affichera pas.

## 3. Intégrer le script officiel (badge dynamique / SEO)

Avis Vérifiés fournit un **code d’intégration** (souvent un `<script>` ou un iframe) depuis leur back office :

1. Dans votre espace Avis Vérifiés, ouvrez la section **Intégration** / **Badge** / **Code à installer**.
2. Copiez le code qu’ils donnent (ex. `<script src="https://...avis-verifies.../script.js"></script>` ou un bloc avec votre identifiant).
3. Collez ce code dans **chaque fichier HTML** du dossier `public/`, juste avant la balise `</body>` :
   - `public/index.html`
   - `public/actu.html`
   - `public/blog.html`
   - `public/faq.html`
   - etc.

Exemple de ce que vous pouvez voir (le format peut varier) :

```html
<!-- Avis Vérifiés - code fourni par la plateforme -->
<script type="text/javascript">
  (function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cl.avis-verifies.com/fr/XXXX/script.js'; // XXXX = votre identifiant
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();
</script>
```

Ce script permet en général :
- d’afficher un badge ou widget officiel,
- d’alimenter les avis dans les résultats Google (Rich Snippets),
- de synchroniser les avis avec leur plateforme.

## 4. Où le badge apparaît sur le site

- **Footer** : un bloc « Avis Vérifiés » avec note et lien vers votre page d’avis (dès que `AVIS_VERIFIES_PAGE_URL` est renseigné dans `Footer.js`).

Pour afficher en plus un badge sur la **page d’accueil** (au-dessus du footer), vous pouvez réutiliser le même composant ou le même lien dans `pages/HomePage.js`.

## Résumé

| Étape | Action |
|-------|--------|
| 1 | Compte Avis Vérifiés + récupérer identifiant site et URL de la page d’avis |
| 2 | Renseigner `AVIS_VERIFIES_PAGE_URL` dans `components/Footer.js` |
| 3 | Coller le script fourni par Avis Vérifiés dans tous les `public/*.html` avant `</body>` |

En cas de doute, le support Avis Vérifiés peut vous indiquer le code exact à installer pour votre compte.
