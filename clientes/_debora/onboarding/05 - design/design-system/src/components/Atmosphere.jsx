/**
 * Atmosfera, camada premium (Orbe e Glow).
 *
 * Orbe: mancha de cor desfocada (blur alto, baixa opacidade) que dá profundidade
 *   ao fundo de uma seção. Use dentro de uma Section fundo="orbe". Posicione por
 *   style (top/left/right/bottom). Cores: musgo, areia, dourado.
 * Glow: halo radial atrás de um elemento âncora (hero, eneagrama). Envolva o
 *   âncora em <div className="dd-ancora"> e ponha o Glow como primeiro filho.
 *
 * Ambos são decorativos (aria-hidden) e respeitam a sutileza da régua premium.
 */

export function Orbe({ cor = 'musgo', style, className = '', ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={`dd-orbe dd-orbe--${cor} ${className}`.trim()}
      style={style}
      {...rest}
    />
  );
}

export function Glow({ cor = 'musgo', className = '', ...rest }) {
  return (
    <span aria-hidden="true" className={`dd-glow dd-glow--${cor} ${className}`.trim()} {...rest} />
  );
}

export default Orbe;
