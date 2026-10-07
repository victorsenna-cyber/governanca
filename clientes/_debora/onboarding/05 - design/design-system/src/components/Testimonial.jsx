/**
 * Testimonial, depoimento sóbrio.
 * Citação sem aspas decorativas de hype, filete dourado fino à esquerda.
 */

export default function Testimonial({ texto, autor, children, className = '', ...rest }) {
  return (
    <figure className={`dd-depoimento ${className}`.trim()} {...rest}>
      <blockquote className="dd-depoimento__texto">{texto || children}</blockquote>
      {autor && <figcaption className="dd-depoimento__autor">{autor}</figcaption>}
    </figure>
  );
}
