# PLANO DA PÁGINA — Workshop "Seu Eixo" (index.html único)

> ⚠️ **ITERADO 10/07 com os vetos da Débora (áudios 09/07).** Fonte: `página pré-final/AUDITORIA-FEEDBACK-DEBORA.md` (§2b) + `DECISOES.md` 09-10/07. Remoções aplicadas abaixo; reescritas marcadas como `{{PENDENTE-FASE-2}}` aguardam martelo dos 3 pilares + copy aprovada. **Regra de léxico em vigor:** "padrão/padrões" e termos de método não entram em copy de lead sem tradução (tabela em `07 - skills/debora-voice`). O alvo de build em vigor é o **index deployado** (`página pré-final/index deployado/`), não o `build/`.
> **Planejamento executável, 08/07/2026.** Governa a construção; quem construir (Claude, Codex, humano) segue dobra a dobra sem decidir nada de novo.
> Método: `METODO-PAGINA-DE-VENDAS.md` (10 Leis + curva de voltagem §2.2). Copy: `copywriting-fable5` + `copywriting-avancado` + `stop-slop` + `debora-voice` (já aplicadas: a copy abaixo é a copy de produção). Visual: `direção-design-codex.débora.md` (paleta canônica).
> **Diagnóstico (copywriting-avancado §1):** tráfego frio Meta · ICP consciente do problema, não da solução · mercado sofisticado em "autoconhecimento", virgem em "leitura de 3 sistemas" → mecanismo nomeado carrega a diferenciação · estado A: líder competente com custo interno sem nome · estado B: decidido a se inscrever para liderar inteiro · emoção-ponte: **reconhecimento com dignidade** (nunca diagnóstico de defeito) · ação única: inscrever-se na turma.
> **Auditoria da iteração da Débora aplicada:** aproveitados espelho, citações, 3 dias, pilha, FAQ; corrigidos H1 (decisão 30/06), ordem das dobras (faltava custo antes da virada com CTA no lugar certo), prova (inexistente), clímax visual (página era linear). Nome do método interno: **{{TRES ou "Raiz em Ação" — Débora bate o martelo; plano usa TRES}}**.

---

## 0. Requisitos técnicos (index.html único)

- **Um arquivo `index.html` autocontido:** CSS inline em `<style>`, zero dependência externa além de Google Fonts (Fraunces + Inter, com `font-display: swap`). Eneagrama e digital-labirinto entram como **SVG estático inline** (sem animação: decisão aceita para manter arquivo único e editável no Code Assist).
- **Primeira dobra 100% no primeiro paint** (nenhum conteúdo atrás de JS). JS opcional só para: acordeão do FAQ, âncora suave, sticky CTA mobile pós-D8. `prefers-reduced-motion` respeitado.
- **Pixel Meta + CAPI:** base do pixel no `<head>` ({{PIXEL_ID a criar no BM 2917036641953421}}), eventos: `PageView` (load) · `ViewContent` (scroll até D8, via observer) · `InitiateCheckout` (clique em qualquer CTA de inscrição). `Purchase` dispara no PagTrust. Eventos nomeados idênticos aos do Events Manager.
- Mobile-first · < 3s em 4G (imagens WebP, 1 foto real da Débora otimizada ≤ 120KB) · contraste AA conforme tabela do design (petróleo `#2E3D45` sobre papel `#FAF8F3` = 10.58:1).
- Datas e preços de lote em **um único bloco de constantes** no topo do HTML (comentado), para virada de lote ser 1 edição.

## 0b. Curva da página (resumo antes das dobras)

`D1 2→4 · D2 4→6 · D2b 6→6,5 · D3 6,5→8,5 · D4 8,5→6 (alívio com direção) · D5 6→7 · D6 7→7 · D7 7→7,5 · D8 7,5→9,5 (CLÍMAX) · D9 9,5→6 · D10 6→8`.
Ritmo de fundos (senoide visual): papel → areia → papel c/ citações → faixa de tensão → névoa verde → palha → papel → papel → **grafite (único escuro)** → papel → papel c/ dourado. Nenhum tratamento se repete 3× seguidas; um único clímax (Lei 8).

---

## D0 · Barra (moldura)

**Conteúdo:** "Débora Delgado" (texto, sem logo pesado) + âncora discreta "Ver turmas e valores" → #oferta. Nada mais.
**Visual:** papel `#FAF8F3`, linha inferior dourada 1px `#B89B72`.

## D1 · Hero — voltagem 2→4 · fundo papel quente `#FAF8F3` · peso tipográfico ALTO

