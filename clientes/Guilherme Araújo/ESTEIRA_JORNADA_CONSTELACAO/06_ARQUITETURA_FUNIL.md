# 06 — ARQUITETURA DO FUNIL

## 1. MAPA COMPLETO

```
                    META ADS (TOFU)            ORGÂNICO (autoridade/nutrição)
                          │                              │
            ┌─────────────┴───────────────┐             │
            ▼                              ▼             ▼
   (opção A) LP LOW TICKET          (opção B) AULA GRATUITA ──▶ captura WhatsApp/e-mail
   "A Primeira Jornada" R$47                │                         │
            │                               └──── pitch ──────────────┘
            ▼
   CHECKOUT (R$47)
   └─ ORDER BUMP  +R$27  (Roteiros & Templates)
            │
            ▼ (compra confirmada)
   UPSELL 1  ──▶  "Constelador que Vende" (CV) R$397
            │            │
        (aceita)     (recusa)
            │            ▼
            │      DOWNSELL ── CV Essencial R$197 / parcelado
            │            │
            ▼◀───────────┘
   PÁGINA DE OBRIGADO + ONBOARDING (acesso imediato, 24h)
            │
            ▼
   NUTRIÇÃO (e-mail + WhatsApp) ──▶ PRIMEIRA VITÓRIA (desenhar 1 jornada)
            │
            ▼
   ASCENSÃO: convite + SESSÃO CLAREZA ──▶ Formação CORE (CONST) ──▶ CS / AV / Mentoria
            │
            ▼
   EXPANSÃO: depoimento → indicação (MI5D essencial) → recompra
```

**Decisão em aberto (ver 00, item 3):** começar com **opção A** (direto no low ticket — mais simples, valida
oferta rápido e gera receita já) e adicionar **opção B** (aula gratuita) depois, como camada de volume.
Recomendação: **lançar com A**, testar B na 2ª onda.

---

## 2. PÁGINAS NECESSÁRIAS
| Página | Função | Prioridade |
|---|---|---|
| LP Low (JC) | vender R$47 | P0 |
| Checkout com order bump | aumentar ticket | P0 |
| Upsell 1 (CV R$397) | one-click pós-compra | P0 |
| Downsell (CV R$197) | recuperar recusa | P1 |
| Página de Obrigado + onboarding | ativar acesso | P0 |
| Página Mid stand-alone (CV) | vender CV direto em MOFU | P1 |
| (Opção B) Página de inscrição da aula + página da aula | lead-gen | P2 |
| LP/aplicação CORE | ascensão | usa `../FUNIL_CONSTELACAO` |

> Reaproveitar a arquitetura e o design system das páginas já validadas em `../Páginas de vendas`
> (editorial dark, fontes serif, performance). Atenção à lição de performance/LPV registrada lá.

---

## 3. UPSELL / ORDER BUMP / DOWNSELL — lógica
- **Order bump:** complemento do MESMO problema (execução da jornada). Take-rate alvo 30–40%.
- **Upsell 1 (CV):** o PRÓXIMO problema (vender a jornada). Aparece só para quem comprou o low. One-click.
- **Downsell:** mesma promessa do upsell, barreira menor (preço/parcelamento). Take alvo 10–20% dos que recusaram.
- Nunca empilhar mais de 1 upsell + 1 downsell no front (fricção/cansaço).

---

## 4. EVENTOS E TRACKING (Pixel Meta + GTM + dataLayer)
Padronizar como nas páginas do ecossistema (ver memória `lp-cartomancia-tracking`):
- `PageView` (inline, cedo, sem depender de GTM)
- `ViewContent` (LP low / LP mid) — value e content_name por produto
- `InitiateCheckout` em todo CTA, com `cta_position`
- `AddToCart`/bump quando aplicável
- `Purchase` separado por produto: JC (47), JC+ (bump), CV (397), CV- (197) — com `value`/`currency`
- `Lead` (opção B: inscrição na aula)
- dataLayer espelhando cada evento para o GTM (GTM-5KFCDH6N) e GA4

UTMs persistidos do clique até o checkout (source/medium/campaign/content/id). Hidden fields no checkout.
Deduplicação Pixel↔CAPI se houver server-side.

---

## 5. AUTOMAÇÕES (n8n / e-mail / WhatsApp)
| Gatilho | Ação |
|---|---|
| Compra JC | acesso imediato + sequência de onboarding (24h) + tag origem/campanha |
| Compra CV | trilha de implementação de vendas + convite Sessão Clareza ao fim |
| Não-compra (abandono checkout) | remarketing + e-mail/WhatsApp de recuperação |
| Concluiu 1ª jornada (primeira vitória) | pedido de depoimento (MI5D) |
| Comprador low sem ascensão em X dias | convite para CV / aula / Sessão Clareza |
| Lead da aula (opção B) | nutrição até oferta low/mid |

Registrar tudo em CRM/planilha/Supabase: lead, origem, campanha, criativo, produto, status, receita, ascensão.

---

## 6. PONTE DE ASCENSÃO PARA O CORE
Não vender o CORE de forma fria. Sequência:
1. Entregar valor real no low/mid (primeira vitória).
2. Mostrar o "tamanho do que falta dominar" (a copy do CV aponta para o CORE).
3. Convite para **Sessão Clareza** (diagnóstico, SPIN) → apresentação do caminho CORE.
4. Quem demonstra prontidão entra no funil `../FUNIL_CONSTELACAO`.

---

## 7. KPIs do funil (resumo — detalhe em 11)
LPV rate, CTR link, CPC link, CR da LP low, take do order bump, take do upsell/downsell, **receita média por
comprador (front)**, CPA do comprador, ROAS de front, taxa de ascensão ao CORE, LTV.
