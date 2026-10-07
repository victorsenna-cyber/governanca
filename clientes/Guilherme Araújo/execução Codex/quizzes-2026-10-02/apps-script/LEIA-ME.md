# Planilha dos quizzes

Código transcrito literalmente da seção 10.5 do briefing. Nenhuma implantação foi criada nesta entrega.

1. Victor cria uma planilha de acesso restrito. Nunca disponibilizar link público: ela guarda contato, respostas e renda.
2. Na planilha, abrir **Extensões → Apps Script** e colar `Code.gs`.
3. **Implantar → Nova implantação → App da Web**. Executar como **eu**; acesso **qualquer pessoa**.
4. Copiar a URL terminada em `/exec` para `apps_script_url` nos três arquivos em `public/config/`.
5. Toda alteração posterior em `Code.gs` exige **nova versão da implantação**. Salvar no editor não atualiza automaticamente a URL.
6. Executar `teste.http` com essa URL. Para cada quiz, a captura cria uma linha e o segundo POST atualiza a mesma linha pelo `lead_id`. Reexecutar o mesmo ID não deve duplicar.

O navegador envia `text/plain;charset=utf-8`, `mode: no-cors`; a resposta é opaca. O avanço nunca depende da resposta. Falha de rede provoca uma única nova tentativa; o payload permanece no `sessionStorage`. Com URL vazia, apenas registra `quiz_payload` no console.

A URL fica pública no código; qualquer pessoa pode enviar dados para ela. Campo-isca, limite de 500 caracteres e neutralização de fórmula reduzem danos, mas não impedem abuso. O script cria as abas `permissao`, `signos` e `teto`, mantém cabeçalhos existentes e acrescenta novas chaves.

`teste.http` usa dados sintéticos. O teste real na conta Google não foi executado, pois a implantação e a URL ainda não existem. `node tools/test-apps-script.cjs` verifica a lógica com uma planilha simulada; não substitui o teste real.
