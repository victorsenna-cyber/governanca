# 11 — MÉTRICAS E KPI

## 1. KPIs POR ETAPA

### Aquisição (Meta Ads)
CPM · CTR link · CPC link · frequência · **LPV rate** (meta ≥80% — ver lição em `../Páginas de vendas`).

### Conversão de front
| Métrica | Definição | Faixa de referência* |
|---|---|---|
| CR LP Low | compras JC / visitas LP | testar; benchmark info-produto baixo ticket 2–8% |
| Take order bump | bumps / compras JC | 30–40% |
| Take upsell (CV) | compras CV / compras JC | 8–15% |
| Take downsell | downsells / recusas upsell | 10–20% |
| **Receita média/comprador (front)** | (rec. JC+bump+CV+down) / compradores JC | acompanhar |
| CPA comprador | gasto / compradores JC | **≤ receita média/comprador** |
| **ROAS de front** | receita front / gasto | **≥ 1,0** (self-liquidating) |

\*Referências de mercado (tripwire/coaches), não metas oficiais. Calibrar com dados reais.

### Ascensão e LTV
Taxa de ascensão low→mid · low/mid→CORE · receita por ascensão · **LTV por comprador** · CAC vs LTV.

### Entrega
Ativação ≤24h · taxa de "primeira vitória" (desenhou 1 jornada) · conclusão · depoimentos coletados.

## 2. MODELO DE LEITURA (o que importa, em ordem)
1. **ROAS de front ≥ 1** → a esteira se paga (objetivo stand-alone). Se <1, agir antes de escalar.
2. Onde vaza: LPV → CR LP → bump → upsell. Atacar o maior vazamento primeiro.
3. CPA comprador vs receita média/comprador → define teto de escala.
4. Ascensão e LTV → ganho de longo prazo (não bloqueia o front).

## 3. METAS DE VALIDAÇÃO (gate para escalar — confirmar números com Guilherme)
- ROAS de front ≥ 1,0 sustentado por ~7 dias.
- Take order bump ≥ 25%.
- Take upsell ≥ 8%.
- LPV ≥ 80% e CR LP dentro/above benchmark.
Atingidos → escalar gradual. Não atingidos → otimizar na ordem (oferta→criativo→copy→público→página).

## 4. INSTRUMENTAÇÃO
- Pixel + GTM + GA4 com eventos por produto (ver 06). Purchase separado por JC/bump/CV/down.
- UTMs persistidos; hidden fields no checkout; registro em CRM/planilha/Supabase.
- Painel simples (planilha) cruzando: campanha → criativo → LP → checkout → bump → upsell → ascensão → receita.

## 5. RITUAIS
- **Diário:** `logs/YYYY-MM-DD.md` (padrão ecossistema).
- **Semanal:** `relatorios/SEMANA-YYYY-MM-DD.md` (padrão ecossistema).
- Uma hipótese, uma variável por ciclo. Registrar resultado e decisão.
