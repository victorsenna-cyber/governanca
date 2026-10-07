# The Golden Temple · iteração L1–L2 de 26/09/2026

**Nova iteração validada localmente, ainda não enviada ao servidor.** O site anterior já está no ar segundo a auditoria canônica de 25/09. Esta entrega não executa L3, L4 ou L5.

Use **`site/` ou `THE-GOLDEN-TEMPLE-2026-09-26-L1-L2.zip`**. O ZIP abre diretamente na raiz do site, sem pasta intermediária. São 242 arquivos, incluindo 27 páginas, a 404 e a proposta Apache. `SHA256SUMS.txt` confere cada arquivo. Relatórios, ferramentas, backups, fontes canônicas e os 16 arquivos de avatares descartados não entram no pacote.

## L3 · upload pelo Victor

1. Fazer backup dos arquivos atuais e do `.htaccess` do domínio.
2. Extrair o ZIP ou copiar **o conteúdo de `site/`** para a raiz pública de `thegoldentemple.io` (a `public_html` atribuída a esse domínio). `index.html`, `404.html`, `assets/`, `css/`, `js/`, `en/`, `es/` e as rotas PT ficam diretamente nela. **Não criar uma pasta intermediária chamada `site` ou `The Golden Temple`.**
3. **Mesclar as regras de `.htaccess.proposta` com o `.htaccess` existente. Não substituir o arquivo do servidor nem apenas renomear a proposta por cima dele.** Preservar HTTPS e regras do provedor; conferir ordem e conflitos. Não foi criado `.htaccess` ativo neste pacote.
4. Conferir caminhos antigos divulgados fora dos previstos: `/masterclass`, `/v2`, `/the-golden-temple`, `/the-golden-temple-v2`. Informar caminhos adicionais ao responsável pela revisão.

## L4 · reauditoria no domínio antes de enviar à Prana

- Claude repete o gate de copy nas 27 rotas, testa HTTPS, recursos, idiomas, console, CTAs e performance real.
- Confirmar `www` → domínio raiz com **301**, caminhos antigos redirecionados e URL inexistente respondendo **404** com a página da marca, sem soft-404.
- Confirmar o vídeo da Carol e a prévia do link no WhatsApp. A imagem OG usa a URL nova `/assets/og/og-default.jpg`.
- Revisar a transcriação EN/ES, especialmente as ofertas e a home: `../REVISAO-TRANSCRIACAO-L6.md` e seu complemento da iteração.
- Reprovação volta à correção; **o link só vai à Prana depois de L4 passar**. Testes em celular físico e leitor de tela continuam sendo verificações humanas, não resultados comprovados por esta automação.

## O que já foi resolvido nesta rodada

Vídeo autorizado e incorporado; cadência e FAQ da Mentoria corrigidas; Visão Uterina com 1h30, online/presencial, R$ 333 e CTA de agendamento no topo; preço do Curso oculto com `hidden`; avatares removidos; 404 e OG prontas. Música e catálogo seguem os defaults já decididos, sem novos pedidos à cliente.

Sem framework ou build no servidor. Sem novo checkout, formulário, pixel, autoplay de áudio/vídeo, deploy ou configuração de domínio. O pacote usa `index,follow` nas 27 páginas e `noindex` na 404; robots não é controle de privacidade.

SHA-256 do ZIP: `fed5eb3e8ee6da9d5f5fc73d816d6338b67473c4ba4810e6bd71ec2e605581ad`.

Fonte vigente: `../../../ITERACAO-SITE-2026-09-25.md`. Evidências locais: `../REGISTRO-ITERACAO-2026-09-26.md` e `../_qa/iteration-2026-09-26/`. O pacote anterior fica no backup interno e não deve ser usado para este upload.
