# Hero tipográfico implementado

> **Página:** inglês e oratória bilíngue para brasileiros  
> **Escopo:** somente D1 · hero  
> **Estado:** implementado localmente e em QA  
> **Decisão humana:** a fotografia de Jéssica ficará reservada para a dobra sobre ela

## Tese visual

**A promessa é o plano visual dominante:** um cartaz editorial full-bleed em papel e grid, no qual “confiança e coragem” desloca a composição e conduz o olhar até a conversa.

## Composição

- nenhum retrato, ilustração, símbolo ou imagem gerada;
- H1 em três linhas como âncora principal;
- “confiança e coragem” em Fraunces itálica rubi, com deslocamento editorial no desktop;
- um único fio dourado parte da expressão, sem representar olho, voz ou onda;
- explicação e ação dividem uma base em duas colunas no desktop;
- os três formatos formam uma pauta inferior;
- no mobile, toda a composição retorna a uma coluna e o H1 permanece em três linhas;
- CTA visível no primeiro viewport;
- D8 continua sendo o único clímax de superfície rubi.

## Interação

- entrada em três grupos, na ordem de leitura;
- nenhum parallax ou reação ao ponteiro;
- conteúdo integral no primeiro paint;
- movimento reduzido preserva tudo visível.

## Alterações técnicas

- removida a composição `.voice-orbit`;
- removido o código de profundidade associado a `[data-depth]`;
- adicionada a estrutura `.hero__body`;
- removido o halo circular;
- nenhuma alteração no texto, no formulário ou na ação dos CTAs.

## Gate

- `1440 × 900`: promessa, explicação, CTA e formatos dentro do primeiro viewport;
- `768 × 1024`: composição refluída sem colisão;
- `390 × 844`: H1 em três linhas, CTA visível e zero elemento atrás da copy;
- `375 × 667`: H1 e CTA dentro do primeiro viewport;
- sem fotografia provisória;
- sem texto decorativo;
- sem rolagem horizontal;
- sem dependência de JavaScript para conteúdo.
