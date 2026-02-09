/**
 * Loader pour la page Politique de confidentialité
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { PolitiqueConfidentialitePage } from '../pages/PolitiqueConfidentialitePage.js';

async function initPage() {
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const page = new PolitiqueConfidentialitePage();
        page.render(mainRoot);
    }
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
