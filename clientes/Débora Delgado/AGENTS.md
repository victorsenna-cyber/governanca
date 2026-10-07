# AGENTS.md — Operação Débora Delgado

Este diretório é a cópia operacional canônica da Débora dentro da Governança local.

## Abertura obrigatória

1. Ler `../../AGENTS.md` e `../../CLAUDE.md` para políticas e alçadas gerais.
2. Ler este arquivo, `CLAUDE.md`, `GOVERNANCA-REPO.md` e `PROJECT.md`.
3. Para estado/decisão, consultar `DECISOES.md` e as três entradas mais recentes de `DIARIO-DE-BORDO.md`.
4. Depois carregar somente os arquivos mínimos da frente indicados no `CLAUDE.md` local.

## Precedência

1. Políticas e alçadas da Governança-pai.
2. `DECISOES.md` deste projeto.
3. Fonte canônica da frente, como `03 - tráfego pago/OFERTA-CANONICA.md`.
4. Skill dominante e skill de voz local.
5. Artefato específico da tarefa.

Fatos, voz, produto e oferta da Débora nunca são inferidos a partir da Governança geral.

## Fronteira do workspace

- Raiz ativa: `00 - Local/01 - Governança/clientes/Débora Delgado/`.
- `00 - Local/clientes/Débora Delgado/` e `04 - Onboarding/Operação/Débora Delgado/` são origens preservadas/legado: leitura apenas.
- Não escrever, mover, renomear, apagar ou sincronizar de volta para as origens antigas.
- A pasta distinta `clientes/debora/` não faz parte deste workspace e não pode ser consolidada sem decisão explícita.

## Execução

- Trabalhar por `fonte -> evidência -> decisão -> execução`.
- Respeitar `STATUS:` dos documentos; material `HISTÓRICO` ou `SUPERADO` não é fonte operacional.
- Copy para humano cruza método geral + `07 - skills/debora-voice/SKILL.md` + gate anti-slop.
- Não publicar página, fazer deploy, ativar campanha, alterar verba ou disparar mensagem sem aprovação humana explícita.
- Preservar popup, pixel, lote, prefill, endpoints e contratos de dados em alterações de página/dashboard.
- Fechar com arquivos alterados, validações, decisões propagadas e pendências; registrar no diário quando a tarefa exigir writeback.
