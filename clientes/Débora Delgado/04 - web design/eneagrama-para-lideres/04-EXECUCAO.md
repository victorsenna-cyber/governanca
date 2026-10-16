# 04 · EXECUÇÃO · Página da VSL · Eneagrama para Líderes

> STATUS: **fonte · etapa 4 do circuito de página** (`00-core/roteador/ARVORE-ESCRITA.md` §6) · 16/10/2026 · skill `10-skills/ui-ux-designer-senior-continuum/` em **modo EXECUÇÃO** (designer de tela) sobre `01-FISICA.md`, `02-DIRECAO-VISUAL.md` e `03-COPY.md` (texto usado **literal**).
> **Entregue:** `site/lideres/index.html` (HTML, CSS e JS num arquivo) + `site/lideres/img/` (4 imagens). **Não publicado.** Etapa 5 (gate dos 8 passes + checklist de mídia) e aprovação (Débora: copy e foto; Victor: publicação) seguem pendentes.
> **Capturas:** `site/_capturas/` (77 PNG: 360×800, 390×844 e 1440×900; com e sem `?preview=1`; `?oferta=1`; `?f=a`; `?origem=quiz&nivel=3&alavanca=d4`; encerrada por `?agora=2026-12-17`; sem JavaScript; sticky).

---

## 1. O que foi feito

| Item | Estado |
|---|---|
| V0 a V6, sticky, rodapé, estado encerrado | construídos com a copy literal do `03-COPY.md`; ordem e conteúdo de `01-FISICA.md` §3 |
| Tokens, escala, grade, raio, elevação, grão do B, clarão | de `02-DIRECAO-VISUAL.md` §3; nenhum valor solto fora de token. **Censo de hex: 10** (limite 12). Sem `backdrop-filter`, sem pílula (o disco do play é o círculo previsto em §5.3), sem âmbar fora de V2 |
| Revelação da oferta | `V2..V6` + sticky + link do topo ficam em `#posPitch`. **Sem JS, a oferta fica visível** (E4); com JS, a classe `is-gated` é posta antes do primeiro paint (script curto no `<head>`) e a oferta só aparece por tempo de vídeo, `?oferta=1` ou memória (`localStorage lideres_pitch_v1`). Fade de opacidade 250 ms, sem translate, `prefers-reduced-motion` = instantâneo. **Zero CLS no player** (medido: o `y` do player é igual com a oferta fechada e aberta) |
| Player | fachada (poster + play de 72 px), **nada carrega antes do clique**, sem autoplay. Adaptadores: arquivo `.mp4/.webm`, YouTube, Vimeo, e iframe genérico (relógio desde o clique). Estados: repouso, carregando (spinner), tocando, erro (faixa abaixo do poster + "Tentar de novo", timeout de 20 s só para o carregamento, ver §9) |
| Funil A | `?f=a` **e** `?origem=quiz` (requisito do orquestrador, ver §3) trocam título e vídeo; `?f=b` volta ao B; persiste na sessão |
| Encerramento | `DATA_ENCERRAMENTO` compara com o relógio do visitante; depois dela: cartão claro "A turma fundadora fechou", **sem botão, sem checkout, sem clarão, sem âmbar, sem sticky, sem link do topo**; V3, V5 e V6 saem (prometem encontro ou compra); `ViewContent` não dispara |
| Acessibilidade | `lang=pt-BR`, 1 `h1`, `h2` por bloco, `<details>` nativo, play e "tentar de novo" são `<button>`, botões de compra são `<a>`; foco visível 3 px em tudo (duplo no player, `foco-inverso` no clímax); `aria-busy`; alvos de toque medidos ≥ 44 px (play 72, botão V2 64, V6 56, sticky 48, acordeão ≥ 56, link do topo 44, links do rodapé 44); `rem` nas fontes; `scroll-padding-bottom: 80px` para o sticky nunca cobrir o foco; zoom e reflow sem altura fixa em texto |
| Pixel e beacons | ver §4 |

## 2. Verificação (Chrome headless, `puppeteer-core`, sobre `file://`)

