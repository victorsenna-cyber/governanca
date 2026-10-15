# PLANO DE CAPTAÇÃO — Goiânia · Patricck Garbim (projeto secundário)

> **Tipo:** registro de decisão + plano · **Escrito em:** 09/10/2026 (vale a partir de 10/10/2026) · **Por:** Claude (CEO)
> **Árvores:** NEGÓCIO (âncoras) → ESCRITA (`COPY-PAGINA-GOIANIA.md`) → OPERAÇÃO (`CONTRATO-CODEX-PAGINA-GOIANIA.md`)
> **Fontes:** `DESTILACAO-CALL-2026-10-08.md` (`C-`, `R-`) · `DECISOES.md` (DEC-PG-04, 05, 06, 08, 15, 16) · `PILARES.md` · pesquisa de política e referências de 09/10/2026 (§3 e §4)
> **Status:** ✅ estrutura decidida · 🟡 números `n=0` · ✅ **anúncios sobem — decisão do Victor, CVO (DEC-PG-24): Google Ads com a página white (`/visita-goiania`), orgânico com a página black/SEO (`/goiania`); Meta Ads fora por enquanto.** Risco de política registrado na DEC-PG-24.

---

## 0. Núcleo executivo

| | |
|---|---|
| **Problema central** | o canal que foi vendido na call (*"100% Google Ads, white"*, C-36) não existe no Brasil para tratamento de dependência (R-01). |
| **Gargalo dominante** | **confiança da família**, não tráfego: ela não sabe se o lugar existe e se maltrata (C-29b). Quem resolve é a visita (C-21) e quem já esteve do lado de dentro (P3). |
| **Maior alavanca** | o que já gera ~1 internação/mês sem mídia (C-09): orgânico do orientaacolhimento.com.br + o WhatsApp dele. Multiplicar isso com uma página por cidade, começando por Goiânia (DEC-PG-04). |
| **O que NÃO será feito agora** | Google Ads de tratamento (proibido) · cloaking, página para o revisor, domínio descartável (DEC-PG-05 faixa 3) · VSL nesta rodada · página de Brasília (falta inventário, A2) · base de 1.500 unidades (DEC-PG-14) · preço na página (DEC-PG-15). |

---

## 1. O funil de Goiânia (DEC-PG-04)

```
ENTRADA (§2, só canais permitidos)
   ↓
orientaacolhimento.com.br/goiania  — página lisa, fala com a família, sem preço, "100% particular" acima da dobra
   ↓  (Turnstile do Cloudflare antes do redirecionamento · número fora do HTML)
WhatsApp do Patricck  — mensagem pré-preenchida "Vim pela página de Goiânia"
   ↓
triagem (tipo de dependência, há quanto tempo, internações anteriores, voluntária ou não — C-20)
   ↓
material institucional (o PDF que ele já testou, sem preço — C-18)
   ↓
VISITA à unidade escolhida (é o que fecha — C-21)
   ↓
tabela de valores → internação → comissão (50% da 1ª parcela, paga na entrada — C-06)
```

**O que a página faz e o que não faz:** a página não vende internação; ela vende **a conversa com o Patricck e a visita**. O preço, a unidade com nome e a triagem acontecem no WhatsApp, onde ele já converte 5 de 10 leads bons (C-07, grau R).

**Medição (sem dado de saúde — DEC-PG-07):** clique no botão de WhatsApp (evento no Cloudflare Web Analytics / Zaraz, sem pixel de terceiro nesta rodada) · o Patricck anota, numa planilha só dele, quantas conversas vieram com a frase *"Vim pela página de Goiânia"*, quantas visitas e quantas internações. Nenhum nome, nenhum diagnóstico.

🔴 **Fato que falta e decide o funil:** quem responde o WhatsApp entre 7h e 17h10, quando ele está no trabalho (`DESTILACAO` §5, não-dito). Lead das 14h sem resposta é lead perdido. → pergunta 4 do fecho.

