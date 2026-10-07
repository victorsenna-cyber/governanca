---
name: language-extractor
description: Extrai o sistema de comunicação (voz) de uma pessoa a partir da fala real dela — transcrições de calls, aulas, áudios, textos — e o transforma em perfil linguístico, mapa de comunicação para o cliente, e auditoria de copy. Use quando precisar escrever copy/conteúdo na voz autêntica de um cliente/mentor/marca pessoal, ou auditar se um texto soa como a pessoa. Genérico e reutilizável entre projetos.
---

# language-extractor — Extração de Linguagem

Destila a voz de alguém a partir da fala real (não inventa estilo: minera padrões).
Saídas: perfil linguístico, mapa para o cliente (over-delivery), regra de voz, auditoria.

## Quando usar
- Antes de escrever copy/conteúdo no nome de um cliente, mentor ou marca pessoal.
- Para auditar se um texto já escrito soa como a pessoa.
- Para criar um guia de voz replicável de uma pessoa.

## Princípio
A voz já existe na fala. O trabalho é **minerar com evidência literal**, não criar.
Mais fala-fonte = melhor. Em transcrição com várias pessoas, **filtre só as falas da
pessoa-alvo**.

## Fontes (ordem de valor)
1. Fala espontânea (call, reunião). 2. Fala ensinando (aula, live). 3. Texto escrito por
ela. Evitar material ghostwritten.

## As 7 dimensões (extrair com citações literais)
1. **Tom** — acolhedor/direto, agressivo/não, como trata o interlocutor.
2. **Sistema representacional (VAK+digital)** — Visual / Auditivo / Cinestésico /
   Digital. Defina o predominante. *(dimensão mais útil e mais ignorada.)*
3. **Vocabulário-assinatura** — 10–15 palavras/expressões repetidas.
4. **Construções** — história→padrão? pergunta retórica? "a gente" vs "você"? muletas?
5. **Metáforas recorrentes.**
6. **O que evita** — registro que NÃO é dela (hype, jargão, guru).
7. **Intensidade emocional** — intensa/serena; como equilibra.

## Processo
1. Reunir fontes, isolar a fala da pessoa-alvo.
2. Minerar as 7 dimensões com **citações literais** (corpora grande → usar subagente).
3. Gerar **PERFIL-LINGUISTICO.md** (técnico) usando `references/template-perfil.md`.
4. Traduzir em **MAPA-COMUNICACAO.md** para o cliente (tom de presente, espelho,
   "teste rápido" acionável). Over-delivery.
5. Condensar em uma **skill de voz** curta (regra carregada em toda copy).
6. **Auditar** copy: checklist das 7 dimensões + verificações objetivas.

## Auditar uma copy (objetivo, não achismo)
- Checklist das 7 dimensões.
- Verificações automáticas: termos proibidos = 0; pronome dominante presente; verbos do
  sistema representacional certo presentes; abre com cena/história.
- Entregar **desvios + correção concreta**, não só veredito.

## Erros a evitar
Descrever voz sem evidência literal · confundir tema (o quê) com voz (como) · forçar
padrão de copywriting sobre voz própria · ignorar o sistema representacional.

## Arquivos da skill
- `references/template-perfil.md` — estrutura do perfil linguístico.
- `references/template-mapa-cliente.md` — estrutura do mapa entregue ao cliente.
- `references/checklist-auditoria.md` — checklist + verificações para auditar copy.
