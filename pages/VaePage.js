import { Component } from '../js/core/Component.js';

// Page VAE avec le contenu spécifique fourni par l'utilisateur
export class VaePage extends Component {
    template() {
        return `
            <div class="vae-page">
                <!-- Hero Section -->
                <section class="hero">
                    <div class="container">
                        <div class="hero-content">
                            <div class="hero-text">
                                <h1 class="fade-in">VAE - Validation des Acquis de l'Expérience</h1>
                                <p class="hero-subtitle slide-up">
                                    Transformez votre expérience en diplôme reconnu avec notre accompagnement structuré
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Notre méthode VAE en 3 temps -->
                <section class="method" id="methode">
                    <div class="container">
                        <h2 class="section-title fade-in">Notre méthode VAE en 3 temps</h2>
                        <p class="section-subtitle slide-up">Un parcours clair pour transformer votre expérience en diplôme reconnu.</p>
                        
                        <div class="method-cards">
                            ${this.renderVaeMethod()}
                        </div>
                        
                        <div class="method-note slide-up">
                            <p>L'accompagnement VAE <strong>(dossier de validation + préparation au jury)</strong> est ensuite réalisé avec l'organisme choisi.</p>
                        </div>
                    </div>
                </section>

                <!-- Témoignages VAE -->
                <section class="testimonials" id="temoignages">
                    <div class="container">
                        <h2 class="section-title fade-in">Témoignages VAE</h2>
                        <p class="section-subtitle slide-up">Des parcours de réussite avec notre accompagnement</p>
                    </div>
                    
                    <!-- Carrousel en pleine largeur -->
                    <div class="testimonials-carousel">
                        <button class="carousel-btn carousel-btn-prev" aria-label="Précédent">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="testimonials-track">
                            ${this.renderVaeTestimonials()}
                        </div>
                        <button class="carousel-btn carousel-btn-next" aria-label="Suivant">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    
                    <div class="container">
                        <div class="carousel-dots"></div>
                    </div>
                </section>

                <!-- CTA Final + Formulaire -->
                <section class="final-cta" id="contact">
                    <div class="container">
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <h3 class="fade-in">Prêt à transformer votre expérience en diplôme ?</h3>
                                <ul class="slide-up">
                                    <li>Identification du bon diplôme à viser</li>
                                    <li>Vérification de la faisabilité de votre projet VAE</li>
                                    <li>Mise en relation avec un accompagnateur spécialisé</li>
                                </ul>
                                <a href="#contact-form" class="btn btn-orange scale-in">Je souhaite être rappelé(e) par un conseiller VAE</a>
                            </div>

                            <div class="contact-form-wrapper" id="contact-form">
                                <h3 class="fade-in">Parlez-nous de votre projet VAE</h3>
                                <p class="slide-up">Quelques questions pour évaluer la faisabilité de votre VAE.</p>
                                <form class="contact-form" onsubmit="return false;">
                                    ${this.renderForm()}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    renderVaeMethod() {
        const methods = [
            {
                number: "1",
                title: "Mettre votre objectif au clair (et éviter la VAE \"au mauvais diplôme\")",
                content: `
                    <p>Vous arrivez souvent avec une envie simple : faire reconnaître votre expérience… mais sans certitude sur quoi viser ni comment y arriver.</p>
                    <p><strong>Nous vous aidons à :</strong></p>
                    <ul>
                        <li>clarifier votre objectif réel : diplôme complet, blocs de compétences, évolution, sécurisation</li>
                        <li>identifier ce qui, dans votre expérience, est vraiment "validable" (missions, responsabilités, contexte)</li>
                        <li>poser la question centrale : "Quelle certification doit prouver quoi, à partir de mon vécu réel ?"</li>
                    </ul>
                    <p class="result"><strong>Résultat :</strong> un cap clair, avant de vous lancer dans des mois de dossier.</p>
                `
            },
            {
                number: "2",
                title: "Verrouiller la bonne certification (référentiel + faisabilité + stratégie)",
                content: `
                    <p>En VAE, le risque n°1, c'est de partir sur une certification "qui sonne bien"… mais impossible à démontrer.</p>
                    <p><strong>Nous verrouillons le choix avec une grille simple basée sur 3 critères :</strong></p>
                    <ul>
                        <li><strong>Alignement expérience ↔ référentiel</strong> (ce que le jury attend, ce que vous pouvez prouver)</li>
                        <li><strong>Périmètre de validation</strong> (total vs blocs, niveau, spécialité)</li>
                        <li><strong>Faisabilité concrète</strong> (preuves disponibles, temps, rythme, contraintes, financement)</li>
                    </ul>
                    <p class="result"><strong>Résultat :</strong> une recommandation argumentée noir sur blanc : certification + stratégie de validation.</p>
                `
            },
            {
                number: "3",
                title: "Lancer la suite sans vous perdre (plan de route + dossier + mise en relation)",
                content: `
                    <p>Une VAE réussie n'est pas "un dossier administratif". C'est une démonstration structurée de compétences.</p>
                    <p><strong>On sécurise le démarrage sans écrire à votre place :</strong></p>
                    <ul>
                        <li>une <strong>feuille de route</strong> (étapes, timing, jalons, points de vigilance)</li>
                        <li>un <strong>plan de preuves</strong> (ce qu'il faut rassembler, documenter, illustrer)</li>
                        <li>et, si vous le souhaitez, une <strong>mise en relation</strong> avec un accompagnateur / organisme partenaire adapté (selon la certification et votre situation)</li>
                    </ul>
                    <p class="result"><strong>Résultat :</strong> vous démarrez votre VAE dans de bonnes conditions, sans repartir de zéro, avec une trajectoire claire jusqu'au jury.</p>
                `
            }
        ];

        return methods.map(method => `
            <div class="method-card vae-method-card slide-up">
                <div class="method-header">
                    <span class="method-number">${method.number}</span>
                    <h3>${method.title}</h3>
                </div>
                <div class="method-content">
                    ${method.content}
                </div>
            </div>
        `).join('');
    }

    renderVaeTestimonials() {
        const testimonials = [
            {
                title: "VAE DEAS (Aide-soignant)",
                name: "Claire",
                age: 42,
                avatarColor: "#a8d5ff", // Bleu clair
                role: "ASH en EHPAD (nuit) → VAE DEAS",
                text: "Je tournais autour de la VAE depuis des mois sans savoir par où commencer. En deux échanges avec Laurence, ma conseillère VAE on a clarifié ce qui était recevable dans mon parcours, les 5 blocs DEAS à viser et le bon organisme pour m'accompagner au jury. On a monté le dossier de faisabilité en 1 semaine, j'ai eu la recevabilité et j'ai enchaîné sur la préparation. En 5 mois, j'ai validé la VAE 5/5 blocs. Aujourd'hui je suis en poste d'aide-soignante en journée, avec un CDI dans le même EHPAD."
            },
            {
                title: "VAE DEAS (Aide-soignant)",
                name: "Yanis",
                age: 35,
                avatarColor: "#c7f5d9", // Vert menthe clair
                role: "Auxiliaire de vie (SSIAD) → VAE DEAS",
                text: "Je ne voulais pas \"tout lâcher\" pour retourner en école. Mr Vincent Cotti de Formation Compétences m'a aidé à cadrer le bon parcours VAE, poser un timing réaliste avec mes interventions, et choisir un organisme partenaire solide. J'ai compris ce qu'attendait le jury et comment documenter mes situations-pro. J'ai pu valider ma VAE ce qui m'a permis d'évoluer en service sans perdre mes heures d'intervention."
            },
            {
                title: "VAE – Petite enfance (CAP AEPE)",
                name: "Anaïs",
                age: 29,
                avatarColor: "#ffd4a3", // Pêche clair
                role: "Assistante maternelle agréée → VAE CAP AEPE",
                text: "J'avais des années de pratique avec des tout-petits, mais rien sur le papier. On a fait le tri entre ce qui relevait vraiment des blocs du CAP AEPE et ce qui ne comptait pas. J'ai su comment présenter mes preuves (projets d'éveil, sécurité, relation aux parents), et vers quel organisme aller. En Septembre j'ai validé la VAE et j'ai pu ouvrir des créneaux dans une MAM à Lyon avec une vraie reconnaissance de mon métier. Un grand merci à Mme Debussy pour son aide et professionnalisme."
            },
            {
                title: "VAE DEAP (Auxiliaire de puériculture)",
                name: "Léa",
                age: 33,
                avatarColor: "#ffb3d9", // Rose clair
                role: "Agent petite enfance en crèche → VAE DEAP",
                text: "Je ne savais pas si mon expérience couvrait les 5 blocs DEAP. L'équipe m'a aidée à vérifier les prérequis, à sécuriser le financement et à choisir un organisme qui connaît le terrain crèche/hôpital. J'ai préparé des situations professionnelles précises (hygiène, alimentation, éveil, lien aux familles). VAE validée la semaine dernière. J'ai pu candidater en néonat' et Suis même parvenue à négocier mon salaire."
            },
            {
                title: "VAE DEAP (Auxiliaire de puériculture)",
                name: "Hugo",
                age: 40,
                avatarColor: "#d4b3ff", // Violet clair
                role: "Animateur périscolaire (orientation petite enfance) → VAE DEAP",
                text: "J'hésitais entre formation longue et VAE. On a posé ma réalité : contraintes horaires, maturité du projet, et ce qui était finançable. La mise en relation avec un organisme fiable et expérimenté dans le domaine en question m'a aidé à structurer mon dossier sans perdre de temps. J'ai pu valider tous les blocs. Aujourd'hui je travaille en service maternité et enfin sur un contrat stable."
            },
            {
                title: "VAE DEAS (Aide-soignant)",
                name: "Marie",
                age: 38,
                avatarColor: "#ffc4c4", // Rose corail clair
                role: "Agent de service hospitalier → VAE DEAS",
                text: "Après 10 ans à l'hôpital, je voulais enfin avoir mon diplôme d'aide-soignante. L'accompagnement m'a permis de structurer mon dossier avec des situations concrètes de mon quotidien. La préparation au jury était excellente. Résultat : validation totale en 6 mois ! Je suis maintenant AS avec une augmentation de salaire."
            },
            {
                title: "VAE CAP AEPE (Petite enfance)",
                name: "Sophie",
                age: 31,
                avatarColor: "#b3f0ff", // Cyan clair
                role: "Garde d'enfants à domicile → VAE CAP AEPE",
                text: "Je gardais des enfants depuis 8 ans mais sans diplôme. Grâce à l'accompagnement, j'ai compris comment valoriser mon expérience quotidienne. Le dossier était clair et structuré. J'ai validé ma VAE du premier coup et maintenant je peux postuler en crèche avec un vrai statut."
            },
            {
                title: "VAE DEAES (Accompagnant éducatif et social)",
                name: "Thomas",
                age: 45,
                avatarColor: "#fff4b3", // Jaune clair
                role: "Aide médico-psychologique → VAE DEAES",
                text: "Je travaillais auprès de personnes handicapées depuis 15 ans. La VAE m'a permis d'obtenir enfin la reconnaissance officielle de mes compétences. L'équipe m'a aidé à choisir la bonne spécialité et à préparer un dossier solide. Validation complète en 4 mois !"
            }
        ];

        return testimonials.map(testimonial => `
            <div class="testimonial-card vae-testimonial slide-up">
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background: ${testimonial.avatarColor}; color: #333;">
                        ${testimonial.name[0]}
                    </div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name} – ${testimonial.age} ans</h4>
                        <p class="testimonial-role">${testimonial.role}</p>
                        <p class="testimonial-title">${testimonial.title}</p>
                    </div>
                </div>
                <blockquote>${testimonial.text}</blockquote>
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
                <select name="diplome" required>
                    <option value="">Diplôme visé *</option>
                    <option value="deas">DEAS - Diplôme d'État d'Aide-Soignant</option>
                    <option value="deap">DEAP - Diplôme d'État d'Auxiliaire de Puériculture</option>
                    <option value="cap-aepe">CAP AEPE - Accompagnant Éducatif Petite Enfance</option>
                    <option value="deaes">DEAES - Diplôme d'État d'Accompagnant Éducatif et Social</option>
                    <option value="autre">Autre diplôme</option>
                </select>
            </div>
            <div class="form-group">
                <select name="experience" required>
                    <option value="">Années d'expérience dans le domaine *</option>
                    <option value="1-3">1 à 3 ans</option>
                    <option value="3-5">3 à 5 ans</option>
                    <option value="5-10">5 à 10 ans</option>
                    <option value="10+">Plus de 10 ans</option>
                </select>
            </div>
            <div class="form-group">
                <textarea name="message" rows="4" placeholder="Décrivez brièvement votre expérience professionnelle"></textarea>
            </div>
            <div class="form-group checkbox-group">
                <label>
                    <input type="checkbox" name="consent" required>
                    <span>J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande VAE.</span>
                </label>
            </div>
            <button type="submit" class="btn btn-orange">Envoyer ma demande VAE</button>
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
    }

