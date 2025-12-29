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
                    <div class="container">
                        <div class="hero-page-content">
                            <h1 class="hero-title fade-in">Bilan de compétences</h1>
                            <p class="hero-page-subtitle slide-up">Un accompagnement réellement sur-mesure, pensé pour être juste pour vous</p>
                            <div class="hero-cta slide-up">
                                <a href="#contact" class="btn btn-primary btn-lg">Être rappelé par un conseiller</a>
                                <a href="#methode" class="btn btn-secondary btn-lg">Découvrir notre méthode</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Introduction -->
                <section class="page-intro">
                    <div class="container">
                        <div class="intro-content">
                            <h2 class="fade-in">Pas un produit catalogue.</h2>
                            <p class="intro-highlight slide-up">Un bilan construit à partir de votre situation réelle, de vos contraintes et de votre projet professionnel.</p>
                            <p class="slide-up">Chez <strong>Formation Compétences</strong>, nous considérons qu'un bilan de compétences n'a de valeur que s'il constitue <strong>un véritable pivot dans une carrière</strong>. C'est pourquoi nous avons conçu une méthode qui part de vous — et non d'un programme standard à "remplir".</p>
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
                            <h2 class="section-title fade-in">Ce que vous avez probablement déjà vu ailleurs</h2>
                        </div>
                        <div class="comparison-content slide-up">
                            <p>Avant d'arriver ici, il est fort probable que vous ayez consulté :</p>
                            <ul class="elsewhere-list">
                                <li>Des réseaux nationaux proposant des formules "Essentiel / Classique / Premium", souvent basées sur un programme identique décliné en volumes horaires</li>
                                <li>Des bilans 100 % en ligne, très outillés technologiquement, avec plateformes digitales, ateliers collectifs et communautés</li>
                                <li>Des parcours hybrides mêlant outils digitaux et accompagnement de coachs</li>
                            </ul>
                            <p>Ces approches ont leurs qualités et peuvent convenir à certains profils.</p>
                            <div class="highlight-box">
                                <p><strong>Notre choix est différent.</strong></p>
                                <p>Nous avons fait le pari inverse : <strong>ne pas partir d'un programme standard</strong>, mais <strong>dimensionner le bilan à partir de votre besoin réel</strong>.</p>
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
                        <p><span class="text-orange">Notre promesse :</span> le "bilan juste"</p>
                    </div>
                    <svg class="banner-wave-bottom" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,20 C200,50 400,10 600,40 C800,70 1000,30 1200,50 L1200,80 L0,80 Z" fill="white"/>
                    </svg>
                </section>

                <!-- Notre promesse -->
                <section class="promise-section">
                    <div class="container">
                        <div class="promise-content slide-up">
                            <p class="promise-intro">Nous partons d'un <strong>socle maximal de ressources possibles</strong>, puis nous retirons ce qui n'est pas utile à votre situation.</p>
                            <div class="promise-grid">
                                <div class="promise-item">
                                    <i class="fas fa-file-alt"></i>
                                    <h4>Juste en contenu</h4>
                                    <p>Vous ne payez pas pour des outils ou des tests superflus</p>
                                </div>
                                <div class="promise-item">
                                    <i class="fas fa-clock"></i>
                                    <h4>Juste en durée</h4>
                                    <p>10h, 12h, 18h ou 24h selon une analyse objectivée de votre situation</p>
                                </div>
                                <div class="promise-item">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Juste en méthode</h4>
                                    <p>Plus votre situation est complexe, plus l'ingénierie est adaptée</p>
                                </div>
                                <div class="promise-item">
                                    <i class="fas fa-euro-sign"></i>
                                    <h4>Juste en coût</h4>
                                    <p>Le tarif reflète les moyens réellement engagés, pas une formule figée</p>
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

                <!-- Étapes du bilan -->
                <section class="financing" id="methode">
                    <div class="container">
                        <h2 class="section-title fade-in">Notre méthode en 2 étapes</h2>
                        
                        <div class="etape-card slide-up">
                            <div class="etape-header">
                                <span class="etape-number">1</span>
                                <h3>Le pré-bilan Formation Compétences</h3>
                            </div>
                            <p>Avant toute proposition d'heures, de formule ou de financement, nous réalisons un <strong>pré-bilan structuré</strong>, basé sur :</p>
                            <ul>
                                <li>Des formulaires avancés adaptés à votre statut (salarié, cadre, indépendant, demandeur d'emploi…)</li>
                                <li>L'analyse de votre contexte professionnel</li>
                                <li>Vos objectifs réels (faire le point, évoluer, se reconvertir, sécuriser, préparer une VAE…)</li>
                                <li>Vos contraintes de rythme, de disponibilité et de calendrier</li>
                                <li>Votre niveau de maturité de projet (idée floue, pistes identifiées, projet déjà ciblé)</li>
                            </ul>
                            <p class="etape-result"><strong>Objectif :</strong> ne pas vous "vendre un bilan", mais vous proposer <strong>le bon niveau d'accompagnement</strong>.</p>
                        </div>

                        <div class="etape-card slide-up">
                            <div class="etape-header">
                                <span class="etape-number">2</span>
                                <h3>La Marge de Personnalisation Encadrée (MPE)</h3>
                            </div>
                            <p>Pour éviter le "sur-mesure au ressenti", nous utilisons un modèle interne appelé <strong>Marge de Personnalisation Encadrée</strong>. Votre situation est analysée selon <strong>7 critères opérationnels</strong> :</p>
                            <div class="criteria-grid">
                                <div class="criteria-item"><span>1</span> Contraintes d'exécution et de délais</div>
                                <div class="criteria-item"><span>2</span> Niveau d'expertise et de séniorité requis</div>
                                <div class="criteria-item"><span>3</span> Complexité du projet et du parcours</div>
                                <div class="criteria-item"><span>4</span> Outillage d'évaluation et de restitution</div>
                                <div class="criteria-item"><span>5</span> Investigation et validation terrain</div>
                                <div class="criteria-item"><span>6</span> Besoins d'accessibilité et d'aménagements</div>
                                <div class="criteria-item"><span>7</span> Charge de travail inter-séances et suivi</div>
                            </div>
                            <p class="etape-result"><strong>C'est ce modèle qui justifie objectivement la durée de votre bilan</strong>, sans inflation artificielle.</p>
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
                        <h2 class="section-title fade-in">Ce que comprend concrètement votre bilan</h2>
                        <p class="section-subtitle slide-up">Selon votre situation, votre bilan peut inclure :</p>
                        <div class="includes-grid slide-up">
                            <div class="include-item">
                                <i class="fas fa-video"></i>
                                <p>Entretiens individuels en visio ou en présentiel</p>
                            </div>
                            <div class="include-item">
                                <i class="fas fa-brain"></i>
                                <p>Tests psychométriques et d'intérêts choisis avec discernement</p>
                            </div>
                            <div class="include-item">
                                <i class="fas fa-puzzle-piece"></i>
                                <p>Outils de clarification personnelle</p>
                            </div>
                            <div class="include-item">
                                <i class="fas fa-search"></i>
                                <p>Enquêtes métiers structurées</p>
                            </div>
                            <div class="include-item">
                                <i class="fas fa-chart-line"></i>
                                <p>Analyse du marché de l'emploi</p>
                            </div>
                            <div class="include-item">
                                <i class="fas fa-file-signature"></i>
                                <p>Synthèse écrite complète et plan d'action</p>
                            </div>
                        </div>
                        <p class="includes-note slide-up"><strong>Vous ne mobilisez pas tout systématiquement.</strong> C'est précisément ce qui garantit la pertinence du bilan.</p>
                    </div>
                </section>

                <!-- À qui s'adresse -->
                <section class="target-audience">
                    <div class="container">
                        <h2 class="section-title fade-in">À qui s'adresse notre bilan ?</h2>
                        <div class="audience-grid slide-up">
                            <div class="audience-item">
                                <i class="fas fa-user-times"></i>
                                <p>Personnes qui <strong>refusent les bilans standardisés</strong></p>
                            </div>
                            <div class="audience-item">
                                <i class="fas fa-question-circle"></i>
                                <p>Personnes qui <strong>hésitent entre plusieurs orientations</strong> possibles</p>
                            </div>
                            <div class="audience-item">
                                <i class="fas fa-exclamation-triangle"></i>
                                <p>Personnes vivant une <strong>situation complexe ou contrainte</strong></p>
                            </div>
                            <div class="audience-item">
                                <i class="fas fa-search-dollar"></i>
                                <p>Personnes souhaitant <strong>comprendre précisément</strong> ce qu'elles achètent</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Financements -->
                <section class="financing-section">
                    <div class="container">
                        <h2 class="section-title fade-in">Financements et CPF</h2>
                        <div class="financing-content slide-up">
                            <p>Nos bilans de compétences sont finançables selon les dispositifs existants (CPF, plan de développement des compétences, autres aides possibles selon votre situation).</p>
                            <p>Nous vous aidons à :</p>
                            <ul>
                                <li>Comprendre vos options</li>
                                <li>Vérifier vos droits</li>
                                <li>Articuler votre bilan avec un éventuel projet de formation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- CTA Final + Formulaire -->
                <section class="final-cta" id="contact">
                    <div class="container">
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <h3 class="fade-in">Et maintenant ?</h3>
                                <p class="slide-up">Un premier échange permet de :</p>
                                <ul class="slide-up">
                                    <li>Comprendre votre contexte</li>
                                    <li>Vérifier si un bilan est réellement pertinent</li>
                                    <li>Vous indiquer, en toute transparence, vers quelle durée nous nous orienterions — et pourquoi</li>
                                </ul>
                            </div>

                            <div class="contact-form-wrapper" id="contact-form">
                                <h3 class="fade-in">Parlez-nous de votre situation</h3>
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
                content: "Ce qui se joue dans votre situation actuelle (poste, environnement, fatigue, envies de changement)"
            },
            {
                icon: "fa-gem",
                title: "Identifier vos atouts",
                content: "Vos véritables atouts : compétences, ressources, modes de fonctionnement, talents parfois sous-estimés"
            },
            {
                icon: "fa-compass",
                title: "Explorer des pistes",
                content: "Des pistes crédibles (évolution, reconversion, formation, VAE, sécurisation de parcours)"
            },
            {
                icon: "fa-map",
                title: "Définir un plan d'action",
                content: "Un plan d'action concret, structuré et applicable dans votre réalité"
            }
        ];

        return benefits.map(benefit => `
            <div class="benefit-card scale-in">
                <div class="benefit-icon">
                    <i class="fas ${benefit.icon}"></i>
                </div>
                <h3>${benefit.title}</h3>
                <p>${benefit.content}</p>
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
                    <option value="faire-le-point">Faire le point sur ma carrière</option>
                    <option value="evoluer">Évoluer dans mon entreprise</option>
                    <option value="reconversion">Me reconvertir</option>
                    <option value="securiser">Sécuriser une décision</option>
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
            <button type="submit" class="btn btn-orange">Je souhaite être rappelé(e)</button>
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
    }
}
