# RUNBOOK — SUBIDA ONDA 1: TRÁFEGO AO PERFIL (GUILHERME ARAÚJO)

> STATUS: VIGENTE · manual operacional da scheduled task `subida-onda1-guilherme`
> Criado em: 2026-08-18 · America/Sao_Paulo
> Autoridade: Victor/Continuum · escopo aprovado em 18/08/2026
> **Editar o comportamento AQUI, nunca no prompt da scheduled task.**

> **AVISO DE ESTADO · 2026-08-29.** Este runbook descreve a trilha `ESTRATEGIA-CONTINUUM`, que **não** é a trilha vigente para os pedidos avulsos do Guilherme desde `DEC-2026-08-26-001`. A trilha padrão hoje é `EXECUCAO-DIRIGIDA-GUILHERME`, governada por `MODUS-OPERANDI.md`.
>
> O que continua válido aqui: o alvo confirmado da conta (§2), a estrutura do conjunto lookalike (§3.2), as métricas e o benchmark (§4) e as regras de kill (§4.1). A campanha `120254780918080210` continua em pausa e é a estrutura a **reutilizar**, não a recriar.
>
> O que ficou suspenso: os gates de lote de criativos novos (§1), enquanto a execução dirigida estiver rodando Reels existentes. Estado atual da conta e da fila em `06 - mídia paga/AUDITORIA-BRIEFING-REELS-2026-08-29.md`.

---

## 0. Regra que não se quebra

**Esta task cria a campanha em PAUSA. Ela nunca ativa nada.**

Ativação exige aprovação humana separada, em outra interação, com verba confirmada. Se qualquer passo abaixo estiver ambíguo, a task **para, escreve o que falta e avisa** — não improvisa.

Nenhuma outra campanha da conta pode ser ativada, pausada, editada ou excluída por esta task.

---

## 1. Condição de disparo

A task roda todo dia. Ela só executa a subida quando **as três condições** abaixo forem verdadeiras. Qualquer uma falsa: registra e encerra sem mutação.

| # | Condição | Como verificar |
|---|---|---|
| G1 | **Criativos corrigidos e aprovados** | `APROVACAO-VISUAL.md` existe em `carrosseis-campanha-2026-08-18/` com `STATUS: APROVADO` E as 8 correções de arte da §7.1 do veredito estão feitas: sem código interno impresso, sem grade de construção, card 3 mudando de estado, `E depois?` maior no `C03`, diagrama presente em `C04`/`C05`, CTA como maior elemento do card 8 |
| G2 | **Lote completo — mínimo do método** | existem **pelo menos 8 criativos** e **pelo menos 2 formatos** (§4.1 do `METODO-TRAFEGO-PAGO.md`). Obrigatoriamente entre eles: uma peça de **prova social** e um **Reel de controle**. Seis carrosséis sozinhos **não** cumprem este gate |
| G3 | **Gates de método fechados** | existe `PLANO-DE-MIDIA.md` com a matemática reversa (§2.2) · existe `LOG-DECISOES.md` com as regras de kill escritas · perfil `@professorguilhermearaujo` auditado e com "mapas" visíveis · D-01, D-02 e D-04 registradas em `DECISOES.md` |

Fontes: `06 - mídia paga/AUDITORIA-PRE-SUBIDA-CAMPANHAS-2026-08-18.md` (P0/P1) e `05 - design e criativos/VEREDITO-CRIATIVOS-PERFORMANCE-2026-08-18.md` (nota de arte e lote mínimo).

**G1 e G2 não se negociam por pressa.** Nota de arte abaixo de 42/60 ou lote abaixo de 8 peças = a task não sobe. Subir um lote incompleto produz o resultado ruim *e* a conclusão errada sobre por que foi ruim.

**Sobre o print da conta:** se Victor tiver anexado um print/screenshot da conta de anúncio na conversa ou em `06 - mídia paga/`, conferir contra a leitura via API antes de criar qualquer coisa. Divergência entre print e API **para a task** — o print é a verdade que o humano viu, a API é a verdade do sistema, e as duas discordando é sinal de conta errada ou permissão errada.

---

## 2. Alvo confirmado (leitura de 18/08/2026)