---

## 2. Canais — o que é permitido, com fonte

### 2.1 Google Ads — ✅ sobe, por decisão do Victor (DEC-PG-24), com a página white · risco de política abaixo e na DEC-PG-24
A política de saúde do Google só permite anúncio de serviço de tratamento de dependência nos **EUA e Canadá** (com certificação LegitScript) e, em quatro países, só para órgão de governo. **Brasil fora.** Gerador de lead e agência de encaminhamento estão nomeados entre os restritos — que é exatamente o modelo de captador.
Fonte: [Google Ads — atualização sobre serviços de tratamento de dependência](https://support.google.com/adspolicy/answer/7683376) · [política de saúde](https://support.google.com/adspolicy/answer/176031), consultadas em 09/10/2026.
**Os anúncios do Luminum que aparecem na busca** (evidência de 09/10, DEC-PG-05) não mudam a regra: mostram fiscalização reativa, e o pedágio dela é pago em domínio, conta e número — os do Patricck, no nosso caso.

### 2.2 Meta (Facebook/Instagram) — 🔴 fora nesta fase (DEC-PG-23: o cliente disse na call que não funciona no nicho, C-36). Política lida em §3, guardada para quando reabrir

### 2.3 Permitidos, risco zero (motor desta rodada)

| Canal | Por que entra | Estado |
|---|---|---|
| **Orgânico de busca** — página de Goiânia indexada no Search Console que ele já tem | já gera ~1/mês sem mídia (C-09, C-31) · imune ao robô de clique do Iago (C-35) | página no contrato do Codex |
| **YouTube / Reels orgânicos com a história dele** | história liberada e já gravada (DEC-PG-16) · ninguém no nicho usa vídeo (C-37) | pedir os arquivos (pergunta 3) |
| **WhatsApp e indicação** — igrejas, grupos de família, CAPS e assistência social da região | é onde a família já pede ajuda; custo zero | ele já faz; a página vira o link que ele manda |
| **Perfil da Empresa no Google** | ⚠️ sem CNPJ não há perfil (C-32); o perfil da Casa do Pai é do Instituto, não da captação independente (DEC-PG-16) | fora até haver CNPJ/MEI dele |

### 2.4 Zona cinzenta — decisão do Victor, risco escrito (DEC-PG-05 faixa 2)
Anúncio de **saúde mental** só se a página descrever com verdade um serviço de saúde mental. A página de Goiânia é sobre dependência → **não se encaixa. Fora desta rodada.**

### 2.5 Vetado (DEC-PG-05 faixa 3)
Domínio descartável, página para o revisor, rotação, VSL escondida no player. Proteção anti-robô (Cloudflare, Turnstile, número fora do HTML) **é permitida**, com AdsBot/Googlebot e bots verificados passando livres e vendo a mesma página da família.

---

## 3. Política da Meta para tratamento de dependência

*Pesquisa de 09/10/2026 (agente de pesquisa; páginas lidas, salvo onde marcado).*

### 3.1 O que a política diz
| Ponto | Regra | Fonte |
|---|---|---|
| **Certificação** | A política *Drug and Alcohol Addiction Treatment* exige LegitScript + permissão da Meta **para anúncios dirigidos a pessoas nos EUA**. O texto não estende a exigência a outro país. **Leitura nossa:** para alvo Brasil não há exigência escrita de certificação — o que não garante aprovação nem dispensa a revisão normal. | [transparency.meta.com — drug-alcohol-addiction-treatment](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/drug-alcohol-addiction-treatment/) |
| **🔴 Atributos pessoais — a regra que mais pesa** | O anúncio não pode afirmar nem insinuar atributo pessoal do usuário **ou da família dele**, e saúde física ou mental está na lista. Exemplo oficial: *"Do you have diabetes?"* proibido · *"New diabetes treatment available"* permitido. | [transparency.meta.com — privacy-violations-personal-attributes](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/) |
| **Segmentação** | Interesses ligados a saúde foram removidos em 19/01/2022. Segmenta-se por **cidade e idade**, com público amplo; quem filtra é o criativo. | fontes secundárias (a página oficial deu 404): [Search Engine Land](https://searchengineland.com/?p=378095) |
| **Drogas e medicamentos** | não trata de tratamento de dependência; proíbe promover droga ilícita. | [transparency.meta.com — drugs-pharmaceuticals](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/drugs-pharmaceuticals/) |
| *Health and Wellness* | **não lida** — não citamos. | — |

**Na prática:** *"Seu filho é dependente?"* ou *"Seu marido bebe demais?"* **reprovam**. *"Internação masculina em Goiânia — visite a unidade antes de decidir"* **passa**. O anúncio fala do serviço; a página fala com a família.

### 3.2 Decisão (REGRA Nº 0) · ✅
**A Meta passa de "verba parada" para "canal permitido em caráter de TESTE"**, com quatro condições:
1. só depois da página publicada (portão §6);
2. criativo sobre o serviço, nunca sobre a pessoa (regra de atributos) — cada anúncio checado contra a frase-modelo acima;
3. conta de anúncios e Gerenciador **do Patricck**, cartão dele, **número de WhatsApp diferente do pessoal** (o número pessoal já foi derrubado — C-33);
4. **declarado como teste**: não há referência escalada (§4), então a verba se limita a **2 tentativas** dentro dos *"milzinhos"* (`METODO-FUNIL-DE-VSL.md` §2.2: nunca uma) — ex.: com R$ 2.000, 2 × R$ 1.000. Valor exato: pergunta 5 do fecho.

⚠️ Patricck diz que a Meta *"não funciona"* no nicho (C-36). É impressão de quem rodou dark; o teste existe para trocar impressão por número. Se as 2 tentativas não trouxerem visita, a Meta sai e o plano fica no orgânico.

### 3.3 O que ainda falta antes do primeiro real
Abrir a Biblioteca de Anúncios à mão (Brasil, ativos, "internação", "comunidade terapêutica") e conferir se alguma página mantém o mesmo criativo por **mais de 60 dias** (§4). Dono: Victor.

---

## 4. Referências escaladas (REGRA Nº 2)

**Resultado: nenhuma referência pôde ser classificada como ESCALADA.** A Biblioteca de Anúncios, pela ferramenta, mostra só a data de início de cada anúncio, sem gasto, impressões nem destino; nenhum anúncio de Goiânia apareceu.

| Referência | O que se observou (09/10/2026) | Estado | Uso |
|---|---|---|---|
| **Clínicas Goiás Brasil** — clinicasgoiasbrasil.com.br (página para onde o anúncio citado pelo Patricck leva) | 6 unidades, 5 telefones 0800, anúncio de Google ativo (print de 09/10) · "100+ páginas" **não confirmado** | **em escala** (indício de estrutura, sem prova de verba) | padrão de página — ver abaixo |
| Busca "clínica de recuperação internação dependência química", Brasil, ativos | **87 anúncios ativos** → captação paga por Meta no Brasil existe e é comum | — | confirma que o canal roda |
| "clinica PARA dependentes" (page_id 805121339343503) · Ctrenascer (807117335818963) | 8 e 4 anúncios, iniciados entre jul e set/2026; destino WhatsApp/Instagram | **testando / em escala** | formato: anúncio → WhatsApp direto |

**Padrão da página de referência (registro de padrão, não de texto):** telefones e "24h" no topo → título sobre tratamento → quem somos → tipos de tratamento → equipe → como funciona em 3 passos → unidades com fotos → 3 depoimentos com nome → convênios → FAQ curta → botão flutuante de WhatsApp. **Sem preço, sem formulário**, fala sobretudo com a família.
**O que modelamos:** sem preço · sem formulário, WhatsApp direto · "como funciona" em passos · equipe e unidades como prova · FAQ · botão fixo.
**Onde nos diferenciamos (o mecanismo é nosso):** visita antes de decidir · guia que já foi acolhido · rede onde ele conhece quem administra · página clara e calma, sem 0800 e sem tom de urgência · sem convênio (100% particular, filtro do ICP).

⚠️ **Contexto que pesa a favor do nosso mecanismo:** há casos de clínicas fechadas em Goiás por maus-tratos e cárcere privado ([Goiânia, 2017](https://www.jornalopcao.com.br/ultimas-noticias/policia-fecha-clinica-de-reabilitacao-em-goiania-que-torturava-internos-96166/) · [Abadiânia](https://opopular.com.br/cidades/clinica-de-reabilitac-o-e-fechada-e-dono-preso-suspeito-de-carcere-privado-em-abadiania-1.2582071)). É o medo que a família relata (C-29b) — e a visita antes é a resposta. A página não cita esses casos (DEC-PG-08).

**Declaração da REGRA Nº 2:** a página de Goiânia e o canal Meta nascem **como teste**, com verba limitada e declarada. O orgânico não depende de referência escalada: é o canal que **já** converte para ele (C-09).

---

## 5. Meta de internações, verba e âncoras (`METODO-ANCORAGEM-DE-PROPOSTA.md`)

### 5.1 Os números que temos

| Âncora | Valor | Fonte | Grau |
|---|---|---|---|
| Linha de base | ~1 internação/mês, orgânico | C-09 | R (declarado) |
| Comissão Goiânia (50% da 1ª parcela) | **R$ 2.000** coletivo · **R$ 2.667** prime · **R$ 3.334** premium | C-06, C-11 | tabela do PDF |
| Comissão INSS | 25% do benefício, quando há | C-22 | R — **não entra no breakeven** (incerta, demora meses) |
| Nosso serviço | **R$ 1.000** mês 1 · mês 2 `A CONFIRMAR` (referência R$ 1.500) | C-40, DEC-PG-02 | apalavrado |
| Mídia | *"uns milzinhos"* reservados · **`A CONFIRMAR`** | C-42 | — |
| Conversão dele | 5 de 10 leads bons na ligação + 2–3 com visita | C-07 | R |
| Custo de lead na região (Google, quando rodava) | R$ 35–40 | C-38 | R |

### 5.2 Breakeven — sobre a comissão, nunca sobre o ticket da internação

**Mês 1, sem mídia (canal desta rodada):** custo = R$ 1.000.
→ **1 internação a mais que a linha de base paga o mês** (R$ 2.000 no quarto mais barato = 2× o custo).

**Mês 1, com mídia (só se a §3 liberar):** custo = R$ 1.000 + M.
| Mídia M | Custo total | Internações extras para empatar (coletivo · premium) |
|---|---|---|
| R$ 1.000 | R$ 2.000 | **1 · 1** |
| R$ 2.000 | R$ 3.000 | **2 · 1** |
| R$ 3.000 | R$ 4.000 | **2 · 2** |

**Mês 2 em diante (R$ 1.500 de referência):** 1 internação extra/mês no coletivo cobre o serviço; com mídia, a mesma tabela + R$ 500.

### 5.3 Meta de internações — três cenários, `n=0`

Contam só as internações **atribuídas à página** (frase *"Vim pela página de Goiânia"* ou link dele), acima da linha de base.

| Cenário | Até 30/11/2026 | Até 31/01/2027 (fim do pico, C-29a) | Leitura |
|---|---|---|---|
| **Conservador — aceitável** | **1** | **3** | orgânico novo indexa devagar; a página serve sobretudo de link para o WhatsApp e a indicação. Paga os meses 1 e 2 e só. |
| Base | 2 | 6 | página indexada até meados de novembro, vídeos dele publicados, indicação usando o link. |
| Otimista | 4 | 10 | só com um canal pago permitido (§3) somado ao orgânico. |

**Curva de gerações:** G1 (out–nov) gera dado: quantos cliques, conversas e visitas por internação · G2 (dez–jan) busca breakeven estável no pico · G3 (fev/2027) só com 3 meses de dado decide escala ou Brasília. **Probabilidade de avanço: `n=0` — não há nenhuma internação atribuída à página ainda.**

### 5.4 Payback, em data

- **Conservador:** 1 internação extra **até 30/11/2026** paga os R$ 1.000 do mês 1 com sobra de R$ 1.000. Payback do mês 1: **30/11/2026**.
- **Base:** 1ª internação atribuída até **15/11/2026**.
- 🔴 **Prazo dito na call (*"meados da semana que vem já está tudo no ar"*, C-43):** a página pode estar **construída** até 16/10/2026; **publicada** só quando o portão de escrita passar (§6). Orgânico novo não gera internação na primeira semana — isso vai dito a ele.

### 5.5 Custo da inação
Fim de outubro a janeiro é o pico do ano (C-29a). Cada mês do pico sem a página é o mês em que a família do reincidente **escolhe a data** (C-28) e encontra o Luminum primeiro.

### 5.6 Condições de validade — de quem depende e o que quebra

| Condição | Dono | Se falhar |
|---|---|---|
| Pagamento até 10/10 | Patricck | nada do Ato II começa (PAINEL) |
| Léxico `D` (prints das primeiras mensagens das famílias) | Patricck | a página fica em homologação, sem publicar (§6) |
| Inventário de Goiânia (unidades, visita, quarto) | Patricck | a dobra de acomodações sai com `[[ FALTA ]]` |
| Alguém responde o WhatsApp no horário comercial | Patricck | conversão cai; cenário base vira conservador |
| Teste Meta (§3.2) sem visita em 2 tentativas | Victor | Meta sai; só o conservador e o base valem |

### 5.7 Nossa viabilidade
Mês 1 a R$ 1.000 é exceção de alçada (DEC-PG-02). Esta rodada consome: plano + copy (feito) + contrato e construção pelo Codex + revisão nossa (~2 h) + ajuste de copy quando o léxico `D` chegar (~1 h). **Cabe no mês 1 sem VSL.** A VSL e Brasília entram na sequência (DEC-PG-03), não somadas a esta semana.

---

## 6. 🔴 Portão de escrita — por que a página é construída e não publicada

`ARVORE-ESCRITA.md` §1 só libera peça para o público com `PILARES.md` sem P1/P4 reprovando **e** léxico com fonte `D`. Hoje: **P4 reprova** (inventário da rede) e o léxico tem **0 frases `D`**.
**Decisão:** escrever a copy agora sobre fato de grau `R` com fonte (ganha a semana) e mandar o Codex construir **em homologação, `noindex`, sem domínio público**. A publicação espera duas coisas: (1) os prints das primeiras mensagens das famílias (D1) para trocar a cena e o título pelas palavras delas; (2) o inventário de Goiânia. **Urgência reduziu volume — não pulou a dependência.**

---

## 7. Próximo passo e dono

| # | O quê | Dono | Quando |
|---|---|---|---|
| 1 | Pagamento | Patricck | 10/10/2026 |
| 2 | Responder as 5 perguntas do fecho (lista em `STATUS.md` §5) | Patricck | até 13/10/2026 |
| 3 | Dizer a ele, de voz: Google Ads não roda; o caminho é orgânico + página + vídeos dele; prazo real | Victor | próxima call |
| 4 | Construir a página em homologação | Codex (contrato) | até 16/10/2026 |
| 5 | Trocar `[[ FALTA ]]` pelas respostas e rodar o portão → publicar | Claude + Victor | quando 2 chegar |
| 6 | Conferir na Biblioteca de Anúncios da Meta a referência local antes de qualquer verba | Victor | antes do 1º real de mídia |
