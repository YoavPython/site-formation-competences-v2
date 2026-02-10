import { Component } from '../js/core/Component.js';

// URL de votre page Avis Vérifiés (récupérée dans l'espace client Avis Vérifiés).
// Si vide, le bloc Avis Vérifiés dans le footer ne s'affiche pas.
const AVIS_VERIFIES_PAGE_URL = '';

export class Footer extends Component {
    template() {
        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <div class="footer-logo-container">
                                <div class="footer-logo-wrapper">
                                    <span class="logo-groupe-text" style="color: white;">Formation Compétences</span>
                                    <svg class="logo-svg" width="112" height="50" viewBox="0 0 112 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.42188 18.6973H4.21508V13.5434H9.71137V11.1106H4.21508V7.7047H10.6124V5.27191H1.42188V18.6973Z" fill="#FF6B4A"/>
                                        <path d="M18.5429 18.9135C22.5975 18.9135 25.6611 15.9221 25.6611 11.9756C25.6611 8.02907 22.6156 5.05566 18.5429 5.05566C14.4702 5.05566 11.4247 8.02907 11.4247 11.9756C11.4247 15.9221 14.4883 18.9135 18.5429 18.9135ZM18.5429 16.3907C16.0921 16.3907 14.2179 14.5706 14.2179 11.9756C14.2179 9.38062 16.0921 7.57855 18.5429 7.57855C20.9937 7.57855 22.8679 9.38062 22.8679 11.9756C22.8679 14.5706 20.9937 16.3907 18.5429 16.3907Z" fill="#FF6B4A"/>
                                        <path d="M27.3794 18.6973H30.1726V13.8317H32.5333L35.2544 18.6973H38.39L35.3265 13.3452C36.7501 12.6964 37.6511 11.3989 37.6511 9.56083C37.6511 6.7496 35.6688 5.27191 32.8937 5.27191H27.3794V18.6973ZM30.1726 11.3989V7.7047H32.9117C34.083 7.7047 34.8579 8.44355 34.8579 9.56083C34.8579 10.6601 34.083 11.3989 32.9117 11.3989H30.1726Z" fill="#FF6B4A"/>
                                        <path d="M51.2799 5.27191L46.937 10.9484L42.63 5.27191H39.9269V18.6973H42.7201V9.84916L46.7748 15.2734H47.1352L51.1898 10.0474V18.6973H53.983V5.27191H51.2799Z" fill="#FF6B4A"/>
                                        <path d="M63.4329 5.27191H59.7387L55.1614 18.6973H58.1168L59.0178 15.9582H64.1537L65.0548 18.6973H68.0101L63.4329 5.27191ZM59.8107 13.5254L61.5948 8.08313L63.3608 13.5254H59.8107Z" fill="#FF6B4A"/>
                                        <path d="M70.8727 18.6973H73.6659V7.7047H77.0358V5.27191H67.4668V7.7047H70.8727V18.6973Z" fill="#FF6B4A"/>
                                        <path d="M78.3792 18.6973H81.1724V5.27191H78.3792V18.6973Z" fill="#FF6B4A"/>
                                        <path d="M90.0096 18.9135C94.0642 18.9135 97.1277 15.9221 97.1277 11.9756C97.1277 8.02907 94.0822 5.05566 90.0096 5.05566C85.9369 5.05566 82.8914 8.02907 82.8914 11.9756C82.8914 15.9221 85.9549 18.9135 90.0096 18.9135ZM90.0096 16.3907C87.5587 16.3907 85.6846 14.5706 85.6846 11.9756C85.6846 9.38062 87.5587 7.57855 90.0096 7.57855C92.4604 7.57855 94.3345 9.38062 94.3345 11.9756C94.3345 14.5706 92.4604 16.3907 90.0096 16.3907Z" fill="#FF6B4A"/>
                                        <path d="M107.045 5.27191V13.3452L100.99 5.27191H98.846V18.6973H101.639V10.57L107.676 18.6973H109.839V5.27191H107.045Z" fill="#FF6B4A"/>
                                        <path d="M6.40964 33.2884C8.60225 33.2884 10.214 31.9525 10.7513 30.6021L9.70581 30.0939C9.16855 31.4152 7.99238 32.272 6.40964 32.272C4.01375 32.272 2.30032 30.3988 2.30032 27.7125C2.30032 25.0262 4.01375 23.1385 6.40964 23.1385C7.99238 23.1385 9.16855 24.0097 9.70581 25.3311L10.7513 24.8229C10.214 23.4725 8.60225 22.1221 6.40964 22.1221C3.36032 22.1221 1.13867 24.4744 1.13867 27.7125C1.13867 30.9506 3.36032 33.2884 6.40964 33.2884Z" fill="#FFFFFF"/>
                                        <path d="M17.6863 33.2884C20.6921 33.2884 23.1025 30.9506 23.1025 27.698C23.1025 24.4599 20.6921 22.1221 17.6863 22.1221C14.6806 22.1221 12.2702 24.4454 12.2702 27.698C12.2702 30.9651 14.6806 33.2884 17.6863 33.2884ZM17.6863 32.1993C15.1888 32.1993 13.4318 30.181 13.4318 27.698C13.4318 25.244 15.1743 23.2111 17.6863 23.2111C20.1984 23.2111 21.9409 25.244 21.9409 27.698C21.9409 30.181 20.1839 32.1993 17.6863 32.1993Z" fill="#FFFFFF"/>
                                        <path d="M33.6364 22.2963L29.8611 27.7851L26.0857 22.2963H25.0693V33.1141H26.2309V24.5325L29.832 29.7744H29.8901L33.4912 24.5615V33.1141H34.6528V22.2963H33.6364Z" fill="#FFFFFF"/>
                                        <path d="M36.9807 33.1141H38.1423V28.9032H40.6979C42.9196 28.9032 44.3862 27.5818 44.3862 25.607C44.3862 23.6322 42.9051 22.2963 40.6979 22.2963H36.9807V33.1141ZM38.1423 27.8867V23.3128H40.6979C42.179 23.3128 43.1664 24.2276 43.1664 25.5925C43.1664 26.9719 42.179 27.8867 40.6979 27.8867H38.1423Z" fill="#FFFFFF"/>
                                        <path d="M46.1978 33.1141H53.1677V32.0977H47.3595V28.2062H52.8773V27.1898H47.3595V23.3128H53.1677V22.2963H46.1978V33.1141Z" fill="#FFFFFF"/>
                                        <path d="M57.5401 33.1141H58.7018V23.3128H61.6785V22.2963H54.5489V23.3128H57.5401V33.1141Z" fill="#FFFFFF"/>
                                        <path d="M63.3418 33.1141H70.3116V32.0977H64.5034V28.2062H70.0212V27.1898H64.5034V23.3128H70.3116V22.2963H63.3418V33.1141Z" fill="#FFFFFF"/>
                                        <path d="M79.3161 22.2963V30.8925L73.3627 22.2963H72.3462V33.1141H73.5079V24.4599L79.4613 33.1141H80.4777V22.2963H79.3161Z" fill="#FFFFFF"/>
                                        <path d="M87.705 33.2884C89.8976 33.2884 91.5094 31.9525 92.0467 30.6021L91.0012 30.0939C90.4639 31.4152 89.2878 32.272 87.705 32.272C85.3091 32.272 83.5957 30.3988 83.5957 27.7125C83.5957 25.0262 85.3091 23.1385 87.705 23.1385C89.2878 23.1385 90.4639 24.0097 91.0012 25.3311L92.0467 24.8229C91.5094 23.4725 89.8976 22.1221 87.705 22.1221C84.6557 22.1221 82.434 24.4744 82.434 27.7125C82.434 30.9506 84.6557 33.2884 87.705 33.2884Z" fill="#FFFFFF"/>
                                        <path d="M93.9286 33.1141H100.898V32.0977H95.0902V28.2062H100.608V27.1898H95.0902V23.3128H100.898V22.2963H93.9286V33.1141Z" fill="#FFFFFF"/>
                                        <path d="M106.636 33.2884C108.741 33.2884 110.193 32.0832 110.193 30.3407C110.193 28.9032 109.308 27.9884 107.551 27.4656L105.677 26.9139C104.53 26.5799 103.906 25.8684 103.906 24.9681C103.906 23.8645 104.821 23.1385 106.2 23.1385C107.565 23.1385 108.582 23.85 109.046 25.1859L110.092 24.7067C109.612 23.2982 108.16 22.1221 106.186 22.1221C104.182 22.1221 102.744 23.3418 102.744 25.0552C102.744 26.3621 103.615 27.4656 105.314 27.9593L107.289 28.5402C108.48 28.8887 109.032 29.4404 109.032 30.4424C109.032 31.5314 108.059 32.272 106.636 32.272C105.111 32.272 103.979 31.4588 103.47 29.9341L102.425 30.3843C102.933 31.9815 104.516 33.2884 106.636 33.2884Z" fill="#FFFFFF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M108.653 37.8845C89.3766 36.3071 63.673 36.2995 41.1652 38.8854C25.9165 40.6384 12.126 43.5783 2.64474 47.9814C1.82939 48.3612 2.02323 48.8574 3.07587 49.091C4.12864 49.3278 5.64035 49.2088 6.45569 48.8291C15.2542 44.7393 28.1076 42.0364 42.2699 40.4107C63.8836 37.9284 88.5443 37.9397 107.036 39.459C108.295 39.559 109.675 39.2912 110.122 38.859C110.558 38.424 109.903 37.9881 108.653 37.8845Z" fill="#FF6B4A"/>
                                    </svg>
                                </div>
                            </div>
                            <p class="footer-tagline"><span class="tagline-main">Révélez votre potentiel professionnel</span><br><span class="tagline-sub"><span class="tagline-item">Bilan de compétences</span> <span class="bullet">•</span> <span class="tagline-item">Validation d'acquis</span> <span class="bullet">•</span> <span class="tagline-item">Évolution de carrière</span></span></p>
                            <div class="footer-contact-info">
                                <p><i class="fas fa-envelope"></i> <a href="mailto:contact@groupe-formation-competences.fr">contact@groupe-formation-competences.fr</a></p>
                                <p><i class="fas fa-phone"></i> <a href="tel:0186658299">01 86 65 82 99</a></p>
                                <p><i class="fas fa-map-marker-alt"></i> 16 rue Cuvier, 69006 Lyon</p>
                            </div>
                        </div>
                        <div class="footer-offers">
                            <h5>Nos offres</h5>
                            <ul>
                                <li><a href="/bilan-de-competences">Bilan de compétences</a></li>
                                <li><a href="/vae">Validation des acquis (VAE)</a></li>
                            </ul>
                            <h5>Informations légales</h5>
                            <ul>
                                <li><a href="/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions légales</a></li>
                                <li><a href="/politique-confidentialite" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <h5>À propos</h5>
                            <ul>
                                <li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/#temoignages">Témoignages</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-certification">
                            <h5>Certification</h5>
                            <a href="/assets/documents/QUALIOPI ADLF.pdf" target="_blank" rel="noopener noreferrer" class="qualiopi-link">
                                <img src="/assets/images/qualiopi.jpeg" alt="Certification Qualiopi" class="qualiopi-logo">
                            </a>
                            ${AVIS_VERIFIES_PAGE_URL ? `
                            <div class="footer-avis-verifies" style="margin-top: 1rem;">
                                <h5>Avis clients</h5>
                                <a href="${AVIS_VERIFIES_PAGE_URL}" target="_blank" rel="noopener noreferrer" class="avis-verifies-badge" title="Avis Vérifiés - voir nos avis clients">
                                    <span class="avis-rating">5/5</span>
                                    <span class="avis-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                                    <span class="avis-label">Avis Vérifiés®</span>
                                    <span class="avis-cta">Avis clients</span>
                                </a>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} Formation Compétences. Tous droits réservés.</p>
                        <a href="https://www.linkedin.com/company/groupe-formation-compétences" target="_blank" rel="noopener noreferrer" class="footer-linkedin" title="Suivez-nous sur LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}
