# Gate visual e QA da Página 2

**Data do passe final:** 2026-08-03

**Resultado local:** `APROVADA`

**Deploy:** `PRODUÇÃO VERCEL EXECUTADA E VERIFICADA`

## Matriz de verificação

| Frente | Evidência | Resultado |
|---|---|---|
| carga da página | HTTP 200 e 23.453 bytes no documento inicial | passou |
| HTML | `html-validate` sem erros ou avisos | passou |
| JavaScript | `node --check` sem erros | passou |
| conteúdo inicial | snapshot semântico encontrou H1, todas as regiões D1 a D10 e CTAs | passou |
| idioma padrão | `html[lang="en"]`, título e conteúdo em inglês | passou |
| alternância | atualiza texto, metadados, `lang`, `alt`, `aria-label`, placeholder, opções e `aria-pressed` na mesma URL | passou |
| cobertura de tradução | nenhuma chave `data-i18n` ficou sem tradução em PT-BR | passou |
| desktop | 1440 × 1000 em EN e PT-BR, sem overflow horizontal | passou |
| mobile | 390 × 844 e 375 × 667, CTA e início da foto no primeiro viewport, sem overflow horizontal | passou |
| modal | cabeçalho, campos e estados traduzidos; rolagem interna em telas baixas | passou |
| validação | seis campos obrigatórios sinalizados; foco encaminhado ao primeiro erro | passou |
| captura segura | mensagem preparada localmente; zero `fetch`, POST, beacon, storage ou request no envio | passou |
| teclado | dialog fecha com `Esc`, devolve foco ao CTA e mantém foco dentro do modal durante `Tab` | passou |
| acessibilidade automatizada | axe-core 4.12.1, WCAG 2 A/AA: 0 violações na página e 0 no modal | passou |
| contraste | violação inicial no eyebrow escuro corrigida; itens inconclusivos do axe eram fundos com gradiente/sobreposição e foram conferidos pelos tokens aplicados | passou |
| movimento reduzido | `prefers-reduced-motion: reduce` elimina animações e transições significativas | passou |
| console | 0 erros de página | passou |
| estabilidade | CLS 0; FCP e LCP locais em 172 ms; TTFB local em 0,9 ms | passou localmente |
| segurança comercial | varredura sem `wa.me`, API do WhatsApp, Apps Script, `/exec`, `fetch`, XHR, beacon ou URL externa fora das fontes | passou |
| linguagem pública | varredura sem travessão e sem espaços finais | passou |
| isolamento | todas as gravações desta task ficaram sob `pagina-2-portugues-para-estrangeiros`; a Página 1 preexistente permaneceu fora do escopo de escrita | passou |
| integridade publicada | 5 arquivos remotos comparados com a origem; 0 diferenças SHA-256 | passou |
| produção | alias estável respondeu HTTP 200 com 23.453 bytes e deployment `READY` | passou |
| navegador em produção | EN e PT-BR, desktop e mobile, modal seguro, 0 erros e 0 requests no envio | passou |
| acessibilidade em produção | axe-core 4.12.1, WCAG 2 A/AA: 0 violações | passou |

## Acessibilidade manual

- hierarquia de heading única, de H1 para H2 e H3;
- link de salto no início;
- botões de idioma com `aria-pressed` e anúncio em região `aria-live`;
- imagens com texto alternativo traduzido;
- FAQ com `details` e `summary` nativos;
- modal nativo `dialog`, rótulos explícitos, erros associados visualmente e retorno de foco;
- foco visível com contorno dourado;
- a página continua legível na largura equivalente a zoom de 200% de um desktop de 1440 px.

## Evidências visuais

- `qa/desktop-en-full.png`
- `qa/desktop-en-annotated.png`
- `qa/desktop-ptbr-full.png`
- `qa/mobile-en-390x844.png`
- `qa/mobile-ptbr-390x844.png`
- `qa/mobile-en-375x667.png`
- `qa/mobile-ptbr-modal.png`
- `qa/production-desktop-en.png`
- `qa/production-mobile-ptbr.png`

## Limites deste gate

- Os números de FCP, LCP e TTFB registrados acima são do servidor local e não equivalem a uma série de campo em produção.
- As fontes são carregadas do Google Fonts; a decisão de auto-hospedar pode ser tomada em uma iteração posterior.
- O deploy estático foi autorizado e executado, mas o gate não libera tráfego, captura nem conexão comercial; essas confirmações continuam listadas em `03-GATE-DE-COPY.md`.
