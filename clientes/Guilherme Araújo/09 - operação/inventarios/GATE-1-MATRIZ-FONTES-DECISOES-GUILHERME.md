# GATE 1 — MATRIZ DE FONTES, CONFLITOS E DECISÕES HUMANAS

> **STATUS:** DIAGNÓSTICO READ-ONLY
> **Data:** 2026-07-19
> **Escopo:** repositório Guilherme; Governança e Débora apenas como referência estrutural

## 1. Distribuição preliminar dos Markdown

Classificação detalhada: `GATE-1-CLASSIFICACAO-PRELIMINAR-MARKDOWN.tsv`.

| Classe | Arquivos |
|---|---:|
| artefatos de subprojeto a validar | 29 |
| históricos não editáveis | 26 |
| fontes operacionais de área a validar | 18 |
| históricos de planejamento assistido | 12 |
| artefatos de página a validar | 7 |
| planos datados de mídia a reconciliar | 6 |
| roteamentos locais a validar | 3 |
| derivados genéricos a validar | 2 |
| derivados históricos a reconciliar | 2 |
| fontes contextuais a validar | 2 |
| kernel legado a superar | 1 |
| estado de mídia a validar | 1 |
| fonte bruta não editável | 1 |
| fonte local de decisão com estado a validar | 1 |
| skill legada com superação planejada | 1 |
| **Total** | **112** |

Essa classificação é preliminar. Ela orienta a canonização; não muda o status real de nenhum arquivo nesta fase.

## 2. Conflitos e desvios confirmados

| ID | Tema | Evidência | Classificação | Tratamento contratado |
|---|---|---|---|---|
| C-01 | kernel menor que o sistema | `CLAUDE.md` define o projeto como Meta Ads, mas há produtos, funis, páginas, criativos e dashboards | conflito estrutural | novo kernel na Fase 2; preservar v3 |
| C-02 | estado vivo desatualizado | `meta-ads/00_CONTEXTO_GERAL_META_ADS.md` é de 30/05; há checkpoints até 14/06 e planos de 15/06 | conflito de estado | marcar `A VALIDAR`; reconciliar sem consultar conta na Fase 3 |
| C-03 | Pixel divergente | skill legada usa `1259363312489132`; demais fontes examinadas usam `1259363302489132` | conflito factual crítico | registrar incidente; validar em fonte externa somente com autorização futura |
| C-04 | caminho de checkpoint incorreto | kernel manda escrever em `meta-ads/CHECKPOINT...`; os arquivos vivem em `meta-ads/checkpoints/` | referência ativa incorreta | corrigir apenas no novo kernel |
| C-05 | nome de pasta enganoso | `00 - Governança/index.html` é dashboard “Resultados de Junho” | conflito semântico | mover para dados/dashboards na Fase 4 |
| C-06 | decisões fragmentadas | `STATUS_E_DECISOES.md` governa somente a esteira; não há log raiz | lacuna de governança | consolidar com proveniência em `DECISOES.md` |
| C-07 | múltiplas fontes de página | `Cartomancia Sistêmica/LP_COPY.md` se declara fonte; há `Páginas de vendas/index.html` e `index v0.9.1 - versão em veiculação.html` | conflito de versão | confirmar qual página está vigente por produto antes da canonização |
| C-08 | fonte de assets sem materialização | `CRIATIVOS/17_MAPA_DE_ASSETS.md` se declara fonte de verdade, mas a árvore `assets/` descrita não existe | contrato não implementado | preservar método; marcar estado real como não materializado |
| C-09 | preços travados e “a confirmar” simultaneamente | esteira registra decisões D3–D5, mas D4 e vários documentos mantêm preço a confirmar | conflito decisão/proposta | Guilherme confirma; até lá, `PROPOSTA — NÃO VIGENTE` |
| C-10 | referências locais não resolvidas | 24 candidatos encontrados por análise estática | mistura de falha, exemplo e runtime | tratar conforme §4 |
| C-11 | duplicidade silenciosa | 6 grupos, 12 arquivos, 182 hashes únicos em 188 arquivos | redundância | escolher canônico e arquivar cópia, sem apagar |
| C-12 | vazio e artefato inválido | pasta `guilherme-cartomancia-pages` vazia; `script-vendas.html` com 0 bytes | resíduo | arquivar com manifesto |