**Eyebrow (caixa alta, tracking aberto, petróleo):** PARA QUEM LIDERA · WORKSHOP AO VIVO · 3 DIAS ONLINE
**H1 (Fraunces, 2 linhas máx. mobile):** Lidere com tudo o que você é.
**Subhead {{PENDENTE-FASE-2 — H2 será trocado (Victor 10/07): a versão abaixo tem a tríade simétrica ("você funciona / pessoas funcionam / cultura molda" = tell de máquina) E promete os 3 sistemas que o workshop atual não entrega. A versão deployada ("reconhecer os padrões...") também está vetada (objeção explícita da Débora). Copy nova sai da arqueologia (`03 - tráfego pago/ARQUEOLOGIA-ROTEIRO-RUMINACAO.md`) — candidatos: "não é falta de técnica, é falta de consciência" / "resolver questões humanas sem entender como os seres humanos funcionam" — e passa por aprovação da Débora antes de entrar}}:**
Você já lidera bem. Entrega, sustenta, resolve. {{H2 novo aqui}} Em três dias, {{promessa coerente com o workshop vigente}}, e você volta inteiro para a sua liderança.
**CTA primário:** Quero minha vaga
**Microcopy:** Lote 1: R$ 97 até 28/07 · turmas de agosto, cerca de 20 pessoas
**Sinais de formato (linha discreta):** 3 encontros de ~2h, ao vivo e online · você escolhe a turma na inscrição
**Racional visual:** peso todo na tipografia (Fraunces grande); octaedro em traço dourado fino como âncora à direita, marca-d'água, nunca competindo com o H1. Message match: o anúncio A1 usa "Você já lidera bem" e "liderar inteiro"; o subhead repete as palavras. **Por quê papel quente:** tráfego frio chega desconfiado; fundo claro e sereno abre crédito (o contraste escuro fica guardado para a decisão).
**Proibido:** carrossel, animação no caminho do H1, segundo CTA.

## D2 · Espelho — 4→6 · fundo areia `#F1EDE4` · peso médio

**Título:** Você sente o custo. Só ainda não deu nome à causa.
**Corpo (cena única + padrão + sintomas, aproveitando a iteração da Débora com o reframe 30/06):**
Imagina a reunião que terminou agora. Você sabia o feedback que precisava dar. Ensaiou na cabeça. E, de novo, não saiu, ou saiu quando já tinha virado cobrança.
Não é falta de competência. Você é um líder experiente: entrega resultado, resolve problema, as pessoas confiam em você. O que mudou foi o preço. Você sai do trabalho, mas o trabalho não sai de você.
**Lista de sintomas-irmãos (3 aprovados pela Débora 09/07; o 4º, "licença interna", foi VETADO — "não é uma língua conectada com o público" — e removido do deployado no T4):**
· O feedback adiado até não caber mais, e a distância que vai se abrindo.
· A conversa difícil ensaiada e não conduzida, e o problema que cresce no silêncio.
· A culpa quando alguém do time não evolui, como se a entrega dele fosse falha sua.
{{PROPOSTA de 4º sintoma (repõe o vetado; da arqueologia-ruminação dela, aguarda aprovação): · O feedback repassado mentalmente em casa, à noite, pronto para um dia seguinte que nunca é como o ensaio.}}
**Fecho do bloco {{PENDENTE-FASE-2 — Débora: metanarrativa ótima como conceito, "mas não adaptada à linguagem"; reescrever junto com o ICP}}:** Você não está cansado do trabalho. Está cansado da forma como aprendeu a trabalhar.
**Racional visual:** areia = primeiro degrau de densidade; o leitor entra "para dentro" da página. Sem imagem: o espelho é verbal, imagem aqui distrai.
**Nota de método:** a régua é "como você sabia?", nunca "você está quebrado" (decisão 30/06).

## D2b · O que esse líder nunca diz em voz alta — 6→6,5 · papel `#FAF8F3` com citações em palha `#FFF8E8`

**Sem título visível. 4 citações em cards de linha fina (aproveitadas da iteração, são fortes):**
"Tenho medo de descobrir que o problema não está na empresa."
"Não sei mais se estou cansado do trabalho ou da forma como aprendi a trabalhar."
"Tenho receio de que, se eu mudar de empresa, eu leve os mesmos problemas comigo."
"Todo mundo espera alguma coisa de mim. Quase ninguém pergunta como eu estou."
**Fecho:** Se alguma dessas frases fez você parar, continue lendo. É exatamente daqui que o workshop parte.
**Racional visual:** cards palha iluminada sobre papel = "trecho de diário", intimidade sem drama. **Por quê:** é a objeção identitária dita com as palavras do lead (copywriting-avancado §3): vale por três depoimentos.

