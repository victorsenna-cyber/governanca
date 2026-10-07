# HANDOFF — GATE 2: KERNEL ADITIVO

> STATUS: VIGENTE · handoff de fase
> Fechado em: 2026-07-19T00:56:47-03:00

## Resultado

A arquitetura de governança foi instalada em modo de transição. O repositório agora diferencia política, decisão, estado, fonte, capacidade, artefato e histórico; possui catálogo integral do legado, roteamento por área, writeback, fila de propagação, rituais e rollback.

Páginas, copy, funis, criativos, mídia, fontes e demais artefatos de Guilherme não foram iterados nem movidos.

## Diretriz que governa as próximas fases

Skills e métodos devem ser capacidades gerais, aplicáveis a qualquer cliente. Contexto, voz, oferta, decisão e estado entram por fontes/overlays locais. As skills exclusivas por cliente originalmente previstas na task estão superadas pelo adendo de 2026-07-19 e por `DEC-2026-07-19-004`.

Isso não transforma a réplica em arquivo editável: `00 - governança continuum/` permanece byte a byte e somente leitura. Generalizações futuras devem ser criadas fora dela, em task própria.

## O que foi criado

- documentos raiz: `AGENTS.md`, novo `CLAUDE.md`, `README.md`, `PROJECT.md`, `SCOPE.md`, `STATUS.md`, `DECISOES.md`, `DIARIO-DE-BORDO.md`, `GOVERNANCA-REPO.md`;
- estrutura aditiva 00–10;
- réplica imutável com 14 métodos/skills/contratos da Governança e manifesto de sync;
- catálogo, inventários, mapa, fila, rituais, testes e este handoff;
- manifesto de arquivo e duas cópias exatas dos kernels antigos.

## O que permaneceu no lugar

- todos os 39 diretórios do baseline;
- todos os 188 caminhos de arquivo do baseline;
- todo conteúdo legado, exceto a substituição autorizada do `CLAUDE.md` raiz;
- `CLAUDE.md.bak-20260615` também continua na raiz durante a transição;
- Governança e Débora sem qualquer alteração.

## Fontes e rotas

- entrada canônica: `CLAUDE.md`;
- catálogo de localização: `09 - operação/CATALOGO-ACERVO-LEGADO.md`;
- inventário integral: `09 - operação/inventarios/GATE-1-MANIFESTO-GUILHERME.tsv`;
- destino futuro/rollback: `09 - operação/MAPA-MIGRACAO.md`;
- decisões: `DECISOES.md`;
- estado: `STATUS.md`;
- writeback: diário → fila → status → handoff;
- métodos gerais: réplica imutável em `00 - governança continuum/`;
- overlays futuros: áreas 01–03, nunca embutidos em skills gerais.

## Verificação

- nove de nove rotas: PASS;
- 14/14 réplicas: paridade SHA-256;
- 18/18 arquivos de referência: idênticos ao baseline;
- 39/39 diretórios legados: presentes;
- 187/187 arquivos legados não substituídos: hashes idênticos;
- zero movimentos operacionais e zero mutações externas.

Evidência detalhada: `09 - operação/TESTES-ROTEAMENTO-GATE-2.md`.

## Pendências que continuam abertas

- H-01 a H-07 em `STATUS.md`;
- Pixel divergente e estado real da conta;
- página vigente por produto;
- fatos comerciais e atividade atual dos funis;
- fonte do dashboard e autoria do corpus de voz;
- implementação futura da arquitetura de skills gerais.

Nenhuma dessas pendências deve ser resolvida por suposição.

## Rollback da Fase 2

1. confirmar o hash `78335B97639AD26C08677D771EAD56E8A5BF767050CE96C1C1845BC5C9790357` do kernel v3 arquivado;
2. substituir o `CLAUDE.md` raiz por essa cópia somente mediante rollback aprovado;
3. remover apenas os arquivos e diretórios novos da Fase 2, conforme relatório do gate;
4. não mover nem editar qualquer caminho legado;
5. repetir o baseline para provar restauração.

## Parada

Gate 2 fechado. Nenhuma fase seguinte está autorizada automaticamente.

