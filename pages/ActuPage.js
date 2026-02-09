import { Component } from '../js/core/Component.js';

export class ActuPage extends Component {
    template() {
        return `
            <div class="actu-top-banner" role="banner">
                <p>À partir du 1er mars, les conditions de prise en charge des bilans de compétences évoluent. Pensez à vérifier votre éligibilité.</p>
            </div>
            <div class="actu-landing actu-bilan">
                <section class="actu-hero-bilan">
                    <div class="container">
                        <div class="actu-hero-grid">
                            <div class="actu-hero-content">
                                <h1 class="actu-h1">Faites votre bilan de compétences gratuitement</h1>
                                <p class="actu-lead">Le bilan de compétences, dispositif reconnu et encadré par l'État, vous permet d'analyser vos compétences, aptitudes et motivations. Il constitue un outil stratégique pour construire un projet professionnel solide, réaliste et aligné avec les besoins du marché de l'emploi.</p>
                                <p class="actu-lead">Accessible à tous les actifs, salariés ou demandeurs d'emploi, le bilan de compétences est un levier efficace pour sécuriser votre parcours professionnel et anticiper les évolutions de votre métier.</p>
                                <ul class="actu-check-list">
                                    <li><i class="fas fa-check-circle"></i> Éligible au CPF</li>
                                    <li><i class="fas fa-check-circle"></i> Éligible à l'OPCO de votre employeur</li>
                                    <li><i class="fas fa-check-circle"></i> Gratuit et sans engagement</li>
                                    <li><i class="fas fa-check-circle"></i> Un conseiller dédié</li>
                                </ul>
                                <a href="/#contact" class="btn btn-primary btn-lg">Vérifier votre éligibilité <i class="fas fa-arrow-right"></i></a>
                            </div>
                            <div class="actu-hero-visual">
                                <img src="/assets/images/hero.png" alt="Bilan de compétences">
                            </div>
                        </div>
                    </div>
                </section>

                <section class="actu-section">
                    <div class="container">
                        <h2 class="actu-h2 text-center">L'État au service de votre avenir professionnel</h2>
                    </div>
                </section>

                <section class="actu-section actu-steps">
                    <div class="container">
                        <h2 class="actu-h2 text-center">Le déroulement du bilan de compétences en 4 étapes</h2>
                        <p class="actu-intro text-center">À différents moments de votre parcours professionnel, il peut être nécessaire de faire le point. Le bilan de compétences constitue alors une véritable opportunité pour mieux vous connaître, mettre en valeur vos expériences, et définir un projet professionnel en accord avec vos aspirations.</p>
                        <p class="actu-intro text-center">Que vous souhaitiez vous reconvertir, évoluer dans votre poste actuel ou simplement redonner un nouvel élan à votre carrière, ce dispositif vous permet de clarifier vos objectifs et d'agir concrètement, avec un accompagnement personnalisé.</p>
                        <div class="actu-steps-grid">
                            <div class="actu-step-card">
                                <div class="actu-step-icon"><i class="fas fa-inbox"></i></div>
                                <h3>Réception de votre candidature</h3>
                                <p>Après avoir rempli le formulaire en bas de page</p>
                            </div>
                            <div class="actu-step-card">
                                <div class="actu-step-icon"><i class="fas fa-search"></i></div>
                                <h3>Analyse de votre parcours</h3>
                                <p>On commence par faire le point sur votre expérience, vos motivations et vos aspirations.</p>
                            </div>
                            <div class="actu-step-card">
                                <div class="actu-step-icon"><i class="fas fa-lightbulb"></i></div>
                                <h3>Identification de vos compétences</h3>
                                <p>Grâce à des échanges et des outils personnalisés, vous découvrez vos atouts, vos savoir-faire et vos leviers d'évolution.</p>
                            </div>
                            <div class="actu-step-card">
                                <div class="actu-step-icon"><i class="fas fa-route"></i></div>
                                <h3>Construction de votre projet professionnel</h3>
                                <p>Vous repartez avec un projet clair, réaliste et motivant — reconversion, formation, ou évolution dans votre poste actuel.</p>
                            </div>
                        </div>
                        <div class="actu-cta-center">
                            <a href="/#contact" class="btn btn-orange btn-lg">Vérifier votre éligibilité</a>
                            <p class="actu-note">Gratuit et sans engagement</p>
                        </div>
                    </div>
                </section>

                <section class="actu-section actu-cards-bilan">
                    <div class="container">
                        <h2 class="actu-h2 text-center">Faites un bilan de compétences</h2>
                        <p class="actu-intro text-center">75 % des personnes ayant réalisé un bilan de compétences sont satisfaites de leurs nouveaux objectifs professionnels. Agissez dès aujourd'hui pour construire l'avenir de votre parcours.</p>
                        <div class="actu-three-cards">
                            <div class="actu-mini-card">
                                <i class="fas fa-user-check"></i>
                                <h3>Un parcours</h3>
                                <p>Unique · Adapté · 100% en ligne</p>
                            </div>
                            <div class="actu-mini-card">
                                <i class="fas fa-hands-helping"></i>
                                <h3>Un accompagnement</h3>
                                <p>Sur-mesure · À votre rythme · Interactif</p>
                            </div>
                            <div class="actu-mini-card">
                                <i class="fas fa-heart"></i>
                                <h3>Une expérience</h3>
                                <p>Humaine · Ludique · Personnalisée</p>
                            </div>
                        </div>
                        <div class="actu-cta-center">
                            <a href="/#contact" class="btn btn-orange btn-lg">Vérifier votre éligibilité</a>
                        </div>
                    </div>
                </section>

                <section class="actu-section actu-legal">
                    <div class="container">
                        <div class="actu-legal-grid">
                            <div class="actu-legal-image">
                                <img src="/assets/images/hero.png" alt="Bilan de compétences">
                            </div>
                            <div class="actu-legal-content">
                                <h2 class="actu-h2">Le bilan de compétences : mieux se connaître pour booster sa carrière</h2>
                                <p>Le Code du travail stipule que « les actions permettant de réaliser un bilan de compétences ont pour objet de permettre à des travailleurs d'analyser leurs compétences professionnelles et personnelles ainsi que leurs aptitudes et leurs motivations, afin de définir un projet professionnel et, le cas échéant, un projet de formation » (articles L.6313-4 et R.6313-4).</p>
                                <p>Autrement dit, le bilan de compétences vise à dresser un portrait clair du bénéficiaire sur le plan professionnel, en mettant en lumière ses atouts et ses leviers d'évolution.</p>
                                <ul class="actu-check-list">
                                    <li><i class="fas fa-check-circle"></i> Finançable via votre Compte Personnel de Formation (CPF)</li>
                                    <li><i class="fas fa-check-circle"></i> Réalisable dans le cadre du Plan de Développement des Compétences de votre entreprise</li>
                                    <li><i class="fas fa-check-circle"></i> Après un rendez-vous de présentation gratuit et sans engagement</li>
                                    <li><i class="fas fa-check-circle"></i> Dans un environnement confidentiel et convivial</li>
                                </ul>
                                <a href="/#contact" class="btn btn-orange btn-lg">Vérifier votre éligibilité</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="actu-section actu-form-cta">
                    <div class="container">
                        <h2 class="actu-h2 text-center">Utilisez le solde de votre compte personnel pour votre bilan de compétences !</h2>
                        <p class="actu-intro text-center">Ce formulaire sera transmis à nos équipes selon les directives strictes et respectueuses du RGPD et la protection de vos données personnelles.</p>
                        <div class="actu-cta-center">
                            <a href="/#contact" class="btn btn-primary btn-lg">Être rappelé par un conseiller</a>
                            <p class="actu-note">Gratuit et sans engagement</p>
                        </div>
                    </div>
                </section>

                <section class="actu-section actu-faq">
                    <div class="container">
                        <h2 class="actu-h2 text-center">FAQ</h2>
                        <div class="actu-faq-list">
                            <div class="actu-faq-item">
                                <button type="button" class="actu-faq-btn">Qu'est-ce que le CPF ?</button>
                                <div class="actu-faq-answer">Le Compte Personnel de Formation (CPF) est un compte individuel permettant de cotiser chaque année afin d'acquérir des droits à la formation dans le domaine de votre choix. Le CPF a remplacé le droit individuel à la formation (DIF) depuis le 1er janvier 2015.</div>
                            </div>
                            <div class="actu-faq-item">
                                <button type="button" class="actu-faq-btn">Quand utiliser le CPF ?</button>
                                <div class="actu-faq-answer">À tout moment, pour financer une formation, changer de métier ou développer vos compétences.</div>
                            </div>
                            <div class="actu-faq-item">
                                <button type="button" class="actu-faq-btn">Dois-je obtenir l'accord de mon employeur ?</button>
                                <div class="actu-faq-answer">Seulement si la formation a lieu pendant vos heures de travail.</div>
                            </div>
                            <div class="actu-faq-item">
                                <button type="button" class="actu-faq-btn">Comment connaître mon solde de formation ?</button>
                                <div class="actu-faq-answer">Connectez-vous sur moncompteformation.gouv.fr avec FranceConnect pour voir votre solde.</div>
                            </div>
                            <div class="actu-faq-item">
                                <button type="button" class="actu-faq-btn">Comment est crédité mon compte CPF ?</button>
                                <div class="actu-faq-answer">Votre compte est alimenté automatiquement chaque année, selon votre temps de travail.</div>
                            </div>
                        </div>
                        <div class="actu-cta-center">
                            <a href="/#contact" class="btn btn-orange btn-lg">Vérifier votre éligibilité</a>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    attachEvents() {
        this.findAll('.actu-faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.actu-faq-item');
                item.classList.toggle('open');
            });
        });
    }

    onMount() {
        this.initNavbarScroll();
        document.body.classList.add('has-actu-banner');
    }

    onDestroy() {
        document.body.classList.remove('has-actu-banner');
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        const main = this.element;
        if (navbar && main) {
            navbar.classList.add('navbar-hero');
            const handleScroll = () => {
                const mainTop = main.offsetTop;
                const scrollY = window.scrollY + navbar.offsetHeight;
                if (scrollY > mainTop - 50) {
                    // Page actu : garder navbar lisible (fond + texte foncé), pas navbar-scrolled
                    navbar.classList.remove('navbar-hero');
                    navbar.classList.remove('navbar-scrolled');
                } else {
                    navbar.classList.add('navbar-hero');
                    navbar.classList.remove('navbar-scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }
    }
}
