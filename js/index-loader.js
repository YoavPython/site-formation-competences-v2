/**
 * Loader pour la page d'accueil
 * Charge les composants modulaires dans la page HTML existante
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { HomePage } from '../pages/HomePage.js';

// Initialiser la page
async function initIndexPage() {
    // Monter la navbar
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    
    // Monter le contenu principal
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const homePage = new HomePage();
        homePage.render(mainRoot);
    }
    
    // Monter le footer
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
    
    // Initialiser les animations
    initAnimations();
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
    
    // Gestion de la vidéo hero - relancer quand elle redevient visible
    initHeroVideo();
}

/**
 * Gère la lecture de la vidéo hero en fonction de sa visibilité
 * Les navigateurs mettent en pause les vidéos hors viewport pour économiser les ressources
 */
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    if (!heroVideo) return;
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // La vidéo est visible, on la relance
                heroVideo.play().catch(() => {
                    // Ignorer les erreurs (ex: autoplay bloqué)
                });
            } else {
                // La vidéo est hors écran, on la met en pause pour économiser les ressources
                heroVideo.pause();
            }
        });
    }, {
        threshold: 0.1 // Déclencher quand 10% de la vidéo est visible
    });
    
    videoObserver.observe(heroVideo);
}

// Lancer l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndexPage);
} else {
    initIndexPage();
}





