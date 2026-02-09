import { Component } from '../js/core/Component.js';

export class NotFoundPage extends Component {
    template() {
        return `
            <div class="error-page">
                <section class="hero hero-page">
                    <div class="hero-page-overlay"></div>
                    <div class="container">
                        <div class="hero-page-content error-page-content">
                            <span class="error-code fade-in">404</span>
                            <h1 class="hero-title fade-in">Page non trouvée</h1>
                            <p class="hero-page-subtitle slide-up">La page que vous recherchez n'existe pas ou a été déplacée.</p>
                            <div class="hero-cta slide-up">
                                <a href="/" class="btn btn-primary btn-lg">
                                    <i class="fas fa-home"></i>
                                    Retour à l'accueil
                                </a>
                                <a href="/#contact" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-envelope"></i>
                                    Nous contacter
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
