# PLANO — Páginas de Obrigado (Workshop Eixo · 2 turmas)

> STATUS: VIGENTE · fonte
> Base: `METODO-PAGINA-DE-VENDAS.md` (curva de voltagem, §3.7 handoff pós-compra) · `DIRECAO-VISUAL-V2.md` (4 cores, grid, clímax único) · `OFERTA-CANONICA.md` · DECISOES 11/07 (obrigado por turma → grupo certo) + 17/07 (bump). Voz: `07 - skills/debora-voice`. Léxico morto varrido = 0 hits. Sem travessão.

---

## 0. Decisão de arquitetura: 2 páginas, não 6

**Purchase é confirmado por webhook PagTrust → Meta (CAPI), não por pixel na página de obrigado.** Logo a obrigado-page não precisa disparar `Purchase` nem existir por lote. O único dado que muda o destino do comprador é a **turma** (o grupo de WhatsApp que ele deve entrar). Turmas = 2. Portanto **2 páginas**:

- **`obrigado-meio-semana.html`** → grupo da turma qua-sex 9h-11h
- **`obrigado-fim-semana.html`** → grupo da turma sex 14/08 19h + sáb 15/08

Cada uma das 6 ofertas na PagTrust aponta sua "página de obrigado" para uma dessas 2 URLs conforme a turma (lote não importa aqui). Sem pixel = sem risco de dupla contagem de Purchase.

> Se algum dia o Purchase precisar de fallback client-side (webhook falhar), aí sim entraria um evento na obrigado — hoje **não**, o webhook é a fonte (evita dedupe manual). Decisão: manter a obrigado limpa de tracking de conversão.

---

## 1. Análise de método: escura ou clara? (a pergunta do Victor)

A obrigado-page **não está na curva de voltagem de vendas** — a venda terminou. Tensão/crença/atrito não se aplicam; o novo estado é **alívio + pertencimento + "o que faço agora?"**.

Duas leis do método ainda mandam aqui:
- **Lei 8 (clímax coincidente):** o pico de contraste escuro pertence ao **momento de decisão** (o card de oferta, D8). A decisão já aconteceu. Repetir uma página inteira escura na obrigado **rouba** a assinatura do clímax e faz o comprador reviver "decisão" quando ele já quer **descansar e agir**.
- **§3.7 (handoff):** pós-compra sem chão é a primeira semente do reembolso — a obrigado deve **continuar a mesma conversa** (mesma cara) e dar o próximo passo imediato.

**Veredito: página CLARA (papel `#FAF8F3`), com UM bloco escuro no topo.**
- Fundo claro + **grid de 1px rgba(petróleo, .08)** = mesma textura/continuidade visual da página de vendas, sem repetir o clímax.
- **Um selo escuro no topo** (mesmo petróleo `#223036`, borda dourada do card de oferta) = "deu certo, você está dentro". Ecoa o card da oferta como **recompensa**, não como nova decisão. É o único bloco escuro, coerente com "um clímax só" da direção V2.
- O CTA do grupo (verde WhatsApp) é a única cor fora da paleta — permitida porque é affordance de plataforma, não decoração.

Assim atende ao pedido ("seja escura ou clara, encaixe bem na curva"): **clara com âncora escura de confirmação** é o encaixe correto pós-venda.

---

## 2. Arquitetura (idêntica nas 2 páginas, muda só turma/link/horários)

| Bloco | Função | Conteúdo | Peso visual |
|---|---|---|---|
| **B1 · Selo de confirmação** | fechar o loop da compra | Bloco escuro (petróleo, borda dourada). Check + "Inscrição confirmada. Você está no Eixo." Nome da turma + datas/horários literais. | ALTO (único escuro) |
| **B2 · Próximo passo único (CTA)** | tirar o comprador da ansiedade | 1 CTA verde grande: "Entrar no grupo da minha turma". Microcopy: "É por aqui que você recebe o link da sala e os avisos. Entre agora para não perder nada." | MÁXIMO (é o job da página) |
| **B3 · O que acontece agora** | reduzir incerteza | 3 passos curtos: (1) entre no grupo; (2) a Débora envia o link da sala e a agenda; (3) [se comprou o bump] seu acesso ao Curso de Eneagrama já está no seu e-mail. | médio |
| **B4 · Resgate do bump** *(condicional — só p/ quem NÃO marcou)* | +ticket sem competir | ABAIXO do CTA do grupo. Bloco claro discreto: "Não incluiu o Curso de Eneagrama? Ainda dá tempo de chegar ao Dia 1 sabendo como você funciona." + botão secundário (outline) → checkout do curso. | baixo |
| **B5 · Microrrodapé** | segurança | "Dúvidas? Responda o e-mail de confirmação ou fale no grupo." Sem links de saída. | baixo |

**Regra de ouro (§3.7 + análise do bump):** B2 é o único job. B4 nunca compete em cor/peso com B2 — é outline, abaixo da dobra, e só aparece para quem não pegou o bump (idealmente condicional por parâmetro de URL; se não der, versão estática discreta serve).

---

