🟢 PROMOVIDO em 02/10/2026 · destinos: `STATUS.md` (ver `RELATORIO.md`)

# Dois quizzes · Guilherme Araújo

Produção local, derivada do briefing v2 de 02/10/2026 e da correção de interface enviada nesta conversa. Não publicado, não implantado; Pixel não ativado.

Abra `ABRIR.cmd` (requer Node.js) ou execute `node server.cjs` nesta pasta. Os endereços locais são:

- [Permissão](http://127.0.0.1:4173/permissao.html)
- [Signos](http://127.0.0.1:4173/signos.html)

Se o navegador abrir antes de o servidor iniciar, recarregue. Para encerrar o servidor iniciado pelo arquivo, use Ctrl+C na janela correspondente. Uma aba nova inicia outra sessão; recarregar preserva o ponto. `?m=B` identifica reaplicação.

O código servido está exclusivamente em `public/`. `engine.js` é compartilhado; toda redação, opções, pontuação, variantes e links estão em `config/permissao.json` e `config/signos.json`. Os títulos e avisos sem JavaScript nos dois HTML são transcrições da mesma configuração, para funcionarem antes do carregamento do motor. A fonte Inter e a foto real estão locais em `assets/`.

As capturas completas e os pares estão na [galeria de QA](qa/index.html). Os pares PNG mostram o início das telas em escala 1:1; cada HTML liga às duas capturas completas. A referência fica somente em `qa/reference/`, nunca no site servido.

O [relatório](RELATORIO.md) marca os 22 critérios de aceite e separa testes locais de verificações externas pendentes. O [guia do Apps Script](apps-script/LEIA-ME.md) descreve a implantação humana e os testes reais ainda necessários.

Verificações reproduzíveis, nesta pasta:

```text
node tools/audit-content.cjs
node tools/test-apps-script.cjs
node tools/qa.cjs
node tools/qa-variants.cjs
node tools/compare-styles.cjs
node tools/final-check.cjs
node tools/errata-full-flows.cjs
node tools/aceite-publicacao.cjs
```

Os testes de navegador requerem o servidor local e o `puppeteer-core` instalado no caminho declarado nos scripts. O teste de publicação termina com código 1 enquanto faltarem as configurações necessárias; isso é esperado nesta entrega. Os links sintéticos `example.test` existem somente no teste, são interceptados e não são gravados nas configurações.

`pixel_id` vazio é reservado para uma futura ativação autorizada. O motor registra os eventos no `dataLayer`, mas não carrega a biblioteca do Pixel; preencher o ID, sozinho, não ativa rastreamento. O checkout do Diagnóstico foi verificado como destino gerado e interceptado no navegador, sem acessar a PagTrust nem efetuar compra.

Nenhuma dependência de serviço externo é necessária para percorrer os quizzes com a configuração atual. Para retirar esta entrega, basta remover esta pasta após encerrar o servidor; nenhuma fonte canônica precisa ser restaurada.
