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

app.get('/mentions-legales', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mentions-legales.html'));
});

app.get('/qui-sommes-nous', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'qui-sommes-nous.html'));
});
app.get('/qui-sommes-nous/', (req, res) => {
    res.redirect(301, '/qui-sommes-nous');
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});
app.get('/faq/', (req, res) => {
    res.redirect(301, '/faq');
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});
app.get('/blog/', (req, res) => {
    res.redirect(301, '/blog');
});

app.get('/politique-confidentialite', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'politique-confidentialite.html'));
});

app.get('/actu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'actu.html'));
});
app.get('/actu/', (req, res) => {
    res.redirect(301, '/actu');
});

// Servir les fichiers du dossier public si besoin
app.use('/public', express.static(path.join(__dirname, 'public')));

// Diagnostic : route réservée au serveur Express (pour vérifier qu'on n'utilise pas http-server)
app.get('/api/server-check', (req, res) => {
    res.json({ server: 'express', ok: true });
});

// 404 : middleware en dernier (pas de regex Express 5, pas de wildcard)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Démarrer le serveur
const server = app.listen(PORT, () => {
    console.log(`\n[Express] Serveur démarré sur http://localhost:${PORT}`);
    console.log('  → Les routes /blog, /actu, /faq, etc. ne fonctionnent QU\'avec ce serveur.');
    console.log('  → N\'utilisez PAS : http-server, live-server, ou "Open with Live Server".\n');
    console.log('URLs : / | /bilan-de-competences | /vae | /qui-sommes-nous | /faq | /blog | /actu');
    console.log('Test : http://localhost:' + PORT + '/api/server-check\n');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('\n[ERREUR] Le port ' + PORT + ' est déjà utilisé.');
        console.error('  → Arrêtez l\'autre processus (ex: http-server, live-server) ou changez le port.');
        console.error('  → Sous Linux: lsof -i :' + PORT + '  puis  kill <PID>\n');
    } else throw err;
});
