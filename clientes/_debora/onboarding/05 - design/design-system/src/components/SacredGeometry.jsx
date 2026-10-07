/**
 * SacredGeometry, geometria sagrada de apoio (linha fina).
 *
 * Sólido platônico em projeção, traço fino, para detalhe de canto ou textura
 * sutil de fundo. Usar com MUITA parcimônia (acento, nunca preencher a peça).
 * Recolorível por token via currentColor; opacidade baixa por padrão.
 */

// Icosaedro em projeção (12 vértices, contorno + arestas internas principais).
const VERTICES = [
  [100, 18], [156, 50], [156, 110], [100, 142], [44, 110], [44, 50],
  [100, 58], [128, 80], [118, 112], [82, 112], [72, 80], [100, 100],
];

const ARESTAS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 6],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 6],
  [6, 11], [7, 11], [8, 11], [9, 11], [10, 11],
];

export default function SacredGeometry({
  size = 160,
  stroke = 1.25,
  opacity = 0.5,
  title = 'Geometria sagrada de apoio',
  className = 'dd-simbolo',
  ...rest
}) {
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
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={opacity}
      >
        <title>{title}</title>
        {ARESTAS.map(([a, b], i) => (
          <line
            key={i}
            x1={VERTICES[a][0]}
            y1={VERTICES[a][1]}
            x2={VERTICES[b][0]}
            y2={VERTICES[b][1]}
          />
        ))}
      </svg>
    </span>
  );
}
