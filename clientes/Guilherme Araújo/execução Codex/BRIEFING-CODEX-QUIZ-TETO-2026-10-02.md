# BRIEFING CODEX · TERCEIRA PÁGINA (QUIZ "TETO") + CORREÇÃO DO ENGINE

> Data: 2026-10-02 · Pasta de trabalho: `execução Codex/quizzes-2026-10-02/`
> Mutação externa: nenhuma. Não publicar, não ativar Pixel, não subir nada na Hostinger.

## 0. Regra que vale para tudo

Você não escreve nem altera nenhuma palavra que o público lê. Toda a redação já está pronta
em `public/config/teto.json`. Se achar erro de texto, registre no relatório e não corrija.

## 1. Contexto

A terceira página é o mesmo quiz da Permissão (mesmas 16 perguntas, mesma pontuação, mesmo
resultado). Só muda o que é vendido no fim: em vez do Diagnóstico, o produto gravado
"Como romper o Teto Financeiro e se Libertar das Dívidas" (R$ 97, duas aulas).

Já está pronto e NÃO deve ser alterado:
- `public/config/teto.json` (cópia de `permissao.json` com `quiz: "teto"`, checkout novo e
  as telas T21, T22 e T24 reescritas; o bloco `map` e a chave `imagem_mapa` saíram).
- `public/config/permissao.json` e `public/config/signos.json` (iguais aos de `hostinger/`).

## 2. Tarefas

### 2.1 Página
Criar `public/teto.html`: cópia de `public/permissao.html` com `data-quiz="teto"`.
Título, description e og iguais aos de `hostinger/permissao/index.html`.

### 2.2 Correção do engine (`public/engine.js`)
Defeito: `itemValue(item, field, data)` ignora `field`. Quando o item de um bloco `cards`
tem `variants`, `variableVariants` ou `resultVariants`, título e texto saem com o mesmo valor.
Aparece na tela T19 (permissão e teto), nos cards de formações, preço e "o que mais te impede".

Comportamento correto:
- `title`  = `variableVariants[<variável>][valor]` se existir; senão `item.title`.
- `text`   = `resultVariants[resultado]` se existir; senão `variants.cases[resposta]` se
  existir; senão `item.text`.

Não mudar mais nada no engine. Em especial, manter como está o `variants` de BLOCO (texto,
alerta, resultBanner), que usa o índice da resposta: o resultado do quiz de Signos (S13)
depende disso.

Aceitar `CONFIG.checkout_url` como alternativa a `CONFIG.checkout_diagnostico` é opcional.
Se fizer, mantenha `checkout_diagnostico` funcionando e não renomeie chaves nos configs.

### 2.3 Planilha (`apps-script/`)
- `Code.gs`: incluir `teto: 'teto'` em `ABAS`.
- `teste.http`: acrescentar os casos do quiz `teto` (captura + atualização pelo `lead_id`).
- `LEIA-ME.md`: citar a aba nova.
As chaves de resposta do `teto` são as mesmas da permissão (`p01_atuacao` … `p16_acredita`).

### 2.4 Pasta de upload (`hostinger/`)
- Criar `hostinger/teto/` com `index.html`, `engine.js`, `styles.css`, `config/teto.json`
  e `assets/` (mesma estrutura de `hostinger/permissao/`, caminhos relativos).
- Copiar o `engine.js` corrigido para `hostinger/permissao/` e `hostinger/signos/`.
- Não tocar em `hostinger/permissao/config/permissao.json` nem em
  `hostinger/signos/config/signos.json`.
- Gerar `teto-v1.zip`, `permissao-v3.zip` e `signos-v6.zip`. O ambiente não deixa apagar
  arquivo: não tente remover os zips antigos.
- Acrescentar uma entrada datada no `hostinger/LEIA-ME.txt`.

## 3. Aceite

1. Quiz `teto` percorrido até a oferta nos três resultados (BAIXO, MÉDIO, ALTO), sem erro
   de console. No ALTO, as telas T20 a T22 são puladas, como na permissão.
2. Botão "QUERO AS DUAS AULAS" abre
   `https://checkout.pagtrust.com.br/ck463a9f5e?funnel=fn40e6df87`, sem nome, e-mail ou
   telefone na URL.
3. Tela T19 (permissão e teto): em cada card, título e texto são diferentes, nas três
   respostas de preço e na resposta "já perdi a conta".
4. Quiz de Signos: a faixa do resultado continua mostrando o padrão ("SEU PADRÃO: …") e o
   parágrafo do padrão, para as quatro respostas da pergunta de decisão.
5. Nenhum `[[COPY PENDENTE` visível em nenhuma das três páginas.
6. Layout idêntico ao da permissão: nenhuma mudança em `styles.css`.

## 4. Entrega

Adendo no `RELATORIO.md` com: o que foi feito, o que não foi testado, e qualquer erro de
texto encontrado (sem corrigir).
