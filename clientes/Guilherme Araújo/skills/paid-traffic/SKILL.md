# SKILL: Tráfego Pago Avançado — Meta Ads
**Versão:** 1.0 | **Criado:** 2026-06-03 | **Projeto:** Guilherme Araújo — Cartomância Sistêmica

---

## QUANDO USAR ESTA SKILL

Invocar sempre que a tarefa envolver:
- Criação, edição ou auditoria de campanhas Meta Ads
- Escolha de objetivo de campanha
- Segmentação de público
- Criação de criativos e anúncios
- Análise de métricas e diagnóstico de performance
- Decisão de escalar, pausar ou cortar ativos
- Planejamento de funil de tráfego pago

---

## PRINCÍPIO FUNDAMENTAL

> O objetivo da campanha instrui o algoritmo sobre **quem buscar**.
> Escolher o objetivo errado é desperdiçar budget em pessoas certas com intenção errada.

### Mapa objetivo → comportamento do algoritmo

| Objetivo | O algoritmo busca | Quando usar |
|---|---|---|
| OUTCOME_AWARENESS | Quem tem maior probabilidade de ver e lembrar | Brand, alcance puro |
| OUTCOME_TRAFFIC | Quem tende a clicar em links | Tráfego para LP, pixelamento, audiências |
| OUTCOME_ENGAGEMENT | Quem tende a engajar (curtir, comentar, **conversar**) | Conversas WPP, Messenger, engajamento real |
| OUTCOME_LEADS | Quem tende a preencher formulários | Lead gen com form |
| OUTCOME_SALES | Quem tende a comprar | Conversão com pixel treinado |
| OUTCOME_APP_PROMOTION | Quem tende a instalar apps | Apps |

### Regra crítica de objetivo

**NUNCA usar OUTCOME_TRAFFIC para campanhas de conversa no WhatsApp.**

OUTCOME_TRAFFIC otimiza para clique — entrega para quem clica mas não necessariamente converte em conversa.

OUTCOME_ENGAGEMENT + CONVERSATIONS + WHATSAPP faz o algoritmo buscar pessoas com **propensão real a iniciar e manter conversa** — filtragem por intenção comportamental, não por clique.

---

## ARQUITETURA DE FUNIL META ADS

```
TOFU — Descoberta qualificada
  Objetivo: OUTCOME_AWARENESS ou OUTCOME_TRAFFIC
  Otimização: Reach, Impressions, Link Clicks, Landing Page Views
  Público: Frio — interesses, lookalike 5-10%, broad
  KPIs: CPM, CTR link, CPC link, frequência

MOFU — Conversa e lead
  Objetivo: OUTCOME_ENGAGEMENT
  Otimização: CONVERSATIONS
  Destino: WHATSAPP (requer número Business vinculado à Página)
  Público: Frio qualificado, lookalike 1-3%, engajados 30-90d
  KPIs: CPL (custo por conversa), qualidade das respostas, agendamentos

BOFU — Conversão
  Objetivo: OUTCOME_SALES
  Otimização: OFFSITE_CONVERSIONS (Purchase, InitiateCheckout)
  Público: Visitantes LP, ViewContent, InitiateCheckout, lista CRM, lookalike 1%
  KPIs: CPA por venda, ROAS, receita

RMKT — Reativação
  Objetivo: OUTCOME_ENGAGEMENT ou OUTCOME_SALES
  Público: Engajamento Instagram 60-180d, visitantes LP, leads que não fecharam
  KPIs: CPA recuperado, frequência, taxa de resposta
```

---

## OBJETIVO DE CAMPANHA — GUIA DE DECISÃO

```
Quero que pessoas me enviem mensagem no WhatsApp?
  → OUTCOME_ENGAGEMENT + CONVERSATIONS + WHATSAPP
  → Requer: WhatsApp Business vinculado à Página do Facebook

Quero gerar tráfego para testar LP e pixelar audiência?
  → OUTCOME_TRAFFIC + LANDING_PAGE_VIEWS ou LINK_CLICKS

Quero vender direto com pixel treinado?
  → OUTCOME_SALES + OFFSITE_CONVERSIONS + pixel com Purchase
  → Requer: mínimo 50 eventos de Purchase nos últimos 7 dias

Quero leads via formulário?
  → OUTCOME_LEADS + LEAD_GENERATION
  → Requer: aceite dos Lead Ads TOS na Página

Quero construir audiência de vídeo?
  → OUTCOME_ENGAGEMENT + THRUPLAY ou VIDEO_VIEWS
```

---

## CONFIGURAÇÃO DE CAMPANHA — CHECKLIST

### Antes de criar
- [ ] Objetivo definido e alinhado com a etapa do funil
- [ ] Pixel ativo e disparando os eventos necessários
- [ ] Página do Facebook vinculada à conta de anúncios
- [ ] Para WhatsApp: número Business vinculado à Página
- [ ] Para Lead Ads: TOS aceito na Página
- [ ] Budget definido e dentro do limite autorizado
- [ ] Criativos aprovados e carregados na conta
- [ ] Naming convention aplicada

