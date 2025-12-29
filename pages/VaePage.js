import { Component } from '../js/core/Component.js';

export class VaePage extends Component {
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
            <div class="vae-page">
                <!-- Hero Section -->
                <section class="hero hero-page hero-vae">
                    <div class="hero-page-overlay"></div>
                    <!-- Floating icons decoration -->
                    <div class="floating-icons">
                        <i class="fas fa-award float-icon float-1"></i>
                        <i class="fas fa-certificate float-icon float-2"></i>
                        <i class="fas fa-medal float-icon float-3"></i>
                        <i class="fas fa-trophy float-icon float-4"></i>
                        <i class="fas fa-star float-icon float-5"></i>
                    </div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-certificate"></i>
                                <span>Certification officielle</span>
                            </div>
                            <h1 class="hero-title fade-in">Validation des Acquis de l'Expérience</h1>
                            <p class="hero-page-subtitle slide-up">Faites reconnaître officiellement vos compétences acquises sur le terrain</p>
                            <div class="hero-cta slide-up">
                                <a href="#contact" class="btn btn-primary btn-lg pulse-hover">
                                    <i class="fas fa-phone-alt"></i>
                                    Être rappelé par un conseiller
                                </a>
                                <a href="#methode" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-arrow-down"></i>
                                    Découvrir notre méthode VAE
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Introduction avec image -->
                <section class="page-intro">
                    <div class="container">
                        <div class="intro-grid">
                            <div class="intro-content">
                                <div class="intro-icon-badge scale-in">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <h2 class="fade-in">Votre expérience vaut un diplôme.</h2>
                                <p class="intro-highlight slide-up">La VAE vous permet d'obtenir une certification RNCP (titre, diplôme, blocs de compétences) <strong>sans repartir en formation</strong>, en faisant valider les compétences acquises sur le terrain.</p>
                                <div class="intro-warning slide-up">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <p>Mais attention : le risque n°1, c'est de partir sur une certification "qui sonne bien"… mais impossible à démontrer. <strong>Nous sécurisons votre démarche dès le départ.</strong></p>
                                </div>
                                <div class="intro-stats slide-up">
                                    <div class="stat-item">
                                        <i class="fas fa-check-circle"></i>
                                        <span class="stat-number">85%</span>
                                        <span class="stat-label">Taux de validation</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-clock"></i>
                                        <span class="stat-number">6-12</span>
                                        <span class="stat-label">Mois en moyenne</span>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-image scale-in">
                                <img src="/assets/images/hero.png" alt="VAE - Validation des acquis">
                                <div class="image-decoration">
                                    <i class="fas fa-award"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave divider -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 600,20 1200,60 L1200,120 L0,120 Z" class="wave-what-we-do"></path>
                    </svg>
                </div>

                <!-- Notre méthode VAE en 3 temps -->
                <section class="what-we-do" id="methode">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-route"></i>
                            </div>
                            <h2 class="section-title fade-in">Notre méthode VAE en 3 temps</h2>
                            <p class="section-subtitle slide-up">Un accompagnement structuré pour maximiser vos chances de validation.</p>
                        </div>

                        <div class="vae-steps">
                            ${this.renderVaeSteps()}
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-orange btn-lg pulse-hover">
                                <i class="fas fa-clipboard-check"></i>
                                Vérifier si la VAE est faite pour moi
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Wave inverted -->
                <div class="wave-divider wave-inverted">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,40 C200,70 400,10 600,50 C800,90 1000,30 1200,80 L1200,0 L0,0 Z" class="wave-yellow-inverted"></path>
                    </svg>
                </div>

