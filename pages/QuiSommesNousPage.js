import { Component } from '../js/core/Component.js';

export class QuiSommesNousPage extends Component {
    template() {
        return `
            <div class="qui-sommes-nous-page">
                <section class="hero hero-page">
                    <div class="hero-page-overlay"></div>
                    <div class="floating-icons">
                        <i class="fas fa-users float-icon float-1"></i>
                        <i class="fas fa-handshake float-icon float-2"></i>
                        <i class="fas fa-award float-icon float-3"></i>
                    </div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-building"></i>
                                <span>Le Groupe</span>
                            </div>
                            <h1 class="hero-title fade-in">Qui sommes-nous ?</h1>
                            <p class="hero-page-subtitle slide-up">Groupe Formation Compétences : votre partenaire pour clarifier votre parcours professionnel</p>
                        </div>
                    </div>
                </section>

                <section class="page-intro">
                    <div class="container">
                        <div class="intro-grid">
                            <div class="intro-content">
                                <div class="intro-icon-badge scale-in">
                                    <i class="fas fa-bullseye"></i>
                                </div>
                                <h2 class="fade-in">Notre mission</h2>
                                <p class="intro-highlight slide-up">Permettre à chacun de <strong>clarifier son projet professionnel</strong> et de choisir le bon dispositif — bilan de compétences ou VAE — avec le bon accompagnement.</p>
                                <p class="slide-up">Nous agissons comme un partenaire de confiance : nous vous aidons à structurer votre projet, identifier vos besoins et vous orienter vers des organismes certifiés Qualiopi.</p>
                            </div>
                            <div class="intro-image scale-in">
                                <img src="/assets/images/hero.png" alt="Groupe Formation Compétences">
                                <div class="image-decoration">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 600,20 1200,60 L1200,120 L0,120 Z" class="wave-what-we-do"></path>
                    </svg>
                </div>

                <section class="what-we-do">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-award"></i>
                            </div>
                            <h2 class="section-title fade-in">Ce que nous vous proposons</h2>
                        </div>
                        <div class="qui-avantages-grid">
                            <div class="qui-avantage-card slide-up">
                                <div class="qui-avantage-icon"><i class="fas fa-certificate"></i></div>
                                <h3>Des certifications reconnues par l'État</h3>
                                <p>Obtenez une certification officielle reconnue par l'État pour booster votre CV et votre carrière !</p>
                            </div>
                            <div class="qui-avantage-card slide-up">
                                <div class="qui-avantage-icon"><i class="fas fa-mobile-alt"></i></div>
                                <h3>Une accessibilité 24/7</h3>
                                <p>Retrouvez vos contenus et votre suivi 24/7 sur ordinateur et sur smartphone.</p>
                            </div>
                            <div class="qui-avantage-card slide-up">
                                <div class="qui-avantage-icon"><i class="fas fa-user-friends"></i></div>
                                <h3>Un accompagnement personnalisé</h3>
                                <p>Bénéficiez d'une approche individualisée et d'un suivi sur-mesure tout au long de votre accompagnement grâce à nos coachs passionnés et nos conseillers experts.</p>
                            </div>
                            <div class="qui-avantage-card slide-up">
                                <div class="qui-avantage-icon"><i class="fas fa-home"></i></div>
                                <h3>100% à domicile</h3>
                                <p>Un accompagnement 100% à distance à suivre à votre propre rythme. Un peu par jour ou 2h chaque week-end ? C'est vous qui choisissez quand suivre l'accompagnement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="hero-banner">
                    <div class="hero-banner-overlay"></div>
                    <svg class="banner-wave-top" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,60 C200,30 400,70 600,40 C800,10 1000,50 1200,30 L1200,0 L0,0 Z" fill="white"/>
                    </svg>
                    <div class="hero-banner-content">
                        <i class="fas fa-quote-left banner-quote-icon"></i>
                        <p><span class="text-orange">Réseau d'organismes certifiés Qualiopi.</span> Avis clients vérifiés.</p>
                        <i class="fas fa-quote-right banner-quote-icon"></i>
                    </svg>
                    <svg class="banner-wave-bottom" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path d="M0,20 C200,50 400,10 600,40 C800,70 1000,30 1200,50 L1200,80 L0,80 Z" fill="white"/>
                    </svg>
                </section>

                <section class="method">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h2 class="section-title fade-in">Une expérience d'accompagnement qui a fait ses preuves</h2>
                            <p class="section-subtitle slide-up">L'approche Formation Compétences peut se résumer en trois mots : Audace, Bienveillance, Écoute.</p>
                        </div>
                        <div class="qui-valeurs-grid">
                            <div class="qui-valeur-card scale-in">
                                <div class="qui-valeur-badge">Audace</div>
                                <h3>Des parcours d'accompagnement ambitieux</h3>
                                <p>Étape après étape, vous montez en clarté jusqu'à la validation de vos acquis : bilan de compétences structuré ou certification VAE.</p>
                            </div>
                            <div class="qui-valeur-card scale-in">
                                <div class="qui-valeur-badge">Bienveillance</div>
                                <h3>Un accompagnement personnalisé</h3>
                                <p>Parce que chaque personne est unique, des conseillers experts vous accompagnent tout au long de votre suivi et apportent des réponses adaptées à chacune de vos problématiques.</p>
                            </div>
                            <div class="qui-valeur-card scale-in">
                                <div class="qui-valeur-badge">Écoute</div>
                                <h3>Une écoute attentive</h3>
                                <p>Votre conseiller dédié vous contacte pour vous conseiller, vous encourager et vous permettre de réaliser vos objectifs le plus sereinement possible.</p>
                            </div>
                        </div>
                        <div class="section-cta">
                            <a href="/#contact" class="btn btn-orange btn-lg"><i class="fas fa-phone-alt"></i> Être rappelé par un conseiller</a>
                        </div>
                    </div>
                </section>

                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,20 C150,80 350,10 500,60 C700,100 900,30 1200,70 L1200,120 L0,120 Z" class="wave-financing"></path>
                    </svg>
                </div>

                <section class="what-we-do">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h2 class="section-title fade-in">La confiance, ça se mesure</h2>
                            <p class="section-subtitle slide-up">Chiffres clés du réseau Groupe Formation Compétences</p>
                        </div>
                        <div class="stats-grid-qui slide-up">
                            <div class="stat-card-qui scale-in">
                                <span class="stat-number-qui">30+</span>
                                <span class="stat-label-qui">Organismes partenaires</span>
                            </div>
                            <div class="stat-card-qui scale-in">
                                <span class="stat-number-qui">180+</span>
                                <span class="stat-label-qui">Collaborateurs</span>
                            </div>
                            <div class="stat-card-qui scale-in">
                                <span class="stat-number-qui">25 000+</span>
                                <span class="stat-label-qui">Accompagnements réalisés</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,60 C300,20 600,90 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z" class="wave-footer"></path>
                    </svg>
                </div>
            </div>
        `;
    }

    onMount() {
        this.initNavbarScroll();
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.hero-page');
        if (!navbar || !hero) return;
        navbar.classList.add('navbar-hero');
        const handleScroll = () => {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const scrollY = window.scrollY + navbar.offsetHeight;
            if (scrollY > heroBottom - 50) {
                navbar.classList.remove('navbar-hero');
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.add('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
}
