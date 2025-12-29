import BasePage from './BasePage.js';

export class PolitiqueConfidentialitePage extends BasePage {
    constructor() {
        super();
        this.title = 'Politique de Confidentialité - Groupe Formation Compétences';
    }

    render() {
        return `
            <div class="page-content legal-page">
                <!-- Hero Section -->
                <section class="legal-hero">
                    <div class="container">
                        <h1 class="fade-in">Politique de confidentialité</h1>
                        <p class="legal-subtitle slide-up">Protection de vos données personnelles</p>
                    </div>
                </section>

                <!-- Contenu -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-section">
                            <h2>1. Introduction</h2>
                            <p>La présente politique de confidentialité a pour but de vous informer sur la manière dont Groupe Formation Compétences collecte et traite vos données personnelles, dans le respect du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.</p>
                            <p>Nous attachons une grande importance à la protection de vos données personnelles et nous nous engageons à les traiter de manière licite, loyale et transparente.</p>
                        </div>

                        <div class="legal-section">
                            <h2>2. Responsable du traitement</h2>
                            <div class="data-info">
                                <p><strong>Raison sociale :</strong> GROUPE FORMATION COMPETENCES</p>
                                <p><strong>Siège social :</strong> 16 RUE CUVIER, 69006 LYON</p>
                                <p><strong>SIREN :</strong> 918 325 796</p>
                                <p><strong>Email :</strong> <a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a></p>
                                <p><strong>DPO :</strong> <a href="mailto:dpo@groupe-formation-competences.fr">dpo@groupe-formation-competences.fr</a></p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>3. Données collectées</h2>
                            <p>Nous collectons les données personnelles suivantes :</p>
                            <ul class="cookies-list">
                                <li><strong>Données d'identification :</strong> nom, prénom</li>
                                <li><strong>Coordonnées :</strong> adresse email, numéro de téléphone</li>
                                <li><strong>Données professionnelles :</strong> situation professionnelle, objectifs de formation</li>
                                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>4. Finalités du traitement</h2>
                            <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
                            <ul class="cookies-list">
                                <li>Répondre à vos demandes d'information et de contact</li>
                                <li>Vous proposer un accompagnement personnalisé adapté à votre situation</li>
                                <li>Gérer votre dossier de bilan de compétences ou de VAE</li>
                                <li>Améliorer nos services et notre site web</li>
                                <li>Respecter nos obligations légales et réglementaires</li>
                                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>5. Base légale du traitement</h2>
                            <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
                            <ul class="cookies-list">
                                <li><strong>Consentement :</strong> pour l'envoi d'informations commerciales</li>
                                <li><strong>Exécution d'un contrat :</strong> pour la gestion de votre bilan de compétences</li>
                                <li><strong>Obligation légale :</strong> pour le respect des obligations comptables et fiscales</li>
                                <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>6. Destinataires des données</h2>
                            <p>Vos données personnelles sont destinées aux services internes de Groupe Formation Compétences.</p>
                            <p>Elles peuvent également être transmises à :</p>
                            <ul class="cookies-list">
                                <li>Nos organismes partenaires de formation (avec votre accord)</li>
                                <li>Les organismes de financement (CPF, OPCO, France Travail) dans le cadre de votre dossier</li>
                                <li>Nos prestataires techniques (hébergement, analytics) sous engagement de confidentialité</li>
                                <li>Les autorités compétentes sur demande légale</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>7. Durée de conservation</h2>
                            <p>Vos données sont conservées pendant les durées suivantes :</p>
                            <ul class="cookies-list">
                                <li><strong>Demandes de contact :</strong> 3 ans à compter du dernier contact</li>
                                <li><strong>Dossiers de formation :</strong> durée légale de conservation (documents comptables : 10 ans)</li>
                                <li><strong>Cookies :</strong> 13 mois maximum</li>
                            </ul>
                            <p>À l'issue de ces durées, vos données sont supprimées ou anonymisées.</p>
                        </div>

                        <div class="legal-section">
                            <h2>8. Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul class="cookies-list">
                                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                                <li><strong>Droit de rectification :</strong> faire corriger vos données inexactes ou incomplètes</li>
                                <li><strong>Droit à l'effacement :</strong> obtenir la suppression de vos données dans certaines conditions</li>
                                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes</li>
                                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                                <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
                            </ul>
                            
                            <div class="data-info">
                                <p><strong>Pour exercer vos droits :</strong></p>
                                <p>Envoyez un email à : <a href="mailto:dpo@groupe-formation-competences.fr">dpo@groupe-formation-competences.fr</a></p>
                                <p>Ou écrivez-nous à : GROUPE FORMATION COMPETENCES - 16 RUE CUVIER, 69006 LYON</p>
                                <p>Nous nous engageons à vous répondre dans un délai d'un mois.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>9. Réclamation</h2>
                            <p>Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :</p>
                            <div class="data-info">
                                <p>CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                                <p>Téléphone : 01 53 73 22 22</p>
                                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>10. Sécurité des données</h2>
                            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, notamment :</p>
                            <ul class="cookies-list">
                                <li>Chiffrement des données sensibles (SSL/TLS)</li>
                                <li>Contrôle d'accès aux données (authentification, autorisation)</li>
                                <li>Sauvegardes régulières</li>
                                <li>Sensibilisation du personnel à la protection des données</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>11. Cookies</h2>
                            <p>Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte déposés sur votre appareil lors de votre visite.</p>
                            
                            <h3>Types de cookies utilisés :</h3>
                            <ul class="cookies-list">
                                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (navigation, sécurité)</li>
                                <li><strong>Cookies analytiques :</strong> nous permettent de mesurer l'audience et d'améliorer le site</li>
                                <li><strong>Cookies de préférence :</strong> mémorisent vos choix (langue, région)</li>
                            </ul>

                            <p>Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies. Cependant, cela peut limiter certaines fonctionnalités du site.</p>
                        </div>

                        <div class="legal-section">
                            <h2>12. Transferts de données hors UE</h2>
                            <p>Vos données personnelles sont hébergées sur des serveurs situés au sein de l'Union Européenne. Nous ne transférons pas vos données en dehors de l'UE, sauf dans les cas suivants avec garanties appropriées :</p>
                            <ul class="cookies-list">
                                <li>Utilisation de services cloud conformes au RGPD</li>
                                <li>Clauses contractuelles types approuvées par la Commission européenne</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>13. Modifications</h2>
                            <p>Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>
                        </div>

                        <div class="legal-footer">
                            <p><em>Dernière mise à jour : Décembre 2025</em></p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