## D3 · O custo de continuar — 6,5→8,5 · faixa de tensão: fundo `#EFE9DD` com título e marcadores em barro queimado `#9A4A3A` · denso

**Título:** O que não se olha não fica parado. Se repete.
**Corpo (custo composto, sereno):**
Na próxima reunião, o feedback adiado vira distância. No próximo ciclo, a decisão empurrada vira retrabalho. Na próxima pessoa boa que sai do time, o custo invisível apresenta a conta.
{{VETADO E REMOVIDO (T5): "E há um juro mais silencioso: cada mês liderando de um jeito que não é o seu consome uma energia que não volta com férias." — Débora: "cara de IA" + "jeito que não é o seu" não é claro. PROPOSTA de reposição (da arqueologia dela, aguarda aprovação): "E há um custo que ninguém vê na reunião: o problema nunca é só uma conversa. É carregar emocionalmente dezenas delas."}}
**Pergunta reflexiva (fecho, itálico):** O que muda na sua liderança, e na sua vida, se nada mudar até o fim do ano?
**Racional visual:** único uso de barro queimado da página (direção codex §8: tensão é discernimento, não pânico). Tipografia um ponto mais densa, entrelinha menor: a densidade É a tensão. Sem CTA aqui: tensão sem válvula ainda; a porta vem com a direção (D4).

## D4 · A virada (mecanismo TRES) — 8,5→6 · névoa verde `#EAF1EA` (alívio COM direção) · peso médio-alto

**Frase-ponte (invalida a categoria, não quem tentou) {{PENDENTE-FASE-2: "técnica não alcança padrão" usa o termo vetado; tradução proposta (da arqueologia, aguarda aprovação): "Aprendeu como agir. Mas o desgaste não vem de como você age: vem de tentar mudar a consequência sem olhar a causa."}}:**
Você já tentou técnica. Cursos de feedback, comunicação, liderança situacional. Aprendeu como agir. Mas técnica não alcança padrão: ela ensina o gesto, não o lugar de onde o gesto sai.
**Apresentação do mecanismo {{PENDENTE-FASE-2 — REENQUADRAMENTO DA SEÇÃO INTEIRA: o TRES não está no workshop atual (Débora, áudio 1: "é como se só o primeiro pilar do três que tá no workshop"). Rota (a) workshop refeito p/ demonstrar os 3 · rota (b) TRES = mapa da mentoria e workshop = pilar 1 a fundo. Aguarda martelo Débora+Victor. Até lá, o deployado segue com os cards SEM as promessas 2 e 3 (T7/T8)}}:**
**{{TRES}}: a leitura dos três sistemas que produzem toda a sua experiência de liderança.**
**Os 3 sistemas (cards com ícone geométrico fino dourado):**
1. **Você mesmo.** Como você funciona: história, talentos, sua forma natural de gerar valor. À luz do eneagrama, uma das lentes do método (pista, nunca rótulo). *Você sai daqui enxergando sua força real.*
2. **As pessoas.** Cada uma interpreta, reage e se motiva de um jeito. {{VETADO E REMOVIDO (T7): "Você sai daqui lendo o time sem projetar o seu padrão nele." — o workshop não entrega}}
3. **A cultura.** As regras invisíveis que moldam comportamentos que parecem individuais. {{VETADO E REMOVIDO (T8): "Você sai daqui separando o que é seu do que é do sistema." — o workshop não entrega}}
**Os 3 dias (linha do tempo horizontal, numeração dourada):**
Dia 1 · O melhor em você é o que é natural → seu mapa de talentos. | Dia 2 · O que te afasta do natural → o padrão nomeado e localizado. | Dia 3 · Um passo mais perto de quem você é → roadmap reverso de 6 meses, começando esta semana.
**CTA secundário (discreto, outline petróleo):** Quero fazer esse caminho
**Racional visual:** névoa verde é a cor de alívio da marca; a transição barro→névoa é a senoide sentida no olho (tensão→direção). Eneagrama SVG monocromático aparece aqui (seção do método, conforme decisão 29/06), nunca antes.

## D5 · Pilha de valor — 6→7 · cards palha `#FFF8E8` sobre papel · médio

