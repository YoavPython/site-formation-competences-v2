import { Component } from '../js/core/Component.js';

export class FormationIAPage extends Component {
    constructor() {
        super();
    }

    template() {
        return `
            <div class="formation-ia-page">
                <!-- Hero Section -->
                <section class="hero hero-page hero-formation-ia">
                    <div class="hero-page-overlay"></div>
                    <div class="floating-icons">
                        <i class="fas fa-robot float-icon float-1"></i>
                        <i class="fas fa-brain float-icon float-2"></i>
                        <i class="fas fa-microchip float-icon float-3"></i>
                        <i class="fas fa-network-wired float-icon float-4"></i>
                        <i class="fas fa-cogs float-icon float-5"></i>
                    </div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-brain"></i>
                                <span>Intelligence Artificielle</span>
                            </div>
                            <h1 class="hero-title fade-in">Formez-vous aux métiers de <span class="text-accent">l'intelligence artificielle</span></h1>
                            <p class="hero-page-subtitle slide-up">Développez vos compétences en IA et préparez-vous aux métiers de demain</p>
                            <div class="hero-cta slide-up">
                                <a href="#contact-ia" class="btn btn-primary btn-lg pulse-hover">
                                    <i class="fas fa-phone-alt"></i>
                                    Contactez-nous
                                </a>
                                <a href="#domaines" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-arrow-down"></i>
                                    Découvrir les formations
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Intro : Domaines de l'IA -->
                <section class="ia-section ia-intro" id="domaines">
                    <div class="container">
                        <h2 class="ia-section-title fade-in">Formez-vous aux métiers de l'intelligence artificielle</h2>
                        <p class="ia-section-subtitle slide-up">L'intelligence artificielle (IA) est un domaine en plein essor qui offre de nombreuses opportunités professionnelles. En vous formant aux métiers de l'intelligence, vous pourrez exploiter tout votre potentiel et bénéficier de nombreux avantages.</p>
                        <p class="ia-section-subtitle slide-up">Voici quelques domaines dans lesquels l'IA joue un rôle essentiel :</p>

                        <div class="ia-domaines-grid">
                            <div class="ia-domaines-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Professionnel IA" loading="lazy">
                            </div>
                            <div class="ia-domaines-list">
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Santé</h3>
                                        <p>Dans le domaine de la santé, l'intelligence artificielle permet d'analyser de vastes quantités de données médicales afin de faciliter le diagnostic de maladies, d'assister les chirurgiens lors d'opérations complexes et de promouvoir la recherche médicale.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Transports</h3>
                                        <p>L'intelligence artificielle révolutionne le secteur des transports en permettant la conduite autonome des véhicules. Elle permet également d'optimiser la logistique et la gestion du trafic, réduisant ainsi les temps de trajet et les émissions de gaz à effet de serre.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Finance</h3>
                                        <p>Dans le domaine financier, l'intelligence artificielle est utilisée pour détecter les fraudes, analyser les risques, gérer les portefeuilles et effectuer du trading à haute fréquence. Elle automatise des tâches complexes, améliore la prédiction des marchés et optimise les décisions d'investissement.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Marketing</h3>
                                        <p>L'intelligence artificielle révolutionne le marketing en permettant l'analyse des données clients pour personnaliser les offres et recommandations, optimiser les campagnes publicitaires et améliorer l'expérience utilisateur. Elle facilite également l'automatisation du marketing avec des chatbots et des systèmes de recommandation.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Énergie</h3>
                                        <p>Dans le domaine de l'énergie, l'intelligence artificielle est utilisée pour la gestion intelligente des réseaux électriques, optimisant la production, la distribution et la consommation d'énergie. Elle favorise l'utilisation de sources d'énergie renouvelable, améliore l'efficacité énergétique et contribue à la réduction des émissions de carbone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Métiers de l'IA -->
                <section class="ia-section ia-metiers">
                    <div class="container">
                        <div class="ia-metiers-grid">
                            <div class="ia-metiers-content">
                                <h2 class="ia-section-title fade-in">Les métiers de l'intelligence artificielle : Potentiel, avantages et domaines en synergie</h2>
                                <ul class="ia-metiers-list slide-up">
                                    <li>
                                        <strong>Potentiel :</strong> L'IA offre un potentiel illimité en matière de résolution de problèmes complexes, d'automatisation des tâches répétitives et de création de nouvelles applications innovantes. En vous formant aux métiers de l'intelligence, vous serez en mesure d'exploiter ce potentiel et de contribuer au développement de technologies avancées.
                                    </li>
                                    <li>
                                        <strong>Avantages :</strong> Les métiers de l'intelligence offrent de nombreux avantages, tels que des opportunités de carrière attrayantes, des salaires compétitifs et une demande croissante sur le marché du travail. De plus, travailler dans ce domaine vous permettra de repousser les limites de la technologie et de participer à des projets passionnants.
                                    </li>
                                    <li>
                                        <strong>Domaines :</strong> L'IA est présente dans de nombreux domaines, tels que la santé, les transports, la finance, l'énergie, le marketing, l'éducation, etc. En vous formant aux métiers de l'intelligence, vous pourrez choisir parmi une multitude de domaines d'application et travailler sur des problématiques variées.
                                    </li>
                                </ul>
                            </div>
                            <div class="ia-metiers-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Expert IA au travail" loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Le collectif Symetric AI -->
                <section class="ia-section ia-collectif">
                    <div class="container">
                        <div class="ia-collectif-grid">
                            <div class="ia-collectif-logo scale-in">
                                <img src="/assets/images/symetric-ai-logo.png" alt="Symetric AI" loading="lazy">
                            </div>
                            <div class="ia-collectif-content">
                                <h2 class="ia-section-title fade-in">Le collectif Symetric AI</h2>
                                <p class="slide-up">Le collectif Symetric AI rassemble des experts multi domaines en intelligence artificielle, issus à la fois du monde académique et de l'industrie. Nous mettons notre expertise au service de vos projets et offrons une gamme de services pour accompagner votre entreprise dans son parcours vers l'IA.</p>
                                <p class="slide-up">Voici ce que nous proposons :</p>
                                <div class="ia-collectif-services">
                                    <div class="ia-service-item slide-up">
                                        <div class="ia-service-icon"><i class="fas fa-check-circle"></i></div>
                                        <div class="ia-service-content">
                                            <h3>Certification</h3>
                                            <p>Nous proposons des certifications reconnues dans le domaine de l'intelligence artificielle. Ces certifications attestent de vos compétences et vous permettent de vous démarquer sur le marché du travail.</p>
                                        </div>
                                    </div>
                                    <div class="ia-service-item slide-up">
                                        <div class="ia-service-icon"><i class="fas fa-check-circle"></i></div>
                                        <div class="ia-service-content">
                                            <h3>Accompagnement projet</h3>
                                            <p>Notre collectif d'experts vous accompagne tout au long de votre projet d'intelligence artificielle, de la phase de conception à la mise en œuvre. Nous vous apportons les conseils et l'expertise nécessaires pour garantir le succès de votre projet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Formations -->
                <section class="ia-section ia-formations">
                    <div class="container">
                        <h2 class="ia-section-title fade-in">Formations</h2>
                        <p class="ia-section-subtitle slide-up">L'IA est présente dans de nombreux domaines, tels que la santé, les transports, la finance, l'énergie, le marketing, l'éducation, etc. En vous formant aux métiers de l'intelligence, vous pourrez choisir parmi une multitude de domaines d'application et travailler sur des problématiques variées. Nous proposons une gamme de formations spécialisées dans le domaine de l'intelligence artificielle. Que vous soyez intéressé par l'IA pour le marketing digital, le développement d'applications basées sur l'IA, ou encore l'utilisation de ChatGPT, nous avons des formations adaptées à vos besoins. Voici quelques-unes de nos formations populaires :</p>

                        <div class="ia-formations-grid">
                            <div class="ia-formations-list">
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour le Marketing Digital</h3>
                                        <p>Apprenez comment utiliser l'intelligence artificielle pour optimiser vos stratégies de marketing digital, améliorer la personnalisation des messages et prédire les comportements des consommateurs.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>ChatGPT</h3>
                                        <p>Découvrez comment utiliser ChatGPT, un modèle de langage puissant, pour développer des chatbots intelligents capables de comprendre et de répondre aux requêtes des utilisateurs de manière naturelle.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour Développeurs</h3>
                                        <p>Cette formation s'adresse aux développeurs qui souhaitent acquérir des compétences en intelligence artificielle. Apprenez à mettre en œuvre des algorithmes d'apprentissage automatique, à créer des modèles prédictifs et à intégrer l'IA dans vos applications.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour Décideurs</h3>
                                        <p>Cette formation s'adresse aux professionnels non techniques qui souhaitent comprendre les principes de base de l'intelligence artificielle et son impact sur les entreprises. Vous apprendrez comment tirer parti de l'IA pour prendre des décisions stratégiques éclairées.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="ia-formations-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Formation IA" loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Contact CTA -->
                <section class="ia-section ia-contact" id="contact-ia">
                    <div class="container">
                        <div class="ia-cta-box">
                            <h2 class="fade-in">Prêt à vous lancer dans l'IA ?</h2>
                            <p class="slide-up">Contactez-nous pour en savoir plus sur nos formations et trouver celle qui correspond à vos objectifs.</p>
                            <a href="/#contact" class="btn btn-primary btn-lg pulse-hover slide-up">
                                <i class="fas fa-paper-plane"></i>
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    attachEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }
}