                <!-- Ce que nous faisons pour la VAE -->
                <section class="method" id="accompagnement">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-hands-helping"></i>
                        </div>
                        <h2 class="section-title fade-in">Si vous visez une VAE, nous vous aidons à</h2>
                        <div class="vae-services-grid">
                            <div class="vae-service-card scale-in" style="animation-delay: 0.1s">
                                <div class="service-icon">
                                    <i class="fas fa-map-marked-alt"></i>
                                </div>
                                <div class="service-number">01</div>
                                <h3>Cartographier vos expériences</h3>
                                <p>Mise en regard de vos missions, responsabilités et réalisations avec les blocs de compétences du diplôme ou titre visé.</p>
                                <div class="service-decoration">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="vae-service-card scale-in" style="animation-delay: 0.2s">
                                <div class="service-icon">
                                    <i class="fas fa-chess"></i>
                                </div>
                                <div class="service-number">02</div>
                                <h3>Définir la faisabilité & stratégie</h3>
                                <p>VAE totale, par blocs, ou parcours mixte ? Options de financement étudiées, calendrier réaliste établi.</p>
                                <div class="service-decoration">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="vae-service-card scale-in" style="animation-delay: 0.3s">
                                <div class="service-icon">
                                    <i class="fas fa-handshake"></i>
                                </div>
                                <div class="service-number">03</div>
                                <h3>Préparer le passage de relais</h3>
                                <p>Pré-brief au partenaire pour lancer la recevabilité et l'accompagnement VAE sans repartir de zéro.</p>
                                <div class="service-decoration">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Banderole -->
                <section class="hero-banner">
                    <div class="hero-banner-overlay"></div>
                    <svg class="banner-wave-top" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,60 C200,30 400,70 600,40 C800,10 1000,50 1200,30 L1200,0 L0,0 Z" fill="white"/>
                    </svg>
                    <div class="hero-banner-content">
                        <i class="fas fa-quote-left banner-quote-icon"></i>
                        <p><span class="text-orange">Votre expérience parle.</span> Nous vous aidons à la faire entendre.</p>
                        <i class="fas fa-quote-right banner-quote-icon"></i>
                    </div>
                    <svg class="banner-wave-bottom" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,20 C200,50 400,10 600,40 C800,70 1000,30 1200,50 L1200,80 L0,80 Z" fill="white"/>
                    </svg>
                </section>

                <!-- À qui s'adresse la VAE -->
                <section class="target-audience">
                    <div class="container">
                        <div class="audience-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-user-check"></i>
                            </div>
                            <h2 class="section-title fade-in">La VAE est faite pour vous si…</h2>
                        </div>
                        <div class="audience-content">
                            <div class="audience-grid vae-audience">
                                <div class="audience-item slide-up" style="animation-delay: 0.1s">
                                    <div class="audience-icon">
                                        <i class="fas fa-award"></i>
                                    </div>
                                    <p>Vos compétences sont <strong>déjà prouvées sur le terrain</strong></p>
                                    <div class="audience-check"><i class="fas fa-check"></i></div>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.2s">
                                    <div class="audience-icon">
                                        <i class="fas fa-graduation-cap"></i>
                                    </div>
                                    <p>Vous voulez <strong>obtenir un diplôme/titre/bloc reconnu</strong></p>
                                    <div class="audience-check"><i class="fas fa-check"></i></div>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.3s">
                                    <div class="audience-icon">
                                        <i class="fas fa-rocket"></i>
                                    </div>
                                    <p>Vous souhaitez <strong>accélérer une évolution ou mobilité</strong></p>
                                    <div class="audience-check"><i class="fas fa-check"></i></div>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.4s">
                                    <div class="audience-icon">
                                        <i class="fas fa-briefcase"></i>
                                    </div>
                                    <p>Vous avez une <strong>expérience solide</strong> à faire reconnaître</p>
                                    <div class="audience-check"><i class="fas fa-check"></i></div>
                                </div>
                            </div>
                            <div class="audience-image scale-in">
                                <img src="/assets/images/hero.png" alt="Candidats VAE">
                                <div class="audience-image-badge vae-badge">
                                    <i class="fas fa-certificate"></i>
                                    <span>Certification RNCP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave divider -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,20 C150,80 350,10 500,60 C700,100 900,30 1200,70 L1200,120 L0,120 Z" class="wave-financing"></path>
                    </svg>
                </div>

