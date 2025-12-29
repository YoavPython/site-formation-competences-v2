import { Component } from '../js/core/Component.js';

export class PolitiqueConfidentialitePage extends Component {
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
                            <h1 class="hero-title fade-in">Politique de confidentialité</h1>
                        </div>
                    </div>
                </section>

                <!-- Contenu légal -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-intro slide-up">
                            <p>Groupe Formation Compétences accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web formation-competences.fr.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>1. Responsable du traitement</h2>
                            <p>Le responsable du traitement des données personnelles est :</p>
                            <ul>
                                <li><strong>Groupe Formation Compétences</strong></li>
                                <li><strong>Adresse :</strong> [À compléter]</li>
                                <li><strong>Email :</strong> contact@formation-competences.fr</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>2. Données collectées</h2>
                            <p>Nous collectons les données personnelles suivantes :</p>
                            
                            <h3>2.1. Données fournies directement par vous</h3>
                            <ul>
                                <li><strong>Formulaire de contact :</strong> nom, prénom, adresse email, numéro de téléphone, situation professionnelle, objectif, message</li>
                                <li><strong>Demande de rappel :</strong> informations similaires pour vous recontacter</li>
                            </ul>

                            <h3>2.2. Données collectées automatiquement</h3>
                            <ul>
                                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages consultées, durée de visite</li>
                                <li><strong>Cookies :</strong> voir la section dédiée ci-dessous</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>3. Finalités du traitement</h2>
                            <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
                            <ul>
                                <li>Répondre à vos demandes d'information et de contact</li>
                                <li>Vous proposer un accompagnement adapté à votre situation</li>
                                <li>Vous recontacter dans le cadre de votre projet professionnel</li>
                                <li>Améliorer nos services et notre site web</li>
                                <li>Établir des statistiques de fréquentation</li>
                                <li>Respecter nos obligations légales</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>4. Base légale du traitement</h2>
                            <p>Le traitement de vos données personnelles repose sur :</p>
                            <ul>
                                <li><strong>Votre consentement</strong> : lorsque vous remplissez un formulaire de contact</li>
                                <li><strong>L'exécution d'un contrat</strong> : dans le cadre de nos prestations d'accompagnement</li>
                                <li><strong>L'intérêt légitime</strong> : pour améliorer nos services et notre communication</li>
                                <li><strong>Les obligations légales</strong> : conservation des données requises par la loi</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>5. Destinataires des données</h2>
                            <p>Vos données personnelles peuvent être transmises à :</p>
                            <ul>
                                <li>Nos équipes internes (conseillers, service administratif)</li>
                                <li>Nos organismes partenaires certifiés Qualiopi (uniquement avec votre accord explicite)</li>
                                <li>Nos prestataires techniques (hébergement, outils de gestion)</li>
                            </ul>
                            <p>Nous ne vendons ni ne louons vos données personnelles à des tiers.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>6. Durée de conservation</h2>
                            <p>Vos données personnelles sont conservées pendant :</p>
                            <ul>
                                <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                                <li><strong>Données clients :</strong> durée de la relation contractuelle + 5 ans (obligations légales)</li>
                                <li><strong>Cookies :</strong> 13 mois maximum</li>
                            </ul>
                            <p>Au-delà de ces durées, vos données sont supprimées ou anonymisées.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>7. Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul>
                                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                                <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
                                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                                <li><strong>Droit à la limitation :</strong> demander la suspension du traitement</li>
                                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                            </ul>
                            <p>Pour exercer ces droits, contactez-nous à : <strong>contact@formation-competences.fr</strong></p>
                            <p>Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a></p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>8. Cookies</h2>
                            
                            <h3>8.1. Qu'est-ce qu'un cookie ?</h3>
                            <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web.</p>

                            <h3>8.2. Cookies utilisés sur notre site</h3>
                            <ul>
                                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                                <li><strong>Cookies analytiques :</strong> pour mesurer l'audience et améliorer le site (Google Analytics ou équivalent)</li>
                            </ul>

                            <h3>8.3. Gestion des cookies</h3>
                            <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter votre expérience de navigation.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>9. Sécurité des données</h2>
                            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction :</p>
                            <ul>
                                <li>Connexion sécurisée HTTPS</li>
                                <li>Accès restreint aux données personnelles</li>
                                <li>Hébergement sécurisé</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>10. Transfert de données hors UE</h2>
                            <p>Certains de nos prestataires techniques peuvent être situés hors de l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, certifications).</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>11. Modification de la politique</h2>
                            <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur notre site. Nous vous encourageons à la consulter régulièrement.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>12. Contact</h2>
                            <p>Pour toute question concernant cette politique de confidentialité ou vos données personnelles :</p>
                            <ul>
                                <li><strong>Email :</strong> contact@formation-competences.fr</li>
                                <li><strong>Courrier :</strong> [Adresse à compléter]</li>
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
        console.log('PolitiqueConfidentialitePage montée');
    }
}
