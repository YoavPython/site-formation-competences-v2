import { Component } from '../js/core/Component.js';

export class CgvPage extends Component {
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
                            <h1 class="hero-title fade-in">Conditions Générales de Vente</h1>
                        </div>
                    </div>
                </section>

                <!-- Contenu légal -->
                <section class="legal-content">
                    <div class="container">
                        <div class="legal-intro slide-up">
                            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Groupe Formation Compétences et ses clients pour les prestations d'accompagnement, de conseil et d'orientation professionnelle.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 1 – Objet et champ d'application</h2>
                            <p>Les présentes CGV s'appliquent à toutes les prestations de services proposées par Groupe Formation Compétences, notamment :</p>
                            <ul>
                                <li>L'accompagnement préalable au bilan de compétences (pré-bilan)</li>
                                <li>Le conseil en orientation professionnelle</li>
                                <li>L'accompagnement préalable à la VAE</li>
                                <li>La mise en relation avec des organismes partenaires certifiés</li>
                            </ul>
                            <p>Toute commande implique l'acceptation sans réserve des présentes CGV.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 2 – Prestations</h2>
                            
                            <h3>2.1. Description des prestations</h3>
                            <p>Groupe Formation Compétences propose des prestations d'accompagnement amont visant à :</p>
                            <ul>
                                <li>Clarifier la situation professionnelle du client</li>
                                <li>Identifier le dispositif le plus adapté (bilan de compétences, VAE, formation)</li>
                                <li>Orienter vers un organisme partenaire certifié Qualiopi</li>
                            </ul>

                            <h3>2.2. Précisions importantes</h3>
                            <p><strong>Groupe Formation Compétences ne réalise pas directement les bilans de compétences ni les accompagnements VAE.</strong> Ces prestations sont exclusivement réalisées par les organismes partenaires certifiés Qualiopi vers lesquels le client est orienté.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 3 – Tarifs et modalités de paiement</h2>
                            
                            <h3>3.1. Tarification</h3>
                            <p>Les tarifs des prestations sont communiqués sur demande et font l'objet d'un devis personnalisé. Les prix sont indiqués en euros, toutes taxes comprises (TTC).</p>

                            <h3>3.2. Modalités de paiement</h3>
                            <p>Le paiement peut s'effectuer par :</p>
                            <ul>
                                <li>Virement bancaire</li>
                                <li>Carte bancaire</li>
                                <li>Prélèvement automatique (selon conditions)</li>
                            </ul>

                            <h3>3.3. Délais de paiement</h3>
                            <p>Le paiement est dû à réception de la facture, sauf accord particulier mentionné sur le devis.</p>

                            <h3>3.4. Retard de paiement</h3>
                            <p>En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 4 – Financement</h2>
                            <p>Certaines prestations peuvent être éligibles à des financements (CPF, OPCO, employeur, etc.). Groupe Formation Compétences peut vous accompagner dans les démarches administratives, mais ne peut garantir l'obtention du financement, celle-ci relevant des organismes financeurs.</p>
                            <p>En cas de refus de financement, le client reste redevable du montant de la prestation selon les modalités convenues.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 5 – Déroulement des prestations</h2>
                            
                            <h3>5.1. Prise de contact</h3>
                            <p>La prestation débute par un premier échange (téléphonique ou visioconférence) permettant de comprendre la situation du client et ses attentes.</p>

                            <h3>5.2. Diagnostic et recommandations</h3>
                            <p>Suite au diagnostic initial, Groupe Formation Compétences établit des recommandations personnalisées et, le cas échéant, propose une mise en relation avec un organisme partenaire adapté.</p>

                            <h3>5.3. Modalités d'exécution</h3>
                            <p>Les prestations peuvent être réalisées :</p>
                            <ul>
                                <li>En présentiel</li>
                                <li>En visioconférence (100% à distance)</li>
                                <li>En format hybride</li>
                            </ul>
                            <p>Les horaires sont convenus d'un commun accord, dans le respect des disponibilités du client et du conseiller.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 6 – Obligations des parties</h2>
                            
