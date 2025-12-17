/**
 * Système de routing simple pour la SPA
 */
export class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.rootElement = null;
        this.beforeRouteChange = null;
        this.afterRouteChange = null;
    }

    /**
     * Initialise le router
     */
    init(rootElement) {
        this.rootElement = rootElement;
        
        // Écouter les changements d'URL
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Intercepter les clics sur les liens
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-link]');
            if (link) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });
        
        // Charger la route initiale
        this.handleRoute();
    }

    /**
     * Enregistre une route
     */
    register(path, handler) {
        this.routes[path] = handler;
        return this;
    }

    /**
     * Navigation vers une nouvelle route
     */
    navigate(path) {
        if (path === window.location.pathname) return;
        
        window.history.pushState(null, null, path);
        this.handleRoute();
    }

    /**
     * Gère le changement de route
     */
    async handleRoute() {
        const path = window.location.pathname;
        const route = this.matchRoute(path);
        
        if (!route) {
            console.error(`Route non trouvée: ${path}`);
            this.render404();
            return;
        }

        // Hook avant changement
        if (this.beforeRouteChange) {
            await this.beforeRouteChange(this.currentRoute, route);
        }

        // Nettoyer l'ancienne route
        if (this.currentRoute && this.currentRoute.component && this.currentRoute.component.onDestroy) {
            this.currentRoute.component.onDestroy();
        }

        // Charger la nouvelle route
        this.currentRoute = route;
        
        try {
            // Si la route retourne une promesse (chargement dynamique)
            const component = await route.handler(route.params);
            
            if (component) {
                // Vider le conteneur
                this.rootElement.innerHTML = '';
                
                // Si c'est un composant avec méthode render
                if (component.render) {
                    component.render(this.rootElement);
                    route.component = component;
                } 
                // Si c'est du HTML direct
                else if (typeof component === 'string') {
                    this.rootElement.innerHTML = component;
                }
                // Si c'est un élément DOM
                else if (component instanceof HTMLElement) {
                    this.rootElement.appendChild(component);
                }
            }
            
            // Hook après changement
            if (this.afterRouteChange) {
                await this.afterRouteChange(route);
            }
            
            // Scroll en haut de la page (sauf pour les ancres)
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            } else {
                // Gérer les ancres
                const element = document.querySelector(window.location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } catch (error) {
            console.error('Erreur lors du chargement de la route:', error);
            this.render404();
        }
    }

    /**
     * Trouve la route correspondant au path
     */
    matchRoute(path) {
        // Correspondance exacte
        if (this.routes[path]) {
            return {
                path,
                handler: this.routes[path],
                params: {}
            };
        }

        // Routes avec paramètres (ex: /user/:id)
        for (const [routePath, handler] of Object.entries(this.routes)) {
            const regex = this.pathToRegex(routePath);
            const match = path.match(regex);
            
            if (match) {
                const params = this.extractParams(routePath, match);
                return {
                    path: routePath,
                    handler,
                    params
                };
            }
        }

        return null;
    }

    /**
     * Convertit un path avec paramètres en regex
     */
    pathToRegex(path) {
        return new RegExp(
            '^' + path
                .replace(/\//g, '\\/')
                .replace(/:\w+/g, '([^\\/]+)')
            + '$'
        );
    }

    /**
     * Extrait les paramètres d'une route
     */
    extractParams(routePath, match) {
        const params = {};
        const paramNames = routePath.match(/:(\w+)/g) || [];
        
        paramNames.forEach((paramName, index) => {
            params[paramName.slice(1)] = match[index + 1];
        });
        
        return params;
    }

    /**
     * Affiche une page 404
     */
    render404() {
        this.rootElement.innerHTML = `
            <div class="error-404">
                <h1>404</h1>
                <p>Page non trouvée</p>
                <a href="/" data-link class="btn btn-primary">Retour à l'accueil</a>
            </div>
        `;
    }

    /**
     * Définit un hook avant le changement de route
     */
    onBeforeRouteChange(callback) {
        this.beforeRouteChange = callback;
        return this;
    }

    /**
     * Définit un hook après le changement de route
     */
    onAfterRouteChange(callback) {
        this.afterRouteChange = callback;
        return this;
    }
}

