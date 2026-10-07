# SUBIDA ONDA 1 — REGISTRO DE MUTAÇÃO EXTERNA

> STATUS: VIGENTE · registro de ação executada na conta de anúncio
> Data: 2026-08-18 · America/Sao_Paulo
> Autoridade: Victor, instrução explícita — *"faça a campanha e deixe pronta para eu introduzir conteúdos existentes"*
> Estado: **campanha e conjunto criados em PAUSA. Nada ativado. Nenhum real gasto.**

---

## 1. O que foi criado

| Objeto | ID | Status |
|---|---|---|
| Campanha | `120254780918080210` | **PAUSED** |
| Conjunto | `120254780928790210` | **PAUSED** |
| Anúncios | nenhum | Victor pluga os conteúdos existentes |

**Conta:** `605257748612701` — "CA 01" · BM `terapeutaguilhermearaujo` · BRL
**Ads Manager:** https://www.facebook.com/adsmanager/manage/campaigns/edit?act=605257748612701&selected_campaign_ids=120254780918080210

### Campanha

| Campo | Valor |
|---|---|
| Nome | `GA\|TOFU\|IG\|TRAFEGO-PERFIL\|LOOKALIKE\|20260818` |
| Objetivo | `OUTCOME_TRAFFIC` |
| Compra | `AUCTION` |
| Categorias especiais | nenhuma |
| Orçamento | **ABO** — a verba vive no conjunto, não na campanha |

ABO em vez de CBO por decisão: com um único conjunto o efeito é o mesmo, e o ABO replica a configuração do conjunto vencedor histórico e permite adicionar um segundo conjunto depois sem a Meta redistribuir verba sozinha.

### Conjunto

| Campo | Valor | Origem da decisão |
|---|---|---|
| Nome | `AS\|LOOKALIKE-1%-SEG+VISIT\|BR\|MULHERES\|20260818` | |
| Otimização | **`PROFILE_VISIT`** | confirmado disponível nesta conta |
| Destino | `INSTAGRAM_PROFILE` | |
| Cobrança | `IMPRESSIONS` | |
| Lance | `LOWEST_COST_WITHOUT_CAP` (automático) | |
| Verba diária | **R$ 20,00** | decisão de Victor, 18/08 |
| Geografia | **Brasil**, home + recent | decisão de Victor, 18/08 |
| Gênero | **mulheres** (`genders: [2]`) | decisão de Victor, 18/08 — resolve `D-03` |
| Idade | 18 a 65 | faixa 21–34 isolada não reaberta: gastou R$49 e trouxe 0 seguidor |
| Advantage+ Audience | **desligado** (`advantage_audience: 0`) | o conjunto vencedor rodava desligado; ligar dissolve o lookalike |
| Plataforma | Instagram apenas | |
| Posicionamentos | stream, story, reels, explore_home, profile_feed | |
| Dispositivo | mobile | |

**Públicos incluídos** — trio exato do conjunto vencedor `120252471799630210`:

| ID | Nome |
|---|---|
| `120252469504920210` | Semelhante (1%) — Seguidores |
| `120252470164980210` | Semelhante (1%) — Visitantes Perfil 30D |
| `120252470099600210` | Visitantes Perfil 30D |

**Não replicado de propósito:** o conjunto vencedor original restringia `user_device: iPhone` e `wireless_carrier: Wifi`. Eram parte de um experimento de lance, não do que fez o resultado, e estreitam um público que já é pequeno.

---

## 2. Referência a bater

O conjunto que esta configuração replica entregou:

| Métrica | Histórico |
|---|---:|
| Custo por seguidor | **R$ 1,87** |
| Visita → seguidor | **11,1%** |
| Custo por visita | R$ 0,21 |
| CPM | R$ 14,63 |

**Métrica primária: custo por seguidor novo.** Custo por visita é diagnóstico, não resultado — no histórico desta conta a visita variou 1,6x e o custo por seguidor variou 6x.

---

## 3. Regras de kill, escritas antes do primeiro real

`METODO-TRAFEGO-PAGO.md` §0.4 e §7.3, com prazos dobrados por verba pequena.