| Conferência | Resultado |
|---|---|
| Console | **zero erro e zero aviso** em todas as combinações (360, 390, 1440 × base, preview, oferta, preview+oferta, funil A, quiz, encerrada, `?agora` sem preview). Só `console.info` do stub do pixel (ver §4) |
| Rolagem horizontal | nenhuma, em nenhuma largura |
| Título de V1 | 360: **4 linhas** (teto da direção; a copy tem 69 caracteres, decisão C1) · 390: 4 linhas · 1440: 2 linhas. Funil A: 4 linhas em 360, 3 em 390 |
| Play na primeira tela | 360×800: centro do play em **y = 347** (previsto em `02` §4.2: 347 com título de 4 linhas); 390×844: 355; 1440×900: 522, e a credencial termina em y ≈ 855, dentro da dobra |
| Limites de linhas de §8, medidos em 360 | tag 1, nome do produto 1, pilha 1 a 2 por item, âncora 3, parcela 1, escassez 3, garantia 4 (390: 3), descrições de V3 3, nota de entrega 3, credencial de V4 3, eco 3, convite 3, lembrete 2, critérios 2 por item, respostas do acordeão 5 a 7. **Nenhum excede o limite duro** |
| Clímax | um só: cartão `--sup-invertida` com clarão âmbar, preço 72/112 px (o maior corpo da página) e botão âmbar de 64 px (o maior). Nada escuro nem âmbar fora de V2 (conferido nas capturas) |
| Sticky (360) | aparece no instante da revelação, some quando o botão de V2 entra na tela, volta quando sai (`360x800__sticky.png`, `360x800__v2-sem-sticky.png`) |
| Estados | `?preview=1`: marcas `{{…}}` em destaque (cores de sistema `Mark`/`MarkText`), aviso "Vídeo em breve" sobre o poster; sem preview: o elemento dependente é omitido, sem buraco no layout. `?agora=` **só** vale com preview (sem preview, a página segue aberta) |
| Sem JavaScript | oferta visível, botão de 64 px, sticky ausente, nenhuma marca `{{` à mostra, ladrilhos só com "quarta". Os botões compram se o `href` foi colocado no HTML (§7, "Sem JavaScript", e §9) |
| Teclado | ordem: link do topo → play → botão V2 → botão V3 → 8 perguntas → botão V6; sem armadilha |
| Fluxo real de vídeo | com um `.webm` sintético de teste e `PITCH_SECONDS = 3` (cópia em área temporária, **não** a entrega): play no clique → "tocando" → revelação aos 3 s → memória gravada → `VSLPlay`, `VSLPitch`, `VSL25/50/75` disparados → reload abre revelado → clique em V2 monta o checkout com `utm_source`, `utm_campaign`, `fbclid` preservando `?funnel=x` da constante → `InitiateCheckout` antes do redirecionamento |

**Não foi testado, e precisa ser:** aparelho real de 360 px ao sol (a skill exige); os adaptadores de YouTube, Vimeo e iframe com vídeo de verdade; legendas `.vtt` reais; o Pixel contra a rede (ver §4); Lighthouse/rede 4G; a razão de contraste final em tela (os pares seguem a tabela de `02` §9.1, não foram remedidos no navegador).

## 3. Requisito adicional do orquestrador: `?origem=quiz`

O quiz manda `VSL_URL + '?origem=quiz&nivel=N&alavanca=dX'`, concatenando `?`.

- `?origem=quiz` é tratado **exatamente** como `?f=a`: título do funil A, vídeo `VIDEO_A`, `data-f="a"` no `<html>`. Também aceita `?f=a`, e tolera a forma malformada `?f=a?origem=quiz...` (só o primeiro caractere de `f` conta).
- `nivel` (1 a 2 dígitos) e `alavanca` (`[A-Za-z0-9_-]`, até 20 caracteres) são validados e repassados como **parâmetros personalizados** do `ViewContent` (`{content_name, value:297, currency:'BRL', funil:'a', nivel:'3', alavanca:'d4'}`, conferido no log). Valor fora do padrão é descartado em silêncio.
- Persistem na sessão (`sessionStorage`), então `InitiateCheckout` e os beacons seguem com o mesmo `funil`, `nivel` e `alavanca`. `funil` entra em **todo** evento.
- Consequência para o funil A: a abertura do vídeo é outra (D01A–D04A), então `PITCH_SECONDS_A` existe separado (vazio = usa `PITCH_SECONDS`).

⚠️ **Ponto para o quiz, não para a página:** como o quiz concatena só `origem`, `nivel` e `alavanca`, as UTMs do anúncio original **não chegam** à página no funil A. A página já lê `utm_*` e `fbclid` se vierem na mesma query; o quiz precisa repassá-los, senão a venda do funil A perde atribuição.

