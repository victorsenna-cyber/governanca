/**
 * Button / CTA.
 *
 * Variantes:
 *   primario   petróleo com texto areia e borda fina dourada (contraste AAA).
 *              O dourado entra como acento de borda, nunca como fundo chapado.
 *   secundario contorno petróleo sobre areia.
 *   texto      link com sublinhado dourado fino.
 *
 * Renderiza <a> quando recebe href, senão <button>. Estados hover e foco no CSS.
 */

export default function Button({
  variante = 'primario',
  href,
  type = 'button',
  children,
  className = '',
  iconeFim,
  ...rest
}) {
  const classe = `dd-btn dd-btn--${variante} ${className}`.trim();
  const conteudo = (
    <>
      {children}
      {iconeFim}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classe} {...rest}>
        {conteudo}
      </a>
    );
  }
  return (
    <button type={type} className={classe} {...rest}>
      {conteudo}
    </button>
  );
}
