# Prana Ka · L1–L2 da iteração · 26/09/2026

**Resultado: os 11 itens da iteração foram implementados e os gates locais do site passaram. Nova iteração não publicada.** São os lotes do arquivo de 25/09, não os lotes originais da construção. L3 (upload), L4 (reauditoria no domínio) e L5 (mensagem) não executados.

## Fontes, autoridade e preservação

Pedido do Victor: “faça L1 e L2”, seguido de “continue”. Fonte única: `../../ITERACAO-SITE-2026-09-25.md`; decisões 08-11-002, 08-19-001, 09-20-001 e 09-25-001. `STATUS.md` canônico registra que a versão anterior já está no ar.

SHA-256 da fonte de iteração: `5a707d12234e682a479d0bb37a03963ec1739faff70031e4ccfe3fb8a7b2dc16`. Hashes de iteração, STATUS e DECISOES ficaram idênticos ao fim da execução. Nenhum canônico alterado.

Snapshot dos 254 arquivos anteriores e da entrega em `_work/iteration-2026-09-26/before/`. A pasta de entrega ativa anterior foi movida para `before/delivery-site-active/`; cópia dos documentos/ZIP anteriores em `before/entrega/`. Os 16 arquivos de avatares descartados foram excluídos **da nova distribuição**, não apagados das fontes/backup.

## Implementação

1. Carol: iframe YouTube nocookie nas três homes, lazy-load, título acessível, legenda, sem autoplay; quatro depoimentos escritos preservados.
2. Mentoria: cadência a cada 14 dias no hero/selo, metadados, oferta, card de entregas e FAQ. A versão inglesa também usava `12 sessions`. O teste renderizado encontrou `12` separado do texto por `dt/dd`; o card foi corrigido nos três idiomas e o teste repetido.
3. FAQ: duas frases de checkout substituídas pelo acesso iniciado por conversa com Prana, nos três idiomas.
4. Visão: investimento informa 1h30, online ou presencial; equivalentes EN/ES marcados.
5. Curso: duas ocorrências de preço por idioma permanecem no HTML com `hidden`; WhatsApp e demais textos preservados.
6. Home e Visão: 24 elementos de avatar removidos; nomes e citações mantidos; nenhum `retrato-` em qualquer HTML entregue.
7. Somente o CTA do topo da Visão recebe a mensagem exata de agendamento. A mensagem do link secundário não foi alterada, respeitando o item 7.
8. Espaço real entre moeda e número no preço da Visão: `R$ 333`.
9. `404.html` com identidade existente, PT/EN/ES, `noindex`, três links nativos, sem JS.
10. `.htaccess.proposta` idêntico ao bloco Apache do contrato. Nenhum `.htaccess` ativo criado nem servidor alterado.
11. `assets/og/og-default.jpg`: JPG, 1200×630, 66.788 bytes, selo original centralizado em marfim #f3ebdd. Composição HTML/CSS reproduzível; metadados OG nas 27 páginas.

As únicas adições de CSS às páginas existentes são o iframe responsivo (item 1) e a orientação do texto dentro do selo existente (item 2). CSS da 404 é separado. Nenhum JS de produção modificado; ordem de dobras e demais textos preservados. O replay do log itemizado confere o diff das 27 páginas e o teste compara hashes de todos os demais arquivos de runtime.

## Gates locais: resultados reais

| Verificação | Resultado |
|---|---|
| Texto renderizado, com FAQ aberta, 27 rotas × 390/1440 px | **54 casos; zero termos proibidos** |
| Console, exceções JS e requisições durante carregamento/rolagem | **zero erros em 54 casos**, sem bloquear terceiros no teste |
| Overflow horizontal, imagens e H1 | **54 casos aprovados** |
| Referências a `retrato-` no HTML | **zero** |
| Diff e fontes | **zero alterações não autorizadas de runtime; canônicos intactos** |
| Lighthouse mobile, 12 páginas alteradas | **performance 90–97; acessibilidade, boas práticas e SEO 100** |
| axe nas 12 páginas alteradas | **zero violações detectadas**; contraste em fundos compostos permanece com verificações incompletas do algoritmo |
| axe da 404 | **zero violações** |
| 404 sem JS, links e teclado | **390/1440 aprovados** |
| Curso e CTA superior da Visão sem JS | **PT/EN/ES aprovados** |
| OG e Apache | dimensão/formato/metadados conferidos; proposta literal conferida; comportamento Apache ainda não testado em servidor |
| ZIP | **242 entradas; 28 HTML; zero recursos ausentes; zero divergências SHA-256** |

