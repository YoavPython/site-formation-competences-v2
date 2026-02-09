/**
 * Loader pour la page FAQ
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { FaqPage } from '../pages/FaqPage.js';

async function initPage() {
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const page = new FaqPage();
        page.render(mainRoot);
    }
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
    initAnimations();
}

function initAnimations() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
