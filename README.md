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

3. Lancer le serveur de développement
```bash
npm start
```

Le site sera accessible à l'adresse : http://localhost:8080

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






