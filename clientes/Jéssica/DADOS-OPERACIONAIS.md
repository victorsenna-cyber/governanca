# Dados operacionais das páginas

> **Fontes:** decisões de Victor em 24/07/2026 + conversa da Jéssica em 28/07/2026
> **Status:** Página 1 publicada em produção como prévia segura; ativação do WhatsApp e da planilha pendente

## Deploy da Página 1 — 30/07/2026

- **URL canônica:** https://jessica-emotional-speaking.vercel.app
- **Vercel:** projeto `jessica-emotional-speaking`
- **Estado:** `READY`, target `production`
- **Conversão:** inativa por configuração deliberada; nenhum número histórico foi publicado e nenhum dado é enviado
- **Registro técnico:** `pagina-1-ingles-para-brasileiros/06-DEPLOY-VERCEL-PRODUCAO.md`

## Decisões confirmadas

- Página de inglês para brasileiros em **PT-BR**.
- Página de português brasileiro para estrangeiros em **inglês**.
- CTA das duas páginas para o WhatsApp da Jéssica.
- Planos de inglês apresentados na página; composição final combinada no WhatsApp.
- Leads também capturados e enviados para uma planilha por Google Apps Script.

## WhatsApp

### Registro anterior

- **Número informado em 24/07/2026:** +55 31 7342-0800
- **Número normalizado:** 553173420800
- **Link-base anterior:** https://wa.me/553173420800

### Atualização de 28/07/2026

Jéssica informou no grupo que possui outro WhatsApp corporativo e que pretende usar o outro número. O print recebido não contém esse número.

**Decisão operacional:** o link anterior fica preservado como histórico, mas não deve ser publicado até a confirmação do WhatsApp corporativo escolhido.

### ⚠️ Atualização de 12/08/2026 — número corporativo recebido, com ressalva

- **Informado:** `+55 31 8301-5499`
- **Normalizado como está:** `553183015499` — **12 dígitos**
- **Já publicado** nas duas páginas (`script.js` e `index.html` de ambas)

**Problema:** celular brasileiro em E.164 tem **13 dígitos** (`55` + DDD + 9 dígitos, sempre iniciando em 9). O assinante informado tem 8 dígitos (`8301-5499`), padrão anterior à adição do nono dígito.

**Número provável completo:** `31 98301-5499` → **`5531983015499`**

**Estado:** 🔴 **a validar antes de qualquer tráfego.** Um `wa.me` com número inválido não falha visivelmente no site — abre o WhatsApp e informa link inválido. O CTA das duas páginas fica morto sem aviso.

**Teste:** abrir `https://wa.me/5531983015499`. Abriu a conversa, é esse. Não abriu, perguntar o número completo a ela.

**Nota:** o número anterior (`553173420800`) tinha exatamente o mesmo problema. Não é erro novo, é o mesmo padrão repetido — **régua: número de WhatsApp entra no repositório só em E.164 completo, com contagem de dígitos conferida.**

## Integração da planilha

Confirmado:

- haverá captura de leads;
- o destino será uma planilha;
- a integração será feita por Google Apps Script.

Pendente para ativação:

- URL implantada do Web App, terminada em `/exec`;
- campos finais do formulário;
- planilha/aba de destino;
- teste real de escrita;
- política de consentimento e mensagem de sucesso.

## Contrato proposto para a Página 1 — 30/07/2026

### Campos visíveis mínimos

- primeiro nome;
- WhatsApp;
- objetivo principal em escolha de um toque:
  - viagem e vida pessoal;
  - trabalho;
  - voltar a praticar.

### Campos automáticos

- página;
- data/hora;
- origem;
- UTMs, quando existirem;
- CTA de origem.

### Mensagem pré-preenchida

> Oi, Jéssica! Vim pela página do Emotional Speaking. Quero conhecer o método e entender qual formato combina com meu objetivo. Meu foco principal é: `{{objetivo}}`.

### Fluxo

1. pessoa toca no CTA;
2. captura curta envia o lead para o Apps Script;
3. sucesso confirmado;
4. WhatsApp abre com a mensagem preenchida.

O contrato permanece proposto até receber endpoint, aba, política definitiva e número corporativo final.

## Pendente antes da ativação comercial

- número final do WhatsApp corporativo;
- texto pré-preenchido específico de cada página;
- endpoint e contrato de dados do Apps Script.
