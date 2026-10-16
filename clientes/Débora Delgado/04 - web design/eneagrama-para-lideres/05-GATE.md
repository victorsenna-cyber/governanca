# 05 · GATE · Página da VSL · Eneagrama para Líderes

> STATUS: **fonte · etapa 5 do circuito de página** (`00-core/roteador/ARVORE-ESCRITA.md` §6) · 16/10/2026 · skill `10-skills/gerador-web-designer-senior-continuum/`, papel **juiz de publicação** (SKILL.md, 8 passes + `referencias/06-gate-diagnostico-e-antipadroes.md`). O juiz não reescreve: consolida os gates de física (`01`), visual (`02` + `04`) e copy (`03`) e decide.
> **Entradas conferidas:** `01-FISICA.md` · `02-DIRECAO-VISUAL.md` · `03-COPY.md` · `04-EXECUCAO.md` · `site/lideres/index.html` (860 linhas, lido inteiro) · `site/_capturas/` (360×800, 390×844 e 1440×900; base, `?oferta=1`, encerrada, sem JS, sticky) · `12 - Direct Response/vsl/2026-10-11/G6-ROTEIRO-v4.2.md` (D01–D04, D26–D36, D01A–D04A) · `vsl/BRIEFING-VSL.md` §3, §8, §12 · `100-métodos/METODO-GATE-DE-CONGRUENCIA.md` §3 · `quiz/site/quiz/app.js` + `quiz/CORRECAO-QUIZ-v7-2026-10-16.md`.
> **Contexto de decisão:** teste declarado, sem depoimento; a página sai do ar em 16/12; Hostinger estática, upload manual; quem publica é o Victor.

---

## 0. O fluxo de publicação em uma tela

```
 [P0 · fatos do Victor]          [P0 · conferências na URL real]           [P1 · antes do 1º real de mídia]
 checkout PagTrust ─┐            Pixel Helper + Test Events ─┐             página antiga /eneagrama e checkout
 vídeo B + legendas ├─> CONFIG ─> upload /lideres/ ─> compra de teste ─────┼─> cka1d66532 fora do ar · CAPI ·
 PITCH_SECONDS      │   + ?preview=1                  ponta a ponta        │   capital 2–3 tentativas · anúncio B
 horário + fim      │   sem {{ }}                     aparelho real dentro │   com as palavras do título
 rodapé legal ──────┘                                 do app do Instagram  │
                                                      leitura da Débora ───┘──> MÍDIA (funil B, teste declarado)
                                                      + aprovação registrada
                                                                            └─> funil A (quiz) só depois de VIDEO_A,
                                                                                LEADS_ENDPOINT do quiz e fbclid
```

---

## 1. Veredito

**Hoje: NÃO PUBLICA.** A página não tem checkout, vídeo, horário nem identificação de quem vende. Sem esses fatos, os botões levam a `#oferta` e o play não toca.

**Quando os P0 da §2 estiverem preenchidos e conferidos: SIM, ESTÁ PRONTA PARA PUBLICAR.** Motivos:

