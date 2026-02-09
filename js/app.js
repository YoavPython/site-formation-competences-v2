/**
 * Point d'entrée principal de l'application SPA
 */

import { Router } from './core/Router.js';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

// Initialiser le router
const router = new Router();

// Initialiser les composants globaux
let navbar = null;
let footer = null;

/**
 * Initialise l'application
 */
async function initApp() {
    // Monter la navbar
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    
    // Monter le footer
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        footer = new Footer();
        footer.render(footerRoot);
    }
    
    // Configurer les routes
    router
        .register('/', () => import('../pages/HomePage.js').then(m => new m.HomePage()))
        .register('/bilan-competences', () => import('../pages/BilanCompetencesPage.js').then(m => new m.BilanCompetencesPage()))
        .register('/vae', () => import('../pages/VaePage.js').then(m => new m.VaePage()))
        .register('/mentions-legales', () => import('../pages/MentionsLegalesPage.js').then(m => new m.MentionsLegalesPage()))
        .register('/politique-confidentialite', () => import('../pages/PolitiqueConfidentialitePage.js').then(m => new m.PolitiqueConfidentialitePage()));
    
    // Hook après changement de route
    router.onAfterRouteChange((route) => {
        // Mettre à jour le titre de la page
        updatePageTitle(route.path);
        
        // Réinitialiser les animations si nécessaire
        initAnimations();
    });
    
    // Initialiser le router avec le conteneur principal
    const appRoot = document.getElementById('app-root');
    router.init(appRoot);
}

/**
 * Met à jour le titre de la page selon la route
 */
function updatePageTitle(path) {
    const titles = {
        '/': 'Accueil - Formation Compétences',
        '/bilan-competences': 'Bilan de Compétences - Formation Compétences',
        '/vae': 'VAE - Validation des Acquis de l\'Expérience - Formation Compétences',
        '/qui-sommes-nous': 'Qui sommes-nous ? - Formation Compétences',
        '/blog': 'Blog - Formation Compétences',
        '/faq': 'FAQ - Formation Compétences',
        '/actu': 'Bilan de compétences gratuit - Formation Compétences',
        '/mentions-legales': 'Mentions Légales - Formation Compétences',
        '/politique-confidentialite': 'Politique de Confidentialité - Formation Compétences'
    };
    
    document.title = titles[path] || 'Formation Compétences';
}

/**
 * Initialise les animations et interactions
 */
function initAnimations() {
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animations au scroll (intersection observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observer les éléments avec animation
    document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Utilitaires globaux
 */
window.app = {
    router,
    navigate: (path) => router.navigate(path),
    reload: () => router.handleRoute()
};

// Lancer l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}