                <!-- Nos engagements -->
                <section class="financing" id="engagements">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h2 class="section-title fade-in">Nos engagements</h2>
                        <div class="engagements-grid">
                            <div class="engagement-card scale-in" style="animation-delay: 0.1s">
                                <div class="engagement-icon">
                                    <i class="fas fa-balance-scale"></i>
                                </div>
                                <div class="engagement-badge">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3>Neutralité & transparence</h3>
                                <p>Nous n'avons pas d'intérêt à "remplir une formation". Notre boussole, c'est la cohérence de votre projet dans la durée.</p>
                            </div>
                            <div class="engagement-card scale-in" style="animation-delay: 0.2s">
                                <div class="engagement-icon">
                                    <i class="fas fa-bolt"></i>
                                </div>
                                <div class="engagement-badge">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3>Efficacité</h3>
                                <p>Des échanges cadrés, un livrable utile, et un passage de relais propre vers le bon organisme.</p>
                            </div>
                            <div class="engagement-card scale-in" style="animation-delay: 0.3s">
                                <div class="engagement-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="engagement-badge">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3>Qualité vérifiable</h3>
                                <p>Partenaires Qualiopi, démarche conforme à une charte déontologique et avis clients vérifiés.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave divider -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,60 C300,20 600,90 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z" class="wave-contact"></path>
                    </svg>
                </div>

                <!-- Important à savoir -->
                <section class="important-note">
                    <div class="container">
                        <div class="note-box slide-up">
                            <div class="note-icon">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <div class="note-content">
                                <strong>Important :</strong> L'accompagnement VAE (dossier de validation + préparation au jury) est ensuite réalisé avec l'organisme / l'accompagnateur choisi. Notre rôle est de sécuriser votre démarche en amont.
                            </div>
                            <div class="note-decoration">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Final + Formulaire -->
                <section class="final-cta" id="contact">
                    <div class="container">
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <div class="cta-icon bounce-in">
                                    <i class="fas fa-rocket"></i>
                                </div>
                                <h3 class="fade-in">Prêt à faire reconnaître votre expérience ?</h3>
                                <p class="slide-up">Un premier échange permet de :</p>
                                <ul class="slide-up">
                                    <li><i class="fas fa-check"></i> Clarifier votre objectif (diplôme complet, blocs, évolution)</li>
                                    <li><i class="fas fa-check"></i> Vérifier la faisabilité de votre projet VAE</li>
                                    <li><i class="fas fa-check"></i> Identifier la certification la plus pertinente</li>
                                </ul>
                                <div class="cta-reassurance">
                                    <div class="reassurance-item">
                                        <i class="fas fa-shield-alt"></i>
                                        <span>Sans engagement</span>
                                    </div>
                                    <div class="reassurance-item">
                                        <i class="fas fa-clock"></i>
                                        <span>Diagnostic gratuit</span>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-form-wrapper" id="contact-form">
                                <div class="form-header">
                                    <i class="fas fa-clipboard-list"></i>
                                    <h3 class="fade-in">Parlez-nous de votre expérience</h3>
                                </div>
                                <p class="slide-up">Nous vous aidons à choisir la bonne voie.</p>
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

