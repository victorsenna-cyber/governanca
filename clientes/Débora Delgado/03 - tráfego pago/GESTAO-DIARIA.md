# GESTÃO DIÁRIA (tráfego) — Seu Eixo · Débora Delgado

> Registro da rotina agendada de gestão (`PROTOCOLO-SCHEDULED-GESTAO.md`). Entradas **mais novas no topo**.
> A rotina só LÊ e PROPÕE; kill/scale/verba é decisão do Victor. Dashboard e Meta = somente leitura.
> Legenda de fonte: 🟢 tudo lido · 🟡 parcial · 🔴 fonte de verdade (dashboard) inacessível → propostas CONDICIONAIS (§2a.3).

---

### 2026-07-27 (segunda, 10h56) · rotina DIÁRIA (§3) + PRÉ-VOO (§6) — **último dia útil inteiro antes da virada de preço L1→L2 (~37h); campanha pausada há 5 dias** · 🟡 dashboard inacessível **para a rotina** (7ª run) — **gate de senha confirmado reprodutível**

> **Contexto herdado (não é anomalia nova):** campanha **PAUSADA pelo Victor em 22/07**, 5º dia sem gasto novo. Diagnóstico já corrigido no LOG (22/07): o gargalo é a **página (Lead 0)**, não tracking nem criativo. Hoje é segunda → sem ciclo de decisão §4 (só terça/sexta) — **mas amanhã, 28/07, é terça E é a data da virada L1→L2 (23h59) E o último dia da F1.** Os três coincidem. **Mudança de estado desta run:** o prazo que na run de 26/07 era "~65h" agora é **~37h**, e não há sinal de retomada nos dados nem nos arquivos autorizados (§1).

**Fase/cenário:** F1 (último dia útil pleno) · Cenário B autorizado (21/07), conta ainda montada como A. Campanha `debora-meta-vendas-workshop-ago26` (120248977530950107) **PAUSED** (`status` + `effective_status` confirmados via MCP nesta run). Conjunto `broad-br-vs` e os 7 anúncios em `CAMPAIGN_PAUSED`. `daily_budget` ainda **R$60,00** (base A). Sem `retarget-morno` / `lembrete-quente` / Purchase-180d → montagem B (PLANO-22-07 §D) segue **não executada**.

**Gasto D-1 (26/07):** R$0 — `date_preset=yesterday` retorna "Not available" em gasto/impressões/cliques (entrega zerada). **Hoje (27/07):** idem, R$0 novo (`date_preset=today`).
**Acumulado (18–27/07):** **R$279,51** · 4.833 impr · 284 cliques · CTR 5,88% · CPM R$57,83 · freq 1,68 · 2.880 alcance · **150 LPV** · **0 IC** · custo/IC = n/a. **Idêntico aos fechos de 23, 24, 25 e 26/07 — pausa segurando há 5 dias, ao centavo.**

**IC e custo/IC:** 0 IC acumulado nos 7 anúncios (`omni_initiated_checkout` = "Not available"). Consistente com o diagnóstico fechado (Lead 0 → IC 0 por aritmética, não anomalia).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🟡 **inacessível PARA A ROTINA (7ª run consecutiva) — mesmo ponto de parada da run de 26/07, agora confirmado como reprodutível:**
- **Camada 1 (endpoint Apps Script):** `URL not in provenance set` (7ª vez). `web_fetch` só aceita URL vinda de mensagem do usuário.
- **Camada 2 (navegador):** **1 Chrome pareado** (`Browser 1`, Windows, local) pela 2ª run seguida. `deboradelgado.space/dashboard/` **carregou** (título `Painel do Funil · Seu Eixo`), e o conteúdo legível é o mesmo de ontem: bloco *"Dados de mídia ainda não conectados — Conecte o App Meta para ver custo por campanha"* + tabela vazia *"Desempenho da aquisição paga por campanha"*. **Zero números de funil, leads, vendas ou turmas.**
- **Leitura nova desta run:** a sessão do Chrome pareado **não guarda autenticação** do painel — a opção (d) da proposta de 26/07 (perfil já autenticado resolveria sozinho) está **descartada empiricamente**. Restam (a) endpoint com token que o `web_fetch` alcance, (b) link colado na mensagem antes da run, (c) Victor colar os números.
- → **modo degradado §2a.3 mantido**; nenhum kill definitivo proponível (M11). Com a campanha pausada não há tráfego vivo para checar sanidade de tracking de qualquer forma.

