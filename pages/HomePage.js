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
                                    <a href="/bilan-de-competences" class="btn btn-primary btn-lg">Réservez un bilan de compétences</a>
                                    <a href="/vae" class="btn btn-secondary btn-lg">Validez vos acquis avec une V.A.E</a>
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
                            <h2 class="section-title fade-in">3 entretiens pour changer le cours de votre vie.</h2>
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
                            <a href="#contact" class="btn btn-secondary btn-lg pulse-hover">
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
                        <p><span class="text-orange">Chaque parcours est unique.</span> Le votre commence ici.</p>
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
                    </div>
                    
                    <div class="testimonials-carousel">
                        <button class="carousel-btn carousel-btn-prev"><i class="fas fa-chevron-left"></i></button>
                        <div class="testimonials-track">
                            ${this.renderTestimonials()}
                        </div>
                        <button class="carousel-btn carousel-btn-next"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="carousel-dots"></div>
                    
                    <div class="container">
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-secondary btn-lg"><i class="fas fa-arrow-right"></i> Rejoindre nos clients satisfaits</a>
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
                <section class="financing-modern">
                    <div class="container">
                        <div class="financing-hero slide-up">
                            <div class="financing-hero-content">
                                <span class="financing-label">💰 Financement</span>
                                <h2>Votre bilan peut être <span class="text-gradient">100% financé</span></h2>
                                <p class="financing-tagline">Pas de mauvaise surprise. On vous explique tout.</p>
                            </div>
                        </div>
                        
                        <div class="financing-options-row slide-up">
                            <div class="financing-pill active" data-target="cpf">
                                <span class="pill-icon">💳</span>
                                <span class="pill-text">CPF</span>
                                <span class="pill-badge">Le + utilisé</span>
                            </div>
                            <div class="financing-pill" data-target="plan">
                                <span class="pill-icon">🏢</span>
                                <span class="pill-text">Plan entreprise</span>
                            </div>
                            <div class="financing-pill" data-target="opco">
                                <span class="pill-icon">🤝</span>
                                <span class="pill-text">OPCO</span>
                            </div>
                            <div class="financing-pill" data-target="france-travail">
                                <span class="pill-icon">📋</span>
                                <span class="pill-text">France Travail</span>
                            </div>
                        </div>
                        
                        <div class="financing-details-panel" id="financing-details">
                            <div class="financing-detail active" id="detail-cpf">
                                <h4>💳 Compte Personnel de Formation (CPF)</h4>
                                <p>Utilisez vos droits acquis tout au long de votre carrière. Accessible à tous les actifs, même en reconversion. Connectez-vous sur moncompteformation.gouv.fr pour connaître votre solde et réserver votre bilan directement en ligne.</p>
                                
                                <p>Le CPF est un dispositif universel qui accumule des droits à la formation tout au long de votre vie professionnelle, à raison de 500€ par an (800€ pour les personnes peu qualifiées), dans la limite de 5000€. Ces droits restent acquis même en cas de changement d'employeur ou de période de chômage.</p>
                                
                                <p>La procédure est entièrement digitalisée : vous créez votre compte, consultez votre solde disponible, choisissez votre organisme de formation certifié Qualiopi, et validez votre inscription en quelques clics. Le paiement est direct et vous n'avez aucune avance de frais à faire. C'est la solution la plus simple et la plus autonome pour financer votre bilan de compétences.</p>
                                <span class="detail-tag">✓ Pour tous les actifs</span>
                                <div class="financing-promise-inline">
                                    <div class="promise-icon">✓</div>
                                    <div class="promise-text">
                                        <strong>Notre promesse :</strong> vous donner une vision claire des options, 
                                        pour que l'argent ne soit ni un tabou, ni un frein.
                                    </div>
                                </div>
                            </div>
                            <div class="financing-detail" id="detail-plan">
                                <h4>🏢 Plan de développement des compétences</h4>
                                <p>Votre employeur finance votre bilan dans le cadre de son plan de formation. Idéal pour évoluer en interne ou préparer une mobilité professionnelle. Parlez-en à votre service RH pour connaître les modalités de prise en charge.</p>
                                
                                <p>Le plan de développement des compétences est un outil stratégique qui permet aux entreprises d'accompagner leurs collaborateurs dans leur évolution professionnelle. Ce dispositif peut être mobilisé pour un projet de reconversion interne, une montée en compétences ou une réflexion sur votre orientation professionnelle.</p>
                                
                                <p>L'avantage principal : vous gardez votre statut de salarié et continuez à être rémunéré pendant votre bilan. Votre employeur peut même prévoir des aménagements d'horaires pour faciliter vos rendez-vous. Cette démarche témoigne d'un engagement mutuel dans votre développement professionnel.</p>
                                <span class="detail-tag">✓ Salariés en poste</span>
                                <div class="financing-promise-inline">
                                    <div class="promise-icon">✓</div>
                                    <div class="promise-text">
                                        <strong>Notre promesse :</strong> vous donner une vision claire des options, 
                                        pour que l'argent ne soit ni un tabou, ni un frein.
                                    </div>
                                </div>
                            </div>
                            <div class="financing-detail" id="detail-opco">
                                <h4>🤝 OPCO - Opérateurs de Compétences</h4>
                                <p>Financement via l'organisme de votre branche professionnelle. Nous vous aidons à identifier le vôtre et à monter le dossier de demande. Un accompagnement personnalisé pour maximiser vos chances d'obtenir le financement.</p>
                                
                                <p>Les OPCO sont des organismes agréés par l'État qui collectent les contributions des entreprises et financent les actions de formation. Il existe 11 OPCO en France, chacun correspondant à un secteur d'activité spécifique (commerce, industrie, services, etc.).</p>
                                
                                <p>Les TPE et PME peuvent bénéficier d'une prise en charge totale ou partielle du coût du bilan de compétences. Nous vous accompagnons dans toutes les étapes : identification de votre OPCO, constitution du dossier administratif, suivi de la demande et gestion des échanges.</p>
                                <span class="detail-tag">✓ TPE/PME</span>
                                <div class="financing-promise-inline">
                                    <div class="promise-icon">✓</div>
                                    <div class="promise-text">
                                        <strong>Notre promesse :</strong> vous donner une vision claire des options, 
                                        pour que l'argent ne soit ni un tabou, ni un frein.
                                    </div>
                                </div>
                            </div>
                            <div class="financing-detail" id="detail-france-travail">
                                <h4>📋 Aide France Travail</h4>
                                <p>Pour les demandeurs d'emploi : AIF (Aide Individuelle à la Formation) ou abondement CPF possible selon votre projet. Votre conseiller France Travail peut vous orienter vers la solution la plus adaptée à votre situation.</p>
                                
                                <p>L'AIF est une aide financière individuelle qui peut prendre en charge tout ou partie du coût de votre bilan de compétences lorsque les autres dispositifs ne suffisent pas. Si vous disposez déjà de droits CPF mais que votre solde est insuffisant, France Travail peut abonder votre compte pour compléter le financement manquant.</p>
                                
                                <p>La décision dépend de plusieurs critères : votre projet professionnel, la pertinence du bilan dans votre parcours de retour à l'emploi, et votre situation personnelle. Il est essentiel de présenter votre projet de manière structurée à votre conseiller pour maximiser vos chances d'obtenir un financement. Nous pouvons vous aider à préparer cette demande.</p>
                                <span class="detail-tag">✓ Demandeurs d'emploi</span>
                                <div class="financing-promise-inline">
                                    <div class="promise-icon">✓</div>
                                    <div class="promise-text">
                                        <strong>Notre promesse :</strong> vous donner une vision claire des options, 
                                        pour que l'argent ne soit ni un tabou, ni un frein.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="section-cta">
                            <a href="#contact" class="btn btn-orange btn-lg"><i class="fas fa-compass"></i> Découvrir mes options</a>
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
                                <h3 class="fade-in">Nos engagements pour votre réussite</h3>
                                <ul class="slide-up">
                                    <li><strong>Clarté totale</strong> Vous savez exactement ce que vous venez chercher dans un bilan</li>
                                    <li><strong>Choix éclairé</strong> Vous ne choisissez plus votre organisme au hasard</li>
                                    <li><strong>Expertise neutre</strong> Un conseiller indépendant qui connaît les dispositifs et les acteurs du marché</li>
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
                title: "Comprendre votre situation",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
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
                title: "Vous aider à y voir clair",
                image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
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
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
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
                    <img src="${step.image}" alt="${step.title}">
                </div>
                <h3>${step.title}</h3>
                <ul>
                    ${step.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="step-result step-result-bg-${step.result.startsWith('Objectif') ? 'objectif' : 'resultat'}"><strong>${step.result.replace(/^(Objectif|Résultat) /, (match, label) => `<span class="step-result-label step-result-${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">${label}</span> `)}</strong></p>
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
            },
            {
                name: "Marc",
                age: 41,
                role: "manager dans l'industrie",
                text: "Après 15 ans dans le même secteur, je sentais qu'il était temps de changer. Mais changer pour quoi ? La préparation m'a permis de clarifier mes envies, mes compétences transférables et de construire un projet réaliste. Aujourd'hui, je suis serein dans ma transition.",
                rating: 5
            },
            {
                name: "Caroline",
                age: 29,
                role: "en questionnement professionnel",
                text: "Je me sentais perdue entre tous les conseils contradictoires qu'on me donnait. L'accompagnement m'a aidée à faire le tri, à identifier ce qui comptait vraiment pour moi et à bâtir un plan d'action concret. Merci pour cette clarté !",
                rating: 5
            },
            {
                name: "Thomas",
                age: 52,
                role: "commercial depuis 25 ans",
                text: "À mon âge, se reconvertir fait peur. L'équipe m'a montré que mon expérience était une richesse, pas un frein. Ils m'ont aidé à valoriser mon parcours et à trouver une nouvelle voie qui me ressemble. Je repars confiant.",
                rating: 5
            },
            {
                name: "Laura",
                age: 35,
                role: "mère de famille en reconversion",
                text: "Concilier vie de famille et projet professionnel semblait impossible. La prépa m'a permis de construire un projet adapté à ma réalité, avec des solutions de financement que je ne connaissais pas. C'est exactement ce dont j'avais besoin.",
                rating: 5
            },
            {
                name: "Ahmed",
                age: 44,
                role: "technicien dans le bâtiment",
                text: "Je voulais évoluer mais je ne savais pas vers quoi. Les entretiens m'ont permis de découvrir des pistes que je n'avais jamais envisagées et qui collent parfaitement à mon profil. Un vrai déclic !",
                rating: 5
            },
            {
                name: "Sophie",
                age: 38,
                role: "responsable RH",
                text: "J'étais dans le flou total sur mon avenir professionnel. L'accompagnement m'a permis de prendre du recul, d'identifier mes vraies motivations et de construire un projet aligné avec mes valeurs. Aujourd'hui, je sais où je vais.",
                rating: 5
            },
            {
                name: "Julien",
                age: 31,
                role: "développeur web",
                text: "Changer de voie après des années dans le même domaine, c'est intimidant. Mais l'équipe m'a guidé pas à pas, m'a aidé à valoriser mes compétences et à trouver un projet qui me passionne vraiment. Merci !",
                rating: 5
            },
            {
                name: "Marie",
                age: 47,
                role: "assistante administrative",
                text: "Je pensais qu'il était trop tard pour me reconvertir. L'accompagnement m'a prouvé le contraire et m'a donné les clés pour réussir ma transition. Je me sens enfin épanouie professionnellement.",
                rating: 5
            },
            {
                name: "David",
                age: 39,
                role: "entrepreneur",
                text: "Après l'échec de mon entreprise, j'avais besoin de rebondir. Le bilan m'a aidé à identifier mes forces, à apprendre de mes erreurs et à repartir sur des bases solides. Une vraie renaissance professionnelle.",
                rating: 5
            },
            {
                name: "Nathalie",
                age: 43,
                role: "infirmière en questionnement",
                text: "Épuisée par mon métier, je ne savais pas vers quoi me tourner. L'accompagnement m'a permis de découvrir des alternatives que je n'avais jamais envisagées. Aujourd'hui, j'ai un nouveau projet qui me motive chaque jour.",
                rating: 5
            },
            {
                name: "Olivier",
                age: 55,
                role: "cadre supérieur",
                text: "À l'approche de la retraite, je voulais donner un nouveau sens à ma carrière. Le bilan m'a aidé à identifier mes priorités et à construire un projet de transmission qui me ressemble. Une démarche enrichissante.",
                rating: 5
            },
            {
                name: "Céline",
                age: 28,
                role: "jeune diplômée",
                text: "Perdue après mes études, je ne savais pas quelle direction prendre. L'équipe m'a aidée à clarifier mes aspirations et à construire un plan de carrière cohérent. Je me sens enfin sur la bonne voie.",
                rating: 5
            }
        ];

        const colorClasses = ['card-color-mauve', 'card-color-yellow', 'card-color-mint', 'card-color-blue'];

        return testimonials.map((testimonial, index) => `
            <div class="testimonial-card ${colorClasses[index % colorClasses.length]}">
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
        
        // Initialiser les pills de financement
        this.initFinancingPills();
        
        // Initialiser le carrousel
        this.initCarousel();
    }
    
    initFinancingPills() {
        const pills = this.findAll('.financing-pill');
        const details = this.findAll('.financing-detail');
        
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                const target = pill.dataset.target;
                
                // Change active state (toujours un ouvert)
                pills.forEach(p => p.classList.remove('active'));
                details.forEach(d => d.classList.remove('active'));
                
                pill.classList.add('active');
                const detail = this.find(`#detail-${target}`);
                if (detail) detail.classList.add('active');
            });
        });
    }
    
    initCarousel() {
        const carousel = this.find('.testimonials-carousel');
        if (!carousel) return;
        
        const track = carousel.querySelector('.testimonials-track');
        const cards = track.querySelectorAll('.testimonial-card');
        const prevBtn = carousel.querySelector('.carousel-btn-prev');
        const nextBtn = carousel.querySelector('.carousel-btn-next');
        const dotsContainer = this.find('.carousel-dots');
        
        let currentIndex = 0;
        const totalCards = cards.length;
        let autoplayInterval;
        
        // Détermine le nombre de cartes à afficher selon la largeur
        const getCardsToShow = () => {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        };
        
        let cardsToShow = getCardsToShow();
        
        // Fonction pour créer/mettre à jour les dots
        const updateDots = () => {
            dotsContainer.innerHTML = '';
            const numDots = Math.max(1, totalCards - cardsToShow + 1);
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                    stopAutoplay();
                    startAutoplay();
                });
                dotsContainer.appendChild(dot);
            }
        };
        
        updateDots();
        const getDots = () => dotsContainer.querySelectorAll('.carousel-dot');
        
        const updateCarousel = () => {
            const cardWidth = cards[0].offsetWidth;
            const gap = 32;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
            
            const dots = getDots();
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        };
        
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % (totalCards - cardsToShow + 1);
            updateCarousel();
        };
        
        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + (totalCards - cardsToShow + 1)) % (totalCards - cardsToShow + 1);
            updateCarousel();
        };
        
        // Démarrer l'autoplay
        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, 4000); // Change toutes les 4 secondes
        };
        
        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };
        
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        });
        
        // Gestion du resize
        window.addEventListener('resize', () => {
            const newCardsToShow = getCardsToShow();
            if (newCardsToShow !== cardsToShow) {
                cardsToShow = newCardsToShow;
                currentIndex = Math.min(currentIndex, totalCards - cardsToShow);
                updateDots();
                updateCarousel();
            }
        });
        
        // Pause au survol
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        
        // Démarrer l'autoplay
        startAutoplay();
        updateCarousel();
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
