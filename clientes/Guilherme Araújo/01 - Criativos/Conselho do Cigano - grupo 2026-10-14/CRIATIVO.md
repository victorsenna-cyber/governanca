# CRIATIVO · Grupo gratuito "Outubro- Conselho do Cigano" · 14/10/2026

> STATUS: VIGENTE · exceção de portão declarada pelo Victor em 14/10/2026 · peça de teste
> **Pedido:** Gui, 14/10 11:18 (áudio): *"acho que dá até para criar uma arte para rodar baseado nesse textinho aí"*. Victor, 14/10 12:02: *"Faço aqui o criativo"*. Victor, na sessão: *"faz o criativo do grupo, exceção declarada. use as referências"*.
> Executor: Claude Code CLI.

## 0. ⭐ Atualização 14/10, noite: destino = quiz, lote de 7 (prevalece sobre §2, §3 e §5 onde divergirem)

**Decisão do Victor (14/10):** *"o grupo vem depois do quiz.. CTA precisa dizer algo como 'responda o quiz e entre no grupo gratuito'"*. **Substitui** a decisão de link direto do §2.

| Item | Valor |
|---|---|
| Destino | `https://professorguilhermearaujo.com.br/permissao-mentoras/` (quiz da Permissão com o filtro do grupo) |
| CTA em todas as artes | "Responda o quiz e entre no grupo (gratuito)" |
| Medição | o quiz tem Pixel `1259363302489132` e planilha (Apps Script); o clique no botão do grupo dispara `grupo_mentoras`. Melhor que a contagem manual do §2 |

✅ **Corrigido localmente em 14/10 (noite): as quatro opções levam ao grupo, testado em navegador; falta subir `hostinger/permissao-mentoras-v2.zip`.** Registro original: 🔴 **Furo de roteamento, a decidir antes de subir:** no quiz no ar, a 1ª pergunta tem quatro opções (Terapeuta · Mentora · Cartomante · Estou começando a atender) e **só "Mentora" recebe o link do grupo** (conferido no config publicado em 14/10). Terapeuta, cartomante e iniciante vão para o checkout original. As peças chamam terapeutas e cartomantes (o texto e duas aberturas da moldura), que **não entrariam no grupo prometido.** Correção proposta: na cópia `permissao-mentoras/`, mandar as quatro opções ao grupo (mudança só de config; os originais seguem intactos) e subir na Hostinger. Até isso, rodar só a abertura "Mentora,".

### Lote de 7 para subir

Folha das referências: `referencias/selecao-7-variacoes.png`.

| # | Linha | Referência | Arquivos (`artes/…`) |
|---|---|---|---|
| 1 | rica · grade 2×2 | R14 | `…-rico-v2-feed/story.png` |
| 2 | lisa · texto do Insta | R03/R04 | `…-liso-v2-feed/story.png` |
| 3 | moldura · "Terapeuta," | R12 | `…-moldura-terapeuta-v2-feed/story.png` (reserva: `mentora`, `cartomante`) |
| 4 | spoiler | N04 · `WhatsApp Image 2026-10-14 at 19.43.07 (3).jpeg` | `…-spoiler-v1-feed/story.png` |
| 5 | retrato | R19 · `2026-10-12 at 16.21.43 (6).jpeg` | `…-retrato-v1-feed/story.png` |
| 6 | WhatsApp | N09 · `2026-10-14 at 19.43.07 (8).jpeg` | `…-whatsapp-v1-feed/story.png` |
| 7 | roda dos signos | N08 · `2026-10-14 at 19.43.07 (7).jpeg` | `…-roda-v1-feed/story.png` |

As v1 de 1 a 3 (CTA de link direto) foram apagadas para não subirem por engano; os templates guardam a versão nova. Render de tudo: `fonte/render-todas.sh`.

**Texto e procedência das 4 novas** (convite literal = destilação §11.3):

