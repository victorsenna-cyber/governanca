# Tráfego — Workspaces de Clientes

> **Tipo:** estado (camada 3) · atualização contínua durante gestão ativa.
> Cada cliente de gestão de tráfego tem uma pasta aqui, criada a partir de `_template/`. O método que governa tudo: `METODO-TRAFEGO-PAGO.md`.

## Regra de fronteira (o que vive aqui vs. fora)

- **Aqui (governança = camada de decisão):** briefing, plano de mídia, matriz de criativos, estrutura de campanhas, log de decisões, relatórios finais. Só markdown leve — é o que o Claude/Codex carrega para operar o cliente.
- **Na camada operacional do cliente (ex.: `..\..\clientes\<cliente>\`):** assets pesados — vídeos, imagens, exports de plataforma, contratos. Referenciar no rodapé `Base:` de cada artefato.

## Como abrir um cliente novo

1. Passou no **gate de entrada** (`METODO-TRAFEGO-PAGO.md` §1)? Senão, não abre pasta.
2. Copiar `_template/` → `<cliente>/` e preencher `BRIEFING.md`.
3. Preencher `PLANO-DE-MIDIA.md` (matemática reversa §2.2 assinada pelo cliente).
4. Seguir a cadeia do método: página → criativos → estrutura → tracking → gestão.

## Clientes ativos

| Cliente | Início | Verba/mês | Fee | Estágio (método §2.3) | Status |
|---|---|---|---|---|---|
| **Débora Delgado** (`debora/`) | contrato 29/05 · tráfego em preparação | `a calibrar` (confirmar c/ cliente) | R$ 12k/6m quitado (legado, anti-padrão POLITICAS §5) | pré-aprendizado | bloqueada por: página + pixel + verba (auditoria 08/07) |
| **Guilherme Araújo** (`guilherme/`) | workspace aberto 29/07/2026 (conta rodando desde abr/2026 sem governança) | R$ 600 (R$ 20/dia) | **R$ 0 — parceria de indicação** (exceção consciente a POLITICAS §5, decidida 22/07) | aprendizado | conta 100% pausada · spec de campanha de engajamento pronta · **bloqueada por GATE-1 (permissão do IG) + meta assinada** |

**Pasta operacional da Débora:** `..\..\clientes\Débora Delgado\` (carregar o kernel local quando a tarefa for de execução — criativos, página, campanha).
**Pasta operacional do Guilherme:** `..\..\clientes\Guilherme Araújo\` (kernel local próprio, v4.0-transição — carregar antes de qualquer execução; fatos de produto/preço lá são `A VALIDAR`).
