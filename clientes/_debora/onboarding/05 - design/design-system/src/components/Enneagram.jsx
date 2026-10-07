/**
 * Enneagram, símbolo do método (geometria sagrada dos 9 estilos).
 *
 * Recriado do zero em SVG a partir das COORDENADAS VALIDADAS do BRAND-BRIEF
 * (viewBox 0 0 240 240, centro 120,120, raio 100, 9 no topo, passo 40 graus,
 * sentido horário). Monocromático e recolorível por token: o traço usa
 * currentColor, então a cor vem da classe (dourado por padrão, ou petróleo).
 *
 * NÃO usar as 9 cores dos tipos. Linha fina, coerente com o resto do sistema.
 */

const PONTOS = {
  1: [184.3, 43.4],
  2: [218.5, 102.6],
  3: [206.6, 170.0],
  4: [154.2, 214.0],
  5: [85.8, 214.0],
  6: [33.4, 170.0],
  7: [21.5, 102.6],
  8: [55.7, 43.4],
  9: [120.0, 20.0],
};

const TRIANGULO = '206.6,170.0 33.4,170.0 120.0,20.0';
const HEXADE = '184.3,43.4 154.2,214.0 218.5,102.6 55.7,43.4 85.8,214.0 21.5,102.6 184.3,43.4';

export default function Enneagram({
  size = 200,
  stroke = 1.25,
  showNumbers = false,
  showFlower = false,
  title = 'Símbolo do eneagrama, os 9 estilos do método',
  className = 'dd-simbolo',
  ...rest
}) {
  return (
    <span className={className} style={{ width: size, height: size }} {...rest}>
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        role="img"
        aria-label={title}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <title>{title}</title>

        {showFlower && (
          <g opacity="0.14">
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const r = 50;
              const rad = (deg * Math.PI) / 180;
              const cx = 120 + r * Math.cos(rad);
              const cy = 120 + r * Math.sin(rad);
              return <circle key={deg} cx={cx} cy={cy} r={r} />;
            })}
            <circle cx="120" cy="120" r="50" />
          </g>
        )}

        {/* Círculo externo, a unidade / o todo */}
        <circle cx="120" cy="120" r="100" />

        {/* Triângulo interno 3, 6, 9 (a lei do três) */}
        <polygon points={TRIANGULO} />

        {/* Hexade 1, 4, 2, 8, 5, 7, 1 (a lei do sete) */}
        <polyline points={HEXADE} />

        {/* 9 nós sobre o círculo */}
        {Object.values(PONTOS).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.4" fill="currentColor" stroke="none" />
        ))}

        {showNumbers &&
          Object.entries(PONTOS).map(([n, [x, y]]) => {
            const lx = 120 + (x - 120) * 1.14;
            const ly = 120 + (y - 120) * 1.14;
            return (
              <text
                key={n}
                x={lx}
                y={ly}
                fill="currentColor"
                stroke="none"
                fontSize="12"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {n}
              </text>
            );
          })}
      </svg>
    </span>
  );
}
