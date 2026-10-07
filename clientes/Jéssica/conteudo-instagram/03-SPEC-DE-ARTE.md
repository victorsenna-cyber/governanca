# Spec de arte — o que faltava para gerar

> **Criado em:** 17/08/2026 · **Para:** geração das artes dos 32 criativos
> **Depende de:** `01-COMBO-EVENTO.md` e `02-COMBO-EMOTIONAL-SPEAKING.md` (copy final)
> **Origem visual:** logo Ladies Fluency Academy · tokens da `pagina-3-evento/site/styles.css`
>
> **Por que este arquivo existe:** os combos têm a copy pronta e a intenção visual por peça, mas **intenção não é especificação**. Ferramenta de design precisa de dimensão, hex, corpo de fonte e margem de segurança, senão cada peça sai com um sistema diferente e o feed não parece um feed.

---

## 0. O que é gerável e o que não é

| Categoria | Quantidade | Estado |
|---|:--:|---|
| **Estáticos com texto de arte** | **17** | ✅ geráveis agora |
| **Carrosséis** | **8** (57 telas no total) | ✅ geráveis agora |
| **Dependem de foto ou vídeo dela** | **7** | 🔴 **não geráveis.** Precisam de material dela |

**As 7 que não são geráveis:**

| Peça | O que precisa |
|---|---|
| EV-05 · A Casa Viva | 3 a 5 fotos do espaço, luz natural |
| EV-09 · A véspera | vídeo curto ou foto dela, tom pessoal |
| ES-03 · O corpo antes da palavra | vídeo curto dela falando |
| ES-09 · A atleta que aprendeu sozinha | foto dela |
| ES-10 · O caderno e a voz gravada | foto de caderno, ou dela escrevendo |
| ES-11 · Pedi demissão | vídeo curto ou foto dela |
| ES-12 · Por que saí do online | foto dela |

**Existem 5 fotos dela** em `contexto/fotos/`. Servem para ES-09, ES-11 e ES-12. Faltam: fotos da Casa Viva, foto de caderno, e os vídeos.

**Manda 25 peças para gerar. As outras 7 são pauta de produção dela, não de design.**

---

## 1. Formatos e dimensões

| Tipo | Dimensão | Proporção |
|---|---|---|
| **Post estático de feed** | **1080 × 1350 px** | 4:5 |
| **Carrossel** | **1080 × 1350 px** por tela | 4:5 |
| Story (se for reaproveitar) | 1080 × 1920 px | 9:16 |

**4:5 e não quadrado.** Ocupa mais altura no feed, que é área de atenção grátis.

### Margem de segurança

| Zona | Regra |
|---|---|
| Margem geral | **96 px** em todos os lados. Nada de texto fora disso |
| Faixa inferior | os últimos **180 px** podem ser cobertos pela interface. **Nenhum texto essencial ali** |
| Grade de perfil | a miniatura corta para 1:1 central. **A frase principal precisa caber no quadrado do meio** |

---

## 2. Paleta

| Papel | Hex | Uso |
|---|---|---|
| **Vinho profundo** | `#2D0C19` | fundo das peças de tese, convite e capa de carrossel |
| Vinho médio | `#3D1222` | fundo alternativo, gradiente sutil |
| **Dourado** | `#C6A56C` | tipografia de destaque, filete, grafismo |
| Dourado claro | `#E2C995` | realce dentro de bloco escuro |
| **Off-white** | `#F4F0E8` | fundo das telas de miolo de carrossel e peças de prova |
| Papel | `#FCFBF8` | fundo alternativo mais claro |
| Tinta | `#231F20` | texto sobre fundo claro |
| Tinta média | `#5F5558` | texto secundário sobre fundo claro |
| Rubi | `#6E1830` | acento sobre fundo claro, nunca como fundo de peça |

**Duas combinações e nenhuma terceira:**

1. Fundo `#2D0C19` + texto `#FCFBF8` + destaque `#C6A56C`
2. Fundo `#F4F0E8` + texto `#231F20` + destaque `#6E1830`

**Nunca:** dourado sobre off-white em corpo de texto (contraste insuficiente). Dourado sobre claro só em filete, número ou ícone.

---

## 3. Tipografia

| Papel | Fonte | Peso |
|---|---|---|
| **Display** | **Fraunces** | 300 e 400. Serifada, para as frases que carregam a peça |
| **Corpo** | **Inter** | 400 e 500. Para apoio, rótulo e legenda dentro da arte |

Ambas gratuitas no Google Fonts. **São as mesmas das páginas** — o sistema é um só.

### Escala, em peça de 1080 × 1350