## 3. Copy (voz Débora · sem travessão · léxico limpo)

### B1 — Selo (varia por turma)

**Meio de semana:**
```
✓ Inscrição confirmada
Você está no Eixo.
Turma meio de semana · quarta a sexta, 9h às 11h.
```

**Fim de semana:**
```
✓ Inscrição confirmada
Você está no Eixo.
Turma fim de semana · sexta 14/08 (19h) e sábado 15/08 (manhã e tarde).
```

### B2 — CTA (idêntico nas 2, muda só o link)
```
Falta um passo: entrar no grupo da sua turma.
[ Entrar no grupo da minha turma ]   ← verde WhatsApp
É por aqui que você recebe o link da sala e os avisos da semana. Entre agora para não perder nada.
```

### B3 — O que acontece agora
```
Como funciona a partir daqui:
1. Entre no grupo da sua turma (o botão acima).
2. Nos dias que antecedem, você recebe ali o link da sala e a agenda dos três dias.
3. Chegue com o caderno em mãos. O resto a gente conduz junto.
```
> Se comprou o bump, trocar o item 3 por: "Seu acesso ao Curso de Eneagrama já está no seu e-mail. Comece por ele para chegar ao Dia 1 já sabendo como você funciona."

### B4 — Resgate do bump (só p/ quem não pegou)
```
Ainda dá tempo de chegar sabendo como você funciona.
O Curso de Eneagrama da Débora prepara você para o Dia 1: identifique sua personalidade e seu subtipo antes do workshop. De R$ 297 por R$ 57.
[ Adicionar o Curso de Eneagrama ]   ← outline, discreto
```

### B5 — Rodapé
```
Dúvidas? Responda o e-mail de confirmação que você recebeu.
```
> Iteração 17/07 (Victor): grupo é **fechado/silencioso, só avisos** (link da sala + lembretes perto e no dia). Removido "fale com a gente no grupo" (o grupo não é canal de dúvida). B2/B3 reescritos para deixar o caráter silencioso explícito.

---

## 4. Engenharia / especificação técnica

- **Arquivo:** 2 HTMLs autocontidos em `04 - web design/obrigado/` (mesmos tokens/fonts da página de vendas: Fraunces + Inter, 4 cores, grid CSS de fundo). Reaproveitar o `<head>`/tokens do index vigente.
- **SEM pixel de Purchase** (Purchase segue só na PagTrust). **Decisão 17/07 (Victor): não implementar tracking nas obrigado agora** — backlog de implementação futura em `ANALISE-TRACKING-OBRIGADO-PURCHASE.md` (Opção A: Purchase rotulado fora da otimização; Opção B: event_id casado com a PagTrust). Nada de pixel de Purchase nos HTMLs por ora.
- **Sem `noindex`?** Adicionar `<meta name="robots" content="noindex">` (página de obrigado não deve ranquear).
- **Links a preencher (CONSTANTES no topo do arquivo):**
  - `GRUPO_MEIO_SEMANA` = *(pendente — Victor cria o grupo e cola o `chat.whatsapp.com/...`)*
  - `GRUPO_FIM_SEMANA` = *(pendente — idem)*
  - `CHECKOUT_CURSO_ENEAGRAMA` = *(link da página/checkout do curso p/ o resgate B4; hoje o bump vive dentro do checkout do workshop, então o resgate precisa de um checkout avulso do curso — depende da página de vendas do curso, fase 2. Até lá, B4 pode sair ou apontar para um checkout avulso do curso na PagTrust.)*
- **Roteamento das 6 ofertas:** nas 3 ofertas "meio de semana" → obrigado-meio-semana; nas 3 "fim de semana" → obrigado-fim-semana (config na PagTrust, campo "página de obrigado/redirect pós-compra").
- **Mobile:** B1 e B2 inteiros no primeiro paint; CTA do grupo na zona do polegar.

---

## 5. Gate (Parte 5 aplicável a pós-compra)
- [ ] Handoff imediato claro (§3.7): próximo passo óbvio no primeiro paint. ✓ (B2)
- [ ] Mesma cara da página de vendas (continuidade). ✓ (tokens/grid)
- [ ] Um job só; B4 não compete com B2. ✓
- [ ] Sem placeholder visível no ar (links de grupo preenchidos antes de publicar).
- [ ] Sem travessão; léxico limpo. ✓
- [ ] `noindex` presente.
- [ ] Aprovação: Débora (copy) · Victor (links/publicação).

## 6. Pendências humanas
1. **Victor:** criar os 2 grupos de WhatsApp e colar os links (`GRUPO_MEIO_SEMANA`, `GRUPO_FIM_SEMANA`).
2. **Victor:** apontar as 6 ofertas PagTrust para as 2 URLs de obrigado corretas por turma.
3. **Definir B4:** o resgate do bump precisa de um checkout avulso do Curso de Eneagrama (o bump atual só existe dentro do checkout do workshop). Sai junto com a página de vendas do curso (fase 2) — até lá, B4 fica oculto ou aponta para checkout avulso.
4. **Débora:** aprovar copy (SLA 3 dias úteis).
