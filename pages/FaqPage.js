import { Component } from '../js/core/Component.js';

export class FaqPage extends Component {
    constructor() {
        super();
        this.state = { openId: null };
    }

    template() {
        const faqs = [
            {
                id: 'bilan-c-est-quoi',
                q: 'Qu’est-ce qu’un bilan de compétences ?',
                a: 'Le bilan de compétences est un dispositif encadré par le Code du travail. Il permet de faire le point sur vos compétences, aptitudes et motivations pour définir un projet professionnel ou de formation. Il se déroule avec un organisme certifié Qualiopi et peut être financé (CPF, plan entreprise, OPCO, France Travail).'
            },
            {
                id: 'vae-c-est-quoi',
                q: 'Qu’est-ce que la VAE ?',
                a: 'La Validation des Acquis de l’Expérience (VAE) permet d’obtenir tout ou partie d’un diplôme ou titre professionnel en faisant valider votre expérience. Vous constituez un dossier et passez devant un jury, sans repartir en formation. Nous vous aidons à clarifier votre objectif et à vous orienter vers la bonne certification.'
            },
            {
                id: 'financement',
                q: 'Comment financer mon bilan ou ma VAE ?',
                a: 'Plusieurs options : le CPF (Compte Personnel de Formation), le plan de développement des compétences de votre entreprise, les OPCO (branche professionnelle) ou France Travail (demandeurs d’emploi). Nous vous expliquons les démarches et vous aidons à identifier la solution la plus adaptée à votre situation.'
            },
            {
                id: 'gratuit',
                q: 'Votre accompagnement est-il gratuit ?',
                a: 'Oui. Notre rôle est de vous aider à clarifier votre projet et à choisir le bon dispositif et le bon organisme. Cet accompagnement préalable est gratuit et sans engagement. Les frais éventuels concernent ensuite le bilan ou l’accompagnement VAE réalisé par l’organisme partenaire.'
            },
            {
                id: 'qualiopi',
                q: 'Que signifie « certifié Qualiopi » ?',
                a: 'Qualiopi est la certification qualité des prestataires de formation et de bilan de compétences. Elle garantit le sérieux des processus, la compétence des intervenants et le respect des règles. Nous travaillons uniquement avec des organismes certifiés Qualiopi.'
            },
            {
                id: 'duree-bilan',
                q: 'Combien de temps dure un bilan de compétences ?',
                a: 'La durée varie selon votre situation et l’organisme (souvent entre 10h et 24h d’accompagnement). Lors de notre premier échange, nous vous aidons à cerner le niveau d’accompagnement adapté à votre projet et vos contraintes.'
            },
            {
                id: 'distance',
                q: 'Peut-on faire un bilan ou une VAE à distance ?',
                a: 'Oui. Beaucoup de nos partenaires proposent un accompagnement 100 % à distance (visio). Nous prenons en compte vos contraintes (lieu, rythme, télétravail) pour vous orienter vers une formule adaptée.'
            }
        ];

        return `
            <div class="faq-page">
                <section class="hero hero-page">
                    <div class="hero-page-overlay"></div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-question-circle"></i>
                                <span>Réponses à vos questions</span>
                            </div>
                            <h1 class="hero-title fade-in">FAQ</h1>
                            <p class="hero-page-subtitle slide-up">Tout ce que vous devez savoir sur le bilan de compétences et la VAE</p>
                        </div>
                    </div>
                </section>

                <section class="faq-section">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-icon bounce-in">
                                <i class="fas fa-comments"></i>
                            </div>
                            <h2 class="section-title fade-in">Questions fréquentes</h2>
                        </div>
                        <div class="faq-grid">
                            ${faqs.map(f => `
                                <div class="faq-item faq-accordion-item slide-up" data-faq-id="${f.id}">
                                    <button type="button" class="faq-question faq-toggle" aria-expanded="false">
                                        <span>${f.q}</span>
                                        <i class="fas fa-chevron-down faq-chevron"></i>
                                    </button>
                                    <div class="faq-answer faq-answer-panel">${f.a}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="section-cta">
                            <a href="/#contact" class="btn btn-orange btn-lg"><i class="fas fa-phone-alt"></i> Une autre question ? Contactez-nous</a>
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

    attachEvents() {
        this.findAll('.faq-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.faq-accordion-item');
                const panel = item.querySelector('.faq-answer-panel');
                const isOpen = item.classList.contains('open');
                this.findAll('.faq-accordion-item').forEach(i => {
                    i.classList.remove('open');
                    i.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
                });
                if (!isOpen) {
                    item.classList.add('open');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });
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
