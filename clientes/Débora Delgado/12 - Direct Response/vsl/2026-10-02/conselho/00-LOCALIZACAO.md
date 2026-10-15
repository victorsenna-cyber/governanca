# 00 — Localização de fontes para as perguntas de [[ FALTA ]] / [[ CONFIRMAR ]]

**Data:** 2026-10-08  
**Contagem de perguntas:** 24 (P1..P24, copiadas de JUIZ-GLOBAL.md §8, ordem da tabela)  
**Peça:** `12 - Direct Response/vsl/2026-10-02/` (G6-ROTEIRO.md)  
**Busca:** ripgrep `rg -i -n -C 3` na raiz `clientes/Débora Delgado/` inteira. Excluídos: `12 - Direct Response/vsl/**`, `_legado*`, `backup versão deployada`, `build`, e qualquer extensão que não seja `.md` ou `.txt`.  
**Limite:** até 8 trechos por pergunta, ordenados por prioridade de fonte (DESTILACAO-*, REGISTRO-WHATSAPP-*, 01 - contexto/, DEPOIMENTOS-*, INVENTARIO-PRODUTO, lexico-icp/, DIARIO-DE-BORDO, execução Codex/, AUDITORIA-*, 04 - web design/novo funil + páginas/); dentro da prioridade, ordem do rg.  
**Palavras-chave usadas:** listadas em cada P#. Este arquivo só localiza; não resume nem decide.

---

## Ocorrências `[[ FALTA` no G6-ROTEIRO.md

Total de linhas com `[[ FALTA`: 28 (grep literal).

| linha | texto | pergunta |
|---:|---|---|
| 77 | `Trabalho com o Eneagrama há [[ FALTA: há quantos anos a Débora trabalha com o Eneagrama ]] anos, e já ajudei mais de oitenta pessoas a se reconhecer por ele, em curso e em mentoria.` | P3 |
| 159 | `[[ FALTA: depoimento literal de Jacque e Bia ]]` | P4 |
| 161 | `[[ FALTA: como Jacque e Bia aparecem (nome, cargo) e o ok de cada uma para essa forma ]]` | P4 |
| 185 | `[[ FALTA 1: o que ela fazia no corporativo (função, área) e por quanto tempo ]]` | P6 |
| 187 | `[[ FALTA 2: há quantos anos ela trabalha com o Eneagrama ]]` | P3 |
| 189 | `[[ FALTA 3: uma cena dela vivendo a dor do líder no corporativo, na fala dela: um pedido que não chegou, uma relação difícil, alguém que ela não entendia ]]` | P7 |
| 199 | `[[ FALTA 4: o desfecho do colega, o que mudou para ele depois da mentoria, com o ok dele para entrar aqui ]]` | P8 |
| 213 | `[[ FALTA 5: o momento real que disparou a virada dela (um evento, uma pessoa, uma conversa); se não existir, este espaço se fecha ]]` | P11 |
| 245 | `[[ FALTA 9: as sessenta pessoas da lista, os vinte compradores do curso online e os seis da mentoria são grupos diferentes, ou há sobreposição? Se houver, "Mais vinte" aqui e "mais de oitenta" em D03 mudam juntos ]]` | P2 |
| 253 | `[[ FALTA 6: anos de Eneagrama, se não tiverem entrado em D10 ]]` | P3 |
| 255 | `[[ FALTA 7: empresas ou líderes atendidos, com número e com o ok dela para citar nomes; inclui o ok de Jacque e Bia para o nome aparecer aqui, além do depoimento de D09 ]]` | P10 |
| 257 | `[[ FALTA 8: formação, escola ou autor de referência, com o ok dela para citar ]]` | P9 |
| 303 | `[[ FALTA: a terceira pessoa da demonstração, na fala dela. Entra aqui, como um parágrafo, e a única outra alteração é "Duas leituras diferentes" virar "Três leituras diferentes". ]]` | P5 |
| 466 | `[[ FALTA: o que mudou quando ela aplicou o caminho com líderes, com evidência concreta ]]` | P1 |
| 468 | `[[ FALTA: duas a quatro pessoas que aplicaram depois, cada uma com o resultado em uma linha, com autorização ]]` | P1 |
| 470 | `[[ FALTA: a fala dela sobre como a mentoria virou o curso ]]` | P1 |
| 580 | `[[ FALTA: conteúdo confirmado do módulo de aplicação ]]` | P13 |
| 582 | `[[ FALTA: data de liberação do módulo, se ele não estiver gravado no lançamento ]]` | P13 |
| 602 | `[[ FALTA: horário dos encontros ]]` | P15 |
| 604 | `[[ FALTA: os encontros ficam gravados para quem não foi? ]]` | P15 |
| 642 | `[[ FALTA: o que da mentoria em grupo está dentro do curso ]]` | P14 |
| 666 | `Ou em doze vezes de [[ FALTA: valor da parcela de 12× no checkout ]].` | P21 |
| 686 | `[[ FALTA: condição exata da garantia ]]` | P22 |
| 702 | `Quem entrar com os encontros mantém o acesso a eles por [[ FALTA: por quanto tempo quem entrou mantém os encontros ]].` | P18 |
| 712 | `O primeiro encontro ao vivo é numa quarta-feira, dezesseis de dezembro, às [[ FALTA: horário do encontro de 16/12 ]]. E ele é só para quem já tiver entrado, até [[ FALTA: data de corte para entrar na turma fundadora ]].` | P15 e P19 |
| 754 | `São duzentos e noventa e sete reais, ou doze vezes de [[ FALTA: valor da parcela de 12× no checkout ]]. Dividido pelo tempo que o curso fica com você, dá [[ FALTA: valor diário, a calcular quando o período de acesso ao curso estiver confirmado ]] por dia.` | P21 e P16 |
| 800 | `Trabalho com o Eneagrama há [[ FALTA: há quantos anos a Débora trabalha com o Eneagrama ]] anos, e já ajudei mais de oitenta pessoas a se reconhecer por ele, em curso e em mentoria.` | P3 |
| 864 | `Abaixo da faixa do briefing: história, construção e o total. A causa são os `[[ FALTA ]]` abertos (13 bloqueios). Preenchidos, o total deve entrar na faixa; se algum elemento estourar a dose, a conta volta ao G6.` | sem P# correspondente (menção ao marcador dentro do diagnóstico, não placeholder) |

---

## P1

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Me conta 2 a 4 pessoas que aplicaram o que você ensina com o time delas: o que cada uma fez diferente e o que mudou, em uma frase cada. Cada uma autoriza aparecer (nome e cargo, ou só cargo)? E me conta com as suas palavras: como a mentoria virou o curso?"

**Palavras-chave:** aplicaram; aplicou; mentoria virou; virou o curso; depoimento  
**Regex rg:** `aplicaram|aplicou|aplicei|mentoria virou|virou o curso|depoimento`  
**Trechos encontrados:** 237 · exibidos: 8

**`AUDITORIA-DESTILACAO-2026-09-16.md:44`**

```
.\AUDITORIA-DESTILACAO-2026-09-16.md-44-**1 · 🔴 A tabela de marcadores da §13 publica um número que o próprio texto declara não confiável.**
.\AUDITORIA-DESTILACAO-2026-09-16.md-45-[Omitted long context line]
.\AUDITORIA-DESTILACAO-2026-09-16.md-46-
.\AUDITORIA-DESTILACAO-2026-09-16.md:47:**2 · Subavaliou que os depoimentos podem já estar publicados.**
.\AUDITORIA-DESTILACAO-2026-09-16.md:48:[Omitted long matching line]
.\AUDITORIA-DESTILACAO-2026-09-16.md-49-
.\AUDITORIA-DESTILACAO-2026-09-16.md-50-**3 · 🔴 O achado mais importante da call está na linha 2 de uma tabela de 13.**
.\AUDITORIA-DESTILACAO-2026-09-16.md-51-*"Qual reserva de mídia e teto de perda do teste? — Nenhum orçamento autorizado na call."* **Conferi na fonte: "verba", "investimento" e "orçamento" têm ZERO ocorrências em 2h03 de conversa sobre um funil pago.** Isso não é uma lacuna entre treze. **É a condição de recusa nº 2 do `METODO-FUNIL-DE-VSL.md` §7.** Pertencia à síntese executiva.
```

**`AUDITORIA-DESTILACAO-2026-09-16.md:143`**

```
.\AUDITORIA-DESTILACAO-2026-09-16.md-143-
.\AUDITORIA-DESTILACAO-2026-09-16.md-144-## 2.6 ⚠️ Sobre a nossa condução — e uma parte é minha
.\AUDITORIA-DESTILACAO-2026-09-16.md-145-
.\AUDITORIA-DESTILACAO-2026-09-16.md:146:**`L-05`:** entre `[09:57:50]` e `[10:00:30]`, o Victor entregou **quase literal** a análise que eu escrevi em 15/09 — *"a proposta fala do líder que não destrava o outro, os depoimentos falam do líder que não se autorizou primeiro"* · *"é o elo que faltava embaixo da narrativa da senha"*.
.\AUDITORIA-DESTILACAO-2026-09-16.md-147-
.\AUDITORIA-DESTILACAO-2026-09-16.md-148-**E ela perguntou duas vezes o que estava sendo decidido:** `[09:58:16]` *"Isso são as dores específicas que você está falando?"* · `[10:00:30]` *"Isso aí que você está trazendo para o curso, para a VSL?"*
.\AUDITORIA-DESTILACAO-2026-09-16.md-149-
```

**`DESTILACAO-CALL-2026-08-18.md:339`**

```
.\DESTILACAO-CALL-2026-08-18.md-339-
.\DESTILACAO-CALL-2026-08-18.md-340-⭐ **É a prova mais forte que a conta tem, e nunca foi usada.** Vai para página, proposta e material de indicação. ❓ Pedir autorização da Jaque e anonimizar se necessário.
.\DESTILACAO-CALL-2026-08-18.md-341-
.\DESTILACAO-CALL-2026-08-18.md:342:### B-21 · Depoimento espontâneo, relatado
.\DESTILACAO-CALL-2026-08-18.md-343-
.\DESTILACAO-CALL-2026-08-18.md-344-> ✅ [10:42:39] *"a Jaque, além das notas terem melhorado — **eu nem mostrei para ela as notas antes e depois** — ela falou com a Bia que **a mentoria estava sendo para ela muito mais que só uma mentoria, que tava sendo um direcionamento de vida, que a mentoria estava melhorando a vida dela como um todo**."*
.\DESTILACAO-CALL-2026-08-18.md-345-
```

**`DESTILACAO-CALL-2026-08-18.md:370`**

```
.\DESTILACAO-CALL-2026-08-18.md-370-
.\DESTILACAO-CALL-2026-08-18.md-371-### B-26 · Encerramento decidido: individual, não em grupo
.\DESTILACAO-CALL-2026-08-18.md-372-
.\DESTILACAO-CALL-2026-08-18.md:373:> ✅ [10:03:49] *"talvez faça sentido eu conversar com eles no um a um, para ver como é que eles estão finalizando. **Primeiro nesse um a um. Eu gravo, peço depoimento.** … **Acho que em grupo não é legal fazer esse encerramento desse jeito.**"*
.\DESTILACAO-CALL-2026-08-18.md-374-
.\DESTILACAO-CALL-2026-08-18.md:375:### B-27 · ⚠️ Depoimentos perdidos por não gravar
.\DESTILACAO-CALL-2026-08-18.md-376-
.\DESTILACAO-CALL-2026-08-18.md-377-> ✅ [10:12:36] *"eles já me deram tanto feedback espontâneo que eu acho que na hora não sei se vai sair o feedback."*
.\DESTILACAO-CALL-2026-08-18.md-378-> ✅ [10:13:05] *"**eu já tive muitos feedbacks espontâneos, Victor, que se eu tivesse gravado era muito bom. Mas eu não gravei.**"*
```

**`DESTILACAO-CALL-2026-08-18.md:410`**

```
.\DESTILACAO-CALL-2026-08-18.md-410-| **E-02** | **Qualificação declarada em voz alta antes da oferta**, para o "não" deixar de ser rejeição | ✅ [10:08:18] *"a pessoa passa a corresponder a um pedido seu, ao invés de ser uma sensação de rejeição"* |
.\DESTILACAO-CALL-2026-08-18.md-411-| **E-03** | **Desqualificação antes da oferta** resolve o constrangimento de quem não é público | ✅ [10:12:14] *"isso precisa vir antes da oferta, que é o que resolve a questão da Letícia sem constrangimento"* |
.\DESTILACAO-CALL-2026-08-18.md-412-| **E-04** | **Mentoria individual é arco pré-programado, não avulso** | ✅ [10:36:37] *"senão você está vendendo terapia — a pessoa a qualquer momento vai lá e compra"* |
.\DESTILACAO-CALL-2026-08-18.md:413:| **E-05** | **Pergunta de depoimento que evita o genérico** | ✅ [10:11:50] *"sem usar a palavra bonita — porque isso é o que mata depoimento genérico"* |
.\DESTILACAO-CALL-2026-08-18.md-414-| **E-06** | **Metrificação visual do progresso** (gráfico radar antes/depois) | ✅ [10:42:04] *"o modelo para apresentar essas melhorias… aumenta até a percepção da própria pessoa em relação ao progresso"* |
.\DESTILACAO-CALL-2026-08-18.md-415-| **E-07** | **Método de destilação de calls**, apresentado a ela | ✅ [10:13:39] *"ele destila ponto por ponto e faz um documento dessa destilação. E você pode extrair qualquer coisa dali"* — resposta dela ✅ [10:14:37]: *"faz muito sentido a palavra, porque é realmente tirar as camadas de cada parte da reunião, que são as substâncias valiosas, e não tirar o que é excesso"* |
.\DESTILACAO-CALL-2026-08-18.md-416-
```

**`DESTILACAO-CALL-2026-08-18.md:486`**

```
.\DESTILACAO-CALL-2026-08-18.md-486-
.\DESTILACAO-CALL-2026-08-18.md-487-## 13.4 · O que funcionou
.\DESTILACAO-CALL-2026-08-18.md-488-
.\DESTILACAO-CALL-2026-08-18.md:489:- ✅ **L-10 · Ensinar nomeando o mecanismo, não a regra.** `[10:11:50]` *"sem usar a palavra bonita? Por quê? Porque isso é o que mata. Depoimento genérico."* — pergunta, causa, consequência, em três frases curtas. Zero hedge.
.\DESTILACAO-CALL-2026-08-18.md-490-- ✅ **L-11 · Nomear a pessoa concreta que a regra protege.** `[10:12:14]` *"isso precisa vir antes da oferta. Que é o que resolve a questão da Letícia sem constrangimento."*
.\DESTILACAO-CALL-2026-08-18.md-491-- ✅ **L-12 · Recusar a suavização em voz alta.** `[10:14:57]` *"é a parte que não pode ser suavizada, digamos assim, que é o que vai resolver."*
.\DESTILACAO-CALL-2026-08-18.md-492-- ✅ **L-13 · Assumir o próprio erro sem drama.** `[10:13:06]` *"tem que pegar o hábito de gravar sempre"* — dito como régua para os dois, não como cobrança a ela (B-27).
```

**`DESTILACAO-CALL-2026-08-28.md:118`**

```
.\DESTILACAO-CALL-2026-08-28.md-118-✅ **A estrutura que ela usa sozinha: situação repetida → a solução óbvia que já falhou → a pergunta que vira para dentro.** É gancho pronto, e é o formato dos 10 que precisamos refazer.
.\DESTILACAO-CALL-2026-08-28.md-119-
.\DESTILACAO-CALL-2026-08-28.md-120-**C28-03 · ⭐ AS ONZE DORES DOS ALUNOS EXISTEM, ESTÃO NA PAREDE DELA, E NUNCA FORAM USADAS.**
.\DESTILACAO-CALL-2026-08-28.md:121:> *"não sei se você ainda tem, mas **tem aqueles onze depoimentos lá, que a galera trouxe as dores.** O que faz eles não dormirem na liderança. Ali já tem coisas muito específicas."* `[11:20:35]`
.\DESTILACAO-CALL-2026-08-28.md-122-> *"como criar metas direito para resolver o problema... tem uma dor de **ficar se policiando, atenção, auto cobrança, ansiedade**. Então **as dores estão aqui no meu painel. Eu nunca fiz muita coisa com elas**, mas elas estão aqui nos meus post its."* `[11:20:50]`
.\DESTILACAO-CALL-2026-08-28.md-123-> Uma delas, desenvolvida na hora: *"**não ser ouvido** é uma dor que eles trouxeram. Tipo: eu tenho certeza de um negócio e a pessoa não escuta."* `[11:21:45]`
.\DESTILACAO-CALL-2026-08-28.md-124-**Consequência: a matéria-prima do conteúdo de 30 dias já foi coletada, está literal, e vem da boca do ICP.** Nenhum gancho precisa ser inventado.
```

**`DESTILACAO-CALL-2026-08-28.md:270`**

```
.\DESTILACAO-CALL-2026-08-28.md-270-| **A Bia** | ❌ zero menções — 11 dias sem contato |
.\DESTILACAO-CALL-2026-08-28.md-271-| **Aval dela sobre os preços** | ❌ zero menções, apesar de a tela ter sido enviada em 26/08 |
.\DESTILACAO-CALL-2026-08-28.md-272-| **Portfólio para a gerente da Vale** | 🟡 mencionado, mas derivou para "qual Gabi é" e não voltou |
.\DESTILACAO-CALL-2026-08-28.md:273:| **Depoimentos do encontro de 19/08** | ❌ zero menções |
.\DESTILACAO-CALL-2026-08-28.md-274-
.\DESTILACAO-CALL-2026-08-28.md-275-**Único compromisso datado que saiu da call:** nós entregamos um documento sobre narrativa no fim de semana (`A28-04`).
.\DESTILACAO-CALL-2026-08-28.md-276-
```


## P2

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "As 60 pessoas da sua lista, os 20 que compraram o curso online e as 6 da última mentoria são pessoas diferentes, ou alguém está em mais de um grupo? Os 20 do curso online chegaram a fazer o curso? **E quantos líderes (pessoas que têm time) você já acompanhou, em curso ou mentoria?**"

**Palavras-chave:** sessenta; 60 pessoas; vinte compradores; seis da mentoria; mais de oitenta  
**Regex rg:** `sessenta|60 pessoas|vinte (compr|pessoas)|20 (compr|pessoas)|seis (da|pessoas)|mais de oitenta|compradores do curso`  
**Trechos encontrados:** 95 · exibidos: 8

**`DESTILACAO-CALL-2026-08-25.md:183`**

```
.\DESTILACAO-CALL-2026-08-25.md-183-> *"no extrajudicial, ele falou que **ia fazer o reembolso dos quatro meses, mas não fez, sumiu**... **Agora vai entrar pra um processo real. Não é o que eu queria, de jeito nenhum. Estou me sentindo péssima.**"* `[13:48:50]`
.\DESTILACAO-CALL-2026-08-25.md-184-
.\DESTILACAO-CALL-2026-08-25.md-185-**J25-02 · Dados novos do caso.**
.\DESTILACAO-CALL-2026-08-25.md:186:- **Valor da mentoria: R$ 60.000** · *"o Lifeness tem quarenta pessoas. **Uma mentoria de sessenta mil não tem quarenta pessoas na sala.** São entregas totalmente diferentes."* `[13:55:21]`
.\DESTILACAO-CALL-2026-08-25.md-187-- **Pedido dela: reembolso dos 4 meses não usados**, depois de cancelar em menos de uma semana da entrada `[13:48:50]`
.\DESTILACAO-CALL-2026-08-25.md-188-- ⚠️ *"**Ele não fez contrato. Ele não me deu nota fiscal. Ele não fez nada. Então eu não sabia o que eu tinha direito** e o que eu podia fazer."*
.\DESTILACAO-CALL-2026-08-25.md-189-- ⚠️ *"ele mandou muitas mensagens péssimas, áudio. **Colocou toda a culpa de tudo na minha insegurança**"* · *"**Se eu pegar o áudio, dá pra você levar pra um lado de assédio.**"*
```

**`DESTILACAO-CALL-2026-08-17.md:82`**

```
.\DESTILACAO-CALL-2026-08-17.md-82-
.\DESTILACAO-CALL-2026-08-17.md-83-**A-09 · ⭐ A META E O MODELO, montados por ela na call.**
.\DESTILACAO-CALL-2026-08-17.md-84-> Victor: *"quanto que você quer faturar por mês? Vinte K livre."* `[01:10:52]`
.\DESTILACAO-CALL-2026-08-17.md:85:> Ela, ao fim do cálculo: *"quinze pessoas vezes quatro dá sessenta mil. E aí eu posso ter duas pessoas para de seis, que dá mais doze. Aí já dá setenta e dois... setenta e dois dividido por quatro... Dezoito mil por mês."* `[01:17:03]`
.\DESTILACAO-CALL-2026-08-17.md-86-> *"se eu conseguir dezoito mil por mês... já é uma luz. **Eu não preciso crescer rápido**, porque aí depois, daqui a quatro meses, a gente sobe pra seis o preço."* `[01:17:56]`
.\DESTILACAO-CALL-2026-08-17.md-87-> **A escada que ela desenhou:** *"Não preciso vender quinze por quatro. Eu posso vender os primeiros oito por quatro. Depois eu vendo por seis. E aí a mentoria individual também dá para subir depois... faço por oito."* `[01:18:29]`
.\DESTILACAO-CALL-2026-08-17.md-88-
```

**`execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3099`**

```
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3099-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3100-## 10:40:08 — Debora Maciel
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3101-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3102:[10:40:08 → 10:40:19] Se a gente tiver um grupo aí, vamos supor que a gente conseguiu vender para vinte pessoas nesses três meses.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3103-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3104-## 10:40:17 — Continuum AI Systems
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3105-
```

**`execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md:56`**

```
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-56-| “a personalidade te dá talentos. Mas ela também te dá armadilhas.” | C-47, 10:52:39 | Contrapeso ao determinismo |
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-57-| “encurtar o caminho” | C-50, 11:00:11 | Função do sistema complementar |
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-58-
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md:59:Estas são falas da especialista/cliente. Não rotulá-las como frases diretas dos compradores do curso.
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-60-
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-61-## 6. Léxico de ICP — sementes candidatas
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-62-
```

