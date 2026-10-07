# The Golden Temple · pacote L7

**Não publicado. Aguardando liberação editorial e revisão humana.**

`site/` e `THE-GOLDEN-TEMPLE-L7.zip` contêm somente o site estático. O ZIP contém os arquivos da raiz do site, não uma pasta intermediária. `SHA256SUMS.txt` registra o hash de cada arquivo entregue. Relatórios, ferramentas, caches e fontes canônicas não entram no ZIP.

## Antes de qualquer upload

1. Decidir a autorização do vídeo da Carol e resolver o marcador de copy pendente nas três homes.
2. Aprovar as transcriações EN/ES: índice em `../REVISAO-TRANSCRIACAO-L6.md`.
3. Validar a FAQ da Mentoria que menciona checkout, a referência “Desde 2021” e demais divergências de fonte já registradas. Não corrigidas por inferência.
4. Decidir áudio e catálogo de singles/DJ sets: hoje há links dos canais oficiais, sem player com faixa nem catálogo individual inventado.
5. Executar revisão cruzada Claude/Victor, teste em celular físico e navegação com leitor de tela.
6. Autorizar separadamente publicação e destino. O domínio declarado no briefing é `thegoldentemple.io`; não foi configurado pelo executor.

## Quando a publicação for autorizada

- Os caminhos são root-relative: servir na raiz do domínio, não em uma subpasta.
- O pacote usa `index,follow`, robots permissivo e sitemap com as 27 URLs canônicas. **Não enviar o pacote a uma prévia pública sem controle de acesso ou proteção de indexação.** Robots não é mecanismo de privacidade.
- Hospedagem deve servir os arquivos com HTTPS e MIME corretos; validar cache/compressão, 404 e redirects no ambiente real. Nada disso foi configurado neste lote.
- Sem framework ou build no servidor. JavaScript melhora a experiência, mas conteúdo e navegação existem no HTML.
- Animações utilizam as três bibliotecas CDN aprovadas, com SRI. Se o CDN falhar ou o visitante preferir movimento reduzido, o conteúdo continua acessível.
- WhatsApp/Spotify/YouTube usam os destinos oficiais recebidos. Nenhum checkout, formulário, pixel ou áudio automático foi ativado.
- Testar novamente após subir: 27 rotas, recursos, idiomas, canonical/hreflang, Lighthouse e fluxos. Os resultados locais não substituem essa conferência.

Fontes e gates completos: `../REGISTRO-2026-09-21.md` e `../SPEC-L7.md`.
