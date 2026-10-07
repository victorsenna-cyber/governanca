# HANDOFF — The Golden Temple

> Estado: **CONSTRUÍDA E VALIDADA LOCALMENTE · NÃO PUBLICADA**
> Verificado em: 27/07/2026 · America/Sao_Paulo
> Destino previsto: gerenciador de arquivos da Hostinger, preservando a árvore do bundle

## 1. Entrega

A página-mãe foi construída como bundle estático multifile em `04 - web design/the-golden-temple/`. Não exige framework, instalação, compilação ou serviço de backend.

Direção aplicada:

- hero claro, mineral e dourado, sem figura humana, mãos ou fundo dos frames de referência;
- Flor da Vida autoral em SVG, estática e de contraste baixo, apoiada por um campo mais denso de brilhos;
- copy do hero em placa de vidro fosco e ações em liquid glass dourado com raio de 8 px;
- espiral S.E.R. construída com arcos de 90 graus e raios proporcionais à sequência de Fibonacci;
- movimento concentrado em luz, eixo dourado e revelações; sem parallax ou animação da Flor da Vida;
- Fraunces variável hospedada no próprio bundle para títulos com maior legibilidade;
- retrato real da Prana tratado com recorte orgânico, máscara, gradação e halo;
- cinco pontos visíveis de chamada: header e dobras D1, D4, D7 e D9;
- dobras próprias para reconhecimento, custo silencioso, Método S.E.R., arte, experiências, Prana e selamento;
- arquitetura auditada contra o kernel ativo de web design, UI/UX, copy, geração de resultados e voz da Prana;
- fase pública atual somente em português.

## 2. Estrutura

```text
the-golden-temple/
├── index.html
├── CREATIVE-DIRECTION.md
├── HANDOFF.md
├── assets/
│   ├── fonts/
│   ├── geometry/
│   ├── icons/
│   └── images/
├── css/
│   ├── styles.css
│   └── motion.css
└── js/
    ├── config.js
    ├── hero-scene.js
    └── main.js
```

## 3. Configuração antes da publicação

Preencher somente valores confirmados em `js/config.js`:

```text
links.despertar
links.felinas
links.mentoria
links.instagram
links.contact
analytics.enabled
analytics.metaPixelId
```

Links vazios permanecem ocultos. A página preserva `origem` e parâmetros `utm_*` ao encaminhar para destinos configurados.

## 4. Validação concluída

- viewports: 390 × 844, 768 px e 1440 px;
- zero overflow horizontal;
- conteúdo e CTA do hero disponíveis na primeira tela mobile;
- navegação por âncoras estabilizada mesmo com `content-visibility`;
- navegação por teclado e foco visível;
- conteúdo essencial disponível sem JavaScript;
- `prefers-reduced-motion` elimina movimento sem ocultar informação;
- nenhuma requisição externa;
- recursos locais e imagem lazy-load verificados;
- console sem erros;
- HTML validado com `html-validate`, um H1 e IDs únicos;
- JavaScript validado com `node --check`;
- Lighthouse local: **Performance 95 · Acessibilidade 100 · Boas Práticas 100 · SEO 100**;
- FCP 1,8 s · LCP 2,2 s · TBT 31 ms · CLS 0,0001.

## 5. Gates ainda abertos

- P-PM-01: bio final e credenciais publicáveis;
- P-PM-02: fotos definitivas do book e acervo artístico;
- P-PM-03: referência do site-modelo, agora opcional para iteração e não bloqueante para a direção;
- P-PM-04: domínio, diretório público da Hostinger e decisão da fase em inglês;
- P-PM-05: músicas ou players com autorização para embed;
- P-PM-06: URLs oficiais das experiências e canais;
- aprovação escrita da composição, copy e uso do retrato atual.

O retrato existente é um ativo real já fornecido no acervo. Permanece provisório até a seleção final do book.

## 6. Publicação na Hostinger

Quando os gates estiverem fechados e houver autorização específica:

1. definir o domínio ou subdiretório público;
2. preencher `js/config.js`;
3. executar nova regressão local;
4. enviar **todo o conteúdo** da pasta, mantendo `assets/`, `css/` e `js/`;
5. testar a URL pública em desktop e mobile;
6. testar todos os destinos, UTMs e medição;
7. registrar a URL e a autorização em `STATUS.md` e `DIARIO-DE-BORDO.md`.

Não enviar relatórios, screenshots de QA ou arquivos temporários. Nenhum deploy, domínio, Pixel ou checkout foi alterado nesta entrega.
