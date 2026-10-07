# L5–L6 · execução e tradução

Tese visual: o mesmo templo editorial de L1–L4, com marfim, rubi e ouro; imagens autorais grandes, tipografia cheia e contraste concentrado no convite à escolha.

Plano: O Templo explica escola, linhagens, dimensões e público; Método S.E.R. detalha os cinco passos; Caminhos apresenta três destinos; Arte organiza canais oficiais e identifica o catálogo ainda sem links; Prana apresenta a guia com os textos aprovados. Cada página termina em um próximo passo existente.

Interação: revelações de 24px, geometrias de entrada e imagens em parallax suave. HTML completo e links nativos antes de JS. O 2.5D continua exclusivo das homes.

Diretor/sistema: reaproveitar tokens e componentes; não reabrir estética ou arquitetura de conversão. Designer: alternar hero em duas colunas, faixas editoriais e encerramento rubi com rosa. Cards somente para escolha de destino. Cada dobra recebe imagem ou geometria. Celular empilha sem altura fixa em texto, acomodando EN/ES.

Copy: público, diagnóstico, pivô, oferta, objeções e sequência são os das fontes já aprovadas. L5 usa excertos literais com mapa de fonte. L6 traduz o corpo; headlines/promessas/CTAs/ofertas recebem comentário REVISAR: transcriação. Não cortar 20%, inventar cena ou refazer arquitetura: essas orientações genéricas da skill de copy cedem ao contrato literal. Produtos, marca e depoimentos originais ficam intactos; tradução do depoimento aparece abaixo, entre colchetes e com idioma declarado.

Estados: links e botões herdam repouso/sobre/foco/ativo. Catálogo sem URL fica EM BREVE, sem link fictício. Não há formulário, carregamento remoto ou novo estado transacional. Som continua opt-in e sem faixa inventada.

Validação deste lote: copy literal PT, corpus de tradução sem unidade faltante, original dos depoimentos preservado, rotas locais equivalentes, três larguras, no-JS e inspeção visual. Auditoria integral de publicação, Lighthouse, sitemap e robots permanecem em L7. Não declarar teste em aparelho físico: navegador local emulado.

## Contraste dos pares base

Razões calculadas por luminância relativa sRGB, sem imagem/overlay. Todos superam 4,5:1. Isso verifica os pares abaixo, não certifica o contraste de cada pixel do site.

| Papel | Frente / fundo | Razão |
|---|---|---:|
| Corpo | #211a18 / #faf5eb | 15,77:1 |
| Secundário e microcopy clara | #554743 / #f3ebdd | 7,49:1 |
| Ouro textual | #805b27 / #f3ebdd | 5,15:1 |
| Botão primário | #faf5eb / #6d2338 | 9,92:1 |
| Texto do fecho | #faf5eb / #481625 | 13,64:1 |
| Ouro sobre fecho | #d8b66d / #481625 | 7,64:1 |

Foco herda currentColor com contorno de 3px. Campos e ícones de formulário não existem. Conferência integral de foco, texto sobre imagem e tecnologia assistiva continua na auditoria L7.

## Auditor / crítico / juiz — registro sequencial

1. L5: 15 casos de renderização aprovados antes de montar L6. Institucionais revistas em capturas de hero e páginas completas; informação e decisão separadas visualmente.
2. L6: corpus de 380 unidades. Nomes e citações preservados, 332 unidades com tradução/transcriação e sete títulos de passagens com glossas abaixo do nome original. Nenhuma mudança da oferta ou da ordem para acomodar idioma.
3. Achado do auditor: o seletor legado `.passage-list span` fazia a tradução auxiliar herdar peso de índice. Devolvido ao designer e corrigido com seletor específico; peso 400 verificado em EN/ES.
4. Achado editorial: CTAs em inglês/espanhol e promessas exigem decisão final de transcriação; 296 comentários e índice de revisão gerados. Não são aprovados comercialmente pelo próprio executor.
5. Gate de lote: L5 e L6 aptos para revisão local. Sem declaração de aprovação de publicação, teste em aparelho físico, leitor de tela ou Lighthouse. Pendências explícitas no registro de 20/09.