    handleFormSubmit() {
        // Récupérer les données du formulaire
        const formData = new FormData(this.find('.contact-form'));
        const data = Object.fromEntries(formData);
        
        // Ici, vous pouvez envoyer les données à votre backend
        console.log('Données du formulaire VAE:', data);
        
        // Afficher un message de succès
        alert('Merci pour votre demande VAE ! Un conseiller spécialisé vous contactera dans les plus brefs délais.');
        
        // Réinitialiser le formulaire
        this.find('.contact-form').reset();
    }

    onMount() {
        console.log('VaePage montée');
        this.initCarousel();
    }
    
    initCarousel() {
        const track = this.find('.testimonials-track');
        const prevBtn = this.find('.carousel-btn-prev');
        const nextBtn = this.find('.carousel-btn-next');
        const cards = this.findAll('.vae-testimonial');
        const dotsContainer = this.find('.carousel-dots');
        
        if (!track || !cards.length) return;
        
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth + 32; // largeur + gap (2rem = 32px)
        
        // Créer les dots
        cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        
        const updateDots = () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };
        
        const goToSlide = (index) => {
            currentIndex = Math.max(0, Math.min(index, cards.length - 1));
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            updateDots();
        };
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) goToSlide(currentIndex + 1);
        });
        
        // Défilement automatique toutes les 5 secondes
        setInterval(() => {
            if (currentIndex < cards.length - 1) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0); // Retour au début
            }
        }, 5000);
    }
}