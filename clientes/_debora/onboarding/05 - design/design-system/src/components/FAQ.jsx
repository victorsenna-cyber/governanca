/**
 * FAQ, acordeão calmo (FAQItem + FAQ).
 *
 * FAQItem é controlado por estado próprio (abre e fecha por clique e teclado).
 * Acessível: o botão controla aria-expanded e a resposta tem id ligado.
 * A animação respeita prefers-reduced-motion (tokens zeram a duração).
 */

import { useState, useId } from 'react';
import Icon from './Icon.jsx';

export function FAQItem({ pergunta, children, abertoInicial = false }) {
  const [aberto, setAberto] = useState(abertoInicial);
  const id = useId();

  return (
    <div className="dd-faq__item" data-aberto={aberto}>
      <button
        type="button"
        className="dd-faq__botao"
        aria-expanded={aberto}
        aria-controls={`${id}-resposta`}
        onClick={() => setAberto((v) => !v)}
      >
        <span>{pergunta}</span>
        <span className="dd-faq__sinal" aria-hidden="true">
          <Icon nome="mais" size={20} />
        </span>
      </button>
      <div className="dd-faq__resposta" id={`${id}-resposta`} role="region">
        <div className="dd-faq__resposta-interna">{children}</div>
      </div>
    </div>
  );
}

export function FAQ({ children, className = '', ...rest }) {
  return (
    <div className={`dd-faq ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export default FAQ;