**`REGISTRO-WHATSAPP-2026-10-07.md:11`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-11-
.\REGISTRO-WHATSAPP-2026-10-07.md-12-| # | Pedido | Resposta literal | Leitura |
.\REGISTRO-WHATSAPP-2026-10-07.md-13-|---:|---|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md:14:[Omitted long matching line]
.\REGISTRO-WHATSAPP-2026-10-07.md-15-| 2 | depoimento autorizado | *"Jacque e Bia topam"* | ✅ duas pessoas — falta o depoimento em si |
.\REGISTRO-WHATSAPP-2026-10-07.md-16-| 3 | data da turma fundadora | *"Me ajuda a escolher?"* → Victor propõe meados de dezembro ou janeiro (14:12) → **ela: *"Pode ser meados de dezembro"*** → Victor: *"Quarta 16"* | ✅ **quarta, 16/12/2026** · 🔴 horário aberto: *"Quarta à noite tenho aula.."*, *"to pensando"*, *"sábado preciso da agenda de rally de Danilo rsrs"* (14:23–14:24) |
.\REGISTRO-WHATSAPP-2026-10-07.md-17-| 4 | conteúdo do módulo de aplicação | *"Não sei..."* | 🔴 aberto |
```

**`02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:136`**

```
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-136-Debora Maciel: Então eu coloquei. Mas eu tô colocando agora, tá até bom tipo. Assim teve uns que não deu. Bom, não.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-137-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-138-00:08:27.000 --> 00:08:42.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:139:Debora Maciel: Engraçado, mas aqui tem um que eu fiz. Deu cento e setenta visualizações do teste cento e sessenta, cento e cinquenta. Esses são os bons. Porque tem uns que dão trinta, vinte, entendeu?
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-140-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-141-00:08:41.000 --> 00:08:43.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-142-Continuum AI Systems: Aham!
```

**`02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:295`**

```
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-295-Continuum AI Systems: Uhum.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-296-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-297-00:12:17.000 --> 00:12:29.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:298:Debora Maciel: Mas tá bom. Viu, Vitor? Porque eu postei esses vídeos todos agora de manhã e eles já estão aqui. Ó, tem um que já está com cento e vinte e três. Tem um com cento e sessenta e um.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-299-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-300-00:12:30.000 --> 00:12:31.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-301-Continuum AI Systems: Muito bom.
```

**`02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:475`**

```
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-475-Debora Maciel: E aí?
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-476-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-477-00:15:24.000 --> 00:15:30.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:478:Continuum AI Systems: Então é interessante fazer um intervalo de quarenta e cinco a sessenta dias para lançar novamente.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-479-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-480-00:15:30.000 --> 00:15:32.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-481-Debora Maciel: Tá.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-482-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-483-00:15:31.000 --> 00:15:40.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md:484:Continuum AI Systems: E aí sobre verba dois mil mensais dá uma média de R sessenta reais por dia.
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-485-
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-486-00:15:40.000 --> 00:15:44.000
.\02 - workshop\Reunião Zoom de D 21-07-2026 -- cenários A e B.md-487-Continuum AI Systems: Isso é o cenário A, digamos assim.
```


## P3

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Há quantos anos você trabalha com o Eneagrama? Desde que ano?"

**Palavras-chave:** trabalho com o Eneagrama; anos de Eneagrama; desde 20XX; há N anos  
**Regex rg:** `eneagrama há|trabalho com o eneagrama|trabalha com o eneagrama|anos de eneagrama|há [0-9]+ anos|desde 20[0-9][0-9]`  
**Trechos encontrados:** 8 · exibidos: 8

**`01 - contexto\Pré-Workshop\Mesa de Criação.md:1129`**

```
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1129-            
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1130-            Eu venho de uma carreira corporativa sólida, rápida e exigente. Fiz tudo ‘certo’ por muito tempo, mas carregava uma sensação de sobrecarga que não passava — mesmo quando tudo parecia funcionar por fora.
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1131-            
.\01 - contexto\Pré-Workshop\Mesa de Criação.md:1132:            Isso me levou, desde 2018, a estudar profundamente autoconhecimento e comportamento humano: Eneagrama, riscos psicossociais, liderança consciente e regulação emocional. Hoje eu ajudo líderes a reduzirem a sobrecarga, tomarem decisões com clareza e recuperarem energia e sentido no trabalho.
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1133-            
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1134-            Meu método revela o que realmente está por trás do cansaço e da falta de clareza — e apoia a reconstrução de uma forma mais leve, íntegra e consciente de trabalhar.
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1135-            
```

**`01 - contexto\Pré-Workshop\Mesa de Criação.md:1248`**

```
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1248-        
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1249-        **a maior parte da sobrecarga dos líderes não nasce do trabalho — nasce dos padrões internos que eles não conseguem enxergar.**
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1250-        
.\01 - contexto\Pré-Workshop\Mesa de Criação.md:1251:        Desde 2018, venho estudando Eneagrama, riscos psicossociais, cultura organizacional, autoconhecimento e regulação emocional.
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1252-        
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1253-        Hoje, meu trabalho é ajudar líderes a recuperarem direção, energia e consistência emocional.
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1254-        
```

**`01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md:3344`**

```
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3344-        
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3345-        ## Subtipos
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3346-        
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md:3347:        Quando você trabalha com o Eneagrama para apoiar o desenvolvimento das pessoas,
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3348-        
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3349-        é muito importante entender os **subtipos**.
.\01 - contexto\Pré-Workshop\Eneagrama\Eneagrama.md-3350-        
```

**`STATUS.md:50`**

```
.\STATUS.md-50-
.\STATUS.md-51-## 4. Faltam dela
.\STATUS.md-52-
.\STATUS.md:53:✅ ~~credenciais~~ ("mais de 80 pessoas") · ✅ ~~data~~ (quarta 16/12, **horário aberto**) · ✅ ~~quem dá depoimento~~ (Jacque e Bia — **falta colher**) · ✅ ~~Sistema de Conhecimento~~ (já fechado) · 🔴 **conteúdo do módulo de aplicação** (*"Não sei..."* — propor esqueleto nosso) · 🔴 **histórias reais de líder** (*"Preciso pensar..."*) · 🔴 anos de Eneagrama.
.\STATUS.md-54-
.\STATUS.md-55-## 5. Faltam do Victor
.\STATUS.md-56-
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:82`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-82-|---|---|---:|---|---|---:|:---:|
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-83-| D01 | `gancho` | 75 | o problema numa frase: **o time não faz o que você pede, e não é falta de vontade dele** + *"você não precisa decorar tipo nenhum"* (o "sem pré-requisito") | `E30-20` · `E30-12` | 65–85 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-84-| D02 ⟲ | `promessa` | 35 | ~~*"o primeiro passo é conhecer como as pessoas funcionam"*~~ → ***"Menos esforço, mais resultado, para o seu time e para você: quando você entende como cada pessoa funciona, sabe como direcionar cada uma para entregar o que você precisa."*** — teto no nível 2 da cascata | `PROMESSA-CASCATA-2026-10-02.md` §5 | 30–40 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:85:| D03 | `credencial` | 28 | quem fala, em uma linha: anos de Eneagrama, líderes atendidos | — | 25–35 | 🔴 números |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-86-| D04 | `curiosidade` | 32 | o formato: *"nesta conversa você vai entender…"* | — | 25–40 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-87-| D05 | `contrarian` | 52 | ⭐ **o mercado vende "descubra o seu tipo"; o que muda a liderança é entender como funciona quem você lidera** | `E30-08` · `E30-04` · `E30-13` | 45–60 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-88-| D06 | `segmentação` + `exclusão` | 64 | **para quem:** líder que tem como papel direcionar pessoas · **não é para quem só quer descobrir o próprio tipo** | `E30-01` · `E30-08` | 55–75 | ✅ |
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:156`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-156-| **apelido repetido 4–6 vezes, idêntico** (R1: 2) | âncora só se instala com repetição exata | `METODO-MECANISMO-E-ONE-BELIEF.md` |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-157-| **garantia de 7 dias** (R1 não cita) | decidida na oferta de 25/09 (R2, R3, R4 usam) | formato de oferta modelado |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-158-| **escassez e bônus surpresa só se forem reais** | R1 usa *"próximos 60 segundos"* e presente surpresa | princípio 8 da conta |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:159:| ❌ **não se transpõe:** *"eu garanto que você vai vender"* · *"não é pra ter lucro"* · *"estudado há 50 anos, 30 artigos"* | promessa de garantia de resultado, alegação sobre lucro, número científico sem fonte | princípio 8 · procedência |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-160-
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-161-### Métricas-alvo
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-162-
```

**`12 - Direct Response\deep-research-report - Débora 22-09-2026.md:176`**

```
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-176-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-177-**16Personalities — global/EUA — Grau B**
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-178-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md:179:**Entrada:** teste de personalidade gratuito em escala massiva; a empresa afirma que o teste foi feito mais de um bilhão de vezes desde 2011 e está disponível em 49 idiomas. citeturn14search1turn2search19
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-180-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-181-**Oferta pós-diagnóstico:** o Premium Career Suite foi encontrado a US$29 em páginas localizadas e inclui guia de carreira de 40+ páginas, ferramentas/mentores de IA e orientação personalizada para trabalho e relações profissionais, com garantia de 30 dias. citeturn14search0turn14search2
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-182-
```

**`execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md:92`**

```
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-92-
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-93-A04 00:00–01:17: Débora relata visita/conversa com possível cliente, empresa em reforma, restrição financeira percebida e interesse por trabalhos locais e indicações. O trecho sobre Danilo é ambíguo: não registra encerramento ou entrega concluída dele.
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-94-
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md:95:PDF p2 nomeia Marina na liderança comercial e Dani, há 18 anos na empresa, sobrecarregada por centralização. São relatos do documento, não avaliação independente dessas profissionais. PDF p4 lista experiência de mais de dez anos e formações; isso é credencial declarada, não prova de resultado desta consultoria.
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-96-
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-97-## 4. Confronto com o estado anterior
.\execução Codex\analise-2026-09-29\ANALISE-E-DESTILACAO.md-98-
```


## P4

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Pode me mandar o depoimento da Jacque e o da Bia exatamente como elas disseram (áudio, vídeo ou print)? Como cada uma quer aparecer (nome, cargo) e cada uma autoriza por escrito?"

**Palavras-chave:** Jacque; Bia; depoimento  
**Regex rg:** `jacque|\bbia\b`  
**Trechos encontrados:** 120 · exibidos: 8

**`DESTILACAO-CALL-2026-08-28.md:267`**

```
.\DESTILACAO-CALL-2026-08-28.md-267-| **Prazo da pré-venda** | ❌ não fechado — **5ª call** |
.\DESTILACAO-CALL-2026-08-28.md-268-| **Data do encontro extra com o Davi** | ❌ não mencionado uma única vez |
.\DESTILACAO-CALL-2026-08-28.md-269-| **As quatro conversas individuais** | ❌ só lido na tela, sem data, sem "mando hoje" |
.\DESTILACAO-CALL-2026-08-28.md:270:| **A Bia** | ❌ zero menções — 11 dias sem contato |
.\DESTILACAO-CALL-2026-08-28.md-271-| **Aval dela sobre os preços** | ❌ zero menções, apesar de a tela ter sido enviada em 26/08 |
.\DESTILACAO-CALL-2026-08-28.md-272-| **Portfólio para a gerente da Vale** | 🟡 mencionado, mas derivou para "qual Gabi é" e não voltou |
.\DESTILACAO-CALL-2026-08-28.md-273-| **Depoimentos do encontro de 19/08** | ❌ zero menções |
```

**`DESTILACAO-CALL-2026-08-25.md:36`**

```
.\DESTILACAO-CALL-2026-08-25.md-36-> *"**Tirou o aval pra você ser meu líder. Agora me dar os ritmos e as tarefas aí, se você quiser, tá?**"* `[14:05:33]`
.\DESTILACAO-CALL-2026-08-25.md-37-
.\DESTILACAO-CALL-2026-08-25.md-38-**Consequência: isto responde a pergunta que estava aberta desde 17/08**: o que a assessoria entrega que ela não faria sozinha. **Ela não precisa de mais clareza; tem de sobra. Ela quer ritmo, tarefa e comando.**
.\DESTILACAO-CALL-2026-08-25.md:39:🟡 **E a simetria vale registrar:** foi a Bia que disse a ela *"eu não tenho líder... as pessoas me dão a mão pra eu sofrer, mas ninguém me ajuda a sair"*. **Ela acabou de pedir a nós exatamente o que a Bia pediu a ela.**
.\DESTILACAO-CALL-2026-08-25.md-40-
.\DESTILACAO-CALL-2026-08-25.md-41-**A25-07 · Ela mesma nomeou o que precisa, e é operacional.**
.\DESTILACAO-CALL-2026-08-25.md-42-> *"eu também preciso saber uma coisa que é **o beabá**. Porque eu não estou fazendo nada no Instagram. [Tipo] **'Débora, pra fazer esse teste você precisa pelo menos postar um [conteúdo] por dia'**"* `[13:28:48]`
```

**`DESTILACAO-CALL-2026-08-25.md:52`**

```
.\DESTILACAO-CALL-2026-08-25.md-52-> 🔴 *"**A Gabi me pediu o meu portfólio e tal, mas eu não mandei nada.** Eu comecei a construir, mas não mandei nada porque eu falei: gente, como é que eu faço pra mandar um portfólio?"* `[13:09:20]`
.\DESTILACAO-CALL-2026-08-25.md-53-> *"eu me garanto mais [n]a conversa, a pessoa me conhecendo, trazendo os problemas... **mas até ela marcar, às vezes uma indicação pode não ser suficiente.**"* `[13:09:20]`
.\DESTILACAO-CALL-2026-08-25.md-54-
.\DESTILACAO-CALL-2026-08-25.md:55:**Consequência: é o terceiro lead documentado que trava por falta de estrutura**: a Rafa em 04/08 (*"eu não estruturei ainda"*), o amigo indicado pela Bia (contato nunca coletado) e agora a gerente da Vale. **E este é exatamente o ICP que ela declarou querer em 04/08.**
.\DESTILACAO-CALL-2026-08-25.md-56-
.\DESTILACAO-CALL-2026-08-25.md-57-**B25-02 · ⭐⭐ O CASO QUE ANCORA A FRENTE INTEIRA: R$ 70.000 aprovados e perdidos.**
.\DESTILACAO-CALL-2026-08-25.md-58-> *"quando eu entrei na mentoria do Jon, **eu estava com o caminho de empresas**. Eu tinha feito esse workshop para a Gabi. E **eu estava com um projeto quase sendo contratado por uma empresa para mentorar catorze líderes**."* `[13:10:28]`
```

**`DESTILACAO-CALL-2026-08-25.md:203`**

```
.\DESTILACAO-CALL-2026-08-25.md-203-**Em 59 minutos, nada disto apareceu:**
.\DESTILACAO-CALL-2026-08-25.md-204-
.\DESTILACAO-CALL-2026-08-25.md-205-1. 🔴🔴 **O ENCERRAMENTO DA MENTORIA.** Estava marcado para **esta semana**. **Zero menções.**
.\DESTILACAO-CALL-2026-08-25.md:206:2. 🔴 **A Bia.** Sem contato desde 17/08, oito dias. É a venda mais próxima da conta.
.\DESTILACAO-CALL-2026-08-25.md:207:3. 🔴 **As quatro conversas individuais** (Bia, Lete, Davi, Letícia).
.\DESTILACAO-CALL-2026-08-25.md-208-4. 🔴 **Os preços fechados em 18/08**: grupo R$ 3.000, via curta R$ 2.500. **Discutiu-se consultoria a R$ 279–300 sem cruzar com nenhum deles.**
.\DESTILACAO-CALL-2026-08-25.md-209-5. 🔴 **Vagas, data de início da turma de outubro e prazo da pré-venda.** **Quarta call consecutiva.**
.\DESTILACAO-CALL-2026-08-25.md-210-6. **Os depoimentos do encontro de 19/08.** Ela pediu depoimento à Gabi (B2B), mas não mencionou os dos mentorados.
```

**`DESTILACAO-CALL-2026-08-25.md:226`**

```
.\DESTILACAO-CALL-2026-08-25.md-226-| **C25-05** | Coletar o depoimento da Gabi | **Débora** | pedido em 25/08 |
.\DESTILACAO-CALL-2026-08-25.md-227-| **C25-06** | Responder a gerente da Vale | **Débora** | ⚠️ **vencido, e nada foi acordado** |
.\DESTILACAO-CALL-2026-08-25.md-228-
.\DESTILACAO-CALL-2026-08-25.md:229:**Herdados e não tocados nesta call:** encerramento · Bia · conversas individuais · vagas e datas · feedback do formulário · transcrições do Eneagrama · campanha de R$ 12/dia.
.\DESTILACAO-CALL-2026-08-25.md-230-
.\DESTILACAO-CALL-2026-08-25.md-231----
.\DESTILACAO-CALL-2026-08-25.md-232-
```

**`DESTILACAO-CALL-2026-08-25.md:254`**

```
.\DESTILACAO-CALL-2026-08-25.md-254-
.\DESTILACAO-CALL-2026-08-25.md-255-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-25.md-256-
.\DESTILACAO-CALL-2026-08-25.md:257:[Omitted long matching line]
.\DESTILACAO-CALL-2026-08-25.md-258-
.\DESTILACAO-CALL-2026-08-25.md-259-**O que isso implica na prática:** o funil que ele prometeu entregar nesta semana precisa começar pelo que já tem gente dentro. **Encerramento, quatro conversas, data da turma. Depois VSL.** Do contrário, entregamos exatamente o que ela já sabe fazer sozinha: construir: e não o que ela acabou de pedir.
.\DESTILACAO-CALL-2026-08-25.md-260-
```

**`DESTILACAO-CALL-2026-08-18.md:231`**

```
.\DESTILACAO-CALL-2026-08-18.md-231-
.\DESTILACAO-CALL-2026-08-18.md-232-Contexto: formulário de indicação enviado ao grupo; **só duas responderam**.
.\DESTILACAO-CALL-2026-08-18.md-233-
.\DESTILACAO-CALL-2026-08-18.md:234:> ✅ [10:21:07] *"eu fiz o forms de indicação. **Só a Bia e a Alethe responderam. A Bia deu um dez.** Ela falou até que já recomendou pro amigo dela, vai me passar o contato dele. **A Alethe deu um oito.** E a Alethe vira e mexe quer me recomendar e volta, quer me recomendar e volta."*
.\DESTILACAO-CALL-2026-08-18.md-235-> ✅ [10:21:07] *"lá no oito eu sempre pergunto o que precisaria para ser um dez. Ela respondeu: **o perfil das pessoas**. Porque ela falou que é uma pessoa mais cética, poderia não curtir a parte mais… espiritual."*
.\DESTILACAO-CALL-2026-08-18.md-236-> ✅ [10:21:53] *"a Leth adorou o desenho humano, falou que descreveu super ela. **Mas ela não tem coragem de levar desenho humano para outros líderes.**"*
.\DESTILACAO-CALL-2026-08-18.md-237-
```

**`DESTILACAO-CALL-2026-08-18.md:341`**

```
.\DESTILACAO-CALL-2026-08-18.md-341-
.\DESTILACAO-CALL-2026-08-18.md-342-### B-21 · Depoimento espontâneo, relatado
.\DESTILACAO-CALL-2026-08-18.md-343-
.\DESTILACAO-CALL-2026-08-18.md:344:> ✅ [10:42:39] *"a Jaque, além das notas terem melhorado — **eu nem mostrei para ela as notas antes e depois** — ela falou com a Bia que **a mentoria estava sendo para ela muito mais que só uma mentoria, que tava sendo um direcionamento de vida, que a mentoria estava melhorando a vida dela como um todo**."*
.\DESTILACAO-CALL-2026-08-18.md-345-
.\DESTILACAO-CALL-2026-08-18.md-346-### B-22 · ⚠️ Episódio depressivo ao fim do processo, e a condução
.\DESTILACAO-CALL-2026-08-18.md-347-
```


## P5

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "No pedido 'Preciso dessa proposta revisada até quinta', como reage a pessoa que foge de conflito? Me descreve com as suas palavras, como você fez com quem vê risco e com quem precisa de privacidade."

**Palavras-chave:** foge de conflito; proposta revisada; privacidade; duas leituras  
**Regex rg:** `foge de conflito|proposta revisada|evita conflito|privacidade|duas leituras|terceira pessoa`  
**Trechos encontrados:** 49 · exibidos: 8

**`DESTILACAO-CALL-2026-08-18.md:148`**

```
.\DESTILACAO-CALL-2026-08-18.md-148-> ✅ [11:04:43] *"eu ajudei a montar esses trem. Tudo. Na verdade, **a gente fez um mutirão da minha família**. Chamou meu pai, minha irmã. Meu pai trabalhou pra caramba nesse trem. Ele vinha aqui pra casa e ficava horas a gente encaixando pecinha dos hardware."*
.\DESTILACAO-CALL-2026-08-18.md-149-> ✅ [11:05:01] *"teve um dia na casa dos meus pais que ficou todo mundo que estava na casa dos meus pais trabalhando: minha irmã, meu cunhado, minha mãe, todo mundo arrumando `[montando]`, ajudando Danilo, porque estava em cima da hora."*
.\DESTILACAO-CALL-2026-08-18.md-150-
.\DESTILACAO-CALL-2026-08-18.md:151:🟡 **Duas leituras, ambas importantes:** (a) não existe linha de produção — **escalar de 100 para 500 unidades não é decisão comercial, é problema industrial não resolvido**; (b) o vínculo familiar com a Kraken é profundo, o que **eleva o peso relacional de qualquer proposta nossa**.
.\DESTILACAO-CALL-2026-08-18.md-152-
.\DESTILACAO-CALL-2026-08-18.md-153-### A-17 · Jaque como recurso, com precedente direto
.\DESTILACAO-CALL-2026-08-18.md-154-
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:98`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-98-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-99-| ID | Ponto / status | Citação literal e horário | Consequência |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-100-|---|---|---|---|
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:101:| C-34 | Há acervo de transcrições de mentorias no Drive oferecido para análise. | Débora [10:03:36]: “eu tenho todas as transcrições da Mentoria.”; [10:04:44]: “Eu posso te passar. Tenho elas todas no Google, no drive.” | Solicitar acesso e delimitar uso/privacidade. Oferta de envio não é prova de recebimento. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-102-| C-35 | Vídeos de Eneagrama já existem, em versão coletiva e individual. | Débora [10:05:43]: “Tem esse vídeo. Tem um de cada, né? Então tem vários vídeos deles falando aí, eu tipo, fiz recordes, mas tem isso.” | Inventariar originais, contextos e autorização; não fabricar depoimento do novo pacote. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-103-| C-36 | Novos depoimentos possíveis: Gabi, Jaque e Bia. | Débora [10:06:07]: “Aí a Gabi vai gravar. Eu vou pedir a jaque. A Bia também. Pra gravar.” | Promessas de terceiros relatadas e intenção de solicitação; sem data ou arquivo confirmado. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-104-[Omitted long context line]
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:212`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-212-- Mais de vinte horas de curso foi corrigido para sete.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-213-- Nome de plataforma, teste, empresa e alguns participantes sofre variação automática; confirmar antes de integração técnica ou publicação.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-214-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:215:### Privacidade e risco de extrapolação
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-216-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-217-- A fonte contém senha global. Mantida apenas na reprodução mecânica interna, não neste documento. Não usar nem divulgar; eventual substituição é tarefa separada autorizada.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-218-- Relato de litígio/insatisfação com terceiro não valida culpa, direitos ou desfecho. Não reutilizar as afirmações jurídicas de Victor como parecer.
```

**`execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3562`**

```
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3562-[10:56:39 → 10:56:42] Ah, Raquel vai ter do cinco que eu falei, que eu não lembro.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3563-[10:56:43 → 10:56:45] Me deu. Branco.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3564-[10:56:45 → 10:56:47] Viver para mim.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3565:[10:56:48 → 10:56:52] É garantir minha privacidade, minha autonomia e minha independência.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3566-[10:56:55 → 10:56:56] E aí?
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3567-[10:56:56 → 10:57:04] Mas aí tem tudo aqui. Aí tem os talentos. Ó, o talento do subtipo.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3568-[10:57:04 → 10:57:13] Tem que parar de fazer esse negócio de talento que vem do centro de energia. Contribuição única essência, talento do sobretipo, talento do instinto.
```

**`execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:90`**

```
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-90-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-91-A lógica apresentada por Débora é excluir tipos, reduzir candidatos e então comparar subtipos. Ela destaca motivação, autoimagem e visão de mundo, distinguindo comportamento atual de respostas aprendidas ao longo da vida (C-37 a C-40 e 15:00:49–15:01:22).
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-92-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:93:[Omitted long matching line]
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-94-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-95-Débora começa ressaltando o esforço necessário para replicar o nível do teste de Uranio, depois admite tentar uma versão própria e informa tentativas anteriores com GPT. Registrar ambos os movimentos: há interesse, mas não desapareceu a complexidade.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-96-
```

**`DIARIO-DE-BORDO.md:602`**

```
.\DIARIO-DE-BORDO.md-602-
.\DIARIO-DE-BORDO.md-603-[Omitted long context line]
.\DIARIO-DE-BORDO.md-604-
.\DIARIO-DE-BORDO.md:605:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-606-
.\DIARIO-DE-BORDO.md-607-**✅ Camada 2, a decisão dela, e é a que importa:** *"De toda forma vou puxar os X1s"* `[21:05]`. **As quatro conversas individuais saem independentemente do ritual de encerramento** — é exatamente o desbloqueio que o `PROGRESSO.md` cobrava há três calls, e partiu dela.
.\DIARIO-DE-BORDO.md-608-
```

**`12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md:108`**

```
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-108-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-109-> ⚠️ *As Nove Línguas* é provisório até a conferência da Débora; se mudar, só o card 2 muda.
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-110-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md:111:**Rodapé:** no estilo do rodapé da referência — "Débora Delgado · deboradelgado.space" · `[[ FALTA: CPF/CNPJ ]]` · "Ao acessar esta página, você está de acordo com: Termos de Uso | Política de Privacidade" (links `[[ FALTA ]]`) · e, em texto pequeno: "Este quiz é um ponto de partida, não um diagnóstico de personalidade. Ele não indica o seu tipo no Eneagrama."
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-112-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-113----
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-114-
```

**`12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md:302`**

```
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-302-**s21** · "Uma pessoa do time vê risco em tudo o que é novo. Para você, isso é…"
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-303-0 "Resistência, que atrasa o time." · 1 "Pessimismo, que eu preciso contornar." · 2 "Cuidado, que às vezes exagera." · 3 "A forma como ela protege o time — e uma informação útil, se eu souber usar."
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-304-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md:305:**s22** · "Uma pessoa precisa de mais silêncio e privacidade do que o resto do time. Você…"
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-306-0 "Acha que ela precisa se integrar mais." · 1 "Respeita, mas acha estranho." · 2 "Dá espaço quando percebe." · 3 "Combina com ela como prefere receber demandas e retornos."
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-307-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v5-2026-10-03.md-308-**s23** · "Se alguém te perguntasse o que move cada pessoa do seu time, você…"
```


## P6

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "No corporativo, qual era a sua função, em que área, e por quanto tempo?"

**Palavras-chave:** corporativo; função; área; trabalhava  
**Regex rg:** `no corporativo|trabalhava (como|de|na|no)|era (gerente|coordenad|analista|supervis)`  
**Trechos encontrados:** 5 · exibidos: 5

**`DESTILACAO-CALL-2026-08-18.md:297`**

```
.\DESTILACAO-CALL-2026-08-18.md-297-### B-16 · ⭐ Contraexemplo Sara — e a frase de posicionamento que sai dela
.\DESTILACAO-CALL-2026-08-18.md-298-
.\DESTILACAO-CALL-2026-08-18.md-299-> ✅ [10:27:49] *"aconteceu com a Sara semana passada lá no grupo. Ela foi conversar com uma pessoa de uma empresa, toda empolgada, vamos levar o desenho humano para empresas. **Ela voltou no grupo assim: pelo amor de Deus, eu não quero esse ICP.**"*
.\DESTILACAO-CALL-2026-08-18.md:300:> ✅ [10:27:58] *"ela mandou: **'é um jogo de ego. Eu descobri que as pessoas fazem isso no corporativo. Eu nem sabia que esse mundo existia.'** … Na minha cabeça não me surpreende, porque **eu vivi muito disso**."*
.\DESTILACAO-CALL-2026-08-18.md-301-> ✅ [10:28:38] *"**pra mim, precisa de uma pessoa espiritualizada que goste dos céticos, que não ligue pro jogo de poder, pra entrar naquele mundo.**"*
.\DESTILACAO-CALL-2026-08-18.md-302-
.\DESTILACAO-CALL-2026-08-18.md-303-⭐ **Essa última frase é o posicionamento dela em uma linha.** É diferenciação real: a maioria do mercado espiritual **não aguenta** o corporativo.
```

**`01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md:326`**

```
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-326-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-327-[10:27:49] Continuum AI Systems: É Ruberti. E aí? Eu vou à pancada de todo mundo.
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-328-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md:329:[Omitted long matching line]
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-330-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-331-[10:28:29] Continuum AI Systems: Aham!
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-332-
```

**`12 - Direct Response\deep-research-report - Débora 22-09-2026.md:30`**

```
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-30-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-31-**Promessa e mecanismo:** em vez de “descubra qual caixa você é”, o mecanismo é o **Teste das Cores**, traduzindo padrões comportamentais em decisões práticas. A própria explicação enfatiza combinações de perfis e contexto, e não simplesmente “uma pessoa = uma cor”. citeturn11search0turn17view1
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-32-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md:33:**Oferta/ascensão:** teste individual de baixo preço → mentoria de carreira; no corporativo, diagnóstico → “Rock Experience” → treinamento/desenvolvimento → mentoria executiva. Uma oferta de treinamento de vendas observada em setembro de 2026 custava R$697 e incluía o teste completo, ilustrando como o assessment é incorporado ao produto seguinte. citeturn11search6
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-34-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-35-**VSL:** não apareceu como mecanismo primário verificável.
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-36-
```

**`01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt:929`**

```
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-929-Continuum AI Systems: Eu vou à pancada de todo mundo.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-930-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-931-10:27:58 --> 10:28:15
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt:932:Debora Maciel: Eu não sei o que aconteceu na reunião, mas ela mandou assim. É um jogo de ego. Eu descobri que as pessoas fazem isso, aquilo, aquilo no corporativo. Eu nem sabia que esse mundo existia. Então ela começou a trazer várias coisas, mostrando que para ela. Não ressoava aquele público. Aquela coisa.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-933-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-934-10:28:15 --> 10:28:28
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-935-Debora Maciel: E aí eu, escutando o áudio dela, pô, fica um jogo de poder e começou a fazer isso só por causa daquilo é, Aham, sim. Tipo, na minha cabeça. Não me surpreende, porque eu vivi muito disso.
```

**`01 - contexto\Pré-Workshop\Mesa de Criação.md:290`**

```
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-290-        
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-291-[Omitted long context line]
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-292-        
.\01 - contexto\Pré-Workshop\Mesa de Criação.md:293:[Omitted long matching line]
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-294-- **CENÁRIO IDEAL (MINHA RICH LIFE)**
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-295-    
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-296-    - Instruções
```


## P7

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Me conta uma situação sua, no corporativo, em que um pedido seu não chegou, ou uma relação foi difícil, ou você não entendia alguém. O que aconteceu?"

**Palavras-chave:** pedido não chegou; relação difícil; não entendia  
**Regex rg:** `pedido não chegou|relação difícil|não entendia|pedido que não`  
**Trechos encontrados:** 2 · exibidos: 2

**`01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md:76`**

```
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-76-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-77-Com que frequência você sente medo ou ansiedade? O quanto as pessoas se consideram ansioso?
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-78-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md:79:O quanto você acha que você tem uma relação difícil com autoridade?
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-80-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-81-É fácil ou difícil confiar?
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-82-
```

**`01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md:326`**

```
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-326-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-327-**Como percebe a preguiça (esquecimento de mim) na sua vida?**
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-328-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md:329:Sempre fui muito ativo. Na primeira etapa não entendia e tinha muito preconceito.
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-330-
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-331-A preguiça pra mim é uma energia de confusão, de saber o que quer.
.\01 - contexto\Pré-Workshop\Eneagrama\Roteiro Entrevista Eneagrama.md-332-
```


## P8

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "O que mudou para aquele colega depois da mentoria que vocês fizeram? Ele autoriza aparecer (mesmo sem nome)?"

**Palavras-chave:** colega; desfecho; mentoria  
**Regex rg:** `colega`  
**Trechos encontrados:** 22 · exibidos: 8

**`DEPOIMENTOS-2026-09-15.md:111`**

```
.\DEPOIMENTOS-2026-09-15.md-111-**E a Débora nomeia o mecanismo, com as palavras dela:**
.\DEPOIMENTOS-2026-09-15.md-112-> *"é muito mais difícil o outro reconhecer o nosso valor quando a gente não reconhece. Por isso que **o primeiro passo é sempre a gente ancorar essa maestria, domínio** — opa, isso aqui eu ajudo. Porque aí o outro também sente isso mais fácil, **ele te chama**."*
.\DEPOIMENTOS-2026-09-15.md-113-
.\DEPOIMENTOS-2026-09-15.md:114:> 🔴 **Traduzido para a língua de quem compra:** uma líder que se considerava em risco de demissão passou a atuar na metade da operação onde estava o problema, e a colega que não a procurava passou a pedir ajuda. **Isso é retenção de talento sênior, quebra de silo e prontidão de sucessão — em um caso só, com nome e situação.**
.\DEPOIMENTOS-2026-09-15.md-115->
.\DEPOIMENTOS-2026-09-15.md-116-> ⭐ **É o caso para a conversa da Kinology e para a gerente da Vale.** Não precisa de número: precisa de autorização.
.\DEPOIMENTOS-2026-09-15.md-117-
```

**`DIARIO-DE-BORDO.md:277`**

```
.\DIARIO-DE-BORDO.md-277->
.\DIARIO-DE-BORDO.md-278-> **Decisão nossa (`REGRA Nº 0`): vira o primeiro elo da cadeia, antes do "destravar o outro". Não é pilar novo — é o degrau que faltava embaixo.** Entra na próxima revisão do `PILARES.md`.
.\DIARIO-DE-BORDO.md-279-
.\DIARIO-DE-BORDO.md:280:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-281-
.\DIARIO-DE-BORDO.md-282-> 🔴 **E o padrão que isto expõe pela terceira vez: a prova desta conta não falta, ela evapora.** *"Eu faço e esqueço."* Foram 21 graus `D` parados sete semanas em julho, e agora depoimentos gravados que ela não passou. **Instituir a coleta como rotina vale mais que qualquer peça que a gente escreva este mês.**
.\DIARIO-DE-BORDO.md-283-
```

**`01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md:12`**

```
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-12-**Consequência: a recomendação anterior (meados de setembro, 11/09 ou 25/09) CAI.** 11/09 pega o dia seguinte ao aniversário; 25/09 é aceitável mas apertado no caixa recém-gasto.
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-13-
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-14-### Variável B: workshop PILOTO em agosto (ideia da Débora)
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md:15:Ela propôs fazer um workshop **ainda em agosto, sem tráfego**, convidando apenas mentorados e antigos colegas de trabalho, para **ganhar feedback e expertise**.
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-16-
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-17-**Leitura: estrategicamente excelente. Não é adiar — é a preparação que faltava.** Motivos:
.\01 - contexto\AUDITORIA-POSICIONAMENTO-25-07.md-18-1. **Custo zero de mídia** — não toca no caixa dela (resolve o medo nº 1 declarado na call de 21/07).
```

**`02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md:192`**

```
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-192-**[17:03]** **Continuum AI Systems:** Será que tem como colocar um acesso para mim aí num e-mail? Que aí eu entro e vejo como que eu posso adicionar um site direto aí.
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-193-**Debora:** [navegando nas configurações do Wix] Convidar colaborador. Ah, me passa seu e-mail de novo.
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-194-**Continuum AI Systems:** Victor Sena Costa arroba Gmail.com.
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md:195:**Debora:** Pronto aí. Administrador, que vai tudo, né? Melhor. Faturamento. Já está tudo. Quando eu coloco administrador. Esse convite é "um colega do meu negócio". Eu te coloquei como coproprietário. Expira em vinte e nove dias. Por quê?
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-196-**Continuum AI Systems:** Tá bom.
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-197-**Debora:** Mas depois reenvio o convite. Eu gosto de ter cinco colaboradores. Acabei de descobrir.
.\02 - workshop\Materiais pré workshop\Reunião Zoom Débora - workshop - na íntegra.md-198-**Continuum AI Systems:** Beleza. Ó show! Mas eu vou fazer muito provavelmente pelo Cloud. Ou então pelo Codex. O Codex está excepcional.
```

**`execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md:254`**

```
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-254-redor
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-255-O  efeito  que  ela  causa  sem  fazer  de
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-256-propósito
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md:257:O  olhar  das  colegas  no  mural  das
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-258-maestrias
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-259-A lém  das  4  horas  no  Expressar,  há  o  trabalho  de  bastidores:  leitura  dos  relatórios,  preparo  dos  encontros  e  sínteses.
.\execução Codex\analise-2026-09-29\PDF-TEXTO-EXTRAIDO.md-260-
```

**`PROGRESSO.md:39`**

```
.\PROGRESSO.md-39-- [x] **Vídeo de 14min11 com 4 mentorados + mensagem do Caio Figueiredo (2021)** → destilado em `DEPOIMENTOS-2026-09-15.md`. **11 frases novas em grau `D`: o banco foi de 21 para 32.**
.\PROGRESSO.md-40-- [x] **⭐ Meia lacuna fechada:** o balde `objeção` estava vazio em `D` desde 11/09. Caio: *"sempre fui alguém mto fechado e cético"* — **objeção dita por quem a tinha e comprou, com durabilidade de 4 anos.**
.\PROGRESSO.md-41-- [x] **⭐⭐ Quatro pessoas descreveram a mesma virada, e não é a que a proposta vende:** *não reconhecia o próprio valor, e por isso não se autorizava.* **É o elo que faltava embaixo da narrativa da senha** — responde *por que* ele daria a senha: **ele confia em quem ocupa o próprio lugar.**
.\PROGRESSO.md:42:- [x] **⭐ O caso da Lete é o melhor ativo B2B da conta** — "acho que vão me demitir" → entrou na metade da empresa que não conseguia entrar → a colega passou a pedir ajuda. **Retenção, silo e sucessão em um caso.**
.\PROGRESSO.md-43-- [ ] 🔴 **Nenhum depoimento tem autorização de uso.** Custa 2 minutos dela e destrava 5 provas.
.\PROGRESSO.md-44-- [ ] 🔴 **Instituir a coleta como rotina.** *"Eu faço e esqueço."* **Terceira vez que prova evapora nesta conta** — foram 21 graus `D` parados 7 semanas em julho.
.\PROGRESSO.md-45-
```

**`PAUTA-CALL-25-07.md:36`**

```
.\PAUTA-CALL-25-07.md-36-Perguntar: quem na base já demonstrou interesse e nunca foi convidado formalmente?
.\PAUTA-CALL-25-07.md-37-
.\PAUTA-CALL-25-07.md-38-## 4. Workshop PILOTO de agosto (ideia dela — validar e planejar)
.\PAUTA-CALL-25-07.md:39:**Excelente e vira prioridade.** Sem tráfego, só convidados (mentorados + ex-colegas).
.\PAUTA-CALL-25-07.md-40-Entrega quatro coisas: **expertise** de facilitação no formato novo (estudo de caso + hot seat) · **depoimentos/prova social** (hoje zero) · **material de conteúdo** (cenas reais viram criativo) · **canal de venda de mentoria** (pitch no final, público quente).
.\PAUTA-CALL-25-07.md-41-Definir na call: data, lista de convidados, formato, como colher feedback e autorização de depoimento.
.\PAUTA-CALL-25-07.md-42-
```

**`PAUTA-CALL-2026-09-16.md:291`**

```
.\PAUTA-CALL-2026-09-16.md-291-
.\PAUTA-CALL-2026-09-16.md-292-> *"No encontro das 14h eu faria assim: você fecha o piloto mostrando o que mudou, **sem falar de preço**. E marca uma conversa separada com quem decide, pra semana que vem. **Oferta dentro de entrega gratuita queima a entrega.** Faz sentido ou você faria diferente?"*
.\PAUTA-CALL-2026-09-16.md-293-
.\PAUTA-CALL-2026-09-16.md:294:**E o caso da Lete é o que se leva:** líder que se achava em risco de demissão, entrou na metade da empresa que não conseguia entrar, e a colega passou a pedir ajuda. **Em língua de empresa: retenção de talento sênior, quebra de silo, prontidão de sucessão.** Precisa de autorização, não de número.
.\PAUTA-CALL-2026-09-16.md-295-
.\PAUTA-CALL-2026-09-16.md-296-🔴 **E a pendência que não pode sumir de novo:** conflito societário dela na Kinology. **Antes de virar caso público, precisa estar declarado.**
.\PAUTA-CALL-2026-09-16.md-297-
```


## P9

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Onde você se formou no Eneagrama, ou qual escola ou autor é a sua referência? Posso citar na aula?"

**Palavras-chave:** formação; escola; autor de referência; Riso  
**Regex rg:** `formação|formei|escola de|autor de referência|Riso|Hudson|Naranjo|Palmer|Beatty`  
**Trechos encontrados:** 361 · exibidos: 8

**`DESTILACAO-CALL-2026-08-17.md:125`**

```
.\DESTILACAO-CALL-2026-08-17.md-125-**⭐ Recomendação dada e não executada:** *"trazer uma nomenclatura para esse método. E registrar."* `[00:13:48]`: ela respondeu *"Sério?"*, ele confirmou *"Seríssimo"*. **Não virou tarefa.**
.\DESTILACAO-CALL-2026-08-17.md-126-
.\DESTILACAO-CALL-2026-08-17.md-127-**P-02 · 🔴 Artefato 2: "Mapa dos bloqueios": NÃO É DELA.**
.\DESTILACAO-CALL-2026-08-17.md:128:[Omitted long matching line]
.\DESTILACAO-CALL-2026-08-17.md-129-Categorias: bloqueios da criança ferida · da vida adulta · de relacionamento · de dinheiro. Gera devolutiva priorizada `[00:18:36]`.
.\DESTILACAO-CALL-2026-08-17.md-130-**Ver `R-02`. A autorização declarada é de uso com clientes; incorporar em área de membros de produto vendido é outro ato.**
.\DESTILACAO-CALL-2026-08-17.md-131-
```

**`DESTILACAO-CALL-2026-08-04.md:93`**

```
.\DESTILACAO-CALL-2026-08-04.md-93-**Consequência:** arquitetura de produto de vida longa. ⚠️ **O passo 3 usa "padrões", que está no léxico morto para headline/CTA/hook desde 09/07** (`GOVERNANCA-REPO.md` §4) — aceitável como nome interno de etapa, **proibido em copy**. O detalhamento com checklist existe no WhatsApp e **não foi trazido para o repo**.
.\DESTILACAO-CALL-2026-08-04.md-94-
.\DESTILACAO-CALL-2026-08-04.md-95-**D-09 · O modelo que o Jon passou (a metáfora da dança).**
.\DESTILACAO-CALL-2026-08-04.md:96:> *"o John fala assim. Imagina que você vai ensinar a pessoa a dançar no curso gravado. Você vai ensinar noções de dança, mas ela já sai saindo, fazendo os primeiros passinhos na mentoria. Ela vai aprender a dançar melhor. Cada produto seu vai ensinar a pessoa a dançar também. Só que em níveis diferentes... Mas tudo ensina a mesma transformação."* `[00:05:16]`
.\DESTILACAO-CALL-2026-08-04.md-97-**Consequência:** é a premissa que gerou o dilema resolvido em 29/07 (níveis neurológicos e chunking). **Com a saída do Lifeness, esta premissa deixa de ser obrigação e volta a ser opção.**
.\DESTILACAO-CALL-2026-08-04.md-98-
.\DESTILACAO-CALL-2026-08-04.md-99-**D-10 · O nó do curso gravado, na palavra dela.**
```

**`DESTILACAO-CALL-2026-08-04.md:198`**

```
.\DESTILACAO-CALL-2026-08-04.md-198-
.\DESTILACAO-CALL-2026-08-04.md-199----
.\DESTILACAO-CALL-2026-08-04.md-200-
.\DESTILACAO-CALL-2026-08-04.md:201:## §7 · ARQUITETURA DE INFORMAÇÃO E ATIVOS
.\DESTILACAO-CALL-2026-08-04.md-202-
.\DESTILACAO-CALL-2026-08-04.md-203-**D-25 · ⭐ O formulário HTML foi criado POR ELA, com Claude — fecha a dúvida aberta em 16/08.**
.\DESTILACAO-CALL-2026-08-04.md-204-> *"Eu tenho aquele formulário. Eu até criei ele. No[?] pedi o **Claude** para fazer ele pra mim hoje. Ele colocou no Html. E aí? Eu consigo te mandar."* `[00:34:22]`
```

**`DESTILACAO-CALL-2026-08-04.md:223`**

```
.\DESTILACAO-CALL-2026-08-04.md-223-> *"**o que você fornece nitidamente são parâmetros.** Para o líder saber qual é o ponto de vulnerabilidade. Como que você mostra sua ferida ali? A carne aberta. Sem parecer frágil... Então isso tudo são parâmetros."* `[00:20:50]`
.\DESTILACAO-CALL-2026-08-04.md-224-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-04.md-225-
.\DESTILACAO-CALL-2026-08-04.md:226:**M-03 · ⭐ Transformação de COMPREENSÃO — destrava o nó do produto inicial.**
.\DESTILACAO-CALL-2026-08-04.md:227:> *"o foco de algo inicial é **o entendimento** sobre aquilo. Não exatamente a transformação já geral. Porque a transformação requer tempo. Requer treinamento. Requer refinamento de parâmetros... **a transformação de entendimento que a pessoa tem sobre aquele problema** que ela tem ali que você resolve."* `[00:26:15]`
.\DESTILACAO-CALL-2026-08-04.md-228-> *"quando a gente reduz, reduz, reduz... **tem até um certo ponto para reduzir. De simplicidade, porque não pode passar do ponto que aquilo se torna simplório.** Eu acredito que o que pode ter travado é você não querer que se torne algo simplório."* `[00:26:15]`
.\DESTILACAO-CALL-2026-08-04.md-229-**Consequência:** é a mesma tese da Parte 3 do `KIT-CONVERSAO-E-TESE.md` ("os quatro passos são a porta, não a investigação"), dita de outro ângulo. **Ela não respondeu sim nem não** — ver §11 R-04.
.\DESTILACAO-CALL-2026-08-04.md-230-
```

**`DESTILACAO-CALL-2026-08-04.md:263`**

```
.\DESTILACAO-CALL-2026-08-04.md-263-
.\DESTILACAO-CALL-2026-08-04.md-264----
.\DESTILACAO-CALL-2026-08-04.md-265-
.\DESTILACAO-CALL-2026-08-04.md:266:## §10 · O QUE NÃO FOI DITO — a ausência é informação
.\DESTILACAO-CALL-2026-08-04.md-267-
.\DESTILACAO-CALL-2026-08-04.md-268-**Sete silêncios, e alguns pesam mais que o que foi dito:**
.\DESTILACAO-CALL-2026-08-04.md-269-
```

**`DESTILACAO-CALL-2026-08-18.md:199`**

```
.\DESTILACAO-CALL-2026-08-18.md-199-
.\DESTILACAO-CALL-2026-08-18.md-200-# BLOCO B — DÉBORA: EXPERIÊNCIA E LEITURA EMPRESARIAL
.\DESTILACAO-CALL-2026-08-18.md-201-
.\DESTILACAO-CALL-2026-08-18.md:202:### B-01 · Formação de origem
.\DESTILACAO-CALL-2026-08-18.md-203-
.\DESTILACAO-CALL-2026-08-18.md-204-> ✅ [10:17:49] *"eu fui Head de RH."* `[transcrição incerta: "Red de Rh"]`
.\DESTILACAO-CALL-2026-08-18.md:205:> ✅ [10:14:22] *"o estudante já era química, né? Então a destilação era um processo que a gente fazia muito."* 🟡 **formação em química**.
.\DESTILACAO-CALL-2026-08-18.md-206-
.\DESTILACAO-CALL-2026-08-18.md-207-### B-02 · ⭐ A proposta de valor, na frase dela
.\DESTILACAO-CALL-2026-08-18.md-208-
```

**`DESTILACAO-CALL-2026-08-18.md:262`**

```
.\DESTILACAO-CALL-2026-08-18.md-262-
.\DESTILACAO-CALL-2026-08-18.md-263-### B-11 · ⭐ Por que ela recusa o ICP confortável
.\DESTILACAO-CALL-2026-08-18.md-264-
.\DESTILACAO-CALL-2026-08-18.md:265:> ✅ [10:28:38] *"se eu fosse totalmente assim, só o meu ICP, só o público que seria meu melhor amigo, **eu não vou fazer transformação, porque a pessoa já tem aquilo dentro dela**."*
.\DESTILACAO-CALL-2026-08-18.md-266-> ✅ [10:29:04] *"**pra eu lidar com o ego deles, eu tenho que abaixar o meu próprio ego.**"*
.\DESTILACAO-CALL-2026-08-18.md-267-> ✅ [10:29:23] *"mas eu acho que eu não vou estar fazendo o que eu vim fazer."*
.\DESTILACAO-CALL-2026-08-18.md-268-
```

**`DESTILACAO-CALL-2026-08-18.md:395`**

```
.\DESTILACAO-CALL-2026-08-18.md-395-
.\DESTILACAO-CALL-2026-08-18.md-396-### B-30 · Método autoral — a régua do inconsciente
.\DESTILACAO-CALL-2026-08-18.md-397-
.\DESTILACAO-CALL-2026-08-18.md:398:> ✅ [10:56:31] *"tinha questões antigas que eu sempre queria resolver, **mas meu inconsciente não liberava. Não tava pronto.** … Você acha que não tem uma questão? Passa um tempo trabalhando outra coisa. **De repente, o inconsciente te libera a informação que você não estava tendo.**"*
.\DESTILACAO-CALL-2026-08-18.md-399-> ✅ [10:57:02] *"**eu brinco: o quanto você é amigo do seu inconsciente.** Se você escuta o seu inconsciente e vai criando as mudanças, ele entende que ele pode te mandar mais. **Se você rejeita o seu inconsciente ou fica criando racionalização para não ver as coisas, ele para de te mandar** — ele entende que você não está recebendo."*
.\DESTILACAO-CALL-2026-08-18.md-400-
.\DESTILACAO-CALL-2026-08-18.md-401-⭐ **Vocabulário e lógica próprios. Vai íntegro para a skill de voz.**
```


## P10

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Que empresas ou equipes você já atendeu? Quantas? Posso citar o nome de alguma?"

**Palavras-chave:** empresas atendidas; equipes atendidas; líderes atendidos  
**Regex rg:** `empresas atendidas|atendi (empresas|equipes|líderes|times)|empresas (que|já) (atendi|passaram)|clientes corporativos`  
**Trechos encontrados:** 2 · exibidos: 2

**`12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:19`**

```
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-19-**O que ela já tem:**
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-20-- um **curso de Eneagrama gravado** (cerca de 7h, mais de 100 aulas, incluindo 27 vídeos de subtipos). Ela descreve quem compra como *"quem quer conhecer mais sobre pessoas e sobre o próprio modo de funcionamento — e isso resolve problemas de liderança, porque tira a pessoa da própria lente"*;
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-21-- um **teste/quiz de liderança** no site, e um sistema online com conteúdo por tipo, que gera um PDF de talentos;
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:22:- uma **"ficha de talentos"** personalizada (Eneagrama + Desenho Humano → 25 a 32 talentos da pessoa), hoje feita manualmente para clientes corporativos;
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-23-- um **segundo produto em construção**, de autoconhecimento: 17 aulas curtas para a pessoa **reconhecer os próprios talentos** usando 7 ferramentas (MBTI, Eneagrama, Desenho Humano, linha da vida, Ikigai, entre outras);
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-24-- uma **mentoria individual** (high ticket), vendida hoje só por indicação e por uma conversa de 1h30;
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-25-- **uma lista de pessoas que ela já atendeu**, e a ideia de fazer uma aula ao vivo de 3h para essa lista.
```

**`12 - Direct Response\deep-research-report - Débora 22-09-2026.md:26`**

```
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-26-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-27-**Entrada e quiz:** o B2C entra por um **teste comportamental pago**; no B2B há “análise gratuita”, com promessa de resultado em poucos minutos, e depois diagnóstico, aplicação e desenvolvimento. O número exato de perguntas, posição do e-mail e sequência integral de checkout não ficaram verificáveis nas páginas indexadas. citeturn17view1turn11search4
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-28-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md:29:**Público:** individualmente, profissionais que querem se conhecer e evoluir na carreira; corporativamente, líderes/equipes com problemas de comunicação, pressão, decisão, alinhamento e desenvolvimento. A empresa mostra clientes corporativos e apresenta mentoria de carreira e mentoria executiva na arquitetura. citeturn17view1
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-30-
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-31-**Promessa e mecanismo:** em vez de “descubra qual caixa você é”, o mecanismo é o **Teste das Cores**, traduzindo padrões comportamentais em decisões práticas. A própria explicação enfatiza combinações de perfis e contexto, e não simplesmente “uma pessoa = uma cor”. citeturn11search0turn17view1
.\12 - Direct Response\deep-research-report - Débora 22-09-2026.md-32-
```


## P11

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Teve um momento, uma pessoa ou uma conversa que fez você virar a chave sobre isso? Se não teve, tudo bem."

**Palavras-chave:** virar a chave; virada; disparou  
**Regex rg:** `virar a chave|virada|disparou|chave virou|virou a chave`  
**Trechos encontrados:** 152 · exibidos: 8

**`DESTILACAO-CALL-2026-08-17.md:192`**

```
.\DESTILACAO-CALL-2026-08-17.md-192-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-17.md-193-
.\DESTILACAO-CALL-2026-08-17.md-194-**⭐ "As pessoas me dão a mão pra eu sofrer. Mas ninguém me ajuda a sair."**
.\DESTILACAO-CALL-2026-08-17.md:195:É conflito, cena e virada numa frase, na boca do ICP. **Não existe nada equivalente nos 6 ângulos da `NARRATIVA-CENTRAL.md`.** Serve como headline, como hook de vídeo e como dobra de página. **Pedir autorização de uso antes de publicar.**
.\DESTILACAO-CALL-2026-08-17.md-196-
.\DESTILACAO-CALL-2026-08-17.md:197:**I-02 · A mesma fala valida a virada de posicionamento.**
.\DESTILACAO-CALL-2026-08-17.md-198-> *"antes, quando minha mentoria era de Rich Life... meu desafio era realmente mais pessoal. Então eu gostei que a mentoria era mais pessoal. **Mas agora eu acho que meu desafio é mais no trabalho. Então eu quero fazer a mentoria de novo.**"* `[00:52:58]`
.\DESTILACAO-CALL-2026-08-17.md-199-**A cliente que viveu o produto antigo diz, sem ser perguntada, que quer o produto novo. Isso é validação de mercado, não elogio.**
.\DESTILACAO-CALL-2026-08-17.md-200-
```

**`REGISTRO-WHATSAPP-2026-09-25.md:29`**

```
.\REGISTRO-WHATSAPP-2026-09-25.md-29-
.\REGISTRO-WHATSAPP-2026-09-25.md-30-**Era abstrata** para uma leitora que não visualiza `[16/09 10:13:21]` — e o próprio Victor sinalizou (*"espero não ter soado confuso"*). **Decidido e feito:** o PDF foi como continuação, com uma linha só. ✅ **Funcionou no que importa: ela abriu o desenho e reagiu a uma caixa dele.**
.\REGISTRO-WHATSAPP-2026-09-25.md-31-
.\REGISTRO-WHATSAPP-2026-09-25.md:32:### 2.2 ⭐ A pergunta dela, e a perspectiva do Victor que ela disparou
.\REGISTRO-WHATSAPP-2026-09-25.md-33-
.\REGISTRO-WHATSAPP-2026-09-25.md-34-**A pergunta:** *"qual teste é esse? O das histórias?"*
.\REGISTRO-WHATSAPP-2026-09-25.md-35-
```

**`DEPOIMENTOS-2026-09-15.md:47`**

```
.\DEPOIMENTOS-2026-09-15.md-47-> *"uma coisa que me ajudou muito no desafio que eu estou vivendo agora é **como me posicionar de uma forma mais tranquila**"*
.\DEPOIMENTOS-2026-09-15.md-48-> *"valorizar que **eu também tenho pontos importantes para compartilhar com o grupo de liderança**"*
.\DEPOIMENTOS-2026-09-15.md-49-
.\DEPOIMENTOS-2026-09-15.md:50:**E ela nomeia onde a virada aconteceu:** *"tanto aqui na minha teoria de grupo, mas **principalmente nos encontros individuais**"*.
.\DEPOIMENTOS-2026-09-15.md-51-
.\DEPOIMENTOS-2026-09-15.md-52-> 🔴 **Isso é dado de oferta, não só depoimento.** O encontro individual é o item que está em divergência (4 ou 5) e **o único que não escala.** Uma pessoa acabou de dizer que foi ali que mudou. **Mexer nesse número sem olhar isso é decidir no escuro.**
.\DEPOIMENTOS-2026-09-15.md-53-
```

**`DEPOIMENTOS-2026-09-15.md:138`**

```
.\DEPOIMENTOS-2026-09-15.md-138-
.\DEPOIMENTOS-2026-09-15.md-139-# PARTE 2 · O QUE OS CINCO TÊM EM COMUM
.\DEPOIMENTOS-2026-09-15.md-140-
.\DEPOIMENTOS-2026-09-15.md:141:> ⭐ **Quatro pessoas diferentes, sem combinar, descreveram a mesma virada. E não é a virada que a proposta dela vende.**
.\DEPOIMENTOS-2026-09-15.md-142-
.\DEPOIMENTOS-2026-09-15.md-143-| Quem | A frase |
.\DEPOIMENTOS-2026-09-15.md-144-|---|---|
```

**`DIARIO-DE-BORDO.md:34`**

```
.\DIARIO-DE-BORDO.md-34-
.\DIARIO-DE-BORDO.md-35-[Omitted long context line]
.\DIARIO-DE-BORDO.md-36-- **Extração:** `12 - Direct Response/EXTRACAO-CALL-30-09-VSL-E-CRIATIVOS.md` — 44 falas com ID `E30-xx`, grau e destino; mapa bloco a bloco da VSL; 10 ângulos de criativo ancorados; cruzamento com o banco de léxico (`DD-LEX-13` é o computador dito por um líder).
.\DIARIO-DE-BORDO.md:37:- **Achados:** ela desenhou sozinha o funil inteiro (`E30-21`) · fez ao vivo a demonstração que a VSL precisa (`E30-34`: pergunta de comportamento × pergunta de motivação) · *"eu era contra testes… hoje sou contra noventa e cinco"* é a virada da história · "o das histórias" = arquivos de liderança do sistema de conhecimento, como **upsell**.
.\DIARIO-DE-BORDO.md-38-- **Buraco:** nenhum caso de líder com resultado nesta call, e nenhum depoimento autorizado — bloqueia o bloco de prova.
.\DIARIO-DE-BORDO.md-39-- **Próximo:** o "cheiro da estrutura" até 01/10, antes da viagem dela (02–04/10).
.\DIARIO-DE-BORDO.md-40-
```

**`DIARIO-DE-BORDO.md:267`**

```
.\DIARIO-DE-BORDO.md-267-
.\DIARIO-DE-BORDO.md-268-[Omitted long context line]
.\DIARIO-DE-BORDO.md-269-
.\DIARIO-DE-BORDO.md:270:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-271-
.\DIARIO-DE-BORDO.md-272-> ### O tema: a pessoa não reconhecia o próprio valor, e por isso não se autorizava a ocupar espaço, cobrar nem pedir.
.\DIARIO-DE-BORDO.md-273->
```

**`DIARIO-DE-BORDO.md:674`**

```
.\DIARIO-DE-BORDO.md-674-
.\DIARIO-DE-BORDO.md-675-**⏱ O prazo que rege a semana: o pitch é quarta 19/08 às 8h, e o roteiro foi prometido para terça 18/08 às 10h.** Menos de 24 horas entre entregar e usar, para uma pessoa que declarou não estar em mentalidade de venda. **É a única coisa da conta com prazo duro; todo o resto constrói outubro.**
.\DIARIO-DE-BORDO.md-676-
.\DIARIO-DE-BORDO.md:677:**⭐ O achado de copy, e não veio de pesquisa.** A Bia, aluna atual, dita literalmente pela Débora: *"as pessoas me dão a mão pra eu sofrer. Mas ninguém me ajuda a sair."* Conflito, cena e virada numa frase, na boca do ICP. **Nenhum dos 6 ângulos da `NARRATIVA-CENTRAL` cobre isso.** A mesma fala valida a virada de posicionamento sem ter sido perguntada.
.\DIARIO-DE-BORDO.md-678-
.\DIARIO-DE-BORDO.md-679-[Omitted long context line]
.\DIARIO-DE-BORDO.md-680-
```

**`DIARIO-DE-BORDO.md:837`**

```
.\DIARIO-DE-BORDO.md-837-
.\DIARIO-DE-BORDO.md-838----
.\DIARIO-DE-BORDO.md-839-
.\DIARIO-DE-BORDO.md:840:### 2026-07-26 · Opus (Cowork, scheduled gestão) · 🟡 causa-raiz do bloqueio do dashboard MUDOU (gate de senha, não falta de browser) · 🔴 virada de preço L1→L2 entra nas 72h com a campanha parada
.\DIARIO-DE-BORDO.md-841-- Rotina agendada diária (§3 — domingo, sem ciclo de decisão §4). Abertura §1 cumprida: PROTOCOLO (relido na íntegra), PLANO-FUNIL §§4-5/9, LOG-DECISOES, últimas entradas de GESTAO-DIARIA. **100% leitura, nenhuma escrita na conta, nenhuma senha digitada.**
.\DIARIO-DE-BORDO.md-842-[Omitted long context line]
.\DIARIO-DE-BORDO.md-843-[Omitted long context line]
.\DIARIO-DE-BORDO.md:844:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-845-- **Nenhum kill/scale/verba proposto:** campanha pausada = sem sinal veiculando; §7.3 exige entrega. Nenhum anúncio bate kill-hard historicamente (maior: `raiz` R$150,17 < R$225; CTRs 3,73–7,91%). Frequência máx 1,66 — sem fadiga. Diagnóstico §7.4 segue nos passos 2-3 (página/oferta), conforme a correção do Victor em 22/07.
.\DIARIO-DE-BORDO.md-846-- **Gate de retorno segue ABERTO** e sem sinal de progresso nos arquivos autorizados desde 23/07: (1) página v4 + App Script v5 + dashboard v4 no ar; (2) teste end-to-end Lead→InitiateCheckout→Purchase no dashboard **e** no Meta Test Events; (3) montar B (~R$117/dia) como relançamento limpo.
.\DIARIO-DE-BORDO.md-847-- Registrado: `GESTAO-DIARIA.md` (entrada completa 26/07) · `LOG-DECISOES.md` (1 PROPOSTO operacional + 1 REPORTADO de calendário) · esta entrada.
```


## P12

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "O Sistema de Conhecimento já está fechado ao público, pronto para ser liberado só para quem comprar? E as histórias de líderes (O Espelho): quando saem do LinkedIn e do site?" *(a inclusão no curso é decisão nossa de 02/10; a ela se pergunta só o estado do ativo)*

**Palavras-chave:** Sistema de Conhecimento; O Espelho; LinkedIn  
**Regex rg:** `sistema de conhecimento|o espelho|espelho.{0,40}linkedin|linkedin.{0,40}espelho`  
**Trechos encontrados:** 84 · exibidos: 8

**`AUDITORIA-DESTILACAO-2026-09-16.md:136`**

```
.\AUDITORIA-DESTILACAO-2026-09-16.md-136-| ⚠️ identificação **rápida para todos** | 🔴 **a própria dona nega**: `[10:32:33]` *"pode ser mais demorado, dependendo do nível de consciência"* — e ela disse *"posso garantir que ela vai se identificar rápido"* 13 segundos antes. **A destilação pegou a contradição** |
.\AUDITORIA-DESTILACAO-2026-09-16.md-137-| maestrias / talentos | 🔴 `[10:30:46]` *"eu não gravei todas as maestrias de cada tipo"* |
.\AUDITORIA-DESTILACAO-2026-09-16.md-138-| caminhos de crescimento | 🔴 `[10:35:32]` *"também não está naquele curso"* |
.\AUDITORIA-DESTILACAO-2026-09-16.md:139:| sistema de conhecimento | 🟡 existe, **com senha global** (`C-24`) |
.\AUDITORIA-DESTILACAO-2026-09-16.md-140-| 4 encontros ao vivo | 🟡 direção aceita · **"perene" × "3 primeiros meses" se contradizem** (`C-51`) |
.\AUDITORIA-DESTILACAO-2026-09-16.md-141-
.\AUDITORIA-DESTILACAO-2026-09-16.md-142-> **Tradução: o ativo existe, a oferta ainda não.** E é exatamente isso que a síntese do Codex diz, e está certa: *"o gargalo não é convencer Débora de que VSL existe. É transformar o produto reaproveitado em oferta delimitada."*
```

**`AUDITORIA-DESTILACAO-2026-09-16.md:155`**

```
.\AUDITORIA-DESTILACAO-2026-09-16.md-155-
.\AUDITORIA-DESTILACAO-2026-09-16.md-156-## 2.7 🔴 Ação de segurança, hoje
.\AUDITORIA-DESTILACAO-2026-09-16.md-157-
.\AUDITORIA-DESTILACAO-2026-09-16.md:158:**A senha do sistema de conhecimento está em texto claro no repositório**, em `execução Codex/DESTILACAO-2026-09-16/TRANSCRIPT-LIMPO.md`. A destilação a omitiu do relatório e declarou a omissão — **conduta correta.** Mas o arquivo está lá.
.\AUDITORIA-DESTILACAO-2026-09-16.md-159-
.\AUDITORIA-DESTILACAO-2026-09-16.md-160-**Duas ações, e a primeira é dela:** trocar a senha do sistema · decidir se o `TRANSCRIPT-LIMPO.md` fica como está, é redigido, ou sai do repositório.
.\AUDITORIA-DESTILACAO-2026-09-16.md-161-
```

**`DESTILACAO-CALL-2026-08-28.md:236`**

```
.\DESTILACAO-CALL-2026-08-28.md-236-**F28-04 · O sistema de eneagrama virou arquivo `.md` — e abre uma frente de produto.**
.\DESTILACAO-CALL-2026-08-28.md-237-> *"**eu criei esse arquivo em MD.** Então, com esse arquivo numa inteligência artificial, **eu posso criar um agente, um GPT e treinar ele, porque aí eu posso oferecer uma análise de onde perfis se chocam.**"* `[10:21:10]`
.\DESTILACAO-CALL-2026-08-28.md-238-> *"um líder tipo nove que tem um liderado tipo três, e ele fala 'tá muito difícil lidar com esse liderado'. **E aí eu ilumino para eles o que um vai incomodar no outro.** Eu faço isso no meu trabalho. **Mas se eu crio essa ferramenta para a pessoa, quando ela entra no meu sistema ela potencializa o resultado dela muito mais.**"*
.\DESTILACAO-CALL-2026-08-28.md:239:⭐ E o motivo de ser dela e não de um GPT genérico: *"os conteúdos de eneagrama em geral **têm distorções e têm rótulo**. Todo o meu sistema de conhecimento, **eu pedi para tirar julgamento, tirar o rótulo**."* `[10:22:19]`
.\DESTILACAO-CALL-2026-08-28.md-240-
.\DESTILACAO-CALL-2026-08-28.md-241-**F28-05 · A régua de simplificação que passamos, e ela absorveu.**
.\DESTILACAO-CALL-2026-08-28.md-242-> Nossa: *"**custo e ganho, custo e ganho.** Quanto custa para a pessoa fazer tal ação e o que ela ganha em troca."* `[10:39:41]`
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:29`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-29-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-30-A reunião não confirmou o plano anterior tal como apresentado. Houve três mudanças materiais:
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-31-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:32:1. **Produto:** de criar um curso novo a partir da mentoria para testar a VSL do curso de Eneagrama já existente, associado ao sistema de conhecimento e a quatro encontros ao vivo como bônus inicial.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-33-2. **Sequência:** testar antes, com novo calendário a ser combinado; LinkedIn → consultoria gratuita → mentoria individual continua em paralelo. Débora prefere desenvolver B2B com grupos já formados, não forçar turma aberta sem demanda.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-34-3. **Comercial nosso:** proposta de quatro meses a R$ 2 mil apresentada, mas decisão adiada pela cliente. Não houve contratação, pagamento nem compromisso com 18/05/2027.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-35-
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:61`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-61-| C-15 | A lente dela é compreender, não rotular. | Débora [10:27:35]: “Porque se você dá o eneagrama na perspectiva de rótulo, o que eu faço com o julgamento, eu aumento o julgamento. Eu coloco você numa caixinha.” | Regra de congruência para copy e conteúdo: evitar determinismo e estereótipos como promessa. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-62-| C-16 | Ela trabalha interpretação da história de formação, não só comportamento. | Débora [10:27:56]: “Eu não mostro só a personalidade. Eu mostro a criança daquela personalidade. E o que essa criança desenvolveu para sobreviver.” | Registrar como explicação do método dela, sem transformar em diagnóstico clínico ou causalidade demonstrada. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-63-| C-17 | Maestrias/talentos não estão integralmente gravados no curso atual. | Débora [10:30:46]: “Mas no meu curso do enneagrama hoje, eu não posso falar que você vai sair com isso? Porque eu não gravei todas as maestrias de cada tipo.” | Proibição factual de vender essa entrega como componente já existente no vídeo. Pode haver complemento no sistema, a especificar. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:64:[Omitted long matching line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-65-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-66-| C-20 | Teste externo e entrevista são possibilidades de apoio à identificação. | Débora [10:33:34]: “mas também tem a entrevista que eu falei que eu podia fazer. E tem o teste. Acho que é só deixar o teste lá para a pessoa.” | Não incluir entrevista individual, licença do teste ou pagamento do teste no pacote sem acordo. “Urânio/Duran” são grafias incertas na fonte. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-67-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:68:| C-22 | Sistema de conhecimento entra como entregável adicional. | Débora [11:02:58]: “Esse sistema de conhecimento, que seria muito interessante a pessoa ter acesso a esse sistema de conhecimento.”; Victor [11:03:08]: “Sim, ele entra como entregável a mais.” | Incorporar ao desenho da oferta, condicionado a acesso funcional e inventário do que realmente será liberado. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-69-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-70-| C-24 | Acesso atual é senha global, não individual. | Débora [11:03:12]: “Só que eu não consigo colocar a senha por usuário.”; [11:03:20]: “Só tem uma senha global.” | Pendência de segurança e gestão de acesso. A existência de senha não comprova proteção no servidor. Senha omitida deste relatório. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-71-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-72-### Composição resultante, sem extrapolar o aceite
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-73-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-74-- **Base escolhida:** curso de Eneagrama existente.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:75:- **Complemento aceito em direção:** sistema de conhecimento; acesso e limites ainda pendentes.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-76-- **Bônus inicial discutido e retomado:** quatro encontros ao vivo por comprador elegível; regulamento não definido.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-77-- **Continuidade possível:** comunidade paga, depois de experimentar os encontros; R$ 150/mês foi exemplo.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-78-- **Mentoria:** seleção por call mantida; não se torna compra automática porque existe VSL.
```

**`execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md:35`**

```
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-35-
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-36-## 4. Contexto e produto — atualização candidata
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-37-
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md:38:- Separar três superfícies: curso gravado, sistema de conhecimento e encontros.
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-39-- Curso não promete identificação rápida para todos: a própria cliente relata dificuldades e variação.
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-40-- Sistema reúne recursos de aplicação, mas a entrega exata ao comprador requer inventário.
.\execução Codex\DESTILACAO-2026-09-16\PROPOSTA-DE-PROPAGACAO.md-41-- Quatro encontros são bônus de campanha inicial; não confundir com assinatura futura.
```

**`execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:133`**

```
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-133-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-134-**O que ainda não fechou:** acesso por um mês versus alguns meses; quantidade garantida de encontros; duração das sessões; limite de perguntas; gravações; prazo de resposta; ferramenta e eventual mensalidade posterior. A nossa frase “por tempo indefinido, só que limitado” não é condição comercial utilizável.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-135-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:136:Sistema de conhecimento, teste opcional, cupom de trinta dias, comunidade e mentoria aparecem como caminhos de upsell. R$50 é cenário de custo, não preço. B2B é possibilidade defendida por nós; ela inicialmente diz não enxergar a ponte. Nenhuma taxa ou projeção foi validada.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-137-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-138-Reativação: convidar alunos antigos para um período inicial de encontros foi ideia acolhida. Ela cita participantes conhecidos, compradores que não conhece e pessoas com acesso gratuito. Antes de qualquer envio, conferir base, origem e condição de acesso. “Uns vinte” não representa vinte leads ativos ou oportunidades qualificadas.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-139-
```

**`execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:167`**

```
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-167-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-168-**Acordo explícito:** começar pela estrutura da VSL e enviá-la para teste; construir quiz de topo; trabalhar projeto do teste sem data prometida. **Direção expressa pela cliente:** líderes como alvo; curso ensina perspectivas, não técnica pronta de conversação ou alocação automática de pessoas.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-169-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:170:[Omitted long matching line]
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-171-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-172-O projeto de teste próprio foi primeiro considerado trabalhoso, depois reaberto. Não dizer que foi definitivamente recusado. Quiz gratuito frustrante também não foi rejeição a todo quiz: a crítica dela era discrepância entre promessa e resultado.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-173-
```


## P13

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Quais aulas entram no módulo de aplicação, e ele fica pronto até a abertura das vendas ou depois? Se for depois, em que data?"

**Palavras-chave:** módulo de aplicação; aplicação; módulo  
**Regex rg:** `módulo de aplicação|módulo só de aplicação`  
**Trechos encontrados:** 21 · exibidos: 8

**`AUDITORIA-DESTILACAO-2026-09-30.md:42`**

```
.\AUDITORIA-DESTILACAO-2026-09-30.md-42-
.\AUDITORIA-DESTILACAO-2026-09-30.md-43-> **É o princípio 8 (25/09) dito por ela, cinco dias depois, sem ter visto a regra.** A promessa da VSL ganha o seu teto: **"o primeiro passo"** — conhecer como as pessoas funcionam —, não a solução do time. **Promover como evidência `D` do princípio 8**, e usar a frase de `[14:25:15]` como base do rascunho de promessa.
.\AUDITORIA-DESTILACAO-2026-09-30.md-44-
.\AUDITORIA-DESTILACAO-2026-09-30.md:45:### 3.3 🔴 O módulo de aplicação deixou de ser certeza — e a nossa resposta minimizou
.\AUDITORIA-DESTILACAO-2026-09-30.md-46-
.\AUDITORIA-DESTILACAO-2026-09-30.md-47-- *"Eu não sei se o meu método tá papum para a pessoa entregar no curso… tive que fazer de forma muito artesanal na mentoria"* `[13:36:50]`
.\AUDITORIA-DESTILACAO-2026-09-30.md-48-- *"Não é só Eneagrama. Eu acho que só Eneagrama não ficou bom ainda."* `[14:12:01]` → nós: *"Só precisa ser adicionado a uma aula de advertência."* `[14:12:11]`
.\AUDITORIA-DESTILACAO-2026-09-30.md-49-
.\AUDITORIA-DESTILACAO-2026-09-30.md:50:**A destilação marcou o L-04 corretamente.** O que falta é a consequência: o encaixe de 25/09 colocou o módulo de aplicação como **o método que a VSL vende**. **Ela está dizendo que não sabe se consegue entregar esse método num curso.** É lacuna de **fato** (o que o curso entrega) — **pergunta obrigatória, e ela é dela.** Advertência não fecha lacuna de entrega.
.\AUDITORIA-DESTILACAO-2026-09-30.md-51-
.\AUDITORIA-DESTILACAO-2026-09-30.md:52:> **Decisão recomendada:** a estrutura da VSL **promete só o que o curso de Eneagrama já entrega** (conhecer como as pessoas funcionam — 3.2) e trata o módulo de aplicação como **o que ela está construindo**, sem vendê-lo como método fechado. **A pergunta de fato, para a conferência da estrutura:** *"o que um aluno consegue fazer ao terminar o curso, que hoje não consegue?"*
.\AUDITORIA-DESTILACAO-2026-09-30.md-53-
.\AUDITORIA-DESTILACAO-2026-09-30.md-54----
.\AUDITORIA-DESTILACAO-2026-09-30.md-55-
```

**`REGISTRO-WHATSAPP-2026-10-07.md:14`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-14-[Omitted long context line]
.\REGISTRO-WHATSAPP-2026-10-07.md-15-| 2 | depoimento autorizado | *"Jacque e Bia topam"* | ✅ duas pessoas — falta o depoimento em si |
.\REGISTRO-WHATSAPP-2026-10-07.md-16-| 3 | data da turma fundadora | *"Me ajuda a escolher?"* → Victor propõe meados de dezembro ou janeiro (14:12) → **ela: *"Pode ser meados de dezembro"*** → Victor: *"Quarta 16"* | ✅ **quarta, 16/12/2026** · 🔴 horário aberto: *"Quarta à noite tenho aula.."*, *"to pensando"*, *"sábado preciso da agenda de rally de Danilo rsrs"* (14:23–14:24) |
.\REGISTRO-WHATSAPP-2026-10-07.md:17:| 4 | conteúdo do módulo de aplicação | *"Não sei..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-18-| 5 | histórias reais de líder | *"Preciso pensar..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-19-[Omitted long context line]
.\REGISTRO-WHATSAPP-2026-10-07.md-20-
```

**`REGISTRO-WHATSAPP-2026-10-07.md:73`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-73-|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md-74-| horário da call de 16/12 (ela tem aula quarta à noite) | Victor ↔ Débora |
.\REGISTRO-WHATSAPP-2026-10-07.md-75-| colher os depoimentos de Jacque e Bia (pergunta-guia: *o que mudou na forma como você lidera depois de entender o seu tipo e o das pessoas?*) | Victor |
.\REGISTRO-WHATSAPP-2026-10-07.md:76:| módulo de aplicação e histórias reais — **não cobrar agora**; propor a ela um esqueleto pronto do módulo (REGRA Nº 0: a estrutura é nossa) | Victor / CEO |
.\REGISTRO-WHATSAPP-2026-10-07.md-77-| testar o link da bio dela e responder sobre o formulário | Victor |
.\REGISTRO-WHATSAPP-2026-10-07.md-78-| aplicar a credencial e a data no briefing da VSL e no quiz | CEO |
```

**`DIARIO-DE-BORDO.md:28`**

```
.\DIARIO-DE-BORDO.md-28-- **Feito:** destilação completa de R1 por elemento (36, vocabulário de 35 rótulos) e mapeamento um a um para a Débora, com dose ±15%, fonte e estado. `12 - Direct Response/ESTRUTURA-VSL-2026-09-30.md`.
.\DIARIO-DE-BORDO.md-29-- **Erro nosso corrigido:** a estrutura de 25/09 misturava R1, R3 e R2. Proibido pelo método de destilação. A §2 da lateralização foi marcada como substituída.
.\DIARIO-DE-BORDO.md-30-- **Achado:** o slot da analogia de R1 (a loja, logo após nomear o método) é o lugar exato do computador.
.\DIARIO-DE-BORDO.md:31:- **Bloqueia o roteiro:** módulo de aplicação, credenciais, depoimento autorizado, condições dos encontros, valor da mentoria, nome/apelido, ok do preço. P4 passa quando a lista da oferta da §3 for aprovada.
.\DIARIO-DE-BORDO.md-32-
.\DIARIO-DE-BORDO.md-33-### 2026-09-30 · Opus (Cowork, CEO) · ⭐ **call de 30/09: auditoria da destilação do Codex + extração para VSL e criativos**
.\DIARIO-DE-BORDO.md-34-
.\DIARIO-DE-BORDO.md:35:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-36-- **Extração:** `12 - Direct Response/EXTRACAO-CALL-30-09-VSL-E-CRIATIVOS.md` — 44 falas com ID `E30-xx`, grau e destino; mapa bloco a bloco da VSL; 10 ângulos de criativo ancorados; cruzamento com o banco de léxico (`DD-LEX-13` é o computador dito por um líder).
.\DIARIO-DE-BORDO.md-37-- **Achados:** ela desenhou sozinha o funil inteiro (`E30-21`) · fez ao vivo a demonstração que a VSL precisa (`E30-34`: pergunta de comportamento × pergunta de motivação) · *"eu era contra testes… hoje sou contra noventa e cinco"* é a virada da história · "o das histórias" = arquivos de liderança do sistema de conhecimento, como **upsell**.
.\DIARIO-DE-BORDO.md-38-- **Buraco:** nenhum caso de líder com resultado nesta call, e nenhum depoimento autorizado — bloqueia o bloco de prova.
```

**`DIARIO-DE-BORDO.md:50`**

```
.\DIARIO-DE-BORDO.md-50-
.\DIARIO-DE-BORDO.md-51-- **Decisões do Victor:** dois funis (quiz → VSL e VSL direto) · biblioteca de anúncios é régua, não regra · **não se segura a gravação dela — direciona-se** (princípio 7 do `CLAUDE.md` da conta).
.\DIARIO-DE-BORDO.md-52-[Omitted long context line]
.\DIARIO-DE-BORDO.md:53:- **O achado central:** o módulo de aplicação que ela quer acrescentar ao curso de Eneagrama **é o método que a VSL vende**; o curso novo (Reconhecer a sua Maestria) é a **onda 2** com porta própria.
.\DIARIO-DE-BORDO.md-54-- **Conferido no PDF:** zero ocorrência de nome de terceiro, "Maestria Natural", "curso gravado", "prazo", "urgente".
.\DIARIO-DE-BORDO.md-55-- **Próximo:** Victor envia o PDF · call com ela (7 perguntas) · destilação completa de R1 antes do roteiro.
.\DIARIO-DE-BORDO.md-56-
```

**`DIARIO-DE-BORDO.md:1540`**

```
.\DIARIO-DE-BORDO.md-1540-
.\DIARIO-DE-BORDO.md-1541-Quiz no ar e pacote enviado (04/10). Ela respondeu os fatos (06/10), recusou a permuta por aperto financeiro, aceitou a turma fundadora em 16/12 e rodou um anúncio próprio com clique a R$ 0,13 e conversão zero (07/10). Registro completo: `REGISTRO-WHATSAPP-2026-10-07.md`. Propagado para `DECISOES`, `STATUS` e `vsl/BRIEFING-VSL.md` (D03, D09, D31).
.\DIARIO-DE-BORDO.md-1542-
.\DIARIO-DE-BORDO.md:1543:**Próximo passo:** horário de 16/12, colher depoimentos de Jacque e Bia, propor esqueleto do módulo de aplicação. **Dono:** Victor.
.\DIARIO-DE-BORDO.md-1544-
.\DIARIO-DE-BORDO.md-1545-### 2026-10-08 11h45 · Claude (Cowork, papel CEO) · correção de carga de método da conta
.\DIARIO-DE-BORDO.md-1546-[Omitted long context line]
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:111`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-111-| D15 | `mecanismo` | 34 | a tese em uma frase: em vez de levar a pessoa pelo seu caminho, ajudá-la a achar o dela | `E30-14` | 30–40 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-112-| D16 | ⭐ `ponto-lógico` (analogia) | 134 | ⭐ **o computador** — mesmos quinhentos arquivos, cada um organizou de um jeito | `E30-20` | 115–155 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-113-| D17 ⟲ | `reason-why` | 113 | o comportamento você vê; **o que move a pessoa**, não — e quem lê o que move para de julgar (*"motivação"* é léxico morto) | `E30-25` · `[16/09 10:27:35]` | 95–130 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:114:| D18 ⟲ | `objeção` | 143 | ~~*"já fiz teste"*~~ → *"é colocar gente em caixinha?"* (não — *"seria reducionista"*) · *"é teórico, como uso na segunda?"* (o módulo de aplicação) | `E30-19` · `E30-24` | 120–165 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-115-| D19 | `ponto-lógico` · passo 1 | 126 | **conhecer as maneiras de funcionar** | `E30-11` | 105–145 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-116-| D20 ⟲ | `ponto-lógico` · passo 2 | 69 | ~~ler a motivação; a pergunta dos dezessete anos~~ → **ler o que move a pessoa** (o medo, a visão de mundo, o que ela protege) | `E30-25` · `E30-26` | 60–80 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-117-| D21 | `ponto-lógico` · passo 3 | 112 | **escutar pelo computador do outro** — escuta em outro nível | `E30-13` | 95–130 | 🟡 |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-118-| D22 ⟲ | `ponto-lógico` · passo 4 | 173 | ~~direcionar pelo caminho dele~~ → **direcionar cada um para o resultado que você pediu** — a direção e o método são do líder; muda como ele comunica | `E30-14` · `E30-15` | 145–200 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-119-
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:120:[Omitted long matching line]
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-121-
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-122-### BLOCO 4 · CONSTRUÇÃO — 255 a 345 palavras · ~8% · até ~13:00
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-123-
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:134`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-134-| # | Elemento | R1 | O que entra | Fonte | Dose | Estado |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-135-|---|---|---:|---|---|---:|:---:|
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-136-| D26 | `oferta` | 72 | o produto, nomeado | — | 60–85 | 🔴 nome (não pode ser "Maestria Natural") |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:137:| D27 ⟲ | `descrição` | 347 | **a pilha done-for-you** (`vsl/BRIEFING-VSL.md` §6): curso · módulo de aplicação · O Espelho · Sistema de Conhecimento · Luz e Sombra · liderança pela raiz | `DECISOES` 02/10 | 295–400 | 🟡 módulo a gravar |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-138-| D28 ⟲ | `bônus` | 188 | **encontros a cada quinze dias** — tirar dúvida, mandar pergunta antes, resposta em vídeo ou áudio · **podem sair a qualquer momento** | `[30/09 14:44:33]` · `DECISOES` 02/10 | 160–215 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-139-| D29 | `ancoragem` | 244 | **a mentoria dela** como valor de referência + por que este preço (o legado, `E30-35`) | — | 205–280 | 🔴 valor da mentoria |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-140-| D30 ⟲ | `preço` + `garantia` | 82 | **R$ 297 ou 12×** + garantia de 7 dias | `DECISOES` 02/10 | 70–95 (+40–60) | ✅ |
```


## P14

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "O que da mentoria em grupo de R$ 4.000 o aluno do curso também recebe? Se for nada, me diz que é nada."

**Palavras-chave:** mentoria em grupo; 4.000; mentoria  
**Regex rg:** `mentoria em grupo|mentoria.{0,40}4\.?000|4\.?000.{0,40}mentoria`  
**Trechos encontrados:** 57 · exibidos: 8

**`DESTILACAO-CALL-2026-08-18.md:308`**

```
.\DESTILACAO-CALL-2026-08-18.md-308-|---|---|---|
.\DESTILACAO-CALL-2026-08-18.md-309-| Mentoria individual | **R$ 6.000 / 12 encontros = R$ 500 por encontro** | [10:34:40] |
.\DESTILACAO-CALL-2026-08-18.md-310-| Continuidade para quem já é do grupo | **R$ 350 por encontro** | [10:05:20] |
.\DESTILACAO-CALL-2026-08-18.md:311:| Nova mentoria (pré-venda) | **R$ 4.000** — 16 encontros em grupo + 4 individuais | [10:34:49] |
.\DESTILACAO-CALL-2026-08-18.md-312-
.\DESTILACAO-CALL-2026-08-18.md-313-> ✅ [10:35:09] *"se eu voltar as quatro individuais, já daria dois mil. Aí fica dois. Então continuaria esse preço dos quinhentos, e aí sobra dois mil dividido por dezesseis de grupo: **cento e vinte e cinco reais o encontro do grupo. E quinhentos o encontro individual.** Claro que não precisa ser exatamente isso, só estou vendo se está equilibrado."*
.\DESTILACAO-CALL-2026-08-18.md-314-> ✅ [10:36:11] *"na verdade seria os dois por 6k inicialmente, só que a gente tá dando desconto de quatro."*
```

**`DESTILACAO-CALL-2026-08-17.md:39`**

```
.\DESTILACAO-CALL-2026-08-17.md-39-
.\DESTILACAO-CALL-2026-08-17.md-40-| Produto | Duração | Formato | Preço |
.\DESTILACAO-CALL-2026-08-17.md-41-|---|---|---|---|
.\DESTILACAO-CALL-2026-08-17.md:42:| **Mentoria em grupo** | 4 meses | 16 encontros de grupo + 4 a 5 individuais | **R$ 6.000** cheio · **R$ 4.000 pré-venda** |
.\DESTILACAO-CALL-2026-08-17.md-43-| **Mentoria individual** | 4 meses | 12 encontros individuais (3/mês) | **R$ 6.000** |
.\DESTILACAO-CALL-2026-08-17.md-44-| **Condição para os 4 mentorados atuais** | 4 meses | mesmo formato do grupo | **R$ 3.000 (50% de desconto)** |
.\DESTILACAO-CALL-2026-08-17.md-45-
```

**`execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:2641`**

```
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2641-## 10:19:45 — Debora Maciel
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2642-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2643-[10:19:45 → 10:19:52] A mentoria para mim. Eu estava pensando na mentoria individual, que é uma coisa totalmente personalizada. Então eu não preciso ter método.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:2644:[10:19:52 → 10:20:02] Eu estava indo para o caminho exatamente oposto disso. Que é, tipo, não fazer meta da mentoria em grupo, ir para mentoria individual e focar em empresas.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2645-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2646-## 10:19:53 — Continuum AI Systems
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-2647-
```

**`INVENTARIO-PRODUTO.md:81`**

```
.\INVENTARIO-PRODUTO.md-81-
.\INVENTARIO-PRODUTO.md-82-> 🟡 **Proposta nossa, pendente de confirmação dela.** Depois de confirmada, **esta tabela substitui todas as outras** e toda peça deriva daqui.
.\INVENTARIO-PRODUTO.md-83-
.\INVENTARIO-PRODUTO.md:84:## Mentoria em grupo · Liderança na Raiz · R$ 6.000
.\INVENTARIO-PRODUTO.md-85-
.\INVENTARIO-PRODUTO.md-86-| | O que | Quantidade | Estado |
.\INVENTARIO-PRODUTO.md-87-|---|---|---|---|
```

**`04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md:7`**

```
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-7-
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-8-## 0. Contexto estratégico (define a modulação do método)
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-9-
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md:10:- **Produto:** curso gravado, 10 módulos, 92 aulas (~12h). Identificação de tipo + subtipo, meditações por tipo, comparações, arrependimentos, próximos passos. Material original da mentoria de R$ 4.000.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-11-- **Papel da página (análise §6):** (a) fixar o preço de tabela **R$ 297** que torna o bump R$ 57 uma âncora honesta; (b) destino do resgate da obrigado-page e do e-mail D+1; (c) ativo perene (bio Instagram, orgânico) que vende fora do lançamento; (d) dá ao bump um checkout avulso.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-12-- **Promessa do curso = identificação/autoconhecimento.** NÃO eficiência/conflitos (isso é o workshop). Não inflar.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-13-- **Preço:** R$ 297 (tabela) → **R$ 57** (mesma oferta do bump; a página não fura o preço do bump).
```

**`04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md:110`**

```
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-110-Quem conduz: Débora Delgado.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-111-[foto real, olhar apontando para o texto/CTA]
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-112-2 linhas de credencial concreta (anos no caminho do autoconhecimento, pessoas acompanhadas, formação). 1 linha da razão pessoal.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md:113:Procedência: material originado da mentoria (R$ 4.000), disponível pela primeira vez fora dela.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-114-```
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-115-> Pendente: credenciais exatas + foto (Débora/Victor). Não inventar número.
.\04 - web design\PLANO-PAGINA-CURSO-ENEAGRAMA.md-116-
```

**`09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md:9`**

```
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-9-
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-10-**Posicionamento consolidado.** A comunicação inteira parte de uma decisão que tomamos juntos: seu público **já lidera bem**. Nenhuma peça trata o líder como quebrado ou perdido; a promessa é ir **do bom ao pleno**, completar, não consertar. Isso mudou o título da página, o tom dos anúncios e o ângulo dos criativos.
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-11-
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md:12:**Oferta canônica travada.** Nome confirmado: **Seu Eixo**. Workshop online de 3 dias, turmas de ~20 pessoas (14-15/08 e 19-21/08), preço em lotes por data (R$ 97 → 197 → 257), mentoria em grupo (R$ 4.000/3 meses, 10 vagas) apresentada dentro do workshop. Tudo isso vive em um documento único de oferta: qualquer material que divergir dele é corrigido, nunca o contrário.
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-13-
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-14-[Omitted long context line]
.\09 - operação\RELATORIO-LANCAMENTO-2026-07-08.md-15-
```

**`10 - Registros de análises\analise.curso-eneagrama-no-funil.md:29`**

```
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-29-| Mód. 9 | O maior arrependimento de cada tipo | Módulo emocional — gatilho honesto de urgência ("queria ter conhecido antes") |
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-30-| Mód. 10 | Próximos passos: auto-observação, asas/flechas, carreira, relacionamentos, instintos | Ponte natural para workshop e mentoria |
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-31-
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md:32:**Valor real:** é um curso completo e autossuficiente de identificação de tipo + subtipo, com voz calorosa e didática da Débora. Cursos equivalentes de eneagrama no mercado BR operam na faixa de R$ 197–997. E o fato mais valioso: **foi gravado como aula da mentoria — quem assistiu até hoje pagou R$ 4.000.** Essa é a única âncora 100% honesta disponível, e é forte.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-33-
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-34-**Limitações a respeitar na copy:** não certifica, não é formação profissional, e a promessa dele é autoconhecimento/identificação — **não** eficiência ou resolução de conflitos. A ponte com a promessa do workshop precisa ser construída (ver §5), nunca prometida como entrega do curso.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-35-
```


## P15

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Os encontros vão ser em que dia da semana e horário, começando na quarta, 16/12? Ficam gravados para quem não pôde ir?"

**Palavras-chave:** encontros; horário; quarta; 16/12; gravação  
**Regex rg:** `encontros.{0,60}(horário|quarta|gravad|grava)|16/12|dezesseis de dezembro|quarta-feira`  
**Trechos encontrados:** 13 · exibidos: 8

**`DESTILACAO-CALL-2026-08-17.md:343`**

```
.\DESTILACAO-CALL-2026-08-17.md-343-
.\DESTILACAO-CALL-2026-08-17.md-344-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-17.md-345-
.\DESTILACAO-CALL-2026-08-17.md:346:**A régua da semana:** entregar o roteiro de encerramento antes de quarta é a única coisa com prazo duro. **Tudo o mais nesta destilação constrói outubro; o roteiro constrói quarta-feira.**
.\DESTILACAO-CALL-2026-08-17.md-347-
.\DESTILACAO-CALL-2026-08-17.md-348----
.\DESTILACAO-CALL-2026-08-17.md-349-
```

**`execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:131`**

```
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-131-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-132-Encontros a cada quinze dias com compradores recebem acolhimento explícito. Débora propõe dúvidas antecipadas, possibilidade de ausência e resposta por vídeo/áudio; WhatsApp é cogitado. Ela associa esse contato a conhecer demandas e desenvolver novas entregas.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-133-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:134:**O que ainda não fechou:** acesso por um mês versus alguns meses; quantidade garantida de encontros; duração das sessões; limite de perguntas; gravações; prazo de resposta; ferramenta e eventual mensalidade posterior. A nossa frase “por tempo indefinido, só que limitado” não é condição comercial utilizável.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-135-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-136-Sistema de conhecimento, teste opcional, cupom de trinta dias, comunidade e mentoria aparecem como caminhos de upsell. R$50 é cenário de custo, não preço. B2B é possibilidade defendida por nós; ela inicialmente diz não enxergar a ponte. Nenhuma taxa ou projeção foi validada.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-137-
```

**`REGISTRO-WHATSAPP-2026-10-07.md:13`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-13-|---:|---|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md-14-[Omitted long context line]
.\REGISTRO-WHATSAPP-2026-10-07.md-15-| 2 | depoimento autorizado | *"Jacque e Bia topam"* | ✅ duas pessoas — falta o depoimento em si |
.\REGISTRO-WHATSAPP-2026-10-07.md:16:| 3 | data da turma fundadora | *"Me ajuda a escolher?"* → Victor propõe meados de dezembro ou janeiro (14:12) → **ela: *"Pode ser meados de dezembro"*** → Victor: *"Quarta 16"* | ✅ **quarta, 16/12/2026** · 🔴 horário aberto: *"Quarta à noite tenho aula.."*, *"to pensando"*, *"sábado preciso da agenda de rally de Danilo rsrs"* (14:23–14:24) |
.\REGISTRO-WHATSAPP-2026-10-07.md-17-| 4 | conteúdo do módulo de aplicação | *"Não sei..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-18-| 5 | histórias reais de líder | *"Preciso pensar..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-19-[Omitted long context line]
```

**`REGISTRO-WHATSAPP-2026-10-07.md:45`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-45-
.\REGISTRO-WHATSAPP-2026-10-07.md-46-| Decisão | Por quê |
.\REGISTRO-WHATSAPP-2026-10-07.md-47-|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md:48:| ✅ **Turma fundadora: quarta, 16/12/2026** · horário a definir | ela aceitou "meados de dezembro"; Victor fixou a data |
.\REGISTRO-WHATSAPP-2026-10-07.md-49-| ✅ **Credencial para a VSL e para a página final do quiz: "mais de 80 pessoas"** — nunca "mais de 100" | princípio 8 da conta: ela mesma recuou do 100. 60 + 20 + 6 = 86 é o número que ela sustenta |
.\REGISTRO-WHATSAPP-2026-10-07.md-50-| ✅ **Depoimentos: Jacque e Bia** | autorizadas; falta colher |
.\REGISTRO-WHATSAPP-2026-10-07.md-51-| 🟡 **Permuta: parada** — não se reabre agora | ela trouxe aperto financeiro real e já antecipou o custo do tráfego. Insistir quebraria a relação no momento em que ela se abre |
```

**`REGISTRO-WHATSAPP-2026-10-07.md:71`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-71-
.\REGISTRO-WHATSAPP-2026-10-07.md-72-| Passo | Dono |
.\REGISTRO-WHATSAPP-2026-10-07.md-73-|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md:74:| horário da call de 16/12 (ela tem aula quarta à noite) | Victor ↔ Débora |
.\REGISTRO-WHATSAPP-2026-10-07.md-75-| colher os depoimentos de Jacque e Bia (pergunta-guia: *o que mudou na forma como você lidera depois de entender o seu tipo e o das pessoas?*) | Victor |
.\REGISTRO-WHATSAPP-2026-10-07.md-76-| módulo de aplicação e histórias reais — **não cobrar agora**; propor a ela um esqueleto pronto do módulo (REGRA Nº 0: a estrutura é nossa) | Victor / CEO |
.\REGISTRO-WHATSAPP-2026-10-07.md-77-| testar o link da bio dela e responder sobre o formulário | Victor |
```

**`DIARIO-DE-BORDO.md:526`**

```
.\DIARIO-DE-BORDO.md-526->
.\DIARIO-DE-BORDO.md-527-> 🟡 **Leitura nossa sobre a renovação:** ela não respondeu à proposta de renovação da assessoria porque, até ontem, não tinha o sim para o próprio negócio. **A janela abriu para as duas coisas ao mesmo tempo.** E o caminho é o mesmo: se ela vender nas próximas semanas, a renovação vira aritmética; cobrada antes de haver venda, é pedido de fé.
.\DIARIO-DE-BORDO.md-528-
.\DIARIO-DE-BORDO.md:529:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-530-
.\DIARIO-DE-BORDO.md-531-[Omitted long context line]
.\DIARIO-DE-BORDO.md-532-
```

**`DIARIO-DE-BORDO.md:1538`**

```
.\DIARIO-DE-BORDO.md-1538-
.\DIARIO-DE-BORDO.md-1539-## 08/10/2026 — registro de 03 a 07/10
.\DIARIO-DE-BORDO.md-1540-
.\DIARIO-DE-BORDO.md:1541:Quiz no ar e pacote enviado (04/10). Ela respondeu os fatos (06/10), recusou a permuta por aperto financeiro, aceitou a turma fundadora em 16/12 e rodou um anúncio próprio com clique a R$ 0,13 e conversão zero (07/10). Registro completo: `REGISTRO-WHATSAPP-2026-10-07.md`. Propagado para `DECISOES`, `STATUS` e `vsl/BRIEFING-VSL.md` (D03, D09, D31).
.\DIARIO-DE-BORDO.md-1542-
.\DIARIO-DE-BORDO.md:1543:**Próximo passo:** horário de 16/12, colher depoimentos de Jacque e Bia, propor esqueleto do módulo de aplicação. **Dono:** Victor.
.\DIARIO-DE-BORDO.md-1544-
.\DIARIO-DE-BORDO.md-1545-### 2026-10-08 11h45 · Claude (Cowork, papel CEO) · correção de carga de método da conta
.\DIARIO-DE-BORDO.md-1546-[Omitted long context line]
```

**`DECISOES.md:117`**

```
.\DECISOES.md-117-[Omitted long context line]
.\DECISOES.md-118-[Omitted long context line]
.\DECISOES.md-119-[Omitted long context line]
.\DECISOES.md:120:[Omitted long matching line]
.\DECISOES.md-121-[Omitted long context line]
.\DECISOES.md-122-[Omitted long context line]
.\DECISOES.md-123-[Omitted long context line]
```


## P16

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Por quanto tempo o aluno fica com acesso ao curso: 1 ano, vitalício?"

**Palavras-chave:** vitalício; acesso; 1 ano; valor diário  
**Regex rg:** `vitalício|vitalicio|acesso ao curso|um ano de acesso|1 ano de acesso|valor diário`  
**Trechos encontrados:** 18 · exibidos: 8

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:191`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-191-| Qual preço final e condição de pagamento do curso? | Débora + Victor | Os valores exemplificados não foram aprovados |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-192-| Qual reserva de mídia e teto de perda do teste? | Débora + Victor | Nenhum orçamento autorizado na call |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-193-| Qual novo dia de entrega/ativação? | Victor propõe; Débora confirma gravações | A promessa final foi replanejar, não ativar em data inventada |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:194:| Qual duração de acesso ao curso e ao sistema? | Débora + Victor | Sem isso, pacote e suporte ficam indefinidos |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-195-| Quatro encontros em qual janela, frequência e com quais regras? | Débora | Foram cogitados um mês, dois meses e campanha inicial de três meses; não são equivalentes |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-196-| Bônus é temporário ou permanente? | Débora + Victor | Declarações conflitantes em C-21/C-51 |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-197-| Há permissão pública individual para cada depoimento? | Débora | Compartilhar material privado não autoriza anúncio |
```

**`DIARIO-DE-BORDO.md:905`**

```
.\DIARIO-DE-BORDO.md-905-- Próximo passo (Victor, manual no gerenciador): finalizar `broad-br` (renomear a cópia, aplicar fix de localização §1 do guia, atribuição 7d/1d), apagar o diag5, montar os 7 anúncios pausados pelo guia, rodar conferência 🔍. Ativação segue bloqueada pelos gates humanos (A/B+verba, aprovação Débora, fix "talentos", verificação BM, SMS pessoal).
.\DIARIO-DE-BORDO.md-906-
.\DIARIO-DE-BORDO.md-907-### 2026-07-17 · Fable 5 (Cowork, executor) · EXECUÇÃO do funil do curso (4 blocos do PROMPT-EXECUCAO) · CONCLUÍDA
.\DIARIO-DE-BORDO.md:908:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-909-- Executando na ordem: Bloco A (2 obrigado curso) → B (Apps Script v5) → C (página curso) → D (dashboard v4). Regra dura em vigor: nenhum arquivo vigente alterado, tudo novo datado -2026-07-17. [entrada será fechada com o resultado]
.\DIARIO-DE-BORDO.md-910-- ✅ Bloco A: `04/obrigado/obrigado-curso-promo-2026-07-17.html` (#3, R$57) e `obrigado-curso-upsell-2026-07-17.html` (#4, R$297) criados. Base CSS das obrigado do workshop; sem grupo/resgate; selo escuro; bloco Instagram @deboradelmac; noindex; 0 travessão; copy 1:1 do ESCOPO §3/§4. Originais intactos.
.\DIARIO-DE-BORDO.md-911-[Omitted long context line]
```

**`DIARIO-DE-BORDO.md:937`**

```
.\DIARIO-DE-BORDO.md-937-- **Atualização (Victor 17/07): NÃO implementar tracking nas obrigado agora.** As 2 páginas sobem sem pixel de Purchase (segue só na PagTrust). Análise vira **backlog de implementação futura** (topo do `ANALISE-TRACKING-OBRIGADO-PURCHASE.md` + nota no PLANO-PAGINAS-OBRIGADO §4). Nada a mexer nos HTMLs.
.\DIARIO-DE-BORDO.md-938-
.\DIARIO-DE-BORDO.md-939-### 2026-07-17 · Fable 5 (Cowork) · BUILD das 2 obrigado-pages (links de grupo embutidos)
.\DIARIO-DE-BORDO.md:940:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-941-- Gate (Parte 5 aplicável): travessão=0 nos 2 (troquei os 5 comentários CSS "B1 —" por "B1:"), léxico morto=0, `noindex` presente, cada arquivo com só o link certo (0 resíduo cruzado), title por turma, CTA ≥60px na zona do polegar, grid responsivo. Sem pixel de Purchase (webhook PagTrust é a fonte — decisão do plano).
.\DIARIO-DE-BORDO.md-942-- Regra/contrato: PLANO-PAGINAS-OBRIGADO (fonte) · DIRECAO-VISUAL-V2 (4 cores, 1 clímax) · debora-voice (sem travessão) · nome "Eixo" (17/07).
.\DIARIO-DE-BORDO.md-943-- Decisões dentro da alçada: verde WhatsApp (#25a366) como única cor fora da paleta no CTA (affordance de plataforma, previsto no plano); wrap 44rem (página curta pós-compra). Nada de copy/oferta nova.
```

**`DIARIO-DE-BORDO.md:955`**

```
.\DIARIO-DE-BORDO.md-955-[Omitted long context line]
.\DIARIO-DE-BORDO.md-956-[Omitted long context line]
.\DIARIO-DE-BORDO.md-957-- Decisões dentro da alçada: método da obrigado (clara+selo escuro) e modulação da página do curso (reversíveis; Victor/Débora validam). Preço de tabela R$297 tratado como decidido (está no checkout ao vivo); se foi teste, Victor corrige.
.\DIARIO-DE-BORDO.md:958:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-959-- Próximo passo exato: aprovações da Débora + os 4 itens do Victor → executor builda as 2 obrigado-pages (constantes de grupo) e, na fase 2, a página do curso.
.\DIARIO-DE-BORDO.md-960-
.\DIARIO-DE-BORDO.md-961-### 2026-07-17 · Fable 5 (Cowork) · UNIFICAÇÃO DE REPO (04-Onboarding → 00-Local) + análise Curso Eneagrama importada
```

**`10 - Registros de análises\analise.curso-eneagrama-no-funil.md:145`**

```
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-145-1. **Distração do objetivo do lançamento.** O prêmio é encher 2 turmas e vender mentoria. Bump = horas; página = 1 sessão. Nada além disso agora.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-146-2. **Upsell pós-checkout com fricção** — sem 1-clique confirmado na PagTrust, upsell de página cheia atrasa o clique do grupo de WhatsApp. Por isso ficou de fora do desenho.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-147-3. **Purchase com bump distorce CPA/ROAS** se a matemática reversa considerar só o ticket do workshop — 1 linha de ajuste no `MATEMATICA-REVERSA-LANCAMENTO.md` e no dashboard.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md:148:4. **Entrega do acesso** — se o acesso ao curso não for imediato/automático, o argumento "assista antes do workshop" quebra. Confirmar antes de ligar.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-149-5. **Reembolso CDC 7 dias** — marginal a este preço; monitorar na PagTrust.
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-150-
.\10 - Registros de análises\analise.curso-eneagrama-no-funil.md-151----
```

**`12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:221`**

```
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-221-|---|---|
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-222-| Anúncio | **imagem** · *"Já parou para pensar que o seu temperamento pode definir muita coisa sobre você? A forma como pensa, age e até mesmo como os outros te enxergam"* · 8 ativos vistos, **o mais antigo de 20/08** (~35 dias) |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-223-| Destino | `qualcarreira.com/temperamento` — *"Descubra seu temperamento natural em 7 minutos"* · 67 questões (Eysenck) · **3 passos: questões → contexto pessoal → resultado** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:224:| O que o resultado promete | tipo · mapa de 6 dimensões · narrativa personalizada · estratégias por dimensão · acesso vitalício |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-225-| Premium | **existe** — depoimento na própria página: *"o premium vale muito pela análise de liderança"* · **preço não visto** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-226-| Portfólio | já roda um **segundo quiz** (QI) desde ~12/09 e tem vocacional e DISC no site. **A máquina é o quiz; o tema se troca** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-227-
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:143`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-143-| D33 ⟲ | `bônus` surpresa | 102 | **omitido** (não existe) | — | 0 | ❌ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-144-| D34 ⟲ | `escassez` | 41 | **omitido** (coberta em D31) | — | 0 | ❌ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-145-| D35 ⟲ | `dois-caminhos` | 96 | continuar liderando pela sua lente × entender como cada pessoa funciona | `E30-20` · `E30-13` | 80–110 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:146:| D36 | `cta` final | 82 | a chamada final, com o valor diário | — | 70–95 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-147-
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-148----
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-149-
```

**`12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:39`**

```
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-39-2. **Quem compra de fato** cada formato — cargo, momento de vida, dor, poder de compra — segundo o que os vencedores miram e mostram nos depoimentos.
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-40-3. **Promessa.** Que tipo de promessa está vendendo: resultado de liderança ("seu time", "conflitos", "comunicação"), autoconhecimento ("seus talentos", "propósito"), carreira ou relacionamentos? **Quais palavras o mercado usa?** O anúncio nomeia a ferramenta ("Eneagrama") ou só o problema?
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-41-4. **Mecanismo.** Como os vencedores explicam *por que* o método funciona, e **como o nomeiam** — sem cair em rótulo?
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:42:5. **Oferta.** Preço, o que vem no pacote, bônus, order bump, upsell, garantia, gravado × ao vivo, acesso vitalício × assinatura.
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-43-6. **Funil.** VSL × quiz/teste × webinar ou aula ao vivo × desafio × isca gratuita → e **como sobem para a mentoria high ticket (R$ 3–10 mil) e para o B2B**.
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-44-
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-45-### 3. Hipóteses para confirmar OU derrubar — derrubar vale tanto quanto confirmar
```


## P17

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Até quando você consegue sustentar os encontros a cada 15 dias sem prejuízo para você?"

**Palavras-chave:** a cada 15 dias; quinzenal; 15 em 15  
**Regex rg:** `a cada 15 dias|quinzen|15 em 15|de 15 em 15`  
**Trechos encontrados:** 20 · exibidos: 8

**`AUDITORIA-DESTILACAO-2026-09-30.md:85`**

```
.\AUDITORIA-DESTILACAO-2026-09-30.md-85-| 4 | **criar `clientes/Débora Delgado/STATUS.md`** — a destilação aponta, com razão, que ele não existe, e o roteador o exige para cliente nominal | Continuum | com a promoção |
.\AUDITORIA-DESTILACAO-2026-09-30.md-86-| 5 | propagar L-01 e L-04 para `10-skills/voz-victor.skill.md` | Continuum | com a promoção |
.\AUDITORIA-DESTILACAO-2026-09-30.md-87-
.\AUDITORIA-DESTILACAO-2026-09-30.md:88:**O que NÃO se faz agora:** o teste aprofundado · reativação da base antiga (falta conferir quem é comprador, quem ganhou acesso) · condições finais dos encontros quinzenais (duração, acesso, quantidade).
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:84`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-84-|---|---|---|---|
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-85-| C-25 | Call antes da mentoria permanece. | Débora [09:23:23]: “Eu gosto de ter call antes da pessoa entrar na mentoria como se fosse um processo seletivo. Mesmo.”; Victor [09:23:30]: “Sim.” | VSL vende o curso; não elimina qualificação para mentoria. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-86-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:87:| C-27 | Individual primeiro, grupo quando houver demanda; cadência quinzenal foi cogitada. | Débora [09:24:48]: “E aí, tendo mais demanda, eu faço grupo, mas sem precisar correr para fazer grupo”; [09:28:25]: “Uma mentoria individual faz um encontro a cada quinze dias” | Direção, não escopo final de número de sessões, duração total ou preço. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-88-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-89-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-90-[Omitted long context line]
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:196`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-196-| Bônus é temporário ou permanente? | Débora + Victor | Declarações conflitantes em C-21/C-51 |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-197-| Há permissão pública individual para cada depoimento? | Débora | Compartilhar material privado não autoriza anúncio |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-198-| Quem poderá usar o teste externo e com quais custos/licenças? | Débora + responsável pelo teste | Não incluir recurso pago/terceiro sem validar |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:199:| Qual é o escopo real da mentoria individual? | Débora | Quinzenalidade cogitada não fecha número de sessões ou duração |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-200-| Como fica a turma de outubro já planejada? | Débora + Victor | A preferência mudou; cancelamento formal não foi tratado |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-201-| Qual oferta/proposta para Kinology e Vale? | Débora + Victor | Relato do piloto não veio acompanhado de preço ou fechamento |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-202-| Quando retomar a renovação? | Victor + Débora | “Mais para frente” não é data |
```

**`DIARIO-DE-BORDO.md:149`**

```
.\DIARIO-DE-BORDO.md-149-
.\DIARIO-DE-BORDO.md-150-### 🔴 Os números de tempo, e a procedência deles
.\DIARIO-DE-BORDO.md-151-
.\DIARIO-DE-BORDO.md:152:**Saíram da estrutura que ela mesma desenhou:** `01 - contexto/Notion/Mentoria.md` linhas 1344-1370. Consultoria 1h30 x1 · onboarding 1h30 x1 · devolutiva 1h30 x1 · acompanhamento mensal 1h x1 · hotseat quinzenal 1h30 em grupo · encontro mensal 3h em grupo.
.\DIARIO-DE-BORDO.md-153-
.\DIARIO-DE-BORDO.md-154-**A aritmética que isso produz, e é ela que carrega o documento:**
.\DIARIO-DE-BORDO.md-155-
```

**`01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt:2024`**

```
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2024-Debora Maciel: Só a partir da mentoria que eu estava falando, de vender a voz que não faz sentido, mesmo que realmente não faz sentido aí o que eu posso fazer? Talvez eu vou ouvir. Na verdade, a Lete e o Davi. Eu vou ouvir.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2025-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2026-10:55:10 --> 10:55:26
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt:2027:Debora Maciel: Porque Alethe e o Davi. Eu não faço ideia do que eles estão pensando. E aí, tipo assim, Davi, pode ser, Davi, o que você acha que faz sentido? Faz sentido. Quer continuar? Quer fazer um encontro quinzenal? Porque talvez o encontro quinzenal para o Davi pode fazer sentido. Aí eu faço aquele preço proporcional.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2028-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2029-10:55:26 --> 10:55:32
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt:2030:Debora Maciel: Dos quinhentos reais, mas separado a cada quinzena e tal. Enfim.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2031-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2032-10:55:33 --> 10:55:35
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-18 09h59.txt-2033-Continuum AI Systems: Ah, entendi.
```

**`DECISOES.md:130`**

```
.\DECISOES.md-130-[Omitted long context line]
.\DECISOES.md-131-[Omitted long context line]
.\DECISOES.md-132-[Omitted long context line]
.\DECISOES.md:133:[Omitted long matching line]
.\DECISOES.md-134-[Omitted long context line]
.\DECISOES.md-135-[Omitted long context line]
.\DECISOES.md-136-[Omitted long context line]
.\DECISOES.md:137:[Omitted long matching line]
.\DECISOES.md-138-[Omitted long context line]
.\DECISOES.md-139-[Omitted long context line]
.\DECISOES.md-140-[Omitted long context line]
```

**`01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md:734`**

```
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-734-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-735-[10:54:45] Continuum AI Systems: Certinho. Fez sentido com relação àquilo que você trouxe no início.
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-736-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md:737:[Omitted long matching line]
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-738-
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-739-[10:55:33] Continuum AI Systems: Ah, entendi.
.\01 - contexto\_transcripts\TRANSCRIPT-CALL-DEBORA-18-08-2026-LIMPO.md-740-
```

**`01 - contexto\Pré-Workshop\Mesa de Criação.md:1194`**

```
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1194-                1. Mapeamento de Merecimento
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1195-                    - Onde é que está sua sabotagem
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1196-                2. Identificação de Sonhos e Destino
.\01 - contexto\Pré-Workshop\Mesa de Criação.md:1197:                3. Mentoria Quinzenais
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1198-                    - Grupo de Mulheres
.\01 - contexto\Pré-Workshop\Mesa de Criação.md:1199:                4. Aulas Quinzenais
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1200-                    - X, Y, Z
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1201-                5. Comunidade
.\01 - contexto\Pré-Workshop\Mesa de Criação.md-1202-                6. Plataforma de Aulas
```


## P18

**Pergunta (literal, JUIZ-GLOBAL §8):**

> **Decisão de estrutura (REGRA Nº 0):** "Quem entrar na turma fundadora mantém os encontros por quanto tempo?" (insumo: pergunta 17)

**Palavras-chave:** turma fundadora; fundadora; manter encontros  
**Regex rg:** `turma fundadora|fundadora`  
**Trechos encontrados:** 10 · exibidos: 8

**`REGISTRO-WHATSAPP-2026-10-07.md:13`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-13-|---:|---|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md-14-[Omitted long context line]
.\REGISTRO-WHATSAPP-2026-10-07.md-15-| 2 | depoimento autorizado | *"Jacque e Bia topam"* | ✅ duas pessoas — falta o depoimento em si |
.\REGISTRO-WHATSAPP-2026-10-07.md:16:| 3 | data da turma fundadora | *"Me ajuda a escolher?"* → Victor propõe meados de dezembro ou janeiro (14:12) → **ela: *"Pode ser meados de dezembro"*** → Victor: *"Quarta 16"* | ✅ **quarta, 16/12/2026** · 🔴 horário aberto: *"Quarta à noite tenho aula.."*, *"to pensando"*, *"sábado preciso da agenda de rally de Danilo rsrs"* (14:23–14:24) |
.\REGISTRO-WHATSAPP-2026-10-07.md-17-| 4 | conteúdo do módulo de aplicação | *"Não sei..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-18-| 5 | histórias reais de líder | *"Preciso pensar..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-19-[Omitted long context line]
```

**`REGISTRO-WHATSAPP-2026-10-07.md:45`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-45-
.\REGISTRO-WHATSAPP-2026-10-07.md-46-| Decisão | Por quê |
.\REGISTRO-WHATSAPP-2026-10-07.md-47-|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md:48:| ✅ **Turma fundadora: quarta, 16/12/2026** · horário a definir | ela aceitou "meados de dezembro"; Victor fixou a data |
.\REGISTRO-WHATSAPP-2026-10-07.md-49-| ✅ **Credencial para a VSL e para a página final do quiz: "mais de 80 pessoas"** — nunca "mais de 100" | princípio 8 da conta: ela mesma recuou do 100. 60 + 20 + 6 = 86 é o número que ela sustenta |
.\REGISTRO-WHATSAPP-2026-10-07.md-50-| ✅ **Depoimentos: Jacque e Bia** | autorizadas; falta colher |
.\REGISTRO-WHATSAPP-2026-10-07.md-51-| 🟡 **Permuta: parada** — não se reabre agora | ela trouxe aperto financeiro real e já antecipou o custo do tráfego. Insistir quebraria a relação no momento em que ela se abre |
```

**`DIARIO-DE-BORDO.md:1538`**

```
.\DIARIO-DE-BORDO.md-1538-
.\DIARIO-DE-BORDO.md-1539-## 08/10/2026 — registro de 03 a 07/10
.\DIARIO-DE-BORDO.md-1540-
.\DIARIO-DE-BORDO.md:1541:Quiz no ar e pacote enviado (04/10). Ela respondeu os fatos (06/10), recusou a permuta por aperto financeiro, aceitou a turma fundadora em 16/12 e rodou um anúncio próprio com clique a R$ 0,13 e conversão zero (07/10). Registro completo: `REGISTRO-WHATSAPP-2026-10-07.md`. Propagado para `DECISOES`, `STATUS` e `vsl/BRIEFING-VSL.md` (D03, D09, D31).
.\DIARIO-DE-BORDO.md-1542-
.\DIARIO-DE-BORDO.md-1543-**Próximo passo:** horário de 16/12, colher depoimentos de Jacque e Bia, propor esqueleto do módulo de aplicação. **Dono:** Victor.
.\DIARIO-DE-BORDO.md-1544-
```

**`DECISOES.md:126`**

```
.\DECISOES.md-126-[Omitted long context line]
.\DECISOES.md-127-[Omitted long context line]
.\DECISOES.md-128-[Omitted long context line]
.\DECISOES.md:129:[Omitted long matching line]
.\DECISOES.md-130-[Omitted long context line]
.\DECISOES.md-131-[Omitted long context line]
.\DECISOES.md-132-[Omitted long context line]
.\DECISOES.md:133:[Omitted long matching line]
.\DECISOES.md-134-[Omitted long context line]
.\DECISOES.md-135-[Omitted long context line]
.\DECISOES.md-136-[Omitted long context line]
```

**`01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md:266`**

```
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-266-- tempo até valor percebido
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-267-- potencial de renovação
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-268-- potencial de upsell
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md:269:- dependência da fundadora ou especialista
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-270-- risco de sobrecarga
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-271-
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-272-Um modelo bom aumenta receita sem destruir a operação.
```

**`01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md:319`**

```
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-319-- baixa conversão
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-320-- ticket desalinhado do esforço
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-321-- excesso de customização
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md:322:- entrega dependente demais da fundadora
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-323-- clientes fora do ICP
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-324-- alto volume de objeções recorrentes
.\01 - contexto\CONTEXTO DÉBORA\ESTRATÉGIA  MODELO DE NEGÓCIO.md-325-- promessa difícil de explicar
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:138`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-138-| D28 ⟲ | `bônus` | 188 | **encontros a cada quinze dias** — tirar dúvida, mandar pergunta antes, resposta em vídeo ou áudio · **podem sair a qualquer momento** | `[30/09 14:44:33]` · `DECISOES` 02/10 | 160–215 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-139-| D29 | `ancoragem` | 244 | **a mentoria dela** como valor de referência + por que este preço (o legado, `E30-35`) | — | 205–280 | 🔴 valor da mentoria |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-140-| D30 ⟲ | `preço` + `garantia` | 82 | **R$ 297 ou 12×** + garantia de 7 dias | `DECISOES` 02/10 | 70–95 (+40–60) | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:141:| D31 ⟲ | `bônus` + `escassez` | 149 | **bônus com prazo** (os encontros podem sair) + **turma fundadora com data**: primeiro encontro ao vivo em `[[ FALTA: data ]]`, só para quem entrou | `DECISOES` 02/10 | 125–170 | 🟡 data |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-142-| D32 | `cta` | 51 | a chamada | — | 45–60 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-143-| D33 ⟲ | `bônus` surpresa | 102 | **omitido** (não existe) | — | 0 | ❌ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-144-| D34 ⟲ | `escassez` | 41 | **omitido** (coberta em D31) | — | 0 | ❌ |
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:183`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-183-| 1 | **conteúdo do módulo de aplicação** — confirma os passos 3 e 4? | D21 · D22 · D27 | Débora |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-184-| 2 | **credenciais com número** e ok para citar nomes | D03 · D12 | Débora |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-185-| 3 | **depoimento autorizado** de líder | D09 | Débora |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:186:| 4 | ⟲ ~~condições dos encontros~~ → **data da turma fundadora** (forma decidida em 02/10) | D31 | Débora |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-187-| 5 | **valor da mentoria** para a ancoragem | D29 | Débora |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-188-| 6 | **nome do produto e apelido do método** | D13 · D26 | nós — agente G1, aprovação do Victor |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-189-| 7 | ⟲ ~~preço R$ 297~~ — ✅ confirmado em 02/10 | D30 | — |
```


## P19

**Pergunta (literal, JUIZ-GLOBAL §8):**

> **Decisão de estrutura:** "Qual a data-limite para entrar na turma fundadora?"

**Palavras-chave:** turma fundadora; data-limite; data de corte  
**Regex rg:** `turma fundadora|data.limite|data de corte`  
**Trechos encontrados:** 12 · exibidos: 8

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:131`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-131-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-132-| ID | Ponto / status | Citação literal e horário | Consequência |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-133-|---|---|---|---|
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:134:[Omitted long matching line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-135-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-136-| C-53 | Cliente oferece uso de sua conta de ferramenta, sem configuração concluída. | Débora [11:04:53]: “Aí. Você pode entrar no meu login e fazer por lá você não gastar crédito e ser mais rápido.”; Victor [11:04:59]: “Ué. Vamos ver.” | Oferta de recurso, não autorização operacional irrestrita nesta tarefa. Não acessar conta, copiar credenciais ou alterar assinatura. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-137-
```

**`REGISTRO-WHATSAPP-2026-10-07.md:13`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-13-|---:|---|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md-14-[Omitted long context line]
.\REGISTRO-WHATSAPP-2026-10-07.md-15-| 2 | depoimento autorizado | *"Jacque e Bia topam"* | ✅ duas pessoas — falta o depoimento em si |
.\REGISTRO-WHATSAPP-2026-10-07.md:16:| 3 | data da turma fundadora | *"Me ajuda a escolher?"* → Victor propõe meados de dezembro ou janeiro (14:12) → **ela: *"Pode ser meados de dezembro"*** → Victor: *"Quarta 16"* | ✅ **quarta, 16/12/2026** · 🔴 horário aberto: *"Quarta à noite tenho aula.."*, *"to pensando"*, *"sábado preciso da agenda de rally de Danilo rsrs"* (14:23–14:24) |
.\REGISTRO-WHATSAPP-2026-10-07.md-17-| 4 | conteúdo do módulo de aplicação | *"Não sei..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-18-| 5 | histórias reais de líder | *"Preciso pensar..."* | 🔴 aberto |
.\REGISTRO-WHATSAPP-2026-10-07.md-19-[Omitted long context line]
```

**`REGISTRO-WHATSAPP-2026-10-07.md:45`**

```
.\REGISTRO-WHATSAPP-2026-10-07.md-45-
.\REGISTRO-WHATSAPP-2026-10-07.md-46-| Decisão | Por quê |
.\REGISTRO-WHATSAPP-2026-10-07.md-47-|---|---|
.\REGISTRO-WHATSAPP-2026-10-07.md:48:| ✅ **Turma fundadora: quarta, 16/12/2026** · horário a definir | ela aceitou "meados de dezembro"; Victor fixou a data |
.\REGISTRO-WHATSAPP-2026-10-07.md-49-| ✅ **Credencial para a VSL e para a página final do quiz: "mais de 80 pessoas"** — nunca "mais de 100" | princípio 8 da conta: ela mesma recuou do 100. 60 + 20 + 6 = 86 é o número que ela sustenta |
.\REGISTRO-WHATSAPP-2026-10-07.md-50-| ✅ **Depoimentos: Jacque e Bia** | autorizadas; falta colher |
.\REGISTRO-WHATSAPP-2026-10-07.md-51-| 🟡 **Permuta: parada** — não se reabre agora | ela trouxe aperto financeiro real e já antecipou o custo do tráfego. Insistir quebraria a relação no momento em que ela se abre |
```

**`DIARIO-DE-BORDO.md:9`**

```
.\DIARIO-DE-BORDO.md-9-- Entregas: `G6-ROTEIRO.md` (teleprompter, ≈3.433 palavras, ≈20 min) · `JUIZ-GLOBAL.md` (veredito **PRONTA COM BLOQUEIOS DE FATO**; §8 = 24 perguntas, 17 dela e 7 nossas).
.\DIARIO-DE-BORDO.md-10-- Briefing corrigido na origem: D10/D23 (E30-40, E30-37), faixa da oferta, peças abertas no site, D30 (desvio declarado), nível 2 da promessa, ID de D24.
.\DIARIO-DE-BORDO.md-11-- Transcrição bruta copiada para `vsl/2026-10-02/_transcript-2026-10-08/`.
.\DIARIO-DE-BORDO.md:12:- Próximo: Victor leva as perguntas à Débora + decide âncora R$ 4.000 × DECISOES 17/08, data de corte e duração dos encontros, e leva o apelido para a objeção de congruência dela **antes** de gravar.
.\DIARIO-DE-BORDO.md-13-
.\DIARIO-DE-BORDO.md-14-### 2026-10-02 (noite) · Opus (Cowork, CEO) · ⭐ **produção da VSL por agentes montada; VSL ainda não iniciada**
.\DIARIO-DE-BORDO.md-15-
```

**`DIARIO-DE-BORDO.md:1538`**

```
.\DIARIO-DE-BORDO.md-1538-
.\DIARIO-DE-BORDO.md-1539-## 08/10/2026 — registro de 03 a 07/10
.\DIARIO-DE-BORDO.md-1540-
.\DIARIO-DE-BORDO.md:1541:Quiz no ar e pacote enviado (04/10). Ela respondeu os fatos (06/10), recusou a permuta por aperto financeiro, aceitou a turma fundadora em 16/12 e rodou um anúncio próprio com clique a R$ 0,13 e conversão zero (07/10). Registro completo: `REGISTRO-WHATSAPP-2026-10-07.md`. Propagado para `DECISOES`, `STATUS` e `vsl/BRIEFING-VSL.md` (D03, D09, D31).
.\DIARIO-DE-BORDO.md-1542-
.\DIARIO-DE-BORDO.md-1543-**Próximo passo:** horário de 16/12, colher depoimentos de Jacque e Bia, propor esqueleto do módulo de aplicação. **Dono:** Victor.
.\DIARIO-DE-BORDO.md-1544-
```

**`DECISOES.md:126`**

```
.\DECISOES.md-126-[Omitted long context line]
.\DECISOES.md-127-[Omitted long context line]
.\DECISOES.md-128-[Omitted long context line]
.\DECISOES.md:129:[Omitted long matching line]
.\DECISOES.md-130-[Omitted long context line]
.\DECISOES.md-131-[Omitted long context line]
.\DECISOES.md-132-[Omitted long context line]
.\DECISOES.md:133:[Omitted long matching line]
.\DECISOES.md-134-[Omitted long context line]
.\DECISOES.md-135-[Omitted long context line]
.\DECISOES.md-136-[Omitted long context line]
```

**`STATUS.md:10`**

```
.\STATUS.md-10-
.\STATUS.md-11-## 1. Snapshot — 08/10/2026
.\STATUS.md-12-
.\STATUS.md:13:> **07/10:** fatos da VSL recebidos (turma fundadora 16/12, credencial "mais de 80 pessoas", depoimentos Jacque e Bia) · **permuta parada** por aperto financeiro dela · ela rodou anúncio próprio para a consultoria gratuita: 318 visitas a R$ 0,13, **conversão zero**. Registro: `REGISTRO-WHATSAPP-2026-10-07.md`.
.\STATUS.md-14-
.\STATUS.md-15-| Indicador | Valor | Fonte |
.\STATUS.md-16-|---|---|---|
```

**`STATUS.md:31`**

```
.\STATUS.md-31-| Referência escalada (R1 · Meta Batida em 15 Dias, fonte Filemon) | ✅ medida, 36 elementos | `12 - Direct Response/ESTRUTURA-VSL-2026-09-30.md` |
.\STATUS.md-32-| Promessa | ✅ **fechada 02/10:** *"Menos esforço, mais resultado, para o seu time e para você: quando você entende como cada pessoa funciona, sabe como direcionar cada uma para entregar o que você precisa."* · teto no nível 2 da cascata | `12 - Direct Response/PROMESSA-CASCATA-2026-10-02.md` §5 |
.\STATUS.md-33-| Mecanismo | ✅ do problema: o líder acha que todo mundo pensa como ele · analogia do computador (dela) · ✅ **apelido: `As Nove Línguas`** (Victor, 02/10) · 🟡 **provisório** até a objeção de congruência dela · homologação em `vsl/2026-10-02/G1-APELIDO-HOMOLOGADO.md` | `vsl/BRIEFING-VSL.md` §4 |
.\STATUS.md:34:| Oferta | ✅ R$ 297 ou 12× · garantia 7 dias · pilha done-for-you (curso + módulo de aplicação + O Espelho + Sistema de Conhecimento + Luz e Sombra + liderança pela raiz) · encontros quinzenais como bônus que pode sair · turma fundadora com data | `vsl/BRIEFING-VSL.md` §6 |
.\STATUS.md-35-| Formato | ✅ aula solo, ~20 min, roteiro inteiro para ela gravar | `vsl/BRIEFING-VSL.md` §1 |
.\STATUS.md-36-[Omitted long context line]
.\STATUS.md-37-[Omitted long context line]
```


## P20

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "A âncora segue R$ 4.000, 3 meses, 10 vagas, conforme DECISOES 17/08? (confirmar com ela se o valor está vigente)"

**Palavras-chave:** 4.000; 10 vagas; 3 meses; 6.000; individual  
**Regex rg:** `R\$ ?4\.?000|4\.?000 (reais|,)|10 vagas|dez vagas|6\.?000 .{0,20}individual|individual.{0,30}6\.?000`  
**Trechos encontrados:** 48 · exibidos: 8

**`AUDITORIA-DESTILACAO-2026-09-16.md:82`**

```
.\AUDITORIA-DESTILACAO-2026-09-16.md-82-
.\AUDITORIA-DESTILACAO-2026-09-16.md-83-**Em 15/09 eu escrevi, e o Victor levou para a call:**
.\AUDITORIA-DESTILACAO-2026-09-16.md-84-
.\AUDITORIA-DESTILACAO-2026-09-16.md:85:> *"A turma de outubro é o G1, a VSL é o G2, e o G1 paga o G2. As 8 vagas × R$ 4.000–6.000 = R$ 32.000–48.000 são exatamente a reserva de capital que o gate do §2.2 exige."*
.\AUDITORIA-DESTILACAO-2026-09-16.md-86-
.\AUDITORIA-DESTILACAO-2026-09-16.md-87-**Na call, ela tirou a turma da mesa** — `C-26`, `[09:24:09]` *"Eu não quero correr e fechar um grupo e fazer essa entrega. Agora."* · `[09:28:08]` *"preciso amadurecer minha geração de demanda"*.
.\AUDITORIA-DESTILACAO-2026-09-16.md-88-
```

**`DESTILACAO-CALL-2026-08-18.md:306`**

```
.\DESTILACAO-CALL-2026-08-18.md-306-
.\DESTILACAO-CALL-2026-08-18.md-307-| Oferta | Valor | Timestamp |
.\DESTILACAO-CALL-2026-08-18.md-308-|---|---|---|
.\DESTILACAO-CALL-2026-08-18.md:309:| Mentoria individual | **R$ 6.000 / 12 encontros = R$ 500 por encontro** | [10:34:40] |
.\DESTILACAO-CALL-2026-08-18.md-310-| Continuidade para quem já é do grupo | **R$ 350 por encontro** | [10:05:20] |
.\DESTILACAO-CALL-2026-08-18.md:311:| Nova mentoria (pré-venda) | **R$ 4.000** — 16 encontros em grupo + 4 individuais | [10:34:49] |
.\DESTILACAO-CALL-2026-08-18.md-312-
.\DESTILACAO-CALL-2026-08-18.md-313-> ✅ [10:35:09] *"se eu voltar as quatro individuais, já daria dois mil. Aí fica dois. Então continuaria esse preço dos quinhentos, e aí sobra dois mil dividido por dezesseis de grupo: **cento e vinte e cinco reais o encontro do grupo. E quinhentos o encontro individual.** Claro que não precisa ser exatamente isso, só estou vendo se está equilibrado."*
.\DESTILACAO-CALL-2026-08-18.md-314-> ✅ [10:36:11] *"na verdade seria os dois por 6k inicialmente, só que a gente tá dando desconto de quatro."*
```

**`DESTILACAO-CALL-2026-08-17.md:39`**

```
.\DESTILACAO-CALL-2026-08-17.md-39-
.\DESTILACAO-CALL-2026-08-17.md-40-| Produto | Duração | Formato | Preço |
.\DESTILACAO-CALL-2026-08-17.md-41-|---|---|---|---|
.\DESTILACAO-CALL-2026-08-17.md:42:| **Mentoria em grupo** | 4 meses | 16 encontros de grupo + 4 a 5 individuais | **R$ 6.000** cheio · **R$ 4.000 pré-venda** |
.\DESTILACAO-CALL-2026-08-17.md-43-| **Mentoria individual** | 4 meses | 12 encontros individuais (3/mês) | **R$ 6.000** |
.\DESTILACAO-CALL-2026-08-17.md-44-| **Condição para os 4 mentorados atuais** | 4 meses | mesmo formato do grupo | **R$ 3.000 (50% de desconto)** |
.\DESTILACAO-CALL-2026-08-17.md-45-
```

**`DESTILACAO-CALL-2026-08-17.md:78`**

```
.\DESTILACAO-CALL-2026-08-17.md-78-
.\DESTILACAO-CALL-2026-08-17.md-79-**A-08 · O preço realizado anterior, que corrige o histórico do repo.**
.\DESTILACAO-CALL-2026-08-17.md-80-> *"a última vez eu vendi quatrocentos e oitenta e oito. Foi por seis meses."* `[00:44:24]` → **R$ 4.880 / 6 meses = R$ 813/mês.**
.\DESTILACAO-CALL-2026-08-17.md:81:**Consequência: a pré-venda de R$ 4.000 por 4 meses é R$ 1.000/mês, ou seja, +23% em valor mensal sobre o realizado.** Corrige a análise de 17/08 pré-call, que comparava com o R$ 4.000/3 meses **planejado** em 19/06 e nunca praticado. **O aumento é real.**
.\DESTILACAO-CALL-2026-08-17.md-82-
.\DESTILACAO-CALL-2026-08-17.md-83-**A-09 · ⭐ A META E O MODELO, montados por ela na call.**
.\DESTILACAO-CALL-2026-08-17.md-84-> Victor: *"quanto que você quer faturar por mês? Vinte K livre."* `[01:10:52]`
```

**`DESTILACAO-CALL-2026-08-17.md:222`**

```
.\DESTILACAO-CALL-2026-08-17.md-222-
.\DESTILACAO-CALL-2026-08-17.md-223-**V-04 · ⭐ Ela decide preço no tarô, e o resultado bateu com a análise racional.**
.\DESTILACAO-CALL-2026-08-17.md-224-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-17.md:225:**Isto é método de decisão dela, não curiosidade.** A leitura chegou ao mesmo lugar que a ancoragem racional: R$ 6.000 de valor, R$ 4.000 de entrada com prova a construir. **Victor validou (*"Maravilha"*) e foi a conduta certa.**
.\DESTILACAO-CALL-2026-08-17.md-226-**Regra que fica: nunca contrapor um número dela sem oferecer ancoragem do mesmo peso.** Argumento seco contra leitura simbólica não convence, só cria resistência silenciosa.
.\DESTILACAO-CALL-2026-08-17.md-227-
.\DESTILACAO-CALL-2026-08-17.md-228-**V-05 · Ela audita o próprio preço pela memória de compradora.**
```

**`DESTILACAO-CALL-2026-08-17.md:307`**

```
.\DESTILACAO-CALL-2026-08-17.md-307-Pitch em 19/08 às 8h; entrega prometida para 18/08 às 10h. **Menos de 24 horas entre receber e usar, para uma pessoa que declarou não estar em mentalidade de venda.** Se atrasar, o momento não volta: a turma dispersa.
.\DESTILACAO-CALL-2026-08-17.md-308-
.\DESTILACAO-CALL-2026-08-17.md-309-**R-02 · 🔴 Propriedade intelectual do "mapa dos bloqueios".**
.\DESTILACAO-CALL-2026-08-17.md:310:[Omitted long matching line]
.\DESTILACAO-CALL-2026-08-17.md-311-
.\DESTILACAO-CALL-2026-08-17.md-312-**R-03 · 🔴 Litígio dela com o Jon, e a contraparte é a mesma do nosso registro.**
.\DESTILACAO-CALL-2026-08-17.md-313-[Omitted long context line]
```

**`DESTILACAO-CALL-2026-08-17.md:319`**

```
.\DESTILACAO-CALL-2026-08-17.md-319-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-17.md-320-
.\DESTILACAO-CALL-2026-08-17.md-321-**R-05 · 🟡 O pitch de quarta fala para 2 pessoas, não 4.**
.\DESTILACAO-CALL-2026-08-17.md:322:Letícia está fora do produto (`A-05`), Davi é incerto. **Sem uma oferta alternativa pronta (individual a R$ 6.000, ou condição própria), metade da sala ouve uma oferta que não é para ela**: e isso esfria a sala inteira.
.\DESTILACAO-CALL-2026-08-17.md-323-
.\DESTILACAO-CALL-2026-08-17.md-324-**R-06 · 🟡 A aritmética do individual não fechou.**
.\DESTILACAO-CALL-2026-08-17.md:325:R$ 6.000 por 12 encontros = **R$ 500 por encontro**. Contra o grupo, que a R$ 4.000 entrega 16 de grupo + 4 individuais. **Victor sinalizou o excesso** (*"eu acredito que tem muito encontro individual"* `[01:10:32]`) e o número não foi revisto. **Um produto vizinho mal precificado derruba a percepção de valor do outro.**
.\DESTILACAO-CALL-2026-08-17.md-326-
.\DESTILACAO-CALL-2026-08-17.md-327-**R-07 · 🟡 Capacidade: a conta feita foi só de entrega.**
.\DESTILACAO-CALL-2026-08-17.md-328-Victor nomeou e deixou aberto: *"por enquanto a gente só analisou com relação à entrega. A gente não colocou ali qual [é o ciclo] de venda junto"* `[01:22:23]`. **Com 6h/dia (`A-10`), o modelo de 15 a 16 pessoas mais individuais mais consultoria mais conteúdo não cabe sem que o grupo carregue a maior parte.** Ela já reconheceu: *"é isso que trava o meu crescimento"*.
.\DESTILACAO-CALL-2026-08-17.md-329-
.\DESTILACAO-CALL-2026-08-17.md:330:**R-08 · 🟡 A proposta enviada hoje já está desatualizada.** `A-11` mudou 5 individuais para 4, e o preço dos atuais (R$ 3.000) e o da versão individual (R$ 6.000) não constam de nenhuma versão do PDF.
.\DESTILACAO-CALL-2026-08-17.md-331-
.\DESTILACAO-CALL-2026-08-17.md-332----
.\DESTILACAO-CALL-2026-08-17.md-333-
```

**`DIARIO-DE-BORDO.md:9`**

```
.\DIARIO-DE-BORDO.md-9-- Entregas: `G6-ROTEIRO.md` (teleprompter, ≈3.433 palavras, ≈20 min) · `JUIZ-GLOBAL.md` (veredito **PRONTA COM BLOQUEIOS DE FATO**; §8 = 24 perguntas, 17 dela e 7 nossas).
.\DIARIO-DE-BORDO.md-10-- Briefing corrigido na origem: D10/D23 (E30-40, E30-37), faixa da oferta, peças abertas no site, D30 (desvio declarado), nível 2 da promessa, ID de D24.
.\DIARIO-DE-BORDO.md-11-- Transcrição bruta copiada para `vsl/2026-10-02/_transcript-2026-10-08/`.
.\DIARIO-DE-BORDO.md:12:- Próximo: Victor leva as perguntas à Débora + decide âncora R$ 4.000 × DECISOES 17/08, data de corte e duração dos encontros, e leva o apelido para a objeção de congruência dela **antes** de gravar.
.\DIARIO-DE-BORDO.md-13-
.\DIARIO-DE-BORDO.md-14-### 2026-10-02 (noite) · Opus (Cowork, CEO) · ⭐ **produção da VSL por agentes montada; VSL ainda não iniciada**
.\DIARIO-DE-BORDO.md-15-
```


## P21

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Qual o valor exato da parcela de 12× no checkout?"

**Palavras-chave:** 12x; parcela; doze vezes  
**Regex rg:** `12x|12×|doze vezes|parcela`  
**Trechos encontrados:** 41 · exibidos: 8

**`DESTILACAO-CALL-2026-08-17.md:61`**

```
.\DESTILACAO-CALL-2026-08-17.md-61-
.\DESTILACAO-CALL-2026-08-17.md-62-| Pessoa | Situação | Cabe na mentoria de liderança? |
.\DESTILACAO-CALL-2026-08-17.md-63-|---|---|---|
.\DESTILACAO-CALL-2026-08-17.md:64:| **Bia** | quer entrar, declarou; liderada por Débora na Kinology por 2 anos (de estagiária a líder de RH); pagou R$ 3.000 em 12×, **ainda pagando**; indica sempre | **Sim** |
.\DESTILACAO-CALL-2026-08-17.md-65-| **Lete** | *"a Lete era a única que trazia mais problemas do trabalho. Ela ou a Bia"* `[01:01:39]` | Provável |
.\DESTILACAO-CALL-2026-08-17.md-66-| **Davi** | objetivo grande e não concluído; *"a gente não completou"* `[01:03:46]` | Incerto |
.\DESTILACAO-CALL-2026-08-17.md-67-| **Letícia** | não é líder; saiu de emprego de 9 anos; pinta e vende quadros | **Não.** *"essa mentoria de liderança para ela não cabe"* `[01:09:15]` → candidata ao individual |
.\DESTILACAO-CALL-2026-08-17.md-68-
.\DESTILACAO-CALL-2026-08-17.md-69-**A-06 · A Bia tem histórico de preço e de indicação, e isso muda o pitch dela.**
.\DESTILACAO-CALL-2026-08-17.md:70:> *"ela foi a única que pagou mais barato dos meninos todos. Porque eu sei o salário dela... Aí ela pagou três mil e ela dividiu... em doze vezes. Então ela ainda está pagando a mentoria anterior."* `[00:49:05]`
.\DESTILACAO-CALL-2026-08-17.md-71-> *"eu fico achando que se eu cobrar quatro mil para ela, é cara."* `[00:49:05]` ← **crença dela, não fato dito pela Bia**
.\DESTILACAO-CALL-2026-08-17.md-72-> *"É uma pessoa que eu quero que ela venha trabalhar comigo depois... Em algum momento, eu vejo ela sendo do meu time."* `[00:49:46]`
.\DESTILACAO-CALL-2026-08-17.md-73-> *"E ela falou que vai indicar um amigo dela para a próxima mentoria... Ela sempre indica."* `[00:49:56]`
```

**`DESTILACAO-CALL-2026-08-17.md:255`**

```
.\DESTILACAO-CALL-2026-08-17.md-255-> *"a pessoa [desenvolve] a questão do contexto do problema, e no final, sucintamente, fala: eu tenho uma mentoria para resolver isso, isso e isso. E se você tiver interesse, o link está na bio para a gente marcar uma conversa, ou então me chama na DM que eu já informo os próximos passos. **Não é algo tão agressivo, é mais natural para o cotidiano.**"* `[00:41:57]`
.\DESTILACAO-CALL-2026-08-17.md-256-> **Fronteira declarada:** CTA direto fica para ação pontual (workshop, curso, campanha de semana ou mês específico) `[00:43:01]`.
.\DESTILACAO-CALL-2026-08-17.md-257-
.\DESTILACAO-CALL-2026-08-17.md:258:**M-06 · ⭐ Parcelamento além do ciclo de entrega canibaliza a renovação: e a régua é dela.**
.\DESTILACAO-CALL-2026-08-17.md:259:Victor apresentou o TMB: parcelamento no boleto, até 36×, taxa 5%, antecipação de 20%, conversão citada +40% `[01:24:47]` a `[01:27:17]`.
.\DESTILACAO-CALL-2026-08-17.md-260-Ela recusou com o argumento melhor:
.\DESTILACAO-CALL-2026-08-17.md:261:> *"Fica mais difícil de renovar, né? Pensa só: comprou uma mentoria de quatro meses, aí parcelou em doze; aí no quinto mês você vai vender de novo pra ela. **Você vai dobrar a parcela dela.** É mais interessante a pessoa parcelar no tempo da mentoria."* `[01:27:19]`
.\DESTILACAO-CALL-2026-08-17.md:262:**Régua nova, vale para a Continuum inteira: prazo de parcelamento não deve exceder o ciclo de entrega quando o produto é recorrente por natureza.** Ela também reportou **zero inadimplência** histórica `[01:27:19]`.
.\DESTILACAO-CALL-2026-08-17.md-263-
.\DESTILACAO-CALL-2026-08-17.md-264----
.\DESTILACAO-CALL-2026-08-17.md-265-
```

**`DIARIO-DE-BORDO.md:684`**

```
.\DIARIO-DE-BORDO.md-684-
.\DIARIO-DE-BORDO.md-685-[Omitted long context line]
.\DIARIO-DE-BORDO.md-686-
.\DIARIO-DE-BORDO.md:687:**Três métodos nossos que valem além desta conta**, extraídos para o eixo 8: **encerramento não é velório, é evento de venda** (`M-01`) · **a conta de capacidade destrava a venda em vez de freá-la** (`M-03`) · **prazo de parcelamento não deve exceder o ciclo de entrega em produto recorrente** (`M-06`, régua trazida por ela ao recusar o TMB com argumento melhor que o nosso).
.\DIARIO-DE-BORDO.md-688-
.\DIARIO-DE-BORDO.md-689-**✅ AS TRÊS ENTREGAS DE AMANHÃ ESTÃO ESCRITAS** (mesma sessão, 18h30): `ENTREGA-18-08_ROTEIRO-ENCERRAMENTO.md` (`C-01`, o crítico) · `ENTREGA-18-08_DIRECAO-DE-CONTEUDO.md` (`C-02`) · `ENTREGA-18-08_FEEDBACK-FORMULARIO.md` (`C-03`, vencido havia 7 dias). Todas na voz dela, gate rodado: travessão 0, léxico morto 0, NR-1 0, zero afirmação categórica em fala dela.
.\DIARIO-DE-BORDO.md-690-**A decisão de arquitetura do roteiro, e é a resposta ao `R-04`:** ela não pede, ela qualifica · a decisão sai do grupo e vai para o individual · o artefato é presente incondicional e vem antes da oferta · e ela declara em voz alta que quer o "não" se não for a hora. **Quatro movimentos que tiram a rejeição da estrutura em vez de tentar convencê-la a não ter medo.**
```

**`DECISOES.md:130`**

```
.\DECISOES.md-130-[Omitted long context line]
.\DECISOES.md-131-[Omitted long context line]
.\DECISOES.md-132-[Omitted long context line]
.\DECISOES.md:133:[Omitted long matching line]
.\DECISOES.md-134-[Omitted long context line]
.\DECISOES.md-135-[Omitted long context line]
.\DECISOES.md-136-[Omitted long context line]
.\DECISOES.md-137-[Omitted long context line]
.\DECISOES.md-138-[Omitted long context line]
.\DECISOES.md:139:[Omitted long matching line]
.\DECISOES.md-140-[Omitted long context line]
.\DECISOES.md-141-[Omitted long context line]
.\DECISOES.md-142-[Omitted long context line]
.\DECISOES.md:143:[Omitted long matching line]
.\DECISOES.md-144-[Omitted long context line]
.\DECISOES.md-145-[Omitted long context line]
.\DECISOES.md-146-[Omitted long context line]
```

**`12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:137`**

```
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-137-| D27 ⟲ | `descrição` | 347 | **a pilha done-for-you** (`vsl/BRIEFING-VSL.md` §6): curso · módulo de aplicação · O Espelho · Sistema de Conhecimento · Luz e Sombra · liderança pela raiz | `DECISOES` 02/10 | 295–400 | 🟡 módulo a gravar |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-138-| D28 ⟲ | `bônus` | 188 | **encontros a cada quinze dias** — tirar dúvida, mandar pergunta antes, resposta em vídeo ou áudio · **podem sair a qualquer momento** | `[30/09 14:44:33]` · `DECISOES` 02/10 | 160–215 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-139-| D29 | `ancoragem` | 244 | **a mentoria dela** como valor de referência + por que este preço (o legado, `E30-35`) | — | 205–280 | 🔴 valor da mentoria |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md:140:| D30 ⟲ | `preço` + `garantia` | 82 | **R$ 297 ou 12×** + garantia de 7 dias | `DECISOES` 02/10 | 70–95 (+40–60) | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-141-| D31 ⟲ | `bônus` + `escassez` | 149 | **bônus com prazo** (os encontros podem sair) + **turma fundadora com data**: primeiro encontro ao vivo em `[[ FALTA: data ]]`, só para quem entrou | `DECISOES` 02/10 | 125–170 | 🟡 data |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-142-| D32 | `cta` | 51 | a chamada | — | 45–60 | ✅ |
.\12 - Direct Response\ESTRUTURA-VSL-2026-09-30.md-143-| D33 ⟲ | `bônus` surpresa | 102 | **omitido** (não existe) | — | 0 | ❌ |
```

**`12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:233`**

```
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-233-|---|---|
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-234-| Anúncio 1 | vídeo · *"Domine a arte de lidar com pessoas difíceis no trabalho"* → **livro físico** *Gestão de Perfis Problemáticos e Manipulações no Trabalho* · frete grátis · 3x · **ativos desde 20 e 25/08, ainda rodando** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-235-| Anúncio 2 | vídeo · *"Aprenda a lidar com pessoas difíceis no trabalho"* → **Formação** · **ativo desde 22/09** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:236:| Formação | **R$ 397 à vista ou 12x R$ 41,06** (*"de R$ 526,90"*, oferta de lançamento) · 6 módulos gravados · scripts de intervenção · **livro físico incluso** · garantia de 7 dias · certificado · 60h |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-237-| Mecanismo deles | **"Método GPS"** · diagnosticar → gerenciar → modificar · **20 perfis problemáticos e 30 manipulações** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-238-
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-239-**Estado pela régua:** o **livro** passa de *"em escala, fraco"* para 🟡 **EM ESCALA** (~35 dias contínuos, várias variações da mesma promessa). A **formação** está ❌ **testando** (2 dias). **Não é escalado — mas é a única oferta brasileira em escala na dor exata do ICP A.**
```

**`12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:251`**

```
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-251-|---|---|---|
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-252-| porta | quiz grátis (Qual Carreira, ReSelf) | o teste |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-253-| **entrada paga** | **relatório/premium depois do teste** (Qual Carreira + padrão da categoria) | ⭐ **a ficha de talentos gerada** |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md:254:| núcleo | **formação gravada ~R$ 397 em 12x** (Lincoln/Bruna) | o curso dela |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-255-| margem | — | mentoria · diagnóstico de equipe (B2B) |
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-256-
.\12 - Direct Response\ESTRUTURA-ESCALADA-2026-09-22.md-257-🔴 **O preço da ficha não se decide ainda:** falta ver o premium do Qual Carreira por dentro (§9.5). **O núcleo tem âncora de mercado: R$ 397.**
```

**`12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md:14`**

```
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-14-| **Formato da VSL** | **uma aula de ~20 min** que ensina algo real antes de vender | R1, R2, R3 — as três de curso se apresentam como aula |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-15-| **Roupagem** | ⭐ **conversa** — ela responde, alguém pergunta | R4b (a mesma oferta escalada, trocada de monólogo para entrevista) + o que ela disse sobre gravar sozinha |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-16-| **Sequência** | lead → **mecanismo do problema** → história e construção → mecanismo da solução **com demonstração** → oferta | R1 (base) com a ordem de R3 e a demonstração de R2 |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md:17:| **Oferta** | **o curso de Eneagrama dela + o módulo de aplicação que ela já quer gravar + encontro ao vivo** · **R$ 297 ou 12×** · garantia de 7 dias | R3 (R$ 297) · R1 (R$ 189 + evento ao vivo) · o checkout que já existe (R$ 297) |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-18-| **Promessa** | classe *resultado + tempo mínimo + sem o pré-requisito que falta* | R1–R4, as quatro |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-19-| **Mecanismo** | P2: *os testes perguntam como a pessoa se comporta — e comportamento engana* | **dela** — não se modela |
.\12 - Direct Response\LATERALIZACAO-VSL-2026-09-25.md-20-| **Os dois funis** | a **mesma VSL** nos dois; muda só o primeiro minuto | decisão Victor, 25/09 |
```


## P22

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "Qual a condição exata da garantia de 7 dias no termo e no checkout (pedido por onde, reembolso integral)?"

**Palavras-chave:** garantia; 7 dias; reembolso  
**Regex rg:** `garantia|7 dias|sete dias|reembolso`  
**Trechos encontrados:** 142 · exibidos: 8

**`DESTILACAO-CALL-2026-08-25.md:180`**

```
.\DESTILACAO-CALL-2026-08-25.md-180-> ⛔ **Assunto vedado com ela por decisão do Victor (16/08). Ela trouxe espontaneamente, como desabafo** (*"é só um desabafo"*, `[13:56:23]`). **Registrar sempre, puxar nunca.**
.\DESTILACAO-CALL-2026-08-25.md-181-
.\DESTILACAO-CALL-2026-08-25.md-182-**J25-01 · Escalou de notificação extrajudicial para processo judicial.**
.\DESTILACAO-CALL-2026-08-25.md:183:> *"no extrajudicial, ele falou que **ia fazer o reembolso dos quatro meses, mas não fez, sumiu**... **Agora vai entrar pra um processo real. Não é o que eu queria, de jeito nenhum. Estou me sentindo péssima.**"* `[13:48:50]`
.\DESTILACAO-CALL-2026-08-25.md-184-
.\DESTILACAO-CALL-2026-08-25.md-185-**J25-02 · Dados novos do caso.**
.\DESTILACAO-CALL-2026-08-25.md-186-- **Valor da mentoria: R$ 60.000** · *"o Lifeness tem quarenta pessoas. **Uma mentoria de sessenta mil não tem quarenta pessoas na sala.** São entregas totalmente diferentes."* `[13:55:21]`
.\DESTILACAO-CALL-2026-08-25.md:187:- **Pedido dela: reembolso dos 4 meses não usados**, depois de cancelar em menos de uma semana da entrada `[13:48:50]`
.\DESTILACAO-CALL-2026-08-25.md-188-- ⚠️ *"**Ele não fez contrato. Ele não me deu nota fiscal. Ele não fez nada. Então eu não sabia o que eu tinha direito** e o que eu podia fazer."*
.\DESTILACAO-CALL-2026-08-25.md-189-- ⚠️ *"ele mandou muitas mensagens péssimas, áudio. **Colocou toda a culpa de tudo na minha insegurança**"* · *"**Se eu pegar o áudio, dá pra você levar pra um lado de assédio.**"*
.\DESTILACAO-CALL-2026-08-25.md-190-- Ela assistiu ao Lifeness **a pedido dele**, para conhecer o método antes de decidir `[13:48:50]`: o que ele passou a usar como argumento de consumo.
```

**`DESTILACAO-CALL-2026-08-17.md:157`**

```
.\DESTILACAO-CALL-2026-08-17.md-157-
.\DESTILACAO-CALL-2026-08-17.md-158-**F-01 · A ordem que ela mesma declarou.**
.\DESTILACAO-CALL-2026-08-17.md-159-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-17.md:160:**⚠️ Terceiro pedido do feedback do formulário** (10/08 por escrito, e agora ao vivo). **Compromisso nosso, 7 dias aberto.**
.\DESTILACAO-CALL-2026-08-17.md-161-
.\DESTILACAO-CALL-2026-08-17.md-162-**F-02 · O que ela quer e ainda não tem.**
.\DESTILACAO-CALL-2026-08-17.md-163-> *"Eu queria deixar o site mais pronto... Eu queria um curso de entrada no site mais pronto. Sabe, quando a pessoa entra na mentoria, ela tem um primeiro passo. **Eu queria um [onboarding] orquestrado ali.** Eu queria fazer isso melhor. E eu não fiz isso nesse passo."* `[00:32:44]`
```

**`DESTILACAO-CALL-2026-08-17.md:291`**

```
.\DESTILACAO-CALL-2026-08-17.md-291-
.\DESTILACAO-CALL-2026-08-17.md-292-**3. Vagas e prazo da pré-venda seguem em aberto**, mesmo com a data de outubro fechada. Ela trabalhou com 15 a 16 pessoas como cenário de cálculo `[01:12:06]`, **não como decisão.**
.\DESTILACAO-CALL-2026-08-17.md-293-
.\DESTILACAO-CALL-2026-08-17.md:294:**4. A garantia de 14 dias não foi discutida**, apesar de estar na proposta que ela enviou hoje de manhã.
.\DESTILACAO-CALL-2026-08-17.md-295-
.\DESTILACAO-CALL-2026-08-17.md-296-**5. Renovação do nosso contrato: nenhuma menção.** Mas o custo da assessoria entrou na conta dela pela primeira vez, dito por nós e sem nome: *"impostos, ferramentas, recursos... **a assessoria**. É porque esse valor nosso tem que ser diluído também"* `[01:11:24]`. **Ela respondeu *"É, sim"* e o assunto passou.** Primeira vez que o nosso preço aparece dentro do P&L dela.
.\DESTILACAO-CALL-2026-08-17.md-297-
```

**`execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3062`**

```
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3062-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3063-## 10:39:27 — Debora Maciel
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3064-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3065:[10:39:27 → 10:39:43] Entendeu. Ela tem direito aí em quatro encontros aí dentro. Sei lá. Pode ser de dois meses. Não, nem fez o curso ainda. Isso é um jeito até de fazer a pessoa fazer o curso. Então você vai fazer o curso depois de quinze, é depois de sete dias, você vai ter comigo.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3066-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3067-## 10:39:28 — Continuum AI Systems
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3068-
```

**`execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3072`**

```
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3072-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3073-## 10:39:43 — Debora Maciel
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3074-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md:3075:[10:39:43 → 10:39:54] Sete dias depois, quatro encontros. Aí ela tem quatro encontros comigo. Tal dia. Ela pode ir gerenciar isso, que eu não sei como é que seria, mas a gente consegue. Eu consigo fazer isso.
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3076-
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3077-## 10:39:52 — Continuum AI Systems
.\execução Codex\DESTILACAO-2026-09-16\TRANSCRIPT-LIMPO.md-3078-
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:57`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-57-| C-11 | Duração corrigida pela dona: sete horas, não mais de vinte. | Débora [10:23:02]: “Não tem sete horas de gravação ali.”; Victor [10:23:04]: “Tem sete.” | A pontuação automática é ruim; contexto corrige a estimativa anterior. Registrar aproximadamente sete horas conforme fala, sujeito a inventário. Não usar “mais de vinte horas”. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-58-| C-12 | Parte importante do volume são os 27 vídeos de subtipos; aluno não precisa ver todos. | Débora [10:23:08]: “Ela só precisa assistir os dela.”; [10:23:21]: “porque tem vinte e sete vídeos só de subtipo.” | Descrever percurso pertinente ao aluno, não usar volume como se todo conteúdo fosse obrigatório. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-59-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:60:| C-14 | Primeiro benefício descrito: mudança de perspectiva e relação com diferenças. | Débora [10:25:16]: “Quando você tem o curso do anagrama em geral, a primeira coisa que muda é visão.”; [10:25:33]: “Isso já muda a sua forma de se relacionar.” | Insumo de narrativa atribuído à cliente; não comprovação científica ou garantia individual. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-61-| C-15 | A lente dela é compreender, não rotular. | Débora [10:27:35]: “Porque se você dá o eneagrama na perspectiva de rótulo, o que eu faço com o julgamento, eu aumento o julgamento. Eu coloco você numa caixinha.” | Regra de congruência para copy e conteúdo: evitar determinismo e estereótipos como promessa. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-62-| C-16 | Ela trabalha interpretação da história de formação, não só comportamento. | Débora [10:27:56]: “Eu não mostro só a personalidade. Eu mostro a criança daquela personalidade. E o que essa criança desenvolveu para sobreviver.” | Registrar como explicação do método dela, sem transformar em diagnóstico clínico ou causalidade demonstrada. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-63-| C-17 | Maestrias/talentos não estão integralmente gravados no curso atual. | Débora [10:30:46]: “Mas no meu curso do enneagrama hoje, eu não posso falar que você vai sair com isso? Porque eu não gravei todas as maestrias de cada tipo.” | Proibição factual de vender essa entrega como componente já existente no vídeo. Pode haver complemento no sistema, a especificar. |
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:76`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-76-- **Bônus inicial discutido e retomado:** quatro encontros ao vivo por comprador elegível; regulamento não definido.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-77-- **Continuidade possível:** comunidade paga, depois de experimentar os encontros; R$ 150/mês foi exemplo.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-78-- **Mentoria:** seleção por call mantida; não se torna compra automática porque existe VSL.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:79:- **Não definido:** preço final, nome comercial da nova oferta, promessa final, garantia, duração de acesso, suporte, checkout, regras dos encontros e mídia.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-80-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-81-## 3. Ecossistema, canais e o que foi descartado
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-82-
```

**`execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:142`**

```
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-142-[Omitted long context line]
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-143-| C-55 | Leitura de retenção foi apresentada como ferramenta de diagnóstico. | Victor [09:11:44]: “De quantas pessoas assistiram, até que ponto? Qual foi o engajamento? Em que ponto que as pessoas travaram ou que continuaram assistindo.” | Transformar em plano de instrumentação se a execução for autorizada; não afirmar que já existem dados. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-144-| C-56 | Distinguiu comprador de visitante para disponibilidade de dados pessoais. | Débora [09:56:22]: “Sem nada, né? Só dela ter clicado.”; Victor [09:56:25]: “No caso, as pessoas que compraram.” | Não prometer nome/e-mail/telefone de todo visitante. Definir coleta, consentimento e origem na futura implementação. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md:145:| C-57 | Duas ou três VSLs foram sugeridas, mas sem volume, verba ou calendário fechado. | Victor [09:50:34]: “Então, o que eu falei aqui desses prazos é para uma.”; [09:50:39]: “E aí a gente já pode pré programar. Para já, encadear.”; [09:50:44]: “Três.” | Ideia de iteração, não garantia de acerto nem três produções contratadas com datas. |
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-146-
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-147-**Fronteira de evidência:** eficácia, escala, resultados de terceiros, explicações sobre personalidade e afirmações jurídicas ou neuroquímicas são falas na reunião. Não foram validadas nesta destilação e não devem entrar como fatos demonstrados em materiais externos.
.\execução Codex\DESTILACAO-2026-09-16\DESTILACAO-CALL-2026-09-16.md-148-
```


## P23

**Pergunta (literal, JUIZ-GLOBAL §8):**

> conferência interna nossa contra as situações e os rótulos do resultado do quiz v6

**Palavras-chave:** quiz v6; v6; maior alavanca; nível em cada área  
**Regex rg:** `quiz v6|v6|maior alavanca|nível em cada área`  
**Trechos encontrados:** 42 · exibidos: 8

**`DESTILACAO-CALL-2026-08-18.md:252`**

```
.\DESTILACAO-CALL-2026-08-18.md-252-
.\DESTILACAO-CALL-2026-08-18.md-253-> ✅ [10:24:59] *"de alguma forma eu preciso me posicionar sobre isso para eles indicarem ou não. **Se eu falo: gente, não vou usar aquela parte mais lúdica — aí eles vão indicar umas pessoas mais céticas. Se eu falar que vai ter essas coisas, eles não vão indicar as pessoas. Então é uma escolha mesmo. Que eu não sei.**"*
.\DESTILACAO-CALL-2026-08-18.md-254-
.\DESTILACAO-CALL-2026-08-18.md:255:⚠️ **Decisão aberta e ela sabe.** É o ponto de maior alavanca de posicionamento da conta. **Não decidir também é decidir**, e hoje o efeito prático é indicação travada (B-06).
.\DESTILACAO-CALL-2026-08-18.md-256-
.\DESTILACAO-CALL-2026-08-18.md-257-### B-10 · ⭐⭐ A relação dela com o cético — diferencial competitivo real
.\DESTILACAO-CALL-2026-08-18.md-258-
```

**`DESTILACAO-CALL-2026-08-28.md:221`**

```
.\DESTILACAO-CALL-2026-08-28.md-221->
.\DESTILACAO-CALL-2026-08-28.md-222-> **O fato continua de pé:** ela não abre mão do site, e nada se apaga ou se substitui sem acordo. **A conclusão que tiramos dele não.**
.\DESTILACAO-CALL-2026-08-28.md-223->
.\DESTILACAO-CALL-2026-08-28.md:224:[Omitted long matching line]
.\DESTILACAO-CALL-2026-08-28.md-225->
.\DESTILACAO-CALL-2026-08-28.md-226-> **A leitura correta, e ela é a fronteira do `METODO-ALCADA-DE-ESTRUTURA.md` §4:**
.\DESTILACAO-CALL-2026-08-28.md-227->
```

**`execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:36`**

```
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-36-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-37-**Gargalo dominante:** transformar o recorte acordado em estrutura visível da VSL e conferir sua congruência com o conteúdo real, sem aguardar um teste aprofundado que ainda não foi dimensionado.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-38-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md:39:**Maior alavanca:** a analogia autoral dos computadores. Ela torna compreensível a diferença entre orientar alguém pela própria organização mental e procurar entender a perspectiva do liderado. É insumo de narrativa, não prova de eficácia do Eneagrama.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-40-
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-41-**Não fazer agora:** ampliar o produto para alocação profissional, prometer identificação infalível, tratar os testes como um só, considerar o upsell pronto, anunciar duração indefinida de encontros ou converter hipóteses comerciais em resultados. A destilação não autoriza criar teste, publicar VSL, adquirir livros, contatar alunos ou ativar mídia.
.\execução Codex\call-2026-09-30\DESTILACAO-CALL-2026-09-30.md-42-
```

**`DIARIO-DE-BORDO.md:434`**

```
.\DIARIO-DE-BORDO.md-434-
.\DIARIO-DE-BORDO.md-435-Em 28/08 ela disse *"eu não vou desistir do meu site"*. Respondemos *"jamais, é somente ajuste"* — **certo na hora.** O que registramos depois foi *"o site é território dela"*.
.\DIARIO-DE-BORDO.md-436-
.\DIARIO-DE-BORDO.md:437:> **A frase dela era sobre não jogar fora o que construiu. O registro virou uma regra sobre a NOSSA alçada — que ela nunca reivindicou e nós concedemos sozinhos.** Em 18 dias a concessão passou para `PLANO-EXECUCAO`, `FILA` V6 e `SITE-INSTITUCIONAL-BRIEF`, e terminou no BPMN.
.\DIARIO-DE-BORDO.md-438->
.\DIARIO-DE-BORDO.md-439-> 🔴 **Lição de método, e vale para toda destilação: fala emocional de cliente sobre um ativo não vira regra sobre o nosso escopo.** Propriedade do ativo ≠ autoria da estrutura.
.\DIARIO-DE-BORDO.md-440-
```

**`DIARIO-DE-BORDO.md:993`**

```
.\DIARIO-DE-BORDO.md-993-
.\DIARIO-DE-BORDO.md-994-### 2026-07-18 ~19h · Fable 5 (Cowork) · FUNIL COMPLETO DO MÊS construído (gaps fechados)
.\DIARIO-DE-BORDO.md-995-- Pedido do Victor: funil completo de tráfego para execução do mês inteiro — criativos × níveis de consciência, o que a Débora grava, entra/pausa, cenários A/B, conversão/retarget/lembrete, verba por fase×objetivo, mitigação. Buscar gaps e iterar até não restar.
.\DIARIO-DE-BORDO.md:996:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-997-- Correção de datas: hoje é 18/07 (3 entradas desta sessão estavam como 16/07 — corrigidas); janela recalculada D0=20/07 → 30 dias; viradas fixas 28/07 e 07/08 mantidas (contingência M1 se D0>22/07).
.\DIARIO-DE-BORDO.md-998-- Gate de governança: headers STATUS em tudo · ritos de superação executados (2 docs → _arquivo c/ marcador) · varredura léxico morto nos 5 artefatos = 0 hits em copy (hits restantes só em notas de documentação de remoção) · COPY v5 aditiva (v4 intacta).
.\DIARIO-DE-BORDO.md-999-- Decisões dentro da alçada (reversíveis, flag): estrutura B = 3º conjunto lembrete intermitente c/ mínimos de gasto em CBO · X-series com datas hardcoded por versão (peça pausa na virada, não é variável) · diária = total÷dias restantes no D0 · V5 gravada sem números (cartela editável).
```

**`RELATORIO-AUDITORIA-2026-07-08.md:6`**

```
.\RELATORIO-AUDITORIA-2026-07-08.md-6-
.\RELATORIO-AUDITORIA-2026-07-08.md-7-- **Problema central:** decisões já tomadas (30/06) e a iteração de copy da Débora ("Seu Eixo") não foram consolidadas nos artefatos canônicos — a operação tem 3 fontes divergindo (OFERTA-CANONICA diz "Carreira Alinhada"; copy-anuncios segue o posicionamento antigo em parte; a página nova diz "Seu Eixo" com H1 de dor que a decisão de 30/06 derrubou).
.\RELATORIO-AUDITORIA-2026-07-08.md-8-- **Gargalo dominante:** consolidação canônica + página refeita. Sem isso, criativo, campanha e tracking herdam divergência.
.\RELATORIO-AUDITORIA-2026-07-08.md:9:- **Maior alavanca:** registrar as decisões pendentes (nome, datas de lote, promessa) → refazer a página pelo método → destravar criativos e campanha em sequência.
.\RELATORIO-AUDITORIA-2026-07-08.md-10-- **O que NÃO será feito agora:** mentoria individual, LinkedIn/B2B, automações de mídia, order bump refinado — nada disso antes da página + campanha no ar.
.\RELATORIO-AUDITORIA-2026-07-08.md-11-
.\RELATORIO-AUDITORIA-2026-07-08.md-12-## 2. Auditoria da iteração de copy "Seu Eixo" (falha → correção)
```

**`RELATORIO-AUDITORIA-2026-07-08.md:52`**

```
.\RELATORIO-AUDITORIA-2026-07-08.md-52-4. **Continuum:** produzir criativos do `PLANO-CRIATIVOS.md` (lote 1: 8-12) → aprovação.
.\RELATORIO-AUDITORIA-2026-07-08.md-53-5. **Subir campanha** (estrutura verba pequena, método §5.3) → rotina de gestão §7 + `LOG-DECISOES` de tráfego.
.\RELATORIO-AUDITORIA-2026-07-08.md-54-
.\RELATORIO-AUDITORIA-2026-07-08.md:55:**Validação financeira:** destrava a garantia contratual (1,5x) e a receita do lançamento — maior alavanca de resultado do contrato; reduz desperdício (nada de criativo/verba sobre página divergente); melhora caixa da Débora e nossa prova de caso para vender Assessoria a preço correto.
```

**`12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md:121`**

```
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-121-| **Total** | `soma` 0–75 | `nivel` = **1** (0–28) · **2** (29–53) · **3** (54–75) · `pct = round(10 + soma/75 × 85)` |
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-122-| **Por área** | `d1`…`d5`, 0–15 cada | nível da área = **1** (0–5) · **2** (6–10) · **3** (11–15) · `pct_dX = round(10 + dX/15 × 85)` |
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-123-| **Ponto mais forte** | maior `dX` | empate: a área de número menor |
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md:124:| **Maior alavanca** | menor `dX` | empate: a área de número menor · **se forte e alavanca forem a mesma área (todas iguais), mostrar só a alavanca** |
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-125-
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-126----
.\12 - Direct Response\quiz\CONTRATO-QUIZ-NORTE-v4-2026-10-03.md-127-
```


## P24

**Pergunta (literal, JUIZ-GLOBAL §8):**

> "O anúncio do funil B nomeia o Eneagrama? Se não nomear, 'de Eneagrama' volta em D01."

**Palavras-chave:** funil B; anúncio; Eneagrama  
**Regex rg:** `funil B|funil b|anúncio.{0,80}eneagrama|eneagrama.{0,80}anúncio`  
**Trechos encontrados:** 21 · exibidos: 8

**`DESTILACAO-CALL-2026-08-04.md:283`**

```
.\DESTILACAO-CALL-2026-08-04.md-283-[Omitted long context line]
.\DESTILACAO-CALL-2026-08-04.md-284-
.\DESTILACAO-CALL-2026-08-04.md-285-**R-02 · 🔴 O ICP vigente pode estar errado, e ela disse isso duas vezes por caminhos diferentes.**
.\DESTILACAO-CALL-2026-08-04.md:286:[Omitted long matching line]
.\DESTILACAO-CALL-2026-08-04.md-287-
.\DESTILACAO-CALL-2026-08-04.md-288-**R-03 · 🟡 A autoria dos 4 passos ficou órfã.** Nasceram como tarefa do Jon (D-02); ele saiu de cena em 06/08. **Ninguém confirmou se ela ainda quer essa estrutura** ou se ela existia para cumprir um programa.
.\DESTILACAO-CALL-2026-08-04.md-289-
```

**`DIARIO-DE-BORDO.md:80`**

```
.\DIARIO-DE-BORDO.md-80-
.\DIARIO-DE-BORDO.md-81-**Próximo passo, em ordem:** (1) agradecer a renúncia · (2) levar um nome · (3) roteiro de perguntas para a VSL e gravação com o Victor presente, antes de 29/09 · (4) dizer a ordem: VSL primeiro, produto 2 depois. **Verba: não nesta semana.**
.\DIARIO-DE-BORDO.md-82-
.\DIARIO-DE-BORDO.md:83:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-84-
.\DIARIO-DE-BORDO.md:85:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-86-
.\DIARIO-DE-BORDO.md-87-[Omitted long context line]
.\DIARIO-DE-BORDO.md-88-
```

**`DIARIO-DE-BORDO.md:619`**

```
.\DIARIO-DE-BORDO.md-619-
.\DIARIO-DE-BORDO.md-620-### 2026-08-25 · Opus (Cowork, CEO) · ⭐⭐ **ela pediu liderança** · 🔴 **a paralisia tem causa nomeada e não é a que registramos** · ⚠️ **o encerramento não foi mencionado em 59 minutos**
.\DIARIO-DE-BORDO.md-621-
.\DIARIO-DE-BORDO.md:622:> Call de 1h (13h06–14h05), destilada na mesma janela: `DESTILACAO-CALL-2026-08-25.md` (473 turnos, 10.424 palavras, IDs com sufixo `25`). Objeto: funil B2C e B2B.
.\DIARIO-DE-BORDO.md-623-
.\DIARIO-DE-BORDO.md-624-[Omitted long context line]
.\DIARIO-DE-BORDO.md-625-
```

**`DIARIO-DE-BORDO.md:705`**

```
.\DIARIO-DE-BORDO.md-705-2. **✅ Tráfego pago autorizado por ela em 04/08** — *"Eu animo investir em tráfego"* `[00:40:31]` — com estrutura de 3 níveis que **ela reformulou de volta com as próprias palavras** `[00:42:20]`, único momento da call em que faz isso. **A campanha segue pausada desde 24/07.**
.\DIARIO-DE-BORDO.md-706-3. **📅 Pré-venda em meados de setembro** `[00:39:15]`, com curso gravado e mentoria estruturada até lá. Primeira data de negócio da fase pós-pivô. **Falta um mês.**
.\DIARIO-DE-BORDO.md-707-
.\DIARIO-DE-BORDO.md:708:[Omitted long matching line]
.\DIARIO-DE-BORDO.md-709-
.\DIARIO-DE-BORDO.md-710-**Dois itens da lista de 16/08 fecham com prova literal:**
.\DIARIO-DE-BORDO.md-711-- **#7 (registro da call de 04/08)** → destilado. ✅
```

**`01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md:577`**

```
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-577-
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-578----
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-579-
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md:580:## Funil bruto citado
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-581-
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-582-- B2B
.\01 - contexto\CONTEXTO DÉBORA\CONTEXTO — DÉBORA DELGADO  HERMEZ.md-583-- evento para RHs e líderes
```

**`01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt:572`**

```
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-572-Continuum AI Systems: Então, se formos focar.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-573-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-574-13:18:45 --> 13:18:47
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt:575:Continuum AI Systems: No funil B2b.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-576-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-577-13:18:47 --> 13:18:51
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-578-Continuum AI Systems: Aí. Essa página é interessantíssima. Também.
```

**`01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt:581`**

```
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-581-Continuum AI Systems: Justamente por falar ali sobre você e tudo mais.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-582-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-583-13:18:55 --> 13:19:01
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt:584:Continuum AI Systems: Então, nesse funil B2b, geralmente não vai ser um foco. Só essa página.
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-585-
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-586-13:18:58 --> 13:18:59
.\01 - contexto\_transcripts\Reunião Zoom de Continuum AI Systems & Débora 2026-08-25 13h05(GMT-3h00).txt-587-Debora Maciel: Não.
```

**`12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:37`**

```
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-37-
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-38-1. **Produto de entrada para tráfego frio.** Entre: (a) curso de Eneagrama aplicado a liderança e pessoas; (b) produto de autoconhecimento/talentos; (c) **teste pago com relatório personalizado** (a ficha); (d) aula ou workshop ao vivo. Qual formato tem evidência de se pagar em tráfego frio **nesses nichos**?
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-39-2. **Quem compra de fato** cada formato — cargo, momento de vida, dor, poder de compra — segundo o que os vencedores miram e mostram nos depoimentos.
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md:40:3. **Promessa.** Que tipo de promessa está vendendo: resultado de liderança ("seu time", "conflitos", "comunicação"), autoconhecimento ("seus talentos", "propósito"), carreira ou relacionamentos? **Quais palavras o mercado usa?** O anúncio nomeia a ferramenta ("Eneagrama") ou só o problema?
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-41-4. **Mecanismo.** Como os vencedores explicam *por que* o método funciona, e **como o nomeiam** — sem cair em rótulo?
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-42-5. **Oferta.** Preço, o que vem no pacote, bônus, order bump, upsell, garantia, gravado × ao vivo, acesso vitalício × assinatura.
.\12 - Direct Response\PROMPT-DEEP-RESEARCH-ESTRUTURAS-2026-09-22.md-43-6. **Funil.** VSL × quiz/teste × webinar ou aula ao vivo × desafio × isca gratuita → e **como sobem para a mentoria high ticket (R$ 3–10 mil) e para o B2B**.
```


