# Página 1 · inglês para brasileiros

Bundle fonte da página do Emotional Speaking.

**Produção em modo de prévia segura:** https://jessica-emotional-speaking.vercel.app

## Abrir localmente

Na pasta `site`, iniciar um servidor estático e abrir a URL local:

```powershell
python -m http.server 4173
```

## Estado das integrações

`script.js` está deliberadamente em modo de prévia:

```js
const CONFIG = {
  isPreview: true,
  whatsappNumber: "",
  leadsEndpoint: "",
};
```

Enquanto esse estado for mantido:

- o formulário pode ser validado e testado;
- nenhum dado pessoal é persistido localmente;
- nenhum dado é enviado;
- nenhum número histórico é usado;
- nenhum redirecionamento para WhatsApp acontece.

## Ativação comercial

Antes de ativar a conversão:

1. receber o novo WhatsApp corporativo e normalizar para DDI + DDD + número, apenas dígitos;
2. receber a URL `/exec` do Apps Script;
3. conferir que o Apps Script aceita JSON com `Content-Type: text/plain`;
4. realizar uma escrita real na planilha e conferir todos os campos;
5. alterar `isPreview` para `false`;
6. testar captura, escrita, mensagem preenchida e redirecionamento em desktop e celular;
7. manter a URL fora do tráfego até a aprovação humana do design e da copy.

### Campos enviados

- `firstName`
- `whatsapp`
- `objective`
- `consent`
- `page`
- `ctaOrigin`
- `timestamp`
- `origin`
- `url`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

## Gates editoriais

- a linha da certificação depende de conferência documental;
- o feedback permanece anonimizado até autorização;
- um retrato real em alta resolução pode substituir a composição gráfica quando recebido e aprovado;
- duração dos encontros de 1 vez por semana, English Flow e grupos permanece omitida;
- políticas de matrícula, cancelamento e reagendamento só entram quando documentadas.
