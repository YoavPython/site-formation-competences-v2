/**
 * Formulaire d'éligibilité en popup (modal)
 * Ouverture via liens avec data-open-eligibility-modal
 */

const MODAL_ID = 'eligibility-modal';

function getModalHTML() {
    return `
    <div id="${MODAL_ID}" class="eligibility-modal" aria-hidden="true">
        <div class="eligibility-modal-overlay"></div>
        <div class="eligibility-modal-box" role="dialog" aria-labelledby="eligibility-modal-title">
            <button type="button" class="eligibility-modal-close" aria-label="Fermer">
                <i class="fas fa-times"></i>
            </button>
            <h2 id="eligibility-modal-title" class="eligibility-modal-title">Vérifier votre éligibilité</h2>
            <p class="eligibility-modal-desc">Ce formulaire sera transmis à nos équipes selon les directives strictes et respectueuses du RGPD et la protection de vos données personnelles.</p>
            <form class="eligibility-form" novalidate>
                <div class="eligibility-form-group">
                    <label for="elig-prenom">Prénom <span class="required">*</span></label>
                    <input type="text" id="elig-prenom" name="prenom" required placeholder="Votre prénom">
                </div>
                <div class="eligibility-form-group">
                    <label for="elig-nom">Nom <span class="required">*</span></label>
                    <input type="text" id="elig-nom" name="nom" required placeholder="Votre nom">
                </div>
                <div class="eligibility-form-group">
                    <label for="elig-email">Email <span class="required">*</span></label>
                    <input type="email" id="elig-email" name="email" required placeholder="votre@email.fr">
                </div>
                <div class="eligibility-form-group">
                    <label for="elig-tel">Téléphone <span class="required">*</span></label>
                    <input type="tel" id="elig-tel" name="telephone" required placeholder="Votre numéro">
                </div>
                <div class="eligibility-form-group">
                    <label for="elig-statut">Quel est votre statut ? <span class="required">*</span></label>
                    <select id="elig-statut" name="statut" required>
                        <option value="">Choisir...</option>
                        <option value="recherche-emploi">Recherche d'emploi</option>
                        <option value="salarie-public">Salarié dans le public</option>
                        <option value="etudiant">Étudiant</option>
                        <option value="salarie-prive">Salarié dans le privé</option>
                        <option value="independant">Indépendant (auto-entreprise)</option>
                    </select>
                </div>
                <div class="eligibility-form-group">
                    <label for="elig-experience">Vous avez travaillé en France <span class="required">*</span></label>
                    <select id="elig-experience" name="experience_france" required>
                        <option value="">Choisir...</option>
                        <option value="moins-2-ans">Moins de 2 ans</option>
                        <option value="entre-2-5-ans">Entre 2 et 5 ans</option>
                        <option value="plus-5-ans">Plus de 5 ans</option>
                    </select>
                </div>
                <button type="submit" class="btn eligibility-form-submit"><i class="fas fa-envelope"></i> Envoyer</button>
            </form>
        </div>
    </div>
    `;
}

function openEligibilityModal() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('#elig-prenom');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function closeEligibilityModal() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const formData = new FormData(form);
    // TODO: envoi réel (API) si besoin
    closeEligibilityModal();
    form.reset();
    alert('Merci pour votre demande ! Un conseiller vous contactera dans les plus brefs délais.');
}

function initEligibilityModal() {
    if (document.getElementById(MODAL_ID)) return;

    document.body.insertAdjacentHTML('beforeend', getModalHTML());
    const modal = document.getElementById(MODAL_ID);
    const overlay = modal.querySelector('.eligibility-modal-overlay');
    const closeBtn = modal.querySelector('.eligibility-modal-close');
    const form = modal.querySelector('.eligibility-form');

    [overlay, closeBtn].forEach(el => {
        if (el) el.addEventListener('click', closeEligibilityModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeEligibilityModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeEligibilityModal();
    });

    if (form) form.addEventListener('submit', handleSubmit);

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-eligibility-modal]');
        if (trigger) {
            e.preventDefault();
            openEligibilityModal();
        }
    });
}

export { initEligibilityModal, openEligibilityModal, closeEligibilityModal };
