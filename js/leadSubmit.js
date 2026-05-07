/**
 * Helper partagé pour soumettre un lead vers /api/leads.
 *
 * Affiche un état "envoi", remplace le formulaire par un message de succès
 * inline en cas de succès, et un message d'erreur cliquable en cas d'échec.
 *
 * Usage :
 *   import { submitLeadFromForm } from '/js/leadSubmit.js';
 *   submitLeadFromForm(formEl, { formType: 'home' });
 */

const ENDPOINT = '/api/leads';

function readUtmFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utm = {};
    keys.forEach((k) => {
        const v = params.get(k);
        if (v) utm[k] = v;
    });
    return utm;
}

function showSuccess(formEl, opts = {}) {
    const wrapper = formEl.closest('.contact-form-wrapper, .eligibility-modal-box') || formEl.parentElement;
    if (!wrapper) {
        formEl.style.display = 'none';
        return;
    }

    const successMsg = opts.message
        || 'Merci ! Votre demande a bien été envoyée. Un conseiller vous contactera très bientôt.';

    const oldStatus = wrapper.querySelector('.lead-success-block');
    if (oldStatus) oldStatus.remove();

    formEl.style.display = 'none';

    const block = document.createElement('div');
    block.className = 'lead-success-block';
    block.setAttribute('role', 'status');
    block.setAttribute('aria-live', 'polite');
    block.innerHTML = `
        <div class="lead-success-icon" aria-hidden="true">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3 class="lead-success-title">Demande envoyée</h3>
        <p class="lead-success-message">${successMsg}</p>
        <p class="lead-success-next">Un de nos conseillers prendra contact avec vous sous 24h ouvrées.</p>
    `;

    wrapper.appendChild(block);
}

function showError(formEl, message) {
    const submitBtn = formEl.querySelector('button[type="submit"]');
    let alertEl = formEl.querySelector('.lead-error-banner');
    if (!alertEl) {
        alertEl = document.createElement('div');
        alertEl.className = 'lead-error-banner';
        alertEl.setAttribute('role', 'alert');
        formEl.insertBefore(alertEl, submitBtn || formEl.firstChild);
    }
    alertEl.textContent = message || 'Une erreur est survenue. Merci de réessayer.';
    alertEl.style.display = 'block';
}

function setLoading(formEl, loading) {
    const submitBtn = formEl.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    if (loading) {
        submitBtn.dataset.originalLabel = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    } else {
        submitBtn.disabled = false;
        if (submitBtn.dataset.originalLabel) {
            submitBtn.innerHTML = submitBtn.dataset.originalLabel;
            delete submitBtn.dataset.originalLabel;
        }
    }
}

function ensureHoneypot(formEl) {
    if (formEl.querySelector('input[name="website"]')) return;
    const honey = document.createElement('div');
    honey.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
    honey.setAttribute('aria-hidden', 'true');
    honey.innerHTML = '<label>Laissez ce champ vide<input type="text" name="website" tabindex="-1" autocomplete="off"></label>';
    formEl.prepend(honey);
}

function readForm(formEl) {
    const data = {};
    new FormData(formEl).forEach((value, key) => {
        if (typeof value === 'string') data[key] = value.trim();
        else data[key] = value;
    });
    if (formEl.querySelector('input[name="consent"]')) {
        data.consent = formEl.querySelector('input[name="consent"]').checked;
    }
    return data;
}

/**
 * @param {HTMLFormElement} formEl
 * @param {object} opts
 * @param {string} opts.formType
 * @param {string} [opts.successMessage]
 */
export async function submitLeadFromForm(formEl, opts = {}) {
    if (!formEl) return { ok: false, error: 'Form introuvable' };

    ensureHoneypot(formEl);

    const errBanner = formEl.querySelector('.lead-error-banner');
    if (errBanner) errBanner.style.display = 'none';

    if (formEl.checkValidity && !formEl.checkValidity()) {
        formEl.reportValidity();
        return { ok: false, validation: true };
    }

    const data = readForm(formEl);
    const payload = {
        ...data,
        formType: opts.formType || 'site-web',
        page: window.location.href,
        utm: readUtmFromUrl(),
    };

    setLoading(formEl, true);
    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const json = await response.json().catch(() => ({}));

        if (!response.ok || !json.ok) {
            const msg = json.error
                || (json.errors && Object.values(json.errors).join(' '))
                || 'Une erreur est survenue. Merci de réessayer.';
            showError(formEl, msg);
            setLoading(formEl, false);
            return { ok: false, error: msg, response: json };
        }

        showSuccess(formEl, { message: opts.successMessage });
        try {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'lead_submit', form_type: payload.formType, mode: json.mode });
        } catch (_) {}
        return { ok: true, mode: json.mode, simulated: json.simulated };
    } catch (err) {
        console.error('[lead] submit error', err);
        showError(formEl, 'Connexion impossible. Vérifiez votre réseau et réessayez.');
        setLoading(formEl, false);
        return { ok: false, error: err.message };
    }
}

export default submitLeadFromForm;
