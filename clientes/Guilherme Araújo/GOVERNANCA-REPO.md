# GOVERNANCA-REPO.md — CONTRATO DOCUMENTAL

> STATUS: VIGENTE · política local
> Atualizado em: 2026-07-19

## 1. Finalidade

Este documento governa status documental, superação, propagação, catálogo, arquivo, writeback e fechamento. Ele adapta mecanismos estruturais úteis observados em outro repositório de cliente, mas é geral: não contém fatos, voz, oferta, decisões ou artefatos daquele cliente.

## 2. Classes documentais

| Classe | Função | Pode governar execução? |
|---|---|---|
| política | define como operar e decidir | sim, dentro do escopo |
| decisão | registra escolha aprovada, autoridade e propagação | sim, para o tema decidido |
| estado | descreve condição verificada e datada | informa; não reabre decisão |
| fonte | sustenta fatos ou método no domínio declarado | sim, dentro do domínio |
| derivado | materializa uma fonte/decisão | não prevalece sobre origem |
| histórico | preserva evidência do passado | não por padrão |
| bruto | evidência não reescrita | somente via catálogo e contrato explícito |
| proposta | hipótese sem autoridade suficiente | não |

## 3. Status obrigatório para documentos operacionais novos

```text
> STATUS: VIGENTE · fonte
> STATUS: VIGENTE · derivado de [origem] · sync AAAA-MM-DD
> STATUS: EM TRANSIÇÃO · não canônico
> STATUS: HISTÓRICO · não editar
> STATUS: SUPERADO por [caminho/ID] em AAAA-MM-DD · não usar como fonte
> STATUS: A VALIDAR · autoridade: [responsável]
> STATUS: PROPOSTA — NÃO VIGENTE
```

Binários, fontes brutas, transcrições, HTMLs em veiculação e históricos não são reescritos apenas para adicionar status. Sua classe vive no catálogo ou manifesto lateral.

## 4. Rito de superação

Um documento só deixa de ser fonte ativa quando o executor:

1. identifica o substituto e a autoridade;
2. registra decisão ou evidência de superação;
3. marca o substituto com proveniência;
4. marca o antigo como superado, quando ele for editável;
5. atualiza referências ativas expressamente dentro da task;
6. preserva referências históricas;
7. registra na fila e no diário;
8. verifica que não restaram duas fontes vigentes para o mesmo contrato.

Sem todos os passos, o item fica `A VALIDAR`, não superado.

## 5. Propagação controlada

`DECISOES.md` usa o campo `Propaga p/` para indicar possíveis consumidores. A indicação não concede autorização de escrita.

Cada item de `09 - operação/FILA-PROPAGACAO.md` deve trazer:

- ID e decisão de origem;
- arquivo/área de destino;
- mudança esperada;
- autoridade e executor;
- task/gate que autoriza;
- estado: sinalizada, pronta, parcial, bloqueada ou concluída;
- evidência de verificação.

Somente propagar quando o destino estiver no contrato vigente. Caso contrário, manter a fila aberta.

## 6. Catálogo e fontes

- o manifesto Gate 1 é o índice exato do acervo pré-iteração;
- o catálogo traduz caminhos em áreas sem mudar autoridade;
- o mapa de migração registra destino futuro sem executar movimento;
- fonte que alega ser canônica continua `A VALIDAR` se houver concorrência ou desatualização;
- fatos mutáveis precisam de data de verificação e autoridade;
- divergência nunca é resolvida pela maioria de ocorrências sem validação do tema.

## 7. Skills e métodos

- a réplica de Governança é imutável e sincronizada por hash;
- métodos gerais não carregam fatos de cliente;
- skills locais futuras devem ser capacidades gerais;
- identidade, voz, oferta e estado entram por overlay/fonte local;
- mecanismo aprendido em outro cliente pode ser generalizado, mas o conteúdo daquele cliente não pode ser copiado;
- exemplos internos de um método não são decisões deste repositório.

## 8. Gate de fechamento

Uma sessão relevante só fecha quando:

- escopo executado foi comparado ao contrato;
- arquivos alterados e não alterados foram identificados;
- testes proporcionais ao risco foram executados;
- decisões têm autoridade, fonte e propagação;
- fila foi atualizada sem propagação automática;
- `STATUS.md` reflete somente estado verificado;
- diário registra divergências, rollback e próximo passo;
- handoff existe quando há gate ou continuidade;
- referências read-only foram comparadas ao baseline quando a fase as consultou/copiedou.

Falha em qualquer item mantém o gate aberto.

## 9. Regra de arquivo e rollback

- nada é excluído por esta task;
- duplicatas, inválidos, vazios e superados permanecem recuperáveis em `10 - registros e arquivo/`;
- movimentos futuros são reversíveis por caminho literal e hash;
- o kernel anterior permanece preservado;
- rollback parcial silencioso é proibido.

