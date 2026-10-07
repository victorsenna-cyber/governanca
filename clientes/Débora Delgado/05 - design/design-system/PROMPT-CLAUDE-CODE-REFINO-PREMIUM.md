# Prompt para o Claude Code — REFINO PREMIUM do Design System

> Use quando o design system já existe (tokens + componentes + styleguide) mas ficou
> "flat / genérico". Este prompt REFINA o que existe, não recomeça. Abra o terminal em
> `05 - design/design-system`, logado na conta certa, rode `claude` e cole o bloco ===.

===

O design system que você criou está correto na fundação (paleta, contraste, eneagrama,
tokens, fontes), mas ficou **flat e genérico**: falta a camada premium. Sua tarefa é
ELEVAR o nível visual, sem recomeçar e sem quebrar os tokens existentes. Leia primeiro a
seção nova do brief.

## Leia primeiro
1. `./BRAND-BRIEF.md` → seção **"Camada Premium / Atmosfera"** (a direção nova) e a
   seção **"Tipografia"** atualizada (serifada editorial).
2. Seus próprios arquivos atuais: `design-tokens.css`, `tokens.json`, `styleguide.html`,
   `src/`. Você vai estendê-los, não substituí-los.

## Mudanças a aplicar

### 1. Tipografia (troca de fonte dos títulos)
- Trocar a fonte de títulos de **Jost** para **Fraunces** (Google Fonts), serifada
  editorial. Manter **Inter** no corpo. Documentar **Newsreader** como alternativa
  comentada. Ajustar escala/tracking para a serifada respirar (títulos em caixa mista;
  eyebrows/rótulos podem seguir caixa-alta com tracking).

### 2. Fundo "blueprint claro"
- Base **mais clara** que o areia atual: quase-branco quente (`#FAF8F3`–`#F6F2EA`) com
  **gradiente muito sutil** (radial/linear) para dar volume.
- **Grid técnico** ao fundo: linhas finíssimas (opacidade ~4–6%, petróleo ou musgo),
  estilo papel de arquitetura. Como token reutilizável (background-image em CSS var).
- **Glow radial** suave atrás de hero/eneagrama (halo musgo ou dourado bem diluído).

### 3. Profundidade
- **Orbes desfocados** (blur alto, baixa opacidade, musgo/areia/dourado) como camada de
  atmosfera em seções-chave. Tradução clara do "shader/noise" das referências.
- **Glassmorphism discreto** (fundo semitransparente + blur leve + borda 1px com luz) só
  em cards-âncora (oferta, depoimento). Não em tudo.
- **Sombras suaves em camadas** (substituir a sombra dura padrão por elevação sutil).

### 4. Botões / CTA — efeito espelho/vidro
- CTA primário com **acabamento de vidro**: highlight sutil no topo, gradiente leve no
  fundo do botão, sombra de profundidade, **borda fina com luz dourada**. Hover
  intensifica o brilho de leve. Sem neon.

### 5. Ritmo dos blocos
- Variar o tratamento de fundo entre seções (lisa → grid → orbe → faixa musgo suave) e
  os alinhamentos/larguras (full-bleed, centrado, assimétrico). Tudo claro/terroso.

## Regras inegociáveis (mantidas)
- **Tudo CLARO/terroso.** NÃO inverter para dark. A referência continuumsystems é dark;
  aqui é a versão clara do mesmo conceito.
- **Sutileza é a régua:** se parecer "efeito", está forte demais. Deve parecer luz natural
  e papel fino. Sem gradiente neon, sem glow forte, sem blur borrado, sem glass em tudo.
- **Zero travessões.** Manter contraste **AA** (cuidado: fundo mais claro pode reduzir
  contraste do texto claro — rechecar todos os pares).
- Manter o eneagrama (coordenadas validadas) e a digital-labirinto.
- Tudo **token-driven** e exportável (CSS vars + JSON), servindo React e vanilla.

## Passo a passo
1. Releia o brief e me diga, em até 6 linhas: a nova fonte aplicada, como vai fazer o
   grid + gradiente + orbes (em tokens), e o tratamento do botão-vidro.
2. Após meu ok, aplique nos tokens e componentes; atualize o styleguide para mostrar:
   fundo blueprint, botão-vidro (com hover), card glass, e a alternância de seções.
3. Recheque contraste AA, zero travessões, e que continua importável pelo Claude Design.
4. Abra/atualize o `styleguide.html` para revisão.

===

## Notas para o Victor (fora do prompt)
- Esse refino reaproveita o trabalho já feito; não joga fora o design system.
- Quando terminar, abra o `styleguide.html`, tire print e me mande, que eu confiro o
  nível premium (gradiente, grid, botão-vidro, fonte serifada, ritmo dos blocos).
- Se o resultado ainda ficar tímido, a gente sobe a intensidade num segundo passe.
