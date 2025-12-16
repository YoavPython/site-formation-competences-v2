/**
 * Classe de base pour tous les composants
 * Fournit les méthodes communes pour le rendu et la gestion des événements
 */
export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.element = null;
    }

    /**
     * Met à jour l'état du composant et déclenche un re-rendu
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
        if (this.element && this.element.parentNode) {
            this.render(this.element.parentNode);
        }
    }

    /**
     * Template HTML du composant (à surcharger dans les classes enfants)
     */
    template() {
        return '';
    }

    /**
     * Attache les événements après le rendu (à surcharger si nécessaire)
     */
    attachEvents() {
        // À implémenter dans les classes enfants
    }

    /**
     * Méthode appelée après le montage du composant dans le DOM
     */
    onMount() {
        // À implémenter dans les classes enfants si nécessaire
    }

    /**
     * Méthode appelée avant la destruction du composant
     */
    onDestroy() {
        // À implémenter dans les classes enfants si nécessaire
    }

    /**
     * Rend le composant dans un conteneur
     */
    render(container) {
        // Nettoyer l'ancien élément si nécessaire
        if (this.element) {
            this.onDestroy();
        }

        // Créer un wrapper temporaire pour parser le HTML
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.template();
        
        // Prendre le premier élément enfant comme élément principal
        this.element = wrapper.firstElementChild;
        
        // Remplacer ou ajouter dans le conteneur
        if (container.firstChild) {
            container.replaceChild(this.element, container.firstChild);
        } else {
            container.appendChild(this.element);
        }
        
        // Attacher les événements et appeler onMount
        this.attachEvents();
        this.onMount();
        
        return this.element;
    }

    /**
     * Trouve un élément dans le composant
     */
    find(selector) {
        return this.element ? this.element.querySelector(selector) : null;
    }

    /**
     * Trouve tous les éléments correspondants dans le composant
     */
    findAll(selector) {
        return this.element ? this.element.querySelectorAll(selector) : [];
    }
}
