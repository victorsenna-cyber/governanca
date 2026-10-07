# Mapa da referência — Etapa 0

Fonte visual: `920-referências lp/lp02-profissaohomesales-com-clone-local-integral-2026-10-03/`, aberta por `ABRIR-COPIA.cmd`.

## Método e estado da captura

- O script autorizado `validar.cjs` e o `abrir.cjs` foram lidos em UTF-8. O segundo abriu a cópia offline. Como a navegação por janela não estava disponível, foi criado `_ferramentas/capturar-referencia.cjs` dentro desta pasta isolada. Ele replica a interceptação por manifesto, bloqueia rede/trackers, avança por controles visíveis, espera carregamentos automáticos e salva captura de viewport e HTML/computed CSS do componente principal.
- Há capturas em 390 × 844 e 1440 × 1000 para cada tela real alcançada. O componente principal e seus estilos computados estão no JSON homônimo de cada captura.
- O percurso registrou 41 telas reais. A próxima captura, nº 42, é a página de erro do Chrome `ERR_INTERNET_DISCONNECTED`, depois de acionar a página final; não é uma tela da referência. Por isso, não foi contada como tela válida.
- A validação preexistente em `_verificacao/validacao.json` relata `visited: 45`, mas suas amostras alternam entre a abertura e a grade de idade; também registra `Invariant: attempted to hard navigate to the same URL`. Isso demonstra 45 iterações do validador, não 45 telas distintas percorridas.
- Resultado desta etapa: não há evidência local para quatro telas adicionais distintas. Os arquivos 42–45 não foram fabricados. Nenhuma tela nossa ficou sem componente visual equivalente; o ponto pendente é confirmar onde estão as quatro telas alegadas que não aparecem no percurso linear.

## Capturas, componentes e correspondência

Abreviações de nossas telas: **P** = componente genérico de pergunta/lista reutilizável em T3–T6 e S1–S25; **I1/I2** = inserções; **T7** = captura; **T8** = carregamento; **T9** = resultado; **T10** = página do próximo passo. Componentes específicos reutilizáveis não obrigam a reaproveitar copy, conteúdo ou imagens da referência.

