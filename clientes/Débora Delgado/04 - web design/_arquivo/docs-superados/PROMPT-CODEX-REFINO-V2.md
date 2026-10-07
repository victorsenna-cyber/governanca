# Prompt para o Codex — Refino V2 da Landing (numa CÓPIA)

> Codex aberto no terminal, na pasta `04 - web design`. Cole o bloco entre ===.

===

Você vai refinar a landing de vendas do Workshop "Carreira Alinhada" da Débora. O
projeto Next.js já existe em `./landing/`. Você NÃO vai alterar o projeto original nem
os arquivos de contexto: você trabalha numa CÓPIA.

## Passo 0 — Criar a cópia (obrigatório antes de tudo)
1. Duplique a pasta `./landing/` para `./landing-v2/` (copie o código, PODE excluir da
   cópia: `node_modules`, `.next`, `.git` — reinstale com `npm install` dentro de landing-v2).
2. Trabalhe SOMENTE dentro de `./landing-v2/`. Não toque em `./landing/` nem em nenhum
   arquivo `.md` desta pasta (são contexto/tasks, apenas leitura).

## Passo 1 — Ler o que fazer
Leia, nesta ordem:
1. `./TASKS-REFINO-LANDING-V2.md` — as alterações endurecidas e priorizadas (P0 a P3).
   É a sua lista de tarefas. Siga à risca.
2. `./copy-landing.md` — a copy aprovada (referência de voz e conteúdo).
3. `./ANTI-AI-SLOP.md` — o que evitar. REGRA DURA: zero travessões.
4. `../05 - design/design-system/BRAND-BRIEF.md` — paleta, tipografia (Fraunces+Inter),
   botão liquid-glass, camada premium. O botão liquid-glass é prioridade (P2).
5. `../07 - skills/debora-voice/SKILL.md` — a voz (não inventar copy de venda nova; os
   blocos novos de tensão já estão redigidos no TASKS, na voz dela).

## Passo 2 — Aplicar as tarefas do TASKS (P0 → P3)
- **P0 (crítico):** nova H1 de gancho + subhead com a promessa (ver TASKS). A H1 atual é
  abstrata e confunde; trocar pela opção A do TASKS.
- **P1:** blocos de tensão (dor mais crua, custo da inação, prova/autoridade, escassez por
  data, loop no CTA final). Os textos já estão prontos no TASKS.
- **P2:** design (botão liquid-glass real, resolver eneagrama do hero, equilíbrio do vazio,
  cards da oferta, depoimento).
- **P3:** copy fina (encurtar, variar CTAs, viúvas/órfãs).

## Regras
- Trabalhar só em `./landing-v2/`. Não alterar `./landing/` nem os `.md` de contexto.
- Zero travessões. Contraste AA. Placeholders `{{...}}` para o que não é definido (nada inventado).
- Manter a stack (Next.js/Tailwind), o design system e a identidade terrosa. Premium, minimalista.
- Respeitar `prefers-reduced-motion`; build sem erro.

## Passo 3 — Build e checagem
1. Rodar `npm run build` em `landing-v2` e garantir que passa sem erro.
2. Rodar a checagem final do TASKS (zero travessões, AA, H1 nova, CTAs variados, blocos de
   tensão, botão liquid-glass, placeholders).

## Passo 4 — Deploy na Vercel (ao finalizar)
1. Fazer deploy de `landing-v2` na Vercel. Se a Vercel CLI não estiver instalada:
   `npm i -g vercel`. Depois, dentro de `./landing-v2/`:
   - `vercel login` (se ainda não logado; usar a conta correta do Victor).
   - `vercel --prod` (deploy de produção). Se preferir um preview primeiro, `vercel` sem
     `--prod` gera uma URL de preview; confirme comigo e então promova para produção.
2. Configurar o projeto na Vercel como **Next.js** (framework detectado automaticamente).
   Root directory = `landing-v2` se a Vercel apontar para o repositório inteiro.
3. Ao concluir, me devolver a **URL do deploy** (preview e/ou produção).
4. Não conectar domínio próprio agora; a URL `.vercel.app` basta para revisão. A
   integração com o Wix (subdomínio/URL) fica para depois da minha aprovação.

## Passo 5 — Reportar
Me dizer em até 6 linhas: o que mudou (P0 a P3), o resultado do build, e a **URL da Vercel**.
Também como rodar localmente (`npm run dev` em landing-v2).

Comece pelo Passo 0 (a cópia). Confirme que criou `landing-v2/` antes de editar qualquer coisa.

===

## Notas para o Victor (fora do prompt)
- A cópia preserva a V1 intacta em `./landing/` (dá para comparar as duas).
- Quando o Codex terminar, ele fará o deploy na Vercel e devolverá a URL. Me manda essa
  **URL** (ou um print) que eu re-audito copy, design e tensão na página no ar.
- Confirme que o Codex está logado na Vercel com a **conta certa** antes do `vercel --prod`.
  Se quiser revisar antes de produção, peça a ele o preview (`vercel` sem `--prod`) primeiro.
- A H1 nova recomendada é "Você lidera todo mundo. Menos você." com a promessa no subhead.
  Se preferir a B ou C do TASKS, é só dizer ao Codex qual usar.
