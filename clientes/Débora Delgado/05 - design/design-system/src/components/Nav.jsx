/**
 * Nav, navegação simples.
 * Marca à esquerda (símbolo opcional + nome), links à direita em caixa-alta.
 * Em telas pequenas os links recolhem (a landing pode prover um menu próprio).
 */

export default function Nav({ marca, simbolo, links = [], acao, className = '', ...rest }) {
  return (
    <nav className={`dd-nav ${className}`.trim()} aria-label="Principal" {...rest}>
      <a className="dd-nav__marca" href="#topo">
        {simbolo}
        <span>{marca}</span>
      </a>
      <ul className="dd-nav__links">
        {links.map((l, i) => (
          <li key={i}>
            <a
              className="dd-nav__link"
              href={l.href}
              aria-current={l.atual ? 'page' : undefined}
            >
              {l.rotulo}
            </a>
          </li>
        ))}
        {acao && <li>{acao}</li>}
      </ul>
    </nav>
  );
}
