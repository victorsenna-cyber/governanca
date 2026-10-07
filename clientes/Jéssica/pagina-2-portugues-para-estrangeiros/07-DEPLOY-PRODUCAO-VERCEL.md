# Deploy de produção na Vercel

**Data:** 2026-08-11

**Status:** `READY`

## Destino

- projeto: `jessica-portugues-brasileiro`
- projeto ID: `prj_NbWiibOArPQIe0ceB1uNat9SXhJi`
- deployment ID: `dpl_EwkBtTwXNmP6qnbfWdrcf5YEujNg`
- deployment imutável: `https://jessica-portugues-brasileiro-alm9vlo6b.vercel.app`
- alias estável de produção: `https://jessica-portugues-brasileiro.vercel.app`
- inspector: `https://vercel.com/victorsennacosta-4764s-projects/jessica-portugues-brasileiro/EwkBtTwXNmP6qnbfWdrcf5YEujNg`
- equipe: `victorsennacosta-4764s-projects`
- framework: estático
- deployment anterior: `dpl_BdtwcbH5rSwdDrBo2T1GDzgG6NEL`

## Procedimento

1. O bundle `site` foi copiado para uma pasta temporária fora da origem.
2. A cópia foi comparada por SHA-256 com os cinco arquivos públicos da origem, sem divergências.
3. A cópia foi vinculada ao projeto isolado `jessica-portugues-brasileiro`.
4. O deployment foi publicado como produção e o alias estável foi confirmado.
5. O diretório canônico permaneceu sem metadados `.vercel/`.

### Hashes dos arquivos alterados

| Arquivo | SHA-256 |
|---|---|
| `index.html` | `508E216BA67084E19F66A59DF40994ACB3A2E4C5F412CF23FC932ACBBA7EDBAA` |
| `script.js` | `11D00A7B2B9603872F9B1FD6845FE68EEC0BB6E479A4461CD49DE63903EC9481` |
| `styles.css` | `ADFEAF383346CE7EEF7B529E7032D0C925DA3EE40B60BCE5EBEE019A4BC14BB0` |

## Verificação de produção

| Gate | Evidência | Resultado |
|---|---|---|
| deployment | `target=production`, `status=Ready` | passou |
| HTTP | URL canônica em `200 OK` | passou |
| preços | nenhum preço, moeda ou condição de pagamento em inglês ou PT-BR | passou |
| produtos | aula avulsa, plano mensal e plano semestral preservados | passou |
| WhatsApp | um CTA direto para `wa.me/553183015499`, na oferta | passou |
| roteamento | cinco CTAs internos apontando para `#classes` | passou |
| idioma | menu, oferta, FAQ e mensagem do WhatsApp localizados em inglês e PT-BR | passou |
| responsividade | mobile sem overflow horizontal | passou |
| navegador | zero erro de página | passou |
| runtime | nenhum log de erro; site estático sem invocações | passou |
| legado | nenhum CTA abre o diálogo antigo | passou |
| número anterior | ausente do HTML e JavaScript | passou |
| isolamento | diretório canônico sem `.vercel/` | passou |

## Limite comercial preservado

O WhatsApp está ativo exclusivamente no CTA da oferta. A página continua sem endpoint, analytics, CRM, Apps Script ou armazenamento de dados. A troca integral entre inglês e PT-BR permanece ativa.
