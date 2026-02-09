/**
 * Loader pour la page 404
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { NotFoundPage } from '../pages/NotFoundPage.js';

async function initPage() {
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const page = new NotFoundPage();
        page.render(mainRoot);
    }
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