1. **Nenhum P0 é defeito de texto ou de código.** Todos os P0 são fatos ou conferências do Victor (mais a leitura da Débora). A física, a copy e o build passam nos passes deles, e o que achei no código é P1 ou P2.
2. **A copy no HTML é literal.** Conferi por script os 99 elementos de texto do `03-COPY.md` §2 contra o HTML renderizado (texto + `alt` + `meta`). Todos estão lá, idênticos. As 10 "faltas" do script são de estrutura e foram conferidas à mão: os ladrilhos (o texto está quebrado em `<span>`s, e as capturas mostram que fecha) e as linhas de tabela das marcas ou do rodapé.
3. **P4 fechado do lado da página.** A pilha de V2 tem os itens de D30 (*curso de Eneagrama · Sistema de Conhecimento · Luz e Sombra da sua Liderança · A sua liderança pela raiz · os quatro encontros ao vivo, de dezembro a fevereiro*), mais o acesso de 12 meses de D36. É a mesma ordem, sem item a mais nem a menos. V3 repete os quatro materiais de D27, na ordem de D27. A âncora é a de D29 (*R$ 6.000 · 4 meses · não é a mentoria*). Preço e parcela são os de D30 e D36. **Do lado do checkout, o P4 continua aberto**, porque o checkout ainda não existe (P0-1).
4. **Os vetos estão limpos.** Varri o texto visível do HTML com o grep de `01-FISICA.md` §9, mais *padrão, do jeito d-, programar, dar feedback, descubra, gravação, cura, reencontr-/reviv-/resgat-* e travessão. Resultado: **0 ocorrências**, fora a exceção prevista (*"É um espelho, não um veredito"*, V5 R1). Também não há link para fora do domínio (os `href` são `#oferta` ou marcas) e só um `id="oferta"`.
5. **A congruência (`METODO-GATE-DE-CONGRUENCIA` §3) passa como TESTE.** A REGRA Nº 2 passa na arquitetura (R1, *Meta Batida em 15 Dias*, Filemon), e a promessa, a oferta e o lead estão declarados como teste. Procedência do espelho: grau `I` = 0. A copy passou nos 11 passes (`03` §5.3). **O gate de entrada do `METODO-FUNIL-DE-VSL` continua aberto no caixa**: o capital para 2 a 3 tentativas não está reservado. Isso bloqueia o 1º real de mídia, não a subida da página.

---

## 2. Achados P0 / P1 / P2

> **P0** impede publicar com tráfego · **P1** corrige antes do tráfego pago · **P2** vai para a fila de otimização (classificação do módulo 06).

### P0 · bloqueiam a publicação

