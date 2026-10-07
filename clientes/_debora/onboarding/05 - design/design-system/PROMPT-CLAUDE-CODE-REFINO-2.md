# Prompt para o Claude Code — REFINO 2 (botão liquid-glass, tirar blur verde, minimalismo premium)

> 2º passe sobre o design system. Refina o que existe. Terminal em
> `05 - design/design-system`, conta certa, `claude`, cole o bloco ===.

===

O design system evoluiu bem (Fraunces nos títulos, fundo claro com gradiente, glow do
eneagrama), mas o feedback do cliente aponta 4 ajustes para chegar ao "premium minimalista
de verdade". Releia primeiro as seções revisadas do brief e ajuste, sem recomeçar.

## Leia primeiro
`./BRAND-BRIEF.md`, seção "Camada Premium / Atmosfera" — atenção aos blocos marcados
**REVISADO 30/06** e **ADICIONADO 30/06**: botão liquid-glass, remoção dos orbes verdes,
e refino minimalista.

## Ajustes a aplicar

### 1. Botão / CTA — trocar cor e fazer "liquid glass" (iOS recente)
- **Remover o azul-petróleo** do CTA. Nova base: **chumbo/grafite petróleo dessaturado**
  (`#2A3238`–`#363F45`), que é o preferido; musgo profundo como alternativa.
- Estilo **liquid glass**: vidro semitransparente (`backdrop-filter: blur()` + saturação),
  **highlight especular fino e curvo** no topo (linha de luz, não brilho chapado),
  **sombra interna** sutil nas bordas inferiores, **borda luminosa** 1px (dourado fino ou
  branco translúcido), cantos bem arredondados. Hover: o specular desliza/intensifica de leve.
- Deve parecer **vidro real sob luz**, não "botão com gradiente". Inclua fallback
  `@supports` para quem não tem backdrop-filter.

### 2. Remover o blur/orbe verde dos blocos
- Tirar as manchas musgo desfocadas das seções (ficaram "manchadas"). A profundidade fica
  por conta do **gradiente claríssimo + grid + tipografia**. Se quiser atmosfera, só um
  halo neutro (branco quente) muito diluído atrás de âncoras. Nada de mancha de cor saturada.

### 3. Refino minimalista (subir a sofisticação)
- **Mais respiro**: aumentar o espaçamento vertical entre seções; menos densidade.
- **Hairlines douradas** como detalhe (linha-fio finíssima sob títulos, separando blocos
  ou emoldurando âncoras), com terminais cuidados.
- **Numeração de seção elegante** ("01 —" em serifada pequena dourada) no lugar de rótulos
  chapados em caixa-alta cinza.
- **Hierarquia mais ousada**: H1/H2 maiores e mais dramáticos, contraste forte entre o
  display serifado (Fraunces) e o corpo (Inter). Não ter medo de título grande com muito ar.
- Cuidar de kerning/tracking dos eyebrows e de viúvas/órfãs.

### 4. Manter intacto
- Fonte Fraunces+Inter, fundo claro/gradiente, grid, eneagrama (coordenadas validadas),
  digital-labirinto. Tudo token-driven, exportável, importável pelo Claude Design.

## Regras
- **Tudo claro/terroso.** Zero travessões. Contraste **AA** (rechecar o CTA novo: texto
  claro sobre o grafite glass precisa passar; ajustar opacidade do vidro se necessário).
- Sutileza é a régua: se parecer "efeito", está forte demais.

## Passo a passo
1. Releia o brief e me diga em até 5 linhas: a cor/material novo do botão liquid-glass, o
   que removeu dos blocos, e os 2-3 detalhes de refino que vai adicionar.
2. Após meu ok, aplique e atualize o styleguide (mostrando o botão-vidro com hover, as
   hairlines, a numeração de seção e o novo respiro).
3. Recheque AA + zero travessões. Abra o styleguide para revisão.

===

## Notas para o Victor
- Quando terminar, manda o print do styleguide. Vou olhar com lupa o **botão liquid-glass**
  (é o ponto mais difícil de acertar) e se o minimalismo subiu de nível.
- Lembrete de negócio (já salvo em OFERTA-CANONICA e DECISOES, não afeta o DS agora):
  os lotes do workshop viram **por data** (R$97 longe do workshop → R$257 perto), não por
  vagas. Isso entra na LANDING, não no design system.
