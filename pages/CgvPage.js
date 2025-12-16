import { Component } from '../js/core/Component.js';

export class CgvPage extends Component {
    template() {
        return `
            <div class="legal-page cgv">
                <section class="page-hero">
                    <div class="container">
                        <h1>Conditions Générales de Vente</h1>
                    </div>
                </section>
                
                <section class="legal-content">
                    <div class="container">
                        <div class="content-wrapper">
                            <p class="intro">
                                En vigueur au ${new Date().toLocaleDateString('fr-FR')}
                            </p>
                            
                            <h2>Article 1 - Objet</h2>
                            <p>
                                Les présentes Conditions Générales de Vente (CGV) régissent les relations 
                                entre Groupe Formation Compétences et ses clients dans le cadre de la 
                                prestation de services d'accompagnement et d'orientation professionnelle.
                            </p>
                            
                            <h2>Article 2 - Services proposés</h2>
                            <p>Groupe Formation Compétences propose :</p>
                            <ul>
                                <li>Des services d'accompagnement en amont du bilan de compétences</li>
                                <li>Des services d'orientation vers la VAE</li>
                                <li>La mise en relation avec des organismes partenaires certifiés</li>
                            </ul>
                            
                            <h2>Article 3 - Tarifs</h2>
                            <p>
                                Les tarifs sont indiqués en euros TTC. Groupe Formation Compétences se 
                                réserve le droit de modifier ses tarifs à tout moment, étant entendu que 
                                le tarif applicable est celui en vigueur au jour de la commande.
                            </p>
                            
                            <h2>Article 4 - Modalités de paiement</h2>
                            <p>Le paiement peut s'effectuer par :</p>
                            <ul>
                                <li>Carte bancaire</li>
                                <li>Virement bancaire</li>
                                <li>Financement CPF</li>
                                <li>Financement entreprise (OPCO, plan de développement des compétences)</li>
                            </ul>
                            
                            <h2>Article 5 - Droit de rétractation</h2>
                            <p>
                                Conformément à l'article L221-18 du Code de la consommation, le client 
                                dispose d'un délai de 14 jours pour exercer son droit de rétractation 
                                sans avoir à justifier de motifs ni à payer de pénalités.
                            </p>
                            
                            <h2>Article 6 - Responsabilité</h2>
                            <p>
                                Groupe Formation Compétences s'engage à apporter tout le soin et la 
                                diligence nécessaires à la fourniture d'un service de qualité. 
                                La responsabilité de Groupe Formation Compétences ne pourra être engagée 
                                qu'en cas de faute prouvée.
                            </p>
                            
                            <h2>Article 7 - Propriété intellectuelle</h2>
                            <p>
                                Tous les supports et contenus fournis dans le cadre des prestations 
                                restent la propriété intellectuelle de Groupe Formation Compétences.
                            </p>
                            
                            <h2>Article 8 - Données personnelles</h2>
                            <p>
                                Le traitement des données personnelles est effectué conformément à notre 
                                <a href="/politique-confidentialite" data-link>Politique de Confidentialité</a>.
                            </p>
                            
                            <h2>Article 9 - Litiges</h2>
                            <p>
                                En cas de litige, une solution amiable sera recherchée avant toute action 
                                judiciaire. À défaut, les tribunaux français seront seuls compétents.
                            </p>
                            
                            <h2>Article 10 - Contact</h2>
                            <p>
                                Pour toute question concernant ces CGV :<br>
                                Email : <a href="mailto:contact@gfc.fr">contact@gfc.fr</a><br>
                                Téléphone : 01 XX XX XX XX
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
