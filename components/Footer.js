import { Component } from '../js/core/Component.js';

export class Footer extends Component {
    template() {
        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <path fill="white" d="M15 2a7 7 0 0 0-6.88 5.737a6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2" opacity=".25"/>
                                    <circle cx="7" cy="17" r="5" fill="white"/>
                                    <path fill="white" d="M11 7a6 6 0 0 0-5.97 5.406a4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7" opacity=".5"/>
                                </svg>
                                <h4 style="margin: 0;">Groupe Formation Compétences</h4>
                            </div>
                            <p>Votre partenaire pour une reconversion réussie</p>
                        </div>
                        <div class="footer-links">
                            <h5>Liens utiles</h5>
                            <ul>
                                <li><a href="/#methode">Notre méthode</a></li>
                                <li><a href="/#approche">Notre approche</a></li>
                                <li><a href="/#temoignages">Témoignages</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-legal">
                            <h5>Informations légales</h5>
                            <ul>
                                <li><a href="/mentions-legales" data-link>Mentions légales</a></li>
                                <li><a href="/politique-confidentialite" data-link>Politique de confidentialité</a></li>
                                <li><a href="/cgv" data-link>CGV</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} Groupe Formation Compétences. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}
