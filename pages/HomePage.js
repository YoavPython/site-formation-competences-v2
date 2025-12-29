import { Component } from '../js/core/Component.js';

export class HomePage extends Component {
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
                <!-- Hero Section avec vidéo -->
                <section class="hero hero-video-bg">
                    <!-- Vidéo en arrière-plan -->
                    <div class="hero-video-container">
                        <video autoplay muted loop playsinline class="hero-video">
                            <source src="/assets/videos/hero-video.webm" type="video/webm">
                            <source src="/assets/videos/Création_Vidéo_Bilan_Compétences_France.mp4" type="video/mp4">
                        </video>
                        <div class="hero-video-overlay"></div>
                    </div>
                    
                    <div class="container">
                        <div class="hero-wrapper hero-centered">
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
                        </div>
                        
                        <!-- Cartes de réassurance dans le hero -->
                        <div class="hero-reassurance">
                            <div class="hero-card">
                                <i class="fas fa-network-wired"></i>
                                <p>Réseau d'organismes partenaires certifiés Qualiopi</p>
                            </div>
                            <div class="hero-card">
                                <i class="fas fa-balance-scale"></i>
                                <p>Respect d'une charte déontologique stricte</p>
                            </div>
                            <div class="hero-card">
                                <i class="fas fa-check"></i>
                                <p>Avis clients vérifiés</p>
                            </div>
                            <div class="hero-card">
                                <i class="fas fa-laptop"></i>
                                <p>Accompagnement possible 100% à distance</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section description du besoin -->
                <section class="need-description">
                    <div class="container">
                        <div class="need-icon bounce-in">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h2 class="need-title fade-in">Vous êtes à un tournant de votre carrière ?</h2>
                        <div class="need-content slide-up">
                            <p>Envie de changement, besoin de reconnaissance, ou simplement le sentiment que quelque chose doit évoluer dans votre vie professionnelle ? Que vous souhaitiez <strong>changer de métier</strong>, <strong>valider vos acquis par un diplôme (VAE)</strong>, ou <strong>faire le point sur vos compétences</strong> avec un bilan, nous comprenons que ce n'est pas toujours facile de savoir par où commencer.</p>
                            <p class="need-highlight"><strong>C'est exactement pour cela que nous sommes là.</strong> Nous vous aidons à y voir clair, à identifier le bon dispositif, et à construire un parcours qui a du sens pour vous.</p>
                        </div>
                        
                        <div class="trust-badges slide-up">
                            <div class="trust-badge">
                                <i class="fas fa-award"></i>
                                <span>Certifié Qualiopi</span>
                            </div>
                            <div class="trust-badge">
                                <i class="fas fa-shield-alt"></i>
                                <span>Données sécurisées</span>
                            </div>
                            <div class="trust-badge">
                                <i class="fas fa-user-check"></i>
                                <span>Conseillers certifiés</span>
                            </div>
                            <div class="trust-badge">
                                <i class="fas fa-hand-holding-heart"></i>
                                <span>100% gratuit</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave → Section what-we-do (fond blanc) -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 600,20 1200,60 L1200,120 L0,120 Z" class="wave-what-we-do"></path>
                    </svg>
                </div>

                <!-- Ce que fait concrètement Formation Compétences -->
                <section class="what-we-do" id="methode">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-drafting-compass"></i>
                            </div>
                            <h2 class="section-title fade-in">3 entretiens pour y voir clair.</h2>
                            <p class="section-subtitle slide-up">Un accompagnement 100% personnalisé pour choisir le bon dispositif et le bon organisme.</p>
                        </div>

