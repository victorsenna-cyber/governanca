# REFERÊNCIAS DE UI E REPOSITÓRIOS-BASE — página-mãe The Golden Temple

> **Tipo:** pesquisa de referência técnica e estética · **Data:** 27/08/2026
> **Pedido:** *"algo como iamsahararose.com, mas com estética substancialmente superior. UX é interessante, UI deixa muito a desejar. Referências de UI altamente superiores, de qualquer mercado, desde que representem o nível de sofisticação — moderno, UI/UX avançado, com animação na página e hero com animação 2.5D."*
> **Regra de honestidade:** cada item marcado como **✅ verificado** (API consultada ou página aberta hoje) ou **🔎 listado** (aparece em listagem de terceiro, não aberto por mim).
> **Filtro aplicado:** todos os repositórios abaixo têm **mais de 40 dias de idade**; a maioria tem anos. Nenhum é repositório recém-criado.

---

## 1. O DIAGNÓSTICO DO PEDIDO

Sahara Rose resolve **arquitetura** e falha em **acabamento**. A distinção importa porque decide o que copiar de onde:

| Camada | Sahara Rose | O que buscamos |
|---|---|---|
| **Arquitetura da informação** | ✅ boa — menu de 8 itens, Music ligando ao Spotify, domínios separados por função | manter |
| **Ritmo de página** | 🟡 aceitável | melhorar |
| **Tipografia, grade, espaçamento** | ❌ genérico de tema WordPress | **substituir** |
| **Movimento** | ❌ praticamente ausente | **construir** |
| **Hero** | ❌ imagem estática | **2.5D animado** |

**Consequência para o briefing:** a referência de **estrutura** continua sendo Sahara Rose. A referência de **acabamento** tem de vir de outro mercado — e é por isso que o pedido de "qualquer mercado" está certo.

---

## 2. O QUE É, TECNICAMENTE, UM "HERO 2.5D"

Três famílias distintas, com custo e risco muito diferentes. Vale decidir qual antes de baixar qualquer coisa.

| Família | Como funciona | Peso | Risco |
|---|---|---|---|
| **A. Depth-map parallax** (*fake 3D*) | uma imagem + um mapa de profundidade em escala de cinza. Shader desloca pixels conforme o mouse ou o giroscópio | **leve** — 2 texturas | baixo |
| **B. Camadas paralaxe** | 3 a 6 PNGs em profundidades diferentes, movidos em velocidades distintas | leve | baixo, mas "chapado" |
| **C. Cena WebGL real** | geometria 3D, luz, material, câmera | **pesado** | alto — mobile e bateria |

**Recomendação para esta página: família A.** Com uma foto dela e um mapa de profundidade, o retrato ganha volume real ao mover o mouse — **e o mesmo shader serve para a logo**, dando profundidade à ankh e às najas sem modelar nada em 3D. É o efeito que mais impressiona por unidade de esforço, e é o único das três que não compromete o mobile.

---

## 3. REPOSITÓRIOS — a base para download

### 3.1 O núcleo do hero 2.5D

