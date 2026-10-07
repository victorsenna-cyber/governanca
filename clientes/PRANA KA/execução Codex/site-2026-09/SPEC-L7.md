# L7 · Auditoria e acabamento técnico

21/09/2026. Complementa SPEC-L1-L4.md e SPEC-L5-L6.md; não substitui a direção aprovada. Trabalho apenas na cópia isolada.

## Alterações de interface

| Bloco | Achado | Implementação e estados | Limite de conteúdo |
|---|---|---|---|
| Cabeçalho compartilhado | Overflow em 320 px; idiomas com alvos estreitos | Até 550 px: marca na primeira linha, idiomas e menu na segunda. Idiomas e menu com alvo mínimo 44 × 44. Menu nativo, aberto/fechado, Escape; foco contrastante | Nenhuma palavra alterada; mesma marca e navegação |
| Foco compartilhado | `currentColor` podia gerar anel claro sobre fundo claro | Anel duplo: vinho por fora e marfim por dentro, sem deslocamento de layout. Visível sobre superfícies claras e escuras | Sem mudança de rótulo |
| Home · portais | Aspect-ratio somado à altura fixa expandia a imagem de 120 para 200 px, sobrepondo a copy no celular | Imagem respeita a coluna, sem mínimo intrínseco; abaixo de 360 px a composição vira uma coluna. Nome acessível da região distinto da seção Caminhos | Copy literal; zero corte |
| Home · legenda do selo | Linha decorativa atravessava a legenda, reduzindo contraste | Fundo marfim e camada própria na legenda, preservando os círculos ao redor do selo | Texto integral |
| Mentoria · selo 12 encontros | Conteúdo lateral não cabia no círculo de 96 px | Empilhamento vertical somente no celular; tamanho e paleta preservados | Número e texto da fonte preservados |
| Caminhos · cards | Ampliação CSS 200% apertava a grade do tablet | Container query empilha os cards quando o próprio contêiner tem até 520 px; fallback responsivo anterior mantido | Sem redução de copy |
| Imagens e fundos | Arquivos grandes em miniaturas; fundos críticos descobertos só pelo CSS | WebP responsivo da mesma arte, `srcset`, `sizes`, dimensões reais, `decoding=async`, preload dos fundos de home/Curso | Nenhuma imagem nova, corte editorial ou alteração de texto |
| Semântica da marca | Nome acessível omitia o subtítulo visível | Retirado aria-label redundante; nome agora vem do conteúdo completo do link | Texto visível idêntico |

## Contraste e acessibilidade

| Elemento | Frente / fundo | Razão | Resultado |
|---|---|---:|---|
| Corpo | #211a18 / #faf5eb | 15,77:1 | Passa 4,5 |
| Secundário | #554743 / #f3ebdd | 7,49:1 | Passa 4,5 |
| Ouro textual | #805b27 / #f3ebdd | 5,15:1 | Passa 4,5 |
| CTA rubi | #faf5eb / #6d2338 | 9,92:1 | Passa 4,5 |
| Fecho escuro | #faf5eb / #481625 | 13,64:1 | Passa 4,5 |
| Ouro em fundo escuro | #d8b66d / #481625 | 7,64:1 | Passa 4,5 |
| Foco | anel vinho + anel marfim | par claro/escuro | Um anel permanece contrastante em cada superfície da paleta |
| Campos | Não existem formulários neste pacote | N/A | Nenhum campo ativado |

Teste complementar: 1.290 trechos visíveis dos nove templates PT, em 390/1440, amostragem de 4 px no fundo renderizado sob as caixas de texto. Após correções, zero pares abaixo do critério e mínimo observado 4,62:1. A ferramenta remove apenas a pintura do texto durante a captura de diagnóstico; a página entregue não é alterada por esse teste. Elementos ocultos e FAQs fechados não entram nessa amostragem. As capturas de interface são realizadas antes da remoção da pintura.

O axe examina as 27 páginas, inclusive traduções. Seus itens `incomplete` de contraste (fundos com imagem/pseudo-elementos) **não são contados como passes automáticos**. A amostragem PT e a inspeção visual complementam esses itens, mas não equivalem a certificação WCAG integral. Teclado, foco, FAQ, troca de idioma e movimento reduzido foram exercitados; zoom CSS 200% é aproximação de reflow, complementada pelas larguras 320/390/768/1440. Leitor de tela real, zoom nativo em navegadores adicionais e aparelho físico permanecem pendentes.

## Integridade e decisões

- Skill dominante UI/UX: aplicada como auditoria → correção de tela → nova verificação, sem agentes paralelos nem reescrita de copy.
- Skill agent-browser: CLI indisponível; fallback explícito para Playwright/Edge instalado, com temporários na área isolada.
- Regra de integridade da skill exige zero placeholders para publicação. O contrato §12 proíbe preenchê-los por inferência e exige preservação: **prevalece o contrato; a liberação editorial permanece pendente**.
- Nenhum título foi reduzido para cumprir uma contagem arbitrária de linhas em outro idioma; conteúdo aprovado prevalece sobre ajuste textual do designer.
- Lighthouse é laboratório mobile em servidor local sem cache/compressão de produção. Não é dado de usuários reais nem previsão garantida de hospedagem.
- Sitemap, robots e `index,follow` são preparação do bundle estático; não houve publicação, alteração de DNS, envio do sitemap a buscadores ou ativação comercial.

## Reprodução

Após qualquer remontagem pelos scripts L1–L6, executar `node _work/finalize-l7.cjs`. Esse pós-processamento é idempotente e verifica que o texto visível permaneceu idêntico. O site entregue não precisa desses scripts, Node, npm ou build para funcionar.

Auditoria: `_work/audit-l7.cjs`, `flows-l7.cjs`, `check-contrast-l7.cjs`, `lighthouse-l7.cjs`. Empacotamento: `_work/package-l7.cjs`. Dependências de QA e caches não entram na entrega estática.
