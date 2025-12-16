import { Component } from '../js/core/Component.js';

/**
 * Composant Card réutilisable
 * Props:
 * - type: 'default' | 'testimonial' | 'method' | 'step' | 'feature'
 * - title: string
 * - subtitle: string
 * - content: string | array
 * - icon: string (classe Font Awesome)
 * - avatar: object { text: string, image: string }
 * - number: string | number
 * - className: string (classes CSS additionnelles)
 */
export class Card extends Component {
    template() {
        const { type = 'default', className = '' } = this.props;
        const cardClass = `card card-${type} ${className}`;
        
        return `
            <div class="${cardClass}">
                ${this.renderCardContent()}
            </div>
        `;
    }
    
    renderCardContent() {
        const { type } = this.props;
        
        switch(type) {
            case 'testimonial':
                return this.renderTestimonialCard();
            case 'method':
                return this.renderMethodCard();
            case 'step':
                return this.renderStepCard();
            case 'feature':
                return this.renderFeatureCard();
            default:
                return this.renderDefaultCard();
        }
    }
    
    renderDefaultCard() {
        const { title, subtitle, content } = this.props;
        return `
            ${title ? `<h3 class="card-title">${title}</h3>` : ''}
            ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
            ${content ? `<div class="card-content">${this.renderContent(content)}</div>` : ''}
        `;
    }
    
    renderTestimonialCard() {
        const { avatar, title, subtitle, content } = this.props;
        return `
            <div class="card-header">
                ${avatar ? `
                    <div class="card-avatar">
                        ${avatar.image ? 
                            `<img src="${avatar.image}" alt="${title}">` : 
                            `<span>${avatar.text}</span>`
                        }
                    </div>
                ` : ''}
                <div class="card-info">
                    ${title ? `<h4 class="card-title">${title}</h4>` : ''}
                    ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
                </div>
            </div>
            ${content ? `<blockquote class="card-content">${content}</blockquote>` : ''}
        `;
    }
    
    renderMethodCard() {
        const { icon, title, content, number } = this.props;
        return `
            ${number ? `<div class="card-number">${number}</div>` : ''}
            ${icon ? `
                <div class="card-icon">
                    <i class="${icon}"></i>
                </div>
            ` : ''}
            ${title ? `<h3 class="card-title">${title}</h3>` : ''}
            ${content ? `<div class="card-content">${this.renderContent(content)}</div>` : ''}
        `;
    }
    
    renderStepCard() {
        const { number, title, content, result } = this.props;
        return `
            ${number ? `<div class="card-step-number">${number}</div>` : ''}
            ${title ? `<h3 class="card-title">${title}</h3>` : ''}
            ${content ? `<div class="card-content">${this.renderContent(content)}</div>` : ''}
            ${result ? `<p class="card-result"><strong>${result}</strong></p>` : ''}
        `;
    }
    
    renderFeatureCard() {
        const { icon, title, content } = this.props;
        return `
            ${icon ? `
                <div class="card-icon">
                    <i class="${icon}"></i>
                </div>
            ` : ''}
            ${title ? `<h4 class="card-title">${title}</h4>` : ''}
            ${content ? `<div class="card-content">${this.renderContent(content)}</div>` : ''}
        `;
    }
    
    renderContent(content) {
        if (Array.isArray(content)) {
            return `<ul>${content.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }
        return content;
    }
}
