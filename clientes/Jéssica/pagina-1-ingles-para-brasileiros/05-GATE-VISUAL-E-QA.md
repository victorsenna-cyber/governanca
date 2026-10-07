# Gate visual e QA da Página 1

> **Revisão de D1 em 30/07/2026:** o gate abaixo registra a primeira implementação publicada. A âncora gráfica do hero foi posteriormente reprovada e substituída localmente pelo hero tipográfico documentado em `08-HERO-TIPOGRAFICO-IMPLEMENTADO.md`. Para D1, prevalecem o novo documento e as capturas `qa/hero-redesign-*`. As demais dobras permanecem cobertas por este gate.
>
> **Revisão de D6 em 03/08/2026:** o retrato real de Jéssica e as 15 capturas de depoimentos foram integrados localmente na dobra de origem e prova. O retrato usa proporção natural e os depoimentos aparecem em rotação no mesmo plano. Para D6, prevalece `09-INTEGRACAO-FOTO-E-DEPOIMENTOS.md`. A versão publicada não foi alterada nesta revisão.
>
> **Objeto:** `site/`  
> **Data:** 30/07/2026  
> **Veredito local:** APROVADA COMO PRÉVIA  
> **Veredito de produção:** PUBLICADA COMO PRÉVIA SEGURA; ATIVAÇÃO COMERCIAL BLOQUEADA PELOS GATES EXTERNOS

## 1. Estado entregue

- HTML semântico, CSS mobile-first e JavaScript progressivo;
- dez dobras D0–D10 na ordem aprovada;
- quatro CTAs com o rótulo exato “Quero conversar com a Jéssica”;
- captura curta com nome, WhatsApp, objetivo e consentimento;
- modo de prévia seguro: nenhum dado é persistido, enviado ou redirecionado enquanto número e endpoint estiverem vazios;
- superfícies brancas/off-white com grid de 76 px;
- D8 como único clímax rubi;
- card da oferta em vidro esfumaçado, borda dourada e raio de 13 px;
- hero tipográfico sem retrato e fotografia real restrita à D6, onde a página apresenta Jéssica.

## 2. Gate dos nove passes

| Passe | Veredito | Evidência |
|---|---|---|
| 1. Direção | PASSA | “Editorial de presença” reconhecível em hero, método, oferta e fecho; grid, órbita, Fraunces e linha dourada formam linguagem própria |
| 2. Sistema | PASSA | paleta, tipografia, espaçamento, grid, elevação e raios declarados em tokens; raios de interface restritos a 8, 10 e 13 px |
| 3. Hierarquia | PASSA | leitura de maior peso: promessa → trava → custo → método → entrega → origem → qualificação → decisão → dúvidas → conversa |
| 4. Clímax | PASSA | somente a D8 usa superfície rubi invertida e alta densidade decisória |
| 5. Estados | PASSA | CTAs, links, FAQ, campos, opções, consentimento, modal e envio têm repouso, sobre, foco e ativo; formulário inclui erro, carregando e prévia |
| 6. Acessibilidade | PASSA | Lighthouse 100; teclado completo; foco retorna ao CTA; `Esc` fecha; sem alvos menores que 44 px; zoom/refluxo e movimento reduzido testados |
| 7. Mobile | PASSA | testado em 375, 390 e 768 px; zero estouro; H1 em três linhas visuais a 375 px; CTA aparece no primeiro contato; oferta empilha sem reescrita |
| 8. Movimento e performance | PASSA | conteúdo existe sem JavaScript; movimento reduzido deixa tudo visível; TBT 0 ms; CLS 0; Lighthouse Performance 85 |
| 9. Integridade | PASSA NA PRÉVIA | copy e preços conferidos; zero número provisório; zero banco de imagem; zero rosto sintético; spec e gates anexados |

## 3. Score visual

| Dimensão | Nota | Evidência |
|---|---:|---|
| Intenção | 9 | direção adulta, editorial e ligada à metáfora do olhar |
| Hierarquia | 9 | a narrativa continua legível só pelos títulos e ações |
| Clímax | 10 | rubi e vidro aparecem apenas na decisão |
| Consistência | 9 | grid, tipografia, linhas e raios mantêm o sistema |
| Acessibilidade | 10 | auditoria automatizada e manual sem achado crítico |
| Acabamento | 9 | desktop, tablet, celular, modal e oferta revisados visualmente |
| **Total** | **56/60** | acima do piso de 42/60 |

