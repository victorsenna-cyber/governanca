# Replanejamento do hero

> **Página:** inglês e oratória bilíngue para brasileiros  
> **Escopo:** somente D1 · hero  
> **Estado:** SUPERADO pela decisão humana de 30/07/2026  
> **Substitui:** apenas a composição gráfica `voice-orbit` prevista para D1 em `04-TESE-VISUAL-E-SPEC-DE-IMPLEMENTACAO.md`  
> **Não altera:** copy, CTA, ordem das dobras, paleta, grid nem o clímax rubi da D8

> **Decisão posterior:** a fotografia real de Jéssica não entra no hero. Ela será reservada para a dobra que apresenta Jéssica e será tratada em uma etapa futura. Para o hero implementado, prevalece `08-HERO-TIPOGRAFICO-IMPLEMENTADO.md`.

## 1. Decisão

A ilustração de olho, órbitas, onda e os rótulos “LOOK BACK” e “SPEAK” será removida por inteiro.

O hero será ancorado por um **retrato real de Jéssica**, em escala dominante, com direção de olhar para a copy ou para quem lê. A fotografia deixa de ser decoração e passa a provar, no primeiro contato, que existe uma professora presente por trás do método.

## 2. Tese visual

**Um retrato editorial de presença atravessa um grid preciso: o método organiza, mas é a presença humana que sustenta a conversa.**

Sensação dominante: **segurança adulta**.

Elemento memorável: a fotografia ocupa o lado direito sem card ou moldura; o grid perde nitidez ao se aproximar do corpo de Jéssica. A pessoa se sobrepõe ao sistema, não o contrário.

## 3. Conteúdo preservado

O hero mantém, sem reescrita:

- sobretítulo;
- H1 “Fale inglês com confiança e coragem quando a conversa começa.”;
- parágrafo sobre Emotional Speaking;
- CTA “Quero conversar com a Jéssica”;
- microcopy do WhatsApp e da conversa de cerca de 30 minutos;
- três formatos resumidos.

Ordem de leitura obrigatória:

1. Jéssica Oliveira;
2. promessa;
3. explicação curta;
4. CTA;
5. formatos.

## 4. Direção da fotografia

### Imagem necessária

- fotografia real de Jéssica, em alta resolução e autorizada;
- enquadramento de meio corpo ou três quartos;
- olhar para a esquerda, em direção à copy, ou contato direto com a câmera;
- expressão serena, segura e receptiva;
- postura aberta, sem pose genérica de “empoderamento”;
- luz lateral suave, pele natural e contraste editorial;
- roupa rubi, vinho, creme ou neutra; o rubi pode aparecer como acento humano, não como superfície;
- fundo quente e simples, com espaço de recorte ao redor da cabeça e dos ombros.

### Arquivo preferencial

O original em alta da fotografia já usada nas artes de preço, caso exista com resolução e enquadramento suficientes. A miniatura incorporada nos arquivos de WhatsApp serve apenas como referência de roupa e presença; não tem resolução para produção.

Alvo técnico:

- original com pelo menos 2.000 px no lado maior;
- sem texto, logo, moldura ou fundo composto;
- versões finais em AVIF e WebP;
- recorte desktop e recorte mobile derivados do mesmo ensaio;
- `width` e `height` declarados para impedir deslocamento de layout.

### Não usar

- retrato gerado por IA;
- foto de banco;
- recorte da miniatura existente;
- pessoa olhando para fora da página;
- fundo de escritório genérico;
- bandeiras, balões de fala, olhos, ondas, microfones ou ícones de idioma;
- borda, card, círculo ou vidro em volta da fotografia.

## 5. Composição desktop

