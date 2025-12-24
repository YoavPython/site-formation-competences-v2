import { Component } from '../js/core/Component.js';

// Page Bilan de Compétences - Copie exacte de la page d'accueil
export class BilanCompetencesPage extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                name: '',
                email: '',
                phone: '',
                situation: '',
                objectif: '',
                message: '',
                consent: false
            }
        };
    }

    template() {
        return `
            <div class="home-page">
                <!-- Hero Section avec image -->
                <section class="hero">
                    <div class="container">
                        <div class="hero-wrapper">
                            <div class="hero-content">
                                <h1 class="hero-title">Clarifiez votre parcours professionnel avec un accompagnement expert et personnalisé</h1>
                                <p class="hero-subtitle">
                                    Nous vous aidons à structurer votre projet, identifier vos besoins réels et choisir 
                                    le dispositif d'accompagnement le plus adapté à votre situation.
                                </p>
                                <div class="hero-cta">
                                    <a href="#contact" class="btn btn-primary btn-lg">Être rappelé par un conseiller expert</a>
                                    <a href="#methode" class="btn btn-secondary btn-lg">Découvrir notre approche personnalisée</a>
                                </div>
                            </div>
                            <div class="hero-image-container">
                                <div class="hero-image-circle">
                                    <img src="/assets/images/hero.png" alt="Bilan de compétences" class="hero-image">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cartes de réassurance -->
                <section class="reassurance-cards">
                    <div class="container">
                        <div class="cards-grid">
                            <div class="reassurance-card scale-in">
                                <i class="fas fa-network-wired"></i>
                                <p>Réseau d'organismes partenaires certifiés Qualiopi</p>
                            </div>
                            <div class="reassurance-card scale-in">
                                <i class="fas fa-balance-scale"></i>
                                <p>Respect d'une charte déontologique stricte</p>
                            </div>
                            <div class="reassurance-card scale-in">
                                <i class="fas fa-check"></i>
                                <p>Avis clients vérifiés</p>
                            </div>
                            <div class="reassurance-card scale-in">
                                <i class="fas fa-laptop"></i>
                                <p>Accompagnement possible 100% à distance</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Ce que fait concrètement Formation Compétences -->
                <section class="what-we-do" id="methode">
                    <div class="container">
                        <div class="section-header">
                            <span class="section-badge badge-purple">💼 EXPERTISE PROFESSIONNELLE</span>
                            <h2 class="section-title fade-in">Ce que nous proposons</h2>
                            <p class="section-subtitle slide-up">Nous faisons le travail amont qui sécurise votre démarche pour garantir votre réussite.</p>
                        </div>

                        <div class="steps-grid">
                            ${this.renderSteps()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-orange btn-lg">Je veux clarifier mon projet professionnel</a>
                        </div>
                    </div>
                </section>

                <!-- Quote Banner -->
                // <section class="quote-banner">
                //     <div class="container">
                //         <blockquote class="fade-in">
                //             <p>Vous n'avez pas besoin d'un accompagnement de plus.</p>
                //             <p>Vous avez besoin de comprendre lequel est vraiment fait pour vous.</p>
                //         </blockquote>
                //     </div>
                // </section>

                <!-- Une méthode en 3 temps -->
                <section class="method" id="approche">
                    <div class="container">
                        <span class="section-badge badge-blue">⚡ PROCESSUS SIMPLE</span>
                        <h2 class="section-title fade-in">Une méthode en 3 temps</h2>
                        <p class="section-subtitle slide-up">Un accompagnement structuré pour clarifier, valider et concrétiser votre projet professionnel.</p>
                        <div class="method-cards">
                            ${this.renderMethodCards()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-primary btn-lg">Démarrer mon accompagnement personnalisé</a>
                        </div>
                    </div>
                </section>

                <!-- Témoignages -->
                <section class="testimonials" id="temoignages">
                    <div class="container">
                        <span class="section-badge badge-green">⭐ VOS AVANTAGES</span>
                        <h2 class="section-title fade-in">Témoignages</h2>
                        <p class="section-subtitle slide-up">Quelques personnes que nous avons aidées à sortir de la confusion.</p>
                        <div class="testimonials-grid">
                            ${this.renderTestimonials()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-secondary btn-lg">Rejoindre nos clients satisfaits</a>
                        </div>
                    </div>
                </section>

                <!-- Financements -->
                <section class="financing">
                    <div class="container">
                        <h2 class="section-title fade-in">Financements</h2>
                        <p class="section-subtitle slide-up">Des solutions adaptées pour financer votre accompagnement selon votre situation.</p>
                        <div class="financing-content slide-up">
                            <p>Nous vous expliquons :</p>
                            <ul>
                                <li>les principales sources de financement possibles (CPF, plan de développement des compétences, OPCO, Pôle emploi, etc.)</li>
                                <li>comment vérifier vos droits et éviter les mauvaises surprises</li>
                                <li>comment parler de votre projet à votre employeur le cas échéant</li>
                            </ul>
                            <p class="financing-objective">
                                <strong>Objectif :</strong> vous donner une vision claire des grandes options de financement, 
                                pour que l'argent ne soit ni un tabou, ni un piège.
                            </p>
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-orange btn-lg">Découvrir mes options de financement</a>
                        </div>
                    </div>
                </section>

                <!-- CTA Final + Formulaire -->
                <section class="final-cta" id="contact">
                    <div class="container">
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <h3 class="fade-in">Pourquoi nous choisir ?</h3>
                                <ul class="slide-up">
                                    <li><strong>Clarté totale :</strong> Vous savez exactement quel accompagnement correspond à vos besoins réels</li>
                                    <li><strong>Choix éclairé :</strong> Plus de sélection au hasard, nous vous orientons vers l'organisme idéal</li>
                                    <li><strong>Expertise neutre :</strong> Un conseiller indépendant qui maîtrise tous les dispositifs du marché</li>
                                </ul>
                            </div>

                            <div class="contact-form-wrapper" id="contact-form">
                                <h3 class="fade-in">Parlez-nous de votre situation, nous vous aidons à y voir clair.</h3>
                                <p class="slide-up">Quelques questions pour nous permettre de vous orienter vers le bon type de parcours.</p>
                                <form class="contact-form" onsubmit="return false;">
                                    ${this.renderForm()}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    renderSteps() {
        const steps = [
            {
                number: 1,
                title: "Comprendre votre situation",
                content: [
                    "Vous n'êtes pas qu'un CV : Nous reprenons votre contexte actuel, votre parcours et vos transitions passées.",
                    "Nous intégrons vos contraintes réelles (temps, rythme, budget, mobilité, vie perso).",
                    "Nous clarifions votre intention : faire le point, évoluer, pivoter, sécuriser, confirmer un cap…"
                ],
                result: "Objectif : poser des bases solides pour éviter un accompagnement \"par défaut\"."
            },
            {
                number: 2,
                title: "Vous aider à y voir clair (pour de vrai)",
                content: [
                    "cadrons votre besoin réel : quel type d'accompagnement pour quel objectif ?",
                    "mettons à plat des pistes réalistes",
                    "vérifions la cohérence globale : contraintes, prérequis, modalités et options de financement."
                ],
                result: "Résultat : vous savez où vous en êtes, ce qui est possible, et ce qui ne l'est pas (encore)."
            },
            {
                number: 3,
                title: "Vous orienter vers le bon dispositif et le bon partenaire",
                content: [
                    "nous formalisons vos critères de choix (objectifs, modalités, timing, contraintes)",
                    "nous vous aidons à choisir le dispositif le plus adapté",
                    "si vous le souhaitez, nous vous mettons en relation avec un organisme partenaire pertinent, sérieux et certifié."
                ],
                result: "Résultat : quand vous démarrez votre parcours d'accompagnement, vous savez exactement où vous allez, avec qui, et pourquoi."
            }
        ];

        return steps.map((step, index) => `
            <div class="step-card slide-up" id="step-card-${index + 1}">
                <div class="step-number">${step.number}</div>
                <h3>${step.title}</h3>
                <ul>
                    ${step.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="step-result"><strong>${step.result}</strong></p>
            </div>
        `).join('');
    }

    renderMethodCards() {
        const methods = [
            {
                icon: "fa-compass",
                title: "Mettre votre demande au clair",
                content: "Vous arrivez avec des questions floues, parfois contradictoires. Nous vous aidons à formuler la question centrale de votre démarche."
            },
            {
                icon: "fa-lock",
                title: "Verrouiller le bon format de bilan",
                content: "Nous positionnons votre entrée en BDC avec une grille claire basée sur 3 critères : parcours, disponibilités, maturité du projet."
            },
            {
                icon: "fa-rocket",
                title: "Lancer la suite sans perte de temps",
                content: "On sécurise le démarrage avec un compte rendu clair, un brief de démarrage, et une mise en relation avec un organisme partenaire Qualiopi."
            }
        ];

        return methods.map(method => `
            <div class="method-card scale-in">
                <div class="method-icon">
                    <i class="fas ${method.icon}"></i>
                </div>
                <h3>${method.title}</h3>
                <p>${method.content}</p>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const testimonials = [
            {
                name: "Paul",
                age: 38,
                role: "cadre en entreprise",
                text: "Je savais que j'avais besoin de changement, mais impossible de savoir par où commencer. En 3 entretiens, j'ai compris ce que je voulais vraiment, et surtout quelle formule et quel cadre de bilan demander. Formation Compétences m'a orienté vers un organisme hyper sérieux, adapté à mon profil. Je n'ai plus eu l'impression de \"jouer ma carrière à pile ou face\"."
            },
            {
                name: "Sylvie",
                age: 45,
                role: "salariée depuis 20 ans dans la même structure",
                text: "J'avais peur de tout envoyer valser, peur de me tromper de formation, peur de \"ne pas être légitime\". Ma conseillère m'a aidée à poser les choses calmement, à préciser mon projet et à choisir un bilan adapté. Aujourd'hui, je sais où je vais, avec un organisme partenaire qui connaît vraiment mon secteur."
            },
            {
                name: "Eve",
                age: 32,
                role: "en réflexion de reconversion",
                text: "J'avais repéré plein de formations en ligne, toutes avaient l'air géniales… et c'est justement ça le problème. La Prépa avec Formation Compétences m'a permis de trier, de vérifier ce qui était finançable, réaliste, et cohérent avec ma vie perso. Résultat : un parcours construit, pas un coup de tête."
            }
        ];

        return testimonials.map(testimonial => `
            <div class="testimonial-card slide-up">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.name[0]}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name} – ${testimonial.age} ans</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <blockquote>${testimonial.text}</blockquote>
            </div>
        `).join('');
    }

    renderForm() {
        return `
            <div class="form-group">
                <input type="text" name="name" placeholder="Votre nom et prénom *" required>
            </div>
            <div class="form-group">
                <input type="email" name="email" placeholder="Votre email *" required>
            </div>
            <div class="form-group">
                <input type="tel" name="phone" placeholder="Votre téléphone *" required>
            </div>
            <div class="form-group">
                <select name="situation" required>
                    <option value="">Votre situation actuelle *</option>
                    <option value="salarie">Salarié(e)</option>
                    <option value="demandeur-emploi">Demandeur d'emploi</option>
                    <option value="independant">Indépendant(e)</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div class="form-group">
                <select name="objectif" required>
                    <option value="">Votre objectif principal *</option>
                    <option value="reconversion">Reconversion professionnelle</option>
                    <option value="evolution">Évolution de carrière</option>
                    <option value="validation">Validation d'acquis (VAE)</option>
                    <option value="creation">Création d'entreprise</option>
                    <option value="bilan">Faire le point sur mes compétences</option>
                    <option value="formation">Monter en compétences</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div class="form-group">
                <textarea name="message" rows="4" placeholder="Votre message (facultatif)"></textarea>
            </div>
            <div class="form-group checkbox-group">
                <label>
                    <input type="checkbox" name="consent" required>
                    <span>J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.</span>
                </label>
            </div>
            <button type="submit" class="btn btn-orange">Envoyer ma demande</button>
        `;
    }

    attachEvents() {
        // Gérer la soumission du formulaire
        const form = this.find('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    handleFormSubmit() {
        // Récupérer les données du formulaire
        const formData = new FormData(this.find('.contact-form'));
        const data = Object.fromEntries(formData);
        
        // Ici, vous pouvez envoyer les données à votre backend
        console.log('Données du formulaire:', data);
        
        // Afficher un message de succès
        alert('Merci pour votre demande ! Un conseiller vous contactera dans les plus brefs délais.');
        
        // Réinitialiser le formulaire
        this.find('.contact-form').reset();
    }

    onMount() {
        // Initialiser les animations au scroll si nécessaire
        console.log('BilanCompetencesPage montée');
    }
}