### Naming convention obrigatória (projeto GA)
```
Campanha: GA|FUNIL|PRODUTO|OBJETIVO|CANAL|YYYYMMDD
Conjunto:  AS|PRODUTO|PUBLICO|GEO|IDADE|POSICIONAMENTO|YYYYMMDD
Anúncio:   AD|ANGULO|CRIATIVO|FORMATO|CTA|YYYYMMDD
```

### Exemplo prático
```
GA|MOFU|CS|CONVERSAS-WPP|META|20260603
AS|CS|MULHERES|BR|25-45|AUTO|20260603
AD|PROCURA-SE-CICLOS|IMAGEM|STORY|SAIBA-MAIS|20260603
```

---

## SEGMENTAÇÃO — REGRAS

### Público frio
- Usar **broad targeting** (só geo + demográfico) como padrão quando não há interesse IDs validados
- **NUNCA inventar interest IDs** — a API rejeita IDs inválidos
- Para interesses: usar `ads_targeting_search` para obter IDs reais antes de criar
- Advantage+ Audience ativado por padrão — trata age_min/age_max como sugestão, não hard cap

### Público quente (RMKT)
Prioridade de qualidade decrescente:
1. Lista CRM (email/telefone hasheado) — melhor sinal
2. Visitantes LP (pixel PageView/ViewContent)
3. Engajamento Instagram 60d
4. Visualizações de vídeo 75%+
5. Engajamento Facebook 30d

### Gênero
- Definir via `genders: [1]` (masculino) ou `genders: [2]` (feminino)
- Omitir para ambos

### Regiões Brasil — IDs para targeting por estado
Usar `geo_locations.countries: ["BR"]` para nacional.
Para estados específicos, usar `geo_locations.regions` com keys da API (buscar via targeting_search).

---

## ORÇAMENTO — REGRAS

### CBO vs ABO
- **CBO (Campaign Budget Optimization):** budget na campanha, Meta distribui entre conjuntos. Recomendado por padrão.
- **ABO (Ad Set Budget Optimization):** budget em cada conjunto. Usar quando precisar controlar distribuição manualmente.

### Escalada de budget
- Aumentar no máximo **20% a cada 48h** para não sair da fase de aprendizado
- Nunca aumentar budget de conjunto com menos de 7 dias de dados
- Escalar somente quando: CTR estável, CPL dentro da meta, conversas qualificadas

### Budget mínimo Meta Ads (BRL)
- Mínimo por conta: R$5,10/dia por conjunto
- Projeto GA: limite total ativo = R$25/dia

---

## CRIATIVOS — PRINCÍPIOS

### Hierarquia de testes
1. Hook (primeiros 3 segundos / linha de abertura)
2. Ângulo (promessa central)
3. Estrutura narrativa
4. Formato (vídeo, imagem, carrossel)
5. CTA
6. Visual
7. Oferta percebida

**Testar uma variável por vez.**

### Matriz de formatos
| Formato | Placement ideal | Quando usar |
|---|---|---|
| Vídeo/Reels (9:16) | Stories, Reels | Hook emocional, autoridade, prova |
| Imagem estática (1:1 ou 4:5) | Feed | Clareza, oferta direta, dor nomeada |
| Carrossel | Feed | Múltiplos benefícios, passo a passo |
| Story imagem (9:16) | Stories | Urgência, oferta, identificação rápida |

### Tipos de criativo por função
| Tipo | Função | KPI principal |
|---|---|---|
| Hook | Parar scroll | Thumbstop / retenção inicial |
| Identificação | Ressonância emocional | CTR / comentários |
| Dor invisível | Nomear problema não verbalizado | Salvamentos / compartilhamentos |
| Clareza | Reduzir confusão | CTR / LPV |
| Autoridade | Reduzir insegurança | CTR / tempo de página |
| Prova | Validar confiança | Conversão / respostas |
| Conversão | Ação direta | CPC / LPV / Purchase |
| Remarketing | Retomar intenção | CPA / retorno |

---

## DIAGNÓSTICO DE PERFORMANCE

### Árvore de diagnóstico

```
CPL alto ou zero conversas?
│
├── CTR link < 1%?
│   → Problema no criativo ou ângulo
│   → Revisar hook, ângulo, formato
│
├── CTR link OK mas CPC alto?
│   → CPM alto — público saturado ou concorrência
│   → Testar público diferente ou broad
│
├── CPC OK mas sem conversas?
│   → Problema na oferta, LP, ou copy do anúncio
│   → Revisar promessa, CTA, página de destino
│
├── Conversas mas sem agendamento?
│   → Problema no script de WhatsApp ou triagem
│   → Auditar mensagem inicial e fluxo de atendimento
│
└── Agendamentos mas sem fechamento?
    → Problema no comercial, proposta ou preço percebido
    → Auditar script de vendas e follow-up
```

