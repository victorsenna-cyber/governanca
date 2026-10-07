# Auditoria da Landing V3 (Fable 5)

> **Objeto:** `landing-v3/` (v3.2, deploy de 01/07). **Objetivo real da página: vender o workshop.**
> **Método:** framework de CRO (page-cro) + leitura contra `debora-voice`, `ICP-LIDER.md`,
> `OFERTA-CANONICA.md` e `ANTI-AI-SLOP.md` + screenshots reais da build (desktop 1440x900,
> primeira dobra e página inteira; mobile; teste de 500px).
> **Legenda de prioridade:** P0 = compromete a venda hoje · P1 = perde conversão relevante ·
> P2 = refinamento.

---

## Veredito em três linhas

A página tem alma, voz e estética premium raras em landing de workshop, e a primeira dobra
comunica promessa, preço e ação. Mas, para VENDER, faltam três órgãos vitais: **valor tangível
(o que eu levo), prova (por que confiar) e um arco de tensão que sustente a decisão** entre a
dor reconhecida e a oferta. Hoje ela convence o líder a se reconhecer; ainda não o convence a
sacar o cartão.

---

## 1. Copy: estrutura, disposição e condução lógica até a compra

### O fluxo atual (e onde ele vaza)

```
HERO (promessa + preço + CTA)
  -> 01 Reconhecimento (dor espelhada)        [tensão sobe]
  -> 02 Jornada / 3 dias (método)             [tensão ALIVIA CEDO DEMAIS]  <- vazamento 1
  -> 03 Para quem é (qualificação)
  -> 04 Quem conduz (autoridade... vazia)     <- vazamento 2
  -> 05 Oferta (lotes + turma + CTA)          [sem ancoragem de valor]     <- vazamento 3
  -> 06 Depois (mentoria, honesto, bom)
  -> 07 FAQ (objeções)
  -> 08 CTA final (fecho bonito)
```

### P0.1 · Não existe o bloco "o que você leva" (ancoragem de valor)

Em nenhum ponto a página lista, de forma tangível, o que a pessoa recebe por R$ 97:
3 encontros ao vivo, leitura do próprio padrão pelo eneagrama e Desenho Humano, mapa do
bloqueio, demonstração de liberação ao vivo, roadmap reverso de 6 meses, método para
continuar. Esses itens estão DILUÍDOS na narrativa dos 3 dias, mas o cérebro que decide
compra precisa de uma pilha de valor explícita para pesar contra o preço. Sem isso, o
R$ 97 flutua sem referência.
**Correção sugerida:** bloco curto "Você sai com" (4 a 5 itens concretos, sem hype) entre a
Jornada e o Para Quem, ou dentro da própria Oferta acima dos lotes. Na voz dela: "um plano
que é seu", "um método para continuar", "a leitura do seu padrão".

### P0.2 · Prova e autoridade estão vazias

Não há um único elemento de prova na página: zero depoimentos, credenciais em placeholder
({{BIO_DEBORA}}, {{CREDENCIAIS_DEBORA}}), foto em placeholder. A seção "Quem conduz" hoje
ENFRAQUECE a página (moldura vazia com {{FOTO_DEBORA}} transmite inacabado).
**Correção sugerida:** (a) cobrar da Débora foto profissional + 2 linhas de credencial
concreta (anos, nº de pessoas/lideranças acompanhadas, formações); (b) se ainda não existem
depoimentos do workshop, usar prova emprestada das mentorias/trabalhos anteriores dela, 2 ou
3 frases curtas com nome e cargo; (c) enquanto não houver nada, mover "Quem conduz" para
DEPOIS da oferta (autoridade de reforço), para o vazio não interromper a subida até o preço.

### P0.3 · O arco de tensão alivia cedo demais (falta o custo de continuar)

A estrutura da própria voz da Débora é: situação reconhecível -> padrão invisível -> **custo
de continuar igual** -> nova perspectiva -> convite. A página pula o custo: o Reconhecimento
espelha a dor com precisão (a reunião, o feedback que não saiu) e já entrega o método logo em
seguida. Resultado: o líder se sente compreendido, mas não sente o PREÇO de ficar como está,
e a única urgência que resta é a do lote.
**Correção sugerida:** bloco curto entre 01 e 02 (3 a 5 linhas, sem medo fabricado), na linha
de: o padrão não fica parado, ele se repete na próxima reunião, no próximo ciclo, na próxima
pessoa boa que sai do time; adiar a leitura de si tem custo composto. Fechar com a pergunta
reflexiva típica dela.

### P0.4 · Cadência de CTA: um deserto de 4 seções sem convite

CTAs hoje: dobra -> oferta -> fecho. Entre a seção 01 e a 04 (o trecho mais longo e mais
emocional da página) não existe nenhum ponto de ação. O pico de desejo acontece no fim da
Jornada (Dia 3, "um plano que é seu") e ali não há porta.
**Correção sugerida:** CTA discreto (btn-quiet, não o glass) ao fim da Jornada: "Quero fazer
esse caminho -> ver turmas e valores", ancorando para #oferta.