## 4. Pixel, eventos e UTMs

- **Pixel `4060021607461178`** (o de julho). `PageView` e `ViewContent` no load; `InitiateCheckout` no clique de compra, 200 ms antes do redirecionamento (rótulo preservado, spinner, `aria-busy`); `Purchase` fica por conta da PagTrust. Eventos de vídeo customizados: `VSLPlay`, `VSL25`, `VSL50`, `VSL75`, `VSLPitch` (E13).
- **Beacons** (E20) ao `LEADS_ENDPOINT` de julho com `page:'lideres'`: `pageview`, `view_v1…v6`, `reveal_{tempo|param|memoria}`, `video_play`, `video_25/50/75`, `video_pitch`, `video_100`, `cta_click_{oferta|encontros|fecho|sticky|topo}`, `faq_open_{1..8}`, `checkout_start`.
- **Decisão de execução:** pixel e beacons só ligam quando a página roda em `http(s)` fora de `localhost` **e** sem `?preview=1`. Em arquivo local e em preview, `fbq` é um stub que só loga em `console.info`. Motivo: testar a página não pode sujar o pixel da conta nem a planilha do funil. **Consequência:** a verificação do Pixel real é uma etapa do checklist abaixo; eu não a fiz.
- **UTMs:** `utm_source/medium/campaign/content/term` e `fbclid` são lidos da URL (e guardados na sessão), e injetados em todo link de checkout com `URL` + `searchParams.set`, sem supor `?` na constante (E14). Nada é repassado de `nivel`/`alavanca` ao checkout.
- **CAPI:** não existe do lado da página (Hostinger estática, sem servidor). Continua a decisão do Victor, `01-FISICA.md` §8 #7.

## 5. Decisões de execução e desvios

