# CLAUDE.md — `04 - web design` · Página "Seu Eixo"

> Reescrito 08/07/2026. **Fonte única do build: `PLANO-PAGINA-SEU-EIXO.md`** (copy de produção, curva de voltagem, racional visual por dobra). Este arquivo só diz como operar a pasta. Versões e docs anteriores: `_arquivo/` (leitura opcional, nunca fonte).

## Arquitetura vigente (decisão 08/07)
- **`index.html` ÚNICO e autocontido** em `build/`: CSS inline, SVGs estáticos inline (eneagrama/digital sem animação), JS mínimo opcional (FAQ, sticky CTA, virada de lote por constante de data). Sem React/Next/build step. Destino: deploy simples + embed/subdomínio no Wix.
- A pasta `_arquivo/landing-versoes/landing-v4/` é a última versão Next.js preservada: serve como **referência de UI aprovada** (componentes, tokens em `styles/design-tokens.css`), não como base de código.

## Regras (inegociáveis)
1. Seguir o plano dobra a dobra: copy é a do plano (já auditada fable5+stop-slop+debora-voice); quem constrói não reescreve copy.
2. Paleta e pesos: `direção-design-codex.débora.md` (raiz do projeto) + racional visual por dobra do plano. Um único clímax escuro (D8).
3. Skills: `ui-ux-pro-max` (UI) + `debora-voice` (qualquer ajuste de texto) + método `METODO-PAGINA-DE-VENDAS.md` (gate Parte 5).
4. Oferta/preços/datas: `../03 - tráfego pago/OFERTA-CANONICA.md` (lotes 97/197/257 · viradas 28/07 e 07/08). Nunca hardcodar fora do bloco de constantes.
5. Pixel Meta + eventos conforme plano §0. Nada vai ao ar sem aprovação Débora (copy) e Victor (publicação).

## Estrutura da pasta
`PLANO-PAGINA-SEU-EIXO.md` (contrato do build) · `build/` (index.html e assets finais) · `_arquivo/landing-versoes/landing-v4/` (referência UI preservada) · `referências/` + `REFERENCIAS-MAP.md` (inspiração técnica) · `screenshots/` (estado visual) · `_arquivo/` (docs superados + landings anteriores).

## Saída esperada
`build/index.html` + lista de pendências (placeholders, aprovações). Não publicar.
