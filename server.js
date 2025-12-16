const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Servir les fichiers statiques (CSS, JS, images, etc.)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Servir le favicon depuis le dossier public
app.get('/favicon.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'favicon.svg'));
});

// Routes principales avec URLs propres
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/bilan-de-competences', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bilan-competences.html'));
});

app.get('/vae', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vae.html'));
});

// Servir les fichiers du dossier public si besoin
app.use('/public', express.static(path.join(__dirname, 'public')));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log('URLs disponibles:');
    console.log('  http://localhost:' + PORT + '/              → Page d\'accueil');
    console.log('  http://localhost:' + PORT + '/bilan-de-competences → Page Bilan de compétences');
    console.log('  http://localhost:' + PORT + '/vae           → Page VAE');
});
