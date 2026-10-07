# Planejamento e arquitetura da Página 1

> **Página:** inglês e oratória bilíngue para brasileiros
> **Idioma:** PT-BR
> **Fase:** física + direção visual anterior à copy
> **Data:** 30/07/2026
> **Status:** implementada e publicada na Vercel como prévia segura; ativação comercial bloqueada pelos gates registrados em `05-GATE-VISUAL-E-QA.md`

## 1. Resultado que esta página precisa gerar

Levar uma pessoa interessada em usar o inglês em situações reais a iniciar uma conversa com Jéssica pelo WhatsApp, depois de:

1. reconhecer por que o conhecimento nem sempre aparece na fala;
2. compreender como o Emotional Speaking trabalha idioma, emoção, corpo e presença;
3. conhecer os formatos e valores sem precisar escolher sozinha;
4. entender o que acontece depois do clique.

### Ligação com o caixa

- **Dinheiro que a peça pode gerar:** matrícula em um módulo de inglês, English Flow ou formato compartilhado.
- **Passos até o pagamento:** página -> captura curta -> WhatsApp -> Zoom de cerca de 30 minutos -> escolha do formato -> matrícula.
- **Caminho mais curto preservado:** indicações e contatos quentes também podem entrar diretamente pelo WhatsApp. A página organiza e aquece, sem substituir a venda consultiva.
- **O que foi executado:** HTML, CSS, JavaScript progressivo, captura curta em modo de prévia, QA local e deploy Vercel de produção.
- **O que não será feito agora:** ativação do Apps Script/WhatsApp ou campanha.

## 2. Classificação nos quatro eixos

| Eixo | Classificação | Restrição que impõe |
|---|---|---|
| Ticket | médio | compromisso mensal ou semestral; precisa de valor, prova e explicação antes da decisão |
| Modelo | serviço educacional ao vivo e personalizado | prova de processo, rosto real e clareza de entrega pesam mais que volume de conteúdo |
| Ato de conversão | conversa por mensagem | a página vende o próximo passo; o preço aparece como referência, e o CTA único abre o WhatsApp |
| Temperatura | fria como padrão, sem prejudicar indicação morna | página completa, mecanismo cedo, prova antes da oferta e zero jargão sem explicação |
| Consciência | consciente do problema, com parcela consciente da solução | a primeira dobra promete o estado; o espelho mostra a cena; o método diferencia a categoria |
| Sofisticação | mercado saturado de promessas de fluência | promessa mais específica, não mais alta; mecanismo nomeado e demonstração concreta |
| Tom | discernimento, acolhimento e firmeza serena | zero urgência falsa, zero pressão, qualificação honesta e autonomia de escolha |

**Comprimento-alvo:** 9 a 11 telas no desktop.
**Desvio da ordem canônica:** nenhum. A oferta interna é modulada para conversa por mensagem.

## 3. Brief de entrada com nove campos

### 3.1 Oferta

Emotional Speaking, comunicado como inglês e oratória bilíngue, do básico ao avançado.

Formatos:

- individual de 1 a 4 vezes por semana;
- dupla, trio ou grupo personalizado, 1 vez por semana;
- English Flow para manutenção avançada;
- módulos regulares de seis meses;
- materiais e prática personalizados;
- diagnóstico antes da matrícula.

Não existem garantia, lote, prazo de inscrição ou número auditável de vagas. Nada disso entra.

### 3.2 ICP e léxico

Pessoa adulta, predominantemente mulher 25+, que quer usar o inglês em viagem, família ou trabalho e sente uma distância entre o que sabe e o que consegue dizer quando é vista.

Léxico autorizado:

- confiança;
- coragem;
- falar;
- julgamento;
- vergonha;
- presença;
- corpo;
- postura;
- olhar;
- leveza;
- prazer;
- experiência;
- conversa;
- nova versão.

### 3.3 Promessa central

**Falar inglês com confiança e coragem quando a conversa começa, integrando idioma, emoção, corpo e presença.**

