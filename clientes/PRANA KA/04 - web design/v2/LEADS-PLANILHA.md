# Integração de leads com Google Sheets

## Estado

- captura no frontend: **CODIFICADA**
- checkout PagTrust: **CONFIGURADO**
- backend Apps Script: **CODIFICADO · CORREÇÃO LOCAL PRONTA**
- envio real à planilha: **ENDPOINT CONFIGURADO · BLOQUEADO POR ACESSO À PLANILHA**

O endpoint `/exec` foi inserido em `LEADS_ENDPOINT`. O backup em `localStorage` continua como contingência, sem substituir a planilha.

## Diagnóstico de 27/07/2026

- `GET` do Web App: HTTP 200 e serviço identificado.
- `POST` real de QA: HTTP 200, porém com `ok: false`.
- erro retornado: `O serviço Planilhas apresentou falha ao acessar o documento com o código 1_uO8I7yUHRxmIPX12MPZngfkCkrULrwdRGxCbuk6BcI.`
- nenhuma linha de QA foi criada; portanto, não há linha de teste a remover.

O teste prova que a URL está implantada, mas a conta que executa o Web App não consegue abrir a planilha. O `doGet()` antigo não consultava o Google Sheets e, por isso, seu `ok: true` não comprovava a escrita.

## Correção e reimplantação

1. Confirme que a conta Google usada para implantar o Web App é proprietária ou editora da planilha `1_uO8I7yUHRxmIPX12MPZngfkCkrULrwdRGxCbuk6BcI`.
2. Se necessário, compartilhe a planilha com essa conta ou entre na conta proprietária.
3. No Apps Script, substitua o código pelo conteúdo atualizado de `APPS-SCRIPT-LEADS.gs`.
4. Salve e escolha **Implantar → Gerenciar implantações → Editar → Nova versão**.
5. Mantenha:
   - executar como: proprietário da planilha;
   - quem pode acessar: qualquer pessoa.
6. Autorize novamente o acesso ao Google Sheets e conclua a implantação.
7. Abra a mesma URL `/exec`. O retorno correto agora precisa conter `ok: true` e `spreadsheetId: "1_uO8I7yUHRxmIPX12MPZngfkCkrULrwdRGxCbuk6BcI"`.
8. Envie um lead de QA e confirme a linha na aba `Leads - Portal das Felinas`.
9. Apague a linha de QA.

O script atualizado usa `SpreadsheetApp.openById(...)`, em vez de depender de um vínculo implícito, e o `doGet()` passa a testar acesso real à planilha.

## Fluxo codificado

```text
CTA
  → formulário com consentimento
  → backup local
  → envio não bloqueante ao Apps Script
  → planilha
  → checkout PagTrust
```

O envio usa `sendBeacon` com fallback para `fetch(..., keepalive: true)`, preserva `origem` e UTMs e nunca bloqueia a venda se a planilha estiver indisponível.

O redirecionamento também envia `name` e `email` por query string para o pre-fill nativo da PagTrust. O parâmetro `funnel` do checkout é preservado.