| Item | Valor |
|---|---|
| Conta de anúncio | `605257748612701` — "CA 01" · BM `terapeutaguilhermearaujo` · BRL |
| Página | `103620069213113` — "Baralho Cigado Sistêmico" *(ver D-02: nome tem erro de digitação)* |
| Instagram | `17841456176956487` — `professorguilhermearaujo` |

**Não usar** a conta `143255485867453` ("Guilherme William Araújo"). Não é a conta de operação.

---

## 3. O que criar

### 3.1 Campanha

| Campo | Valor |
|---|---|
| Nome | `GA\|TOFU\|IG\|TRAFEGO-PERFIL\|LOOKALIKE\|<AAAAMMDD>` |
| Objetivo | `OUTCOME_TRAFFIC` |
| Orçamento | **no conjunto (ABO)**, não na campanha |
| Status | `PAUSED` |
| Special ad categories | nenhuma |

### 3.2 Conjunto — réplica do vencedor histórico

Este conjunto reproduz de propósito a configuração de `120252471799630210`, que entregou **116 seguidores a R$1,87** — o melhor resultado registrado nesta conta.

| Campo | Valor | Por quê |
|---|---|---|
| Nome | `AS\|LOOKALIKE-1%-SEG+VISIT\|<geo>\|<AAAAMMDD>` | |
| Otimização | **`PROFILE_VISIT`** | confirmado disponível nesta conta |
| Orçamento diário | conforme D-09 · referência: **R$20,00** | |
| Públicos incluídos | `120252469504920210` (Semelhante 1% Seguidores) · `120252470164980210` (Semelhante 1% Visitantes Perfil 30D) · `120252470099600210` (Visitantes Perfil 30D) | trio exato do conjunto vencedor |
| `advantage_audience` | **`0`** | o vencedor rodava desligado; ligar dissolve o lookalike |
| Idade | 18–65 | **não reabrir 21–34 isolado**: gastou R$49 e trouxe 0 seguidor |
| Gênero | conforme **D-03** | histórico roda `[2]` (só mulheres) sem decisão registrada |
| Geografia | conforme **D-04** | histórico recente: 70% SC / 30% BR amplo |
| Plataformas | Instagram apenas | |
| Posicionamentos | stream, story, reels, explore_home, profile_feed | |
| Dispositivo | mobile | |

### 3.3 Anúncios — 8 a 10, num único conjunto

`METODO-TRAFEGO-PAGO.md` §5.3 é categórico para verba abaixo de R$100/dia: **1 campanha, 1 conjunto, 6–10 criativos, zero fragmentação.** Não dividir `C01`–`C03` e `C04`–`C06` em campanhas separadas nesta verba.

| # | Anúncio | Criativo | Papel |
|---|---|---|---|
| 1–6 | `AD\|CARROSSEL-C0X-<ângulo>\|<AAAAMMDD>` | `C01` a `C06` corrigidos, 8 PNGs cada | ângulos de dor, educação e objeção invertida |
| 7 | `AD\|PROVA-JORNADA-5000\|<AAAAMMDD>` | print real da cliente ("fechei uma jornada de R$5.000… a cliente praticamente se vendeu sozinha") | **prova/case** — ângulo hoje ausente |
| 8 | `AD\|PARTICIPACAO-<tema>\|<AAAAMMDD>` | mecânica herdada de `ESCOLHA1CARTA` | **participação** — a mecânica com melhor custo/seguidor da conta |
| 9 | `AD\|REEL-DESEJO-<tema>\|<AAAAMMDD>` | Reel novo de Guilherme | **desejo/depois** — segundo formato |
| 10 | `AD\|REEL-CONTROLE-ESCOLHA1CARTA\|<AAAAMMDD>` | publicação existente — a de `AD\|ESCOLHA1CARTA` (CTR 5,85%, 116 seguidores, R$1,87) | **controle** — sem ele, resultado ruim não distingue formato errado de mensagem errada |

Se D-01 tiver proibido peças com carta, substituir o controle pelo Reel orgânico de melhor desempenho **sem carta** e registrar a substituição — mas nunca subir sem controle.

**Copy dos anúncios** (§6.2 do briefing, texto exato, não reescrever):

