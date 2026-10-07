# GATE 1 — MAPA DE MIGRAÇÃO DO REPOSITÓRIO GUILHERME

> **STATUS:** PLANEJADO · nenhuma movimentação executada
> **Baseline:** `GATE-1-MANIFESTO-GUILHERME.tsv`
> **Regra:** toda origem permanece no lugar até aprovação do Gate 1

## 1. Convenção

| Estado | Significado |
|---|---|
| `MANTER` | permanece no caminho atual |
| `MOVER` | muda de caminho preservando bytes e conteúdo |
| `DERIVAR` | fonte é preservada e gera um novo documento canônico |
| `ARQUIVAR` | preservado como histórico, duplicata, vazio ou superado |
| `CRIAR` | novo artefato de governança; não substitui evidência bruta |
| `VALIDAR` | depende de decisão humana ou verificação operacional antes da migração |

## 2. Entrada e documentos raiz

| Origem atual | Destino planejado | Estado | Onda | Observação |
|---|---|---|---:|---|
| `.claude/` | `.claude/` | MANTER | 0 | revisar apenas referências locais na Fase 5 |
| `CLAUDE.md` | `10 - registros e arquivo/governanca-pre-iteracao/CLAUDE-v3.0-20260615.md` | ARQUIVAR | 0 | novo kernel será criado na raiz |
| `CLAUDE.md.bak-20260615` | `10 - registros e arquivo/governanca-pre-iteracao/CLAUDE.md.bak-20260615` | ARQUIVAR | 0 | preservar sem editar |
| — | `AGENTS.md` | CRIAR | 0 | ponte curta para o kernel |
| — | `CLAUDE.md` | CRIAR | 0 | kernel de toda a operação |
| — | `README.md` | CRIAR | 0 | índice humano |
| — | `PROJECT.md` | DERIVAR | 1 | sintetiza contexto estável, sem apagar fontes |
| — | `SCOPE.md` | CRIAR | 0 | alçadas, fronteiras e aprovações |
| — | `STATUS.md` | DERIVAR | 1 | consolida apenas estado verificado e datado |
| — | `DECISOES.md` | DERIVAR | 1 | consolida decisões mantendo proveniência |
| — | `DIARIO-DE-BORDO.md` | CRIAR | 0 | writeback obrigatório |
| — | `GOVERNANCA-REPO.md` | CRIAR | 0 | status, superação e propagação |

## 3. Diretórios existentes

| Origem | Destino planejado | Estado | Onda | Regra de preservação |
|---|---|---|---:|---|
| `00 - Governança/` | `08 - dados e dashboards/dashboard-campanhas-junho/` | MOVER | 4 | dashboard HTML; não alterar conteúdo |
| `01 - Criativos/` | `05 - design e criativos/assets-brutos/` | MOVER | 3 | preservar zips, imagens e vídeos |
| `arquivos aulas/` | `02 - produtos e método/fontes-formacao/arquivos-aulas/` | MOVER | 1 | fonte bruta, somente leitura |
| `Cartomancia Sistêmica/` | `03 - ofertas e funis/cartomancia-sistemica/` | MOVER | 2 | manter workspace inteiro |
| `CRIATIVOS/` | `05 - design e criativos/sistema-criativo/` | MOVER | 3 | preservar os 18 contratos operacionais |
| `Criativos & Conteúdos [planejamento] Opus 4.7/` | `10 - registros e arquivo/planejamentos-historicos/criativos-opus-4.7/` | ARQUIVAR | 5 | histórico assistido; não usar como fonte |
| `ESTEIRA_JORNADA_CONSTELACAO/` | `03 - ofertas e funis/esteira-jornada-constelacao/` | MOVER | 2 | preservar estrutura e decisões locais |
| `FUNIL_CONSTELACAO/` | `03 - ofertas e funis/formacao-core-constelacao/` | MOVER | 2 | preservar estrutura e decisões locais |
| `guilherme-cartomancia-pages/` | `10 - registros e arquivo/invalidos-e-vazios/guilherme-cartomancia-pages/` | ARQUIVAR | 5 | pasta vazia; não excluir |
| `insights/` | `01 - contexto/referencias/insights/` | MOVER | 1 | fonte bruta |
| `MAPAS MENTAIS - PENTÁCULO DAS VENDAS/` | `02 - produtos e método/fontes-formacao/pentaculo-das-vendas/` | MOVER | 1 | fonte bruta |
| `MAPAS MENTAIS INTRODUTÓRIOS/` | `02 - produtos e método/fontes-formacao/mapas-introdutorios/` | MOVER | 1 | fonte bruta |
| `meta-ads/` | `06 - mídia paga/meta-ads/` | MOVER | 4 | manter histórico; estado vivo será separado |
| `Páginas de vendas/` | `04 - web design/introducao-cartomancia/` | MOVER | 3 | preservar HTML, contratos e checkout |
| `páginas script de vendas/` | `04 - web design/scripts-vendas/` | MOVER | 3 | preservar arquivos como grupo |
| `Provas sociais/` | `01 - contexto/provas-sociais/` | MOVER | 1 | evidência binária, não editar |
| `skills/` | `10 - registros e arquivo/skills-superadas/` | ARQUIVAR | 5 | decompor `paid-traffic`; novas skills em `07` |

## 4. Arquivos soltos atuais