| # | Achado | Dono | Onde se resolve |
|---:|---|---|---|
| P0-1 | **`CHECKOUT_URL` vazio.** É o checkout PagTrust do produto novo: R$ 297 ou 12×, acesso de 12 meses, os 4 materiais e o link do grupo na plataforma | Victor | PagTrust → `index.html` l.29 |
| P0-2 | **Vídeo do funil B:** `VIDEO_B` vazio, provedor não escolhido, sem legendas (E5 manda legendas). ⚠️ Um `.mp4` hospedado na Hostinger não dá retenção por segundo (E5) e pesa na hospedagem compartilhada. YouTube não listado ou Vimeo atendem | Victor | l.33 (+ l.36 só se o vídeo for arquivo próprio) |
| P0-3 | **`PITCH_SECONDS` = 1095 é estimativa.** Medir no vídeo editado o segundo em que começa D30 (*"O Eneagrama para Líderes custa…"*). Errado para cedo, a página entrega o preço antes do valor. Errado para tarde, a Débora aponta um botão que ainda não existe | Victor | l.41 |
| P0-4 | **`MARCAS.HORARIO` e `MARCAS.DURACAO` vazios.** Sem horário, o ladrilho mostra só "quarta" e a promessa dos encontros fica sem hora (juiz §9 b.4). Sem duração, some o chip do player, e junto com ele o *"com legendas"*. 🔴 **Ao preencher o horário, `DATA_ENCERRAMENTO` muda na mesma edição** para `2026-12-16T<hora do 1º encontro>:00-03:00`. Hoje ela fecha à 00h00 de 16/12, e o lembrete diz *"entrada até 16/12"*. Do jeito que está, quem chega no dia 16 encontra a turma fechada, contra o que a página prometeu | Victor | l.45, l.59, l.60 |
| P0-5 | **A escassez precisa ser verificável no mundo real.** A página diz *"A entrada fecha em 16/12, no primeiro encontro"*, então o checkout tem de ser configurado para desativar a venda nessa data e hora. Com o checkout aberto depois do 1º encontro, a frase vira escassez falsa (veto do juiz) | Victor | PagTrust (data de expiração ou desativação agendada) |
| P0-6 | **Identificação de quem vende e e-mail de suporte.** Página que vende com preço e botão precisa de nome e CPF/CNPJ do vendedor e de um contato. O build omite o bloco quando o fato falta, e isso é degradação segura de layout, não licença para publicar (`04` §5). Os dados de julho (`suporte@deboradelgado.com.br`) exigem confirmação | Victor | l.61–63 |
| P0-7 | **Compra de teste ponta a ponta, na URL real** (§5, passo 5). Conferir: preço e 12× no checkout, UTMs chegando, `Purchase` no Events Manager para o pixel `4060021607461178`, **e-mail de acesso imediato com os 4 materiais e o link do grupo** (a garantia diz *"Abriu o material…"*; física §8 #9) e o caminho de reembolso pela plataforma | Victor | PagTrust + Events Manager |
| P0-8 | **Aparelho real, dentro do navegador do Instagram e do Facebook** (iPhone e Android), que é onde o tráfego do funil B abre. Conferir: título e play na primeira tela, o vídeo tocando com som e legenda, revelação no pitch, sticky e botão abrindo o checkout. A etapa 4 testou só em Chrome headless sobre `file://` (`04` §2, *"Não foi testado"*) | Victor (nós conferimos as capturas que ele mandar) | celular |
| P0-9 | **Aprovação humana registrada.** A Débora lê a copy (objeção de congruência) e aprova a foto de V4 e o poster (`PLANO-FOTO-DEBORA.md`, "Pendente"). O Victor registra a aprovação de publicação. O registro vai em `DECISOES.md` da conta | Victor leva à Débora · registra | `DECISOES.md` |

### P1 · antes do tráfego pago

| # | Achado | Dono | Onde se resolve |
|---:|---|---|---|
| P1-1 | **O timeout de 20 s do player derruba o vídeo do provedor quando o autoplay é bloqueado.** iOS e os navegadores dentro do Instagram não repassam o clique para o iframe. O YouTube ou o Vimeo carrega parado, com o play dele, e `onPlaying` não dispara. Aos 20 s, `onFail` apaga o player e mostra o erro. Pelo mesmo motivo, no arquivo próprio o `play().catch` marca "tocando" sem limpar o timer. **Correção:** o timer guarda o *carregamento*, não o *play*. Limpar em `onReady` (YT), `loaded` (Vimeo) e `loadedmetadata` (arquivo), e também no `catch` | **nós · etapa 4** | `index.html` l.757, l.761, l.785, l.791–800, l.808–811, l.827 |
| P1-2 | **Funil A sem vídeo = play morto para quem vem do quiz.** Com `?origem=quiz` e `VIDEO_A` vazio, o play não faz nada, e fora do preview não aparece nem o aviso (l.739, l.823). **Operacional:** o quiz não recebe tráfego enquanto `VIDEO_A` e `PITCH_SECONDS_A` estiverem vazios. **Código:** com `VIDEO_A` vazio, cair no funil B inteiro (título e vídeo) em vez de ficar com o título A e o player mudo | Victor (vídeo A) · **nós · etapa 4** (fallback) | l.78, l.739, l.823 |
| P1-3 | **Página antiga do curso (`/eneagrama`, promessa de julho) e checkout `cka1d66532` (com o order bump) fora do ar ou redirecionando para `/lideres/`** (E17). Duas ofertas do mesmo curso, com pilhas diferentes, criam atrito de confiança e reprovam o P4 do lado de fora | Victor | Hostinger + PagTrust |
| P1-4 | **CAPI.** Confirmar que a PagTrust manda `Purchase` pelo pixel **e por API** para o produto novo. Os eventos da página (ViewContent, InitiateCheckout) ficam só no navegador neste teste, e isso fica declarado. Se não houver `Purchase` por servidor, o teste mede mal | Victor | PagTrust · Events Manager |
| P1-5 | **Apps Script de julho:** acrescentar `lideres` em `ORDEM_DOBRAS_POR_PAGINA` e conferir que o `LEADS_ENDPOINT` (l.51) continua publicado. Sem isso, os `view_vN`, `reveal_*` e `cta_click_*` não se leem por dobra | Victor | Apps Script |
| P1-6 | **Rodapé: termos de uso e política de privacidade vigentes.** A página dispara pixel, o que pede política de privacidade (LGPD). A CLO confere se os de julho servem, e se a PagTrust supre o endereço do vendedor (Decreto 7.962/2013, art. 2º) | Victor · CLO confere | l.64–65 |
| P1-7 | **Anúncio do funil B com as palavras do título** (*"Combinou o prazo e não entregaram?"* + *"Mais resultado, com menos esforço"*, E7) | nós (criativo) | `03 - tráfego pago/` |
| P1-8 | **`?oferta=1` só para retargeting de quem viu o pitch ou 50% do vídeo** (E3). Para quem nunca viu o vídeo, o saldo de crença no botão é −0,5 (`01` §5.2). Regra de mídia, não de página | nós (mídia) | plano de mídia |
| P1-9 | **Quiz (fora da página):** o `LEADS_ENDPOINT` do quiz está vazio (`app.js` l.3), então o lead não é gravado. O CTA repassa `utm_*` mas **não `fbclid`**, e o quiz não tem pixel. Com isso, a venda do funil A perde o vínculo com o clique do anúncio. **Correção:** pôr `fbclid` na lista de parâmetros repassados (`app.js` l.48, função `nextScreen`) | Victor (Apps Script) · **nós** (`fbclid`, uma palavra) | `quiz/site/quiz/app.js` l.3 e l.48 |
| P1-10 | **Capital para 2 a 3 tentativas não reservado.** Gate de entrada do `METODO-FUNIL-DE-VSL`, que bloqueia o 1º real de mídia | Victor | caixa |
| P1-11 | **Teste dos 5 segundos com alguém de fora** (passe 2). O juiz passou a primeira dobra na leitura dele, mas a skill pede uma pessoa de fora: três pessoas e cinco minutos, olhando o print de 360 | nós | — |

### P2 · fila de otimização

| # | Achado | Dono | Onde |
|---:|---|---|---|
| P2-1 | **Sem JavaScript, os botões de compra levam a `#oferta`.** O `href` do checkout só é escrito por JS. A oferta aparece, como manda o E4, mas o botão não compra. O impacto real é quase nulo, porque sem JS o vídeo também não toca. Correção barata: o Victor cola o `CHECKOUT_URL` também nos `href` | nós · etapa 4 | l.478, l.532, l.594 |
| P2-2 | **CONFIG editada à mão é ponto único de falha.** Uma aspa faltando derruba o script do `<head>`: a oferta aparece antes do pitch para todo mundo, e os botões morrem. Mitigação no passo 2 da §5 (console limpo em `?preview=1` antes de subir) | Victor | l.26–67 |
| P2-3 | **Divergência entre documento e código no estado encerrado:** o `04` X6 diz que V4 fica, e o código tira (`so-aberta` na l.537). O comportamento do código é aceitável, porque V4 sem botão não vende nada. Corrigir o `04` | nós · etapa 4 | `04-EXECUCAO.md` X6 |
| P2-4 | **Sticky: `03-COPY` §Marcas diz checkout, e §2 diz `#oferta`** (X1). O gate fica com a física: `#oferta`, que leva ao cartão com preço e garantia colada. Corrigir a tabela de marcas do `03`. Compra em um toque fica como hipótese de teste, trocando a flag da l.54 | nós · etapa 3 (texto do doc) | `03-COPY.md` §Marcas |
| P2-5 | **Poster provisório com emenda visível no desktop** (composição X4, borda direita da foto, `1440x900__base__dobra.png`). Trocar pelo frame final e criar `img/og.jpg`, descomentando l.14–16 | Victor (frame) + nós | `img/` |
| P2-6 | **"Pagamento seguro via PagTrust" aparece antes do pitch** (rodapé, l.606). Sinaliza venda antes do valor, contra o espírito do DV-P2. Mostrar só no estado revelado | nós · etapa 4 | l.606 |
| P2-7 | **Garantia de V2 sem *"e em dezembro chegam os encontros"*** (§12 #10 do briefing e física V2 #7). Não é falsidade, porque a pilha diz *"dezembro a fevereiro"*. Fica de lado como possível nuance de risco, para depois do dado | nós · etapa 3 | `03` V2 #7 |
| P2-8 | **`Purchase` sem o funil.** O checkout recebe as UTMs, mas não `funil`, `nivel` nem `alavanca`. Para separar A de B na venda, passar `utm_content` ou `src` com o funil | nós · etapa 4 | l.689–693 |
| P2-9 | **Página de obrigado própria** (onde acessar, as 4 datas com horário, adicionar à agenda) e **upsell**. O upsell é obrigatório pelo `METODO-FUNIL-DE-VSL` §2-bis.1 e não existe nesta oferta. Rodar o teste sem upsell é **desvio do método, que o CEO registra como desvio declarado do teste** ou trata antes da mídia | CEO + Victor | fora da página |

---

## 3. Os 8 passes

| Passe | Veredito | Evidência |
|---|---|---|
| 1 · Entrada | **PASSA com P0 de fato** | Brief de 9 campos (`01` §2), com as lacunas de fato listadas como `[[ FALTA ]]` do Victor e as de estrutura decididas, com motivo (E1–E20). Nenhuma pergunta de estrutura ao cliente (Lei 11-bis). Provas auditáveis (D03, D12, D14, D18, D23, foto real). **Escassez ainda não verificável:** P0-5 |
| 2 · 5 segundos | **PASSA** (leitura do juiz) · teste com gente de fora = P1-11 | 360×800: eyebrow *"Aula para quem lidera"* (para quem), título com cena + promessa (o que ganha), poster com play no centro em y = 347 (próximo passo), credencial. O título ocupa 4 linhas, dentro do teto de 70 (C1 declarado) |
| 3 · 12 perguntas | **PASSA** | Mapa do `01` §3: V1 responde 1–3, V2 7/10/11/12, V3 6/7, V4 8/9, V5 11, V6 12. Antes do pitch, o resto está no vídeo (DV-P1). Nenhum bloco fora delas |
| 4 · Tensão | **PASSA** | Curva 9,5 · 8 · 8,5 · 6,5 · 8, sem três iguais. Clímax único em V2: é o único escuro e o único âmbar, conferido em `1440x900__oferta__oferta.png` e `360x800__oferta__oferta.png`. Maior trecho sem porta: V4 + V5 ≈ 1,5 tela, e no celular o sticky cobre. O fecho ecoa o título (*entregar* ↔ *entregaram*) |
| 5 · Crença | **PASSA, frágil** | +1,5 na fronteira da oferta para quem assiste, apoiado nos três relatos de D23 (prova de time = 0): **teste sim, escala não**. Para `?oferta=1`, −0,5, contido por P1-8. Prova na mesma dobra das promessas da página (garantia colada, V5 R3 e R8) |
| 6 · Oferta | **PASSA** | Ordem do código = pilha → âncora → preço → escassez → botão → garantia (l.463–479). Âncora sem riscado, uma vez. Escassez por data, com motivo e sem timer. Garantia a 8 px do botão. Um botão por tela (o sticky some quando o de V2 aparece, `360x800__v2-sem-sticky.png`). Compra direta com UTMs e `fbclid` repassados (l.689–693) |
| 7 · Atrito | **PASSA com P1** | Cognitivo: limites de §8 medidos em 360, nenhum estourado (`04` §2). Decisório: um primário por tela. Sensorial e técnico: primeira dobra no primeiro paint, player na fachada, sem autoplay. **Player em iOS e navegador do Instagram não testado** (P0-8, P1-1). Confiança: números batem entre V1, V2, V3, V6 e sticky (297, 12×, 12 meses, 7 dias, 16/12), e a promessa do título é a de D02. **A página antiga com outra pilha é atrito de confiança fora da página** (P1-3) |
| 8 · Integridade | **REPROVA HOJE → passa com os P0** | Hoje não há placeholder visível (as marcas são omitidas fora do preview, `360x800__base__dobra.png`), mas faltam os fatos que fazem a página funcionar (P0-1 a P0-6). Faltam o aparelho real (P0-8), a medição conferida na rede (P0-7, P1-4, P1-5) e a aprovação registrada (P0-9). O gate da copy (`03` §5) está anexado. O gate de UI está na direção (`02` §11) e na execução (`04` §2) |

**Anti-padrões do apêndice (1–18):** nenhum presente. Sem carrossel, timer, depoimento, logo, ícone por item, emoji, vidro, pílula, segunda oferta ou link para fora.

---

## 4. Conferências: o que fiz e o que não pude fazer

**Feito:**
- Li o `index.html` inteiro (CONFIG, script do `<head>`, CSS, marcação e script principal).
- **Copy literal:** conferida por script nos 99 elementos do `03` §2, e à mão nos ladrilhos e no rodapé.
- **Vetos:** grep sobre o texto visível. Resultado 0, fora a exceção prevista.
- **P4:** pilha de V2 e itens de V3 contra D26, D27, D30 e D36. Âncora contra D29, garantia contra D30 e §12 #10/#15, escassez contra D31 e §12 #13/#14, credencial contra D03 e §12 #4/#5. Promessa no teto do nível 2 (§3 do briefing: *"confiar mais em você"* como desejo, com *"aos poucos"*).
- **CONFIG e eventos fazem o que o `04` diz:**
  - pixel e beacons desligados em `file://`, localhost e `?preview=1` (l.623–624);
  - `PageView` + `ViewContent` (value 297, BRL, `funil`, `nivel`/`alavanca` validados);
  - `InitiateCheckout` 200 ms antes do redirecionamento, com UTMs postas por `URL.searchParams`;
  - eventos de vídeo `VSLPlay`, `VSL25/50/75` e `VSLPitch`, e beacons `view_v1..v6`, `reveal_*`, `cta_click_*`, `faq_open_N` e `checkout_start`;
  - revelação por tempo (inclusive arrastando a barra), por `?oferta=1` ou por memória;
  - encerramento por relógio, com `?agora=` só em preview;
  - `?origem=quiz` → funil A.
- **Sem JS:** a oferta aparece (o `is-gated` só existe via JS), o sticky não aparece e nenhuma marca `{{ }}` vaza (os dependentes ficam `hidden`). Achado: os botões não compram (P2-1).
- **Quiz:** `VSL_URL` = `https://deboradelgado.space/lideres/` + `?origem=quiz&nivel&alavanca` + `utm_*`. Os parâmetros batem com a validação da página (l.82–83). Achados em P1-9.
- **Capturas:** 360×800 base, oferta (página inteira e o cartão), sticky e sem JS; 1440×900 base e cartão da oferta; 360×800 encerrada. Também li o `_relatorio.json`: sem rolagem horizontal, `h1` em 4 linhas, play em y = 311–383 e as quatro faces de fonte carregadas.

**Não pude conferir, e por quê:**
- **Pixel na rede, CAPI, Apps Script e PagTrust:** a página não está no ar e o checkout não existe (P0-7, P1-4, P1-5).
- **Os adaptadores de YouTube, Vimeo e iframe com vídeo real:** não há vídeo (P0-2). A leitura do código levantou o P1-1.
- **Aparelho real, sol, 4G e Lighthouse:** não tenho aparelho (P0-8).
- **Contraste em tela:** os hex do código batem com os tokens da tabela `02` §9.1, mas não remedi no navegador.
- **A linha `<noscript>`:** não aparece em `360x800__sem-js__dobra.png`, o que sugere que a captura bloqueou scripts em vez de desligar o JS. Sem efeito na decisão.
- **O vídeo em si:** se a fala gravada bate com o roteiro v4.2 e se D31/D36 só foram gravados depois de confirmado o fechamento do checkout.

---

## 5. Ordem de publicação · passo a passo para o Victor

1. **Juntar os fatos (P0-1 a P0-6):**
   - checkout PagTrust do produto novo, configurado para fechar em 16/12 na hora do 1º encontro;
   - vídeo B no provedor (YouTube não listado ou Vimeo), com legenda pt-BR;
   - duração em minutos, e o segundo exato do início de D30;
   - horário dos encontros;
   - nome e CPF/CNPJ de quem vende, e-mail de suporte, termos e privacidade.
2. **Editar só o bloco `CONFIG`** (`site/lideres/index.html` l.26–67): `CHECKOUT_URL`, `VIDEO_B`, `PITCH_SECONDS`, `DATA_ENCERRAMENTO` (com a hora), `MARCAS.*`. Depois, abrir o arquivo local com `?preview=1`, apertar F12 e conferir quatro coisas:
   - **console sem erro vermelho**;
   - nenhuma marca `{{ }}` destacada;
   - "Simular pitch" abre a oferta;
   - `?preview=1&agora=2026-12-17` mostra *"A turma fundadora fechou"*.
3. **Subir na Hostinger:** o conteúdo de `site/lideres/` (`index.html` + `img/`) vai em `public_html/lideres/`. **Não subir `_capturas/`.** Abrir `https://deboradelgado.space/lideres/`, com a barra final.
4. **Pixel** (`04` §7):
   - Pixel Helper em `…/lideres/?utm_source=teste` → `PageView` e `ViewContent` com `funil:b`;
   - play → `VSLPlay`; arrastar a barra para depois do pitch → oferta aparece e dispara `VSLPitch`;
   - `…/lideres/?oferta=1&utm_source=teste` → clique em V2 → `InitiateCheckout`, e o checkout abre com `utm_source=teste`.
5. **Compra de teste** (real, estornada depois): `Purchase` aparece no Events Manager (navegador e servidor), o e-mail de acesso chega com os 4 materiais e o link do grupo, e o reembolso funciona pela plataforma.
6. **Celular real:** mandar o link para si mesmo por DM no Instagram e abrir dentro do app, num iPhone e num Android. Conferir: título e play sem rolar, vídeo com som e legenda, oferta no pitch, sticky, botão abrindo o checkout. Mandar os prints para nós.
7. **Débora:** ela lê a copy (`03-COPY.md`) e aprova a foto e o poster. O Victor registra no `DECISOES.md` a aprovação dela e a dele. **A partir daqui a página está publicada.**
8. **Antes do 1º real de mídia (P1):**
   - nós corrigimos o P1-1 no código e você sobe de novo;
   - página antiga `/eneagrama` e checkout `cka1d66532` fora do ar ou redirecionando;
   - CAPI confirmada;
   - `lideres` no Apps Script;
   - anúncio B com as palavras do título;
   - capital para 2 a 3 tentativas reservado;
   - `?oferta=1` só em público de retargeting.
9. **Funil A (quiz):** só depois de `VIDEO_A` e `PITCH_SECONDS_A` no CONFIG, do Apps Script do quiz, do `fbclid` no quiz e do teste de `…/lideres/?origem=quiz&nivel=3&alavanca=d4` (título A, `ViewContent` com `funil:a`).
10. **16/12, na hora do 1º encontro:**
    - conferir que o checkout fechou;
    - pausar os anúncios;
    - **apagar `public_html/lideres/` no mesmo dia.** O relógio do visitante é só a rede de segurança (E10): depois da hora, ele tira a oferta, mas o vídeo continua prometendo os encontros.

---

## 6. Riscos fora da página

| Risco | Por que importa | Dono |
|---|---|---|
| Página antiga do curso + checkout `cka1d66532` + order bump de julho | mesma oferta com outra promessa e outra pilha. Quem pesquisa o nome encontra as duas, e o P4 reprova do lado de fora | Victor (P1-3) |
| Upsell inexistente | o método exige desde o MVP. Sem ele, o ticket médio fica em R$ 297 e a conta do funil fica mais apertada. É desvio a declarar no teste | CEO + Victor (P2-9) |
| Página de obrigado | sem ela, o comprador depende do e-mail da plataforma para saber das datas e do horário. Os encontros são promessa firme (§12 #3) | nós, peça própria (P2-9) |
| CAPI | página estática sem servidor. Se a PagTrust não mandar `Purchase` por API, o teste otimiza com sinal incompleto | Victor (P1-4) |
| Fechamento em 16/12 | depende de três coisas manuais no mesmo dia: o checkout, os anúncios e a pasta | Victor (passo 10) |
| D31 no vídeo diz *"o curso continua aqui para você"* depois do corte, mas página e VSL saem do ar em 16/12 | não há caminho de compra depois de 16/12, e quem perguntar precisa de resposta. É da oferta seguinte, não desta página | CEO |
| INPI de *"As Nove Línguas"* | não bloqueia o teste. Bloqueia a escala | Victor |

---

## 7. Próximo passo e dono

| Passo | Dono |
|---|---|
| Fatos P0-1 a P0-6 e passos 1 a 7 da §5 | **Victor** |
| P1-1 (timeout do player), P1-2 (fallback do funil A), P1-9 (`fbclid` no quiz) | **nós · etapa 4** (código) |
| P2-3 e P2-4 (alinhar `04` X6 e `03` §Marcas) | nós · etapas 4 e 3 |
| Registrar no `STATUS.md` da conta: página em gate, publicação condicionada aos P0 da §2 | CEO |
