import { Component } from '../js/core/Component.js';

export class MentionsLegalesPage extends Component {
    constructor() {
        super();
    }

    template() {
        return `
            <div class="legal-page">
                <!-- Hero Section -->
                <section class="hero hero-page hero-legal">
                    <div class="hero-page-overlay"></div>
                    <div class="container">
                        <div class="hero-page-content">
                            <h1 class="hero-title fade-in">Mentions légales</h1>
                        </div>
                    </div>
                </section>

                <!-- Contenu légal -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-section slide-up">
                            <h2>1. Éditeur du site</h2>
                            <p>Le site <strong>formation-competences.fr</strong> est édité par :</p>
                            <ul>
                                <li><strong>Raison sociale :</strong> Groupe Formation Compétences</li>
                                <li><strong>Forme juridique :</strong> [À compléter]</li>
                                <li><strong>Capital social :</strong> [À compléter]</li>
                                <li><strong>Siège social :</strong> [Adresse à compléter]</li>
                                <li><strong>SIRET :</strong> [À compléter]</li>
                                <li><strong>N° TVA intracommunautaire :</strong> [À compléter]</li>
                                <li><strong>Téléphone :</strong> [À compléter]</li>
                                <li><strong>Email :</strong> contact@formation-competences.fr</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>2. Directeur de la publication</h2>
                            <p>Le directeur de la publication est : <strong>[Nom à compléter]</strong>, en qualité de [fonction à compléter].</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>3. Hébergement</h2>
                            <p>Le site est hébergé par :</p>
                            <ul>
                                <li><strong>Hébergeur :</strong> Netlify, Inc.</li>
                                <li><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, California 94107, USA</li>
                                <li><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener">www.netlify.com</a></li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>4. Propriété intellectuelle</h2>
                            <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de Groupe Formation Compétences ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
                            <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Groupe Formation Compétences.</p>
                            <p>Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>5. Limitation de responsabilité</h2>
                            <p>Groupe Formation Compétences s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.</p>
                            <p>Toutefois, Groupe Formation Compétences ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
                            <p>En conséquence, Groupe Formation Compétences décline toute responsabilité :</p>
                            <ul>
                                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                                <li>Et plus généralement de tout dommage direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>6. Liens hypertextes</h2>
                            <p>Le site peut contenir des liens hypertextes vers d'autres sites internet. Groupe Formation Compétences n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux pratiques de confidentialité de ces sites.</p>
                            <p>La mise en place de liens hypertextes vers le site formation-competences.fr nécessite une autorisation préalable et écrite de Groupe Formation Compétences.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>7. Cookies</h2>
                            <p>Le site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Pour en savoir plus sur notre utilisation des cookies, consultez notre <a href="/politique-confidentialite">Politique de confidentialité</a>.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>8. Données personnelles</h2>
                            <p>Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre <a href="/politique-confidentialite">Politique de confidentialité</a>.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>9. Droit applicable et juridiction compétente</h2>
                            <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>10. Contact</h2>
                            <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :</p>
                            <ul>
                                <li><strong>Par email :</strong> contact@formation-competences.fr</li>
                                <li><strong>Par courrier :</strong> [Adresse à compléter]</li>
                            </ul>
                        </div>

                        <p class="legal-update slide-up"><em>Dernière mise à jour : Décembre 2024</em></p>
                    </div>
                </section>

                <!-- Wave → Footer -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,60 C300,20 600,90 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z" class="wave-footer"></path>
                    </svg>
                </div>
            </div>
        `;
    }

    onMount() {
        console.log('MentionsLegalesPage montée');
    }
}
