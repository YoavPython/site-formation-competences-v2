import { Component } from '../js/core/Component.js';

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
            <div class="bilan-page">
                <!-- Hero Section -->
                <section class="hero hero-page">
                    <div class="hero-page-overlay"></div>
                    <!-- Floating icons decoration -->
                    <div class="floating-icons">
                        <i class="fas fa-graduation-cap float-icon float-1"></i>
                        <i class="fas fa-lightbulb float-icon float-2"></i>
                        <i class="fas fa-chart-line float-icon float-3"></i>
                        <i class="fas fa-compass float-icon float-4"></i>
                        <i class="fas fa-rocket float-icon float-5"></i>
                    </div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-star"></i>
                                <span>Accompagnement sur-mesure</span>
                            </div>
                            <h1 class="hero-title fade-in">Bilan de compétences</h1>
                            <p class="hero-page-subtitle slide-up">Un accompagnement réellement sur-mesure, pensé pour être juste pour vous</p>
                            <div class="hero-cta slide-up">
                                <a href="#contact" class="btn btn-primary btn-lg pulse-hover">
                                    <i class="fas fa-phone-alt"></i>
                                    Être rappelé par un conseiller
                                </a>
                                <a href="#methode" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-arrow-down"></i>
                                    Découvrir notre méthode
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
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <h2 class="fade-in">Pas un produit catalogue.</h2>
                                <p class="intro-highlight slide-up">Un bilan construit à partir de votre situation réelle, de vos contraintes et de votre projet professionnel.</p>
                                <p class="slide-up">Chez <strong>Formation Compétences</strong>, nous considérons qu'un bilan de compétences n'a de valeur que s'il constitue <strong>un véritable pivot dans une carrière</strong>. C'est pourquoi nous avons conçu une méthode qui part de vous — et non d'un programme standard à "remplir".</p>
                                <div class="intro-stats slide-up">
                                    <div class="stat-item">
                                        <i class="fas fa-users"></i>
                                        <span class="stat-number">500+</span>
                                        <span class="stat-label">Personnes accompagnées</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-star"></i>
                                        <span class="stat-number">4.9/5</span>
                                        <span class="stat-label">Satisfaction clients</span>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-image scale-in">
                                <img src="/assets/images/hero.png" alt="Accompagnement personnalisé">
                                <div class="image-decoration">
                                    <i class="fas fa-check-circle"></i>
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

                <!-- Ce que vous avez vu ailleurs -->
                <section class="what-we-do" id="difference">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-eye"></i>
                            </div>
                            <h2 class="section-title fade-in">Ce que vous avez probablement déjà vu ailleurs</h2>
                        </div>
                        <div class="comparison-grid">
                            <div class="comparison-content slide-up">
                                <p>Avant d'arriver ici, il est fort probable que vous ayez consulté :</p>
                                <ul class="elsewhere-list">
                                    <li class="slide-up" style="animation-delay: 0.1s">
                                        <i class="fas fa-box"></i>
                                        <span>Des réseaux nationaux proposant des formules "Essentiel / Classique / Premium", souvent basées sur un programme identique</span>
                                    </li>
                                    <li class="slide-up" style="animation-delay: 0.2s">
                                        <i class="fas fa-laptop"></i>
                                        <span>Des bilans 100 % en ligne, avec plateformes digitales et ateliers collectifs</span>
                                    </li>
                                    <li class="slide-up" style="animation-delay: 0.3s">
                                        <i class="fas fa-random"></i>
                                        <span>Des parcours hybrides mêlant outils digitaux et accompagnement de coachs</span>
                                    </li>
                                </ul>
                                <p class="elsewhere-note fade-in">Ces approches ont leurs qualités et peuvent convenir à certains profils.</p>
                            </div>
                            <div class="highlight-box scale-in">
                                <div class="highlight-icon">
                                    <i class="fas fa-lightbulb"></i>
                                </div>
                                <p><strong>Notre choix est différent.</strong></p>
                                <p>Nous avons fait le pari inverse : <strong>ne pas partir d'un programme standard</strong>, mais <strong>dimensionner le bilan à partir de votre besoin réel</strong>.</p>
                                <div class="highlight-arrow">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Wave inverted -->
                <div class="wave-divider wave-inverted">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,40 C200,70 400,10 600,50 C800,90 1000,30 1200,80 L1200,0 L0,0 Z" class="wave-yellow-inverted"></path>
                    </svg>
                </div>

                <!-- À quoi sert un bilan -->
                <section class="method" id="utilite">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h2 class="section-title fade-in">À quoi sert concrètement un bilan de compétences ?</h2>
                        <p class="section-subtitle slide-up">Au-delà du cadre légal, un bon bilan de compétences doit vous permettre de :</p>
                        <div class="benefits-grid">
                            ${this.renderBenefits()}
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
                        <p><span class="text-orange">Notre promesse :</span> le "bilan juste"</p>
                        <i class="fas fa-quote-right banner-quote-icon"></i>
                    </div>
                    <svg class="banner-wave-bottom" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,20 C200,50 400,10 600,40 C800,70 1000,30 1200,50 L1200,80 L0,80 Z" fill="white"/>
                    </svg>
                </section>

                <!-- Notre promesse -->
                <section class="promise-section">
                    <div class="container">
                        <div class="promise-header">
                            <div class="promise-icon-main bounce-in">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <p class="promise-intro fade-in">Nous partons d'un <strong>socle maximal de ressources possibles</strong>, puis nous retirons ce qui n'est pas utile à votre situation.</p>
                        </div>
                        <div class="promise-grid">
                            <div class="promise-item scale-in" style="animation-delay: 0.1s">
                                <div class="promise-item-icon">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <h4>Juste en contenu</h4>
                                <p>Vous ne payez pas pour des outils ou des tests superflus</p>
                            </div>
                            <div class="promise-item scale-in" style="animation-delay: 0.2s">
                                <div class="promise-item-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <h4>Juste en durée</h4>
                                <p>10h, 12h, 18h ou 24h selon une analyse objectivée</p>
                            </div>
                            <div class="promise-item scale-in" style="animation-delay: 0.3s">
                                <div class="promise-item-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <h4>Juste en méthode</h4>
                                <p>Plus votre situation est complexe, plus l'ingénierie est adaptée</p>
                            </div>
                            <div class="promise-item scale-in" style="animation-delay: 0.4s">
                                <div class="promise-item-icon">
                                    <i class="fas fa-euro-sign"></i>
                                </div>
                                <h4>Juste en coût</h4>
                                <p>Le tarif reflète les moyens réellement engagés</p>
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

                <!-- Étapes du bilan -->
                <section class="financing" id="methode">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-route"></i>
                        </div>
                        <h2 class="section-title fade-in">Notre méthode en 2 étapes</h2>
                        
                        <div class="etapes-timeline">
                            <div class="timeline-line"></div>
                            
                            <div class="etape-card slide-up">
                                <div class="etape-header">
                                    <span class="etape-number">
                                        <i class="fas fa-clipboard-check"></i>
                                        1
                                    </span>
                                    <div class="etape-title-wrapper">
                                        <h3>Le pré-bilan Formation Compétences</h3>
                                        <span class="etape-badge"><i class="fas fa-clock"></i> Étape préliminaire</span>
                                    </div>
                                </div>
                                <div class="etape-content">
                                    <p>Avant toute proposition d'heures, de formule ou de financement, nous réalisons un <strong>pré-bilan structuré</strong>, basé sur :</p>
                                    <ul class="etape-list">
                                        <li><i class="fas fa-check"></i> Des formulaires avancés adaptés à votre statut</li>
                                        <li><i class="fas fa-check"></i> L'analyse de votre contexte professionnel</li>
                                        <li><i class="fas fa-check"></i> Vos objectifs réels (faire le point, évoluer, se reconvertir...)</li>
                                        <li><i class="fas fa-check"></i> Vos contraintes de rythme et de disponibilité</li>
                                        <li><i class="fas fa-check"></i> Votre niveau de maturité de projet</li>
                                    </ul>
                                </div>
                                <div class="etape-result">
                                    <i class="fas fa-bullseye"></i>
                                    <div>
                                        <strong>Objectif :</strong> ne pas vous "vendre un bilan", mais vous proposer <strong>le bon niveau d'accompagnement</strong>.
                                    </div>
                                </div>
                            </div>

                            <div class="etape-card slide-up">
                                <div class="etape-header">
                                    <span class="etape-number">
                                        <i class="fas fa-sliders-h"></i>
                                        2
                                    </span>
                                    <div class="etape-title-wrapper">
                                        <h3>La Marge de Personnalisation Encadrée (MPE)</h3>
                                        <span class="etape-badge"><i class="fas fa-cog"></i> Calibrage précis</span>
                                    </div>
                                </div>
                                <div class="etape-content">
                                    <p>Pour éviter le "sur-mesure au ressenti", nous utilisons un modèle interne. Votre situation est analysée selon <strong>7 critères opérationnels</strong> :</p>
                                    <div class="criteria-grid">
                                        <div class="criteria-item scale-in" style="animation-delay: 0.1s"><span><i class="fas fa-hourglass-half"></i></span> Contraintes d'exécution et délais</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.15s"><span><i class="fas fa-user-graduate"></i></span> Niveau d'expertise requis</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.2s"><span><i class="fas fa-project-diagram"></i></span> Complexité du projet</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.25s"><span><i class="fas fa-tools"></i></span> Outillage d'évaluation</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.3s"><span><i class="fas fa-search"></i></span> Investigation terrain</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.35s"><span><i class="fas fa-universal-access"></i></span> Besoins d'accessibilité</div>
                                        <div class="criteria-item scale-in" style="animation-delay: 0.4s"><span><i class="fas fa-tasks"></i></span> Charge de travail et suivi</div>
                                    </div>
                                </div>
                                <div class="etape-result">
                                    <i class="fas fa-check-double"></i>
                                    <div>
                                        <strong>C'est ce modèle qui justifie objectivement la durée de votre bilan</strong>, sans inflation artificielle.
                                    </div>
                                </div>
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

                <!-- Ce que comprend votre bilan -->
                <section class="what-includes">
                    <div class="container">
                        <div class="section-icon bounce-in">
                            <i class="fas fa-box-open"></i>
                        </div>
                        <h2 class="section-title fade-in">Ce que comprend concrètement votre bilan</h2>
                        <p class="section-subtitle slide-up">Selon votre situation, votre bilan peut inclure :</p>
                        <div class="includes-grid">
                            <div class="include-item scale-in" style="animation-delay: 0.1s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-video"></i>
                                </div>
                                <p>Entretiens individuels en visio ou en présentiel</p>
                            </div>
                            <div class="include-item scale-in" style="animation-delay: 0.15s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-brain"></i>
                                </div>
                                <p>Tests psychométriques et d'intérêts</p>
                            </div>
                            <div class="include-item scale-in" style="animation-delay: 0.2s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-puzzle-piece"></i>
                                </div>
                                <p>Outils de clarification personnelle</p>
                            </div>
                            <div class="include-item scale-in" style="animation-delay: 0.25s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-search"></i>
                                </div>
                                <p>Enquêtes métiers structurées</p>
                            </div>
                            <div class="include-item scale-in" style="animation-delay: 0.3s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <p>Analyse du marché de l'emploi</p>
                            </div>
                            <div class="include-item scale-in" style="animation-delay: 0.35s">
                                <div class="include-icon-wrapper">
                                    <i class="fas fa-file-signature"></i>
                                </div>
                                <p>Synthèse écrite et plan d'action</p>
                            </div>
                        </div>
                        <div class="includes-note slide-up">
                            <i class="fas fa-info-circle"></i>
                            <strong>Vous ne mobilisez pas tout systématiquement.</strong> C'est précisément ce qui garantit la pertinence du bilan.
                        </div>
                    </div>
                </section>

                <!-- À qui s'adresse avec image -->
                <section class="target-audience">
                    <div class="container">
                        <div class="audience-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-users"></i>
                            </div>
                            <h2 class="section-title fade-in">À qui s'adresse notre bilan ?</h2>
                        </div>
                        <div class="audience-content">
                            <div class="audience-grid">
                                <div class="audience-item slide-up" style="animation-delay: 0.1s">
                                    <div class="audience-icon">
                                        <i class="fas fa-user-times"></i>
                                    </div>
                                    <p>Personnes qui <strong>refusent les bilans standardisés</strong></p>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.2s">
                                    <div class="audience-icon">
                                        <i class="fas fa-question-circle"></i>
                                    </div>
                                    <p>Personnes qui <strong>hésitent entre plusieurs orientations</strong></p>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.3s">
                                    <div class="audience-icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <p>Personnes vivant une <strong>situation complexe ou contrainte</strong></p>
                                </div>
                                <div class="audience-item slide-up" style="animation-delay: 0.4s">
                                    <div class="audience-icon">
                                        <i class="fas fa-search-dollar"></i>
                                    </div>
                                    <p>Personnes souhaitant <strong>comprendre précisément</strong> ce qu'elles achètent</p>
                                </div>
                            </div>
                            <div class="audience-image scale-in">
                                <img src="/assets/images/hero.png" alt="Nos clients">
                                <div class="audience-image-badge">
                                    <i class="fas fa-heart"></i>
                                    <span>100% accompagnement humain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Financements avec icônes -->
                <section class="financing-section">
                    <div class="container">
                        <div class="financing-wrapper">
                            <div class="financing-icon-main bounce-in">
                                <i class="fas fa-wallet"></i>
                            </div>
                            <h2 class="section-title fade-in">Financements et CPF</h2>
                            <div class="financing-content slide-up">
                                <p>Nos bilans de compétences sont finançables selon les dispositifs existants :</p>
                                <div class="financing-options">
                                    <div class="financing-option">
                                        <i class="fas fa-id-card"></i>
                                        <span>CPF</span>
                                    </div>
                                    <div class="financing-option">
                                        <i class="fas fa-building"></i>
                                        <span>Plan entreprise</span>
                                    </div>
                                    <div class="financing-option">
                                        <i class="fas fa-hand-holding-usd"></i>
                                        <span>Autres aides</span>
                                    </div>
                                </div>
                                <p>Nous vous aidons à :</p>
                                <ul class="financing-list">
                                    <li><i class="fas fa-check-circle"></i> Comprendre vos options</li>
                                    <li><i class="fas fa-check-circle"></i> Vérifier vos droits</li>
                                    <li><i class="fas fa-check-circle"></i> Articuler votre bilan avec un projet de formation</li>
                                </ul>
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
                                    <i class="fas fa-comments"></i>
                                </div>
                                <h3 class="fade-in">Et maintenant ?</h3>
                                <p class="slide-up">Un premier échange permet de :</p>
                                <ul class="slide-up">
                                    <li><i class="fas fa-check"></i> Comprendre votre contexte</li>
                                    <li><i class="fas fa-check"></i> Vérifier si un bilan est réellement pertinent</li>
                                    <li><i class="fas fa-check"></i> Vous indiquer vers quelle durée nous nous orienterions — et pourquoi</li>
                                </ul>
                                <div class="cta-reassurance">
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

    renderBenefits() {
        const benefits = [
            {
                icon: "fa-lightbulb",
                title: "Comprendre votre situation",
                content: "Ce qui se joue dans votre situation actuelle (poste, environnement, fatigue, envies de changement)",
                color: "orange"
            },
            {
                icon: "fa-gem",
                title: "Identifier vos atouts",
                content: "Vos véritables atouts : compétences, ressources, modes de fonctionnement, talents sous-estimés",
                color: "blue"
            },
            {
                icon: "fa-compass",
                title: "Explorer des pistes",
                content: "Des pistes crédibles (évolution, reconversion, formation, VAE, sécurisation de parcours)",
                color: "orange"
            },
            {
                icon: "fa-map",
                title: "Définir un plan d'action",
                content: "Un plan d'action concret, structuré et applicable dans votre réalité",
                color: "blue"
            }
        ];

        return benefits.map((benefit, index) => `
            <div class="benefit-card scale-in" style="animation-delay: ${0.1 + index * 0.1}s">
                <div class="benefit-icon benefit-icon-${benefit.color}">
                    <i class="fas ${benefit.icon}"></i>
                </div>
                <h3>${benefit.title}</h3>
                <p>${benefit.content}</p>
                <div class="benefit-arrow">
                    <i class="fas fa-arrow-right"></i>
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
                    <i class="fas fa-bullseye"></i>
                    <select name="objectif" required>
                        <option value="">Votre objectif principal *</option>
                        <option value="faire-le-point">Faire le point sur ma carrière</option>
                        <option value="evoluer">Évoluer dans mon entreprise</option>
                        <option value="reconversion">Me reconvertir</option>
                        <option value="securiser">Sécuriser une décision</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon textarea-icon">
                    <i class="fas fa-comment-dots"></i>
                    <textarea name="message" rows="4" placeholder="Votre message (facultatif)"></textarea>
                </div>
            </div>
            <div class="form-group checkbox-group">
                <label>
                    <input type="checkbox" name="consent" required>
                    <span><i class="fas fa-shield-alt"></i> J'accepte que mes données soient utilisées pour me recontacter.</span>
                </label>
            </div>
            <button type="submit" class="btn btn-orange btn-submit">
                <i class="fas fa-paper-plane"></i>
                Je souhaite être rappelé(e)
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
        console.log('Données du formulaire:', data);
        alert('Merci pour votre demande ! Un conseiller vous contactera dans les plus brefs délais.');
        this.find('.contact-form').reset();
    }

    onMount() {
        console.log('BilanCompetencesPage montée');
        this.initNavbarScroll();
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.hero-page');
        
        if (!navbar || !hero) return;
        
        // État initial : fond blanc sur le hero
        navbar.classList.add('navbar-hero');
        
        const handleScroll = () => {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const scrollY = window.scrollY + navbar.offsetHeight;
            
            if (scrollY > heroBottom - 50) {
                // On a dépassé le hero → glass effect
                navbar.classList.remove('navbar-hero');
                navbar.classList.add('navbar-scrolled');
            } else {
                // On est sur le hero → fond blanc
                navbar.classList.add('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial
    }
}