                            <h3>6.1. Obligations de Groupe Formation Compétences</h3>
                            <ul>
                                <li>Mettre en œuvre les moyens nécessaires à la bonne exécution des prestations</li>
                                <li>Respecter la confidentialité des informations communiquées</li>
                                <li>Fournir un accompagnement personnalisé et de qualité</li>
                                <li>Orienter vers des organismes partenaires certifiés et compétents</li>
                            </ul>

                            <h3>6.2. Obligations du client</h3>
                            <ul>
                                <li>Fournir des informations exactes et complètes</li>
                                <li>Respecter les rendez-vous convenus</li>
                                <li>Régler les prestations selon les modalités prévues</li>
                                <li>Collaborer activement à la réussite de l'accompagnement</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 7 – Annulation et report</h2>
                            
                            <h3>7.1. Annulation par le client</h3>
                            <ul>
                                <li>Annulation plus de 7 jours avant le début : remboursement intégral</li>
                                <li>Annulation entre 3 et 7 jours : 50% du montant retenu</li>
                                <li>Annulation moins de 3 jours : 100% du montant dû</li>
                            </ul>

                            <h3>7.2. Report</h3>
                            <p>Tout report de rendez-vous doit être signalé au minimum 24 heures à l'avance. Au-delà de 2 reports, la séance pourra être considérée comme réalisée.</p>

                            <h3>7.3. Annulation par Groupe Formation Compétences</h3>
                            <p>En cas d'annulation de notre fait, un nouveau rendez-vous sera proposé dans les meilleurs délais ou un remboursement intégral effectué.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 8 – Droit de rétractation</h2>
                            <p>Conformément aux articles L.221-18 et suivants du Code de la consommation, le client dispose d'un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.</p>
                            <p>Ce droit ne s'applique pas si l'exécution de la prestation a commencé, avec l'accord du client, avant la fin du délai de rétractation.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 9 – Responsabilité</h2>
                            <p>Groupe Formation Compétences s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution de ses prestations (obligation de moyens).</p>
                            <p>Groupe Formation Compétences ne saurait être tenu responsable :</p>
                            <ul>
                                <li>Des décisions prises par le client suite à l'accompagnement</li>
                                <li>Des résultats obtenus lors du bilan de compétences ou de la VAE réalisés par les organismes partenaires</li>
                                <li>Des difficultés liées à l'obtention d'un financement</li>
                            </ul>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 10 – Confidentialité</h2>
                            <p>Groupe Formation Compétences s'engage à respecter la stricte confidentialité des informations communiquées par le client dans le cadre de l'accompagnement.</p>
                            <p>Aucune information ne sera transmise à des tiers sans l'accord explicite du client, sauf dans le cadre d'une mise en relation souhaitée avec un organisme partenaire.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 11 – Propriété intellectuelle</h2>
                            <p>Tous les documents, outils et supports remis au client dans le cadre de la prestation restent la propriété de Groupe Formation Compétences. Leur reproduction ou diffusion est interdite sans autorisation écrite préalable.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 12 – Protection des données personnelles</h2>
                            <p>Les données personnelles collectées dans le cadre des prestations sont traitées conformément à notre <a href="/politique-confidentialite">Politique de confidentialité</a> et au Règlement Général sur la Protection des Données (RGPD).</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 13 – Réclamations et médiation</h2>
                            <p>Toute réclamation doit être adressée par écrit à : contact@formation-competences.fr</p>
                            <p>En cas de litige non résolu, le client peut recourir gratuitement au service de médiation de la consommation. Le médiateur peut être saisi dans un délai d'un an à compter de la réclamation écrite.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 14 – Droit applicable et juridiction</h2>
                            <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux compétents seront ceux du ressort du siège social de Groupe Formation Compétences.</p>
                        </div>

                        <div class="legal-section slide-up">
                            <h2>Article 15 – Modification des CGV</h2>
                            <p>Groupe Formation Compétences se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.</p>
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
        console.log('CgvPage montée');
    }
}
