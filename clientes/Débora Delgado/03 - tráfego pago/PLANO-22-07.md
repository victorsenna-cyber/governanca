# PLANO — 22/07 (relançamento Cenário B + iteração do funil) · Seu Eixo

> ⚠️ **NOTA DE SUPERAÇÃO (27/08/2026).** Este plano foi escrito em 22/07, **antes** da refutação do Victor do mesmo dia. Onde ele diz que a campanha A rodou com "tracking quebrado", **leia: o tracking estava validado.** A causa real do 0 IC foi **Lead 0** — a página não convertia (140 PageViews, 5 cliques no CTA, 0 inscrições). O pixel PagTrust fora do produto era falha real e foi corrigida, mas não era a causa. Fonte: `LOG-DECISOES.md`, linha "REFUTAÇÃO". **A regra de ouro deste plano continua válida como higiene; o gate que protege verba de verdade é o de conversão.**


> STATUS: VIGENTE · criado 00:05 de 22/07 (Cowork) · fonte: call Victor+Débora 21/07 + incidente de tracking 21/07.
> **Contexto:** Cenário B AUTORIZADO pela Débora (R$3.500 total · diária ~R$117 · até 3 conjuntos · thresholds normais — kill em 3 dias). Causa-raiz do 0 IC corrigida (pixel PagTrust agora no produto). Ver LOG-DECISOES 21/07.
> **REGRA DE OURO:** testar o tracking end-to-end ANTES de deixar a campanha B gastar. Não repetir 18–21/07 (3 dias / R$233 sem sinal de conversão chegando à Meta).

---

## A. Débora (entrega principal)
- [ ] **Gravar + enviar o Bloco 1 de vídeos** — V1 ruminação (N1) · V2 custo do conflito (N2) · V3 TRES/mecanismo (N3), pelos `ROTEIROS-VIDEO-DEBORA.md` v2. É a dependência dela para a campanha iterar.

## B. Funil / página (Victor) — ANTES do tráfego
- [ ] **Confirmar as versões vigentes prontas** (página v4 · dashboard v4 · App Script v5) — validar lineage antes de publicar (não subir versão errada).
- [ ] **Iterar a velocidade da página v4** antes de subir: imagens comprimidas/webp, lazy-load, minificar CSS/JS, reduzir render-blocking. Medir antes/depois (PageSpeed/Lighthouse).
- [ ] **Publicar o App Script v5** (nova versão do MESMO Web App `/exec`) — tracking iterado.
- [ ] **Subir a página v4** apontando para o `/exec` v5 + **subir o dashboard v4**.
- [ ] **Re-testar o tracking end-to-end** (gate do `04 - web design/CHECKLIST-CRIACAO-PAGINAS.md` §1): inscrição + checkout de teste → **Lead → InitiateCheckout → Purchase** ticando no dashboard **e** no Meta Events Manager (Test Events). Só liberar tráfego se passar.

## C. Meta / infra de dados (Victor)
- [ ] **Verificação da empresa (Business Verification) da Débora no Meta** — destravar o App/API para os **dados de anúncios chegarem ao dashboard** (campo `ads` hoje `null` até a Meta conectar ao script, §2a do protocolo). Confere App Review/permissões da API de insights/IG que ficaram pendentes na montagem.

## D. Campanha → Cenário B (Victor)
- [ ] Criar públicos: **Purchase-180d** (exclusão) · **retarget-morno** (ENG-IG-FB-180d + SITE-30d, excl. Purchase-180d) · **lembrete-quente** (IC-7d + SITE-7d, excl. Purchase-180d).
- [ ] Montar os conjuntos B: **broad-br** (já existe) + **retarget-morno** + **lembrete-quente**, com mínimos por conjunto; **diária ~R$117**; thresholds normais.
  - Nota: retarget-morno só entrega com volume de público (~23/07); lembrete-quente é intermitente (janelas 25-28/07 etc.). Podem subir PAUSADOS e ligar na hora certa.
- [ ] Adicionar os **vídeos V1/V2/V3** ao broad quando a Débora enviar (Media Library → variações de anúncio).
- [ ] **Ativar a campanha B** (3 cliques) — SÓ depois do teste de tracking (bloco B) passar. Troca a página por baixo e reseta aprendizado → tratar como relançamento limpo (o A rodou sem conversão/tracking quebrado, então sem perda real).

---

## Ordem crítica
velocidade da página → publicar App Script v5 → subir página v4 + dashboard v4 → **teste de tracking end-to-end** → verificação Meta (paralelo) → montar públicos/conjuntos B → adicionar vídeos → **ativar B**.
**Tracking testado ANTES de ativar, sempre.**

## Pendências herdadas (não bloqueiam, mas conferir)
- Análise da página (itens de conversão p/ "bater 100%") — aguardando o texto legível da análise → entra no CHECKLIST-CRIACAO-PAGINAS §3.
- Fix "talentos" no card 1 da página (gate humano herdado do PLANO-FUNIL §10).