### Ordem de auditoria antes de culpar o tráfego
1. Oferta (é clara? é desejável? tem urgência real?)
2. Criativo (hook, ângulo, formato)
3. Copy (identificação, dor, promessa, CTA)
4. Público (está alcançando quem tem o problema?)
5. WhatsApp (mensagem inicial, velocidade de resposta, script)
6. Comercial (proposta, objeções, follow-up)
7. Onboarding (primeira vitória, entrega de valor)
8. Indicação (cliente atual como canal)

---

## MÉTRICAS — REFERÊNCIAS (projeto GA)

| Métrica | Bom | Atenção | Cortar |
|---|---|---|---|
| CTR link (tráfego) | >3% | 1–3% | <1% |
| CTR link (engajamento) | >5% | 2–5% | <2% |
| CPC link | <R$0,10 | R$0,10–0,30 | >R$0,50 |
| CPM | <R$10 | R$10–20 | >R$25 |
| CPL (conversa WPP) | <R$8 | R$8–15 | >R$20 |
| Frequência | <2,0 | 2,0–3,0 | >3,5 |
| LPV/Clique | >50% | 30–50% | <30% |

---

## REGRAS DE CORTE E ESCALA

### Cortar quando
- Gasto sem nenhum clique ou conversa após R$15–20 investidos
- CTR link cronicamente abaixo do mínimo por 3+ dias
- Conversas totalmente desqualificadas (fora do ICP)
- Frequência >3,5 com queda de resultado
- Criativo gera confusão nos comentários

### NÃO cortar por
- Ansiedade nos primeiros 2–3 dias
- CPL alto nas primeiras 24h (fase de aprendizado)
- Pouca volumetria — aguardar dados suficientes

### Escalar quando
- Conversas qualificadas e consistentes
- CPL dentro da meta por 5+ dias
- Agendamentos ou fechamentos confirmados
- CTR e CPC estáveis após aumento

---

## CONFIGURAÇÃO WHATSAPP ADS — REQUISITOS

Para usar `destination_type: WHATSAPP` com `optimization_goal: CONVERSATIONS`:

1. **Número WhatsApp Business** (não pessoal) vinculado à Página do Facebook
2. **Página do Facebook** conectada à conta de anúncios
3. **Objetivo de campanha:** OUTCOME_ENGAGEMENT (ideal) ou OUTCOME_TRAFFIC
4. **URL de fallback:** `https://wa.me/NUMERO?text=MENSAGEM_CODIFICADA`

### Como vincular número Business à Página
1. Baixar WhatsApp Business App
2. Converter número ou usar número dedicado Business
3. Acessar: Business Manager → Configurações → Contas do WhatsApp
4. Vincular à Página específica

### Mensagem de abertura recomendada
```
Quero+saber+mais+sobre+a+Cartomância+Sistêmica
```
URL completa: `https://wa.me/55XXXXXXXXXXX?text=Quero+saber+mais+sobre+a+Cartomância+Sistêmica`

---

## UPLOAD DE IMAGENS — FLUXO

A API Meta não suporta upload de arquivo local via MCP.

### Opção 1 — Via Ads Manager (manual)
1. Ads Manager → Biblioteca de Imagens → Upload
2. Copiar hash gerado
3. Usar hash no `ads_create_creative`

### Opção 2 — Via Graph API com token
```bash
curl -X POST \
  "https://graph.facebook.com/v19.0/act_ACCOUNT_ID/adimages" \
  -F "filename=@/caminho/da/imagem.jpeg" \
  -F "access_token=TOKEN"
```
Retorna `hash` para usar no criativo.

### Opção 3 — Via image_url pública
```json
{ "image_url": "https://url-publica-da-imagem.jpg" }
```
Requer que a imagem esteja hospedada em servidor público acessível.

---

## ESTRUTURA DE CONTA — PROJETO GA

| Campo | Valor |
|---|---|
| Business ID | 507655071209387 |
| Ad Account ID | 605257748612701 |
| Página ID | 103620069213113 |
| Pixel ID | 1259363312489132 |
| Budget máximo ativo | R$25/dia |
| Moeda | BRL |

---

## AÇÕES PERMITIDAS SEM CONFIRMAÇÃO
- Ler métricas e auditar campanhas
- Criar relatórios e diagnósticos
- Gerar copies e planos de criativos
- Criar estruturas em PAUSED

## AÇÕES QUE EXIGEM CONFIRMAÇÃO
Sempre apresentar no formato:
```
AÇÃO PROPOSTA:
IMPACTO ESPERADO:
RISCO:
COMO REVERTER:
CONFIRMAR COM: executar
```
- Pausar ou ativar campanha, conjunto ou anúncio
- Alterar budget
- Alterar público ou objetivo
- Publicar anúncio novo
- Excluir ativo