### Lighthouse final

| Página | PT | EN | ES |
|---|---:|---:|---:|
| Home | 91 | 91 | 91 |
| Mentoria | 90 | 94 | 90 |
| Visão Uterina | 96 | 97 | 96 |
| Curso | 94 | 94 | 95 |

Lighthouse 13.5.0, Edge headless, medição mobile padrão em HTTP local, com CDN real. Os três outros eixos são 100 em todos os casos. Não é medição do domínio publicado. Houve falha de conexão do perfil usado no primeiro reteste; um perfil novo isolado concluiu a medição. Logs anteriores não foram apagados.

Inspeção visual: 404 mobile/desktop, OG, vídeo carregado, hero e cards de cadência PT/EN/ES. Sem ensaio em aparelho físico ou leitor de tela. O iframe foi carregado, mas a reprodução integral do depoimento não foi auditada.

## Entrega e reprodução

- Pasta de upload: `_entrega/site/`.
- ZIP atual: `_entrega/THE-GOLDEN-TEMPLE-2026-09-26-L1-L2.zip` (13.567.475 bytes).
- Hash do ZIP: `fed5eb3e8ee6da9d5f5fc73d816d6338b67473c4ba4810e6bd71ec2e605581ad`.
- Manifesto: `_entrega/SHA256SUMS.txt`.
- Instruções: `_entrega/LEIA-ANTES-DE-PUBLICAR.md`.
- Evidências: `_qa/iteration-2026-09-26/qa.json`, `changes.json`, `lighthouse/summary.json`, `package.json`, `zip.json` e PNGs. A falha inicial do card está preservada em `qa-initial.json`.
- Scripts: `_work/iteration-2026-09-26.cjs`, `iteration-og.cjs`, `iteration-qa.cjs`, `iteration-lighthouse.cjs`, `iteration-package.cjs` e `iteration-zip.ps1`. Empacotamento aborta se o gate ou os hashes divergirem; não sobrescreve snapshots nem ZIP existente.

## Ressalvas e próximo gate

**Verificador geral da Governança: retorno 1, 10 pendências na coluna “veto no gate”.** Arquivos apontados: MATRIZ-LEITURA-CONTEUDO, ABORDAGEM-FRIA, ALICERCE, CONSTRUCAO-DE-CRIATIVOS-DR, DIAGNOSTICO-DE-OPERACAO, EMPILHAMENTO-DE-HOOKS, GATE-DE-CONTRATACAO, LATERALIZACAO-DE-CRIATIVOS, PIVO-DE-CONVERSAO e SALESFORCE-INBOUND. As sete árvores e a sincronia AGENTS/CLAUDE passaram. São apontamentos fora desta iteração; nenhum desses arquivos foi modificado. **O gate geral não é apresentado como verde.**

Revisão textual de fidelidade feita pelo executor; a auditoria independente adicional tentou iniciar e falhou por falta de créditos. Não substitui L4 nem produz aprovação editorial. Novos blocos apontados no complemento de transcriação.

Próximo responsável: **Victor, L3**. Usar o novo pacote na raiz pública do domínio e **mesclar, nunca substituir**, o `.htaccess` existente com a proposta. Depois **Claude, L4**: 27 rotas, copy, EN/ES, console, 301, resposta 404 real, HTTPS e prévia WhatsApp. **Link não vai à Prana antes de L4 passar.**

## Carga e conflitos

Kernel/isolamento, árvore OPERAÇÃO, estado e decisões da Prana, contrato de iteração, CTO/TI, skills frontend e copy (referências 02/04/05). Skills influenciaram a 404, a marcação/revisão das transcriações e a preservação de fatos. Seus padrões de redesign/corte e animações adicionais cederam ao veto literal de alterar layout ou texto fora da lista. O CLI agent-browser não estava disponível; foi reutilizado Playwright/Edge já instalado no projeto. OG reutiliza o selo como composição de código, sem geração de logo. Não houve instalação de dependências, deploy, envio, novo preço, domínio, pixel, checkout ou promoção canônica.
