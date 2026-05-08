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

    // Désactive l'autoplay sur connexion lente ou en mode économiseur de données.
    // Évite de pomper la 4G/5G d'un visiteur mobile qui n'a rien demandé.
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowNetwork = conn && (conn.saveData || ['slow-2g', '2g', '3g'].includes(conn.effectiveType));
    if (slowNetwork) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
        return;
    }

    // Respecte la préférence "réduire les animations"
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
        return;
    }

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(() => {});
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.1 });

    videoObserver.observe(heroVideo);
}

// Lancer l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndexPage);
} else {
    initIndexPage();
}





