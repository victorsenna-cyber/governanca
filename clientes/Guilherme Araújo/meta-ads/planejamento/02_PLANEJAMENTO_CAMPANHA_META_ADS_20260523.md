# 02_PLANEJAMENTO_CAMPANHA_META_ADS_20260523.md
Gerado em: 2026-05-23 | Status: AGUARDANDO APROVAÇÃO

---

## RACIONAL ESTRATÉGICO

### Por que OUTCOME_TRAFFIC e não OUTCOME_SALES?

O pixel tem somente PageView. Rodar OUTCOME_SALES sem evento de compra configurado faz o algoritmo otimizar para quem clica, não para quem compra. O resultado seria CPM e CPC similar ao de tráfego, porém com fase de aprendizagem indefinida e sem dado de CPA real.

OUTCOME_TRAFFIC com otimização LANDING_PAGE_VIEWS:
- Roda imediatamente
- Gera PageViews reais na LP (pixel aprende)
- Constrói audiência de visitantes para remarketing futuro
- Testa criativos e público antes de escalar para conversão
- Custo menor por clique qualificado versus tráfego para perfil

### Por que 1 conjunto e não 2?

Com R$25/dia, 2 conjuntos = R$12,50 cada. Abaixo de R$15/conjunto, o algoritmo tem velocidade de aprendizagem muito lenta. 1 conjunto com R$25 concentra o orçamento, acelera aprendizagem e evita canibalização de audiência.

### Por que reutilizar o público INT_ESPIRITUALIDADE?

O público interesse espiritualidade/tarot/cartomancia 23-55 BR já gerou CTR de 5.10% a 13.02% na campanha de perfil. É o público validado disponível. Reutilizá-lo com destino LP testa se o mesmo perfil que clicava para o perfil converte em visita à página.

### Por que priorizar o REELS?

CTR de 13.02% em tráfego para perfil é excepcional. Indica que o formato Reels + ângulo "A Carta do Julgamento" captura atenção com alta eficiência nesse público. Redirecionar o mesmo criativo para LP testará se a intenção de clique se converte em visita qualificada.

---

## ESTRUTURA RECOMENDADA

```
CAMPANHA
GA|TOFU|CS|TRAFEGO-LP|META|20260523
  Objetivo: OUTCOME_TRAFFIC
  Orçamento: ABO (no nível do conjunto)
  
  CONJUNTO
  AS|CS|INT-ESPIRITUALIDADE|BR|23-55|AUTO|20260523
    Budget: R$25/dia
    Otimização: LANDING_PAGE_VIEWS
    Público: Interesses espiritualidade/tarot/cartomancia/constelação
    Geo: Brasil
    Idade: 23-55
    Posicionamento: Automático
    
    ANÚNCIO 1 (prioridade)
    AD|CARTA-JULGAMENTO|REELS|VIDEO|VER-MAIS|20260523
      Criativo: REELS_A-CARTA-DO-JULGAMENTO (creative ID: 1297480015784881)
      Destino: professorguilhermearaujo.com.br
      
    ANÚNCIO 2
    AD|ATRACAO-ICP|POST|IMAGEM|SAIBA-MAIS|20260523
      Criativo: POST_ATRAÇÃO_ICP (creative ID: 951208507694438)
      Destino: professorguilhermearaujo.com.br
```

---

## JUSTIFICATIVA DA ESTRUTURA

| Decisão | Justificativa |
|---|---|
| 1 campanha | Orçamento insuficiente para múltiplas campanhas |
| 1 conjunto | Concentrar R$25 em 1 conjunto acelera aprendizagem |
| ABO no conjunto | Controle direto do budget sem dispersão por CBO |
| 2 anúncios | Mínimo para teste A/B criativo sem fragmentar verba |
| Posicionamento automático | Permite Meta otimizar entre Feed, Stories e Reels sem custo extra de estrutura |
| Interesse espiritualidade | Público já validado com CTR real na conta |
| Idade 23-55 BR | Já validado — faixa responsiva ao conteúdo CS |

---

## LÓGICA DE PÚBLICO

**Interesses sugeridos para o conjunto:**
- Tarô / Tarot
- Cartomancia
- Espiritualidade
- Constelação Familiar
- Autoconhecimento
- Desenvolvimento pessoal
- Terapia holística
- Arcanos

**Exclusões recomendadas:**
- Engajados no perfil (para evitar sobreposição com audiência orgânica — mas só se audiência personalizada disponível)

**Sem lookalike nesta fase:** não há dados de compradores para criar fonte de LAL.

---

## LÓGICA DE CRIATIVOS

| Prioridade | Anúncio | Criativo | Formato | CTR histórico | Expectativa |
|---|---|---|---|---|---|
| 1 | AD|CARTA-JULGAMENTO | REELS "A Carta do Julgamento" | Vídeo/Reels | 13,02% (para perfil) | Melhor performer |
| 2 | AD|ATRACAO-ICP | POST_ATRAÇÃO_ICP | Imagem/Feed | 4,58% (para perfil) | Controle |