Limites:

- não promete fluência em prazo fixo;
- não promete cura emocional;
- não elimina definitivamente medo ou vergonha;
- não relaciona uma frequência a um resultado garantido.

### 3.4 Mecanismo

**Emotional Speaking em cinco movimentos observáveis:**

1. conhecer a pessoa antes de prescrever;
2. criar segurança para tentar;
3. integrar idioma e oratória bilíngue;
4. simular conversas reais;
5. personalizar a prática e acompanhar.

Os nomes públicos das etapas serão descritivos. Não serão apresentados como protocolo clínico ou validação científica.

### 3.5 Inventário de provas

Disponível:

- seis anos de prática;
- método e materiais autorais;
- trajetória comercial e pedagógica na Wizard;
- certificação internacional declarada para ensino de inglês como segunda língua;
- demonstração do método durante a conversa de diagnóstico;
- feedback público anonimizado que relata melhora de foco e elogia aulas, método, carinho, paciência e bom humor.

Gates:

- documento da certificação antes da publicação;
- foto real em alta resolução;
- identificação ou print do depoimento somente com autorização;
- a comparação numérica incompleta do story está proibida.

### 3.6 Origem do tráfego

- indicação;
- Instagram;
- futuro tráfego pago.

A primeira dobra usa linguagem ampla o suficiente para indicação e específica o bastante para tráfego frio. Quando houver anúncio vencedor, o H1 deverá passar por conferência de correspondência literal.

### 3.7 Classificação

Classificação declarada no item 2.

### 3.8 Voz

Usar:

- `voz-jessica.skill.md`;
- `PERFIL-LINGUISTICO-JESSICA.md`;
- `MAPA-DE-COMUNICACAO-JESSICA.md`;
- `ARQUEOLOGIA-DE-LINGUAGEM.md`.

Regra: cena antes de abstração, um porquê ao lado de cada afirmação, calor sem infantilização e convite sem pressão.

### 3.9 Destino do clique

Fluxo:

1. CTA abre uma captura curta;
2. os dados são enviados ao Apps Script;
3. a pessoa segue para o WhatsApp com mensagem preenchida;
4. Jéssica entende objetivo e perfil;
5. combina uma conversa de cerca de 30 minutos pelo Zoom;
6. demonstra o método e apresenta as opções de investimento.

**Gate técnico:** número final do WhatsApp, endpoint `/exec`, campos e teste real ainda não foram recebidos.

## 4. Diagnóstico da copy

```text
PEÇA: página de vendas em PT-BR, antes do WhatsApp
LEITOR: adulta que quer usar inglês em situações reais e teme errar diante de alguém
ESTÁGIO: consciente do problema -> primeira linha começa no estado desejado, seguida da cena de trava
TEMPERATURA: fria como padrão -> prova e mecanismo completos
SOFISTICAÇÃO: saturada -> promessa diferente, sustentada por Emotional Speaking
ESTADO A -> B: conhecimento que se retrai -> fala com confiança, coragem e presença
EMOÇÃO-PONTE: segurança
AÇÃO ÚNICA: conversar
METÁFORA CONDUTORA: o olhar que volta para a conversa
VOZ: Jéssica Oliveira
```

### Pivô mestre

**Você quer falar inglês e já entende que precisa praticar. Mas, quando a conversa começa, o medo do erro, o julgamento e o corpo retraído podem ocupar o lugar do que você sabe. Por isso, a prática precisa integrar idioma, emoção, corpo e presença, não apenas acrescentar conteúdo.**

### Objeções e endereço

| Objeção | Tipo | Endereço |
|---|---|---|
| "Já estudei e continuo sem falar." | categoria | D2, D3 e D4 |
| "Vai ser só gramática." | categoria | D4 e D5 |
| "Não gosto de exercício escrito." | identitária/prática | D4, D5 e FAQ |
| "Não sei qual frequência escolher." | decisória | D8 |
| "Será que consigo manter a rotina?" | tempo/esforço | D5, D8 e FAQ |
| "Estou começando do zero." | adequação | D1, D7 e FAQ |
| "Prefiro aprender com outra pessoa." | formato | D8 e FAQ |

