import { Component } from '../js/core/Component.js';

export class BlogPage extends Component {
    template() {
        const articles = [
            {
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                category: 'Bilan',
                title: 'Formez-vous aux métiers qui recruteront en 2025 !',
                excerpt: 'Découvrez comment un bilan de compétences peut vous orienter vers les secteurs porteurs.',
                author: 'Hannah Attali',
                authorInitial: 'H',
                date: 'Il y a 2 mois'
            },
            {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                category: 'Accompagnement',
                title: 'Le blended : la méthode indispensable pour votre évolution',
                excerpt: 'Entretiens en visio et à distance : une approche flexible pour clarifier votre projet professionnel.',
                author: 'Hannah Attali',
                authorInitial: 'H',
                date: 'Il y a 3 mois'
            },
            {
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                category: 'Financement',
                title: "Qu'est-ce qui change en 2025 pour le financement du bilan ?",
                excerpt: 'Découvrez les évolutions prévues pour le CPF et les autres dispositifs de financement.',
                author: 'Yaël',
                authorInitial: 'Y',
                date: 'Il y a 4 mois'
            },
            {
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
                category: 'VAE',
                title: 'VAE : quelles certifications dans les secteurs qui recrutent ?',
                excerpt: 'Analyse des opportunités de VAE et conseils pour choisir la certification adaptée à votre profil.',
                author: 'Formation Compétences',
                authorInitial: 'F',
                date: 'Il y a 5 mois'
            },
            {
                image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop',
                category: 'Reconversion',
                title: 'Reconversion : bien préparer son bilan pour éviter les pièges',
                excerpt: 'Techniques éprouvées pour aborder sereinement un bilan et en tirer un plan d\'action concret.',
                author: 'Hannah Attali',
                authorInitial: 'H',
                date: 'Il y a 5 mois'
            },
            {
                image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop',
                category: 'Qualité',
                title: 'Qualiopi et qualité : ce qui change pour vous',
                excerpt: 'Pourquoi choisir un organisme certifié pour votre bilan ou votre VAE.',
                author: 'Yaël',
                authorInitial: 'Y',
                date: 'Il y a 6 mois'
            }
        ];

        return `
            <div class="blog-page">
                <section class="hero hero-page hero-blog">
                    <div class="hero-page-overlay"></div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-newspaper"></i>
                                <span>Conseils & actualités</span>
                            </div>
                            <h1 class="hero-title fade-in">Blog</h1>
                            <p class="hero-page-subtitle slide-up">Conseils d'experts, analyses et retours d'expérience pour votre projet professionnel</p>
                        </div>
                    </div>
                </section>

                <section class="blog-content">
                    <div class="container">
                        <h2 class="blog-section-title fade-in">Tous nos articles</h2>
                        <div class="blog-grid-sample">
                            ${articles.map((art, i) => `
                                <article class="blog-card-sample slide-up" style="animation-delay: ${i * 0.06}s">
                                    <a href="/#contact" class="blog-card-link-wrap">
                                        <div class="blog-card-image">
                                            <img src="${art.image}" alt="" loading="lazy">
                                        </div>
                                        <div class="blog-card-body">
                                            <span class="blog-card-category">${art.category}</span>
                                            <h3 class="blog-card-title">${art.title}</h3>
                                            ${art.excerpt ? `<p class="blog-card-excerpt">${art.excerpt}</p>` : ''}
                                            <div class="blog-card-meta">
                                                <span class="blog-card-avatar">${art.authorInitial}</span>
                                                <span class="blog-card-author">${art.author}</span>
                                                <span class="blog-card-date">${art.date}</span>
                                            </div>
                                        </div>
                                    </a>
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
