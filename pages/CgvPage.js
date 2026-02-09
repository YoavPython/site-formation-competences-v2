import BasePage from './BasePage.js';

export class CgvPage extends BasePage {
    constructor() {
        super();
        this.title = 'Conditions Générales de Vente - Formation Compétences';
    }

    render() {
        return `
            <div class="page-content legal-page">
                <!-- Hero Section -->
                <section class="legal-hero">
                    <div class="container">
                        <h1 class="fade-in">Conditions Générales de Vente</h1>
                        <p class="legal-subtitle slide-up">Prestations de bilan de compétences et VAE</p>
                    </div>
                </section>

                <!-- Contenu -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-section">
                            <h2>1. Objet</h2>
                            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Formation Compétences et ses clients dans le cadre de la fourniture de prestations de bilan de compétences, de validation des acquis de l'expérience (VAE) et d'accompagnement à l'orientation professionnelle.</p>
                            <p>Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.</p>
                        </div>

                        <div class="legal-section">
                            <h2>2. Prestations proposées</h2>
                            <h3>2.1 Bilan de compétences</h3>
                            <p>Le bilan de compétences est réalisé conformément aux articles L. 6313-1 et suivants du Code du travail. Il comprend trois phases :</p>
                            <ul class="cookies-list">
                                <li><strong>Phase préliminaire :</strong> analyse de la demande et définition des besoins</li>
                                <li><strong>Phase d'investigation :</strong> exploration des compétences, motivations et possibilités d'évolution</li>
                                <li><strong>Phase de conclusion :</strong> élaboration du projet professionnel et plan d'action</li>
                            </ul>
                            <p><strong>Durée :</strong> 24 heures réparties sur 2 à 3 mois maximum</p>

                            <h3>2.2 VAE (Validation des Acquis de l'Expérience)</h3>
                            <p>Accompagnement personnalisé pour la validation de vos acquis de l'expérience en vue de l'obtention d'une certification professionnelle.</p>

                            <h3>2.3 Préparation à l'orientation</h3>
                            <p>Entretiens préparatoires pour clarifier votre projet avant d'engager un bilan ou une VAE.</p>
                        </div>

                        <div class="legal-section">
                            <h2>3. Tarifs</h2>
                            <p>Les tarifs de nos prestations sont indiqués en euros TTC. Ils sont communiqués lors du premier contact et confirmés dans le devis ou la convention de formation.</p>
                            
                            <div class="data-info">
                                <p><strong>Bilan de compétences :</strong> Tarif sur devis selon la formule choisie</p>
                                <p><strong>VAE :</strong> Tarif sur devis selon le niveau de certification visé</p>
                                <p><strong>Préparation :</strong> Tarif communiqué lors de la prise de contact</p>
                            </div>

                            <p>Nos prestations peuvent être prises en charge par différents dispositifs de financement (CPF, OPCO, employeur, France Travail). Nous vous accompagnons dans les démarches.</p>
                        </div>

                        <div class="legal-section">
                            <h2>4. Modalités d'inscription</h2>
                            <p>L'inscription à nos prestations se fait selon le processus suivant :</p>
                            <ul class="cookies-list">
                                <li>Prise de contact via le formulaire, email ou téléphone</li>
                                <li>Entretien préliminaire gratuit pour analyser votre demande</li>
                                <li>Établissement d'un devis ou d'une convention de formation</li>
                                <li>Signature de la convention et début de la prestation</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>5. Modalités de paiement</h2>
                            <p><strong>Financement CPF :</strong> Paiement direct par la Caisse des Dépôts, aucune avance de frais pour le bénéficiaire.</p>
                            <p><strong>Financement employeur/OPCO :</strong> Facturation à l'organisme financeur selon les modalités convenues.</p>
                            <p><strong>Financement personnel :</strong> Paiement par virement bancaire ou chèque. Un acompte de 30% peut être demandé à l'inscription, le solde étant dû à la fin de la prestation.</p>
                        </div>

                        <div class="legal-section">
                            <h2>6. Délai de rétractation</h2>
                            <p>Conformément à l'article L. 6353-5 du Code du travail, le bénéficiaire d'un bilan de compétences dispose d'un délai de 10 jours à compter de la signature de la convention pour se rétracter par lettre recommandée avec accusé de réception.</p>
                            <p>En cas de financement CPF, le délai de rétractation est de 14 jours conformément à la réglementation en vigueur.</p>
                        </div>

                        <div class="legal-section">
                            <h2>7. Annulation et report</h2>
                            <h3>7.1 Annulation par le client</h3>
                            <p>Toute annulation doit être notifiée par écrit (email ou courrier). Les conditions suivantes s'appliquent :</p>
                            <ul class="cookies-list">
                                <li><strong>Plus de 15 jours avant le début :</strong> annulation gratuite, remboursement intégral</li>
                                <li><strong>Entre 15 et 7 jours avant :</strong> retenue de 30% du montant</li>
                                <li><strong>Moins de 7 jours avant :</strong> retenue de 50% du montant</li>
                                <li><strong>Absence sans prévenir :</strong> facturation intégrale de la séance</li>
                            </ul>

                            <h3>7.2 Report de rendez-vous</h3>
                            <p>Un report est possible sans frais si notifié au moins 48h à l'avance. Au-delà, la séance peut être facturée.</p>

                            <h3>7.3 Annulation par Formation Compétences</h3>
                            <p>En cas d'annulation de notre fait, vous serez informé dans les meilleurs délais et un remboursement intégral sera effectué si aucune solution de remplacement n'est trouvée.</p>
                        </div>

                        <div class="legal-section">
                            <h2>8. Obligations du client</h2>
                            <p>Le client s'engage à :</p>
                            <ul class="cookies-list">
                                <li>Fournir des informations exactes et complètes</li>
                                <li>Se présenter aux rendez-vous fixés ou prévenir en cas d'empêchement</li>
                                <li>Participer activement aux différentes phases du bilan ou de la VAE</li>
                                <li>Respecter la confidentialité des échanges et documents partagés</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>9. Obligations de Formation Compétences</h2>
                            <p>Nous nous engageons à :</p>
                            <ul class="cookies-list">
                                <li>Respecter la confidentialité des informations partagées</li>
                                <li>Fournir un accompagnement professionnel et personnalisé</li>
                                <li>Remettre une synthèse écrite en fin de prestation</li>
                                <li>Respecter les délais convenus</li>
                                <li>Maintenir nos certifications (Qualiopi) et agréments</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>10. Propriété intellectuelle</h2>
                            <p>Les documents, outils et méthodes utilisés restent la propriété de Formation Compétences. Le client s'engage à ne pas les reproduire, diffuser ou exploiter commercialement sans autorisation écrite.</p>
                            <p>La synthèse finale remise au client lui appartient et peut être utilisée librement dans le cadre de son projet professionnel.</p>
                        </div>

                        <div class="legal-section">
                            <h2>11. Responsabilité</h2>
                            <p>Formation Compétences met en œuvre tous les moyens pour fournir une prestation de qualité mais ne saurait être tenu responsable :</p>
                            <ul class="cookies-list">
                                <li>Des décisions prises par le client suite au bilan</li>
                                <li>De la non-obtention d'un financement ou d'une certification</li>
                                <li>Des cas de force majeure empêchant la réalisation de la prestation</li>
                            </ul>
                        </div>

                        <div class="legal-section">
                            <h2>12. Réclamations</h2>
                            <p>Toute réclamation doit être adressée par écrit à :</p>
                            <div class="data-info">
                                <p><strong>Email :</strong> <a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a></p>
                                <p><strong>Courrier :</strong> FORMATION COMPETENCES - 16 RUE CUVIER, 69006 LYON</p>
                            </div>
                            <p>Nous nous engageons à traiter votre réclamation dans un délai de 15 jours.</p>
                            <p>En cas de litige non résolu à l'amiable, le client peut recourir à la médiation de la consommation ou saisir les juridictions compétentes.</p>
                        </div>

                        <div class="legal-section">
                            <h2>13. Droit applicable</h2>
                            <p>Les présentes CGV sont soumises au droit français. En cas de litige, et après échec de toute tentative de résolution amiable, les tribunaux français seront seuls compétents.</p>
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
