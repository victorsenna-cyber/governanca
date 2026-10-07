# CATÁLOGO DO ACERVO LEGADO

> STATUS: VIGENTE · índice de localização; não define fonte canônica
> Baseline: 2026-07-19
> Inventário exato: `inventarios/GATE-1-MANIFESTO-GUILHERME.tsv`

## 1. Como usar

Este catálogo diz onde o repositório enxerga o material produzido antes do kernel v4. Ele não move, reescreve, aprova nem escolhe a versão vigente. Quando for necessário um arquivo específico, resolver o caminho no manifesto integral e só então ler o mínimo necessário.

O baseline contém 39 diretórios e 188 arquivos, totalizando 227 entradas inventariadas. A classificação preliminar dos 112 Markdown está em `inventarios/GATE-1-CLASSIFICACAO-PRELIMINAR-MARKDOWN.tsv`.

## 2. Diretórios legados por área

| Caminho atual | O que o repo enxerga | Fronteira futura | Estado |
|---|---|---|---|
| `.claude/` | configuração local de ferramenta | permanece na raiz | catalogado; revisar só em task própria |
| `00 - Governança/` | dashboard HTML “Resultados de Junho”; não é política | `08 - dados e dashboards/` | catalogado · fonte de dados a validar |
| `01 - Criativos/` | assets brutos de criativos | `05 - design e criativos/` | catalogado · não mover |
| `arquivos aulas/` | fontes brutas de formação | `02 - produtos e método/` | catalogado · não editar |
| `Cartomancia Sistêmica/` | workspace de produto/oferta/página | `03 - ofertas e funis/` | catalogado · autoridade interna a validar |
| `CRIATIVOS/` | sistema e contratos de produção criativa | `05 - design e criativos/` | catalogado · materialização a validar |
| `Criativos & Conteúdos [planejamento] Opus 4.7/` | planejamentos assistidos/históricos | `10 - registros e arquivo/` | catalogado · não usar como fonte por padrão |
| `ESTEIRA_JORNADA_CONSTELACAO/` | subprojeto, status e decisões locais | `03 - ofertas e funis/` | catalogado · atividade atual a validar |
| `FUNIL_CONSTELACAO/` | funil/formação CORE e entregáveis | `03 - ofertas e funis/` | catalogado · atividade atual a validar |
| `guilherme-cartomancia-pages/` | pasta vazia | `10 - registros e arquivo/invalidos-e-vazios/` | catalogado · não excluir |
| `insights/` | referências e insights | `01 - contexto/` | catalogado · fonte bruta |
| `MAPAS MENTAIS - PENTÁCULO DAS VENDAS/` | fontes de formação | `02 - produtos e método/` | catalogado · fonte bruta |
| `MAPAS MENTAIS INTRODUTÓRIOS/` | fontes de formação | `02 - produtos e método/` | catalogado · fonte bruta |
| `meta-ads/` | estado, checkpoints, planos e relatórios de mídia | `06 - mídia paga/` | catalogado · estado atual a validar |
| `Páginas de vendas/` | páginas, HTMLs e contratos relacionados | `04 - web design/` | catalogado · versão vigente a validar |
| `páginas script de vendas/` | páginas e scripts de vendas | `04 - web design/` | catalogado · não iterar nesta fase |
| `Provas sociais/` | evidências binárias | `01 - contexto/` | catalogado · não editar |
| `skills/` | skill legada de tráfego com método e estado misturados | `10 - registros e arquivo/skills-superadas/` | catalogado · não editar/decompor nesta fase |

## 3. Arquivos legados na raiz

| Caminho atual | Classe de uso | Rota |
|---|---|---|
| `CLAUDE.md.bak-20260615` | kernel histórico | cópia preservada em `10 - registros e arquivo/governanca-pre-iteracao/` |
| `CONTEXTO_NEGOCIO_GUILHERME.md` | fonte contextual a validar | contexto/produto/oferta; futuro `01 - contexto/` |
| `Ecossistema Guilherme Araújo.md` | fonte contextual a validar | produto/oferta/funil; futuro `01` e `03` |
| `CURSO DE FORMAÇÃO INTRODUTÓRIA À CARTOMANCIA SISTÊMICA.md` | fonte/corpus a validar | contexto e método; futuro `01`/`02` |
| PDFs de Cartomancia e formação | fontes brutas; há duplicatas comprovadas | futuro `02 - produtos e método/` |
| `Foto Guilherme - LP.jpeg` | asset de marca; duplicata comprovada | futuro `05 - design e criativos/` |
| `ITERACOES_LP_CARTOMANCIA_SISTEMICA.md` | derivado/duplicata comprovada | página/histórico; futuro `04`/`10` |
| `script-vendas.html` | arquivo de zero bytes | futuro `10 - registros e arquivo/invalidos-e-vazios/` |
| `URLs ADS.txt` | referência de mídia | futuro `06 - mídia paga/` |

Os nomes e hashes exatos de todos os arquivos soltos, inclusive PDFs, estão no manifesto. Não usar este resumo para decidir duplicata ou canonicidade.

## 4. Índices auxiliares

| Arquivo | Uso |
|---|---|
| `inventarios/GATE-1-MANIFESTO-GUILHERME.tsv` | caminho, tipo, bytes, data e SHA-256 de todo o baseline |
| `inventarios/GATE-1-CLASSIFICACAO-PRELIMINAR-MARKDOWN.tsv` | classe preliminar dos Markdown; não altera status real |
| `inventarios/GATE-1-CANDIDATOS-REFERENCIAS.tsv` | referências locais que podem exigir revisão futura |
| `inventarios/GATE-1-MATRIZ-FONTES-DECISOES-GUILHERME.md` | conflitos, alegações de autoridade e decisões humanas abertas |
| `MAPA-MIGRACAO.md` | origem, destino futuro, onda e regra de preservação |

## 5. Regra de roteamento

1. classificar o pedido pelo kernel;
2. escolher a linha de área neste catálogo;
3. resolver o arquivo no manifesto;
4. verificar status/autoridade na matriz e em `STATUS.md`;
5. ler apenas o arquivo necessário;
6. escrever somente onde a task autoriza;
7. registrar diário e fila se houver impacto futuro.

