# Handoff local | Página da Mentoria O Templo Dourado

## Estado

A página foi construída como um bundle estático isolado. Nenhum arquivo da Masterclass, do rascunho anterior ou do acervo original foi alterado.

### Revisão visual de 24/07/2026

- O retrato da Prana passou de um recorte vertical excessivamente ampliado para uma composição horizontal com mais contexto e maior nitidez.
- A legenda foi integrada ao campo rubi para manter contraste em desktop, tablet e mobile.
- O selamento final deixou de usar círculos monumentais e ganhou um portal assimétrico, mais curto e alinhado ao eixo estrutural da página.
- A copy e o comportamento comercial foram preservados integralmente.
- Revisão verificada em 390, 768 e 1440 px, sem overflow horizontal.
- HTML e JavaScript permanecem válidos; em HTTP, todos os recursos carregam e o console permanece sem erros.

Arquivos de produção:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

## Ativação comercial

Preencher `OFFER_CONFIG` no início de `script.js`. O checkout só é ativado quando todos os campos obrigatórios têm valores reais:

- `price`
- `installments`
- `cohortStart`
- `meetingSchedule`
- `capacity`
- `enrollmentDeadline`
- `checkoutUrl`
- `refundOrCancellationPolicy`
- `postPurchaseSteps`
- `metaPixelId`, quando houver medição Meta
- `campaignOfferFelinas`, apenas se existir condição e validade confirmadas

Enquanto algum campo obrigatório estiver ausente, a página apresenta um estado comercial honesto e conduz os CTAs até a seção de oferta, sem abrir link quebrado.

Formato esperado para uma condição confirmada do Portal das Felinas:

```js
campaignOfferFelinas: {
  label: "Nome público da condição",
  value: "Valor ou condição real",
  validUntil: "Validade real, escrita como aparecerá na página"
}
```

## Origem Portal das Felinas

Usar:

`?origem=felinas`

Essa origem:

- troca a ponte narrativa do hero;
- abre todos os CTAs diretamente no checkout quando a oferta estiver completa;
- preserva `origem` e UTMs na URL do checkout;
- só exibe condição exclusiva se `campaignOfferFelinas` estiver completa e válida.

Sem `origem=felinas`, os CTAs do hero e do método conduzem primeiro à oferta. Os CTAs da oferta e do fecho abrem o checkout.

## Eventos

Os eventos são enviados para `window.dataLayer`, para o evento de navegador `prana:analytics` e, quando o pixel estiver configurado, como eventos personalizados da Meta:

- `view_d1` até `view_d10`
- `cta_click_d1`
- `cta_click_d4`
- `cta_click_d8`
- `cta_click_d10`
- `faq_open_1` até `faq_open_6`
- `checkout_start`

`purchase` só deve ser disparado por uma integração confiável do checkout. A função `window.pranaTrackPurchase(dados)` foi exposta para uma integração futura, mas a página não presume que a compra aconteceu.

## Gates de publicação

Não publicar antes de receber e validar:

1. preço e parcelamento;
2. data de início e calendário dos 12 encontros;
3. capacidade real;
4. prazo real de inscrição;
5. checkout;
6. política de cancelamento, transferência ou garantia;
7. próximo passo após o pagamento;
8. dois depoimentos específicos com autorização, de preferência um em vídeo;
9. credenciais públicas atuais da Prana;
10. eventual condição do Portal das Felinas;
11. pixel e acesso à conta, se fizerem parte do lançamento.

## Prova ainda pendente

A versão local usa somente evidências confirmadas da trajetória e da condução da Prana. Nenhum depoimento foi inventado. Antes da publicação, inserir os relatos autorizados na seção de condução sem misturar resultados do trabalho individual com promessas da mentoria em grupo.

## Validações concluídas

- HTML semântico validado sem erros.
- JavaScript validado sintaticamente.
- Navegador sem erros de console, overlays ou recursos ausentes.
- Versões testadas em 390 x 844, 768 x 1024 e 1440 x 1000.
- CTA principal visível na primeira tela mobile.
- Zero overflow horizontal nos três tamanhos.
- Variante `origem=felinas` e ponte narrativa verificadas.
- UTMs e origem preservadas pela função de checkout.
- Eventos `view_d1` até `view_d10` verificados em rolagem completa.
- FAQ aberto por teclado, com foco visível e evento registrado.
- Conteúdo principal verificado sem JavaScript.
- Regra `prefers-reduced-motion` presente e sem perda de informação.
- Lighthouse mobile: Performance 96, Acessibilidade 100, Boas Práticas 100 e SEO 100.
- LCP 2,9 s, CLS 0 e bloqueio total 0 ms no teste móvel local.
- Imagens derivadas convertidas para WebP. O bundle final tem cerca de 456 KB.

## Limites preservados

- 12 encontros não foram apresentados como 12 semanas.
- A página não afirma que terapia trabalha apenas pela mente.
- Gravidez, relacionamento e projeto profissional não aparecem como promessa.
- Credencial de psicóloga e CRP não foram publicadas.
- Não há “tantra”, “serpente caída”, linguagem de coaching, promessa absoluta ou escassez artificial.
- O Guardião do Véu aparece uma única vez como recurso de compreensão.
- A Visão Uterina não aparece como CTA nem como etapa obrigatória.

## Publicação

Nenhum deploy foi realizado.
