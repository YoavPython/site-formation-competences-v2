// ========================================
// Gestion du menu mobile
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animation du bouton hamburger
            this.classList.toggle('active');
        });
        
        // Fermer le menu lors du clic sur un lien
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ========================================
// Smooth scroll pour les ancres
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Gestion du formulaire de contact
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(this);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Validation basique
        if (!validateForm(data)) {
            return;
        }
        
        // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
        console.log('Données du formulaire:', data);
        
        // Affichage du message de succès
        showSuccessMessage();
        
        // Réinitialisation du formulaire
        this.reset();
    });
}

// ========================================
// Validation du formulaire
// ========================================
function validateForm(data) {
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError('Veuillez entrer une adresse email valide.');
        return false;
    }
    
    // Validation du téléphone
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(data.phone)) {
        showError('Veuillez entrer un numéro de téléphone valide.');
        return false;
    }
    
    // Vérification du consentement
    if (!data.consent) {
        showError('Veuillez accepter les conditions d\'utilisation.');
        return false;
    }
    
    return true;
}

// ========================================
// Affichage des messages
// ========================================
function showSuccessMessage() {
    const successDiv = document.querySelector('.form-success');
    if (successDiv) {
        successDiv.style.display = 'block';
        
        // Scroll vers le message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Masquer après 5 secondes
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }
}

function showError(message) {
    // Créer ou mettre à jour le message d'erreur
    let errorDiv = document.querySelector('.form-error');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            background: #ef4444;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
        `;
        contactForm.insertBefore(errorDiv, contactForm.firstChild);
    }
    
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    // Masquer après 3 secondes
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

// ========================================
// Animation au scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.process-step, .method-card, .testimonial-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Classe pour l'animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========================================
// Navbar sticky avec changement de style et parallaxe hero
// ========================================
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // La navbar reste toujours visible
    navbar.style.transform = 'translateY(0)';
    
    // Effet parallaxe sur le hero
    if (hero && currentScroll < 800) {
        hero.style.backgroundPositionY = `${50 + currentScroll * 0.5}%`;
    }
});

// Style pour navbar scrolled
const navbarStyle = document.createElement('style');
navbarStyle.textContent = `
    .navbar.scrolled {
        box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
    }
    
    .navbar.scrolled .logo-icon {
        width: 40px;
        height: 40px;
    }
    
    .navbar.scrolled .logo-icon i {
        font-size: 1.25rem;
    }
    
    .navbar.scrolled .logo-subtitle {
        font-size: 1rem;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(navbarStyle);

// ========================================
// Chargement progressif des images (lazy loading)
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback pour les navigateurs qui ne supportent pas le lazy loading natif
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Gestion des erreurs globales
// ========================================
window.addEventListener('error', function(e) {
    console.error('Erreur globale:', e.error);
});

// ========================================
// Protection contre le spam du formulaire
// ========================================
let formSubmitCount = 0;
const maxSubmits = 3;
const resetTime = 60000; // 1 minute

contactForm?.addEventListener('submit', function(e) {
    formSubmitCount++;
    
    if (formSubmitCount > maxSubmits) {
        e.preventDefault();
        showError('Trop de tentatives. Veuillez réessayer dans quelques instants.');
        return false;
    }
    
    setTimeout(() => {
        formSubmitCount = Math.max(0, formSubmitCount - 1);
    }, resetTime);
});

// ========================================
// Initialisation
// ========================================
console.log('Site Groupe Formation Compétences chargé avec succès');

// Ajout d'une classe au body une fois le DOM chargé
document.body.classList.add('loaded');

