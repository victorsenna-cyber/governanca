# CLAUDE.md — Design System Débora Delgado

Instruções operacionais para o **Claude Code (CLI)** trabalhar DENTRO desta pasta
(`05 - design/design-system`) construindo o design system da marca Débora Delgado.
Leia também `PROJECT.md` (o quê), `SCOPE.md` (fronteiras), `SKILL.md` (ponteiro da
skill) e, como **input principal**, `BRAND-BRIEF.md` (a direção de marca já destilada).

---

## 0. Regra de ouro

**Gere o design system A PARTIR do `BRAND-BRIEF.md`. Não invente marca.**
A paleta, a tipografia e os elementos gráficos já foram decididos (arte oficial +
decisão de 25/06). Seu trabalho é **traduzir** essa direção em tokens e componentes
reutilizáveis — refinando contraste e acessibilidade — não propor uma identidade nova.

Se uma escolha não está no brief, derive-a do brief (proporção, tom, do/don't), não
de um template genérico de "curso online".

---

## 1. Skill a invocar

Use **`ui-ux-pro-max`** (instalada em `07 - skills/ui-ux-pro-max-skill-main/`).
Subskill relevante: **design-system** (e **brand** para tratamento de identidade).
Detalhes de caminho e invocação em `SKILL.md` desta pasta.

- Rode a geração de design system da skill como **ponto de partida de raciocínio**
  (padrões, anti-patterns, checklist de acessibilidade), mas **sobrescreva** cor,
  tipografia e elementos com os valores canônicos do `BRAND-BRIEF.md`. O output da
  skill é genérico; o brief manda.

---

## 2. Formato do entregável (compatível com Wix)

Destino final: **embed em Wix (HTML/CSS)**. Portanto:

- **Tokens como CSS custom properties** (`:root { --cor-...: ...; }`) — reutilizáveis,
  sem build, sem framework.
- **HTML/CSS puro e autocontido.** Nada que dependa de toolchain.
- O `styleguide.html` deve abrir direto no navegador e consumir os mesmos tokens.

---

## 3. O que NÃO fazer

- **Não** usar React, Vue, Tailwind, ou qualquer dependência/build no entregável final.
  (Pode-se consultar a skill, mas o output é HTML/CSS puro.)
- **Não** produzir nada infantil, "fofo", hype ou genérico ("template de curso").
  Ver lista anti-AI-slop no `BRAND-BRIEF.md`: sem gradiente neon, emoji na arte,
  ícone 3D brilhante, glow, simetria perfeita de template, dourado chapado.
- **Não** inventar cores/fontes fora do brief. Refine, não substitua.
- **Não** construir a landing nem criativos aqui (isso é `04` e `03` — ver `SCOPE.md`).
- **Não** alterar arquivos de input (`BRAND-BRIEF.md`, `OFERTA-CANONICA.md`).

---

## 4. Fluxo padrão

1. **Ler** `BRAND-BRIEF.md` (paleta, tipografia, elementos, do/don't) + `PROJECT.md`.
2. **Consultar** a skill `ui-ux-pro-max` (subskill design-system) para padrões e
   checklist — tratar como apoio, não como verdade de marca.
3. **Gerar `design-tokens.css`**: cor (com variações + contraste WCAG), tipografia
   (escala + pesos + tracking), espaçamento, raio, sombra, nomes semânticos.
4. **Gerar `styleguide.html`**: renderiza a paleta, a escala tipográfica e os
   componentes-alvo (ver `PROJECT.md`) consumindo os tokens.
5. **Validar contraste/acessibilidade**: texto petróleo sobre areia, CTA, estados de
   foco/hover. Mira **WCAG AA (4.5:1)** para texto.
6. **Documentar uso** (`README.md`): como copiar os tokens para o Wix e usar os
   componentes.
7. **Encerrar** com: arquivos criados + resumo curto + pendências.

---

## 5. Saída esperada ao final

```
Arquivos: [lista]
Resumo: [até 5 linhas]
Pendências: [se houver]
```
