# HANDOFF · Despertar do Prazer Sagrado

> **Estado:** construção local concluída; publicação bloqueada.
> **Destino previsto:** `https://thegoldentemple.io/curso`
> **Fonte de copy:** `../../COPY-CURSO-DESPERTAR.md`

## Bundle

- `index.html`: marcação semântica e copy da tarefa.
- `css/styles.css`: sistema visual, responsividade, acessibilidade e movimento.
- `js/main.js`: checkout fail-closed, preservação de UTMs, revelações, progresso e nomes de eventos.
- `assets/`: fontes locais e imagens preservadas ou derivadas do acervo canônico.

## Configuração

O checkout vive no início de `js/main.js`:

```js
const CONFIG = Object.freeze({
  checkoutUrl: "",
  analyticsEnabled: false,
  origin: "curso-despertar"
});
```

Enquanto `checkoutUrl` estiver vazio, todos os CTAs abrem um diálogo de prévia e nenhuma navegação, pagamento ou coleta de dados ocorre.

## Gates de publicação

| ID | Pendente | Efeito no bundle |
|---|---|---|
| GATE-01 | confirmar R$ 97 | preço visível, ainda não aprovado para publicar |
| GATE-02 | nome, ordem e tema das sete meditações | renderizados apenas sete marcadores neutros |
| GATE-03 | plataforma, forma e duração do acesso | item de acesso omitido da lista; FAQ ainda depende de confirmação |
| GATE-04 | garantia ou política de devolução | nenhuma promessa inserida |
| GATE-05 | URL oficial do checkout | `checkoutUrl` vazio e CTAs fail-closed |
| GATE-06 | fluxo pós-compra | nenhuma promessa de entrega inserida |

## Instrumentação preparada e desligada

- `view_d1` a `view_d6`
- `cta_click` com origem do bloco
- `faq_open_1` a `faq_open_3`

`analyticsEnabled` permanece `false`; não existe script externo de medição.

## Validação local — 04/08/2026

- HTML: válido com `html-validate`.
- JavaScript: sintaxe válida com `node --check`.
- Navegador: 390 × 844, 768 × 1024 e 1440 × 900, sem overflow horizontal.
- Recursos: HTML, CSS, JS, fontes, imagens e favicon responderam HTTP 200.
- Interação: CTA fail-closed, diálogo modal e devolução de foco conferidos.
- Console: sem erros, avisos ou overlays.
- Lighthouse mobile: Acessibilidade 100, Boas Práticas 100, SEO 100 e Agentic Browsing 100.
- Desempenho local observado: LCP 143 ms e CLS 0,00, sem dados reais de campo.

## Próximo passo

Receber os seis insumos, preencher apenas os campos correspondentes, rodar regressão completa e colher aprovação humana. Publicação, Hostinger, domínio, Pixel, checkout e comunicação externa não fazem parte desta execução.
