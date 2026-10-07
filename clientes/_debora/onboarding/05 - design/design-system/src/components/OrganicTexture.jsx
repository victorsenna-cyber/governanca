/**
 * OrganicTexture, textura orgânica (folha / onda) de canto.
 *
 * Detalhe vivo que equilibra o geométrico. Linha fina, parcimônia: serve de
 * acento de canto ou divisória sutil, nunca enche a composição. Duas variantes:
 * "folha" e "onda". Recolorível por token via currentColor.
 */

export default function OrganicTexture({
  variante = 'folha',
  size = 140,
  stroke = 1.25,
  opacity = 0.6,
  title = 'Detalhe orgânico',
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
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
      >
        <title>{title}</title>
        {variante === 'folha' ? (
          <g>
            <path d="M40 168 C40 100 84 44 160 36 C156 112 108 160 44 166" />
            <path d="M52 156 C92 120 128 84 150 52" />
            <path d="M70 150 C84 132 96 118 110 104" opacity="0.7" />
            <path d="M96 138 C108 124 118 112 130 96" opacity="0.7" />
          </g>
        ) : (
          <g>
            <path d="M10 110 C40 80 60 80 90 110 S140 140 170 110 S210 80 230 110" />
            <path d="M10 134 C40 104 60 104 90 134 S140 164 170 134" opacity="0.7" />
            <path d="M10 86 C40 56 60 56 90 86 S140 116 170 86" opacity="0.7" />
          </g>
        )}
      </svg>
    </span>
  );
}
