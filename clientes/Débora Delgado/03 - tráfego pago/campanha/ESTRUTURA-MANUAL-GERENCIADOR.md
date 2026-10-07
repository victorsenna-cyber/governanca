# ESTRUTURA MANUAL DO GERENCIADOR — montagem F1 (100% PAUSADA) · Seu Eixo

> STATUS: VIGENTE · fonte (guia de montagem manual) · criado 18/07 · fallback do `TASK-EXECUTOR-MONTAGEM-CAMPANHA.md` §0
> **Por que manual:** a criação de conjunto via MCP Meta Ads tromba num bug de direcionamento por localização (erro `INTERNAL` genérico). A via manual do gerenciador não tem esse problema. A campanha já foi criada via MCP; conjunto + anúncios seguem por aqui.
> **Regra dura:** tudo nasce e permanece `PAUSED`. Nada é ativado. Copy 1:1 da `copy-anuncios.md` (v2, 18/07) — não adaptar. Ativação, verba e publicação = Victor, depois dos gates humanos.

---

## 0. Ativos (confirmados via MCP em 18/07)

| Item | Valor |
|---|---|
| BM | `2917036641953421` (Débora Delgado) |
| Conta de anúncios | `379430536736935` ([DD] CA 01 - Backup) |
| Campanha (já criada, PAUSED) | `debora-meta-vendas-workshop-ago26` · ID `120248977530950107` · OUTCOME_SALES · CBO R$ 60/dia |
| Pixel / Conjunto de dados | `Pixel Débora` · `4060021607461178` (InitiateCheckout ATIVO, 32 eventos, via checkout.pagtrust.com.br) |
| Página do Facebook | `108248871371731` (única vinculada; nome aparece vazio na API, confere no gerenciador) |
| Instagram | confirmar visualmente no gerenciador (API `ads_get_ig_accounts` indisponível p/ esta CA) |
| URL base | `https://deboradelgado.space/` |

**Não tocar:** as 5 campanhas legado (pausadas) · pixel/dataset de terceiros que aparecem no login (ex.: "Pixel Além do Eneagrama", "Continuum Ads MCP", business `terapeutaguilhermearaujo`).

---

## 1. ⭐ MODUS OPERANDI — direcionamento por localização (regra nova da Meta)

