/**
 * Design System Débora Delgado, ponto de entrada.
 *
 * Importe os tokens uma vez na raiz do app:
 *   import '../design-tokens.css';
 *   import './styles.css';
 *
 * Depois consuma os componentes:
 *   import { Button, OfferCard, Enneagram } from './index.js';
 */

export { default as Button } from './components/Button.jsx';
export { default as Badge } from './components/Badge.jsx';
export { default as Card } from './components/Card.jsx';
export { Section, Container } from './components/Section.jsx';
export { Orbe, Glow } from './components/Atmosphere.jsx';
export { default as OfferCard } from './components/OfferCard.jsx';
export { FAQ, FAQItem } from './components/FAQ.jsx';
export { default as Testimonial } from './components/Testimonial.jsx';
export { default as Nav } from './components/Nav.jsx';
export { default as Icon } from './components/Icon.jsx';

// Símbolos de marca (SVG, recolorível por token)
export { default as Enneagram } from './components/Enneagram.jsx';
export { default as Fingerprint } from './components/Fingerprint.jsx';
export { default as SacredGeometry } from './components/SacredGeometry.jsx';
export { default as OrganicTexture } from './components/OrganicTexture.jsx';
