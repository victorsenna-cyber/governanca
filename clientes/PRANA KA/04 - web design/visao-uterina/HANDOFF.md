# Visão Uterina — versão local para revisão

Data: 05/09/2026. Pedido: criar a página a partir da última call, com CTA para o WhatsApp da Prana. Número confirmado pelo usuário nesta conversa: **+55 48 98424-8922**.

## Entrega e escopo

Página estática independente em `index.html`, `styles.css`, `script.js` e `assets/`. Substitui a função comercial da Masterclass, conforme aceite na call de 02/09; não representa uma quinta página contratada. A versão antiga e as rotas publicadas foram preservadas. **Construção local; nenhuma publicação executada.**

Prévia: `http://127.0.0.1:8765/`, enquanto o servidor desta tarefa estiver ativo. Para reabrir, executar `python -m http.server 8765 --bind 127.0.0.1` nesta pasta. Fontes, imagem e scripts são locais; também é possível abrir `index.html` diretamente. `noindex, nofollow` identifica a versão de revisão; revisar quando houver autorização de publicação.

## Brief de nove campos

1. Oferta: sessão individual paga Visão Uterina, conduzida por Prana Ka.
2. Público: mulheres com autonomia e disposição de investir em si, vivendo escolhas, dúvidas de expressão ou chamado de servir. Linguagem de desejo, ventre, escuta e confiança.
3. Promessa: convite à clareza sobre desejos e escolhas; sem resultado garantido.
4. Mecanismo: meditação e atenção ao ventre/corpo para perceber o que fica encoberto pela análise, medo e expectativas.
5. Provas: descrição da própria Prana na call e autoria do Método S.E.R. Nenhum depoimento, número de clientes ou credencial clínica foi inventado.
6. Tráfego: origem específica não confirmada; página permite visitantes de canais próprios e compartilhamento direto, sem campanha ou rastreamento instalado.
7. Classificação: página de apresentação e geração de conversa qualificada, para uma sessão paga.
8. Voz: voz-prana.skill.md, com poesia ancorada em situações cotidianas e linguagem corporal.
9. CTA: cinco links nativos para `https://wa.me/5548984248922` com a mesma mensagem contextual. Funcionam sem JavaScript.

## Direção visual e narrativa

Tese visual: rubi profundo, marfim e fotografia botânica com presença tátil; composição editorial íntima e clara.

Sequência: nome da sessão e convite → reconhecimento na cena da conversa/banho → proposta da sessão em três movimentos editoriais → afinidade e dedicação → apresentação da Prana → dúvidas → conversa no WhatsApp. Os três movimentos organizam a explicação; não são apresentados como protocolo técnico certificado ou cronograma de atendimento.

Interação: entrada progressiva na abertura; revelação leve das seções; nome da Prana acompanha o bloco no desktop; resposta nativa em `details`; hover de CTA. `prefers-reduced-motion` respeitado. Conteúdo nunca é escondido à espera de JavaScript.

## Fonte → escolha de página

Fonte principal: `../../contexto/TRANSCRIPT-CALL-PRANA-02-09-2026-LIMPO.md` (caminho canônico a partir do diretório do cliente: `contexto/TRANSCRIPT-CALL-PRANA-02-09-2026-LIMPO.md`).

- 14:19:43: sessão paga, meditação, escuta do ventre e desejos → apresentação e explicação da experiência.
- 14:23:49–14:25:43: substituir página da Masterclass por Visão Uterina → função comercial da nova pasta.
- 14:25–14:40, especialmente 14:35:09: desejo percebido, dificuldade de expressar e cena do banho → bloco de reconhecimento, sem expor histórias privadas.
- 15:40:25: descrição literal da sessão, excesso de análise, clareza e confiança → benefício central. **R$ 333 continua alvo; ela diz que precisa definir melhor.** Por isso não há preço numérico, duração, abatimento ou condições inventadas.
- 15:57–16:03: possibilidades de checkout/formulário/WhatsApp → **o pedido explícito de hoje escolheu WhatsApp direto**. Nenhum formulário ou checkout foi criado.
- `voz-prana.skill.md`: “poético e selvagem, mas com extrema clareza, um discernimento e um pé no chão” → citação no bloco da Prana.
- `CONTEXTO.md`: fundadora do Templo Dourado e metodologia autoral S.E.R. → apresentação sem antecipar liberação de credenciais clínicas.

## Imagem

`assets/rosa-rubi.png`: original gerado com a ferramenta integrada imagegen; preservado. `assets/rosa-rubi.webp`: cópia comprimida para a página, 60.124 bytes, 1536×1024. Não representa uma pessoa ou um atendimento real.

Prompt utilizado: fotografia botânica editorial de uma única rosa rubi em macro, pétalas aveludadas imperfeitas, ocupando a metade direita; metade esquerda em vinho muito escuro e calma para texto marfim; luz natural suave, sombras profundas, intimidade e realismo; sem pessoa, anatomia, símbolos, brilhos, texto ou interface; paisagem 1536×1024. Ferramenta integrada, sem API/CLI de geração.

## Verificação

- HTTP local: HTML e assets carregam; imagem e fontes locais.
- Checagem estrutural: um H1, IDs únicos, âncoras existentes, todos os cinco CTAs com número e mensagem confirmados.
- `node --check script.js`: passou.
- Browser: inspeção visual em desktop 1440×900, celular 390×844 e 320×720; sem rolagem horizontal. CTA da abertura dentro da primeira tela nos tamanhos verificados.
- FAQ de investimento expandido no navegador; resposta e link corretos. Espaçamento do título mobile corrigido.
- Implementação sem dependência de JS para conteúdo, links e FAQ verificada no código; não foi feita simulação de JavaScript desativado no navegador.
- Nenhuma mensagem foi enviada e nenhum agendamento foi criado. Destino dos links verificado; disponibilidade da conta na plataforma WhatsApp não foi testada por envio.

## Pendências comerciais e publicação

Revisão da página pela equipe/Prana. Valor final, duração, formato e disponibilidade continuam para confirmação na conversa; não bloqueiam os links de contato. Para substituir a Masterclass no domínio, será necessária autorização específica de publicação e decisão da rota. A situação da página antiga em produção não foi alterada por esta entrega.