| Linha | Texto | Fonte / o que mudou da referência |
|---|---|---|
| spoiler | Você procurando a palavra "vendas" no horóscopo do seu signo: 🧐 SPOILER: NÃO TEM. · No Conselho do Cigano tem: um vídeo para o seu signo com o que fazer naquela semana em vendas, clientes e dinheiro, no Tarô e no Baralho Cigano. | o "Não é previsão" do convite virado em gancho; a referência não explica o "tem", somamos uma linha por isso |
| retrato | SÓ EM OUTUBRO: · Conselho do Cigano / Com Guilherme Araújo · Entrada no grupo: GRATUITA · Um vídeo para o seu signo, com o que fazer na semana em vendas, clientes e dinheiro. | foto `fotos Guilherme/…03.17.26.jpeg`; no lugar do preço riscado, "gratuita" (sem preço âncora: o grupo nunca foi vendido) |
| WhatsApp | O conselho do seu signo no WhatsApp, gratuito durante outubro! · fala do Gui: "🔮 E se outubro fosse o mês…" · cartão "O grupo" com o convite · cartão "O que você recebe" | só falas do Gui, do convite. A referência mostra uma pergunta de cliente; **não inventamos fala de público** |
| roda | Leve o seu signo da previsão para as vendas. · roda dos 12 signos, um tom por elemento · Um conselho em vídeo para o seu signo, com o que fazer naquela semana em vendas, clientes e dinheiro. Não é previsão. | o livro da referência virou uma carta; a roda de 7 passos virou a dos 12 signos |

## 1. Exceção de portão (registro obrigatório)

O portão da `ARVORE-ESCRITA` está **fechado** para esta conta: não existem `PILARES.md` nem `lexico-icp/`. **Victor declarou a exceção em 14/10/2026.** O que a torna aceitável, e o limite dela:

- **todo o texto vem do convite que o próprio Gui escreveu e já distribui** (`DESTILACAO-WHATSAPP-2026-09-19-A-10-01.md` §11.3, literal). Não há cena, dor ou fala de público inventada;
- a peça é **teste com verba limitada**, e a oferta é gratuita (não há preço nem promessa de resultado em jogo);
- **vale só para este criativo.** Não abre o portão para outras peças da conta.

## 2. Destino e medição

| Item | Valor |
|---|---|
| Destino | `https://chat.whatsapp.com/IVUsj5LpC8AECMIJibXIVv` (link direto do grupo; decisão no `STATUS.md`, atualização de 14/10) |
| Por que não o quiz-filtro | o anúncio promete o grupo a terapeutas, mentoras e cartomantes; o quiz só manda **Mentora** ao grupo |
| Medição | contagem de membros do grupo antes de ligar e ao fim de cada dia de verba (sem Pixel, sem cadastro). Gui relatou ~16 pessoas em 08/10: **pedir o número atual antes de ligar** |
| Validade da peça | **até 31/10/2026.** O texto diz "gratuito durante outubro"; depois disso a peça mente e tem que sair do ar |

## 3. As artes

Em `artes/`, nomenclatura `guilherme-grupo-conselho-estatico-<linha>-v1-<formato>.png`:

| Linha | Referência modelada (`960-referências criativos/`) | Feed 1080×1350 | Story 1080×1920 |
|---|---|---|---|
| **Rica** | **R14** · `WhatsApp Image 2026-10-12 at 16.21.43 (1).jpeg`: fundo escuro com brilho, título em duas vozes, grade 2×2 com ícone, assinatura e rodapé | `…-rico-v1-feed.png` | `…-rico-v1-story.png` |
| **Lisa** | **R03/R04** · `WhatsApp Image 2026-10-07 at 18.46.08 (1).jpeg` e `(2)`: tela clara, etiqueta preta, parágrafos em negrito | `…-liso-v1-feed.png` | `…-liso-v1-story.png` |

Leitura das 21 referências e o porquê da escolha dessas duas: `clientes/Paola Lopes Rosa/03 - criativos/2026-10-12-teste-01/DESIGN-V3.md` §2. Os templates daqui partem dos de lá.

**Paleta da rica:** girada do azul-petróleo da R14 para a paleta do Gui nos quizzes (base `#030712`, dourado `#FFBF00`, vermelho `#EC1129`): dourado âmbar no título e na grade, brilho vinho nos cantos.

**Conferência:** lado a lado em `referencias/comparacao-rico.png` e `referencias/comparacao-liso.png` · estrutura e ordem dos elementos iguais às referências · nenhuma linha com uma palavra sozinha · zona livre do story: a rica ocupa de 13% a 82% da altura, a lisa de 12% a 73% (medido por pixel) · texto da grade pequeno, como na referência: **conferir no celular**.