## 4. Auditoria mecânica

### Viewports

| Largura | Resultado |
|---:|---|
| 375 px | zero rolagem horizontal; CTA do hero dentro do primeiro viewport; oferta com 335 px úteis |
| 390 px | zero rolagem horizontal; modal validado; card de oferta com 350 px úteis |
| 720 px | refluxo equivalente ao zoom de 200% sem rolagem horizontal |
| 768 px | zero rolagem horizontal; hero e oferta re-hierarquizados |
| 1440 px | zero rolagem horizontal; H1 em três linhas; D8 preserva o clímax |

### Ampliação e movimento

- texto ampliado a 200% em 1440 px: `scrollWidth = clientWidth = 1440`;
- `prefers-reduced-motion: reduce`: opacidade 1, transformação `none`, duração funcional mínima;
- sem JavaScript: H1, CTA, oferta e todos os preços continuam presentes e visíveis.

### Teclado e modal

- abertura por `Enter`;
- foco inicial em “Primeiro nome”;
- `Shift+Tab` da primeira ação fecha o ciclo no botão de envio;
- `Tab` da última ação retorna ao botão de fechar;
- `Esc` fecha;
- foco retorna ao CTA de origem;
- erros específicos por campo e status com `aria-live`.

### Integridade da copy

- um único `h1`;
- quatro CTAs principais com o rótulo aprovado;
- zero ocorrência do número provisório `553173420800`;
- H1, títulos D2–D10 e todos os preços encontrados no DOM;
- valores confirmados:
  - R$ 497/mês;
  - R$ 798/mês;
  - R$ 1.320/mês;
  - R$ 1.700/mês;
  - 6 × R$ 327 ou R$ 1.962;
  - 6 × R$ 357 ou R$ 2.142 por pessoa.

## 5. Lighthouse

Relatório: `qa/lighthouse-final.json`.

| Categoria | Nota |
|---|---:|
| Performance | 85 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

Métricas principais:

- FCP: 3,3 s em simulação móvel do Lighthouse;
- LCP: 3,3 s;
- TBT: 0 ms;
- CLS: 0.

O custo residual de primeiro paint está concentrado no carregamento remoto das fontes. A página usa `display=swap`, não bloqueia o conteúdo por JavaScript e mantém Georgia/Inter do sistema como fallback. Auto-hospedar Fraunces é uma otimização possível antes de escala, desde que a origem/licença do arquivo seja registrada.

## 6. Capturas

- `qa/desktop-1440-hero.png`
- `qa/desktop-1440-offer-fold.png`
- `qa/desktop-1440-offer-full.png`
- `qa/desktop-1440-fullpage.png`
- `qa/tablet-768-hero.png`
- `qa/mobile-390-hero.png`
- `qa/mobile-375-hero.png`
- `qa/mobile-375-offer-fold.png`
- `qa/mobile-390-offer-fold.png`
- `qa/mobile-390-modal-preview.png`

## 7. Gates para ativação comercial e tráfego

### P0

1. receber o novo número corporativo da Jéssica;
2. receber o endpoint `/exec` do Apps Script;
3. testar escrita real e conferir todos os campos na planilha;
4. conferir o texto de consentimento contra o fluxo definitivo;
5. obter aprovação humana da copy e do design.

### P1 antes do tráfego

1. conferir documentalmente a certificação, se a linha permanecer;
2. receber e autorizar retrato real em alta resolução, se for substituir a âncora gráfica;
3. autorizar nome/arroba/print antes de identificar o depoimento;
4. conferir correspondência entre anúncio e H1 quando existir campanha.

## 8. Decisão

A Página 1 está construída, verificável localmente e publicada em `https://jessica-emotional-speaking.vercel.app` como prévia segura. Ela não deve receber tráfego nem ser tratada como canal de conversão enquanto o `CONFIG` de `site/script.js` permanecer em modo de prévia e os P0 não forem fechados.
