/**
 * Badge / selo, miniatura sóbria.
 *
 * Usos: datas, "ao vivo", "no Zoom", "turma de até 20", "lote 1, 10 vagas".
 * Sem urgência berrante. Variantes: "contorno" (padrão), "solido" (musgo),
 * "vivo" (ponto terracota discreto, para ao vivo). Aceita um ícone opcional.
 */

export default function Badge({
  variante = 'contorno',
  icone,
  vivo = false,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'dd-badge',
    variante === 'solido' ? 'dd-badge--solido' : '',
    vivo ? 'dd-badge--vivo' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {vivo && <span className="dd-badge__ponto" aria-hidden="true" />}
      {icone}
      {children}
    </span>
  );
}
