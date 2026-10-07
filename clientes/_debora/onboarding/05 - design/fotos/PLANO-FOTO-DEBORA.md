# PLANO — Tratamento da foto da Débora + banner da dobra "Quem conduz" (D6)

> Planejado 08/07/2026, execução sob comando do Victor, ANTES do build da página no Claude Code (o banner entra como asset pronto no `build/`).
> ⚠️ A foto foi colada na conversa, não anexada como arquivo: **na execução, reenviar o arquivo original em alta** para `05 - design/fotos/debora-original.{jpg|png}`.

## 1. Análise da foto

**A favor:** calor humano real (riso aberto, espontâneo) que quebra a frieza típica de página de mentor; paleta da cena já é a da marca (fundo bege quente, plantas, blazer petróleo-grafite, blusa off-white — praticamente papel/areia/petróleo da direção Codex); qualidade suficiente (~1035px, rosto grande).

**Contra (e como o plano trata):**
1. **Olhos fechados e rosto para cima** — o método (§3.5) pede direção de olhar guiando para o texto/CTA; esta foto não guia. E a marca é "sóbria, serena, discernimento": o riso máximo comunica carisma, não a "leitura serena" que a D6 vende. → **Decisão recomendada:** usar esta foto como **secundária** (humanidade) e pedir à Débora 1-2 frames adicionais: olhar na câmera ou levemente ao lado, sorriso contido, mesma luz/roupa se possível. Se não vierem a tempo, esta assume como principal com o enquadramento do §3 (funciona, mas perde o vetor de olhar).
2. **Pele/dentes muito lisos (aparência de upscale/IA)** — o método proíbe o que *parece* render. → tratamento adiciona **grain fino** e microtextura para devolver aparência fotográfica; pedir o arquivo original (não versão passada por app) resolve na raiz.
3. Fundo com janela estourada no canto superior esquerdo → o crop do banner corta/atenua.

## 2. Tratamento (pipeline, não destrutivo — Python/PIL ou Photoshop)

1. **Base:** correção de branco levemente quente · pretos elevados para petróleo `#2E3D45` (nunca preto puro) · verdes do fundo dessaturados na direção do musgo `#7A9E89` · highlights da janela recuperados/abafados.
2. **Coerência de marca:** véu quente global sutil (2-4%) puxando para papel `#FAF8F3` · vinheta mínima.
3. **Anti-render:** grain fotográfico fino (uniforme, 1.5-2%) + leve sharpen local em cabelo/tecido (não na pele).
4. **Exports:** WebP qualidade ~80 · versões: banner desktop 1920×720 · banner mobile 900×900 · retrato avulso 800×1000 (reserva p/ outros usos) · alvo ≤ 120KB cada (spec do plano da página).

## 3. Banner retangular baixo e largo (composição da dobra D6)

**Formato:** faixa full-width ~1920×720 (proporção ~2.7:1), quebrando o container da página (única dobra full-bleed com foto — vira o "momento humano" da senoide visual).

**Composição (desktop):**
- **Débora à direita** (~40-45% da largura), rosto na intersecção do terço superior-direito; crop do original elevando o pescoço/rosto e cortando a janela estourada.
- **Esquerda (~55-60%):** extensão do fundo em degradê areia (`#F1EDE4` → `#FAF8F3`), fundida à borda da foto com máscara suave de ~15% da largura (sem outpaint de IA: blend de gradiente é mais seguro e indetectável; se a fusão ficar dura, alternativa aprovável: outpaint discreto só do bege do ambiente).
- Sobre o painel esquerdo entra o **texto da bio** (copy da D6 do plano da página) em petróleo, com o apelido "transformar o chumbo em ouro" como destaque em dourado escuro `#9C8159`.
- **Detalhes de marca:** fio dourado 1px na base da faixa · digital-labirinto em traço dourado a 6-8% de opacidade no canto inferior esquerdo (selo, não decoração).

**Mobile:** empilha — foto em crop 1:1 (rosto centrado, sem o painel) em cima, bio em card areia embaixo. Nunca espremer o banner largo.

**Racional (curva):** D6 é voltagem 7→7, fio de segurança; a faixa clara com rosto real deposita confiança entre a pilha (D5, palha) e a qualificação (D7, papel), sem competir com o clímax escuro da D8 que vem 2 dobras depois.

## 4. Sequência de execução (quando o Victor der o comando)

1. Receber arquivo original em alta → `debora-original.*`.
2. Rodar pipeline §2 (script Python no sandbox) → aprovar 1 preview.
3. Compor banner §3 (desktop + mobile) → aprovar.
4. Salvar exports em `04 - web design/build/assets/` + atualizar o `PLANO-PAGINA-SEU-EIXO.md` D6 (de "foto real, olhar ao texto" para "banner pronto em assets/").
5. Só então disparar o prompt do Claude Code.

**Aprovações:** Débora precisa aprovar o uso desta foto (imagem dela, riso aberto) — mandar preview antes de fixar na página.
