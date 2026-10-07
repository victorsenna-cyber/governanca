/**
 * Section e Container.
 *
 * Section: faixa de página com respiro generoso. Fundos por token:
 *   "areia" (padrão), "limpa" (só o gradiente de página), "grid" (papel de
 *   arquitetura), "orbe" (atmosfera desfocada), "alt" (areia mais funda),
 *   "musgo" (superfície assinatura), "escura" (musgo escuro, texto claro).
 * Para "orbe", passe <Orbe /> como primeiros children.
 * Container: centraliza e limita a largura; variante "estreito" para leitura.
 */

export function Section({ fundo = 'areia', children, className = '', ...rest }) {
  const mod = {
    areia: '',
    limpa: 'dd-section--limpa',
    grid: 'dd-section--grid',
    orbe: 'dd-section--orbe',
    alt: 'dd-section--alt',
    musgo: 'dd-section--musgo',
    escura: 'dd-section--escura',
  }[fundo] || '';
  return (
    <section className={`dd-section ${mod} ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}

export function Container({ estreito = false, children, className = '', ...rest }) {
  return (
    <div
      className={`dd-container ${estreito ? 'dd-container--estreito' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Section;
