/**
 * Landing Lilmod — Netlify Forms + CRM Zoho (/api/leads).
 */
import {
    postLeadFromForm,
    showSuccess,
    showError,
    setLoading,
} from '/js/leadSubmit.js';

const NETLIFY_FORM_NAME = 'lilmod-rappel';

function prepareMessage(form) {
    const disponibilite = form.querySelector('[name="disponibilite"]')?.value?.trim() || 'Sans préférence';
    let hidden = form.querySelector('input[name="message"]');
    if (!hidden) {
        hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = 'message';
        form.appendChild(hidden);
    }
    hidden.value = `Demande de rappel — bilan de compétences Lilmod. Disponibilité : ${disponibilite}`;
}

function syncNetlifyMeta(form) {
    let pageUrl = form.querySelector('input[name="page_url"]');
    if (!pageUrl) {
        pageUrl = document.createElement('input');
        pageUrl.type = 'hidden';
        pageUrl.name = 'page_url';
        form.appendChild(pageUrl);
    }
    pageUrl.value = window.location.href;
}

async function submitNetlifyForm(form) {
    const botField = form.querySelector('[name="bot-field"]');
    if (botField?.value) {
        return { ok: true, skipped: true };
    }

    syncNetlifyMeta(form);

    const body = new URLSearchParams();
    body.set('form-name', NETLIFY_FORM_NAME);

    new FormData(form).forEach((value, key) => {
        if (key === 'bot-field' || key === 'form-name') return;
        body.append(key, typeof value === 'string' ? value : String(value));
    });

    if (form.querySelector('input[name="consent"]')?.checked) {
        body.set('consent', 'oui');
    }

    const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
    });

    return { ok: response.ok, status: response.status };
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const errBanner = form.querySelector('.lead-error-banner');
        if (errBanner) errBanner.style.display = 'none';

        if (form.checkValidity && !form.checkValidity()) {
            form.reportValidity();
            return;
        }

        prepareMessage(form);
        setLoading(form, true);

        const [netlifyResult, zohoResult] = await Promise.allSettled([
            submitNetlifyForm(form),
            postLeadFromForm(form, { formType: 'lilmod-bilan-rappel' }),
        ]);

        setLoading(form, false);

        const netlifyOk =
            netlifyResult.status === 'fulfilled' && netlifyResult.value.ok === true;
        const zohoOk =
            zohoResult.status === 'fulfilled'
            && zohoResult.value.ok === true
            && !zohoResult.value.validation;

        if (netlifyOk || zohoOk) {
            showSuccess(form, {
                message:
                    'Merci ! Votre demande de rappel a bien été enregistrée. Un conseiller Lilmod vous contactera très bientôt.',
            });
            return;
        }

        const zohoErr =
            zohoResult.status === 'fulfilled' && zohoResult.value.error
                ? zohoResult.value.error
                : null;
        const netlifyErr =
            netlifyResult.status === 'rejected'
                ? netlifyResult.reason?.message
                : 'Transmission Netlify échouée';

        showError(
            form,
            zohoErr
                || netlifyErr
                || 'Une erreur est survenue. Merci de réessayer ou appelez le +33 9 70 70 83 31.',
        );
    });

    document.querySelectorAll('[data-open-privacy]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('confidentialite')?.showModal();
        });
    });
});