### P1.5 · Primeira dobra: valor sim, qualificação quase

A dobra entrega promessa (H1), reconhecimento + mecanismo (subhead), preço ("a partir de
R$ 97") e CTA. Muito bom. Mas a palavra que faz o visitante frio de Instagram se reconhecer
(**líder / quem lidera**) só aparece no meio do subhead. O eyebrow diz apenas "workshop
online, ao vivo, 3 dias" (formato, não pertencimento).
**Correção sugerida:** eyebrow "PARA QUEM LIDERA · WORKSHOP AO VIVO · 3 DIAS". Custa nada e
qualifica em 1 segundo.

### P1.6 · Microdefeitos de copy

- Selo do hero "**No Zoom**": em PT lê como negação ("no Zoom" = sem Zoom). Trocar por
  "Ao vivo, pelo Zoom" (e fundir com o selo "Ao vivo", sobra espaço).
- {{DATAS_TURMAS}} cru no selo da dobra: enquanto não houver data, melhor "Turmas em agosto"
  sozinho (placeholder visível na dobra derruba credibilidade do primeiro impacto).
- Mecanismo segue sem nome ({{NOME_MECANISMO}} existe no config e não é usado). A H2
  descreve o caminho, funciona, mas sem nome não há propriedade. Pendência da Débora, a
  página está pronta para receber.
- Risk reversal (transferência/reembolso se a turma não fechar) está escondido na letra
  pequena da turma e no FAQ. Repetir junto ao CTA da oferta: reduz o risco percebido no
  exato momento da decisão.
- FAQ não cobre a objeção nº 1 do ICP: "já fiz terapia/curso de liderança, o que muda
  aqui?". Ela está mapeada no ICP-LIDER e merece entrada própria.

### O que está forte e não deve ser mexido

- Voz impecável: discernimento, zero hype, zero travessão, eneagrama como pista, NR-1 como
  gancho único e leve. Passa no teste da skill.
- Lotes por TEMPO com lote vigente aceso, sem "mais escolhido": exatamente a OFERTA-CANONICA.
- "Talvez ainda não seja, se..." (qualificação negativa): raro e poderoso para este ICP.
- Seção 06 (mentoria como continuidade, sem pressão): honestidade que constrói confiança.
- Título do fecho ("Antes de acelerar, devolva a si mesmo a clareza sobre quem você é."):
  o melhor momento de copy da página.

---

## 2. Arquitetura visual

### O que funciona

- Hierarquia tipográfica dramática (Fraunces gigante + Inter), numeração editorial de seção,
  hairlines douradas: linguagem de estúdio, não de template.
- Dobra limpa com UM CTA primário claro (liquid glass grafite) e hierarquia correta
  (nav = quiet, dobra = glass).
- Eneagrama construído por scroll amarra método e marca: momento memorável.
- Digital-labirinto como logo (topo, selo do fecho, marca d'água) no papel certo.
- Acessibilidade real: radios nativos, details/summary, foco visível, reduced-motion, AA.

### P0.7 · A oferta não tem peso visual de momento de decisão

A página inteira vive no mesmo registro claro e etéreo (papel -> areia -> papel). A Oferta,
que é O momento da página, tem o mesmo peso visual da Jornada. O olho não recebe o sinal de
"aqui as coisas ficam sérias".
**Correção sugerida:** um ÚNICO bloco de contraste forte na página, na oferta ou no fecho:
faixa musgo profundo ou petróleo (texto areia, dourado como fio), com os cards de lote
claros flutuando sobre ela. Um só momento escuro, sóbrio e terroso não vira "tech dark" e
cria o clímax que falta. Alternativa mais conservadora: moldura dourada + sombra mais
profunda no card do lote vigente e fundo areia cheio (F1EDE4 sólido) na seção.

### P1.8 · Metade direita da dobra desktop está vazia

Em 1440px, o lado direito da primeira dobra é espaço morto (a marca d'água a 18% quase não
existe visualmente). Espaço nobre sem trabalho.
**Correção sugerida:** ocupar com os 4 selos empilhados verticalmente (hoje estão ABAIXO da
dobra em 1440x900, ver P1.10) ou com a pilha "Você sai com" (P0.1). Mantém a assimetria
editorial e coloca informação de decisão na dobra.

### P1.9 · Primeira dobra refém de animação JS

O H1 revela palavra a palavra e subhead/CTA têm delay de 350 a 500ms. Em conexão lenta ou
dispositivo fraco, o primeiro paint mostra a dobra vazia (verificado no screenshot sem
tempo virtual: só "Lidere com" visível). O fallback no-js existe, mas quando o JS CARREGA
devagar o custo é real.
**Correção sugerida:** reduzir o stagger (palavras a 60ms, delay máximo ~250ms), e considerar
animar só no desktop.

### P1.10 · Selos fora da dobra em 1440x900

Os 4 selos (agosto, 2h, ao vivo, Zoom) ficam logo abaixo da linha da dobra. São informação
de decisão (formato e esforço) e merecem estar dentro dela (ver P1.8).

### P2.11 · Ritmo de fundos quase monótono no trecho 06-07

"Depois" e "FAQ" são dois blocos papel seguidos. Uma faixa areia no FAQ (ou o contraste do
P0.7 no fecho) devolve a alternância.

### P2.12 · Mobile

Sem overflow real (o corte visto no screenshot de 390px é artefato da largura mínima do
Chrome headless; em 500px tudo flui e o CSS não tem larguras fixas). Ainda assim, validar em
aparelho real antes de subir tráfego: dobra, seletor de turma e timeline de lotes.

---

## 3. Tensão por blocos e contraste

### Mapa atual (emoção x peso visual)

| Seção | Tensão emocional | Peso visual | Diagnóstico |
|---|---|---|---|
| Hero | promessa (alta) | alto (H1 dramático) | alinhado |
| 01 Reconhecimento | dor (sobe) | médio | alinhado |
| (vazio) | **custo (deveria subir mais)** | | **degrau faltando (P0.3)** |
| 02 Jornada | alívio/desejo | médio-alto (eneagrama) | alinhado |
| 03 Para quem | pertencimento | baixo | ok (respiro) |
| 04 Quem conduz | confiança (deveria) | baixo + placeholder | **vale de confiança (P0.2)** |
| 05 Oferta | decisão (pico) | **médio** | **pico sem clímax visual (P0.7)** |
| 06-07 Depois/FAQ | segurança | baixo | ok |
| 08 Fecho | convite (alta) | médio-alto (selo) | quase: ver P0.7 |

**Leitura:** a curva emocional da copy e a curva de contraste visual não coincidem nos dois
pontos que decidem a venda (custo e oferta). A página é bonita de modo uniforme; tensão se
constrói com desnível. Um degrau de custo (copy) + um clímax de contraste (visual) na oferta
resolvem a curva inteira sem tocar na sobriedade.

---

## 4. Plano priorizado

### Quick wins (implementar já, sem depender de ninguém)
1. Eyebrow da dobra: "PARA QUEM LIDERA · WORKSHOP AO VIVO · 3 DIAS" (P1.5).
2. Trocar "No Zoom" -> "Ao vivo, pelo Zoom"; tirar {{DATAS_TURMAS}} do selo da dobra (P1.6).
3. CTA quiet ao fim da Jornada apontando para #oferta (P0.4).
4. Repetir "se a turma não fechar, você é transferido ou reembolsado" junto ao CTA da
   oferta (P1.6).
5. Entrada nova no FAQ: "Já fiz terapia e cursos de liderança. O que muda aqui?" (P1.6).
6. Reduzir stagger de animação da dobra (P1.9).

### Alto impacto (exigem 1 decisão de design ou insumo da Débora)
7. Bloco "Você sai com" (pilha de valor tangível) entre Jornada e Para Quem ou na Oferta (P0.1).
8. Bloco "o custo de continuar igual" entre Reconhecimento e Jornada, na voz dela (P0.3).
9. Clímax visual na Oferta: faixa musgo profundo/petróleo única na página (P0.7).
10. Preencher prova: foto real, credenciais concretas, 2-3 depoimentos (mesmo de mentorias
    anteriores); enquanto não houver, mover "Quem conduz" para depois da Oferta (P0.2).
11. Selos/pilha de valor dentro da dobra desktop (P1.8 + P1.10).

### Testes A/B (quando houver tráfego; não assumir)
- H1: "Lidere com tudo o que você é." (atual) vs "Você já lidera bem. Que tal liderar
  inteiro?" (reconhecimento explícito primeiro).
- CTA primário: "Quero minha vaga" vs "Escolher minha turma" (especificidade).
- Preço na dobra: "a partir de R$ 97" vs sem preço (qualificação vs curiosidade).
- Posição de "Quem conduz": antes vs depois da oferta.

### O que NÃO mudar (guardrails desta página)
Voz da Débora e zero hype · promessa de plenitude no H1 · lotes por TEMPO sem selo de
popularidade · escassez real sem contador · eneagrama como pista e como geometria do método ·
paleta terrosa clara com dourado como fio · zero travessões.

---

*Auditoria gerada por Fable 5 em 01/07/2026, sobre a build v3.2 local (idêntica ao deploy
landing-v3-cd05ajfrv). Screenshots de referência no scratchpad da sessão (audit-desktop-fold,
audit-desktop-full, audit-mobile-full, audit-500).*