## 3. Fontes que atualmente alegam autoridade

| Fonte | Alegação | Limite observado |
|---|---|---|
| `CLAUDE.md` raiz | doutrina da operação e roteamento | governa Meta Ads, não o ecossistema inteiro |
| `meta-ads/00_CONTEXTO_GERAL_META_ADS.md` | estado vivo da conta | desatualizado frente a checkpoints posteriores |
| `Cartomancia Sistêmica/LP_COPY.md` | fonte de verdade da copy | precisa ser relacionada à página realmente vigente |
| `CRIATIVOS/17_MAPA_DE_ASSETS.md` | tabela mestre de assets | estrutura descrita não está materializada no filesystem |
| `ESTEIRA_JORNADA_CONSTELACAO/STATUS_E_DECISOES.md` | fonte única do subprojeto | válido somente no subprojeto; estado parou em 02/06 |
| `Páginas de vendas/ITERACOES_LP...md` | iterações aprovadas | duplicata exata da cópia na raiz |

Conclusão: as alegações não são todas mutuamente excludentes, mas faltam escopo, data e precedência. A Fase 3 deve manter fontes por domínio e consolidar decisões/estado na raiz.

## 4. Referências candidatas

Arquivo detalhado: `GATE-1-CANDIDATOS-REFERENCIAS.tsv`.

| Classe | Quantidade | Tratamento |
|---|---:|---|
| exemplo ou histórico | 18 | não corrigir automaticamente |
| candidato acionável | 2 | `index v1.0.html` citado em `LP_BLUEPRINT` e `LP_COPY`, mas inexistente |
| revisar | 2 | imagens de criativos citadas por plano de WhatsApp; procurar pelo nome real durante canonização |
| runtime externo | 1 | caminho `/wp-content/...`; não é referência local do repo |
| referência ativa ambígua | 1 | `NOTAS.md` citado sem subpasta no status da esteira |

Também foi confirmado fora da extração automática que o kernel referencia o diretório errado para novos checkpoints. Essa correção pertence ao novo kernel, não ao histórico.

## 5. Decisões humanas necessárias

| ID | Pergunta | Autoridade | Bloqueia |
|---|---|---|---|
| H-01 | Qual é o Pixel canônico e o estado atual da conta Meta Ads? | Victor/Continuum, com verificação na conta | estado de mídia definitivo; não bloqueia kernel |
| H-02 | Qual arquivo/página está efetivamente em veiculação para cada produto? | Victor/Continuum | canonização de páginas e atualização de referências |
| H-03 | Quais nomes, preços, formatos e entregas dos produtos/funis estão confirmados hoje? | Guilherme | catálogo, ecossistema e skill de funil |
| H-04 | A esteira e o funil CORE continuam ativos, planejados ou devem ficar históricos? | Guilherme + Continuum | status dos subprojetos |
| H-05 | O dashboard “Resultados de Junho” ainda é usado e qual é sua fonte de dados? | Victor/Continuum | estado do dashboard; não bloqueia correção do nome da pasta |
| H-06 | Quais decisões antigas de mídia pendentes foram executadas fora do repo? | Victor/Continuum | reconciliação do log e do estado |
| H-07 | Quais materiais são fala real/autoria direta do Guilherme versus copy assistida? | Guilherme/Continuum | corpus final da skill de voz |

## 6. Decisões que não precisam ser perguntadas novamente

- Governança e Débora permanecem somente leitura.
- A migração será em fases e com gates.
- O kernel v3 será preservado, não apagado.
- Duplicatas, vazios e superados serão arquivados, nunca excluídos.
- A réplica da Governança será byte a byte e imutável.
- Conteúdo específico da Débora não entra no Guilherme.
- Políticas internas da Continuum não entram no repositório do cliente.
- Publicação, orçamento e mutações externas continuam fora do escopo desta task.

## 7. Diretriz para a Fase 2

A Fase 2 pode instalar o kernel em modo de transição sem esperar H-01 a H-07, desde que:

1. nenhum fato pendente seja promovido a vigente;
2. caminhos legados continuem roteáveis;
3. cada lacuna apareça como `A VALIDAR` com autoridade;
4. não haja movimentação física antes do Gate 3;
5. a Fase 2 pare no Gate 2.