**Título:** Três dias que terminam com algo nas suas mãos.
**6 itens (enxutos, cada um imaginável):**
1. Sua leitura de raiz: eneagrama aplicado à sua forma de decidir e gerar valor.
2. O diagnóstico da sua semana: quanto do que você faz toca o que é natural em você, e quanto é adaptação.
3. O mapa do seu bloqueio: a crença que sustenta o desvio, nomeada e localizada.
4. Um roadmap reverso de 6 meses, do destino até a primeira ação, ainda esta semana.
5. Metas filtradas para gerar vontade de agir, não ansiedade de cumprir.
6. Um método que fica com você, para reaplicar sempre que o eixo escapar.
**Racional visual:** grid 2×3; numeração dourada grande é o único ornamento. **Nota (decisão 08/07, vigente):** "Desenho Humano" está **REMOVIDO da comunicação em toda a página** (qualquer dobra) — não citar nem aqui nem na bio (D6) nem no método (D4). "Liberação ao vivo (EFT)" segue fora até confirmação da Débora. ⚠️ A `landing-v4` (referência de UI) contém DH na copy antiga: usar só o visual dela, nunca o texto.

## D6 · Prova + quem conduz — 7→7 · papel `#FAF8F3` · médio

**Título:** Quem conduz esse caminho.
**Bio (foto real da Débora, olhar voltado ao texto):**
Débora Delgado é engenheira de formação. Passou anos dentro de empresas vivendo exatamente o que este workshop trata: a distância que se abre entre quem a gente é e a forma como trabalha. Foi a engenharia que deu a ela o jeito de olhar: se o resultado se repete, a causa está na estrutura, não no esforço de quem opera.
Hoje ela conduz líderes e profissionais de alta responsabilidade na leitura dos três sistemas, integrando eneagrama e visão sistêmica de carreira. Nas mentorias dela, esse processo tem um apelido que os mentorados adotaram: transformar o chumbo em ouro. {{NOTA-FASE-2: "na leitura dos três sistemas" aqui refere-se ao trabalho de MENTORIA (verdadeiro), mas na página fica ambíguo com a promessa do workshop — explicitar na reescrita, ex.: "conduz, em mentoria, líderes na leitura dos três sistemas"}}
**Prova (a mais forte disponível hoje, honesta):**
Card com 1-2 relatos reais de mentoria {{Débora seleciona; ex.: o mentorado que transformou cada encontro em capítulo do livro que voltou a escrever}} + linha de volume se houver ({{n}} líderes e profissionais acompanhados em mentoria individual).
**Racional visual:** foto real é obrigação do método (§3.5); fundo limpo devolve respiro após dois blocos trabalhados. **Regra:** sem depoimento inventado; se a Débora não aprovar relatos até a publicação, a prova entra como autoridade de percurso (engenheira + anos de empresa + mentoria ativa) e os depoimentos entram na v1.1.

## D7 · Qualificação — 7→7,5 · papel, duas colunas · baixo (respiro)

**Título:** Feito para quem lidera. E já percebeu que a resposta não está na próxima técnica.
**É para você se:** já investiu em desenvolvimento e os mesmos desafios reaparecem em contextos diferentes · sente o custo interno da liderança e quer dar nome à causa · busca compreensão, não mais uma ferramenta · já se perguntou "e se o que precisa mudar não estiver lá fora?".
**Talvez ainda não seja, se:** o que você procura agora é performance e produtividade, sem espaço para olhar para dentro · você quer uma técnica pronta para aplicar amanhã sem revisitar o próprio padrão.
**Racional visual:** duas listas com marcadores diferentes (dourado ✓ / petróleo ○), sem cores de certo-errado. A honestidade da coluna 2 é o que empresta crença para a D8.

## D8 · OFERTA — 7,5→9,5 · **CLÍMAX: bloco grafite `#2A3238`, texto `#F1EDE4`, borda dourada** · peso MÁXIMO

