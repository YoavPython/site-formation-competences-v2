import { Component } from '../js/core/Component.js';

export class BlogPage extends Component {
    template() {
        const articles = [
            {
                title: 'Bilan de compétences : les nouvelles tendances d’accompagnement',
                excerpt: 'Les méthodologies évoluent pour mieux accompagner les bénéficiaires dans leur parcours de développement professionnel. Point sur les formats qui ont fait leurs preuves.',
                icon: 'fa-lightbulb'
            },
            {
                title: 'VAE : quelles certifications dans les secteurs qui recrutent ?',
                excerpt: 'Analyse des opportunités de VAE dans les secteurs porteurs et conseils pour choisir la certification la plus adaptée à votre profil.',
                icon: 'fa-award'
            },
            {
                title: 'Financer son bilan de compétences : CPF, entreprise, OPCO',
                excerpt: 'Guide pratique pour comprendre vos droits et les démarches (CPF, plan entreprise, OPCO, France Travail) afin de financer votre bilan sans reste à charge.',
                icon: 'fa-wallet'
            },
            {
                title: 'Reconversion : bien préparer son bilan pour éviter les pièges',
                excerpt: 'Techniques éprouvées pour aborder sereinement un bilan de compétences et en tirer un plan d’action concret, sans se perdre dans les options.',
                icon: 'fa-route'
            },
            {
                title: 'Qualiopi et qualité : ce qui change pour vous',
                excerpt: 'Point sur les exigences qualité et la certification Qualiopi : pourquoi choisir un organisme certifié pour votre bilan ou votre VAE.',
                icon: 'fa-certificate'
            },
            {
                title: 'Témoignage : « Mon bilan m’a aidée à y voir clair »',
                excerpt: 'Retour d’expérience d’une personne accompagnée par notre réseau : du flou au projet structuré, avec un organisme adapté à sa situation.',
                icon: 'fa-quote-left'
            }
        ];

        return `
            <div class="blog-page">
                <section class="hero hero-page">
                    <div class="hero-page-overlay"></div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-newspaper"></i>
                                <span>Conseils & actualités</span>
                            </div>
                            <h1 class="hero-title fade-in">Blog</h1>
                            <p class="hero-page-subtitle slide-up">Conseils d’experts, analyses et retours d’expérience pour votre projet professionnel</p>
                        </div>
                    </div>
                </section>

                <section class="blog-content">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <h2 class="section-title fade-in">Derniers articles</h2>
                            <p class="section-subtitle slide-up">Explorez nos contenus sur le bilan de compétences, la VAE et l’évolution de carrière.</p>
                        </div>
                        <div class="blog-grid">
                            ${articles.map((art, i) => `
                                <article class="blog-card slide-up" style="animation-delay: ${i * 0.08}s">
                                    <div class="blog-card-icon">
                                        <i class="fas ${art.icon}"></i>
                                    </div>
                                    <h3 class="blog-card-title">${art.title}</h3>
                                    <p class="blog-card-excerpt">${art.excerpt}</p>
                                    <a href="/#contact" class="blog-card-link">Lire la suite <i class="fas fa-arrow-right"></i></a>
                                </article>
                            `).join('')}
                        </div>
                        <div class="blog-cta section-cta">
                            <a href="/#contact" class="btn btn-orange btn-lg"><i class="fas fa-compass"></i> Parler de mon projet</a>
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