    renderVaeSteps() {
        const steps = [
            {
                number: 1,
                icon: "fa-bullseye",
                title: "Mettre votre objectif au clair",
                subtitle: "(et éviter la VAE \"au mauvais diplôme\")",
                content: [
                    "Clarifier votre objectif réel : diplôme complet, blocs de compétences, évolution, sécurisation",
                    "Identifier ce qui, dans votre expérience, est vraiment \"validable\" (missions, responsabilités, contexte)",
                    "Poser la question centrale : \"Quelle certification doit prouver quoi, à partir de mon vécu réel ?\""
                ],
                result: "Résultat : un cap clair, avant de vous lancer dans des mois de dossier.",
                resultIcon: "fa-compass"
            },
            {
                number: 2,
                icon: "fa-lock",
                title: "Verrouiller la bonne certification",
                subtitle: "(référentiel + faisabilité + stratégie)",
                content: [
                    "Alignement expérience ↔ référentiel (ce que le jury attend, ce que vous pouvez prouver)",
                    "Périmètre de validation (total vs blocs, niveau, spécialité)",
                    "Faisabilité concrète (preuves disponibles, temps, rythme, contraintes, financement)"
                ],
                result: "Résultat : une recommandation argumentée noir sur blanc : certification + stratégie de validation.",
                resultIcon: "fa-file-contract"
            },
            {
                number: 3,
                icon: "fa-rocket",
                title: "Lancer la suite sans vous perdre",
                subtitle: "(plan de route + dossier + mise en relation)",
                content: [
                    "Une feuille de route (étapes, timing, jalons, points de vigilance)",
                    "Un plan de preuves (ce qu'il faut rassembler, documenter, illustrer)",
                    "Une mise en relation avec un accompagnateur / organisme partenaire adapté"
                ],
                result: "Résultat : vous démarrez votre VAE avec une trajectoire claire jusqu'au jury.",
                resultIcon: "fa-flag-checkered"
            }
        ];

        return steps.map((step, index) => `
            <div class="vae-step-card slide-up" style="animation-delay: ${0.1 + index * 0.15}s">
                <div class="vae-step-connector ${index === steps.length - 1 ? 'last' : ''}">
                    <div class="connector-line"></div>
                    <div class="connector-dot"></div>
                </div>
                <div class="vae-step-header">
                    <span class="vae-step-number">
                        <i class="fas ${step.icon}"></i>
                        ${step.number}
                    </span>
                    <div class="vae-step-titles">
                        <h3>${step.title}</h3>
                        <span class="vae-step-subtitle">${step.subtitle}</span>
                    </div>
                </div>
                <ul class="vae-step-content">
                    ${step.content.map((item, i) => `
                        <li class="fade-in" style="animation-delay: ${0.2 + i * 0.1}s">
                            <i class="fas fa-check-circle"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
                <div class="vae-step-result">
                    <i class="fas ${step.resultIcon}"></i>
                    <strong>${step.result}</strong>
                </div>
            </div>
        `).join('');
    }

    renderForm() {
        return `
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-user"></i>
                    <input type="text" name="name" placeholder="Votre nom et prénom *" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" placeholder="Votre email *" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-phone"></i>
                    <input type="tel" name="phone" placeholder="Votre téléphone *" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-briefcase"></i>
                    <select name="situation" required>
                        <option value="">Votre situation actuelle *</option>
                        <option value="salarie">Salarié(e)</option>
                        <option value="demandeur-emploi">Demandeur d'emploi</option>
                        <option value="independant">Indépendant(e)</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-history"></i>
                    <select name="experience" required>
                        <option value="">Années d'expérience dans votre domaine *</option>
                        <option value="1-3">1 à 3 ans</option>
                        <option value="3-5">3 à 5 ans</option>
                        <option value="5-10">5 à 10 ans</option>
                        <option value="10+">Plus de 10 ans</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon textarea-icon">
                    <i class="fas fa-graduation-cap"></i>
                    <textarea name="message" rows="4" placeholder="Diplôme ou titre visé + brève description de votre expérience (facultatif)"></textarea>
                </div>
            </div>
            <div class="form-group checkbox-group">
                <label>
                    <input type="checkbox" name="consent" required>
                    <span><i class="fas fa-shield-alt"></i> J'accepte que mes données soient utilisées pour me recontacter.</span>
                </label>
            </div>
            <button type="submit" class="btn btn-orange btn-submit">
                <i class="fas fa-clipboard-check"></i>
                Vérifier ma faisabilité VAE
            </button>
        `;
    }

    attachEvents() {
        const form = this.find('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    handleFormSubmit() {
        const formData = new FormData(this.find('.contact-form'));
        const data = Object.fromEntries(formData);
        console.log('Données du formulaire VAE:', data);
        alert('Merci pour votre demande ! Un conseiller vous contactera pour étudier votre projet VAE.');
        this.find('.contact-form').reset();
    }

    onMount() {
        console.log('VaePage montée');
    }
}