Fonte e render: `fonte/criativo-rico.html`, `fonte/criativo-liso.html`, `fonte/render.sh` (`?f=feed|story`).

### 3.1 Linha moldura (R12) · variação pedida pelo Victor em 14/10

> Pedido: *"WhatsApp Image 2026-10-12 at 16.01.24 faça uma variação com este"*.

**Referência:** R12 · `WhatsApp Image 2026-10-12 at 16.01.24.jpeg`: branco com moldura fina, vocativo vermelho grande, título preto e vermelho, corpo leve com uma linha vermelha em negrito, divisória, reversão de risco com fecho vermelho, botão em pílula preta.

**Variação = abertura segmentada** (`METODO-TRAFEGO-PAGO.md` §4.1): o vocativo da referência ("Mentor,") vira três aberturas sobre o mesmo corpo, uma por profissão que o convite do Gui nomeia. É **teste de componente** (abertura), não conceito novo: a hipótese é que a profissão chamada pelo nome separa o subpúblico de menor custo por entrada no grupo.

| ID | Abertura | Feed | Story |
|---|---|---|---|
| M-H1 | Terapeuta, | `…-moldura-terapeuta-v1-feed.png` | `…-moldura-terapeuta-v1-story.png` |
| M-H2 | Mentora, | `…-moldura-mentora-v1-feed.png` | `…-moldura-mentora-v1-story.png` |
| M-H3 | Cartomante, | `…-moldura-cartomante-v1-feed.png` | `…-moldura-cartomante-v1-story.png` |

**Medido por pixel na R12:** vermelho `#D10E12` (usado o da marca do Gui, `#EC1129`, escurecido para `#DA0F22` para manter o contraste) · divisória `#D9D9D9` · moldura a 4% das bordas · conteúdo de 18% a 82% da altura. **Nosso:** story de 20% a 79%, feed de 16% a 85%. Fonte: Inter (a da referência é uma grotesca tipo Helvetica, proprietária); a primeira rodada em Inter Tight apertou o espaço entre as palavras e foi trocada. Lado a lado: `referencias/comparacao-moldura.png`.

**Texto e procedência** (convite literal = §11.3 da destilação):

| Bloco | Texto | Fonte |
|---|---|---|
| Vocativo | Terapeuta, / Mentora, / Cartomante, | convite, 2ª linha ("terapias, mentorias ou cartomancia"); "Mentora" é o termo do quiz |
| Título | e se outubro fosse o mês de **romper seu teto financeiro?** | convite, 1ª linha |
| Corpo | um vídeo para o seu signo com **o que fazer naquela semana** em vendas, clientes e dinheiro, usando Tarô e Baralho Cigano. | convite, 3ª a 5ª linhas |
| Reversão | Não é previsão. E durante outubro, **o grupo é gratuito.** | convite, 5ª e 6ª linhas (na R12 aqui fica a garantia; o nosso "sem custo" é o grupo gratuito) |
| Botão | Entrar no grupo | destino do anúncio |

**Fora da referência, por falta de fonte:** a R12 carrega prova em número ("de 200 a mais de 700k"). Não há número do Gui para pôr no lugar, então esse bloco virou a entrega do grupo. **Risco de política:** vocativo de profissão + "seu teto financeiro" na mesma frase; profissão não é atributo sensível, mas se a Meta reprovar, trocar o título primeiro (§6).

Fonte e render: `fonte/criativo-moldura.html` (`?c=terapeuta|mentora|cartomante&f=feed|story`), `fonte/render-moldura.sh`.

## 4. Texto de cada arte e procedência

Convite literal = `§11.3` da destilação. Áudio de 08/10 = `§11.2`.

### Rica

