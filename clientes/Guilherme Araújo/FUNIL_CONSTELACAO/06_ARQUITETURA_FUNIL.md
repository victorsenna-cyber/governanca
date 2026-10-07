# 06 — ARQUITETURA DO FUNIL

## 1. MAPA DO FUNIL (ponta a ponta)

```
                    META ADS
        TOFU ─────── MOFU ─────── BOFU/RMKT
          │            │              │
          └──────┬─────┴──────┬───────┘
                 ▼            ▼
        ┌───────────────────────────────┐
        │   PAGINA DE VENDAS DIRETA      │
        │   (long-form + VSL)            │
        │   CTA unico → checkout         │
        └───────────────┬───────────────┘
                        ▼
                ┌──────────────┐
                │   CHECKOUT    │  (Pix / cartao 12x)
                └──────┬───────┘
                       ▼
        ┌──────────────────────────────┐
        │  ONBOARDING (ate 24h)          │
        │  → acesso + primeira aula      │
        │  → grupo/comunidade            │
        └──────────────┬────────────────┘
                       ▼
        PRIMEIRA VITORIA (7–14 dias: 1a jornada-piloto)
                       ▼
        DEPOIMENTO ESTRATEGICO → INDICACAO (MI5D) → UPSELL (AV/Mentoria)
```

## 2. PAGINAS DO FUNIL
| Pagina | Funcao | Status | Referencia |
|---|---|---|---|
| **LP de vendas (CONST)** | Conversao principal | A produzir | copy em 07 |
| **Checkout** | Pagamento | Plataforma existente (PagTrust/ckd) | herdar do ecossistema |
| **Obrigado / Onboarding** | Ativacao em 24h | A produzir (curta) | abaixo |
| **VSL** | Prova de metodo dentro da LP | A gravar (roteiro em 07) | — |

Template visual: **reutilizar o Design System do `../Cartomancia Sistêmica/LP_BLUEPRINT.md`** (cores gold/verde-profundo, Cormorant + Manrope, motion fade-up). Coerencia de marca obrigatoria.

## 3. EVENTOS DE CONVERSAO (pixel / dataset)
| Evento | Disparo | Uso |
|---|---|---|
| PageView | Carregou LP | publico de visitantes |
| ViewContent | 25% scroll ou play VSL | morno / RMKT |
| Lead/InitiateCheckout | Clicou CTA / iniciou checkout | otimizacao + RMKT abandono |
| Purchase | Compra concluida | otimizacao de conversao + lookalike |

> Alterar/criar evento de conversao exige confirmacao (regra do ecossistema).

## 4. PAGINA OBRIGADO / ONBOARDING (estrutura curta)
1. Confirmacao calorosa ("Bem-vinda a Formacao").
2. Proximo passo concreto (acesso + onde comecar).
3. Entrar no grupo/comunidade (link).
4. Expectativa da primeira vitoria (1a jornada-piloto em 7–14 dias).
5. Contato de suporte.

## 5. AUTOMACOES DESEJADAS (n8n / CRM — backlog)
- Compra → tag CRM "Aluno CONST" → sequencia de onboarding (e-mail/WhatsApp).
- Abandono de checkout → RMKT + mensagem WhatsApp.
- Conclusao 1a jornada → pedido de depoimento estrategico.
- Depoimento → convite para programa de indicacao (MI5D).

## 6. INTEGRACOES (heranca do ecossistema)
- **CRM:** estagios novo lead → checkout iniciado → comprou → onboarding → primeira vitoria → depoimento → indicacao.
- **WhatsApp:** palavra-chave de campanha, mensagem inicial, tag de origem, script de suporte.
- **ClickUp:** cada otimizacao aprovada vira task (campanha, problema, acao, responsavel, prazo, KPI, status).
- **Planilha/Supabase:** registrar lead, origem, campanha, criativo, status, receita, indicacao.

## 7. FLUXO DE DECISAO DE TRAFEGO
```
Criativo com CTR ok + LP com ViewContent baixo  → revisar promessa/carregamento da LP
ViewContent ok + InitiateCheckout baixo          → revisar oferta/prova/preco
InitiateCheckout ok + Purchase baixo             → revisar checkout/garantia/objecao
Tudo ok e estavel apos aumento gradual            → escalar
```
