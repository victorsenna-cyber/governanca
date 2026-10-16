# Página de download do presente: instalação

Duas peças: a **página** (`../landing/`, sobe no Hostinger) e a **planilha** com o Apps Script (`Code.gs`, nesta pasta), que guarda nome e WhatsApp de quem baixa.

## 1. Planilha e Apps Script (5 minutos)

1. Crie uma planilha nova no Google Sheets, por exemplo "Leads · Mapa do repositório".
2. Menu **Extensões → Apps Script**. Apague o que estiver no editor, cole o conteúdo de `Code.gs` e salve.
3. **Implantar → Nova implantação →** engrenagem **→ App da Web.**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
4. Autorize o acesso com a sua conta Google (o aviso "app não verificado" é normal em script próprio: **Avançado → Acessar**).
5. Copie a **URL do app da Web** (termina em `/exec`).

## 2. Página

1. Abra `../landing/index.html` e troque `COLE_AQUI_A_URL_DO_APPS_SCRIPT` pela URL do passo 1.5.
2. No Hostinger: **Gerenciador de Arquivos → `public_html` →** crie a pasta `mapa`.
3. Suba para dentro dela os dois arquivos de `../landing/`: `index.html` e `Mapa-Repositorio-Continuum.pdf`.
4. O endereço fica `https://continuumsystems.com.br/mapa/`.

## 3. Teste

Abra o endereço no celular, preencha com o seu nome e número e baixe. A linha tem que aparecer na aba **Leads** da planilha em poucos segundos. A coluna "link do whatsapp" abre a conversa direto.

## Origem do contato

Acrescente `?o=` ao link para saber de onde veio quem baixou: `.../mapa/?o=story`, `.../mapa/?o=bio`, `.../mapa/?o=dm`. Sem nada, grava `perfil`.

## Se mudar o Code.gs depois

**Implantar → Gerenciar implantações →** lápis **→ Versão: Nova versão.** Assim a URL continua a mesma. Uma "Nova implantação" gera URL nova, e aí a página precisa ser atualizada.

## O que a página faz se a planilha falhar

O download nunca espera mais de 3 segundos pela planilha: a pessoa sempre recebe o PDF. Se a URL ainda não estiver colada, a página entrega o PDF e não grava nada.