- Texto principal A: *"Sessão, acompanhamento e jornada não são a mesma coisa. No perfil, Guilherme mostra como organizar processos terapêuticos com mais continuidade, clareza e venda humanizada. Siga para acompanhar os próximos mapas."*
- Título: *"Acompanhe os próximos mapas"*

---

## 4. Mensuração

| Métrica | Papel | Referência a bater |
|---|---|---|
| **Custo por seguidor novo** (`instagram_profile_follow_v2`) | **primária** | **R$1,87** |
| Taxa visita → seguidor | primária | **11,1%** |
| Custo por visita ao perfil | controle | R$0,17 – R$0,28 |
| CPM | diagnóstico | R$11 – R$15 no lookalike |
| Frequência | alerta | acima de 2,0 em 7 dias = público esgotando |

**Custo por visita não é resultado.** No histórico desta conta a visita variou 1,6x e o custo por seguidor variou 6x. Otimizar por visita premia o conjunto errado.

### 4.1 Regras de kill escritas antes do primeiro real (§0.4 e §7.3, prazos dobrados por verba pequena)

| Situação | Regra | Ação |
|---|---|---|
| Kill hard | CTR abaixo de **0,5%** com 2.000 impressões | pausar a peça |
| Kill normal | custo por seguidor acima de **R$6** em 6 dias | pausar a peça e diagnosticar por §7.4 |
| Fadiga | frequência acima de 3,5 + CTR caindo 20% vs. média própria | pausar e repor da fila |
| Vencedor | custo por seguidor **≤ R$1,87** com 10 seguidores acumulados | iterar em 3 hooks novos (70/30) |

Primeira leitura: 72h após a ativação humana. Não mexer antes. Toda decisão vai para `LOG-DECISOES.md`.

---

## 5. Sequência de execução

1. Verificar G1, G2, G3. Alguma falsa → pular para o passo 8.
2. Ler a conta via API e conferir contra o print, se houver.
3. Confirmar que o conjunto vencedor `120252471799630210` e os três públicos ainda existem e estão ACTIVE.
4. Fazer upload das imagens do `C04`.
5. Criar a campanha em `PAUSED`.
6. Criar o conjunto em `PAUSED`.
7. Criar os dois anúncios em `PAUSED`. **Parar aqui.**
8. Escrever `06 - mídia paga/SUBIDA-ONDA1-<AAAAMMDD>.md` com: gates verificados, IDs criados (ou motivo de não ter criado), configuração aplicada, o que ficou pendente.
9. Propagar para `STATUS.md`, `DECISOES.md` e `09 - operação/FILA-PROPAGACAO.md`.
10. Avisar Victor: o que foi criado, em pausa, e que a ativação depende dele.

---

## 6. Ondas seguintes (não são desta task)

| Onda | Gatilho | Conteúdo |
|---|---|---|
| 2 — reconhecimento | público Seguidores acima de **5.000** | `C01`–`C03`, frio qualificado por criativo, Advantage+ ligado |
| 3 — engajamento `MAPA` | Mapa Breve existindo + Direct operável + registro de comentário→DM→resposta | `C08` |

A onda 3 não sobe antes disso. A campanha de 29/07 já gastou R$168,13 comprando 25.556 engajamentos a R$0,01 e produziu **zero** seguidor. Repetir sem a camada de entrega é pagar de novo por um aprendizado já pago.

---

## 7. Condições de recusa

A task **não sobe nada** se:

1. qualquer P0 da auditoria persistir nos criativos;
2. os públicos lookalike tiverem saído de ACTIVE ou caído abaixo do piso de entrega;
3. a conta tiver mudado de status, perdido meio de pagamento ou perdido o vínculo com o Instagram;
4. o print anexado divergir da leitura da API;
5. D-01, D-02 ou D-04 continuarem em aberto;
6. houver qualquer campanha já ACTIVE na conta que dispute o mesmo público — nesse caso, avisar e parar.

---

*Base: `06 - mídia paga/AUDITORIA-PRE-SUBIDA-CAMPANHAS-2026-08-18.md` · `06 - mídia paga/BRIEFING-CAMPANHAS-FUNIL-INSTAGRAM-2026-08-18.md` · `05 - design e criativos/BRIEFING-CARROSSEIS-POR-CONSCIENCIA-2026-08-18.md` · `DEC-2026-08-18-001`.*
