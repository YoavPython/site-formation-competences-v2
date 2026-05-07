/**
 * Mapping d'un payload de formulaire (site web) vers un Contact Zoho CRM.
 *
 * IMPORTANT (mode shadow / validation référent) :
 *  - On limite volontairement les champs envoyés à un sous-ensemble standard
 *    et à 2-3 champs custom inoffensifs (description, source page, UTM).
 *  - Aucun champ "métier" sensible (TYPE_DE_LEAD, Statut_d_appel, Lead_fourni_par,
 *    Organisme_de_formation, etc.) n'est rempli automatiquement : c'est le rôle
 *    du référent technique de définir les valeurs picklist autorisées avant
 *    d'étendre le mapping.
 *  - Le mode shadow envoie en plus `trigger: []` côté API : aucun workflow,
 *    aucun blueprint, aucune approval, aucune orchestration ne sera déclenché.
 *
 * Champs de référence (extraits via getFields Contacts) :
 *  - Last_Name (mandatory, text)
 *  - First_Name (text)
 *  - Email (email)
 *  - Phone (phone)
 *  - Description (textarea, standard)
 *  - Lead_Source (picklist, standard)
 *  - Source / Medium / Campagne (text, custom UTM)
 *  - URL (text, custom — page d'origine)
 *  - Donn_e_du_lead (textarea, custom — détails)
 */

const SITUATION_LABELS = {
    salarie: 'Salarié(e)',
    'demandeur-emploi': "Demandeur d'emploi",
    'recherche-emploi': "En recherche d'emploi",
    independant: 'Indépendant(e)',
    'salarie-public': 'Salarié dans le public',
    'salarie-prive': 'Salarié dans le privé',
    etudiant: 'Étudiant',
    autre: 'Autre',
};

const OBJECTIF_LABELS = {
    reconversion: 'Reconversion professionnelle',
    evolution: 'Évolution de carrière',
    validation: "Validation d'acquis (VAE)",
    creation: "Création d'entreprise",
    bilan: 'Faire le point sur mes compétences',
    formation: 'Monter en compétences',
    autre: 'Autre',
};

const EXPERIENCE_LABELS = {
    'moins-2-ans': 'Moins de 2 ans',
    'entre-2-5-ans': 'Entre 2 et 5 ans',
    'plus-5-ans': 'Plus de 5 ans',
};

function splitFullName(fullName) {
    if (!fullName) return { first: '', last: '' };
    const parts = String(fullName).trim().split(/\s+/);
    if (parts.length === 1) return { first: '', last: parts[0] };
    return {
        first: parts[0],
        last: parts.slice(1).join(' '),
    };
}

function pickLabel(map, value) {
    if (!value) return '';
    return map[value] || value;
}

/**
 * Construit la description (textarea) à partir des données enrichies.
 * Lisible humainement, parsable si besoin.
 */
function buildDescription(payload, meta) {
    const lines = [];
    lines.push(`Source : ${meta.source || 'site web'}`);
    if (meta.page) lines.push(`Page d'origine : ${meta.page}`);

    if (payload.situation) {
        lines.push(`Situation : ${pickLabel(SITUATION_LABELS, payload.situation)}`);
    }
    if (payload.objectif) {
        lines.push(`Objectif : ${pickLabel(OBJECTIF_LABELS, payload.objectif)}`);
    }
    if (payload.experience) {
        lines.push(`Expérience : ${pickLabel(EXPERIENCE_LABELS, payload.experience)}`);
    }
    if (payload.experience_france) {
        lines.push(`Expérience en France : ${pickLabel(EXPERIENCE_LABELS, payload.experience_france)}`);
    }
    if (payload.statut) {
        lines.push(`Statut : ${pickLabel(SITUATION_LABELS, payload.statut)}`);
    }

    if (payload.message && String(payload.message).trim() !== '') {
        lines.push('');
        lines.push('Message :');
        lines.push(String(payload.message).trim());
    }

    if (meta.utm && Object.values(meta.utm).some(Boolean)) {
        lines.push('');
        lines.push('Tracking :');
        Object.entries(meta.utm).forEach(([k, v]) => {
            if (v) lines.push(`  - ${k} = ${v}`);
        });
    }

    if (meta.consent) {
        lines.push('');
        lines.push(`Consentement RGPD : OK (${meta.consent})`);
    }

    return lines.join('\n');
}

/**
 * Convertit un payload de formulaire normalisé en un objet Contact Zoho.
 * @param {object} payload - données validées du formulaire
 * @param {object} meta    - { source, page, utm, consent, formType }
 */
function mapToZohoContact(payload, meta = {}) {
    const { first: firstFromFull, last: lastFromFull } = splitFullName(payload.name);
    const firstName = payload.prenom || firstFromFull;
    const lastName = payload.nom || lastFromFull || '—';

    const contact = {
        Last_Name: lastName,
        Description: buildDescription(payload, meta),
    };

    if (firstName) contact.First_Name = firstName;
    if (payload.email) contact.Email = payload.email;
    if (payload.phone || payload.telephone) {
        contact.Phone = payload.phone || payload.telephone;
    }

    if (meta.source) contact.Lead_Source = meta.source;

    if (meta.utm) {
        if (meta.utm.utm_source) contact.Source = meta.utm.utm_source;
        if (meta.utm.utm_medium) contact.Medium = meta.utm.utm_medium;
        if (meta.utm.utm_campaign) contact.Campagne = meta.utm.utm_campaign;
    }

    if (meta.page) contact.URL = meta.page;

    return contact;
}

module.exports = {
    mapToZohoContact,
    buildDescription,
    SITUATION_LABELS,
    OBJECTIF_LABELS,
    EXPERIENCE_LABELS,
};
