import { Component } from '../js/core/Component.js';

export class PolitiqueConfidentialitePage extends Component {
    template() {
        return `
            <div class="legal-page politique-confidentialite">
                <section class="page-hero">
                    <div class="container">
                        <h1>Politique de Confidentialité</h1>
                    </div>
                </section>
                
                <section class="legal-content">
                    <div class="container">
                        <div class="content-wrapper">
                            <p class="intro">
                                Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                            </p>
                            
                            <h2>1. Collecte des données</h2>
                            <p>
                                Nous collectons les données personnelles que vous nous fournissez 
                                volontairement lors de votre inscription, demande de contact ou 
                                utilisation de nos services.
                            </p>
                            
                            <h3>Types de données collectées :</h3>
                            <ul>
                                <li>Nom et prénom</li>
                                <li>Adresse email</li>
                                <li>Numéro de téléphone</li>
                                <li>Situation professionnelle</li>
                                <li>Objectifs de formation</li>
                            </ul>
                            
                            <h2>2. Utilisation des données</h2>
                            <p>Vos données sont utilisées pour :</p>
                            <ul>
                                <li>Traiter vos demandes d'information</li>
                                <li>Vous proposer un accompagnement personnalisé</li>
                                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                                <li>Améliorer nos services</li>
                            </ul>
                            
                            <h2>3. Protection des données</h2>
                            <p>
                                Nous mettons en œuvre des mesures de sécurité techniques et 
                                organisationnelles appropriées pour protéger vos données contre 
                                tout accès non autorisé, modification, divulgation ou destruction.
                            </p>
                            
                            <h2>4. Partage des données</h2>
                            <p>
                                Vos données ne sont jamais vendues. Elles peuvent être partagées avec :
                            </p>
                            <ul>
                                <li>Nos organismes partenaires certifiés (avec votre accord)</li>
                                <li>Les autorités compétentes si la loi l'exige</li>
                            </ul>
                            
                            <h2>5. Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul>
                                <li>Droit d'accès à vos données</li>
                                <li>Droit de rectification</li>
                                <li>Droit à l'effacement</li>
                                <li>Droit à la limitation du traitement</li>
                                <li>Droit à la portabilité</li>
                                <li>Droit d'opposition</li>
                            </ul>
                            
                            <h2>6. Contact</h2>
                            <p>
                                Pour toute question concernant cette politique ou pour exercer vos droits, 
                                contactez-nous à : <a href="mailto:contact@gfc.fr">contact@gfc.fr</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}

