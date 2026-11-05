/**
 * Landing Lilmod — soumission vers /api/leads (Zoho via Netlify Function).
 */
import { submitLeadFromForm } from '/js/leadSubmit.js';

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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        prepareMessage(form);
        await submitLeadFromForm(form, {
            formType: 'lilmod-bilan-rappel',
            successMessage:
                'Merci ! Votre demande de rappel a bien été enregistrée. Un conseiller Lilmod vous contactera très bientôt.',
        });
    });

    document.querySelectorAll('[data-open-privacy]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('confidentialite')?.showModal();
        });
    });
});
