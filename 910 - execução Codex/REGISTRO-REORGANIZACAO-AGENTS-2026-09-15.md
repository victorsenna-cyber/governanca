# Registro de execução — reorganização do AGENTS.md

Data da verificação: 2026-09-15T23:00:19-03:00.

## Solicitação e escopo

Execução por ordem direta do usuário: criar uma pasta numerada de execução Codex, transferir para ela o AGENTS.md original, criar na raiz um clone de CLAUDE.md substituindo literalmente todas as ocorrências de CLAUDE.md por AGENTS.md e documentar em arquivo separado, preservando o conteúdo dos arquivos preexistentes.

O usuário esclareceu que ** representa o prefixo numérico da pasta. Foi adotado 910, após o maior prefixo encontrado, 900, mantendo o avanço de dez predominante na organização.

## Operações realizadas

1. Criada a pasta `910 - execução Codex/`.
2. Movido o arquivo original `AGENTS.md` da raiz para `910 - execução Codex/AGENTS.md`, sem alteração de conteúdo.
3. Criado um novo `AGENTS.md` na raiz, a partir do conteúdo integral de `CLAUDE.md`.
4. Substituídas exatamente 7 ocorrências literais de `CLAUDE.md` por `AGENTS.md` no novo arquivo.
5. Criado este registro em `910 - execução Codex/REGISTRO-REORGANIZACAO-AGENTS-2026-09-15.md`.

O arquivo-fonte `CLAUDE.md` permaneceu intacto. Nenhum outro arquivo preexistente foi editado por esta execução. A única transferência foi a solicitada para o AGENTS.md original; nenhum conteúdo foi descartado.

## Verificação executada

- PASSOU — SHA-256 do AGENTS.md original antes da transferência e no destino: `CAD267B66685FA74A15D3FA46B3A67E1081D492708A90E6D6F5B35E51A04D181`.
- PASSOU — SHA-256 de CLAUDE.md antes e depois: `D9E4131E4C66A5F205A09A807C0624794D265BE8A7C6D3B89B2572A945032416`.
- PASSOU — novo AGENTS.md exatamente igual, caractere por caractere, ao conteúdo de CLAUDE.md após a substituição literal solicitada.
- PASSOU — nenhuma ocorrência literal de CLAUDE.md restante no clone.
- SHA-256 do novo AGENTS.md: `9A0BEADDC47FFB1FF8ED8F654D0D885DA345674C97BBBFC95A3CE75164A91892`.
- Fonte e clone contêm 48.945 caracteres cada.

## Consequências da substituição literal

A operação não incluiu revisão semântica. O trecho originalmente chamado “Fronteira CLAUDE.md × AGENTS.md” passou a “Fronteira AGENTS.md × AGENTS.md”; as descrições originais de papéis e separação entre agentes foram preservadas. Referências a arquivos CLAUDE.md de clientes também passaram a apontar para AGENTS.md no clone, sem criar, mover ou validar esses arquivos locais de clientes.

Essas consequências estão documentadas; nenhum ajuste adicional de conteúdo foi realizado.

## Fechamento

Reorganização e clonagem verificadas. Este registro cobre somente a operação de arquivos solicitada; não constitui levantamento do estado do projeto de Débora.
