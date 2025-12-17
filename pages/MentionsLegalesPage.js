import { Component } from '../js/core/Component.js';

export class MentionsLegalesPage extends Component {
    template() {
        return `
            <div class="legal-page mentions-legales">
                <section class="page-hero">
                    <div class="container">
                        <h1>Mentions Légales</h1>
                    </div>
                </section>
                
                <section class="legal-content">
                    <div class="container">
                        <div class="content-wrapper">
                            <h2>Éditeur du site</h2>
                            <p>
                                <strong>Groupe Formation Compétences</strong><br>
                                Société par actions simplifiée (SAS)<br>
                                Capital social : 10 000 €<br>
                                Siège social : Paris, France<br>
                                RCS Paris : XXX XXX XXX<br>
                                N° TVA intracommunautaire : FR XX XXX XXX XXX
                            </p>
                            
                            <h2>Directeur de la publication</h2>
                            <p>M./Mme [Nom du directeur]</p>
                            
                            <h2>Hébergement</h2>
                            <p>
                                Ce site est hébergé par :<br>
                                [Nom de l'hébergeur]<br>
                                [Adresse de l'hébergeur]
                            </p>
                            
                            <h2>Propriété intellectuelle</h2>
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale 
                                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                                reproduction sont réservés, y compris pour les documents téléchargeables 
                                et les représentations iconographiques et photographiques.
                            </p>
                            
                            <h2>Données personnelles</h2>
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                                vous disposez d'un droit d'accès, de rectification, de suppression et 
                                d'opposition aux données personnelles vous concernant. Pour exercer ce 
                                droit, veuillez nous contacter à : contact@gfc.fr
                            </p>
                            
                            <h2>Cookies</h2>
                            <p>
                                Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                                Vous pouvez configurer votre navigateur pour refuser les cookies.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}