**Anomalias (§3.1 / §3.2):**
- ✅ Sem anomalia de gasto: campanha pausada, R$0 novo em 26/07 e 27/07 (esperado).
- ✅ Sem anomalia de CPA/entrega: nada veiculando; `CAMPAIGN_PAUSED` no conjunto e nos 7 anúncios (confirmado via MCP).
- ✅ `ads_get_errors` (conta 379430536736935) = `{}` — nenhum anúncio reprovado, nenhum erro de entrega.
- 🔴 **Gate de retorno ainda ABERTO** (estado do lançamento, não anomalia de conta): (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase confirmado no dashboard **e** no Meta Test Events; (3) montar públicos/conjuntos B (~R$117/dia), ativar como relançamento limpo. Nada nos arquivos autorizados (§1) indica progresso desde 23/07 — só o Victor pode confirmar.
- 🔴 **Colisão de calendário na janela final (~37h):** a **virada de preço L1→L2 (28/07 23h59)** roda por calendário, com ou sem campanha. Território M1/M2 — **decisão de plano, não da rotina** (§6). Já reportada no LOG em 26/07; nada mudou desde então, só o prazo encurtou.

**Tabela por anúncio (acumulado 18–27/07, leitura de contexto — SEM veredito de kill/scale, sinal não vivo):**

| Anúncio | Gasto | Impr | Cliques | CTR | CPM | Freq | LPV | custo/LPV | IC | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$150,17 | 2.512 | 161 | 6,41% | R$59,78 | 1,66 | 87 | R$1,73 | 0 | CAMPAIGN_PAUSED |
| debora-cn1-ruminacao-carrossel-v1 | R$42,18 | 607 | 48 | 7,91% | R$69,49 | 1,30 | 24 | R$1,76 | 0 | CAMPAIGN_PAUSED |
| debora-paz-carrossel-h1-v2 | R$32,92 | 611 | 23 | 3,76% | R$53,88 | 1,13 | 11 | R$2,99 | 0 | CAMPAIGN_PAUSED |
| debora-custo-estatico-h1-v1 | R$22,78 | 644 | 24 | 3,73% | R$35,37 | 1,37 | 11 | R$2,07 | 0 | CAMPAIGN_PAUSED |
| debora-eficiencia-estatico-h1-v2 | R$15,49 | 248 | 13 | 5,24% | R$62,46 | 1,29 | 7 | R$2,21 | 0 | CAMPAIGN_PAUSED |
| debora-cn2-causa-carrossel-v1 | R$12,56 | 161 | 12 | 7,45% | R$78,01 | 1,03 | 8 | R$1,57 | 0 | CAMPAIGN_PAUSED |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | R$68,20 | 1,11 | 2 | R$1,71 | 0 | CAMPAIGN_PAUSED |

Sem veredito §7.3 (kill/fadiga/vencedor) — a regra exige sinal veiculando e nada entregou nas últimas 24h. Números idênticos aos fechos de 23–26/07. Nenhum bate kill-hard historicamente (maior: `raiz` R$150,17 < R$225; CTRs 3,73–7,91% ≫ 0,5%; nenhum reprovado).

**Frequência (§3.4):** máx 1,66 (`raiz`, nível anúncio). Sem fadiga. Sem `lembrete-quente` (M13 n/a).

**Ações programadas 72h (27–30/07) — §2c — o cronograma AVANÇA mesmo com a campanha pausada:**
- **HOJE 27/07 (seg), à noite** — troca de urgência X1-L1 → X2-L1 ("último dia no valor"). Condicionada a campanha ativa — não está. Peças X-series seguem sem arte produzida (PLANO-FUNIL §6).
- **28/07 (ter) 23h59 — VIRADA L1→L2 (estrutural, ~37h).** Pausar toda peça com preço L1 (E4-L1, X1/X2-L1) · subir CN5-L2. **Roda no calendário mesmo sem campanha.** Se a retomada for depois disso, o L1 (R$97) termina sem ter recebido 1 real de tráfego pago e o relançamento B nasce direto no L2 (R$197) — o papel do L1 no plano (F1 = comprar aprendizado no lote barato, MATEMATICA §3 / PLANO-FUNIL §3) fica sem substituto.
- **28/07 (ter)** — também é **dia nominal de ciclo de decisão §4**. Sem sinal veiculando, a run de amanhã volta a rodar como pré-voo §6, sem veredito por anúncio.
- **29/07 (qua) — início da F2** no plano de verba (B: F1 20-28/07 R$1.400 · F2 29/07-07/08 R$1.225) + bloco 2 de criativos + kills do ciclo. Nada executável sem campanha ativa.
- **30/07 (qui)** — dentro das 72h, sem ação própria no cronograma.

**Aritmética do plano (leitura, não proposta):** verba B R$3.500 − R$279,51 gastos = **R$3.220,49 restantes** até 18/08 23h59. Retomada **28/07 → 22 dias → ~R$146/dia** · 01/08 → 18 dias → ~R$179/dia · 08/08 → 11 dias → ~R$293/dia. Cada dia parado empurra a diária necessária para cima **e** comprime as 72h de aprendizado que um conjunto novo exige antes de qualquer leitura (§7.3). Número exposto para a decisão do Victor/Fable — a rotina não propõe verba.

**Propostas:** **NENHUMA de mídia.** Campanha pausada = nada a propor (kill/scale exige sinal veiculando; §6 pré-voo manda conferir e sair). Propostas em aberto no LOG (pausa já executada; confirmar IC no teste end-to-end; realinhamento verba A→B em espera; destravar a fonte de verdade, 26/07) seguem sob o Victor — **não repropostas** (§1.3). Nenhuma linha nova no LOG nesta run: a única informação nova (opção (d) descartada) é evidência da proposta de 26/07, não proposta nova.

**⏰ Ponto de atenção para o Victor (calendário, não proposta da rotina):** amanhã concentra três coisas — virada L1→L2 às 23h59, fim da F1 e dia de ciclo de decisão. Decidir **hoje** entre (i) retomar antes de 28/07 para o L1 receber ao menos um dia de tráfego, (ii) acionar M1/M2 e comprimir/adiar as janelas, ou (iii) assumir a perda do L1 e nascer no L2. Decisão de plano — sua/Fable, fora da run.

**Nenhuma ação executada (somente leitura). Campanha em pré-voo §6 (pausada, 5ª run seguida em pré-voo). Nenhuma senha digitada; único clique = navegação até o dashboard. Fonte de verdade inacessível para a rotina pela 7ª run — gate de senha confirmado reprodutível, opção (d) da proposta de 26/07 descartada.**

---

### 2026-07-26 (domingo) · rotina DIÁRIA (§3) + PRÉ-VOO (§6) — **campanha pausada há 4 dias; virada estrutural L1→L2 entra na janela de 72h** · 🟡 dashboard inacessível **para a rotina** (6ª run) — **mas por causa NOVA: navegador disponível, barrado no gate de senha**

> **Contexto herdado (não é anomalia nova):** campanha **PAUSADA pelo Victor em 22/07**, 4º dia sem nenhum gasto novo. Diagnóstico já corrigido no LOG (22/07): o gargalo é a **página (Lead 0)**, não tracking nem criativo. Hoje é domingo → sem ciclo de decisão §4 (só terça/sexta). **Mudança de estado desta run:** o cronograma avançou para dentro da zona estrutural — a **virada de lote L1→L2 (28/07 23h59)** e a **entrada da F2 (29/07)** agora estão dentro das 72h, com a campanha parada. Diferente do risco reportado em 23-25/07 (janela de virada 1, que é uma janela de *peças*), esta é a virada de *preço*: acontece no calendário mesmo sem campanha rodando.

**Fase/cenário:** F1 · Cenário B autorizado (21/07), conta ainda montada como A. Campanha `debora-meta-vendas-workshop-ago26` (120248977530950107) **PAUSED** (`status` + `effective_status` confirmados via MCP). Conjunto `broad-br-vs` (120249029701440107) e os 7 anúncios em `CAMPAIGN_PAUSED`. `daily_budget` ainda R$60,00 (base A). Sem `retarget-morno` / `lembrete-quente` / Purchase-180d → montagem B (PLANO-22-07 §D) segue não executada.

**Gasto D-1 (25/07):** R$0 — `date_preset=yesterday` retorna "Not available" em gasto/impressões/cliques (entrega zerada). **Hoje (26/07):** idem, R$0 novo (`date_preset=today`).
**Acumulado (18–26/07):** **R$279,51** · 4.833 impr · 284 cliques · CTR 5,88% · CPM R$57,83 · freq 1,68 · 2.880 alcance · **150 LPV** · **0 IC** · custo/IC = n/a. **Idêntico aos fechos de 23, 24 e 25/07 — pausa segurando há 4 dias, ao centavo.**

**IC e custo/IC:** 0 IC acumulado em todos os 7 anúncios (`omni_initiated_checkout` = "Not available"). Consistente com o diagnóstico fechado (Lead 0 → IC 0 por aritmética, não anomalia).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🟡 **inacessível PARA A ROTINA (6ª run consecutiva) — mas a causa MUDOU e isso importa:**
- **Camada 1 (endpoint Apps Script):** `URL not in provenance set` — igual às 5 runs anteriores. `web_fetch` só aceita URL vinda de mensagem do usuário.
- **Camada 2 (navegador):** **avançou pela primeira vez.** `list_connected_browsers` retornou **1 Chrome pareado** (`Browser 1`, Windows, local) — nas runs de 21→25/07 vinha vazio. Naveguei até `https://deboradelgado.space/dashboard/` e a página **carregou normalmente**, exibindo o gate: *"Painel do Funil · Acesso restrito · Seu Eixo"* com campo de senha + botão Entrar.
- **Onde parou:** **a rotina não preenche campo de senha.** É restrição categórica do ambiente de execução (nenhuma senha, em nenhum campo, mesmo com autorização prévia por escrito) — não é falta de permissão do Victor nem falha do dashboard. **Consequência: o §2a.2 do protocolo, como está escrito ("abrir o dashboard · senha eixo2026 · leitura apenas"), não é executável por esta rotina.**
- **Único conteúdo legível sem login** (renderizado atrás do gate): bloco *"Dados de mídia ainda não conectados — Conecte o App Meta para ver custo por campanha"* e a tabela vazia *"Desempenho da aquisição paga por campanha (Campanha · Gasto · Leads · Vendas · CAC · ROAS)"*. **Zero números de funil, leads, vendas ou turmas.**
- → **modo degradado §2a.3 mantido**; nenhuma proposta de kill definitivo (M11). Com a campanha pausada não há tráfego vivo para checar sanidade de tracking de qualquer forma.

**Anomalias (§3.1 / §3.2):**
- ✅ Sem anomalia de gasto: campanha pausada, R$0 novo em 25/07 e 26/07 (esperado).
- ✅ Sem anomalia de CPA/entrega: nada veiculando; `CAMPAIGN_PAUSED` no conjunto e nos 7 anúncios (confirmado via MCP nesta run).
- ✅ `ads_get_errors` (conta 379430536736935) = `{}` — nenhum anúncio reprovado, nenhum erro de entrega.
- 🔴 **Gate de retorno ainda ABERTO** (estado do lançamento, não anomalia de conta): (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase confirmado no dashboard **e** no Meta Test Events; (3) montar públicos/conjuntos B (~R$117/dia), ativar como relançamento limpo. Nada nos arquivos autorizados do protocolo (§1) indica progresso desde 23/07 — só o Victor pode confirmar.
- 🔴 **Colisão de calendário AGRAVADA (não é a mesma do dia 25):** a virada de lote 1 abriu ontem e passou sem tráfego; agora a **virada de preço L1→L2 (28/07 23h59)** e a **F2 (29/07)** entram nas 72h. Território M1/M2 — **decisão de plano, não da rotina** (§6).
- 🟡 **NOVO — muda o que destrava a fonte de verdade:** por 5 runs o bloqueio foi diagnosticado como "nenhum Chrome pareado em run agendada". Hoje havia Chrome pareado e o bloqueio persistiu, um passo adiante: **gate de senha**. Parear browser não resolve. Ver proposta operacional no LOG.

**Tabela por anúncio (acumulado 18–26/07, leitura de contexto — SEM veredito de kill/scale, sinal não vivo):**

| Anúncio | Gasto | Impr | Cliques | CTR | CPM | Freq | LPV | IC | Status |
|---|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$150,17 | 2.512 | 161 | 6,41% | R$59,78 | 1,66 | 87 | 0 | CAMPAIGN_PAUSED |
| debora-cn1-ruminacao-carrossel-v1 | R$42,18 | 607 | 48 | 7,91% | R$69,49 | 1,30 | 24 | 0 | CAMPAIGN_PAUSED |
| debora-paz-carrossel-h1-v2 | R$32,92 | 611 | 23 | 3,76% | R$53,88 | 1,13 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-custo-estatico-h1-v1 | R$22,78 | 644 | 24 | 3,73% | R$35,37 | 1,37 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-eficiencia-estatico-h1-v2 | R$15,49 | 248 | 13 | 5,24% | R$62,46 | 1,29 | 7 | 0 | CAMPAIGN_PAUSED |
| debora-cn2-causa-carrossel-v1 | R$12,56 | 161 | 12 | 7,45% | R$78,01 | 1,03 | 8 | 0 | CAMPAIGN_PAUSED |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | R$68,20 | 1,11 | 2 | 0 | CAMPAIGN_PAUSED |

Sem veredito §7.3 (kill/fadiga/vencedor) — a regra exige sinal veiculando e nenhum anúncio entregou nas últimas 24h. Números idênticos aos fechos de 23-25/07. Nenhum bate kill-hard historicamente (maior: `raiz` R$150,17 < R$225; CTRs 3,73–7,91% ≫ 0,5%; nenhum reprovado).

**Frequência (§3.4):** máx 1,66 (`raiz`, nível anúncio). Sem fadiga. Sem `lembrete-quente` (M13 n/a).

**Ações programadas 72h (26–29/07) — §2c — o cronograma AVANÇA mesmo com a campanha pausada:**
- **HOJE 26/07 (dom)** — sem ação própria no cronograma; continuidade da janela de virada 1 (aberta 25/07), condicionada a campanha ativa — não está.
- **27/07 (seg) à noite** — troca de urgência X1-L1 → X2-L1 ("último dia no valor"). Mesma condição.
- **28/07 23h59 — VIRADA L1→L2 (estrutural).** Pausar toda peça com preço L1 (E4-L1, X1/X2-L1) · subir CN5-L2. ⚠️ **Esta é diferente das anteriores: é virada de PREÇO, roda no calendário mesmo sem campanha.** Se a retomada for depois de 28/07, a campanha volta já no L2 (R$197) — a janela inteira do L1 (R$97, o lote barato que existia para pagar o aprendizado) terá passado sem um real de tráfego. O papel do L1 no plano (F1 = comprar aprendizado no lote barato, MATEMATICA §3 / PLANO-FUNIL §3) fica sem substituto.
- **29/07 — início da F2** no plano de verba (B: F1 20-28/07 R$1.400 · F2 29/07-07/08 R$1.225) + bloco 2 de criativos + kills do ciclo. Nada executável sem campanha ativa.

**Aritmética do plano (leitura, não proposta):** verba B R$3.500 − R$279,51 gastos = **R$3.220,49 restantes** para uma janela que fecha em **18/08 23h59**. Retomada em 27/07 → 23 dias → ~R$140/dia. Retomada em 01/08 → 18 dias → ~R$179/dia. Retomada em 08/08 → 11 dias → ~R$293/dia. Cada dia parado empurra a diária necessária para cima **e** comprime as 72h de aprendizado que um conjunto novo exige antes de qualquer leitura (§7.3: nunca mexer nas primeiras 72h). Número exposto para a decisão do Victor/Fable — a rotina não propõe verba.

**Propostas:** **NENHUMA de mídia.** Campanha pausada = nada a propor (kill/scale exige sinal veiculando; §6 pré-voo manda conferir e sair). As propostas em aberto do LOG (pausa já executada; confirmar IC no teste end-to-end; realinhamento verba A→B em espera) seguem sob o Victor — não repropostas.
**1 proposta operacional nova (registrada no LOG):** destravar a leitura da fonte de verdade pela rotina — o gate de senha barra a camada 2 e nenhuma das duas camadas do §2a funciona hoje.

**⏰ Ponto de atenção para o Victor (calendário, não proposta da rotina):** em ~65h a virada L1→L2 acontece por calendário. Se a campanha não voltar antes, o lote de R$97 termina sem ter recebido tráfego pago — e o relançamento B nasce direto no L2, com menos dias, diária maior e a mesma exigência de 72h de aprendizado. A decisão de comprimir/adiar as janelas (M1/M2 do PLANO-FUNIL) ou de assumir a perda do L1 precisa ser tomada por você/Fable **fora da run**.

**Nenhuma ação executada (somente leitura). Campanha em pré-voo §6 (pausada, 4ª run seguida em pré-voo). Nenhuma senha digitada, nenhum clique além de navegação. Fonte de verdade inacessível para a rotina pela 6ª run — com causa nova e acionável.**

---

### 2026-07-25 (sábado) · rotina DIÁRIA (§3) + PRÉ-VOO (§6) — **hoje é a data em que a janela de virada 1 deveria abrir (PLANO-FUNIL §4), campanha segue pausada** · 🔴 dashboard inacessível **para a rotina** (5ª run consecutiva)

> **Contexto herdado (não é anomalia nova):** campanha **PAUSADA pelo Victor em 22/07**, seguindo pausada há 3 dias sem nenhuma mudança de gasto/impressão desde o fecho de 23/07. Diagnóstico já corrigido no LOG: o gargalo é a **página (Lead 0)**, não tracking nem criativo. Hoje é sábado → sem ciclo de decisão §4 (só terça/sexta). **O risco apontado nas duas últimas runs deixa de ser projeção e passa a ser fato: a janela de virada 1 do cronograma (PLANO-FUNIL §4) abre HOJE e a campanha continua pausada, sem sinal de reativação nos dados desta run.** Isso é uma colisão de calendário (território M1/M2), não uma anomalia de conta — decisão de plano, não da rotina.

**Fase/cenário:** F1 · Cenário B autorizado (21/07), conta ainda montada como A. Campanha `debora-meta-vendas-workshop-ago26` (120248977530950107) **PAUSED** (status + effective_status confirmados via MCP). Todos os 7 anúncios em `CAMPAIGN_PAUSED`. `daily_budget` ainda R$60,00 (base A) — montagem B (retarget-morno / lembrete-quente / Purchase-180d, PLANO-22-07 §D) segue não executada.

**Gasto D-1 (24/07):** R$0 — entrega zerada (campanha pausada). **Hoje (25/07):** idem, R$0 novo.
**Acumulado (18–25/07):** **R$279,51** · 4.833 impr · 284 cliques · CTR 5,88% · CPM R$57,83 · 2.880 alcance · **150 LPV agregados** (soma por anúncio: 150) · **0 IC** · custo/IC = n/a. **Idêntico ao fecho de 23/07 e à leitura de 24/07 — confirma zero gasto novo, pausa segurando há 3 dias.**

**IC e custo/IC:** 0 IC acumulado em todos os 7 anúncios (`omni_initiated_checkout` = "Not available"). Consistente com o diagnóstico fechado (Lead 0 → IC 0 por aritmética, não anomalia).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🔴 **inacessível PARA A ROTINA** (5ª run consecutiva) — camada 1 (endpoint Apps Script) `URL not in provenance set`; camada 2 (navegador) `list_connected_browsers` = `[]`, nenhum Chrome pareado em run agendada. Modo degradado §2a.3. Com a campanha pausada, não há tráfego vivo para checar sanidade de tracking; leitura de funil/vendas/turmas segue dependendo do Victor abrir o dashboard.

**Anomalias (§3.1 / §3.2):**
- ✅ Sem anomalia de gasto: campanha pausada, R$0 novo em 25/07 (esperado, pausa segurando).
- ✅ Sem anomalia de CPA/entrega: nada veiculando, `effective_status: CAMPAIGN_PAUSED` em todos os 7 anúncios (confirmado via MCP nesta run).
- ✅ `ads_get_errors` (conta 379430536736935) = `{}` — nenhum anúncio reprovado, nenhum erro de entrega.
- 🔴 **Gate de retorno ainda ABERTO** (estado do lançamento, não anomalia de conta): (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase confirmado no dashboard e no Meta Test Events; (3) montar públicos/conjuntos B (~R$117/dia), ativar como relançamento limpo. Nada nos arquivos autorizados do protocolo (§1) indica progresso nesse gate desde 23/07 — só o Victor pode confirmar.
- 🔴 **Colisão de calendário materializada:** a virada de lote 1 (X1-L1 + E4-L1 · story/WhatsApp) tem data de abertura HOJE (25/07) no PLANO-FUNIL §4, e a campanha segue pausada sem sinal de retomada. Isso não é uma decisão da rotina (§6: decisão de plano) — só reportando que o dia previsto chegou.

**Tabela por anúncio (acumulado 18–25/07, leitura de contexto — SEM veredito de kill/scale, sinal não vivo):**

| Anúncio | Gasto | Impr | Cliques | CTR | CPM | Freq | LPV | IC | Status |
|---|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$150,17 | 2.512 | 161 | 6,41% | R$59,78 | 1,62 | 87 | 0 | CAMPAIGN_PAUSED |
| debora-cn1-ruminacao-carrossel-v1 | R$42,18 | 607 | 48 | 7,91% | R$69,49 | 1,33 | 24 | 0 | CAMPAIGN_PAUSED |
| debora-paz-carrossel-h1-v2 | R$32,92 | 611 | 23 | 3,76% | R$53,88 | 1,13 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-custo-estatico-h1-v1 | R$22,78 | 644 | 24 | 3,73% | R$35,37 | 1,39 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-eficiencia-estatico-h1-v2 | R$15,49 | 248 | 13 | 5,24% | R$62,46 | 1,29 | 7 | 0 | CAMPAIGN_PAUSED |
| debora-cn2-causa-carrossel-v1 | R$12,56 | 161 | 12 | 7,45% | R$78,01 | 1,03 | 8 | 0 | CAMPAIGN_PAUSED |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | R$68,20 | 1,11 | 2 | 0 | CAMPAIGN_PAUSED |

Sem veredito §7.3 (kill/fadiga/vencedor) — regra exige sinal veiculando e nenhum anúncio entregou nas últimas 24h. Números idênticos aos fechos de 23/07 e 24/07. Nenhum bate kill-hard historicamente (maior: `raiz` R$150,17 < R$225).

**Frequência (§3.4):** máx 1,62 (`raiz`, nível anúncio). Sem fadiga. Sem `lembrete-quente` (M13 n/a).

**Ações programadas 72h (25–28/07) — §2c — o cronograma AVANÇA mesmo com a campanha pausada:**
- **HOJE 25/07 (sáb)** — data nominal de abertura da **janela de virada 1** (X1-L1 + E4-L1 · story/WhatsApp da Débora), condicionada à campanha estar ativa. **Não confirmável como executada:** Meta confirma campanha `CAMPAIGN_PAUSED`; arquivos autorizados do protocolo não mostram reativação nem envio de story/WhatsApp.
- **27/07 (seg) à noite** — troca de urgência prevista X1-L1 → X2-L1 ("último dia no valor") — mesma condição de campanha ativa.
- **28/07 23h59** — **VIRADA L1→L2** prevista (pausar toda peça com preço L1: E4-L1, X1/X2-L1 · subir CN5-L2). Se a campanha seguir pausada até lá, esta virada estrutural também escorrega.
- **26/07 (dom)** — sem ação programada específica além da continuidade da virada 1.

**Propostas:** **NENHUMA nova.** Campanha pausada = nada a propor (kill/scale exige sinal veiculando; §6 pré-voo manda conferir e sair). As propostas em aberto do LOG (pausar já executada; confirmar IC no teste end-to-end; realinhamento verba A→B em espera) seguem sob o Victor — não reproposto.

**⏰ Ponto de atenção para o Victor (calendário, não proposta da rotina):** a virada de lote 1 tinha data de abertura HOJE (25/07) e a campanha segue pausada há 3 dias sem sinal de retomada nos dados desta run — o que ontem era risco projetado ("a virada de amanhã pode colidir") hoje é fato consumado (a data chegou e nada mudou). Se o gate de retorno (página v4 + teste de tracking + montagem B) não fechar logo, a janela de virada 1 — e em cascata a virada L1→L2 de 28/07 — escorregam. Decisão de comprimir/adiar janelas (M1/M2 do PLANO-FUNIL) precisa ser tomada por você/Fable, fora da run.

**Nenhuma ação executada (somente leitura). Campanha em pré-voo §6 (pausada, 3ª run seguida em pré-voo). Fonte de verdade inacessível para a rotina pela 5ª run consecutiva — reportado.**

---

### 2026-07-24 (sexta) · rotina DIÁRIA (§3) + PRÉ-VOO (§6) — dia de ciclo de decisão nominal, mas SEM sinal veiculando · 🔴 dashboard inacessível **para a rotina** (4ª run consecutiva)

> **Contexto herdado (não é anomalia nova):** campanha **PAUSADA pelo Victor em 22/07**, seguindo pausada há 2 dias sem nenhuma mudança de gasto/impressão desde o fecho de 23/07. Diagnóstico já corrigido no LOG: o gargalo é a **página (Lead 0)**, não tracking nem criativo. **Hoje é sexta → o protocolo §4 pede ciclo de decisão completo + leitura de funil**, mas com a campanha pausada e zero gasto novo desde ontem, não há sinal vivo para gerar veredito por anúncio ou diagnóstico de CPA — a rotina roda como **pré-voo §6** de novo (2ª vez seguida), igual à run de 23/07. Nenhum kill/scale é proponível: regra exige sinal veiculando, e nada veiculou nas últimas 24h.

**Fase/cenário:** F1 · Cenário B autorizado (21/07), conta ainda montada como A. Campanha `debora-meta-vendas-workshop-ago26` (120248977530950107) **PAUSED** (status + effective_status). Todos os 7 anúncios em `CAMPAIGN_PAUSED`. Sem retarget-morno / lembrete-quente / Purchase-180d → montagem B (PLANO-22-07 §D) segue não executada.

**Gasto D-1 (23/07):** R$0 — entrega zerada (campanha pausada, confirmado ontem). **Hoje (24/07):** idem, R$0 novo.
**Acumulado (18–24/07):** **R$279,51** · 4.833 impr · 284 cliques · CTR 5,88% · CPM R$57,83 · freq 1,68 · 2.880 alcance · **150 LPV agregados na campanha** (soma por anúncio: 150) · **0 IC** · custo/IC = n/a. **Idêntico ao fecho de 23/07 — confirma zero gasto novo, pausa segurando há 2 dias.**

**IC e custo/IC:** 0 IC acumulado em todos os 7 anúncios (`omni_initiated_checkout` = "Not available"). Consistente com o diagnóstico fechado (Lead 0 → IC 0 por aritmética, não anomalia).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🔴 **inacessível PARA A ROTINA** (4ª run consecutiva) — camada 1 (endpoint Apps Script) `URL not in provenance set`; camada 2 (navegador) `list_connected_browsers` = `[]`, nenhum Chrome pareado em run agendada. Modo degradado §2a.3. Com a campanha pausada, não há tráfego vivo para checar sanidade de tracking; a leitura de funil/vendas segue dependendo do Victor abrir o dashboard.

**Anomalias (§3.1 / §3.2):**
- ✅ Sem anomalia de gasto: campanha pausada, R$0 novo em 24/07 (esperado, pausa segurando).
- ✅ Sem anomalia de CPA/entrega: nada veiculando, `effective_status: CAMPAIGN_PAUSED` em todos os 7 anúncios (esperado).
- ✅ `ads_get_errors` (conta 379430536736935) = `{}` — nenhum anúncio reprovado, nenhum erro de entrega.
- ⚠️ **Gate de retorno ainda ABERTO** (estado do lançamento, não anomalia de conta): (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase confirmado no dashboard e no Meta Test Events; (3) montar públicos/conjuntos B (~R$117/dia), ativar como relançamento limpo. Nada nos arquivos autorizados do protocolo (§1) indica progresso nesse gate desde 23/07 — só o Victor pode confirmar.

**Tabela por anúncio (acumulado 18–24/07, leitura de contexto — SEM veredito de kill/scale, sinal não vivo):**

| Anúncio | Gasto | Impr | Cliques | CTR | CPM | Freq | LPV | IC | Status |
|---|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$150,17 | 2.512 | 161 | 6,41% | R$59,78 | 1,62 | 87 | 0 | CAMPAIGN_PAUSED |
| debora-cn1-ruminacao-carrossel-v1 | R$42,18 | 607 | 48 | 7,91% | R$69,49 | 1,33 | 24 | 0 | CAMPAIGN_PAUSED |
| debora-paz-carrossel-h1-v2 | R$32,92 | 611 | 23 | 3,76% | R$53,88 | 1,13 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-custo-estatico-h1-v1 | R$22,78 | 644 | 24 | 3,73% | R$35,37 | 1,39 | 11 | 0 | CAMPAIGN_PAUSED |
| debora-eficiencia-estatico-h1-v2 | R$15,49 | 248 | 13 | 5,24% | R$62,46 | 1,29 | 7 | 0 | CAMPAIGN_PAUSED |
| debora-cn2-causa-carrossel-v1 | R$12,56 | 161 | 12 | 7,45% | R$78,01 | 1,03 | 8 | 0 | CAMPAIGN_PAUSED |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | R$68,20 | 1,11 | 2 | 0 | CAMPAIGN_PAUSED |

Sem veredito §7.3 (kill/fadiga/vencedor) — regra exige sinal veiculando e nenhum anúncio entregou nas últimas 24h. Números idênticos ao fecho de 23/07 (variações de centavos por arredondamento de LPV/gasto entre runs). Nenhum bate kill-hard historicamente (maior: `raiz` R$150,17 < R$225).

**Frequência (§3.4):** máx 1,68 (acum., estático/pausado). Sem fadiga. Sem `lembrete-quente` (M13 n/a).

**Ações programadas 72h (24–27/07) — §2c — o cronograma AVANÇA mesmo com a campanha pausada:**
- **HOJE 24/07 (sex)** — data nominal do ciclo de decisão §4 completo + entrada do bloco de vídeo 1 no broad, **ambos condicionados a: vídeos gravados E campanha reativada.** Nenhuma das duas condições confirmável pela rotina (arquivos autorizados não mostram gravação; Meta confirma campanha pausada). **Sem leitura de funil completo** — depende do dashboard, inacessível.
- **25/07 (sáb)** — abre a **janela de virada 1** (X1-L1 + E4-L1 · story/WhatsApp da Débora). ⚠️ **Risco confirmado, não só apontado:** com a campanha ainda pausada 24/07 e sem sinal de reativação nos dados desta run, a virada 1 amanhã está em rota de colisão direta com o gate de retorno aberto — território M1/M2 do PLANO-FUNIL (compressão/adiamento de janela). Decisão de plano, não da rotina.
- **26/07 (dom)** — dentro das 72h, sem ação programada específica no cronograma além da continuidade da virada 1.

**Propostas:** **NENHUMA nova.** Campanha pausada = nada a propor (kill/scale exige sinal veiculando; §6 pré-voo manda conferir e sair). As propostas em aberto do LOG (pausar já executada; confirmar IC no teste end-to-end; realinhamento verba A→B em espera) seguem sob o Victor — não reproposto.

**⏰ Ponto de atenção para o Victor (calendário, não proposta da rotina):** a virada de lote 1 abre AMANHÃ (25/07) e a campanha segue pausada há 2 dias sem sinal de retomada nos dados desta run. Se o gate de retorno (página v4 + teste de tracking + montagem B) não fechar nas próximas ~24h, a virada 1 escorrega — decisão de comprimir/adiar janelas (M1/M2) precisa ser tomada por você/Fable, fora da run.

**Nenhuma ação executada (somente leitura). Campanha em pré-voo §6 (pausada, 2ª run seguida). Fonte de verdade inacessível para a rotina pela 4ª run consecutiva — reportado.**

---

### 2026-07-23 (quinta) · rotina DIÁRIA (§3) + PRÉ-VOO (§6) · 🔴 dashboard inacessível **para a rotina** (3ª run)

> **Contexto herdado (não é anomalia nova):** campanha **PAUSADA pelo Victor em 22/07** (gate de tracking do PLANO-22-07). Diagnóstico já corrigido no LOG (22/07): o gargalo é a **página (Lead 0)**, não tracking nem criativo. Esta run é **pré-voo §6**: campanha pausada → conferir estado + cronograma, reportar e sair. **Sem propor kill/scale** (nada roda; regra sem sinal). Hoje é quinta → sem ciclo de decisão §4.

**Fase/cenário:** F1 · Cenário B autorizado (21/07), conta ainda montada como A. Campanha `debora-meta-vendas-workshop-ago26` (120248977530950107) **PAUSED** (effective + configured). Conjunto `broad-br-vs` (120249029701440107) `effective_status: CAMPAIGN_PAUSED` (não entrega). Sem retarget-morno / lembrete-quente / Purchase-180d → montagem B (PLANO-22-07 §D) segue não executada.

**Gasto D-1 (22/07):** resíduo de ~R$8-14 no dia da pausa (execução da pausa ocorreu ao longo do 22/07). **Hoje (23/07): entrega ZERADA** — `spend`/`impressions` = "Not available" com a campanha pausada. ✅ Pausa segurando.
**Acumulado (18–23/07):** **R$279,51** · 4.833 impr · 284 cliques · CTR 5,88% · CPM R$57,83 · freq 1,68 · 2.880 alcance · **150 LPV** · **0 IC** · custo/IC = n/a. (Δ vs fecho 22/07 R$270,83: +R$8,68 residual pré-pausa; nenhum gasto novo desde a pausa.)

**IC e custo/IC:** 0 IC acumulado. `omni_initiated_checkout` = "Not available" em todos os níveis. Consistente com o diagnóstico fechado (Lead 0 = IC 0 por aritmética, não anomalia).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🔴 **inacessível PARA A ROTINA** (3ª run consecutiva) — camada 1 (endpoint Apps Script) `URL not in provenance set`; camada 2 (navegador) `list_connected_browsers` = vazio, nenhum Chrome pareado em run agendada. Modo degradado §2a.3. Nota: com a campanha pausada não há tráfego vivo para checar sanidade de tracking; a leitura de funil/vendas depende do Victor abrir o dashboard.

**Anomalias (§3.1 / §3.2):**
- ✅ Sem anomalia de gasto: campanha pausada, entrega zerada em 23/07 (esperado).
- ✅ Sem anomalia de CPA/entrega: nada veiculando. Conjunto `CAMPAIGN_PAUSED` (esperado, não é entrega zerada de conjunto ativo).
- ✅ `ads_get_errors` = `{}` — nenhum anúncio reprovado, nenhum erro de entrega.
- ⚠️ **Gate de retorno ainda ABERTO** (não é anomalia de conta, é estado do lançamento): a campanha só volta após (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase ticando no dashboard **e** no Meta Test Events; (3) montar públicos/conjuntos B (~R$117/dia), ativar como relançamento limpo (PLANO-22-07 §D).

**Frequência (§3.4):** máx 1,68 (acum., estático/pausado). Sem fadiga. Sem `lembrete-quente` (M13 n/a).

**Ações programadas 72h (23–26/07) — §2c — o cronograma AVANÇA mesmo com a campanha pausada:**
- **HOJE 23/07 (qui)** — **deadline das gravações do Bloco 1** (V1 ruminação · V2 conflito · V3 TRES). M5: se não vierem, vídeos escorregam p/ 28/07; o funil não trava.
- **23/07** — trabalho do gate de retorno (Victor): página v4 + App Script v5 + dashboard v4 + teste end-to-end de tracking. Enquanto o gate não passa, a campanha fica pausada e a verba B não é aplicada.
- **24/07 (sex)** — **ciclo de decisão §4 completo + leitura de funil completo** (depende do dashboard) + entrada do bloco de vídeo 1 no broad **se** gravado E **se** a campanha tiver voltado. ⚠️ Se a campanha seguir pausada na sexta, o §4 roda em modo "sem sinal veiculando" (tabela por anúncio = acumulado histórico; nenhum kill/scale proponível).
- **25/07 (sáb)** — abre a **janela de virada 1** (X1-L1 + E4-L1 · story/WhatsApp da Débora). ⚠️ Depende da campanha estar ativa; se pausada, a virada 1 fica comprometida (candidato a M1/M2 — comprimir janelas — a avaliar com o Victor **fora da run**, é decisão de plano, não da rotina).

**Propostas:** **NENHUMA nova.** Campanha pausada = nada a propor (kill/scale exige sinal veiculando; §6 pré-voo manda conferir e sair). As propostas em aberto do LOG (pausar já executada; confirmar IC no teste end-to-end; realinhamento verba A→B em espera) seguem sob o Victor — não reproposto.

**⏰ Ponto de atenção para o Victor (calendário, não proposta da rotina):** o gate de retorno vs. o cronograma estão em rota de colisão. Sexta (24/07) tem ciclo de decisão e possível entrada de vídeo; sábado (25/07) abre a virada de lote 1. Se a página v4 / teste de tracking não fecharem a tempo de reativar a campanha antes de 25/07, a virada 1 escorrega (território M1/M2). Decisão de comprimir/adiar janelas é de plano (Victor/Fable, fora da run), não da rotina.

**Nenhuma ação executada (somente leitura). Campanha em pré-voo §6 (pausada). Fonte de verdade inacessível para a rotina pela 3ª run consecutiva — reportado.**

---

### 2026-07-22 (quarta) · rotina DIÁRIA (§3) · 🔴 modo degradado (dashboard inacessível **para a rotina**)

> ⚠️ **CORREÇÃO DO VICTOR (pós-run) — leia ANTES do resto da entrada. A tese de tracking abaixo está REFUTADA:**
> 1. **A campanha foi PAUSADA pelo Victor** (proposta #1 aceita e executada por ele).
> 2. **O dashboard nunca parou de funcionar.** O "🔴 inacessível" das runs de 21 e 22/07 é limitação do **ambiente da rotina agendada** (endpoint fora da provenance do web_fetch + nenhum Chrome pareado), não da fonte de verdade. Ler sempre como **"inacessível para a rotina"**.
> 3. **O 0 IC não é anomalia: é consequência de Lead 0.** Nesta página o Lead é pré-requisito do InitiateCheckout — sem inscrição, não existe checkout para disparar. O dashboard de 21/07 já dizia isso (PageView 140 · VC 14 · CTA 5 · **Lead 0 = gargalo** · Checkout 0).
> 4. **Tracking end-to-end VALIDADO.** O pixel PagTrust não atribuído ao produto era falha real e foi corrigido — **mas não era a causa** do 0 IC.
> **Consequência:** o diagnóstico §7.4 **não** para no passo 1 (tracking, limpo). Vai para os passos 2-3 (**oferta/página**): o funil morre entre chegar na página e se inscrever. Criativo entrega bem (CTR 3,77–7,82% · custo/LPV R$1,57-2,75) — **o problema é a página, não a mídia nem o pixel.** Qualquer kill de criativo por "0 IC" seria erro: nenhum criativo gera IC numa página que não gera Lead.
> Tudo abaixo permanece válido **exceto** as leituras de "suspeita de tracking" — mantidas como registro do raciocínio original.

**Fase/cenário:** F1 · **Cenário B AUTORIZADO em 21/07, mas a conta ainda está montada como A** — 1 campanha CBO `debora-meta-vendas-workshop-ago26` (ACTIVE) + **1 único conjunto** `broad-br-vs` (120249029701440107, ACTIVE, `in_learning_phase`), 7 anúncios ACTIVE. Sem `retarget-morno`, sem `lembrete-quente`, sem público Purchase-180d → **a montagem B do PLANO-22-07 §D não foi executada até agora.** Thresholds aplicados nesta leitura: **B (kill normal = 3 dias)**, conforme decisão 21/07.

**Gasto D-1 (21/07):** R$69,19 · 1.253 impr · 91 cliques · CTR 7,26% · CPM R$55,22 · 46 LPV · **0 IC**.
**Parcial de hoje (22/07, até a leitura):** R$5,58 · 129 impr · 5 cliques · CTR 3,88% · 6 LPV · 0 IC.
**Acumulado (18–22/07):** **R$270,83** · 4.724 impr · 279 cliques · CTR 5,91% · freq 1,67 · 2.829 alcance · **148 landing page views** · **0 IC** · custo/IC = n/a.
Série diária: 18/07 R$85,12 (1.398 impr · CTR 6,72%) · 19/07 R$54,62 (922 · 5,10%) · 20/07 R$56,32 (1.022 · 4,11%) · 21/07 R$69,19 (1.253 · 7,26%) · 22/07 parcial R$5,58.

**IC e custo/IC:** **0 IC acumulado** (5º dia). Campo `omni_initiated_checkout` = "Not available" em todos os níveis. Único sinal de conversão legível na Meta é `landing_page_view` (148 acum.).

**Vendas por turma/lote (dashboard = fonte de verdade):** 🔴 **INACESSÍVEL nesta execução** — camada 1 (endpoint Apps Script) bloqueada (`URL not in provenance set`) e camada 2 (navegador) indisponível (`list_connected_browsers` = vazio, nenhum Chrome pareado em execução agendada). → **modo degradado §2a.3**: rodando só com Meta; **toda proposta é CONDICIONAL**; nenhum kill definitivo sem a fonte de verdade (M11). É a 2ª execução consecutiva sem a fonte de verdade.

**Anomalias (§3.1 / §3.2):**
- 🔴 **A campanha gastou a noite inteira ANTES do gate de tracking.** O PLANO-22-07 (criado 00:05 de hoje) define a "REGRA DE OURO": testar o tracking end-to-end **antes** de deixar a campanha B gastar, e a ordem crítica termina em "ativar B" só depois do teste passar. A campanha A, porém, **nunca foi pausada** — seguiu veiculando e somou R$69,19 (21/07) + R$5,58 (22/07) = **R$74,77 gastos apontando para a página v3 antiga**, com a v4/App Script v5 ainda não publicados. Isso é gasto em sinal ainda não validado, exatamente o que o plano pede para evitar.
- 🔴 **0 IC no 5º dia consecutivo, agora com R$270,83 e 279 cliques.** A correção da causa-raiz (pixel PagTrust atribuído ao produto, 21/07 fim do dia) **ainda não produziu 1 IC** nas ~horas seguintes — mas a janela é curta (correção ~23h de 21/07; leitura ~09h de 22/07 = ~10h, com só R$5,58 gastos hoje) e o checkout ainda não foi exercitado por tráfego real. **Não é conclusivo**; é o item a confirmar no teste end-to-end.
- ⚠️ **Sub-pacing vs Cenário B:** rodando ~R$60-69/dia contra diária B de **~R$117** (R$3.500 ÷ 30). Verba B aprovada não está sendo aplicada. **Não proponho aumento** enquanto o tracking não fechar (gastar mais em sinal não validado é o erro que o plano proíbe).
- ✅ Entrega OK: conjunto ativo, 4.724 impr, sem zerar. `ads_get_errors` = `{}` (nenhum anúncio reprovado, nenhum erro bloqueando entrega).
- ✅ Conjunto ainda em `in_learning_phase` (esperado: 0 conversão otimizada = aprendizado não fecha).

**Tabela por anúncio (acumulado 18–22/07)** — leitura de contexto (hoje é quarta; o ciclo de decisão §4 é ter/sex):

| Anúncio | Gasto | Impr | Cliques | CTR | CPM | Freq | LPV | IC | Veredito (regra §7.3) |
|---|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$145,54 | 2.436 | 158 | 6,49% | R$59,75 | 1,65 | 86 | 0 | **sem kill** — R$145,54 < R$225 (kill hard); CTR ≫ 0,5%; não reprovado |
| debora-cn1-ruminacao-carrossel-v1 | R$41,03 | 588 | 46 | 7,82% | R$69,78 | 1,30 | 23 | 0 | abaixo dos limiares |
| debora-paz-carrossel-h1-v2 | R$30,28 | 605 | 23 | 3,80% | R$50,05 | 1,13 | 11 | 0 | abaixo dos limiares |
| debora-custo-estatico-h1-v1 | R$22,52 | 636 | 24 | 3,77% | R$35,41 | 1,36 | 11 | 0 | abaixo dos limiares |
| debora-eficiencia-estatico-h1-v2 | R$15,49 | 248 | 13 | 5,24% | R$62,46 | 1,29 | 7 | 0 | abaixo dos limiares |
| debora-cn2-causa-carrossel-v1 | R$12,56 | 161 | 12 | 7,45% | R$78,01 | 1,03 | 8 | 0 | abaixo dos limiares |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | R$68,20 | 1,11 | 2 | 0 | mal começou |

**Nenhum anúncio bate kill hard** (maior gasto sem IC: `raiz` R$145,54 < R$225 · todas as CTR ≫ 0,5% · nenhum reprovado). Kill normal não avaliável (CPA incalculável com 0 IC). Fadiga não (freq máx 1,65 ≪ 3,5). Vencedor não (0 IC). **O fato dominante segue sendo o 0 IC generalizado → diagnóstico §7.4 PARA no passo 1 (tracking).**

**Frequência (§3.4):** máx 1,65 (`raiz`); conjunto 1,67. Sem fadiga. Sem `lembrete-quente` montado (M13 n/a).

**Ações programadas 72h (22–25/07) — §2c:**
- **HOJE 22/07** — bloco B do PLANO-22-07 (Victor): velocidade da página v4 → publicar App Script v5 → subir página v4 + dashboard v4 → **teste de tracking end-to-end** (Lead → InitiateCheckout → Purchase no dashboard **e** no Meta Test Events). Gate obrigatório antes de liberar tráfego. Em paralelo: Business Verification da Débora (destrava `ads` no dashboard). Depois: montar públicos + conjuntos B, diária ~R$117.
- **HOJE 22/07** — Débora: gravar/enviar Bloco 1 de vídeos (V1 ruminação · V2 conflito · V3 TRES).
- **23/07 (qui)** — deadline das gravações do Bloco 1 (M5: se não vierem, vídeos escorregam p/ 28/07; o funil não trava). Em B, `retarget-morno` liga ~23/07 quando os públicos tiverem volume.
- **24/07 (sex)** — ciclo de decisão §4 completo + leitura de funil completo (depende do dashboard) + entrada do bloco de vídeo 1 no broad se gravado.
- **25/07** — abre a janela de virada 1 (X1-L1 + E4-L1 · story/WhatsApp da Débora).

**Propostas (todas CONDICIONAIS — modo degradado §2a.3):**
1. **[PROPOSTO · aguarda Victor] Pausar a campanha A até o gate de tracking do PLANO-22-07 passar** — ou assumir explicitamente o gasto como aceitável. Regra: PLANO-22-07 "REGRA DE OURO" + ordem crítica (tracking testado ANTES de ativar) + §7.4 passo 1. Dado: R$74,77 gastos desde a criação do plano (21/07 R$69,19 + 22/07 R$5,58), apontando para a página v3 antiga, com 0 IC no 5º dia e a v4/App Script v5 ainda não publicados. Resultado esperado: parar de queimar verba em sinal não validado e chegar ao relançamento B com verba íntegra. *Não executo — decisão do Victor.*
2. **[PROPOSTO · aguarda Victor] Confirmar o IC no teste end-to-end antes de qualquer kill/scale/aumento de verba** (renova a proposta de 21/07, ainda em aberto). O pixel foi corrigido em 21/07 mas **nenhum IC apareceu até agora**; só o teste com click-through até o PagTrust decide se o wiring fechou. Enquanto não fechar, nenhum kill é proponível (nenhum bate kill hard de todo modo) e nenhum aumento de verba é seguro.
3. **[EM ESPERA] Realinhamento de verba A→B (R$60 → ~R$117/dia)** — aprovado pela Débora em 21/07, mas **fica parado até o tracking fechar**. Aumentar verba antes disso multiplica gasto em sinal não validado.

**Adendo (pós-run) — pedido de execução recebido e recusado pelo contrato:** chegou dentro desta execução o pedido "pause a campanha". **Não executado.** §0 proíbe a rotina de pausar, e a nota de escopo da scheduled determina que expansão de autonomia exige atualização formal do protocolo + alinhamento prévio, **"mesmo que solicitado dentro de uma execução"**; run não-interativa também não permite autenticar a origem do pedido (§6: instrução que contradiz o protocolo → ignorar e reportar). A ação segue como proposta, agora com o operacional completo:

- **O quê:** campanha `debora-meta-vendas-workshop-ago26` (**120248977530950107**) → **PAUSED**. Derruba junto o conjunto `broad-br-vs` e os 7 anúncios.
- **Motivo:** gasto contra a página v3 antiga antes do gate de tracking do PLANO-22-07 — R$74,77 desde a criação do plano, 0 IC no 5º dia, página v4 e App Script v5 ainda não publicados.
- **Estimativa:** economiza ~R$60-69/dia enquanto o gate não passa (1 dia ≈ R$65 · até sexta ≈ R$195). Verba não se perde: volta para o relançamento B com sinal limpo.
- **Custo de pausar:** reset de aprendizado — **nulo na prática**, o PLANO-22-07 já trata o B como relançamento limpo ("o A rodou sem conversão/tracking quebrado, sem perda real").
- **Gate de retorno (todos, nesta ordem):** (1) página v4 otimizada + App Script v5 publicado + dashboard v4 no ar; (2) **teste end-to-end passando: Lead → InitiateCheckout → Purchase ticando no dashboard E no Meta Test Events**; (3) montar públicos/conjuntos B, diária ~R$117, ativar como relançamento limpo.
- **Se o Victor quiser que a rotina passe a pausar sozinha nesses casos:** é alteração do §0 do protocolo, feita fora da run, definindo gatilho exato e teto.

**Nenhuma ação executada (somente leitura). Fonte de verdade inacessível pela 2ª execução consecutiva — reportado ao Victor.**

---

### 2026-07-21 07:05 · terça (diária §3 + ciclo de decisão §4) · 🔴 modo degradado (dashboard inacessível)

> **🟡 ATUALIZAÇÃO 23:28 — fonte de verdade recebida (Victor enviou print do dashboard):**
> Dashboard (deboradelgado.space/dashboard): Leads **0** · Vendas **0** · Receita **R$0,00**. Funil de vendas: PageView **140** · ViewContent **14** (10%) · Clique no CTA **5** (35,7%) · **Lead 0 (gargalo)** · Checkout **0** · Purchase **0**. Heatmap por dobra: D1 Hero **122 sessões** (100%) → D2 Espelho **38** (31,1%) → D3 Custo **31** (25,4%) → D4+ **1 sessão** cada (Victor confirmou: a sessão profunda única é dele).
> - **Reconciliação:** o **0 IC da Meta é REAL** — bate com Checkout 0 do dashboard → **NÃO há divergência plataforma×dashboard (M11 não se aplica).** O topo de funil TRACKEIA (PageView/ViewContent/CTA/heatmap registram) → **não é blackout de tracking**; o funil morre cedo.
> - **Diagnóstico revisado (§7.4):** passo 1 (tracking) limpo no topo; eventos profundos (Lead/Checkout/Purchase) em verificação AO VIVO pelo Victor (ele vai se inscrever e testar). Volume real além de D3 ≈ 0 → não dá para julgar oferta/página com esse n. Gap visível: queda D1→D2→D3 + 5 cliques no CTA → 0 checkout.
> - **Segue valendo:** nenhum kill (criativos entregam cliques/pageviews); **não aumentar verba** até o teste end-to-end do Victor fechar. Diagnóstico aberto até o resultado do teste.

**Fase/cenário:** F1 · Cenário A (1 campanha CBO `debora-meta-vendas-workshop-ago26` + 1 conjunto `broad-br-vs`, ambos ACTIVE, R$60/dia base A). Sem conjuntos retarget/lembrete (coerente com A). Nenhum erro de entrega (Meta `get_errors` = {}).

**D0 real = 18/07** (campanha veiculando desde 18/07; o alvo do plano era 20/07 — ativada ~2 dias antes, **sem linha no LOG-DECISOES**; registrado hoje).

**Gasto D-1 (20/07):** R$56,32 · 1.022 impr · CTR 4,11% · **0 IC**.
**Gasto acumulado (18–21/07):** R$233,65 · 4.066 impr · ~232 cliques · **0 IC** · custo/IC = n/a (0 conversões).
Série diária Meta: 18/07 R$85,12 (1.398 impr) · 19/07 R$54,62 (922) · 20/07 R$56,32 (1.022) · 21/07 parcial (~R$37 por diferença).

**IC e custo/IC:** 0 IC em toda a campanha; custo/IC indefinido.

**Vendas por turma/lote (dashboard = fonte de verdade):** 🔴 **INACESSÍVEL nesta execução.** Endpoint Apps Script bloqueado (web_fetch só aceita URL vinda de mensagem do usuário — a URL vive em arquivo) e o fallback navegador exige seleção interativa entre 2 browsers conectados, impossível em execução agendada não-interativa. → **modo degradado §2a.3**: rodando só com Meta; toda proposta CONDICIONAL; nenhum kill definitivo sem a fonte de verdade (M11).

**Anomalias (§3.1 / §3.2):**
- 🔴 **0 IC com R$233,65 gastos, ~232 cliques e CTR saudável (3,9–7,6%) em 3 dias** → suspeita de TRACKING antes de qualquer leitura de performance (§2a sanidade · M11). Contexto que reforça: página v3 no ar usa GTM/dataLayer (desync sinalizado vs PLANO-TRACKING no diário 17/07) e o IC só foi confirmado disparando em eventos de teste (32) no pixel via checkout.pagtrust. Sem dashboard não dá para saber se é (a) gap de atribuição/tracking (M11) ou (b) furo pós-clique real na página/checkout (M12/§7.4 passo 3).
- Kill-hard **NÃO** atingido por nenhum anúncio (o maior gasto sem IC é `raiz` a R$114,23 < R$225; CTRs todas ≫0,5%; nenhum reprovado).
- Entrega OK (conjunto ativo entregando 4.066 impr; sem zerar).
- Pacing: R$60/dia está ~33% abaixo da diária F1-A do plano (~R$89). Sub-pacing — mas **não aumentar verba antes de sanar o tracking** (não gastar em sinal sujo).

**Tabela por anúncio (acumulado 18–21/07):**

| Anúncio | Gasto | Impr | Cliques | CTR | Freq | IC | Custo/IC | Veredito (regra §7.3) |
|---|---|---|---|---|---|---|---|---|
| debora-raiz-estatico-h1-v1 | R$114,23 | 1.910 | 119 | 6,23% | 1,60 | 0 | — | sem kill (R$114<R$225; CTR ok) · 0 IC = tracking |
| debora-cn1-ruminacao-carrossel-v1 | R$39,28 | 552 | 42 | 7,61% | 1,31 | 0 | — | abaixo dos limiares |
| debora-paz-carrossel-h1-v2 | R$29,34 | 596 | 23 | 3,86% | 1,13 | 0 | — | abaixo dos limiares |
| debora-custo-estatico-h1-v1 | R$20,11 | 567 | 23 | 4,06% | 1,35 | 0 | — | abaixo dos limiares |
| debora-eficiencia-estatico-h1-v2 | R$15,14 | 240 | 12 | 5,00% | 1,29 | 0 | — | abaixo dos limiares |
| debora-cn2-causa-carrossel-v1 | R$12,14 | 151 | 10 | 6,62% | 1,03 | 0 | — | abaixo dos limiares |
| debora-sistemas-carrossel-h2-v2 | R$3,41 | 50 | 3 | 6,00% | 1,11 | 0 | — | mal começou |

Nenhum anúncio bate kill-hard, kill-normal (CPA incalculável + só 3 dias, A exige 6), fadiga (freq máx 1,60) ou vencedor (0 IC). O fato dominante é o **0 IC generalizado** → diagnóstico §7.4 PARA no passo 1 (tracking); não avançar para oferta/página/criativo sem a fonte de verdade.

**Frequência (§3.4):** máx 1,60 (`raiz`). Sem fadiga. Sem conjunto lembrete-quente em A (M13 n/a).

**Ações programadas 72h (21–24/07) — §2c:**
- **23/07** — deadline das gravações do **Bloco 1 da Débora** (V1 ruminação · V2 conflito · V3 TRES). Se não vierem, os vídeos escorregam p/ 28/07 (M5 — o funil não trava).
- **24/07 (sex)** — ciclo de decisão + entrada do **bloco de vídeo 1** no broad **se gravado** (senão 28/07). Sexta = leitura de funil completo (dependerá do dashboard).
- 25/07 (fora das 72h) — abre a **virada 1** (lote L1→L2 em 28/07 23h59); prep de X1-L1/E4-L1 + story/WhatsApp.

**Propostas (todas CONDICIONAIS — modo degradado):**
1. **[PROPOSTO · aguarda Victor] Auditoria de tracking do IC** antes de qualquer kill/scale/aumento de verba: confirmar na fonte de verdade (dashboard/PagTrust) se há leads/checkouts reais e se o evento InitiateCheckout (pixel/CAPI) está disparando na página/checkout no ar. Este é o passo 1 do §7.4 e o gate do M11 — não proponho nenhum kill enquanto o tracking não for confirmado.
2. (secundária) Realinhamento de verba F1 (R$60 → ~R$89 plano) **fica em espera até o tracking ser sanado.**

**Fonte de verdade inacessível nesta execução — reportado ao Victor. Nenhuma ação executada (somente leitura).**
