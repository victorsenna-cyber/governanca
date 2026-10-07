/**
 * Icon, conjunto mínimo de ícones em SVG (traço fino, currentColor).
 * Sem emoji, sem ícone 3D. Mesma linguagem de stroke do resto do sistema.
 */

const CAMINHOS = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  mais: <path d="M12 5v14M5 12h14" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  calendario: (
    <g>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </g>
  ),
  video: (
    <g>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </g>
  ),
  zoom: (
    <g>
      <rect x="3" y="6" width="13" height="12" rx="3" />
      <path d="M16 10l5-3v10l-5-3" />
    </g>
  ),
  relogio: (
    <g>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
  ),
  pessoas: (
    <g>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3.2 3.2 0 0 1 0 6M17.5 19a5.5 5.5 0 0 0-2.2-4.4" />
    </g>
  ),
};

export default function Icon({ nome, size = 20, stroke = 1.6, title, ...rest }) {
  const conteudo = CAMINHOS[nome] || CAMINHOS.check;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title && <title>{title}</title>}
      {conteudo}
    </svg>
  );
}