| Repo | Estrelas | Criado | Idade | Licença | Papel |
|---|---:|---|---:|---|---|
| ✅ **[`akella/fake3d`](https://github.com/akella/fake3d)** | 549 | 13/02/2019 | ~7,5 anos | sem licença declarada ⚠️ | **a implementação canônica** do depth-map parallax. HTML + shader. É a fonte de quase todo hero 2.5D que se vê por aí |
| ✅ **[`LuXDAmore/vue-fake3d-image-effect`](https://github.com/LuXDAmore/vue-fake3d-image-effect)** | 22 | 18/09/2019 | ~7 anos | **MIT** | o mesmo efeito **com licença limpa** e demo publicada. **Para uso comercial, preferir este ou reescrever o shader** |

> ⚠️ **Ponto jurídico que importa:** `akella/fake3d` **não declara licença**. Sem licença explícita, o padrão é "todos os direitos reservados" — serve para **estudar**, não para copiar e entregar a cliente. Usar a versão MIT, ou reescrever o shader a partir do princípio, que é público.

### 3.2 O movimento da página

| Repo | Estrelas | Criado | Licença | Papel |
|---|---:|---|---|---|
| ✅ **[`darkroomengineering/lenis`](https://github.com/darkroomengineering/lenis)** | **15.590** | 21/02/2022 | **MIT** | **o padrão de fato** do scroll suave em sites premiados. Mantido ativamente — último push em 27/08/2026. É o que separa "site com animação" de "site que parece caro" |
| ✅ **[`codebucks27/Smooth-Scroll-Next.js`](https://github.com/codebucks27/Smooth-Scroll-Next.js)** | 70 | 02/12/2023 | — | **starter pronto**: Next.js + Lenis + GSAP ScrollTrigger com paralaxe, demo publicada. Repo pequeno, fácil de ler inteiro |

### 3.3 Achados de alto interesse para o nosso caso

| Repo | Estrelas | Criado | Idade | Por que importa |
|---|---:|---|---:|---|
| ✅ **[`amirmushichge/cinematic-scroll-prompt-kit`](https://github.com/amirmushichge/cinematic-scroll-prompt-kit)** | 202 | 17/07/2026 | 41 dias | *"Reusable AI prompt and project brief system for cinematic scroll-driven 2.5D websites"* — **é literalmente um sistema de briefing para sites 2.5D com scroll cinematográfico.** O achado mais alinhado ao pedido |
| ✅ **[`pulkitxm/claude-directory`](https://github.com/pulkitxm/claude-directory)** | 512 | 10/06/2026 | 78 dias | *"Open-source AI interfaces built with Claude including hero sections, GLSL shaders, design systems, animations, 3D components"* — **biblioteca de heros, shaders e sistemas de design prontos** |
| ✅ **[`AxiomeCG/awesome-threejs`](https://github.com/AxiomeCG/awesome-threejs)** | 970 | 01/07/2022 | ~4 anos | curadoria de recursos Three.js — a porta para achar o efeito específico quando a direção estiver fechada |

### 3.4 Fonte que não consegui verificar pela API

**Codrops / `tympanus`** — a busca da API não retornou a organização (provavelmente por indexação, não por inexistência). É historicamente **a maior fonte pública de demos de hero, transição de página e efeito de imagem**, cada uma com repositório e artigo. **Vale abrir `tympanus.net/codrops` manualmente** — é onde estão os efeitos que os sites premiados copiam.

---

## 4. REFERÊNCIAS VISUAIS — o nível de acabamento

### 4.1 Verificadas hoje

Nenhuma. **Awwwards e sites premiados são pesados em JavaScript e não rendem por fetch de HTML** — precisam ser abertos no navegador para serem julgados. Por isso a lista abaixo está marcada como listada, não verificada.

### 4.2 Listadas — Sites of the Day do Awwwards, agosto/2026

🔎 De [awwwards.com/websites/sites_of_the_day](https://www.awwwards.com/websites/sites_of_the_day/), premiados nos últimos dez dias:

| Site | Data | Por que olhar |
|---|---|---|
| **MIU MIU — "A House that we shaped"** | 25/08/2026 | luxo de moda. **É o registro exato que a página-mãe precisa**: sobriedade com movimento, ouro sem excesso |
| **LIKOVA** | 19–20/08/2026 | listado duas vezes em uma semana |
| **The Watch** | 17–18/08/2026 | relojoaria — categoria que resolve "ornamento caro sem poluição" melhor que qualquer outra |
| **Kononenko Architectural Bureau** | 24/08/2026 | arquitetura: grade rigorosa, tipografia grande, muito ar |
| **Cipher** · **Oimachi** · **/zeroz** | 21–25/08/2026 | — |

### 4.3 As três categorias de mercado que valem a garimpagem

Como ele disse "qualquer mercado", a busca fica mais produtiva se for por **problema equivalente**, não por assunto:

| Categoria | Problema que ela resolve, igual ao nosso |
|---|---|
| **Joalheria e relojoaria de luxo** | ouro e ornamento **sem** parecer barato — exatamente a tensão "clean × símbolos" da Prana |
| **Perfumaria** | vender algo invisível e sensorial por meio de imagem e ritmo, sem explicar |
| **Museus e fundações culturais** | várias frentes sob uma instituição — **o mesmo problema da escola com seis frentes** |

**A quarta, que ninguém pensa e é a mais próxima:** **casas de ópera e companhias de dança**. Têm programação múltipla, artistas, música, ingressos e doações sob uma marca só — e resolvem visualmente o cruzamento de *corpo, arte e instituição*, que é literalmente o Templo Dourado.

---

## 5. A STACK QUE EU RECOMENDARIA

Coerente com o que já está construído — os bundles atuais são HTML/CSS/JS estáticos, sem framework.

```
Lenis          → scroll suave           (MIT, 15,6k ★, ativo)
GSAP + ScrollTrigger → revelação por dobra e sequência
Shader depth-map → hero 2.5D            (base MIT ou reescrito)
SVG animado    → geometrias por dobra   (já é o que usamos)
```

**Por que não React/Next:** os quatro bundles atuais são estáticos e sobem por gerenciador de arquivos. Trocar de stack agora significa reconstruir tudo — e não é o gargalo desta conta. **Lenis e GSAP entram em página estática sem nenhuma migração.**

---

## 6. O QUE FAZER COM ISSO

1. **Abrir os cinco sites do Awwwards** e escolher **dois** — um por registro (sobriedade) e um por movimento. Sem julgar o assunto, só o acabamento.
2. **Baixar `Smooth-Scroll-Next.js`** para ver Lenis + GSAP funcionando junto, mesmo que a stack final seja estática.
3. **Baixar `cinematic-scroll-prompt-kit`** — é sistema de briefing para exatamente este tipo de página.
4. **Decidir a família do hero** (§2). Recomendo a A.
5. **Pedir a ela as páginas internacionais** que prometeu no áudio de 19/08 — é o gosto dela sem intermediação, e ainda não chegou.

**E a decisão que precede todas:** uma foto dela em alta resolução, de frente, com fundo separável. **Sem isso não há hero 2.5D** — o efeito depende de uma imagem com profundidade mapeável, e a foto que está nas páginas hoje é a do Despertar do Prazer Sagrado, que ela já reprovou.

---

**Fontes verificadas em 27/08/2026 via API do GitHub:** [akella/fake3d](https://github.com/akella/fake3d) · [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) · [codebucks27/Smooth-Scroll-Next.js](https://github.com/codebucks27/Smooth-Scroll-Next.js) · [LuXDAmore/vue-fake3d-image-effect](https://github.com/LuXDAmore/vue-fake3d-image-effect) · [amirmushichge/cinematic-scroll-prompt-kit](https://github.com/amirmushichge/cinematic-scroll-prompt-kit) · [pulkitxm/claude-directory](https://github.com/pulkitxm/claude-directory) · [AxiomeCG/awesome-threejs](https://github.com/AxiomeCG/awesome-threejs)

**Base:** `REFERENCIAS-PAGINA-MAE-2026-08-20.md` · `ATIVOS-E-LINKS.md` · `DESTILACAO-CALL-2026-08-11.md` C-77 a C-94