| Origem | Destino planejado | Estado | Onda | Observação |
|---|---|---|---:|---|
| `CONTEXTO_NEGOCIO_GUILHERME.md` | `01 - contexto/contexto-negocio/CONTEXTO_NEGOCIO_GUILHERME.md` | MOVER | 1 | fonte de `PROJECT.md` |
| `Ecossistema Guilherme Araújo.md` | `01 - contexto/contexto-negocio/Ecossistema Guilherme Araújo.md` | MOVER | 1 | fonte de catálogo/ecossistema |
| `CURSO DE FORMAÇÃO INTRODUTÓRIA À CARTOMANCIA SISTÊMICA.md` | `01 - contexto/corpus-linguistico/` | MOVER | 1 | corpus primário de voz; não editar |
| `CURSO DE FORMAÇÃO EM CARTOMANCIA SISTÊMICA.pdf` | `02 - produtos e método/fontes-formacao/` | MOVER | 1 | duplicata também presente no funil |
| `Cartomancia Sistêmica .pdf` | `02 - produtos e método/fontes-formacao/` | MOVER | 1 | duplicata do eBook do workspace |
| `2- INTRODUÇÃO_ PROGRESSÃO VERTICAL NO AUTOCONHECIMENTO E ESPIRITUALIDADE.pdf` | `02 - produtos e método/fontes-formacao/` | MOVER | 1 | duplicata de mapa introdutório |
| `Foto Guilherme - LP.jpeg` | `05 - design e criativos/assets-marca/` | MOVER | 3 | escolher como cópia canônica após Gate 3 |
| `ITERACOES_LP_CARTOMANCIA_SISTEMICA.md` | `10 - registros e arquivo/duplicatas-comprovadas/` | ARQUIVAR | 5 | a cópia junto da página será canônica |
| `script-vendas.html` | `10 - registros e arquivo/invalidos-e-vazios/` | ARQUIVAR | 5 | zero bytes |
| `URLs ADS.txt` | `06 - mídia paga/meta-ads/referencias/URLs ADS.txt` | MOVER | 4 | preservar conteúdo |

## 5. Novos diretórios e artefatos

| Destino | Estado | Fase | Função |
|---|---|---:|---|
| `00 - governança continuum/` | CRIAR | 2 | réplica local imutável e manifesto de sync |
| `01 - contexto/CATALOGO-FONTES.md` | CRIAR | 3 | classifica fontes sem alterar bruto |
| `02 - produtos e método/CATALOGO-PRODUTOS.md` | CRIAR | 3 | inventário canônico com fatos confirmados/a validar |
| `03 - ofertas e funis/ECOSSISTEMA-CANONICO.md` | CRIAR | 3 | relações entre produtos, ofertas e funis |
| `06 - mídia paga/STATUS-CONTA-ANUNCIOS.md` | CRIAR | 3 | estado datado, separado de método |
| `06 - mídia paga/LOG-DECISOES.md` | CRIAR | 3 | decisões e aprendizado de mídia |
| `06 - mídia paga/CONTRATO-NOMENCLATURA.md` | CRIAR | 3 | naming específico do cliente |
| `07 - skills/guilherme-voice/` | CRIAR | 3 | skill baseada em evidência literal |
| `07 - skills/funil-guilherme/` | CRIAR | 3 | derivado do ecossistema canônico |
| `07 - skills/pagina-explicada/` | CRIAR | 3 | protocolo de aprovação de páginas |
| `09 - operação/FILA-PROPAGACAO.md` | CRIAR | 2 | decisões sinalizadas e execução controlada |
| `09 - operação/RITUAIS.md` | CRIAR | 2 | manutenção do writeback |
| `10 - registros e arquivo/MANIFESTO-ARQUIVO.md` | CRIAR | 2 | rastreia tudo que deixa de ser fonte ativa |

## 6. Grupos de duplicatas comprovados

Nenhum será excluído. O local canônico definitivo será registrado na Fase 3 e a cópia redundante será arquivada na Onda 5.

| SHA-256 | Cópia A | Cópia B |
|---|---|---|
| `2C060769EBD2F8A0210D52869F23DF3333B9457752616165CA417E449AE9C536` | `Foto Guilherme - LP.jpeg` | `01 - Criativos/foto Guilherme.jpeg` |
| `46B9484756EB3E49A62E69D38116FB9545983D4E1A04D7104706F6552905EF9C` | `CURSO DE FORMAÇÃO EM CARTOMANCIA SISTÊMICA.pdf` | cópia em `FUNIL_CONSTELACAO/links + contexto/` |
| `4EA48146F12D0C101D0144B9E0E529315B792B69502AF15A52D6906820BC01E8` | `CURSO DE FORMAÇÃO INTRODUTÓRIA À CARTOMANCIA SISTÊMICA.md` | cópia em `FUNIL_CONSTELACAO/links + contexto/` |
| `73E2251441EA13C14B22E46183BC5A68D7BEEB2FA3DAC098E2B5C90D4534DEAE` | `ITERACOES_LP_CARTOMANCIA_SISTEMICA.md` | cópia em `Páginas de vendas/` |
| `7C48E150A058B3EC4E53DC71939D7AD8CA34C6A56462FBFC78D5A3186F36FCB9` | PDF `2- INTRODUÇÃO...` na raiz | cópia em `MAPAS MENTAIS INTRODUTÓRIOS/` |
| `EC2FE64F9777B1D9CE9C41696BDA0E488C4F4BD0849085A5376EAFA09DD867BC` | `Cartomancia Sistêmica .pdf` | `Cartomancia Sistêmica/eBook - Cartomancia Sistêmica.pdf` |

## 7. Procedimento seguro futuro

1. Resolver origem e destino absolutos.
2. Confirmar que ambos estão dentro do diretório Guilherme.
3. Comparar origem com o hash do baseline.
4. Executar `Move-Item -LiteralPath` apenas para o item explícito.
5. Recalcular hash no destino.
6. Atualizar este mapa com data, fase, onda e rollback.
7. Parar a onda se houver divergência.

O rollback é sempre o movimento inverso, em ordem reversa, usando os mesmos caminhos literais.

