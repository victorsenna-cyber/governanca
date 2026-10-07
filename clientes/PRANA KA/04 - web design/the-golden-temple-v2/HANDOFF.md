# HANDOFF — The Golden Temple V2

> Estado: **CORRIGIDA LOCALMENTE · NÃO PUBLICADA**
> Verificado em: 04/08/2026 · America/Sao_Paulo
> Origem preservada: `04 - web design/the-golden-temple/`
> Destino previsto: gerenciador de arquivos da Hostinger, preservando todo o bundle

## 1. Resultado da correção

A V2 agora cumpre a função de página-mãe: explica o Templo, torna a lógica iniciática compreensível e conduz a visitante para uma jornada concreta.

- D1 foi preservada integralmente;
- D2 a D9 receberam a copy literal de `COPY-GOLDEN-TEMPLE-V2.md`;
- a qualificação de público entrou no topo de D2, desvio exigido pelo congelamento do hero;
- Curso e Mentoria mostram jornadas ordenadas, forma de participação e CTA próprio;
- D6 passou a ser o clímax visual único;
- D7 e D9 foram reduzidas para contraste médio;
- o placeholder comercial saiu da vitrine, mas o fallback fail-closed permaneceu no código;
- a chave `despertar` foi substituída por `curso` em toda a interface;
- a V1 não foi alterada.

## 2. Estrutura

```text
the-golden-temple-v2/
├── index.html
├── robots.txt
├── llms.txt
├── CREATIVE-DIRECTION.md
├── HANDOFF.md
├── assets/
├── css/
│   ├── styles.css
│   └── motion.css
└── js/
    ├── config.js
    ├── hero-scene.js
    └── main.js
```

O bundle é estático, multifile e não depende de framework, build ou backend.

## 3. Destinos e comportamento

Configuração atual em `js/config.js`:

- `links.curso`: `https://thegoldentemple.io/curso`;
- `links.mentoria`: `https://thegoldentemple.io/mentoria`;
- `links.felinas`, `links.instagram` e `links.contact`: vazios;
- `analytics.enabled`: `false`.

Os CTAs das duas jornadas já existem no HTML e continuam disponíveis sem JavaScript. Quando o JavaScript carrega, ele preserva `origem`, `utm_*` e `funnel` ao encaminhar e mantém o fallback oculto. Com uma URL vazia, o mecanismo fail-closed remove o destino e revela o aviso local. O portal sazonal só aparece quando `links.felinas` receber uma URL real.

Verificação HTTP em 04/08/2026:

- Mentoria: **HTTP 200**;
- Curso: **HTTP 404**.

Portanto, o destino do Curso está codificado conforme a spec, mas ainda não é um caminho público funcional. Publicar a página-mãe antes de `/curso` responder 200 criaria uma saída quebrada.

## 4. Tokens

As 26 ocorrências hexadecimais antes dispersas foram migradas para 25 tokens funcionais em `:root`. Não houve colapso de cores próximas. A única consolidação foi técnica: as duas declarações de máscara do retrato compartilham `--portrait-mask-solid`, pois cumprem exatamente a mesma função nos prefixos padrão e WebKit.

Resultado da varredura: **38 valores hexadecimais em `:root` e zero fora de `:root`**.

## 5. Validação concluída

- `html-validate` limpo;
- `node --check` limpo em `config.js`, `main.js` e `hero-scene.js`;
- um H1 e zero IDs duplicados;
- zero recursos locais ausentes;
- 77 de 77 blocos públicos de `COPY-GOLDEN-TEMPLE-V2.md` encontrados literalmente no HTML;
- zero travessões na copy pública;
- zero ocorrências do placeholder anterior, da chave `despertar` e da rota relativa da Mentoria;
- conteúdo textual essencial disponível sem JavaScript;
- hashes do hero preservados:

```text
Bloco D1 no index.html: F6985DE03DE00F6DD958FCC5CAEEC5605735122E2BFF9FDD3C57D5E7350A2AE8
js/hero-scene.js:       097FFA64BAE2C2EDC36A1C5DC7FAA28634FB81700B3D2B673FB89FAD07753DCE
hero-orb.svg:           05463F4EEF5DEA7C9F821978CE69AE73EEC67F2CF79BCCF13826026EE1928480
flower-of-life.svg:     0481435625EB71432326587BA736F315DDB111302D3EF78AF787E35F2C22A789
```

A inspeção visual automatizada desta correção não pôde ser repetida no navegador integrado porque a origem `file://` foi bloqueada pela política do navegador. A regressão visual em 390, 768, 1024, 1100 e 1440 px deve ser executada em uma origem HTTP antes da publicação. Os resultados Lighthouse e de overflow da versão anterior não são reapresentados como se fossem desta correção.

## 6. Gates de publicação

- fazer `https://thegoldentemple.io/curso` responder HTTP 200 e validar a jornada completa;
- publicar a Masterclass e preencher `links.felinas` se o portal sazonal for permanecer nesta página;
- obter aprovação escrita da nova copy, composição e retrato;
- repetir a regressão visual em origem HTTP, incluindo teclado e movimento reduzido;
- confirmar domínio ou subdiretório final na Hostinger;
- manter analytics e Pixel desligados até autorização específica.

Nenhum deploy, upload na Hostinger, domínio, checkout, Pixel, campanha ou arquivo da V1 foi alterado nesta correção.
