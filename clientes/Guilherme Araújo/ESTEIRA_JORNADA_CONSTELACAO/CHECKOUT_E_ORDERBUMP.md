# CHECKOUT + ORDER BUMP + FLUXO DE UPSELL — especificação de configuração

> O checkout roda em plataforma externa (padrão do ecossistema: **PagTrust** —
> `checkout.pagtrust.com.br`). Order bump e one-click são **configurados na plataforma**, não em HTML.
> Este doc é o blueprint do que configurar. As páginas de upsell/downsell/obrigado são HTML neste projeto.

---

## 1. PRODUTOS A CADASTRAR NA PLATAFORMA

| Produto | Código | Preço | Tipo | Onde aparece |
|---|---|---|---|---|
| A Primeira Jornada | JC | **R$47** | principal | checkout da LP |
| Roteiros & Templates da Jornada | JC+ | **+R$27** | order bump | dentro do checkout JC |
| Constelador que Vende | CV | **R$397** (12x ~R$39 / Pix c/ desc.) | upsell 1-click | pós-compra JC |
| CV Essencial | CV- | **R$197** (ou parcelado) | downsell | recusa do upsell |

> Preços a confirmar com Guilherme (referências de `03_ESTEIRA_E_OFERTAS.md`).

---

## 2. ORDER BUMP (no checkout do JC)
Caixa marcável, destacada, acima do botão de pagamento.

**Copy do bump:**
> ☐ **Adicione os Roteiros & Templates da Jornada por +R$27**
> Roteiros prontos de cada sessão, mensagens de WhatsApp para o entre-sessões e modelo de proposta de
> jornada — tudo pronto para você usar no próximo atendimento.

- Meta de take: **30–40%**.
- Regra: o bump resolve o MESMO problema do JC (execução da jornada). Não introduzir novo tema.

---

## 3. FLUXO PÓS-COMPRA (redirects)

```
LP (R$47) ──▶ CHECKOUT JC (+ order bump)
                     │ compra aprovada
                     ▼
            UPSELL — "Constelador que Vende" (R$397)   [/UPSELL_CONSTELADOR_QUE_VENDE/]
              │ aceita (1-click)            │ recusa
              ▼                              ▼
   cobra CV → OBRIGADO            DOWNSELL — "CV Essencial" (R$197)  [/DOWNSELL_CV_ESSENCIAL/]
                                     │ aceita        │ recusa
                                     ▼               ▼
                              cobra CV- → OBRIGADO   OBRIGADO   [/OBRIGADO/]
```

### URLs a conectar (preencher quando publicado)
- `CHECKOUT_URL` (JC) → usado na LP (`LP_PRIMEIRA_JORNADA/index.html`, constante única).
- Redirect pós-compra JC → página de **UPSELL**.
- Botão "aceitar" do upsell → endpoint **1-click** do CV (ou 2º checkout do CV) → depois **OBRIGADO**.
- Botão "recusar" do upsell → página de **DOWNSELL**.
- Aceitar downsell → 1-click/checkout CV- → **OBRIGADO**. Recusar → **OBRIGADO**.

> **Confirmar capacidade da plataforma:** o ideal é **1-click real** (não re-digitar cartão). Se o PagTrust
> não suportar OTO 1-click, o botão de aceite leva a um 2º checkout pré-preenchido. As páginas de
> upsell/downsell já funcionam nos dois modos (basta apontar a constante `NEXT_URL`).

---

## 4. TRACKING (Pixel `1259363302489132` + GTM `GTM-5KFCDH6N` + GA4)
Disparar **Purchase separado por produto**, com value/currency, para ler a economia da esteira (ver `11_METRICAS_KPI.md`):

| Evento | Quando | value | content_name |
|---|---|---|---|
| Purchase | compra JC aprovada | 47 | A Primeira Jornada |
| Purchase | order bump aprovado | 27 | Roteiros & Templates da Jornada |
| Purchase | upsell CV aprovado | 397 | Constelador que Vende |
| Purchase | downsell CV- aprovado | 197 | CV Essencial |

- Configurar os eventos de Purchase **na plataforma de checkout** (pixel/CAPI do PagTrust) — é onde a
  compra realmente acontece. As páginas de upsell/downsell disparam apenas eventos auxiliares
  (`upsell_view`, `upsell_accept`, `upsell_decline`) para o dataLayer.
- Persistir UTMs do clique da LP até o checkout (hidden fields). Deduplicação Pixel↔CAPI se houver server-side.

---

## 5. CHECKLIST DE CONFIGURAÇÃO
- [ ] Cadastrar JC (R$47) e gerar `CHECKOUT_URL`.
- [ ] Configurar order bump JC+ (R$27) com a copy acima.
- [ ] Cadastrar CV (R$397) e CV- (R$197).
- [ ] Ativar fluxo de upsell/downsell (1-click se disponível) e os redirects.
- [ ] Apontar `CHECKOUT_URL` na LP e `NEXT_URL` nas páginas de upsell/downsell.
- [ ] Configurar Purchase por produto (pixel/CAPI da plataforma).
- [ ] Teste de ponta a ponta com compra real (JC + bump → upsell → obrigado) e conferir eventos.
- [ ] Confirmar acesso imediato à área de membros após cada compra.