| Situação | Regra | Ação |
|---|---|---|
| Kill hard | CTR abaixo de **0,5%** com 2.000 impressões | pausar a peça |
| Kill normal | custo por seguidor acima de **R$6** em 6 dias | pausar e diagnosticar por §7.4 |
| Fadiga | frequência acima de 3,5 e CTR caindo 20% | pausar e repor da fila |
| Vencedor | custo por seguidor **≤ R$1,87** com 10 seguidores | iterar em 3 hooks novos |

Primeira leitura: 72h após a ativação. Não mexer antes.

---

## 4. Conteúdos existentes — o que há no perfil hoje

Leitura de `@professorguilhermearaujo` (`17841456176956487`) em 18/08.

**Candidatos por engajamento e aderência:**

| Reel | Engajamento | Aderência ao posicionamento |
|---|---|---|
| [`Vc tem permissão de transformar vidas?`](https://www.instagram.com/reel/Db390qLh96s/) | 5 curtidas | **a maior do acervo.** Fala com terapeuta, usa "permissão", tem `#terapeuta` |
| [`O emaranhado de triangulação`](https://www.instagram.com/reel/DcJ0KqvsJBd/) | 19 curtidas, 1 comentário | média. A legenda toca em `culpa de prosperar, dificuldade de cobrar` |
| [`Quem da sua família é assim também?`](https://www.instagram.com/reel/DcBi4wHMwhK/) | **27 curtidas, 2 comentários** | baixa. Melhor engajamento do acervo, mas fala com cliente final |
| [`Vc já ouviu isso da boca de QUEM?`](https://www.instagram.com/reel/DcACWu3sYSv/) | 9 curtidas | baixa |
| [`Falsidade no mundo místico`](https://www.instagram.com/reel/Db9MRQisRae/) | 6 curtidas | baixa, mas tem opinião defensável |

**Sugestão de partida:** subir `Vc tem permissão de transformar vidas?` e `O emaranhado de triangulação` como os dois primeiros anúncios. O primeiro por aderência, o segundo por engajamento com legenda que fala de cobrar.

---

## 5. Achado que precisa de decisão

**O perfil hoje não fala com terapeuta.** Das 21 peças mais recentes, a esmagadora maioria é conteúdo de constelação familiar e tarot dirigido ao **cliente final** — quem procura terapia, não quem faz terapia. Só uma peça carrega `#terapeuta`.

Isso ataca diretamente o item 1 do checklist §3 do método: **promessa do anúncio = promessa do destino.** Um anúncio que diz *"siga para acompanhar os próximos mapas sobre condução e prática terapêutica"* leva a um perfil que, nos primeiros nove posts, fala de emaranhamento familiar para quem sofre dele.

**Precedente na própria conta:** `CR_TRÁFEGO-PERFIL_01` comprou visita a R$0,15 e trouxe **1 seguidor em R$127,25**. Visita barata para um perfil que não confirma a promessa é dinheiro convertido em nada.

**Duas saídas, e a escolha é de Guilherme:**

1. **Ajustar o perfil ao anúncio** — três posts fixados que falem com terapeuta antes de ativar;
2. **Ajustar o anúncio ao perfil** — subir com conteúdo existente de constelação e aceitar que este primeiro ciclo mede o público, não a mensagem de terapeuta.

A opção 2 é legítima como teste de público e é o caminho natural de "introduzir conteúdos existentes". Só precisa ser escolhida de olho aberto: ela **não** valida a tese do funil de terapeutas.

---

## 6. O que continua bloqueado

- **ativação:** exige aprovação humana separada. A task agendada não ativa;
- **anúncios com os carrosséis novos:** dependem do lote v2 e dos gates do runbook;
- `C07`: espera os três eixos do Mapeamento;
- `C08` e a campanha de comentário: esperam o Mapa Breve existir e o Direct operável;
- `PLANO-DE-MIDIA.md` com a matemática reversa (§2.2 do método): **continua aberto**;
- `D-01` (cartas), `D-02` (nome da Página): continuam abertas.

`D-03` (gênero), `D-04` (geografia) e `D-09` (verba) foram decididas por Victor em 18/08 e estão aplicadas.

---

## 7. Rollback

Excluir a campanha `120254780918080210` no Ads Manager. Isso remove o conjunto junto. Nenhuma outra campanha, público, criativo ou configuração da conta foi tocado. Gasto até aqui: **R$ 0,00**.

---

*Registro produzido no mesmo turno da mutação, conforme `CLAUDE.md` §9 do kernel do cliente.*
