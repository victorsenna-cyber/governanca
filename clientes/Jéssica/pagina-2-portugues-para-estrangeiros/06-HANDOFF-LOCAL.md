# Handoff local da Página 2

## Resultado entregue

Foi criada uma nova página de vendas para **português brasileiro para estrangeiros**, totalmente isolada da Página 1.

A página abre em inglês e alterna integralmente para português do Brasil na mesma URL. A direção visual é editorial, calorosa e centrada em conversa ao vivo. As duas fotografias usadas vieram do diretório canônico da Jéssica.

## Como abrir

No PowerShell, a partir de `site`:

```powershell
python -m http.server 4177 --bind 127.0.0.1
```

Depois, abrir `http://127.0.0.1:4177/`.

## Estrutura

- `01-PLANEJAMENTO-E-ARQUITETURA.md`: brief, fatos, pesquisa de linguagem, curva D0 a D10 e gates;
- `02-COPY-DE-PRODUCAO.md`: copy integral em inglês e português do Brasil;
- `03-GATE-DE-COPY.md`: veredito de copy e pendências comerciais;
- `04-TESE-VISUAL-E-SPEC-DE-IMPLEMENTACAO.md`: tese visual, tokens, componentes e estados;
- `05-GATE-VISUAL-E-QA.md`: testes executados e evidências;
- `07-DEPLOY-PRODUCAO-VERCEL.md`: projeto, deployment, hashes e verificação pública;
- `site/index.html`: marcação semântica e conteúdo padrão em inglês;
- `site/styles.css`: sistema visual responsivo;
- `site/script.js`: tradução, modal, validação local, progressão e CTA mobile;
- `site/assets`: cópias locais das duas fotos selecionadas;
- `qa`: capturas de tela do passe final.

## Integridade dos ativos copiados

| Arquivo | SHA-256 |
|---|---|
| `site/assets/jessica-hero.jpeg` | `7D4FD41562112B6F3CBFE7CD1AF503FDCF69D02E42958A7822D86DE7F707F95A` |
| `site/assets/jessica-portrait.jpeg` | `9C6DE936929B5738FEFF047EBBA2696DD9C58363CC71C2FEBB1E7273B560DD15` |

## Estado do circuito comercial

O formulário é deliberadamente seguro. Ele valida o contexto e prepara a mensagem, mas não envia, armazena ou abre WhatsApp. Nenhum telefone ou endpoint foi incluído.

Para ativar o fluxo comercial completo, ainda é necessário confirmar:

- preços e condições dos planos mensal e semestral;
- WhatsApp corporativo atual;
- fluxo depois do clique e contrato de dados;
- disponibilidade, cancelamento e eventual garantia;
- permissão de identificação dos depoimentos.

## Estado final

- build local: concluído;
- QA local: aprovado;
- Página 1: preservada;
- deploy: produção Vercel executada em projeto independente;
- URL: `https://jessica-portugues-brasileiro.vercel.app`;
- QA de produção: aprovado;
- captação e automação comercial: bloqueadas até fechamento dos gates acima.