## 5. Arquitetura dobra a dobra

| Dobra | Pergunta | Função | Voltagem | Saldo de crença | Altura-alvo |
|---|---|---|---:|---:|---:|
| D0 | moldura | marca + âncora única | 0 | 0 | moldura |
| D1 | é para mim, o que ganho, próximo passo | promessa, formato e CTA | 2 -> 4 | -3 | 0,9 tela |
| D2 | por que isso importa | espelho em uma cena corporal | 4 -> 6 | -3 | 0,8 |
| D3 | por que agora | custo composto de continuar adiando a fala | 6 -> 8 | -3 | 0,6 |
| D4 | por que o anterior não resolveu, como funciona | pivô + Emotional Speaking em cinco movimentos | 8 -> 6 | -3 após demonstração | 1,3 |
| D5 | o que recebo | pilha tangível | 6 -> 7 | -1 | 0,9 |
| D6 | quem é você, funciona para alguém | história, autoridade e feedback anonimizado | 7 -> 7 | +4 | 1,0 |
| D7 | serve para mim | qualificação e exclusão honestas | 7 -> 7,5 | +5 | 0,6 |
| D8 | quanto custa, o que faço | conversa como oferta principal + referências de investimento | 7,5 -> 9,5 | +5 | 1,4 |
| D9 | e se não funcionar para mim | FAQ real | 9,5 -> 6 | +5 | 0,9 |
| D10 | o que faço agora | eco do olhar e CTA final | 6 -> 8 | +5 | 0,6 |

**Total projetado:** 9,0 telas.

### Portas de CTA

- D1: principal;
- fim de D4: discreta;
- D8: principal e maior;
- D10: principal;
- sticky mobile somente depois de a primeira dobra sair da tela, oculto durante D8.

## 6. Mapa de quitação

| Promessa | Prova que quita | Distância |
|---|---|---:|
| integrar idioma, emoção, corpo e presença | descrição observável de respiração, postura, olhar, gramática e conversação | mesma dobra e D4 |
| prática próxima de conversas reais | áudios, resposta imediata e falantes de diferentes nacionalidades | mesma dobra em D4/D5 |
| personalização | exemplos reais de podcast, vídeo, escrita e adaptação do homework | mesma dobra |
| acompanhamento próximo | contato quando a pessoa não entrega exercício + feedback | mesma dobra em D5 |
| experiência humana e prazerosa | feedback público anonimizado sobre método, carinho, paciência e bom humor | D6, antes da oferta |

Saldo projetado na entrada da oferta: **positivo**. A promessa foi deliberadamente limitada ao que o método e a prova disponível sustentam.

## 7. Direção visual anterior à copy

### Direção declarada

**Editorial de presença.** Fundo de papel branco e off-white com malha fina contínua, tipografia serifada de alto contraste nas chamadas, tinta escura e muito respiro. O rubi aparece uma única vez, na dobra da oferta, como clímax. Dentro dela, um card de vidro esfumaçado com borda dourada organiza a conversa, os formatos e os valores sem parecer uma prateleira de planos.

### Cinco decisões

1. **Quem chega:** adulta no celular, comparando uma decisão recorrente e querendo sentir confiança antes de conversar.
2. **Sensação dominante:** presença.
3. **Extremo:** editorial sóbrio, com hierarquia dramática e poucos efeitos.
4. **Nunca faz:** rosa infantil, luxo palaciano, cards quadrados, dourado abundante, glassmorphism fora da oferta, ícones decorativos, gradiente neon.
5. **Elemento memorável:** a malha clara atravessa a página e muda para dourado sutil quando entra no rubi da oferta.

### Tokens definidos para o planejamento

