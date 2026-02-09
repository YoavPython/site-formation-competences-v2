import { Component } from '../js/core/Component.js';

export class PolitiqueConfidentialitePage extends Component {
    template() {
        return `
            <div class="page-content legal-page">
                <section class="legal-hero">
                    <div class="container">
                        <h1 class="fade-in">Politique de confidentialité</h1>
                        <p class="legal-subtitle slide-up">Protection de vos données personnelles</p>
                    </div>
                </section>

                <section class="legal-content">
                    <div class="container">
                        <div class="legal-section">
                            <h2>1. Cadre juridique</h2>
                            <p>La présente politique de confidentialité est établie conformément au :</p>
                            <ul class="cookies-list">
                                <li><strong>Règlement (UE) 2016/679 du 27 avril 2016</strong> (RGPD) relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</li>
                                <li><strong>Loi n° 78-17 du 6 janvier 1978</strong> relative à l'informatique, aux fichiers et aux libertés (dite « Loi Informatique et Libertés »), modifiée par la loi n° 2018-493 du 20 juin 2018 et le décret n° 2019-536 du 29 mai 2019.</li>
                            </ul>
                            <p>En France, la <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong> est l'autorité de contrôle compétente pour veiller au respect de ces textes.</p>
                        </div>

                        <div class="legal-section">
                            <h2>2. Responsable du traitement</h2>
                            <div class="legal-info-grid">
                                <div class="info-item"><strong>Raison sociale :</strong> GROUPE FORMATION COMPETENCES</div>
                                <div class="info-item"><strong>Forme juridique :</strong> SASU</div>
                                <div class="info-item"><strong>Siège social :</strong> 16 RUE CUVIER, 69006 LYON</div>
                                <div class="info-item"><strong>SIREN :</strong> 918 325 796</div>
                                <div class="info-item"><strong>Contact :</strong> <a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a></div>
                                <div class="info-item"><strong>Délégué à la protection des données (DPO) :</strong> <a href="mailto:dpo@groupe-formation-competences.fr">dpo@groupe-formation-competences.fr</a></div>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>3. Données collectées</h2>
                            <p>Nous sommes susceptibles de collecter les catégories de données suivantes :</p>
                            <ul class="cookies-list">
                                <li><strong>Données d'identification :</strong> nom, prénom</li>
                                <li><strong>Coordonnées :</strong> adresse électronique, numéro de téléphone</li>
                                <li><strong>Données relatives à votre situation :</strong> situation professionnelle, objectif (bilan de compétences, VAE, etc.)</li>
                                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages consultées (cookies)</li>
                            </ul>
                            <p>Les données sont collectées de manière minimale et proportionnée aux finalités poursuivies.</p>
                        </div>

                        <div class="legal-section">
                            <h2>4. Finalités et bases légales</h2>
                            <p>Vos données sont traitées pour les finalités suivantes, sur les bases légales indiquées :</p>
                            <ul class="cookies-list">
                                <li><strong>Réponse aux demandes de contact et d'information</strong> — exécution de mesures précontractuelles / intérêt légitime</li>
                                <li><strong>Gestion de l'accompagnement</strong> (bilan de compétences, VAE) — exécution du contrat</li>
                                <li><strong>Envoi d'informations sur nos services</strong> — consentement (révocable à tout moment)</li>
                                <li><strong>Respect des obligations légales et réglementaires</strong> (comptabilité, fiscalité) — obligation légale</li>
                                <li><strong>Amélioration du site et des services</strong> — intérêt légitime (cookies analytiques, sous réserve de votre consentement lorsque celui-ci est requis)</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>5. Destinataires et transferts</h2>
                            <p>Vos données sont destinées aux services internes habilités de Groupe Formation Compétences. Elles peuvent être transmises à :</p>
                            <ul class="cookies-list">
                                <li>Des organismes partenaires (formation, bilan, VAE) avec votre accord explicite</li>
                                <li>Des organismes de financement (CPF, OPCO, France Travail) dans le cadre strict de votre dossier</li>
                                <li>Des sous-traitants (hébergement, outils techniques) soumis à des obligations contractuelles de confidentialité et de sécurité</li>
                                <li>Les autorités compétentes en cas d'obligation légale</li>
                            </ul>
                            <p>Vos données sont hébergées au sein de l'<strong>Union européenne</strong>. Aucun transfert hors UE n'est effectué sans garanties appropriées (décision d'adéquation, clauses contractuelles types, etc.).</p>
                        </div>

                        <div class="legal-section">
                            <h2>6. Durée de conservation</h2>
                            <p>Conformément aux recommandations de la CNIL et aux obligations légales françaises :</p>
                            <ul class="cookies-list">
                                <li><strong>Prospects / demandes de contact :</strong> 3 ans à compter du dernier contact (recommandation CNIL)</li>
                                <li><strong>Dossiers clients (contrats, facturation) :</strong> 10 ans à compter de la clôture (obligations comptables et fiscales françaises)</li>
                                <li><strong>Cookies :</strong> 13 mois maximum pour les cookies soumis au consentement (recommandation CNIL)</li>
                            </ul>
                            <p>À l'issue de ces durées, les données sont supprimées ou anonymisées.</p>
                        </div>

                        <div class="legal-section">
                            <h2>7. Vos droits (RGPD et Loi Informatique et Libertés)</h2>
                            <p>Vous disposez des droits suivants :</p>
                            <ul class="cookies-list">
                                <li><strong>Droit d'accès</strong> (art. 15 RGPD, art. 49 de la loi 78-17) : obtenir la confirmation qu'un traitement existe et en recevoir une copie</li>
                                <li><strong>Droit de rectification</strong> (art. 16 RGPD) : faire corriger des données inexactes ou incomplètes</li>
                                <li><strong>Droit à l'effacement</strong> (art. 17 RGPD) : obtenir la suppression de vos données dans les cas prévus par la loi</li>
                                <li><strong>Droit à la limitation du traitement</strong> (art. 18 RGPD)</li>
                                <li><strong>Droit d'opposition</strong> (art. 21 RGPD, art. 56 de la loi 78-17) : vous opposer au traitement pour des motifs légitimes</li>
                                <li><strong>Droit à la portabilité</strong> (art. 20 RGPD) : recevoir vos données dans un format structuré et couramment utilisé</li>
                                <li><strong>Droit de retirer votre consentement</strong> à tout moment lorsque le traitement est fondé sur le consentement</li>
                            </ul>
                            <p><strong>Exercice des droits :</strong> adressez votre demande par email à <a href="mailto:dpo@groupe-formation-competences.fr">dpo@groupe-formation-competences.fr</a> ou par courrier à GROUPE FORMATION COMPETENCES, 16 RUE CUVIER, 69006 LYON.</p>
                            <p>Conformément au RGPD (art. 12), nous nous engageons à vous répondre <strong>dans un délai d'un mois</strong> à compter de la réception de votre demande. Ce délai peut être prolongé de deux mois en cas de demandes complexes ou nombreuses ; vous serez alors informé.</p>
                            <p><strong>Spécificité française – Directives relatives au sort des données après le décès :</strong> conformément à l'article 40-1 de la loi 78-17, vous pouvez définir des directives relatives au sort de vos données personnelles après votre décès (transmission à un tiers désigné ou suppression). Ces directives peuvent être enregistrées auprès d'un tiers de confiance certifié par la CNIL.</p>
                        </div>

                        <div class="legal-section">
                            <h2>8. Réclamation auprès de la CNIL</h2>
                            <p>Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD ou de la Loi Informatique et Libertés, vous avez le droit d'introduire une <strong>réclamation auprès de la CNIL</strong> (autorité de contrôle française) :</p>
                            <div class="data-info">
                                <p><strong>CNIL</strong> – Commission Nationale de l'Informatique et des Libertés</p>
                                <p>3 Place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07</p>
                                <p>Téléphone : 01 53 73 22 22</p>
                                <p>Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>9. Sécurité</h2>
                            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer un niveau de sécurité adapté au risque : contrôle d'accès, sauvegardes, sensibilisation du personnel, et pour les échanges sur le site, utilisation du protocole HTTPS (chiffrement).</p>
                        </div>

                        <div class="legal-section">
                            <h2>10. Cookies</h2>
                            <p>Le site utilise des cookies pour le fonctionnement technique, la mesure d'audience et, le cas échéant, la mémorisation de vos préférences. Conformément à la réglementation française (Loi 78-17 et lignes directrices CNIL), les cookies non strictement nécessaires requièrent votre consentement. Vous pouvez à tout moment modifier vos choix via les paramètres de votre navigateur ou notre outil de gestion des cookies si présent.</p>
                        </div>

                        <div class="legal-section">
                            <h2>11. Modifications</h2>
                            <p>Nous nous réservons le droit d'adapter la présente politique de confidentialité pour refléter les évolutions juridiques ou de nos pratiques. Toute modification sera publiée sur cette page avec indication de la date de mise à jour. Nous vous invitons à la consulter régulièrement.</p>
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
