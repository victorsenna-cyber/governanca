# Fase futura — integrar gasto de ad (Meta Marketing API) ao dashboard

> O dashboard já é construído com o **espaço pronto** p/ os dados de ad (ver `TASK-CODEX-DASHBOARD-REDESIGN.md` → bloco `ads`). Este doc mapeia como o gasto entra quando o App Meta estiver pronto. **Não bloqueia nada agora.**

## Arquitetura (mesma filosofia: Apps Script = hub)
```
App Meta (Marketing API)  ──►  Apps Script (aba "Ads")  ──►  doGet(?report=funnel).ads
   gasto/impressões/cliques      atualizado 1x/dia            dashboard renderiza CAC/ROAS
   por campanha (utm_campaign)   (trigger temporal)
```

## Arquitetura do App Meta — 2 opções (Victor decide na hora de criar)

**Fato (confirmado):** um App Meta só atende **várias contas de anúncio**. O que decide se precisa de App Review/verificação é ONDE as contas estão:

### Opção A — App no BM da agência (Continuum) · RECOMENDADA p/ escala
- Cria **1 App no BM da Continuum** (seu) + System User token com `ads_read`.
- **Verifica só o SEU BM, uma vez.**
- Adiciona as contas de anúncio dos clientes (Débora + futuros) **ao seu BM** (Contas → Contas de anúncio).
- O mesmo App + token puxa dados de **todas** as contas (basta o `ad_account_id` de cada uma).
- **Sem App Review** e **sem verificar o BM de cada cliente** — é "ferramenta interna contra as suas próprias contas".
- ✅ Verifica 1×, replica pra sempre. Destrava a Débora agora (não precisa verificar o BM dela).
- ⚠️ Requer que as contas de anúncio dos clientes estejam sob o seu BM (modelo de agência).

### Opção B — App no BM de cada cliente (por cliente)
- Cada cliente tem App/token próprio; ou o cliente te dá acesso parceiro ao BM dele.
- **Exige App Review + Business Verification** quando o App acessa contas de OUTRO business (fora do seu BM).
- ⚠️ Trava agora (precisa verificar o BM da Débora) e **não replica** — refaz o fluxo a cada cliente.
- Só faz sentido se houver exigência de separação/isolamento por cliente.

> **Recomendação:** Opção A. Verifica o BM da Continuum uma vez, vira o padrão de agência. A Débora entra sem verificação própria. Decisão final do Victor quando for criar o App.

## Passos (quando o App Meta existir)
1. **Criar App no Meta for Developers** com produto **Marketing API** e gerar um **token de sistema** (System User token, longa duração) com permissão `ads_read`.
2. **No Apps Script**, adicionar uma função `fetchMetaAds_()` que chama a Graph API:
   `GET /v19.0/act_<AD_ACCOUNT_ID>/insights?fields=campaign_name,spend,impressions,clicks&level=campaign&time_range=...&access_token=<TOKEN>`
   e grava/atualiza a aba **`Ads`** (colunas: date, campaign_name, spend, impressions, clicks).
3. **Trigger temporal** no Apps Script (1×/dia, madrugada) roda `fetchMetaAds_()`. Token fica em `PropertiesService` (Script Properties), **não** hardcoded.
4. **`buildFunnel_()`** passa a incluir o bloco `ads`:
   ```js
   ads: { spend_total: <soma>, porCampanha: { '<campaign>': { spend, impressions, clicks } } }
   ```
   O dashboard já sabe renderizar isso (CAC = spend/vendas, ROAS = receita/spend, por campanha cruzando com `porUtm`).

## Cruzamento com o funil (a chave da atribuição)
- O lead já grava `utm_campaign` (do popup). A venda também (via webhook `origin.utmcampaign`).
- A aba `Ads` traz gasto por `campaign_name`. **Casar `utm_campaign` (nosso) com `campaign_name` (Meta)** — nomear as campanhas no Meta igual ao utm_campaign evita ambiguidade. Documentar a convenção de nomes com o Victor.

## Segurança
- Token de sistema do Meta em **Script Properties** (Apps Script), nunca no HTML nem no chat.
- `ads_read` é suficiente (só leitura). Não pedir permissão de escrita.

## Via DECIDIDA (11/07): Apps Script → Marketing API direto
Victor optou por **puxar a Marketing API pelo próprio Apps Script** (esta rota, itens 1–4 acima). Motivo: custo zero, dados no domínio próprio, front 100% livre (dashboard próprio). Sem terceiros.

## Alternativas descartadas
- **Looker Studio: FORA.** Não aceita import de template por arquivo (Linking API só duplica relatório já criado à mão; sem JSON import). Como o Victor condicionou "só se der pra subir template e Claude criar", e isso não é possível, Looker sai. Também prenderia ao Google e limitaria a customização do front.
- **Conector pago (Supermetrics/Windsor):** viável mas tem mensalidade e é menos custom. Reservado como plano B se um dia precisar de muitos canais sem manutenção.