| Elemento | Tamanho | Fonte | Entrelinha |
|---|:--:|---|:--:|
| Frase principal, 1 a 2 linhas | **96 px** | Fraunces 300 | 1.1 |
| Frase principal, 3 a 4 linhas | **72 px** | Fraunces 300 | 1.15 |
| Frase de capa de carrossel | **84 px** | Fraunces 400 | 1.12 |
| Tela de miolo de carrossel | **56 px** | Fraunces 400 | 1.25 |
| Numeração de tela (1, 2, 3…) | **40 px** | Inter 500 | — |
| Rótulo e sobretítulo | **28 px** | Inter 500, tracking 0.14em, caixa alta | — |
| Apoio e assinatura | **32 px** | Inter 400 | 1.5 |
| Dados do evento (data, local) | **38 px** | Inter 500 | 1.4 |

**Alinhamento:** à esquerda em tudo, exceto capa de carrossel e peça de dados, que podem ser centralizadas.

**Itálico do Fraunces** só na palavra que carrega a virada da frase. Uma por peça, no máximo.

---

## 4. Os cinco templates

Toda peça cai num destes. **Não existe sexto.**

### T1 · Tese escura
Fundo `#2D0C19`. Frase grande em Fraunces claro, com **uma palavra ou linha em dourado**. Filete dourado de 4 px e 120 px de largura acima da frase. Selo da logo a 64 px no canto inferior direito, opacidade 70%.
**Sem imagem.** A frase é o objeto.

### T2 · Prova clara
Fundo `#F4F0E8`. Aspas grandes em `#C6A56C` (120 px) no canto superior esquerdo. Citação em Fraunces `#231F20`. Atribuição em Inter `#5F5558` no rodapé.

### T3 · Dados do evento
Fundo `#2D0C19` com brilho radial dourado sutil no topo. Nome do evento em Fraunces. Bloco de dados separado por filetes horizontais dourados de 1 px. **Legível em 2 segundos.** Selo da logo a 88 px, centralizado acima do nome.

### T4 · Lista
Fundo alternado conforme o combo. Itens numerados ou com marcador de losango dourado. Cada item com no máximo 12 palavras. **Máximo 5 itens.**

### T5 · Carrossel
- **Capa:** T1, com um indicador discreto de "arraste" no rodapé
- **Miolo:** fundo `#F4F0E8`, texto `#231F20`, número da tela no canto superior esquerdo em dourado
- **Última tela:** T1 de novo, com o selo da logo e o CTA

**Regra do carrossel:** **12 palavras por tela, teto absoluto.** Se não couber, vira duas telas.

---

## 5. Uso da logo

| Arquivo | Onde | Tamanho |
|---|---|---|
| `logo-ladies-fluency-selo.png` (só o monograma LF) | rodapé de peça, canto de carrossel | 64 px |
| `logo-ladies-fluency-academy.png` (com o nome) | peças de dados, última tela de carrossel | 88 a 120 px |

Arquivos em `../pagina-3-evento/site/assets/`.

**Nunca:** logo maior que a frase principal · logo sobre foto sem contraste · logo esticada ou recortada · duas logos na mesma peça.

---

## 6. Grafismo

Do repertório da própria logo: **lua crescente com raios · estrelas · rosa dos ventos · montanha · onda · lótus · ramo de louro.**

| Regra | |
|---|---|
| Traço | fino, 1 a 2 px, sempre dourado |
| Quantidade | **um símbolo por peça, no máximo** |
| Posição | canto ou atrás do texto com opacidade máxima de 12% |
| Proibido | ícone de biblioteca · emoji · ilustração de banco · gradiente colorido · sombra dura |

---

## 7. Prompt-base para o Claude Design

Colar isto antes de cada lote, e depois o texto da peça:

```
Crie uma peça de Instagram para a marca Ladies Fluency Academy.

FORMATO
1080 x 1350 px (4:5). Margem de segurança de 96px em todos os lados.
Os 180px inferiores não podem conter texto essencial.
A frase principal precisa caber no quadrado central de 1080x1080.

MARCA
Ladies Fluency Academy. Professora de inglês e oratória bilíngue para
mulheres, em Florianópolis. Estética mística e editorial: vinho profundo,
dourado envelhecido, textura sutil de papel. Nada de corporativo, nada de
neon, nada de gradiente colorido.

PALETA (usar apenas estes valores)
Fundo escuro  #2D0C19
Fundo claro   #F4F0E8
Dourado       #C6A56C
Dourado claro #E2C995
Texto claro   #FCFBF8
Texto escuro  #231F20

TIPOGRAFIA
Display: Fraunces, peso 300 ou 400 (serifada)
Corpo:   Inter, peso 400 ou 500
Frase principal: 72 a 96px, entrelinha 1.1, alinhada à esquerda
Rótulo: 28px, Inter 500, caixa alta, tracking 0.14em

REGRAS
- Uma ideia por peça. Sem poluição.
- Uma única palavra ou linha em dourado, para destaque. O resto em texto claro.
- Filete dourado de 4px e 120px de largura acima da frase principal.
- Grafismo permitido: lua crescente, estrelas, rosa dos ventos, montanha,
  onda, lótus, ramo de louro. Traço fino dourado, um por peça, opacidade
  máxima de 12% se estiver atrás do texto.
- Proibido: emoji, ícone de biblioteca, foto de banco, gradiente colorido,
  sombra dura, mais de uma logo por peça.

TEMPLATE: [T1 tese escura | T2 prova clara | T3 dados do evento | T4 lista | T5 carrossel]

TEXTO DA PEÇA:
[colar o bloco "Arte" da peça]
```

