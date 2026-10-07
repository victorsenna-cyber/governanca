# 11_PIPELINE_PRODUCAO.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio do pipeline

Cada criativo percorre estágios sequenciais. Nenhum estágio é pulado. Cada passagem de estágio tem critério explícito de aprovação.

---

## Estágios do pipeline

```
BRIEFING → PRÉ-PRODUÇÃO → GRAVAÇÃO/CRIAÇÃO → EDIÇÃO → QA → EXPORT → PUBLICAÇÃO → MONITORAMENTO → ITERAÇÃO
```

---

## Estágio 1 — Briefing

**Input:** ID do criativo no 10_BACKLOG_CRIATIVOS.md (status PRODUZIR)

**O que definir:**
- ID e nome do criativo (ex: CR-001)
- Ângulo e pilar
- Hook selecionado (com ID do 03_HOOKS.md)
- Formato (Reels / Estático / Carrossel)
- Estrutura narrativa (modelo A/B/C/D do 04_REELS.md ou 05_CARROSSEIS.md ou 06_ESTATICOS.md)
- Estágio do funil (TOFU / MOFU / BOFU / RMKT)
- Objetivo principal (identificação / clique / salvamento / conversão)
- CTA selecionado (com texto exato do 08_CTA_E_CONDUCAO.md)
- KPI de validação
- Responsável pela produção
- Prazo de entrega

**Checkpoint:** briefing preenchido e revisado antes de avançar

---

## Estágio 2 — Pré-produção

**Para Reels câmera:**
- Confirmar disponibilidade de Guilherme (ou depoente)
- Definir local, iluminação e enquadramento
- Preparar roteiro falado (máx. 2 páginas A4 — tom conversacional, não lido)
- Confirmar equipamento (câmera / iluminação / microfone)
- Revisar referência de estética do 14_PADRAO_VISUAL.md

**Para Reels texto animado:**
- Escrever texto linha por linha (estrutura do 04_REELS.md)
- Definir paleta e fonte
- Separar música (instrumental, atmosfera, sem letra)
- Montar storyboard de animação por linha

**Para Estático:**
- Rascunho do layout: hierarquia visual dos 3 elementos (hook / contexto / CTA)
- Confirmar fonte, cor de fundo, contraste
- Escrever texto final (máx. 20 palavras no hook)

**Para Carrossel:**
- Estrutura slide a slide (definir conteúdo de cada slide)
- Confirmar número de slides (5–8 máx.)
- Definir progressão narrativa entre slides
- Esboçar layout visual de cada slide

**Checkpoint:** pré-produção aprovada antes de gravar/criar

---

## Estágio 3 — Gravação / Criação

**Reels câmera:**
- Gravar 3–5 takes de cada segmento
- Capturar reações, pausas e variações de entonação
- Garantir tomada limpa do hook (primeiros 3s são críticos)
- Nomear arquivos: `CR-001_take01_hook.mp4`, `CR-001_take02_corpo.mp4`

**Reels texto animado:**
- Montar no editor: linha por linha, ritmo de 1–2s por frame
- Aplicar animação de entrada suave (não agressiva)
- Inserir música de fundo (volume máx. 30% da narração)

**Estático:**
- Criar em formato 1:1 e 9:16 (Reels cover e feed)
- Resolução mínima: 1080x1080 ou 1080x1920
- Exportar em PNG sem compressão

**Carrossel:**
- Criar slide por slide em ordem sequencial
- Manter identidade visual consistente (fonte, cor, espaçamento)
- Slide final = CTA dedicado (sem conteúdo junto)

---

## Estágio 4 — Edição

**Reels câmera:**
- Selecionar melhor take de cada segmento
- Montar sequência de acordo com estrutura narrativa do modelo escolhido
- Verificar ritmo: cortes a cada 5–10s máx. em TOFU
- Adicionar texto on-screen nos pontos-chave (não legendas automáticas)
- Inserir música: fade in / fade out, nunca abafar voz
- Revisar início: hook deve aparecer nos primeiros 2s

**Reels texto animado:**
- Revisar timing de cada linha
- Confirmar que o hook aparece nos primeiros 2s
- Testar mudo (sem som): criativo deve funcionar só com texto

**Estático:**
- Revisar hierarquia visual (hook > contexto > CTA)
- Confirmar contraste de leitura (texto legível em miniatura)

