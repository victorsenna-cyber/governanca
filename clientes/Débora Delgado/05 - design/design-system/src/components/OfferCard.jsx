/**
 * OfferCard, bloco de oferta / lote.
 *
 * A FORMA vem do design system; o CONTEÚDO (lotes, preços, vagas) é referência
 * de OFERTA-CANONICA.md, passado por props. Nada de preço fixado aqui.
 *
 * Props: lote, moeda, valor, nota, itens (array de string), destaque, faixa,
 * acao (nó React, normalmente um Button).
 */

import Icon from './Icon.jsx';

export default function OfferCard({
  lote,
  moeda = 'R$',
  valor,
  nota,
  itens = [],
  destaque = false,
  glass = false,
  faixa,
  acao,
  className = '',
  ...rest
}) {
  const classes = [
    'dd-oferta',
    destaque ? 'dd-oferta--destaque' : '',
    glass ? 'dd-oferta--glass' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} {...rest}>
      {faixa && <span className="dd-oferta__faixa">{faixa}</span>}
      {lote && <p className="dd-oferta__lote">{lote}</p>}

      <div className="dd-oferta__preco">
        <span className="dd-oferta__moeda">{moeda}</span>
        <span className="dd-oferta__valor">{valor}</span>
      </div>
      {nota && <p className="dd-oferta__nota">{nota}</p>}

      {itens.length > 0 && (
        <ul className="dd-oferta__lista">
          {itens.map((item, i) => (
            <li key={i} className="dd-oferta__item">
              <Icon nome="check" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {acao}
    </div>
  );
}
