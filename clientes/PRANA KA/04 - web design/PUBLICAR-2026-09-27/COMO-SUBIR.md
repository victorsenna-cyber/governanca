# Como subir — thegoldentemple.io · 27/09/2026

**Arquivo único:** `thegoldentemple-2026-09-27.zip` (242 arquivos, 12,9 MB). SHA-256 em `SHA256.txt`.

É o pacote L1–L2 do Astra, com uma diferença: o `.htaccess.proposta` virou um **`.htaccess` completo**, que cobre HTTPS, www → raiz, caminhos antigos e a página 404. **Não tem nada para juntar.**

## Passo a passo — hPanel da Hostinger

1. **Gerenciador de arquivos** → abrir a `public_html` do domínio `thegoldentemple.io`
2. Selecionar tudo e **apagar**. ⚠️ **Exceção: se existir a pasta `.well-known`, deixar** — é dela que depende a renovação do certificado SSL
3. **Upload** do `thegoldentemple-2026-09-27.zip` para dentro da `public_html`
4. Clicar com o botão direito no zip → **Extrair** → na própria `public_html`
5. Conferir que `index.html`, `.htaccess` e as pastas `en/`, `es/`, `assets/` ficaram **direto na `public_html`**, e não dentro de uma subpasta
6. Apagar o zip da `public_html`
7. **Limpar o cache**: hPanel → Site → Performance → *Limpar cache* (e o do CDN, se estiver ativo)

Pronto: me avise que eu faço a reauditoria no ar.

## Se algo quebrar

| Sintoma | Causa provável | Saída |
|---|---|---|
| site em loop de redirecionamento | o painel também força HTTPS e as duas regras brigam | apagar o bloco `# 2` do `.htaccess` |
| arquivos listados em vez do site | extraiu dentro de uma subpasta | mover o conteúdo para a raiz da `public_html` |
| versão antiga aparecendo | cache | passo 7, e testar em aba anônima |