**Único bloco escuro da página inteira (Lei 8: o olho entende que aqui se decide).**
**Recap de valor (1 linha):** Três dias ao vivo, um método com nome e um plano que sai pronto com você.
**Preço em lotes (por data, lote vigente aceso; tabela vira cards no mobile, vigente primeiro):**
✓ **Lote 1 · R$ 97 · até 28/07** (aceso, borda dourada) | Lote 2 · R$ 197 · 29/07 a 07/08 (apagado) | Lote 3 · R$ 257 · a partir de 08/08, até o início da sua turma (apagado)
> Datas **confirmadas 08/07** (Victor). No HTML, viradas via constantes `LOTE1_FIM=2026-07-28` / `LOTE2_FIM=2026-08-07`; o card vigente troca por data, sem edição manual de copy.
**Escassez com motivo:** Cada turma tem cerca de 20 pessoas, para que você seja visto, não só inscrito.
**Turmas (informativa, escolha acontece na inscrição):** Fim de semana: 14 e 15/08 · Meio de semana: 19 a 21/08, manhã. Você escolhe na inscrição.
**CTA primário (grafite+dourado, especular fino):** Quero minha vaga
**Risk reversal colado no botão:** Se a sua turma não fechar, você escolhe: outra turma ou reembolso integral. Sem letra miúda.
**Racional visual:** inversão total de contraste após 7 dobras claras = pico visual coincidindo com pico de decisão. Dourado só em borda e no lote vigente (fio, não parede). **Uma decisão por bloco:** a página vende a vaga; a turma se escolhe no passo seguinte (inscrição), o order bump aparece no checkout (PagTrust).

## D9 · FAQ — 9,5→6 · papel `#FAF8F3`, acordeão · baixo

6 perguntas (da iteração, mantidas; respostas curtas que reafirmam valor):
1. Preciso já conhecer meu tipo no eneagrama? (não; descobre no Dia 1; pista, não caixa)
2. Já fiz terapia e cursos de liderança. O que muda aqui? {{PENDENTE-FASE-2: a resposta atual vende "a leitura dos três sistemas" como experiência do workshop — mesmo problema do TRES. Proposta (da arqueologia, aguarda aprovação): "Curso ensina o que fazer; terapia olha a história. Aqui o trabalho é no ponto em que os dois não se encontram: entender o que acontece dentro de você quando você lidera, e sair com um plano."}}
3. É terapia? (não; trabalho aplicado à liderança, com diagnóstico e plano)
4. Não tenho muito tempo. (3 encontros de ~2h, ao vivo; você escolhe a turma)
5. Vou sair com algo prático? (a pilha da D5, resumida em 1 frase)
6. E se a turma que escolhi não fechar? (troca ou reembolso integral)
**Fio de tensão nos vales (regra §2.3.4):** microcopy sob o acordeão: "Lote atual: R$ 97 até 28/07." (atualiza pelas constantes de lote)
**Racional visual:** vale técnico; tipografia de leitura, zero ornamento.

## D10 · Fecho — 6→8 · papel com halo dourado sutil, centralizado (o único bloco centrado)

**Título (eco do H1, uma oitava acima):** Você não precisa de mais uma técnica. Precisa liderar com tudo o que você é.
**Corpo (3 linhas):**
Discernimento para saber de onde você está agindo. Para separar o que é seu do que é do outro. Para voltar inteiro para a sua liderança, com um plano que é seu.
É disso que estes três dias tratam.
**CTA final:** Quero minha vaga
**Lembrete de escassez (microcopy):** Turmas de agosto · cerca de 20 pessoas por turma · lote atual até 28/07
**Racional visual:** centralizado é o "amém" da página (§2.4); digital-labirinto em traço dourado mínimo como selo de fecho.

## Rodapé
Débora Delgado · pagamento seguro via PagTrust · contato · termos. Sem navegação.

---

## Gate de publicação (antes de subir)
Checklist Parte 5 do método completo + teste dos 5 segundos com alguém de fora + mobile em aparelho real + eventos do pixel disparando no Events Manager + zero `{{placeholder}}` visível + aprovação Débora (SLA 3 dias úteis) e Victor.

## Pendências que este plano NÃO resolve sozinho
1. {{TRES vs "Raiz em Ação"}} — Débora bate o martelo (o plano assume TRES).
2. ~~Datas de lote~~ — **confirmadas 08/07 (Victor): viradas 28/07 e 07/08.**
3. Foto real da Débora + 1-2 relatos de prova aprovados por ela.
4. ~~Criação do pixel~~ — **resolvido 09/07 (GTM no Wix + PagTrust, eventos ativos).**
5. **Martelo dos 3 pilares** (rota a × b) — destrava todos os `{{PENDENTE-FASE-2}}` deste plano.
6. **Copy nova do H2 + reposições e traduções da Fase 2** — rascunho a partir de `03 - tráfego pago/ARQUEOLOGIA-ROTEIRO-RUMINACAO.md`, aprovação Débora, depois entra aqui E no deployado (via tasks cirúrgicas).
7. "O que te afasta do natural → o padrão nomeado e localizado" (linha dos 3 dias) e demais usos de "padrão" seguem a regra do léxico (`debora-voice`) na reescrita da Fase 2.