- hero full-bleed, com altura mínima equivalente ao primeiro viewport descontando o cabeçalho;
- conteúdo textual ancorado à esquerda, dentro do `wrap`, com largura de leitura de aproximadamente 42 rem;
- fotografia posicionada no plano de fundo à direita, ocupando cerca de 44% a 48% da largura e toda a altura útil;
- rosto no terço superior direito e olhar apontando para o H1/CTA;
- transição entre papel e fotografia feita por um gradiente amplo e sem linha divisória;
- grid de 76 px visível no papel e progressivamente apagado sobre rosto e pele;
- nenhum texto sobre o rosto;
- H1 em no máximo três linhas;
- CTA e microcopy em zona integralmente clara;
- o início da dobra seguinte permanece sugerido no limite inferior.

A composição não é uma tela dividida em dois painéis. Texto, grid e fotografia formam um único cartaz contínuo.

## 6. Composição mobile

Mobile será recomposto, não reduzido.

- usar recorte vertical próprio, com Jéssica no terço superior direito;
- preservar olhos, topo da cabeça e linha dos ombros;
- fotografia aparece da região do sobretítulo até o fim do H1 e perde presença antes do parágrafo;
- aplicar véu de papel mais denso atrás da copy, sem tornar o retrato fantasmagórico;
- H1 em até três linhas visuais sempre que a largura permitir;
- parágrafo, CTA e microcopy ficam sobre papel limpo, sem linhas, rosto ou roupa passando por trás;
- CTA ocupa a largura disponível e permanece no primeiro contato;
- formatos podem iniciar abaixo da primeira dobra;
- não usar parallax no celular.

Se o recorte não mantiver o rosto reconhecível sem invadir a leitura, a fotografia vira uma faixa editorial entre o H1 e o parágrafo. Ela nunca será reduzida a marca d'água.

## 7. Tratamento visual

- papel `#FCFBF8`;
- tinta `#231F20`;
- rubi `#6E1830` apenas no destaque tipográfico, CTA e roupa, quando presente;
- dourado `#C6A56C` restrito a um filete de alinhamento ou detalhe de foco;
- Fraunces no H1 e Inter no corpo;
- sem sombra decorativa na fotografia;
- sem novo card;
- sem novo raio: a fotografia sangra até as bordas do hero;
- o clímax cromático continua pertencendo exclusivamente à D8.

## 8. Movimento

O valor existe no primeiro paint.

- copy entra em três grupos, como hoje, com duração total máxima de 900 ms;
- fotografia entra junto do H1 por opacidade e deslocamento horizontal máximo de 16 px;
- o grid permanece estático;
- nenhum elemento acompanha o ponteiro;
- `prefers-reduced-motion` entrega tudo imediatamente, sem translação.

## 9. Implementação prevista

- remover o bloco `.voice-orbit` e seus seletores;
- inserir um `<picture>` semântico dentro do hero, com fontes responsivas;
- manter a fotografia fora da árvore de foco;
- usar `alt="Jéssica Oliveira, professora de inglês e oratória bilíngue"` se o retrato for tratado como conteúdo;
- usar `alt=""` apenas se o nome e a identidade já estiverem plenamente comunicados e a imagem for considerada redundante no gate;
- reservar o espaço da imagem desde o primeiro layout;
- limitar o arquivo entregue ao navegador ao menor peso que preserve o rosto, com alvo de até 250 KB por viewport;
- não modificar `script.js`, o formulário ou o fluxo dos CTAs.

## 10. Gate específico do hero

O novo hero só passa se:

- em três segundos, a leitura for Jéssica → promessa → CTA;
- a imagem perder sentido narrativo quando removida;
- o rosto for reconhecível em 375, 390, 768 e 1440 px;
- nenhuma parte da imagem atravessar H1, parágrafo, CTA ou microcopy;
- o CTA continuar no primeiro viewport em 375 × 667 e 390 × 844;
- a copy permanecer exatamente igual;
- texto e ação mantiverem contraste AA;
- não houver rolagem horizontal, deslocamento de layout ou dependência de JavaScript;
- a D8 continuar sendo o único clímax cromático da página.

## 11. Único insumo pendente

**Uma fotografia real de Jéssica em alta resolução.**

Pode ser resolvido com o arquivo original da foto já usada nas artes ou com duas a três fotos candidatas. A Continuum escolhe o recorte; Jéssica não precisa responder a um novo questionário de design.