| Bloco | Texto | Fonte |
|---|---|---|
| Topo | Guilherme Araújo · Tarô e Baralho Cigano | convite: "usando Tarô e Baralho Cigano" |
| Título | E se outubro fosse o mês… de romper o seu teto financeiro? | convite, 1ª linha |
| Ponte | Para quem trabalha com terapias, mentorias ou cartomancia e sente que o faturamento ainda não acompanha o tamanho do trabalho. Não é previsão. É direcionamento profissional: | convite, 2ª e 5ª linhas (troca de "Se você" por "Para quem", ver §6) |
| O conselho | Um vídeo para o seu signo, no Tarô e no Baralho Cigano. | convite, 3ª linha |
| A direção | Para cada elemento: o que fazer e que ações pôr em prática na semana. | convite, 4ª linha |
| O foco | Vendas, clientes, dinheiro, posicionamento, decisões e crescimento. | convite, 5ª linha |
| A entrada | Grupo no WhatsApp, gratuito durante todo o mês de outubro. | convite, 6ª linha |
| Assinatura · rodapé | Conselho do Cigano · Gratuito em outubro → Entre no grupo | nome do grupo no convite |

### Lisa

| Bloco | Texto | Fonte |
|---|---|---|
| Etiqueta | E se outubro fosse o mês de romper o seu teto financeiro? | convite, 1ª linha |
| 1 | Abri um grupo para quem trabalha com terapias, mentorias ou cartomancia e sente que o faturamento ainda não acompanha o tamanho do trabalho. | convite, 2ª linha; "abri um grupo": o Gui criou o grupo (§11.1, 05/10) |
| 2 | Durante outubro, eu mando um conselho em vídeo para o seu signo, no Tarô e no Baralho Cigano. Cada elemento recebe o que fazer e que ações pôr em prática naquela semana. | convite, 3ª e 4ª linhas, na primeira pessoa do Gui (o anúncio sai do perfil dele) |
| 3 | (Não é previsão. É direção para vendas, clientes, dinheiro, posicionamento e decisões.) | convite, 5ª linha; "crescimento" saiu por espaço |
| 4 | O grupo é gratuito durante outubro. Toca no botão e entra. 👇🏽 | convite, 6ª linha |

## 5. Texto do anúncio (Meta)

**Texto principal:**

```
🔮 E se outubro fosse o mês de romper o seu teto financeiro?

Abri um grupo para quem trabalha com terapias, mentorias ou cartomancia e sente que o faturamento ainda não acompanha o tamanho do trabalho.

Durante outubro, você recebe um conselho profundo em vídeo para o seu signo, usando Tarô e Baralho Cigano.

E o mais importante: cada elemento do signo recebe uma direção concreta do que fazer e quais ações colocar em prática naquela semana.

Não é previsão. É direcionamento profissional para vendas, clientes, dinheiro, posicionamento, decisões e crescimento.

🎁 Grupo gratuito durante outubro. Responda o quiz e entre no grupo.
```

**Título:** Grupo gratuito durante outubro · **Descrição:** Conselho do Cigano no WhatsApp · **Botão:** Saiba mais · **URL:** `https://professorguilhermearaujo.com.br/permissao-mentoras/` (§0).

*Voz:* é a do convite do Gui, quase literal. "E o mais importante" fica: é dele, e o gate anti-slop não reescreve a voz do cliente.

## 6. Riscos e o que conferir antes de subir

| Risco | Tratamento |
|---|---|
| **Política de atributos pessoais da Meta** (situação financeira): "se você… sente que **seu** faturamento…" afirma algo sobre a situação financeira de quem lê | trocado por **"para quem… sente que o faturamento…"** em todas as peças. O título ("o seu teto financeiro") é pergunta e foi mantido. Se reprovar, a primeira troca é o título |
| **Link de grupo do WhatsApp como URL de destino** | não confirmado se a Meta aceita `chat.whatsapp.com` nesse formato. Se recusar: cópia do quiz com todas as profissões levando ao grupo |
| **Link de convite exposto** | o Gui já distribui este link em grupos e para pessoas (áudio de 14/10). A restrição dele de 21/09 (não expor link de WhatsApp em descrição pública do YouTube) era sobre o grupo pago, e o grupo hoje é gratuito. **Confirmar com ele** se pode ir em anúncio |
| Peça vence em 31/10 | tirar do ar ou trocar o texto antes de 01/11 |

## 7. O que não foi feito

- **Nada foi criado na conta de anúncios.** Subir é campanha nova com destino novo: pela `DEC-2026-08-26-001`, autorização específica do Victor (dada ao pedir o criativo para o grupo; orçamento e conjunto ainda não definidos).
- Gui não viu as artes.

---
*Feito em 14/10/2026 por Claude Code CLI.*