**Carrossel:**
- Revisar progressão de slides (cada slide prepara o próximo)
- Confirmar que slide 1 funciona como thumbstop
- Confirmar slide final dedicado ao CTA

---

## Estágio 5 — QA (Qualidade)

Aplicar 12_CHECKLIST_QUALIDADE.md antes de qualquer export.

**Critérios de bloqueio (não avança sem aprovação):**
- Hook não aparece nos primeiros 3s
- CTA ausente ou posicionado errado
- Texto ilegível em miniatura
- Narrativa não completa a progressão emocional
- Alinhamento criativo → LP ausente (estado emocional incompatível)

**Critérios de revisão (corrigir antes de publicar):**
- Qualquer ponto do checklist marcado como FALHA

---

## Estágio 6 — Export

**Reels:**
- Formato: MP4 H.264
- Resolução: 1080x1920 (9:16)
- Frame rate: 30fps mínimo
- Duração: 45–90s (TOFU) / 30–60s (MOFU/BOFU)
- Nomear: `CR-001_v1_EXPORT_20260524.mp4`

**Estático:**
- Formato: JPG (qualidade 95) ou PNG
- Resolução: 1080x1080 (1:1) ou 1080x1920 (9:16)
- Nomear: `CR-003_v1_EXPORT_20260524.jpg`

**Carrossel:**
- Cada slide: JPG 1080x1080
- Nomear: `CR-004_v1_s01_EXPORT_20260524.jpg` ... `CR-004_v1_s07_EXPORT_20260524.jpg`

---

## Estágio 7 — Publicação

**Antes de publicar:**
- Confirmar URL de destino (LP correta, não perfil Instagram)
- Confirmar pixel ativo na LP (PageView ao menos)
- Confirmar naming da campanha, conjunto e anúncio (seguir 15_NAMING_CONVENTION.md)
- Atualizar status no 10_BACKLOG_CRIATIVOS.md: PRODUZIR → TESTAR

**No Ads Manager:**
- Upload do criativo no conjunto correto
- Verificar preview (feed + stories + reels)
- Confirmar CTA do botão de anúncio (ex: "Saiba mais")
- Confirmar URL de destino no campo de link
- Publicar

---

## Estágio 8 — Monitoramento

**Dias 1–3:** verificar entrega (alcance, impressões, CPM)
- Se alcance muito baixo: possível problema de aprovação ou público restrito
- Se CPM muito alto: avaliar reformulação do hook

**Dias 3–7:** verificar CTR e LPV
- CTR abaixo de 2%: revisar hook (ver 09_OTIMIZACAO.md)
- CTR bom + LPV baixo: verificar URL e alinhamento com LP
- Registrar dados no log diário (meta-ads/logs/)

**Dia 7:** decisão formal (ciclo semanal do 09_OTIMIZACAO.md)
- Manter / iterar hook / pausar
- Atualizar 10_BACKLOG_CRIATIVOS.md com status

---

## Estágio 9 — Iteração

**Quando iterar:**
- CTR abaixo de benchmark após 5 dias
- Hook não gera thumbstop suficiente
- Comentários mostram confusão com a proposta

**O que iterar:**
- Hook — manter ângulo, trocar abertura
- Texto on-screen — reposicionar ou simplificar
- CTA — testar variação de convite

**Como iterar:**
- Criar nova versão: `CR-001_v2`
- Registrar hipótese da iteração
- Atualizar 10_BACKLOG_CRIATIVOS.md

**Nunca iterar sem hipótese clara.**

---

## Checkpoints obrigatórios do pipeline

| Etapa | Checkpoint | Critério para avançar |
|---|---|---|
| Briefing → Pré-produção | Briefing aprovado | Todos os campos preenchidos |
| Pré-produção → Gravação | Roteiro / layout aprovado | Estrutura narrativa confirmada |
| Edição → QA | Edição finalizada | Montagem completa |
| QA → Export | Checklist sem itens de bloqueio | 12_CHECKLIST_QUALIDADE.md aprovado |
| Export → Publicação | URL e pixel verificados | Nenhuma pendência crítica aberta |
| Publicação → Monitoramento | Anúncio publicado e rodando | Confirmado no Ads Manager |
| Dia 7 | Decisão formal | Dados registrados e decisão documentada |
