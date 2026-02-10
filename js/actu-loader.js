/**
 * Loader pour la landing page Actu (CPF - info 1er mars)
 * Page non accessible depuis la navigation.
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { ActuPage } from '../pages/ActuPage.js';
import { initEligibilityModal } from './eligibilityModal.js';

async function initPage() {
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const page = new ActuPage();
        page.render(mainRoot);
    }
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
    initEligibilityModal();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.hasAttribute('data-open-eligibility-modal')) return;
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