| Função | Valor |
|---|---|
| superfície base | `#FCFBF8` |
| superfície off-white | `#F4F0E8` |
| tinta forte | `#231F20` |
| tinta média | `#5F5558` |
| rubi da oferta | `#6E1830` |
| rubi profundo do card | `rgba(45, 12, 25, 0.72)` |
| dourado | `#C6A56C` |
| grid claro | `rgba(35, 31, 32, 0.075)` |
| grid rubi | `rgba(198, 165, 108, 0.10)` |
| display | Fraunces, Georgia, serif |
| corpo | Inter, system-ui, sans-serif |
| grid | 76 px, como a referência da Débora |
| raios | 8 px, 10 px e 13 px conforme a função |

Contrastes já conferidos:

- papel sobre rubi: 10,77:1;
- dourado sobre rubi: 4,90:1;
- tinta forte sobre papel: 15,75:1;
- tinta média sobre papel: 6,93:1.

### Limites de copy por bloco

Derivados de `wrap` de 66 rem, coluna de leitura de 40 rem, padding mobile de 1,5 rem e escala editorial baseada na referência.

| Elemento | Limite |
|---|---:|
| sobretítulo | 72 caracteres |
| H1 | 64 caracteres |
| subtítulo do hero | 180 caracteres |
| H2 de dobra | 72 caracteres |
| título de card | 42 caracteres |
| texto de card | 180 caracteres |
| item de lista | 110 caracteres |
| botão principal | 32 caracteres |
| microcopy sob CTA | 140 caracteres |
| pergunta de FAQ | 90 caracteres |

A validação final de quebra de linha será feita no HTML em 375, 768 e 1440 px. O designer não poderá reescrever a copy para fazê-la caber.

## 8. Arquitetura da oferta

### Decisão central

A oferta-herói não é uma das mensalidades. É a **conversa de direcionamento**, porque a escolha depende de nível, objetivo, rotina e formato.

### Ordem interna da dobra

1. título e recapitulação de valor;
2. card central "seu primeiro passo";
3. o que a conversa resolve e como acontece;
4. referências de investimento organizadas por momento;
5. CTA único para o WhatsApp;
6. microcopy de autonomia;
7. itens inclusos essenciais.

### Organização dos valores

#### Caminho individual

Módulos de seis meses, com mensalidades por frequência:

- 1 vez por semana: R$ 497/mês;
- 2 vezes: R$ 798/mês;
- 3 vezes: R$ 1.320/mês;
- 4 vezes: R$ 1.700/mês.

#### English Flow

Para manutenção avançada, 1 vez por semana:

- 6 × R$ 327;
- ou R$ 1.962.

#### Dupla, trio ou grupo personalizado

1 vez por semana, por pessoa:

- 6 × R$ 357;
- ou R$ 2.142.

Não haverá selo "mais escolhido", plano recomendado, economia calculada ou comparação riscada sem evidência.

## 9. Captura mínima e WhatsApp

### Modal de captura

Título: **Antes de abrir o WhatsApp, me conta só o essencial.**

Campos visíveis propostos:

- primeiro nome;
- seu WhatsApp;
- objetivo principal em escolha de um toque: viagem e vida pessoal | trabalho | voltar a praticar.

Consentimento:

**Ao continuar, você autoriza Jéssica a responder sobre as aulas. Seus dados não serão usados para mensagens sem relação com este contato.**

Botão do modal:

**Continuar para o WhatsApp**

### Mensagem pré-preenchida

**Oi, Jéssica! Vim pela página do Emotional Speaking. Quero conhecer o método e entender qual formato combina com meu objetivo. Meu foco principal é: {{objetivo}}.**

`{{objetivo}}` é dado operacional, não texto visível da página.

## 10. Lacunas que não impedem a copy

- número final do WhatsApp;
- endpoint e contrato de dados do Apps Script;
- fotos em alta resolução;
- imagem da certificação;
- autorização para publicar o print identificado do feedback;
- duração dos encontros de 1 vez por semana, English Flow e grupos.

Essas lacunas impedem publicação, não a redação. A copy omite toda duração não confirmada e usa o depoimento de forma anonimizada.