**Nota crítica:** Os criativos atualmente apontam para o perfil do Instagram. Para a nova campanha, devem ser duplicados/recriados apontando para `professorguilhermearaujo.com.br`. Verificar se a API permite reuso do creative ID com nova URL ou se é necessário criar novo criativo.

---

## LÓGICA DE OTIMIZAÇÃO

| Campo | Configuração |
|---|---|
| Evento de otimização | LANDING_PAGE_VIEWS |
| Estratégia de lance | Menor custo (sem bid cap na fase de aprendizagem) |
| Janela de atribuição | 7-day click, 1-day view |
| Período mínimo de aprendizagem | 7 dias / 50 LPVs |

---

## DISTRIBUIÇÃO DE BUDGET

| Nível | Budget | Tipo |
|---|---|---|
| Campanha | — | ABO (budget no conjunto) |
| Conjunto único | R$25,00/dia | ABO fixo |
| **TOTAL DIÁRIO** | **R$25,00** | — |

Nenhum gasto adicional ultrapassará o limite de R$25/dia.

---

## ESTRUTURA DE UTMs

```
URL final: https://professorguilhermearaujo.com.br
UTMs:
  utm_source=facebook
  utm_medium=paid_social
  utm_campaign=GA_TOFU_CS_TRAFEGO-LP_20260523
  utm_content={{ad.name}}
  utm_term={{adset.name}}
```

URL completa para o anúncio 1:
```
https://professorguilhermearaujo.com.br?utm_source=facebook&utm_medium=paid_social&utm_campaign=GA_TOFU_CS_TRAFEGO-LP_20260523&utm_content=AD_CARTA-JULGAMENTO_REELS_VIDEO_VER-MAIS_20260523&utm_term=AS_CS_INT-ESPIRITUALIDADE_BR_23-55_AUTO_20260523
```

URL completa para o anúncio 2:
```
https://professorguilhermearaujo.com.br?utm_source=facebook&utm_medium=paid_social&utm_campaign=GA_TOFU_CS_TRAFEGO-LP_20260523&utm_content=AD_ATRACAO-ICP_POST_IMAGEM_SAIBA-MAIS_20260523&utm_term=AS_CS_INT-ESPIRITUALIDADE_BR_23-55_AUTO_20260523
```

---

## HIPÓTESES DE PERFORMANCE

| Hipótese | Base | Validação em |
|---|---|---|
| REELS terá CTR link >2% | CTR 13% para perfil indica criativo forte | 3 dias / R$10 gastos |
| CPC link abaixo de R$2,50 | CPM ~R$14 com CTR 2% = ~R$0,70/clique | 5 dias |
| Frequência abaixo de 2 em 30 dias | Público amplo (interesse BR) | Semanal |
| Pixel atingirá 50 LPVs em ~7 dias | R$25/dia + ~2 LPV/R$1 esperado | Semana 1 |

---

## RISCOS

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Criativo de perfil não converte em clique para LP | Média | 2 criativos testados em paralelo |
| CPC link acima de R$5,00 | Média | Revisar ângulo do criativo ou público após R$30 gastos |
| Pixel sem evento de compra impede aprendizagem real | Alta | Já documentado — campanha é ponte enquanto eventos são configurados |
| Frequência alta em público pequeno | Baixa | Público interesse BR 23-55 é amplo |
| Rejeição de criativo por política Meta | Baixa | Criativos já rodaram na conta sem rejeição |

---

## PLANO DE MONITORAMENTO

### Dia 1-3 (fase inicial)
- Verificar entrega (status: learning)
- CTR link: alerta se abaixo de 0,8%
- CPM: alerta se acima de R$30
- Verificar se pixel está disparando PageView na LP durante a campanha

### Dia 4-7 (aprendizagem)
- Comparar CTR dos 2 anúncios
- CPC link de cada anúncio
- Pausar anúncio com CTR abaixo de 50% do melhor

### Semana 2+
- Avaliar saída da fase de aprendizagem
- Se LPVs >= 50: campanha otimizando bem
- Criar audiência de visitantes (se ferramenta disponível)
- Planejar configuração de eventos de conversão na LP

---

## CRITÉRIOS DE ESCALA

- CTR link acima de 2% por 5 dias → aumentar budget em 20%
- CPC link abaixo de R$2,00 → aumentar budget em 20%
- Frequência abaixo de 2 após 14 dias → aumentar budget em 20%
- Evento Purchase configurado → migrar para OUTCOME_SALES

## CRITÉRIOS DE PAUSA

- Anúncio com CTR link abaixo de 0,5% após R$25 gastos → pausar anúncio
- CPC link acima de R$8,00 após R$30 gastos → pausar conjunto
- Nenhum LPV após 48h com entrega → investigar URL e pixel
