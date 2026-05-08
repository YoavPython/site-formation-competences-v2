import { Component } from '../js/core/Component.js';
import { submitLeadFromForm } from '../js/leadSubmit.js';

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
                            <h1 class="hero-title hero-title-orange fade-in">Validation des Acquis de l'Expérience</h1>
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

                <!-- Wave → Section financing (fond grisé léger) -->
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,20 C150,80 350,10 500,60 C700,100 900,30 1200,70 L1200,120 L0,120 Z" class="wave-financing"></path>
                    </svg>
                </div>

                <!-- Financements (identique à l'accueil) -->
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
                    <input type="text" name="name" placeholder="Votre nom et prénom *" required autocomplete="name" autocapitalize="words" enterkeyhint="next">
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" placeholder="Votre email *" required autocomplete="email" inputmode="email" autocapitalize="none" spellcheck="false" enterkeyhint="next">
                </div>
            </div>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-phone"></i>
                    <input type="tel" name="phone" placeholder="Votre téléphone *" required autocomplete="tel" inputmode="tel" enterkeyhint="next">
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
        this.initFinancingPills();
    }

    initFinancingPills() {
        const pills = this.findAll('.financing-pill');
        const details = this.findAll('.financing-detail');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                const target = pill.dataset.target;
                pills.forEach(p => p.classList.remove('active'));
                details.forEach(d => d.classList.remove('active'));
                pill.classList.add('active');
                const detail = this.find(`#detail-${target}`);
                if (detail) detail.classList.add('active');
            });
        });
    }

    async handleFormSubmit() {
        const form = this.find('.contact-form');
        if (!form) return;
        await submitLeadFromForm(form, {
            formType: 'vae',
            successMessage: 'Merci pour votre demande VAE. Un conseiller étudiera votre projet et vous recontactera sous 24h ouvrées.',
        });
    }

    onMount() {
        console.log('VaePage montée');
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
                // En scroll : navbar par défaut (fond lisible, texte foncé) — pas navbar-scrolled sur VAE
                navbar.classList.remove('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            } else {
                navbar.classList.add('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial
    }
}