**Para carrossel**, acrescentar:

```
CARROSSEL de [N] telas, todas 1080x1350.
Tela 1 (capa): fundo escuro, frase em Fraunces, indicador de arraste no rodapé.
Telas de miolo: fundo #F4F0E8, texto #231F20, número da tela em dourado no
canto superior esquerdo. Máximo 12 palavras por tela.
Última tela: fundo escuro, logo Ladies Fluency Academy, CTA.
Consistência total entre as telas: mesma margem, mesma escala, mesma posição
do número.
```

---

## 8. Mapa: peça → template

### Combo Evento

| Peça | Template | Nota |
|---|:--:|---|
| EV-01 O anúncio | **T3** | dados + selo |
| EV-02 Por que só mulheres | **T2** | é uma citação de aluna |
| EV-03 O que acontece na tarde | **T4** | 5 itens |
| EV-04 O sem-papel | **T1** | 4 linhas curtas |
| EV-05 A Casa Viva | — | 🔴 fotos |
| EV-06 E se meu inglês não for bom | **T2** | citação de objeção, fundo claro |
| EV-07 Quem estará na sala | **T1** | |
| EV-08 Últimas vagas reais | **T3** | número grande |
| EV-09 A véspera | — | 🔴 foto ou vídeo |
| EV-10 O que você leva de lá | **T4** | 4 itens |
| EV-11 Networking na roda | **T2** | |
| EV-12 Contagem do lote 2 | **T3** | |
| **EV-C1** 5 sinais | **T5** | 7 telas |
| **EV-C2** A tarde por dentro | **T5** | 8 telas |
| **EV-C3** Quando dá o branco | **T5** | 7 telas |
| **EV-C4** É para você? | **T5** | 7 telas |

### Combo Emotional Speaking

| Peça | Template | Nota |
|---|:--:|---|
| ES-01 A trava não é vocabulário | **T1** | |
| ES-02 O segundo pensamento | **T1** | **a peça mais importante do combo** |
| ES-03 O corpo antes da palavra | — | 🔴 vídeo |
| ES-04 Por que você entende e não fala | **T1** | 4 linhas |
| ES-05 O aluno de dois anos | **T2** | |
| ES-06 A aluna que chorou | **T2** | |
| ES-07 Do básico ao avançado | **T1** | |
| ES-08 A que pedia o link | **T2** | tom leve |
| ES-09 A atleta | — | 🔴 foto |
| ES-10 O caderno | — | 🔴 foto |
| ES-11 Pedi demissão | — | 🔴 foto ou vídeo |
| ES-12 Por que saí do online | — | 🔴 foto |
| **ES-C1** Entende e não fala | **T5** | 7 telas |
| **ES-C2** O que a escola não contou | **T5** | 8 telas |
| **ES-C3** 3 coisas no seu corpo | **T5** | 7 telas |
| **ES-C4** Como aprendi sozinha | **T5** | 8 telas |

---

## 9. Ordem de produção

**Não gerar as 25 de uma vez.** Gerar um lote piloto, revisar, e só então soltar o resto.

| Lote | Peças | Por quê |
|:--:|---|---|
| **1 · piloto** | ES-02 (T1) · EV-01 (T3) · EV-C1 (T5, 7 telas) | testa os três templates que mais aparecem. **Se estes três saírem certos, o sistema está calibrado** |
| 2 | os T1 e T2 restantes | 11 peças |
| 3 | os T3 e T4 restantes | 5 peças |
| 4 | os carrosséis restantes | 7 carrosséis, 50 telas |

---

## 10. Checagem antes de publicar

- [ ] A frase principal cabe no quadrado central de 1080 × 1080
- [ ] Nada essencial nos 180 px de baixo
- [ ] Só duas cores de texto na peça
- [ ] Um símbolo, no máximo
- [ ] Uma logo, no tamanho certo
- [ ] Carrossel: 12 palavras por tela, no máximo
- [ ] Carrossel: número da tela na mesma posição em todas
- [ ] **Toda palavra em inglês revisada pela Jéssica** — ela é professora de inglês, e erro aqui custa mais que em qualquer outra marca
- [ ] Número de vagas é o número real (EV-08, EV-12)

---

**Base:** `01-COMBO-EVENTO.md` · `02-COMBO-EMOTIONAL-SPEAKING.md` · `00-LINHA-EDITORIAL-E-CALENDARIO.md` §6 · `../pagina-3-evento/site/styles.css` · logo em `../design/`