| # | Decisão ou desvio | Motivo |
|---:|---|---|
| X1 | **Sticky leva a `#oferta`, não ao checkout** (flag `CONFIG.STICKY_VAI_PARA_CHECKOUT`, padrão `false`). `03-COPY.md` §Marcas lista o sticky entre os botões que usam `CHECKOUT_URL`, mas a copy do próprio sticky (§2) e `01-FISICA.md` §3 e §4 dizem "botão para `#oferta`", com evento `cta_click_sticky`. Segui a física (nasce no mesmo instante de V2 para que *"o botão está aqui embaixo"* seja verdade no celular). Trocar é uma linha | contradição entre dois documentos; a física precede e o texto do sticky concorda com ela. **Decisão do CEO se quiser compra em um toque** |
| X2 | **CONFIG ampliado** além dos 5 campos pedidos: `LEADS_ENDPOINT`, `LEGENDAS_B/A` (`.vtt`, só para arquivo próprio), `PITCH_SECONDS_A`, `STICKY_VAI_PARA_CHECKOUT` e `MARCAS` (os fatos `{{…}}`) | preencher marcas por `CONFIG` evita editar o HTML; o resto são lacunas da física (E5, E20, funil A) |
| X3 | **Marcas:** preenchidas por JS. **Sem JS elas somem, mesmo preenchidas** (a oferta, esta sim, fica visível). Declaração de cada uma abaixo | o HTML guarda os elementos dependentes com `hidden`; sem JS nenhum `{{…}}` pode vazar para o público |
| X4 | **Poster provisório é uma composição**, não o frame do vídeo: `debora-d6@2x.webp` na altura do quadro, no terço direito, com a parede amostrada da própria foto estendida à esquerda (`poster-720.webp`, 7 KB; `poster-1440.webp`, 19 KB). O recorte 16:9 puro não cabe: o rosto tem ~930 px de altura contra 900 de quadro | `02` §5.2 prevê crop provisório e rosto no terço direito. **Trocar pelo frame final (`01-FISICA.md` §8 #11)**; a junta à direita da composição aparece em tela grande |
| X5 | **Clarão** posicionado em `top:-110px` (mobile) e `-170px` (desktop), com o gradiente do token intacto | para o brilho aparecer acima do cartão e não escondido atrás dele; o resultado é discreto e só existe em `#oferta` |
| X6 | **Estado encerrado:** além da oferta, saem V3, **V4**, V5 e V6, o sticky e o link do topo (todos levam a classe `so-aberta`); **ficam** só V1 (título, player, credencial) e o rodapé, mais o cartão claro "A turma fundadora fechou". O player continua tocando o vídeo, cujo pitch fala de uma oferta que fechou | E10 só manda trocar a oferta; V3, V5 e V6 prometem encontro e compra, e V4 (quem conduz, para quem é) sem botão não vende nada. *(Texto anterior dizia que V4 ficava; o código sempre o tirou. Corrigido pelo gate, P2-3.)* **A retirada manual do arquivo em 16/12 continua obrigatória** (E10) |
| X7 | **`text-wrap: balance`** em `h2/h3` e `pretty` em parágrafos | evita viúva ("é" sozinho no título de V4, "vivo" no subtítulo do calendário); não aumenta o número de linhas medido |
| X8 | **Espaço sem quebra** em `R$ 6.000`, `R$ 297 ou 12×` (âncora, lembrete, sticky) | o `R$` ficava numa linha e o valor na outra. Mesmos caracteres visíveis; é tipografia |
| X9 | **Links do rodapé com alvo de 44 px** (padding vertical com margem negativa) | pedido de alvo ≥ 44 px |
| X10 | **Linha `<noscript>`**: "Para assistir à aula, ative o JavaScript do navegador." **Não está no `03-COPY.md`** | sem JS o play é botão morto; é aviso técnico. Se a Débora não quiser, remover a linha |
| X11 | **Nome acessível do play:** "Assistir à aula"; do vídeo: "Aula em vídeo" | rótulos técnicos, não aparecem na tela |
| X12 | **`og:image` fica comentada** no `<head>` | o scraper do Facebook não roda JS; a tag precisa existir estática com a URL real (ver checklist) |
| X13 | **`#preview` ferramentas:** dois botões ("Simular pitch", "Limpar memória") só com `?preview=1`; `?barra=0` esconde | testar a revelação sem esperar 18 minutos |

**Marcas `{{…}}`, o que cada uma omite sem `?preview=1` (e sem valor em `CONFIG.MARCAS`):**

| Marca | Elemento que depende dela, e o que acontece |
|---|---|
| `{{HORARIO}}` | segmento "· horário" nas 4 linhas dos ladrilhos de V3 sai; sobra "quarta" |
| `{{DURACAO}}` | o **chip inteiro** do poster ("{{DURACAO}} min · com legendas") sai |
| `{{NOME_DE_QUEM_VENDE}}`, `{{CPF_OU_CNPJ}}` | o bloco 1 do rodapé sai (precisa dos dois) |
| `{{EMAIL_SUPORTE}}` | o bloco "Suporte: …" sai |
| `{{URL_TERMOS}}`, `{{URL_PRIVACIDADE}}` | cada link do bloco 3 sai sozinho; "Pagamento seguro via PagTrust" é independente das marcas e só aparece no estado revelado (ver §9) |
| `{{OG_IMAGEM}}` | não é marca no HTML: é a linha `og:image` comentada no `<head>` |

⚠️ **Sem identificação legal no rodapé é página sem identificação.** A omissão é a degradação segura do layout, não autorização para publicar sem os fatos (P0/P1 de `01-FISICA.md` §8).

## 6. Notas para a copy (não resolvidas aqui)

1. **Contradição de destino do sticky** (X1): `03-COPY.md` §Marcas diz checkout, §2 diz `#oferta`. Corrigir um dos dois.
2. **Data `16/12` está escrita em 4 lugares** (V2 escassez, ladrilho 1 de V3 como numeral, lembrete de V6, cartão encerrado) e `DATA_ENCERRAMENTO` em outro. Se o horário mudar a data, tudo muda junto.
3. **Se `{{HORARIO}}` vier como faixa** ("19h às 20h30"), a linha do ladrilho quebra em 2 linhas no 360 (cabe, não corta). O limite de 14 caracteres da direção não vale mais.
4. **Chip sem `{{DURACAO}}`:** a promessa "com legendas" some junto. Se a duração demorar, considerar uma versão do chip só com "com legendas".
5. **Funil A em 360 ocupa 4 linhas** (64 caracteres, tem de caber no teto de 70): ok, mas a primeira tela do quiz carrega o título mais pesado que o do B em 390.
6. Linha `<noscript>` nova (X10).

## 7. Checklist de publicação

**Preencher no `CONFIG`** (topo do primeiro `<script>` do `<head>`):

| Campo | O quê | Classe |
|---|---|---|
| `CHECKOUT_URL` | link PagTrust da oferta nova (R$ 297, 12×). Pode vir com `?` | **P0** |
| `VIDEO_B` | arquivo `.mp4/.webm`, ou URL/ID de YouTube ou Vimeo, ou URL `https` de outro player | **P0** |
| `PITCH_SECONDS` | segundo em que o preço é dito (início de D30), **medido no vídeo editado**. Hoje 1095 é estimativa | **P0** |
| `LEGENDAS_B` | `.vtt` pt-BR (só se o vídeo for arquivo próprio; YouTube/Vimeo usam as do provedor). **Legendas são obrigatórias (E5)** | **P0** |
| `MARCAS.HORARIO`, `.DURACAO` | horário dos encontros; duração em minutos (só o número) | P0 |
| `MARCAS.NOME_DE_QUEM_VENDE`, `.CPF_OU_CNPJ`, `.EMAIL_SUPORTE`, `.URL_TERMOS`, `.URL_PRIVACIDADE` | rodapé | P1 |
| `DATA_ENCERRAMENTO` | trocar quando o horário do 1º encontro existir | P1 |
| `VIDEO_A`, `LEGENDAS_A`, `PITCH_SECONDS_A` | só quando o quiz v6 estiver corrigido e o vídeo A existir | só `?f=a` |
| `PIXEL_ID`, `LEADS_ENDPOINT` | já preenchidos (julho). Conferir que o Apps Script tem `lideres` em `ORDEM_DOBRAS_POR_PAGINA` (`01-FISICA.md` §8 #8) | P1 |

**Sem JavaScript (marca única):** a string `href="#oferta" data-checkout` aparece **3 vezes** no `index.html` (botões de V2, V3 e V6) e em nenhum outro lugar. Fazer *localizar e substituir tudo* por `href="URL-DO-CHECKOUT" data-checkout` (em atributo HTML, `&` vira `&amp;`). Com JS o `href` é remontado de `CHECKOUT_URL` com as UTMs; sem JS vale o que está no HTML. Se não for trocada, o botão sem JS leva a `#oferta` (nunca a link quebrado).

**Imagens:** substituir `img/poster-720.webp` e `img/poster-1440.webp` pelo frame final (rosto no terço direito; ≤ 60 KB e ≤ 110 KB); criar `img/og.jpg` (1200×630) e descomentar a linha `og:image` no `<head>`; **a Débora aprova a foto de V4 e o poster** (`05 - design/fotos/PLANO-FOTO-DEBORA.md`, "Pendente").

**Onde subir:** Hostinger, `public_html/lideres/` ← o **conteúdo** de `site/lideres/` (`index.html` + `img/`). Endereço final: `https://deboradelgado.space/lideres/` (com a barra final). **Não subir `site/_capturas/`.** A página já tem `noindex, nofollow`; não linkar de lugar nenhum do site.

**Como testar o Pixel (depois de subir, fora de `?preview=1`):**
1. Chrome com **Meta Pixel Helper**: abrir `…/lideres/?utm_source=teste` → `PageView` e `ViewContent` (com `funil:b`, `value:297`, `BRL`).
2. Events Manager → Test Events com o código de teste: repetir; ver `ViewContent`, depois dar play e ver `VSLPlay`.
3. Para não esperar 18 minutos: abrir `…/lideres/?preview=1` **não serve** (o pixel é desligado em preview). Use `…/lideres/?oferta=1` (revela sem vídeo) e clique em V2: confere `InitiateCheckout` e o redirecionamento ao checkout com as UTMs. Para testar `VSLPitch`, dê play e **arraste a barra do vídeo** para depois de `PITCH_SECONDS`.
4. Funil A: `…/lideres/?origem=quiz&nivel=3&alavanca=d4` → `ViewContent` com `funil:a`, `nivel:3`, `alavanca:d4`, título do funil A.
5. Para testar a revelação de novo: apagar `localStorage` (`lideres_pitch_v1`) do domínio.
6. Conferir no Apps Script que os beacons chegam com `page:'lideres'`.

**Antes de abrir mídia:** `CHECKOUT_URL` e vídeo preenchidos (senão o botão leva a `#oferta` e o play não faz nada, só um aviso no console); abrir `?preview=1` e **não restar nenhuma marca `{{…}}` em destaque**; checar em aparelho real de 360 px; rodar `?preview=1&agora=2026-12-17` e ver o estado encerrado; testar `?oferta=1` só para públicos de retargeting de quem chegou ao pitch (E3).
**Em 16/12:** o relógio do visitante fecha a oferta, mas a **retirada manual da pasta continua obrigatória** (E10).

## 8. O que falta

| Falta | Dono |
|---|---|
| `CHECKOUT_URL`, vídeo editado (arquivo/ID), `PITCH_SECONDS` medido, legendas `.vtt`, provedor do player | Victor (P0) |
| Horário dos 4 encontros e duração do vídeo | Victor (P0) |
| Identificação legal, e-mail de suporte, termos, privacidade | Victor (P1) |
| Frame final do vídeo (poster) e `og.jpg`; aprovação da foto | Victor + Débora (P2) |
| Teste em aparelho real, Pixel contra a rede, os adaptadores YouTube/Vimeo/iframe com vídeo real, Lighthouse | Etapa 5 / Victor |
| Decidir X1 (sticky: `#oferta` ou checkout) e X10 (`<noscript>`) | CEO |
| Vídeo do funil A e correção do quiz v6; quiz repassar `utm_*` | Victor (bloqueia só `?f=a`) |
| Etapa 5: gate dos 8 passes + checklist de mídia | CEO, papel do juiz |

---

## 9. Correções do gate (`05-GATE.md`, 16/10/2026)

Corrigidas em `site/lideres/index.html`; **copy intacta**. Reverificadas em Chrome headless (360×800 e 1440×900; base, `?preview=1`, `?oferta=1`, `?f=a`, `?origem=quiz`, `?preview=1&agora=2026-12-17`): **zero erro e zero aviso de console**, sem rolagem horizontal, play em y=347 (360) e 522 (1440), como antes.

| Achado | O que mudou | Como foi verificado |
|---|---|---|
| **P1-1** timeout de 20 s derrubava o vídeo do provedor quando o autoplay era bloqueado | O timer agora vigia **só o carregamento**. Nova `onReady()` o cancela em `onReady` (YouTube), `loaded` (Vimeo), `loadedmetadata` e no `catch` do `play()` (arquivo) e no `load` (iframe genérico), e põe o player nativo do provedor visível (poster e play nosso saem) para o segundo toque. `onFail` só roda por erro de verdade (`onError` do YouTube, que agora loga o código, erro do arquivo, falha do script do provedor) ou por não carregar em 20 s | arquivo com `play()` forçado a rejeitar: após 25 s o `<video>` segue no player, estado "tocando", sem erro. YouTube com `autoplay:0` (equivale a autoplay bloqueado): após 25 s o iframe segue lá, sem erro, oferta ainda fechada. Vimeo: iframe segue após 25 s. YouTube com autoplay e `PITCH_SECONDS=3`: revelou. **Não testado:** iPhone e navegador do Instagram reais |
| **P1-2** funil A com `VIDEO_A` vazio caía num play morto | `VIDEO_A` vazio: o funil A usa `VIDEO_B`, `LEGENDAS_B` e `PITCH_SECONDS` do B, **mantendo o título do A** (`console.info` avisa). `PITCH_SECONDS_A` só vale se `VIDEO_A` existir. Com os dois vazios segue o aviso (`console.warn` e, no preview, "Vídeo em breve") | `?origem=quiz&nivel=3&alavanca=d4` em cópia de teste com `VIDEO_B`: título A, vídeo B tocou, pitch revelou aos 3 s, eventos com `funil:a` |
| **P2-1** sem JS os botões não compravam | Marca única `href="#oferta" data-checkout` (3 ocorrências), documentada no §7 e no comentário do `CONFIG`. Sem substituição o comportamento é o de antes (`#oferta`) | JS desligado, marca substituída em cópia: os 3 botões têm o `href` do checkout |
| **P2-3** doc divergia do código no estado encerrado | X6 reescrito acima: V4 sai junto com V3, V5 e V6 | — |
| **P2-6** "Pagamento seguro via PagTrust" antes do pitch | Passa a aparecer só no estado revelado (e **também** some no encerrado, onde não há venda). Termos e privacidade continuam sempre visíveis, com os separadores corrigidos, e o parágrafo some inteiro se não sobrar nada. **Sem JS** aparece, porque a oferta também aparece (E4) | `is-gated`: ausente · `?oferta=1`: presente · encerrado: ausente · sem JS: presente |

**Fora do escopo desta rodada, seguem abertos no gate:** P2-2 (CONFIG à mão), P2-4 (tabela de marcas do `03`), P2-5 (poster e `og.jpg`), P2-8 (`funil` no checkout), P1-9 (UTMs no quiz).