**O problema (mensagem #1870194 no gerenciador):** *"Seu público contém uma opção de direcionamento por localização que foi removida... você precisa editar o público salvo para atualizar o tipo de direcionamento."*

**A causa:** a Meta **removeu** as antigas 4 opções de tipo de localização ("Pessoas que moram neste local", "Pessoas que estiveram recentemente", "Pessoas que viajam", "Todas as pessoas neste local"). Sobrou **UMA única opção**, aplicada automaticamente:

> **"Pessoas que moram ou estiveram recentemente neste local"** (em inglês: *"Living in or recently in this location"*).

Não há mais dropdown para escolher — o gerenciador aplica esse tipo sozinho. Públicos/conjuntos salvos ANTES da mudança (ou duplicados de um antigo) carregam um tipo morto e disparam o aviso.

**Como resolver (sempre que esse aviso aparecer):**
1. No conjunto, seção **Público / Locais**, clique em **editar o local** (ou "editar público salvo").
2. Remova o Brasil e **adicione de novo** `Brasil` — ao re-adicionar, o gerenciador já aplica o único tipo vigente ("moram ou estiveram recentemente"), sem dropdown.
3. O aviso vermelho some. Salve.

**Para o futuro (todo conjunto novo desta conta e das próximas):** montar o público de localização do zero (nunca duplicar de conjunto antigo) para já nascer com o tipo único vigente. Se duplicar, sempre re-adicionar o local. — *Esta regra foi incorporada ao `METODO-TRAFEGO-PAGO.md` (§5.2).*

---

## 2. Conjunto `broad-br` (PAUSED)

> Você já tem uma cópia adiantada ("ZZZ-DIAG-APAGAR-broad-br-diag5 — Cópia") com Pixel Débora + Iniciar finalização da compra. Pode **renomear e ajustar essa cópia** em vez de criar do zero — só siga os campos abaixo e aplique o §1.

| Campo | Valor exato |
|---|---|
| **Nome do conjunto** | `broad-br` |
| Local da conversão | **Site** |
| Meta de desempenho | **Maximizar o número de conversões** |
| Conjunto de dados | **Pixel Débora** (`4060021607461178`) |
| **Evento de conversão** | **Iniciar finalização da compra** (InitiateCheckout) |
| Orçamento | herda da campanha (CBO R$ 60/dia) — **não** definir orçamento por conjunto |
| **Público / Local** | **Brasil** (aplicar §1: re-adicionar para pegar o tipo único vigente) |
| Idade | **18–65+** (sem recorte etário — não há confirmação da Débora em DECISOES) |
| Sexo | Todos |
| Segmentação detalhada | **vazia** (broad puro — o criativo é a segmentação, método §0) |
| Público Advantage+ | pode manter ligado (broad) |
| Posicionamentos | **Advantage+ (automáticos)** |
| **Modelo de atribuição** | **7 dias clique / 1 dia visualização** (método §6.5 — em "Mostrar mais configurações" › Janela de atribuição; NÃO mudar depois) |
| Status | **PAUSED** (rascunho; não publicar ativo) |

**Depois de acertar:** apague o `ZZZ-DIAG-APAGAR-broad-br-diag5` original (o conjunto de diagnóstico com Purchase) — não é a config correta.

---

## 3. Os 7 anúncios F1 (todos PAUSED, dentro de `broad-br`)

**Regras gerais para todos:**
- **Página do Facebook:** a da Débora (`108248871371731`). **Instagram:** a conta dela (confirmar no seletor).
- **Pixel:** Pixel Débora (rastreamento ligado).
- **URL do site (em todos):**
  `https://deboradelgado.space/?utm_source=meta&utm_medium=paid&utm_campaign=debora-meta-vendas-workshop-ago26&utm_content=[NOME-DO-ANUNCIO]`
  → trocar `[NOME-DO-ANUNCIO]` pelo slug exato de cada peça (coluna "Nome" abaixo).
- **Copy 1:1** — não adaptar. Carrossel: sem headline por card (texto vive na arte); primary text + botão abaixo.
- Cada anúncio nasce **PAUSED**.

### Anúncio 1 — `debora-eficiencia-estatico-h1-v2` (estático)
- **Arte:** `criativos/ESTÁTICOS/E1-eficiencia.png`
- **Primary text:**
```
Você entrega, resolve, sustenta. As pessoas confiam em você.
E ainda assim tem dia em que a reunião acaba e continua rodando na sua cabeça, no caminho de casa.
Não é falta de competência. É energia vazando para conflitos que você ainda não aprendeu a ler.
Em três dias, você descobre as principais fontes de ineficiência nos seus relacionamentos de trabalho. E como transformar conflitos em energia disponível.
Workshop online, turmas de agosto, cerca de 20 pessoas por turma.
```
- **Headline:** `Lidere com eficiência. Sem perder a própria vida.`
- **Botão:** Inscreva-se
- **utm_content:** `debora-eficiencia-estatico-h1-v2`

### Anúncio 2 — `debora-custo-estatico-h1-v1` (estático)
- **Arte:** `criativos/ESTÁTICOS/E2-custo.png`
- **Primary text:**
```
O feedback você sabia de cor. Ensaiou no caminho. Na hora, saiu pela metade, ou saiu cobrança.
Isso não é falta de técnica de gestão. O problema nunca é só uma conversa: é carregar emocionalmente dezenas delas. E esse peso cobra: em energia, em conversas adiadas, em decisões que ficam para depois.
Em 3 dias, você aprende a ver de onde isso vem. E a transformar esses conflitos em energia disponível para o seu trabalho.
```
- **Headline:** `Não é falta de técnica`
- **Botão:** Inscreva-se
- **utm_content:** `debora-custo-estatico-h1-v1`

### Anúncio 3 — `debora-raiz-estatico-h1-v1` (estático)
- **Arte:** `criativos/ESTÁTICOS/E3-raiz.png`
- **Primary text:**
```
Você muda de time, muda de empresa, e a situação difícil se repete, parecida demais para ser azar. O que se repete tem raiz.
E tem um custo que ninguém mede: você pode estar perdendo eficiência porque está se adaptando, aceitando desafio que não tem a ver com você só porque você é bom nisso.
À luz do eneagrama (pista, nunca caixa), você reconhece aquilo que você faz melhor sem esforço, e o que se repete sem você escolher. Ver isso é o primeiro passo para escolher diferente.
Workshop online, 3 dias, turmas de agosto.
```
- **Headline:** `O que se repete tem raiz`
- **Botão:** Saiba mais
- **utm_content:** `debora-raiz-estatico-h1-v1`

### Anúncio 4 — `debora-sistemas-carrossel-h2-v2` (carrossel, 5 cards)
- **Artes (nesta ordem):** `criativos/CARROSSÉIS/C1/C1-card-01-capa.png` · `C1-card-02-voce.png` · `C1-card-03-pessoas.png` · `C1-card-04-cultura.png` · `C1-card-05-fecho.png`
- **Primary text:**
```
Formações ensinam a agir. Poucas ensinam a compreender de onde vem a perda de eficiência: de você, das pessoas ou da cultura. Um workshop de 3 dias, um dia para cada leitura. Turmas de agosto.
```
- **Botão:** Saiba mais · **Cada card → mesma URL** com `utm_content=debora-sistemas-carrossel-h2-v2`
- ⚠️ **Conferência 🔍 (cards 2-5):** ver §5 abaixo antes de subir.

### Anúncio 5 — `debora-paz-carrossel-h1-v2` (carrossel, 4 cards)
- **Artes:** `criativos/CARROSSÉIS/C2/C2-card-01-capa.png` · `C2-card-02-lista.png` · `C2-card-03-energia.png` · `C2-card-04-fecho.png`
- **Primary text:**
```
Você já entrega. Estes 3 dias são sobre entregar e, no fim do dia, sentir paz. Cerca de 20 pessoas por turma, para que você seja visto, não só inscrito.
```
- **Botão:** Inscreva-se · **utm_content:** `debora-paz-carrossel-h1-v2`
- ⚠️ **Conferência 🔍 (cards 2-4):** ver §5.

### Anúncio 6 — `debora-cn1-ruminacao-carrossel-v1` (carrossel, 5 cards)
- **Artes:** `criativos/CARROSSÉIS/CN1/CN1-card-01.png` … `CN1-card-05.png` (ordem 01→05)
- **Primary text:**
```
A reunião acabou. Você não. Se o dia termina e as conversas continuam rodando, existe uma causa, e ela tem leitura. Workshop Seu Eixo, 3 dias ao vivo, turmas de agosto.
```
- **Botão:** Saiba mais · **utm_content:** `debora-cn1-ruminacao-carrossel-v1`
- Cards CN1 já auditados ✅ (sem 🔍).

### Anúncio 7 — `debora-cn2-causa-carrossel-v1` (carrossel, 5 cards)
- **Artes:** `criativos/CARROSSÉIS/CN2/CN2-card-01.png` … `CN2-card-05.png` (ordem 01→05)
- **Primary text:**
```
Sair drenado dos conflitos não é o preço natural de liderar. É sinal de uma causa sem nome. Em 3 dias você dá nome, e leitura, a ela. Turmas de agosto, cerca de 20 pessoas.
```
- **Botão:** Saiba mais · **utm_content:** `debora-cn2-causa-carrossel-v1`
- ⚠️ **Conferência 🔍 (cards 2-4):** ver §5.

---

## 4. NÃO montar agora (entram fase a fase — `PLANO-FUNIL-LANCAMENTO.md` §4)

E4 (refazer arte "R$ 97,0"→"R$ 97" + versões por lote) · CN3 · CN4 · CN5 (versões por lote) · X-series (X1/X2-L1, X1/X2-L2, X3-FDS, X3-SEM) · N-series (N1, N2, N3) · IT (iterações) · vídeos V1-V6. Tudo isso é gestão do mês, não montagem inicial.

---

## 5. Conferência dos cards 🔍 (fazer ANTES de subir cada carrossel)

Abrir a arte e comparar o texto contra a `criativos/COPY-CRIATIVOS-ESTATICOS.md` (v5, §3-4). **Arte diverge → NÃO sobe aquele card; anotar a divergência** (iteração da arte é do Victor). Se a arte estiver melhor, transcrever a melhoria para a COPY v5 e registrar.

| Peça | Cards a conferir | Texto de referência (COPY v5) |
|---|---|---|
| C1 | 2, 3, 4, 5 | §3 C1: card 2 "Você mesmo" · 3 "As pessoas" · 4 "A cultura" · 5 fecho "um dia para cada sistema" |
| C2 | 2, 3, 4 | §3 C2: card 2 lista vs. sem levar pra casa · 3 conflito → energia · 4 "A diferença é a leitura" |
| CN2 | 2, 3, 4 | §4 CN2: card 2 custo (energia/decisão adiada) · 3 curso não chega à causa · 4 causa = como você funciona |

---

## 6. Checklist de tracking (verificar e REPORTAR — não corrigir; é gate de ATIVAÇÃO)

1. Pixel Débora recebendo PageView / **InitiateCheckout** / Purchase com dedupe pixel+CAPI. *(IC confirmado ativo em 18/07: 32 eventos; PageView 16; API de Conversões presente.)*
2. EMQ (qualidade da correspondência de eventos) ≥ 7 no InitiateCheckout — conferir na aba do evento.
3. Domínio `deboradelgado.space` verificado no BM.
4. Fonte de verdade viva: planilha de leads (Apps Script) + PagTrust.
5. Cap de gasto mensal da conta = verba do cenário — se não estiver, **sinalizar ao Victor** (não configurar sozinho).

---

## 7. Gate de saída (a montagem só conta como feita com tudo ✓)

- [ ] Conjunto `broad-br` criado/ajustado, PAUSED, com localização corrigida (§1) e atribuição 7d/1d.
- [ ] `ZZZ-DIAG-APAGAR-broad-br-diag5` (diagnóstico) apagado.
- [ ] 7 anúncios criados, todos PAUSED, nomenclatura e copy 1:1, UTMs certas.
- [ ] Preview de cada anúncio conferido (texto sobre imagem legível, link certo).
- [ ] Conferência 🔍 (§5) feita e anotada.
- [ ] `estrutura-campanhas.md` atualizado com os IDs finais dos anúncios (Victor ou próxima sessão colhe os IDs).
- [ ] Checklist §6 rodado e reportado.

**Gates de ATIVAÇÃO (fora desta montagem — Victor):** decisão A/B + verba por escrito · aprovação Débora do pacote v3 + criativos · fix "talentos" na página · verificação do BM · verificação SMS pessoal do Victor (acesso ao gerenciador).
