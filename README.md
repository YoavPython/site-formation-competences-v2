# Groupe Formation Compétences

Site web pour accompagner les personnes dans leur bilan de compétences avec une approche structurée et personnalisée.

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le repository
```bash
git clone https://github.com/sfardea/gfc-formation-competences.git
cd gfc-formation-competences
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur (obligatoire : Express, pas de serveur statique)
```bash
npm start
```
Ou en mode dev avec rechargement : `npm run dev`

Le site sera accessible à : http://localhost:8080

**Important** : Les URLs `/blog`, `/actu`, `/faq`, `/qui-sommes-nous`, etc. ne fonctionnent **que** avec ce serveur Node (Express). N’utilisez pas `npm run old-start` (http-server), ni "Open with Live Server" dans l’éditeur, sinon vous obtiendrez « Cannot GET /blog » ou « Cannot GET /actu ». Pour vérifier que le bon serveur tourne : ouvrez http://localhost:8080/api/server-check (réponse attendue : server=express, ok=true). Sinon, un autre programme utilise le port 8080 ; voir la section Dépannage ci-dessous.

## Dépannage : « Cannot GET /blog » ou « Cannot GET /actu »

1. **Vérifier le serveur** : ouvrez http://localhost:8080/api/server-check  
   - Si vous voyez `{"server":"express","ok":true}` → le bon serveur tourne ; si /blog ou /actu ne s’affichent pas, rechargez la page ou vérifiez le cache.
   - Si vous voyez une erreur ou « Cannot GET /api/server-check » → un autre serveur utilise le port 8080.

2. **Libérer le port 8080** (puis relancer `npm start`) :
   - Linux / macOS : `lsof -i :8080` pour voir le processus, puis `kill <PID>` (ou `pkill -f "node server.js"` et `pkill -f "http-server"`).
   - Fermez tout onglet ou terminal qui aurait lancé un autre serveur (Live Server, http-server, ou un ancien `npm start`).

3. **Lancer uniquement le serveur Express** : dans le dossier du projet, exécutez `npm start` (ou `node server.js`). Ne lancez pas « Open with Live Server » ni `npm run old-start`.

## 📁 Structure du projet

```
gfc-formation-competences/
├── index.html          # Page principale
├── css/
│   └── styles.css      # Styles CSS
├── js/
│   └── main.js         # JavaScript principal
├── package.json        # Configuration npm
└── README.md          # Documentation
```

## 🎨 Caractéristiques

- **Design moderne et responsive** : Interface adaptée à tous les écrans
- **Navigation fluide** : Scroll smooth et menu mobile optimisé
- **Formulaire de contact** : Validation côté client et messages de feedback
- **Animations** : Effets visuels au scroll pour une meilleure expérience utilisateur
- **Performance** : Code optimisé et chargement rapide

## 🛠 Technologies utilisées

- HTML5
- CSS3 (avec variables CSS et Grid/Flexbox)
- JavaScript vanilla (ES6+)
- Font Awesome pour les icônes
- Google Fonts (Inter et Plus Jakarta Sans)

## 📝 Fonctionnalités principales

1. **Hero Section** : Présentation claire de la proposition de valeur
2. **Process en 3 étapes** : Explication détaillée de la méthodologie
3. **Témoignages** : Preuve sociale avec des retours clients
4. **Formulaire de contact** : Capture de leads qualifiés
5. **Section financement** : Information sur les options de financement

## 🔧 Personnalisation

### Modifier les couleurs
Les couleurs principales sont définies dans `css/styles.css` via les variables CSS :
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... */
}
```

### Ajouter des témoignages
Les témoignages peuvent être ajoutés dans la section correspondante du fichier `index.html`.

### Configurer l'envoi du formulaire
Le formulaire nécessite une intégration backend. Modifier la fonction `contactForm.addEventListener('submit', ...)` dans `js/main.js`.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints à :
- Mobile : < 480px
- Tablette : < 768px
- Desktop : > 768px

## 🚀 Déploiement

Le site peut être déployé sur n'importe quel serveur web statique :
- GitHub Pages
- Netlify
- Vercel
- Serveur Apache/Nginx

## 📄 Licence

© 2024 Groupe Formation Compétences. Tous droits réservés.

## 📞 Contact

Pour toute question ou demande d'information, contactez-nous via le formulaire sur le site.










