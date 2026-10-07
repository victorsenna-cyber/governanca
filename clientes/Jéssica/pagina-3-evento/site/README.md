# Ladies Fluency Experience — página de eventos

## Como publicar uma nova edição

**Você edita um bloco só.** Abra `script.js`, mude o `CONFIG` no topo, salve, publique. Nenhum texto da página precisa ser reescrito.

```js
const CONFIG = Object.freeze({
  edicao: "1ª edição",
  nomeEvento: "Ladies Fluency Experience",

  data: "{{DATA}}",                // ← ÚNICO CAMPO PENDENTE
  dataCurta: "{{DATA_CURTA}}",     // ← ex.: "25/10"
  horario: "14h às 18h",
  local: "Casa Viva",              // ← trocar quando mudar de espaço
  bairro: "Campeche, Florianópolis",

  vagasTotais: 15,
  vagasRestantes: 15,              // ← atualizar conforme vende
  lotes: [
    { nome: "Primeiro lote", vagas: 6, preco: "R$ 147",
      link: "https://link.infinitepay.io/teacherjey/VC1D-GZWvcpKFXt-147,00" },
    { nome: "Segundo lote",  vagas: 9, preco: "R$ 197",
      link: "https://link.infinitepay.io/teacherjey/VC1D-rnPhOh3Bcu-197,00" },
  ],
  loteVigente: 0,                  // ← 0 = primeiro lote · 1 = segundo

  prazoInscricao: "As inscrições fecham 7 dias antes.",
  whatsapp: "",

  status: "abertas",               // ← ver abaixo
});
```

**Cada lote carrega o próprio link de pagamento.** O botão da página aponta sempre para o link do lote vigente. Ao trocar `loteVigente` de `0` para `1`, o preço, as vagas e **o link de cobrança viram juntos**. Não há nada mais a editar.

## Os quatro estados

| `status` | O que a página faz |
|---|---|
| `"abertas"` | comportamento normal, CTA leva ao pagamento |
| `"ultimas"` | acende o selo "Últimas vagas" acima do botão |
| `"esgotado"` | CTA vira "Entrar na lista da próxima edição" e aparece o aviso |
| `"proxima"` | CTA vira "Quero ser avisada", para quando a próxima ainda não abriu |

Trocar o estado **não quebra o layout**. Foi previsto no desenho.

## Trocar de lote

Quando as 6 primeiras vagas forem vendidas, mude `loteVigente: 0` para `loteVigente: 1`. O segundo lote acende, o primeiro fica apagado, e o preço no topo e na oferta acompanham sozinhos.

## Pendência antes de publicar

| # | O que | Onde |
|:--:|---|---|
| 1 | **Data e horário** | `CONFIG.data` e `CONFIG.dataCurta` — hoje estão como `{{DATA}}` |

**É a única.** Os links de pagamento dos dois lotes já estão integrados e conferidos: o valor no fim de cada URL bate com o preço do lote.

## Arquivos

```
site/
  index.html     estrutura e copy
  styles.css     sistema visual (tokens herdados da página 1)
  script.js      CONFIG + comportamento
  assets/
    logo-ladies-fluency-academy.png
    logo-ladies-fluency-selo.png
    jessica-oliveira.jpeg
```

Sem dependência externa além das fontes do Google (Fraunces e Inter). Abre direto no navegador com dois cliques, sem servidor.

## O que não está aqui, por decisão

- **Foto do local.** O local muda a cada edição; foto de espaço envelheceria a página. As fotos da Casa Viva vão para os posts de feed.
- **Depoimentos.** Os que existem são de aula, e provam aula, não vivência. O bloco de prova em D6 aceita depoimentos de evento a partir da 2ª edição sem redesenho.
- **Menção à mentoria.** Ela é vendida na sala, não na página.