| Nº | Tipo de componente observado | Par em nosso fluxo | Print 390 px | Print 1440 px | HTML + CSS computado |
|---:|---|---|---|---|---|
| 1 | Abertura + pergunta em grade de 2, com imagem | T1 | [390](referencia/390/tela-01.png) | [1440](referencia/1440/tela-01.png) | [JSON](referencia/390/tela-01-componente.json) · [1440](referencia/1440/tela-01-componente.json) |
| 2 | Pergunta em grade de idade | T2 | [390](referencia/390/tela-02.png) | [1440](referencia/1440/tela-02.png) | [JSON](referencia/390/tela-02-componente.json) · [1440](referencia/1440/tela-02-componente.json) |
| 3 | Pergunta em lista binária | P | [390](referencia/390/tela-03.png) | [1440](referencia/1440/tela-03.png) | [JSON](referencia/390/tela-03-componente.json) · [1440](referencia/1440/tela-03-componente.json) |
| 4 | Pergunta em lista binária | P | [390](referencia/390/tela-04.png) | [1440](referencia/1440/tela-04.png) | [JSON](referencia/390/tela-04-componente.json) · [1440](referencia/1440/tela-04-componente.json) |
| 5 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-05.png) | [1440](referencia/1440/tela-05.png) | [JSON](referencia/390/tela-05-componente.json) · [1440](referencia/1440/tela-05-componente.json) |
| 6 | Pergunta em lista binária | P | [390](referencia/390/tela-06.png) | [1440](referencia/1440/tela-06.png) | [JSON](referencia/390/tela-06-componente.json) · [1440](referencia/1440/tela-06-componente.json) |
| 7 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-07.png) | [1440](referencia/1440/tela-07.png) | [JSON](referencia/390/tela-07-componente.json) · [1440](referencia/1440/tela-07-componente.json) |
| 8 | Pergunta em lista com cinco opções | P | [390](referencia/390/tela-08.png) | [1440](referencia/1440/tela-08.png) | [JSON](referencia/390/tela-08-componente.json) · [1440](referencia/1440/tela-08-componente.json) |
| 9 | Inserção com CTA | I1 | [390](referencia/390/tela-09.png) | [1440](referencia/1440/tela-09.png) | [JSON](referencia/390/tela-09-componente.json) · [1440](referencia/1440/tela-09-componente.json) |
| 10 | Pergunta em lista com cinco opções | P | [390](referencia/390/tela-10.png) | [1440](referencia/1440/tela-10.png) | [JSON](referencia/390/tela-10-componente.json) · [1440](referencia/1440/tela-10-componente.json) |
| 11 | Pergunta em lista com três opções | P | [390](referencia/390/tela-11.png) | [1440](referencia/1440/tela-11.png) | [JSON](referencia/390/tela-11-componente.json) · [1440](referencia/1440/tela-11-componente.json) |
| 12 | Pergunta em lista binária | P | [390](referencia/390/tela-12.png) | [1440](referencia/1440/tela-12.png) | [JSON](referencia/390/tela-12-componente.json) · [1440](referencia/1440/tela-12-componente.json) |
| 13 | Inserção com CTA | I2 (componente de inserção reutilizado) | [390](referencia/390/tela-13.png) | [1440](referencia/1440/tela-13.png) | [JSON](referencia/390/tela-13-componente.json) · [1440](referencia/1440/tela-13-componente.json) |
| 14 | Pergunta em lista binária | P | [390](referencia/390/tela-14.png) | [1440](referencia/1440/tela-14.png) | [JSON](referencia/390/tela-14-componente.json) · [1440](referencia/1440/tela-14-componente.json) |
| 15 | Pergunta em lista binária | P | [390](referencia/390/tela-15.png) | [1440](referencia/1440/tela-15.png) | [JSON](referencia/390/tela-15-componente.json) · [1440](referencia/1440/tela-15-componente.json) |
| 16 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-16.png) | [1440](referencia/1440/tela-16.png) | [JSON](referencia/390/tela-16-componente.json) · [1440](referencia/1440/tela-16-componente.json) |
| 17 | Pergunta em lista com três opções | P | [390](referencia/390/tela-17.png) | [1440](referencia/1440/tela-17.png) | [JSON](referencia/390/tela-17-componente.json) · [1440](referencia/1440/tela-17-componente.json) |
| 18 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-18.png) | [1440](referencia/1440/tela-18.png) | [JSON](referencia/390/tela-18-componente.json) · [1440](referencia/1440/tela-18-componente.json) |
| 19 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-19.png) | [1440](referencia/1440/tela-19.png) | [JSON](referencia/390/tela-19-componente.json) · [1440](referencia/1440/tela-19-componente.json) |
| 20 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-20.png) | [1440](referencia/1440/tela-20.png) | [JSON](referencia/390/tela-20-componente.json) · [1440](referencia/1440/tela-20-componente.json) |
| 21 | Inserção com CTA | Inserção extra da referência; sai | [390](referencia/390/tela-21.png) | [1440](referencia/1440/tela-21.png) | [JSON](referencia/390/tela-21-componente.json) · [1440](referencia/1440/tela-21-componente.json) |
| 22 | Pergunta em lista com três opções | P | [390](referencia/390/tela-22.png) | [1440](referencia/1440/tela-22.png) | [JSON](referencia/390/tela-22-componente.json) · [1440](referencia/1440/tela-22-componente.json) |
| 23 | Inserção com CTA | Inserção extra da referência; sai | [390](referencia/390/tela-23.png) | [1440](referencia/1440/tela-23.png) | [JSON](referencia/390/tela-23-componente.json) · [1440](referencia/1440/tela-23-componente.json) |
| 24 | Pergunta em lista binária | P | [390](referencia/390/tela-24.png) | [1440](referencia/1440/tela-24.png) | [JSON](referencia/390/tela-24-componente.json) · [1440](referencia/1440/tela-24-componente.json) |
| 25 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-25.png) | [1440](referencia/1440/tela-25.png) | [JSON](referencia/390/tela-25-componente.json) · [1440](referencia/1440/tela-25-componente.json) |
| 26 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-26.png) | [1440](referencia/1440/tela-26.png) | [JSON](referencia/390/tela-26-componente.json) · [1440](referencia/1440/tela-26-componente.json) |
| 27 | Inserção com CTA | Inserção extra da referência; sai | [390](referencia/390/tela-27.png) | [1440](referencia/1440/tela-27.png) | [JSON](referencia/390/tela-27-componente.json) · [1440](referencia/1440/tela-27-componente.json) |
| 28 | Pergunta em lista com quatro opções | P / T6 usa a variante com emoji | [390](referencia/390/tela-28.png) | [1440](referencia/1440/tela-28.png) | [JSON](referencia/390/tela-28-componente.json) · [1440](referencia/1440/tela-28-componente.json) |
| 29 | Pergunta em lista com três opções | P | [390](referencia/390/tela-29.png) | [1440](referencia/1440/tela-29.png) | [JSON](referencia/390/tela-29-componente.json) · [1440](referencia/1440/tela-29-componente.json) |
| 30 | Pergunta em lista com quatro opções | P | [390](referencia/390/tela-30.png) | [1440](referencia/1440/tela-30.png) | [JSON](referencia/390/tela-30-componente.json) · [1440](referencia/1440/tela-30-componente.json) |
| 31 | Carregamento automático | T8 | [390](referencia/390/tela-31.png) | [1440](referencia/1440/tela-31.png) | [JSON](referencia/390/tela-31-componente.json) · [1440](referencia/1440/tela-31-componente.json) |
| 32 | Resultado com banner, métricas, cards e CTA fixo | T9 | [390](referencia/390/tela-32.png) | [1440](referencia/1440/tela-32.png) | [JSON](referencia/390/tela-32-componente.json) · [1440](referencia/1440/tela-32-componente.json) |
| 33 | Pergunta pós-resultado | Sem par; sai | [390](referencia/390/tela-33.png) | [1440](referencia/1440/tela-33.png) | [JSON](referencia/390/tela-33-componente.json) · [1440](referencia/1440/tela-33-componente.json) |
| 34 | Comparativo antes/depois e CTA | Bloco de imagem da referência sai; sem par | [390](referencia/390/tela-34.png) | [1440](referencia/1440/tela-34.png) | [JSON](referencia/390/tela-34-componente.json) · [1440](referencia/1440/tela-34-componente.json) |
| 35 | Depoimento/prova com CTA | Sem par; sai | [390](referencia/390/tela-35.png) | [1440](referencia/1440/tela-35.png) | [JSON](referencia/390/tela-35-componente.json) · [1440](referencia/1440/tela-35-componente.json) |
| 36 | Inserção narrativa com citação e CTA | Sem par; sai | [390](referencia/390/tela-36.png) | [1440](referencia/1440/tela-36.png) | [JSON](referencia/390/tela-36-componente.json) · [1440](referencia/1440/tela-36-componente.json) |
| 37 | Inserção de prova/depoimento e CTA | Sem par; sai | [390](referencia/390/tela-37.png) | [1440](referencia/1440/tela-37.png) | [JSON](referencia/390/tela-37-componente.json) · [1440](referencia/1440/tela-37-componente.json) |
| 38 | Pergunta em lista dentro do fluxo pós-resultado | Sem par; sai | [390](referencia/390/tela-38.png) | [1440](referencia/1440/tela-38.png) | [JSON](referencia/390/tela-38-componente.json) · [1440](referencia/1440/tela-38-componente.json) |
| 39 | Segundo carregamento automático | Extra; sai | [390](referencia/390/tela-39.png) | [1440](referencia/1440/tela-39.png) | [JSON](referencia/390/tela-39-componente.json) · [1440](referencia/1440/tela-39-componente.json) |
| 40 | Captura de nome/WhatsApp e CTA | T7 (componente reutilizado antes do resultado) | [390](referencia/390/tela-40.png) | [1440](referencia/1440/tela-40.png) | [JSON](referencia/390/tela-40-componente.json) · [1440](referencia/1440/tela-40-componente.json) |
| 41 | Página final de venda, com conteúdo longo e CTA | T10: página do próximo passo; reaproveitar só componentes previstos no contrato | [390](referencia/390/tela-41.png) | [1440](referencia/1440/tela-41.png) | [JSON](referencia/390/tela-41-componente.json) · [1440](referencia/1440/tela-41-componente.json) |

## Telas sem evidência

As capturas de 42 a 45 não correspondem a telas de aplicação confirmadas. A tentativa de seguir o CTA da página 41 produziu uma página de erro do Chrome (`referencia/390/tela-42.png`; `referencia/1440/tela-42.png`). A cópia offline não forneceu mais telas distintas pelo percurso automatizado. O script próprio, o JSON de inventário e os prints ficam disponíveis para revisão. **Etapa 0 aguarda revisão deste descompasso antes da construção.**

