# SKILL — Extração de Linguagem (operacional do MEL v2)

> **Fonte completa:** `100-métodos/Método de extração de linguagem/METODOLOGIA CONTINUUM DE EXTRAÇÃO DE LINGUAGEM.md`
> **Quando carregar:** todo pedido de perfil linguístico, skill de voz, mapa de comunicação, "extrai a voz de X", ou auditoria de copy contra voz.

## Sequência obrigatória

1. **Corpus:** listar fontes e classificar (espontânea / ensinando / vendendo / escrita / assistida-IA). Assistida-IA = referência de marca, não evidência de voz.
2. **Filtrar** mecanicamente só as falas da pessoa (regex pelo prefixo do falante).
3. **Camada 1 — Superfície** (sempre): tom · vocabulário-assinatura · metáforas · ritmo/prosódia · rituais de abertura/fechamento · evitações · intensidade.
4. **Camada 2 — Percepção/raciocínio:**
   - **VAK+D quantificado** (sempre): contar predicados por sistema (script), descontar verbos neutros de fala e muletas, reportar **% + n + sequência típica** (ex.: C→V→D).
   - **Metaprogramas com %** (se houver fala de decisão): busca/afastamento · referência int/ext · chunk · opções/procedimentos · match/mismatch.
   - **Arquitetura de raciocínio** (sempre): gatilho de entrada → forma (linear/espiral/associativa) → conectores → digressão+retorno → tipo de inferência → fechamento.
   - **Marcadores somáticos** (se aparecerem declarados).
5. **Camada 3 — Universo/transmissão** (módulos conforme corpus): cosmologia operativa · taxonomia+ontologia simbólica · extração de método (com **lacunas**) · arquitetura de ensino · código de objeções · matriz de identidade narrativa.
6. **Saídas:** Perfil Linguístico → Mapa de Comunicação (presente ao cliente) → Skill de voz (1–2 págs) → protocolo de auditoria.

## Regras duras

- **≥3 citações literais por estrutura** — senão `sinal fraco — não afirmar`.
- Percentual **só por contagem** (reportar n e ajustes). Nunca por impressão.
- Módulo sem corpus = `não observável neste corpus`. Não deduzir.
- Voz ≠ tema: descontar vocabulário de assunto do VAK.
- Skill de voz resultante entra na árvore de copy do CLAUDE.md §6.1 (+ `stop-slop` sempre).

## Auditoria de copy contra o perfil (gate de saída)

- grep termos proibidos = 0
- 1ª dobra abre no sistema representacional dominante e segue a sequência da pessoa
- conectores e ritmo dela presentes (≥1 assinatura por seção)
- entidades simbólicas na fase/nível certo da ontologia
- objeções tratadas no código dela (não no genérico)
- persona narrativa certa para a seção
