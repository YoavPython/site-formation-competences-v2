import { Component } from '../js/core/Component.js';

/**
 * Composant Form réutilisable
 * Props:
 * - fields: array of field objects
 * - onSubmit: callback function
 * - submitText: string (default: "Envoyer")
 * - className: string
 */
export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {},
            errors: {},
            isSubmitting: false
        };
        
        // Initialiser les valeurs par défaut
        if (props.fields) {
            props.fields.forEach(field => {
                this.state.values[field.name] = field.defaultValue || '';
            });
        }
    }
    
    template() {
        const { className = '', submitText = 'Envoyer' } = this.props;
        const { isSubmitting } = this.state;
        
        return `
            <form class="form-component ${className}" novalidate>
                ${this.renderFields()}
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary" ${isSubmitting ? 'disabled' : ''}>
                        ${isSubmitting ? 'Envoi en cours...' : submitText}
                    </button>
                </div>
            </form>
        `;
    }
    
    renderFields() {
        const { fields = [] } = this.props;
        const { values, errors } = this.state;
        
        return fields.map(field => {
            const error = errors[field.name];
            const value = values[field.name];
            
            return `
                <div class="form-group ${error ? 'has-error' : ''}">
                    ${this.renderField(field, value)}
                    ${error ? `<span class="form-error">${error}</span>` : ''}
                </div>
            `;
        }).join('');
    }
    
    renderField(field, value) {
        const { type = 'text', name, label, placeholder, required, options, rows = 4 } = field;
        
        switch(type) {
            case 'select':
                return `
                    ${label ? `<label for="${name}">${label}${required ? ' *' : ''}</label>` : ''}
                    <select 
                        name="${name}" 
                        id="${name}"
                        ${required ? 'required' : ''}
                        data-field="${name}"
                    >
                        ${placeholder ? `<option value="">${placeholder}</option>` : ''}
                        ${options ? options.map(opt => `
                            <option value="${opt.value}" ${value === opt.value ? 'selected' : ''}>
                                ${opt.label}
                            </option>
                        `).join('') : ''}
                    </select>
                `;
                
            case 'textarea':
                return `
                    ${label ? `<label for="${name}">${label}${required ? ' *' : ''}</label>` : ''}
                    <textarea 
                        name="${name}" 
                        id="${name}"
                        rows="${rows}"
                        placeholder="${placeholder || ''}"
                        ${required ? 'required' : ''}
                        data-field="${name}"
                    >${value}</textarea>
                `;
                
            case 'checkbox':
                return `
                    <label class="checkbox-label">
                        <input 
                            type="checkbox" 
                            name="${name}" 
                            id="${name}"
                            ${value ? 'checked' : ''}
                            ${required ? 'required' : ''}
                            data-field="${name}"
                        >
                        <span>${label || placeholder}</span>
                    </label>
                `;
                
            case 'email':
            case 'tel':
            case 'text':
            case 'number':
            default:
                return `
                    ${label ? `<label for="${name}">${label}${required ? ' *' : ''}</label>` : ''}
                    <input 
                        type="${type}" 
                        name="${name}" 
                        id="${name}"
                        placeholder="${placeholder || ''}"
                        value="${value}"
                        ${required ? 'required' : ''}
                        data-field="${name}"
                    >
                `;
        }
    }
    
    attachEvents() {
        const form = this.element;
        
        // Gérer les changements de valeurs
        form.addEventListener('input', (e) => {
            const field = e.target.dataset.field;
            if (field) {
                const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                this.updateFieldValue(field, value);
            }
        });
        
        form.addEventListener('change', (e) => {
            const field = e.target.dataset.field;
            if (field) {
                const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                this.updateFieldValue(field, value);
            }
        });
        
        // Gérer la soumission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    updateFieldValue(field, value) {
        this.state.values[field] = value;
        // Effacer l'erreur si elle existe
        if (this.state.errors[field]) {
            delete this.state.errors[field];
            this.render(this.element.parentNode);
        }
    }
    
    validateForm() {
        const { fields = [] } = this.props;
        const { values } = this.state;
        const errors = {};
        
        fields.forEach(field => {
            if (field.required && !values[field.name]) {
                errors[field.name] = `${field.label || field.placeholder || 'Ce champ'} est requis`;
            }
            
            // Validation email
            if (field.type === 'email' && values[field.name]) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(values[field.name])) {
                    errors[field.name] = 'Email invalide';
                }
            }
            
            // Validation téléphone
            if (field.type === 'tel' && values[field.name]) {
                const phoneRegex = /^[0-9+\-\s()]+$/;
                if (!phoneRegex.test(values[field.name])) {
                    errors[field.name] = 'Numéro de téléphone invalide';
                }
            }
        });
        
        return errors;
    }
    
    async handleSubmit() {
        // Valider le formulaire
        const errors = this.validateForm();
        
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }
        
        // Mettre à jour l'état
        this.setState({ isSubmitting: true, errors: {} });
        
        // Appeler le callback onSubmit
        if (this.props.onSubmit) {
            try {
                await this.props.onSubmit(this.state.values);
                // Réinitialiser le formulaire après succès
                this.resetForm();
            } catch (error) {
                console.error('Erreur lors de la soumission:', error);
                this.setState({ 
                    isSubmitting: false,
                    errors: { general: 'Une erreur est survenue. Veuillez réessayer.' }
                });
            }
        }
        
        this.setState({ isSubmitting: false });
    }
    
    resetForm() {
        const { fields = [] } = this.props;
        const values = {};
        
        fields.forEach(field => {
            values[field.name] = field.defaultValue || '';
        });
        
        this.setState({ values, errors: {}, isSubmitting: false });
    }
}

