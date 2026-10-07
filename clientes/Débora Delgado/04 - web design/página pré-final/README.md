# README — Página "Seu Eixo" + Stack de Tracking + Dashboard do Ecossistema

> Índice e documentação do que foi construído (jul/2026). Estado detalhado por sessão: `DIARIO-DE-BORDO.md` (raiz do projeto). Fonte de decisão: `DECISOES.md` (raiz).

---

## 1. O que foi construído (visão geral)

Um funil completo para o Workshop "Seu Eixo", que evoluiu para o **hub do ecossistema Débora**:

1. **Página de vendas** (`index deployado/index-v2.html`) — landing com popup de captura, escolha de turma (2 turmas × 3 lotes = 6 checkouts), prefill de nome/e-mail no checkout PagTrust, captura de lead com UTM.
2. **Stack de rastreamento** (GTM `GTM-W6VQGXQC` → Meta Pixel `4060021607461178` + GA4 `G-LWBCJQZB9M`), via dataLayer com `event_id` (dedup pronta p/ CAPI).
3. **Captura de leads + vendas** via Google Apps Script (Web App) + Google Sheet.
4. **Dashboard do funil/ecossistema** (`painel/index.html`) — tempo real, lê a planilha via endpoint.

---

## 2. Mapa da pasta

```
página pré-final/
├── README.md                    ← este arquivo
│
├── index deployado/             ← A PÁGINA (artefato vivo)
│   ├── index-v2.html            ← ATUAL — popup + prefill + GTM + dataLayer. Sobe na Hostinger.
│   ├── index-v2.backup-pre-popup.html  ← backup antes do popup (SHA no diário)
│   └── index.html               ← versão anterior (T1-T6), referência
│
├── painel/                      ← O DASHBOARD (artefato vivo)
│   └── index.html               ← sobe em deboradelgado.space/painel/ (estático, NÃO no WordPress)
│
├── tracking/                    ← Rastreamento (GTM + GA4 + CAPI)
│   ├── STACK-TRACKING-GTM-CAPI.md   ← arquitetura da stack
│   ├── GUIA-IMPORT-GTM.md           ← como importar o container Meta
│   ├── gtm-container-import.json    ← import Meta Pixel (JÁ IMPORTADO/publicado)
│   ├── GUIA-IMPORT-GA4.md           ← como importar as tags GA4
│   └── gtm-ga4-import.json          ← import GA4 (a importar)
│
├── dashboard/                   ← Backend do dashboard
│   └── APPS-SCRIPT-ECOSSISTEMA-V3.md ← código Apps Script ATUAL (payload real PagTrust)
│
├── pagina/                      ← Docs da landing
│   ├── SPEC-POPUP-CHECKOUT-TURMA.md  ← spec técnica do popup/prefill
│   ├── DEPLOY-HOSTINGER.md           ← como subir a página na Hostinger
│   ├── COPY-REESCRITA-PAGINA-V2.md   ← copy V2 (aguarda aprovação Débora)
│   ├── PAGINA-EXPLICADA-SEU-EIXO.md  ← mapa dobra a dobra p/ aprovação
│   ├── ESTRUTURA-PAGINA-DEPLOYADA.md ← extração da estrutura da página
│   ├── AUDITORIA-FEEDBACK-DEBORA.md  ← auditoria dos 5 áudios de feedback
│   └── TASK-EXECUTOR-POPUP-CHECKOUT.md ← QA do popup (p/ Codex/Sonnet)
│
└── _arquivo/                    ← Obsoleto (não usar; mantido p/ histórico)
    ├── DEPLOY-WIX.md            ← análise Wix (substituída por Hostinger)
    ├── TASKS-SONNET-PAGINA.md   ← tasks antigas da página
    ├── apps-script-antigo/      ← Apps Script v1 (leads) e v2 (funil) — substituídos pelo v3
    └── audios/                  ← 5 áudios de feedback + transcrições (já auditados)
```

---

## 3. Arquitetura de dados (uma fonte, vários destinos)

```
POPUP (deboradelgado.space) ──dataLayer──► GTM ──► Meta Pixel + GA4
        │                                         (event_id p/ dedup)
        └──fetch──► Apps Script /exec ◄──webhook── PagTrust
                         │                         (venda/pix/assinatura/abandono)
                         ▼
              Google Sheet (Leads · Vendas · CicloVida)
                         │
                         ▼
              Dashboard (painel/index.html · ?report=funnel)
```

- **URL do Apps Script:** `https://script.google.com/macros/s/AKfycbykXCnjSUFUNSUwAEJxS1XIwKxFg-kvFTISRMua8TsMsgre0GWZbcmLtxlVtA6oqx-hJg/exec` (mesma p/ página, webhook e dashboard).
- **Atualizar o script SEM trocar a URL:** Implantar → Gerenciar implantações → editar → Nova versão.

---

## 4. Identificadores (referência rápida)

| Item | Valor |
|---|---|
| Domínio da página | `deboradelgado.space` (Hostinger) |
| Dashboard | `deboradelgado.space/painel/` (estático, senha no código) |
| GTM | `GTM-W6VQGXQC` (conta Débora, workspace "API WEB - Débora") |
| Meta Pixel | `4060021607461178` |
| GA4 | `G-LWBCJQZB9M` (stream "Fluxo do site - Débora") |
| Checkouts PagTrust | 6 links em `../LINKS CHECKOUTS - LOTES 1, 2 e 3.md` |

---

## 5. Estado / pendências (ver diário p/ detalhe)

**Pronto:** página com popup+prefill+dataLayer · Meta Pixel importado e publicado no GTM · Apps Script v3 escrito · dashboard do ecossistema.

**Pendente (humano — Victor):**
- Colar Apps Script v3 → Nova versão da mesma implantação → testar (abas Vendas/CicloVida).
- Subir `painel/index.html` em `public_html/painel/` da Hostinger (NÃO WordPress) + trocar a senha.
- Importar `tracking/gtm-ga4-import.json` no GTM (Combinar→Substituir) → publicar.
- Subir `index deployado/index-v2.html` como página do site.
- Configurar webhook PagTrust (já feito no teste) → validar dados reais.
- Guardar o token do webhook (validação de assinatura — melhoria futura).

**Pendente (Débora):** aprovar a copy V2 (`pagina/COPY-REESCRITA-PAGINA-V2.md`).

**Fase 2 (quando escalar):** CAPI Gateway grátis do Meta (Purchase via webhook) · métricas de ad via App Meta (Marketing API) → CAC/ROAS no dashboard.

---

## 6. Segurança (lembretes)
- **Token do webhook PagTrust** e **token CAPI**: credenciais — guardar em gerenciador de senhas, não em arquivo/chat. Recomendado revogar/rotacionar os que trafegaram por canais inseguros.
- **Senha do dashboard** (`painel/index.html`, `var SENHA`): proteção client-side simples — trocar do placeholder; não é auth forte.
