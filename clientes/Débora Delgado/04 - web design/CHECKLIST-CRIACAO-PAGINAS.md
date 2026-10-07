# CHECKLIST — Criação de páginas (tracking + conversão) · Continuum

> STATUS: VIGENTE · criado 21/07 (Cowork, rotina de gestão) · nasce no cliente Débora, **candidato a promover à governança Continuum** (páginas de todos os clientes — alçada Victor).
> Objetivo: toda página de vendas/captura sobe com tracking 100% conectado e com os gates de conversão conferidos, para que nenhuma leitura de performance fique cega. ⚠️ **Correção de fato (27/08):** a versão anterior justificava este checklist com "o furo de 21/07: R$233 sem sinal chegando à Meta". **Isso está errado** — a refutação de 22/07 (`03 - tráfego pago/LOG-DECISOES.md`) validou o tracking e mostrou que o funil morria antes dele (**140 PageViews · 0 Leads**). O checklist continua obrigatório como higiene de instrumentação; **mas o gate que realmente protege verba é o de conversão: página que não gerou 1 inscrição não recebe tráfego pago.**
> Deriva de: incidente 21/07 (pixel global sem produto) · leitura de funil do dashboard · `PLANO-TRACKING-PAGINA-CURSO.md` · `ANALISE-TRACKING-OBRIGADO-PURCHASE.md`.

---

## 1. GATE DE TRACKING (bloqueia publicação E subida de tráfego)

**Regra-mãe (aprendida no incidente 21/07):** um pixel **Ativo/Global** NÃO garante evento no checkout. Na PagTrust o pixel precisa estar **atribuído ao PRODUTO**, não só global — senão a plataforma não envia InitiateCheckout/Purchase à Meta, e a campanha roda cega (0 sinal de conversão → não sai do aprendizado).

Conferir, por produto, antes de subir:

- [ ] **PagTrust → Pixels do PRODUTO:** o Pixel Débora (ID `4060021607461178`) está atribuído a ESTE produto (não apenas em "Pixels Globais").
- [ ] **PagTrust → Token de Acesso (CAPI)** preenchido e válido.
- [ ] **PagTrust → "Eventos de visitas no Checkout"** ATIVO (envia InitiateCheckout).
- [ ] **PagTrust → "Eventos de vendas no Checkout"** ATIVO (envia Purchase na página de Obrigado).
- [ ] **Página → SDK/pixel** dispara PageView, ViewContent, Clique-no-CTA e Lead (conferir no dashboard/funil).
- [ ] **Um único Pixel ID** em toda a jornada (página de vendas + checkout PagTrust + obrigado). GTM vs fbq alinhados — evitar o desync sinalizado no diário 17/07 (v3 usa GTM/dataLayer).
- [ ] **content_name / value** corretos no evento (produto e preço do lote certo, da OFERTA-CANONICA/CALENDARIO).

**Teste end-to-end OBRIGATÓRIO antes de qualquer real de tráfego:** rodar uma inscrição + checkout de teste e confirmar que **Lead → Checkout(IC) → Purchase** ticam nos DOIS lados:
- [ ] no **dashboard** (funil de vendas avança etapa a etapa);
- [ ] no **Meta Events Manager → Test Events** (IC e Purchase chegam do domínio do checkout, via pixel e CAPI).

> Se o teste não ticar Checkout/Purchase, NÃO subir tráfego — a Meta ficaria sem sinal de otimização (foi o que aconteceu 18–21/07).

## 2. GATE DE CONVERSÃO / ESTRUTURA (da leitura de funil)

- [ ] **Heatmap por dobra instrumentado** (dá pra ler onde a página vaza — foi o que permitiu diagnosticar o Hero em 21/07).
- [ ] **Hero (D1) ganha o scroll:** message-match anúncio↔primeira tela, promessa clara na 1ª dobra, velocidade de carga. (Em 21/07, ~68% saíram no Hero — faixa normal p/ tráfego frio, mas é o 1º alvo de iteração quando houver volume.)
- [ ] **CTA visível e coerente** com a dobra de oferta (message match N5).
- [ ] **Não julgar oferta / dobras profundas sem volume + tráfego otimizado** (sinal de IC ativo). Verdito de página/oferta só depois que a Meta tiver conversão pra otimizar.

## 3. A INTEGRAR — itens da "análise da página" (aguardando texto legível)

> Victor enviou (21/07) uma análise da página em print, mas a imagem veio pequena demais (fonte ~155px de largura) para leitura confiável. **Assim que vier em texto ou arquivo**, consolidar aqui os itens específicos de "bater 100%" como checklist acionável (copy, estrutura, prova, objeções, performance, SEO/velocidade — conforme a análise trouxer).

- [ ] _(pendente — colar itens da análise)_

## 4. Registro de incidentes que originaram itens deste checklist

| Data | Incidente | Item gerado |
|---|---|---|
| 21/07 | Pixel PagTrust global mas não atribuído ao produto — falha real, corrigida, **porém não era a causa do 0 IC** (ver 22/07) | §1 regra-mãe + teste end-to-end obrigatório |
| 22/07 | **A causa real:** 3 dias / R$233 / 140 PageViews / **0 Leads**. A página não convertia; 0 IC era consequência. Tracking estava validado. | **gate novo: página sem 1 inscrição comprovada não recebe verba** |