                        <div class="steps-grid">
                            ${this.renderSteps()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-orange btn-lg pulse-hover">
                                <i class="fas fa-arrow-right"></i>
                                Je veux clarifier mon projet professionnel
                            </a>
                        </div>
                    </div>
                    
                    <!-- Wave jaune au milieu de la section -->
                    <div class="wave-middle">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,40 C200,70 400,10 600,50 C800,90 1000,30 1200,80 L1200,0 L0,0 Z" fill="#ffe74461"></path>
                        </svg>
                    </div>
                </section>

                <!-- Une méthode en 3 temps -->
                <section class="method" id="approche">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-route"></i>
                        </div>
                        <h2 class="section-title fade-in">Une méthode en 3 temps</h2>
                        <p class="section-subtitle slide-up">Un accompagnement structuré pour clarifier, valider et concrétiser votre projet professionnel.</p>
                        <div class="method-cards">
                            ${this.renderMethodCards()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-primary btn-lg pulse-hover">
                                <i class="fas fa-rocket"></i>
                                Démarrer mon accompagnement personnalisé
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Banderole avec image hero -->
                <section class="hero-banner">
                    <div class="hero-banner-overlay"></div>
                    <!-- Bordure courbée blanche en haut -->
                    <svg class="banner-wave-top" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,60 C200,30 400,70 600,40 C800,10 1000,50 1200,30 L1200,0 L0,0 Z" fill="white"/>
                    </svg>
                    <div class="hero-banner-content">
                        <i class="fas fa-quote-left banner-quote-icon"></i>
                        <p><span class="text-orange">Chaque parcours est unique.</span> Le vôtre commence ici.</p>
                        <i class="fas fa-quote-right banner-quote-icon"></i>
                    </div>
                    <!-- Bordure courbée blanche en bas (même zigzag, inversé) -->
                    <svg class="banner-wave-bottom" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,20 C200,50 400,10 600,40 C800,70 1000,30 1200,50 L1200,80 L0,80 Z" fill="white"/>
                    </svg>
                </section>

                <!-- Témoignages -->
                <section class="testimonials" id="temoignages">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-comments"></i>
                        </div>
                        <h2 class="section-title fade-in">Témoignages</h2>
                        <p class="section-subtitle slide-up">Quelques personnes que nous avons aidées à sortir de la confusion.</p>
                        <div class="testimonials-carousel">
                            <button class="carousel-btn carousel-btn-prev" aria-label="Précédent">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <div class="testimonials-track">
                                ${this.renderTestimonials()}
                            </div>
                            <button class="carousel-btn carousel-btn-next" aria-label="Suivant">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="carousel-dots">
                            <button class="carousel-dot active" data-index="0"></button>
                            <button class="carousel-dot" data-index="1"></button>
                            <button class="carousel-dot" data-index="2"></button>
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-secondary btn-lg">
                                <i class="fas fa-users"></i>
                                Rejoindre nos clients satisfaits
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Wave → Section financing (fond grisé léger) -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,20 C150,80 350,10 500,60 C700,100 900,30 1200,70 L1200,120 L0,120 Z" class="wave-financing"></path>
                    </svg>
                </div>

                <!-- Financements -->
                <section class="financing">
                    <div class="container">
                        <div class="financing-wrapper">
                            <div class="financing-icon-main bounce-in">
                                <i class="fas fa-wallet"></i>
                            </div>
                            <h2 class="section-title fade-in">Financements</h2>
                            <p class="section-subtitle slide-up">Des solutions adaptées pour financer votre accompagnement selon votre situation.</p>
                            <div class="financing-cards slide-up">
                                <div class="financing-card" style="animation-delay: 0.1s">
                                    <div class="financing-card-inner">
                                        <div class="financing-card-front">
                                            <div class="financing-card-icon">
                                                <i class="fas fa-id-card"></i>
                                            </div>
                                            <span class="financing-card-title">CPF</span>
                                            <span class="financing-card-hint"><i class="fas fa-hand-pointer"></i> Cliquez</span>
                                        </div>
                                        <div class="financing-card-back">
                                            <h4>Compte Personnel de Formation</h4>
                                            <p>Utilisez vos droits acquis tout au long de votre carrière. Accessible à tous les actifs, même en reconversion.</p>
                                            <span class="financing-card-tag"><i class="fas fa-check"></i> Le plus courant</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="financing-card" style="animation-delay: 0.2s">
                                    <div class="financing-card-inner">
                                        <div class="financing-card-front">
                                            <div class="financing-card-icon">
                                                <i class="fas fa-building"></i>
                                            </div>
                                            <span class="financing-card-title">Plan entreprise</span>
                                            <span class="financing-card-hint"><i class="fas fa-hand-pointer"></i> Cliquez</span>
                                        </div>
                                        <div class="financing-card-back">
                                            <h4>Plan de développement</h4>
                                            <p>Votre employeur finance votre bilan dans le cadre de son plan de formation. Idéal pour évoluer en interne.</p>
                                            <span class="financing-card-tag"><i class="fas fa-building"></i> Salariés</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="financing-card" style="animation-delay: 0.3s">
                                    <div class="financing-card-inner">
                                        <div class="financing-card-front">
                                            <div class="financing-card-icon">
                                                <i class="fas fa-hand-holding-usd"></i>
                                            </div>
                                            <span class="financing-card-title">OPCO</span>
                                            <span class="financing-card-hint"><i class="fas fa-hand-pointer"></i> Cliquez</span>
                                        </div>
                                        <div class="financing-card-back">
                                            <h4>Opérateurs de Compétences</h4>
                                            <p>Financement via l'organisme de votre branche professionnelle. Nous vous aidons à identifier le vôtre.</p>
                                            <span class="financing-card-tag"><i class="fas fa-users"></i> TPE/PME</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="financing-card" style="animation-delay: 0.4s">
                                    <div class="financing-card-inner">
                                        <div class="financing-card-front">
                                            <div class="financing-card-icon">
                                                <i class="fas fa-briefcase"></i>
                                            </div>
                                            <span class="financing-card-title">France Travail</span>
                                            <span class="financing-card-hint"><i class="fas fa-hand-pointer"></i> Cliquez</span>
                                        </div>
                                        <div class="financing-card-back">
                                            <h4>Aide France Travail</h4>
                                            <p>Pour les demandeurs d'emploi : AIF ou abondement CPF possible selon votre projet et votre conseiller.</p>
                                            <span class="financing-card-tag"><i class="fas fa-search"></i> Demandeurs d'emploi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="financing-content slide-up">
                                <p>Nous vous expliquons :</p>
                                <ul class="financing-list">
                                    <li><i class="fas fa-check-circle"></i> les principales sources de financement possibles</li>
                                    <li><i class="fas fa-check-circle"></i> comment vérifier vos droits et éviter les mauvaises surprises</li>
                                    <li><i class="fas fa-check-circle"></i> comment parler de votre projet à votre employeur</li>
                                </ul>
                                <div class="financing-objective-box">
                                    <i class="fas fa-bullseye"></i>
                                    <p class="financing-objective">
                                        <strong>Objectif :</strong> vous donner une vision claire des grandes options de financement, 
                                        pour que l'argent ne soit ni un tabou, ni un piège.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="section-cta">
                                <a href="#contact" class="btn btn-orange btn-lg pulse-hover">
                                    <i class="fas fa-coins"></i>
                                    Découvrir mes options de financement
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave → Section contact (fond blanc) -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,60 C300,20 600,90 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z" class="wave-contact"></path>
                    </svg>
                </div>

                <!-- CTA Final + Formulaire -->
                <section class="final-cta" id="contact">
                    <div class="container">
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <div class="cta-icon bounce-in">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <h3 class="fade-in">Ce que vous gagnez avec nous</h3>
                                <ul class="slide-up">
                                    <li><i class="fas fa-check"></i> <strong>Clarté totale :</strong> Vous savez exactement ce que vous venez chercher dans un bilan</li>
                                    <li><i class="fas fa-check"></i> <strong>Choix éclairé :</strong> Vous ne choisissez plus votre organisme au hasard</li>
                                    <li><i class="fas fa-check"></i> <strong>Expertise neutre :</strong> Un conseiller indépendant qui connaît les dispositifs et les acteurs du marché</li>
                                </ul>
                                <div class="cta-reassurance slide-up">
                                    <div class="reassurance-item">
                                        <i class="fas fa-shield-alt"></i>
                                        <span>Sans engagement</span>
                                    </div>
                                    <div class="reassurance-item">
                                        <i class="fas fa-clock"></i>
                                        <span>Réponse sous 24h</span>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-form-wrapper" id="contact-form">
                                <div class="form-header">
                                    <i class="fas fa-envelope-open-text"></i>
                                    <h3 class="fade-in">Parlez-nous de votre situation</h3>
                                </div>
                                <p class="slide-up">Quelques questions pour nous permettre de vous orienter vers le bon type de parcours.</p>
                                <form class="contact-form" onsubmit="return false;">
                                    ${this.renderForm()}
                                </form>
                            </div>
                        </div>
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

    renderSteps() {
        const steps = [
            {
                number: 1,
                icon: "fa-user-circle",
                title: "Comprendre finement votre situation",
                content: [
                    "Vous n'êtes pas qu'un CV : nous reprenons votre contexte actuel, votre parcours et vos transitions passées.",
                    "Nous intégrons vos contraintes réelles (temps, rythme, budget, mobilité, vie perso).",
                    "Nous clarifions votre intention : faire le point, évoluer, pivoter, sécuriser, confirmer un cap…"
                ],
                result: "Objectif Poser des bases solides pour éviter le bilan ou la formation \"par défaut\"."
            },
            {
                number: 2,
                icon: "fa-lightbulb",
                title: "Vous aider à y voir clair (pour de vrai)",
                content: [
                    "Nous cadrons votre besoin : bilan ? formation ? VAE ? autre dispositif ?",
                    "Nous mettons à plat des pistes réalistes, pas des rêves.",
                    "Nous vérifions la cohérence globale : contraintes, prérequis, modalités et financement."
                ],
                result: "Résultat Vous savez où vous en êtes, ce qui est possible, et ce qui ne l'est pas (encore)."
            },
            {
                number: 3,
                icon: "fa-route",
                title: "Vous orienter vers le bon dispositif et le bon partenaire",
                content: [
                    "Nous formalisons vos critères de choix (objectifs, modalités, timing, contraintes).",
                    "Nous vous aidons à choisir le dispositif le plus adapté à votre situation.",
                    "Si vous le souhaitez, nous vous mettons en relation avec un organisme partenaire pertinent, sérieux et certifié."
                ],
                result: "Résultat Quand vous démarrez, vous savez où vous allez, avec qui, et pourquoi."
            }
        ];

        return steps.map((step, index) => `
            <div class="step-card slide-up" id="step-card-${index + 1}">
                <div class="step-number">${step.number}</div>
                <div class="step-image">
                    <img src="/assets/images/hero.png" alt="Étape ${index + 1}">
                </div>
                <h3>${step.title}</h3>
                <ul>
                    ${step.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="step-result"><strong>${step.result.replace(/^(Objectif|Résultat) /, '<span class="step-result-label">$1</span> ')}</strong></p>
            </div>
        `).join('');
    }

    renderMethodCards() {
        const methods = [
            {
                icon: "fa-compass",
                number: "01",
                title: "Mettre votre demande au clair",
                content: "Vous arrivez avec des questions floues, parfois contradictoires. Nous vous aidons à formuler LA question centrale : \"Qu'est-ce que je veux vraiment que ce bilan change pour moi ?\""
            },
            {
                icon: "fa-lock",
                number: "02",
                title: "Verrouiller le bon format",
                content: "Nous positionnons votre entrée avec une grille claire basée sur 3 critères : parcours professionnel, disponibilités réelles, maturité du projet. Résultat : une formule recommandée et justifiée noir sur blanc."
            },
            {
                icon: "fa-rocket",
                number: "03",
                title: "Lancer la suite sans perte de temps",
                content: "On sécurise le démarrage sans interférer avec le travail du consultant : compte rendu de pré-inscription, brief de démarrage, et mise en relation avec un organisme partenaire Qualiopi."
            }
        ];

        return methods.map((method, index) => `
            <div class="method-card scale-in" style="animation-delay: ${0.1 + index * 0.15}s">
                <div class="method-number">${method.number}</div>
                <div class="method-icon">
                    <i class="fas ${method.icon}"></i>
                </div>
                <h3>${method.title}</h3>
                <p>${method.content}</p>
                <div class="method-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const testimonials = [
            {
                name: "Paul",
                age: 38,
                role: "cadre en entreprise",
                text: "Je savais que j'avais besoin de changement, mais impossible de savoir par où commencer. En 3 entretiens, j'ai compris ce que je voulais vraiment, et surtout quelle formule et quel cadre de bilan demander. Formation Compétences m'a orienté vers un organisme hyper sérieux, adapté à mon profil. Je n'ai plus eu l'impression de \"jouer ma carrière à pile ou face\".",
                rating: 5
            },
            {
                name: "Sylvie",
                age: 45,
                role: "salariée depuis 20 ans dans la même structure",
                text: "J'avais peur de tout envoyer valser, peur de me tromper de formation, peur de \"ne pas être légitime\". Ma conseillère m'a aidée à poser les choses calmement, à préciser mon projet et à choisir un bilan adapté. Aujourd'hui, je sais où je vais, avec un organisme partenaire qui connaît vraiment mon secteur.",
                rating: 5
            },
            {
                name: "Eve",
                age: 32,
                role: "en réflexion de reconversion",
                text: "J'avais repéré plein de formations en ligne, toutes avaient l'air géniales… et c'est justement ça le problème. La Prépa avec Formation Compétences m'a permis de trier, de vérifier ce qui était finançable, réaliste, et cohérent avec ma vie perso. Résultat : un parcours construit, pas un coup de tête.",
                rating: 5
            }
        ];

        return testimonials.map((testimonial, index) => `
            <div class="testimonial-card slide-up" style="animation-delay: ${0.1 + index * 0.15}s">
                <div class="testimonial-quote-icon">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div class="testimonial-rating">
                    ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                </div>
                <blockquote>${testimonial.text}</blockquote>
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.name[0]}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name} – ${testimonial.age} ans</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
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
        
        // Initialiser le carrousel
        this.initCarousel();
    }
    
    initCarousel() {
        const carousel = this.find('.testimonials-carousel');
        if (!carousel) return;
        
        const track = carousel.querySelector('.testimonials-track');
        const cards = track.querySelectorAll('.testimonial-card');
        const prevBtn = carousel.querySelector('.carousel-btn-prev');
        const nextBtn = carousel.querySelector('.carousel-btn-next');
        const dots = this.findAll('.carousel-dot');
        
        let currentIndex = 0;
        const totalCards = cards.length;
        
        const updateCarousel = () => {
            const cardWidth = cards[0].offsetWidth + 32; // width + gap
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        };
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        });
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
        });
        
        // Auto-play optionnel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }, 6000);
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
        console.log('HomePage montée');
    }
}
