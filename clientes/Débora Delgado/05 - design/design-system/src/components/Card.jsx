/**
 * Card, bloco de conteúdo calmo sobre areia.
 * Aceita um ícone ou símbolo opcional, título e texto, ou children livres.
 */

export default function Card({ icone, titulo, texto, glass = false, children, className = '', ...rest }) {
  const classes = ['dd-card', glass ? 'dd-card--glass' : '', className].filter(Boolean).join(' ');
  return (
    <article className={classes} {...rest}>
      {icone && <span className="dd-card__icone">{icone}</span>}
      {titulo && <h3 className="dd-card__titulo">{titulo}</h3>}
      {texto && <p className="dd-card__texto">{texto}</p>}
      {children}
    </article>
  );
}
