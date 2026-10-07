/**
 * Fingerprint digital-labirinto, marca primária.
 *
 * Símbolo de impressão digital cujo núcleo é uma espiral contínua que sugere
 * um labirinto (um único caminho que conduz ao centro: a jornada interna).
 * Em volta, arcos de cordilheira (ridges) com aberturas alternadas dão a
 * leitura de impressão digital. Traço fino, recolorível por token (dourado por
 * padrão via currentColor).
 *
 * Geometria gerada por trigonometria (determinística, sem dependências).
 */

function caminhoEspiral(cx, cy, voltas, raioMax, passos) {
  const thetaMax = voltas * 2 * Math.PI;
  const b = raioMax / thetaMax;
  const a = 3;
  let d = '';
  for (let i = 0; i <= passos; i++) {
    const t = (i / passos) * thetaMax;
    const r = a + b * t;
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2) + ' ';
  }
  return d.trim();
}

function arcoRidge(cx, cy, raio, anguloInicio, anguloFim) {
  const ini = (anguloInicio * Math.PI) / 180;
  const fim = (anguloFim * Math.PI) / 180;
  const x1 = cx + raio * Math.cos(ini);
  const y1 = cy + raio * Math.sin(ini);
  const x2 = cx + raio * Math.cos(fim);
  const y2 = cy + raio * Math.sin(fim);
  const grande = anguloFim - anguloInicio > 180 ? 1 : 0;
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${raio} ${raio} 0 ${grande} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

export default function Fingerprint({
  size = 120,
  stroke = 1.5,
  title = 'Marca Débora Delgado, impressão digital labirinto',
  className = 'dd-simbolo',
  ...rest
}) {
  const cx = 100;
  const cy = 100;
  const espiral = caminhoEspiral(cx, cy, 3.25, 62, 240);

  // Arcos de cordilheira com aberturas alternadas (leitura de digital)
  const ridges = [
    arcoRidge(cx, cy, 72, 35, 300),
    arcoRidge(cx, cy, 82, 120, 60),
    arcoRidge(cx, cy, 90, -20, 210),
  ];

  return (
    <span className={className} style={{ width: size, height: size }} {...rest}>
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        role="img"
        aria-label={title}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>{title}</title>
        <path d={espiral} />
        {ridges.map((d, i) => (
          <path key={i} d={d} opacity={0.9 - i * 0.12} />
        ))}
      </svg>
    </span>
  );
}
