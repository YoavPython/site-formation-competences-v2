import BasePage from './BasePage.js';

export class MentionsLegalesPage extends BasePage {
    constructor() {
        super();
        this.title = 'Mentions Légales - Groupe Formation Compétences';
    }

    render() {
        return `
            <div class="page-content legal-page">
                <!-- Hero Section -->
                <section class="legal-hero">
                    <div class="container">
                        <h1 class="fade-in">Mentions légales</h1>
                        <p class="legal-subtitle slide-up">Informations légales et réglementaires</p>
                    </div>
                </section>

                <!-- Contenu légal -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-section">
                            <h2>Éditeur du site</h2>
                            <div class="legal-info-grid">
                                <div class="info-item">
                                    <strong>Dénomination sociale :</strong>
                                    <span>GROUPE FORMATION COMPETENCES</span>
                                </div>
                                <div class="info-item">
                                    <strong>Forme juridique :</strong>
                                    <span>SASU, société par actions simplifiée unipersonnelle</span>
                                </div>
                                <div class="info-item">
                                    <strong>Capital social :</strong>
                                    <span>500,00 €</span>
                                </div>
                                <div class="info-item">
                                    <strong>Siège social :</strong>
                                    <span>16 RUE CUVIER, 69006 LYON</span>
                                </div>
                                <div class="info-item">
                                    <strong>Date de création :</strong>
                                    <span>09/08/2022</span>
                                </div>
                                <div class="info-item">
                                    <strong>SIREN :</strong>
                                    <span>918 325 796</span>
                                </div>
                                <div class="info-item">
                                    <strong>SIRET (siège) :</strong>
                                    <span>918 325 796 00012</span>
                                </div>
                                <div class="info-item">
                                    <strong>RCS :</strong>
                                    <span>918 325 796 R.C.S. Lyon</span>
                                </div>
                                <div class="info-item">
                                    <strong>N° TVA intracommunautaire :</strong>
                                    <span>FR84918325796</span>
                                </div>
                                <div class="info-item">
                                    <strong>Email :</strong>
                                    <span><a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a></span>
                                </div>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>Propriété intellectuelle</h2>
                            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                            <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                            <p>Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.</p>
                        </div>

                        <div class="legal-section">
                            <h2>Protection des données personnelles</h2>
                            <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
                            
                            <div class="data-info">
                                <p><strong>Responsable du traitement :</strong> Groupe Formation Compétences</p>
                                <p><strong>Finalité du traitement :</strong> Gestion des demandes de contact et d'information</p>
                                <p><strong>Base légale :</strong> Consentement de la personne concernée</p>
                            </div>

                            <p>Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:dpo@groupe-formation-competences.fr">dpo@groupe-formation-competences.fr</a></p>
                        </div>

                        <div class="legal-section">
                            <h2>Cookies</h2>
                            <p>Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de reconnaître votre navigateur et de mémoriser certaines informations.</p>
                            
                            <p><strong>Types de cookies utilisés :</strong></p>
                            <ul class="cookies-list">
                                <li>Cookies techniques nécessaires au fonctionnement du site</li>
                                <li>Cookies analytiques pour comprendre l'utilisation du site</li>
                                <li>Cookies de préférences pour mémoriser vos choix</li>
                            </ul>

                            <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter votre expérience de navigation.</p>
                        </div>

                        <div class="legal-section">
                            <h2>Limitation de responsabilité</h2>
                            <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                            <p>Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à <a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a>, en décrivant le problème de la manière la plus précise possible.</p>
                            <p>Groupe Formation Compétences ne saurait être tenu pour responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site.</p>
                        </div>

                        <div class="legal-section">
                            <h2>Droit applicable et juridiction compétente</h2>
                            <p>Les présentes mentions légales sont régies par le droit français. En cas de litige et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.</p>
                        </div>

                        <div class="legal-footer">
                            <p><em>Dernière mise à jour : Septembre 2025</em></p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
