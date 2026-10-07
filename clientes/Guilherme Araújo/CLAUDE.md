# CLAUDE.md — KERNEL DA OPERAÇÃO GUILHERME

> STATUS: VIGENTE · política local
> Versão: 4.0-transição
> Instalado em: 2026-07-19 · America/Sao_Paulo
> Governança operacional: Continuum

## 1. Contrato deste arquivo

Este é o único kernel do repositório inteiro. Ele governa como uma solicitação encontra política, decisão, estado, método, fonte, artefato e local de writeback.

Este arquivo não é fonte de preço, promessa, produto, campanha, página vigente, métricas, IDs ou voz. Fatos do negócio permanecem nas fontes catalogadas e, enquanto não forem canonizados, recebem estado `A VALIDAR`.

O modo atual é aditivo e transitório:

- o acervo legado continua nos caminhos originais;
- páginas, copy, funis, criativos, mídia e fontes não são iterados por instalação deste kernel;
- `09 - operação/CATALOGO-ACERVO-LEGADO.md` informa onde o repositório enxerga cada conjunto;
- `09 - operação/MAPA-MIGRACAO.md` registra destinos futuros, sem autorizar movimentos;
- métodos e skills reutilizáveis operam como capacidades gerais; fatos do cliente entram por fontes ou overlays locais, nunca embutidos no método.

## 2. Abertura obrigatória e contexto máximo

Em toda tarefa relevante, carregar nesta ordem:

1. este `CLAUDE.md`;
2. `STATUS.md`;
3. as três entradas mais recentes de `DIARIO-DE-BORDO.md`;
4. o contrato da task, quando existir;
5. apenas uma fonte dominante da área e, se necessário, uma capacidade dominante.

Em toda tarefa de mídia, anúncio ou solicitação operacional originada por Guilherme, carregar também `MODUS-OPERANDI.md`. Ele separa a estratégia Continuum da execução dirigida pelo cliente e não pode ser inferido apenas do histórico da conta.

Não varrer a árvore inteira por padrão. Se a execução exigir mais de cinco documentos de contexto além do contrato, produzir primeiro uma síntese ou reduzir o escopo.

## 3. Classificação da solicitação

Classificar antes de ler conteúdo de área:

| Classe | Exemplos | Regra |
|---|---|---|
| governança | política, decisão, status, roteamento, task, handoff | usar documentos raiz e `09 - operação/` |
| contexto/fonte | transcrição, aula, PDF, prova, insight | localizar no catálogo; não editar bruto |
| produto/oferta/funil | produto, preço, promessa, entrega, jornada | decisão humana + fonte de área; divergência = `A VALIDAR` |
| copy/conteúdo | copy, roteiro, conteúdo, peça-mestra | capacidade geral + fonte da oferta + overlay de voz validado |
| página/web | página, HTML, tracking, checkout | método de página + contrato local; sem publicar |
| design/criativo | conceito, briefing, asset, criativo de mídia | oferta + matriz/artefato local + hipótese e KPI |
| mídia paga | auditoria, campanha, orçamento, anúncio, conta | método geral + estado datado; mutação exige aprovação |
| dados/dashboard | dashboard, relatório, métrica | fonte operacional com data e limitação |
| operação | execução local, inventário, propagação, verificação | task + logs + handoff |

Também classificar o modo:

- `LEITURA/DIAGNÓSTICO`: não autoriza alteração de artefatos;
- `PRODUÇÃO LOCAL`: autoriza somente os arquivos expressamente contratados;
- `MUTAÇÃO EXTERNA`: exige aprovação humana específica e permanece fora desta fase.

## 4. Precedência por natureza da informação

Não misturar política, decisão, estado e artefato em uma fila única.

### 4.1 Política e método

`ordem humana atual → este kernel → GOVERNANCA-REPO.md + SCOPE.md → método geral aplicável → skill/capacidade dominante → contrato da task → artefato`

### 4.2 Fato e decisão de negócio

`ordem humana autorizada e datada → DECISOES.md → fonte canônica da área → artefato derivado`

Uma proposta, um plano ou um artefato não cria decisão por si só. Decisão sem autoridade ou evidência fica `PROPOSTA — NÃO VIGENTE`.

### 4.3 Estado operacional

`fonte verificada mais recente da área → STATUS.md consolidado → relatório/artefato`

Estado descreve o presente; não reabre decisão. Um arquivo que se declara “vivo” mas não possui verificação atual continua `A VALIDAR`.

### 4.4 Fontes e artefatos

- fonte bruta é evidência e não recebe reescrita para se adequar ao kernel;
- fonte operacional pode governar somente a área explicitada;
- derivado deve citar fonte e data de sincronização;
- histórico preserva o que ocorreu e nunca é corrigido em massa;
- duas fontes concorrentes não são conciliadas por suposição.

## 5. Roteamento geral em modo de transição

Os caminhos atuais abaixo continuam válidos para leitura. Os destinos 01–08 são fronteiras futuras e não significam que houve migração.

| Pedido | Onde ler agora | Capacidade geral | Área de saída/writeback |
|---|---|---|---|
| decisão de produto, preço ou promessa | `CONTEXTO_NEGOCIO_GUILHERME.md`, `Ecossistema Guilherme Araújo.md`, `ESTEIRA_JORNADA_CONSTELACAO/`, `FUNIL_CONSTELACAO/` | classificação e contrato de decisão | `DECISOES.md`; futuro `02 - produtos e método/` ou `03 - ofertas e funis/` |
| copy ou conteúdo | fonte/oferta catalogada; materiais em `Cartomancia Sistêmica/`, `CRIATIVOS/` ou subprojeto explícito | `00 - governança continuum/10-skills/copywriting-fable5.skill.md` + `stop-slop.skill.md`; voz somente por overlay validado | artefato contratado + diário; não iterar por padrão |
| peça-mestra | fontes da oferta + contrato explícito | capacidades de copy + `copywriting-avancado.skill.md` | artefato contratado + auditoria |
| página | `Páginas de vendas/`, `páginas script de vendas/` ou workspace explicitado | `METODO-PAGINA-DE-VENDAS.md` + `pagina-de-vendas.skill.md` | área original durante transição; futuro `04 - web design/` |
| criativo de mídia | `MODUS-OPERANDI.md` + `CRIATIVOS/`, `01 - Criativos/` e oferta explicitada | `METODO-TRAFEGO-PAGO.md` + gestão de tráfego | área original durante transição; futuro `05 - design e criativos/` |
| gestão Meta Ads | `MODUS-OPERANDI.md` + `meta-ads/` e `URLs ADS.txt`; dados atuais sempre `A VALIDAR` até verificação | `METODO-TRAFEGO-PAGO.md` + `gestao-trafego.skill.md` | diagnóstico ou ação proposta; futuro `06 - mídia paga/` |
| dashboard ou dados | `00 - Governança/index.html` é dashboard legado, não política; usar a fonte operacional explicitada | análise orientada pela fonte | futuro `08 - dados e dashboards/`; registrar data e limitação |
| operação ou task | documentos raiz + `09 - operação/` + task explícita | classificação, execução contratada e compliance | diário, log, fila, status e handoff |
| fonte bruta | PDFs, `arquivos aulas/`, mapas mentais, `insights/`, `Provas sociais/` ou arquivo listado no manifesto | extração/síntese sem alterar origem | síntese assinada; futuro `01 - contexto/` ou `02 - produtos e método/` |

Quando houver dúvida sobre localização, consultar:

1. `09 - operação/CATALOGO-ACERVO-LEGADO.md`;
2. `09 - operação/inventarios/GATE-1-MANIFESTO-GUILHERME.tsv`;
3. `09 - operação/MAPA-MIGRACAO.md`.

## 6. Métodos, skills e overlays

### 6.1 Réplica imutável

`00 - governança continuum/` contém cópias byte a byte de métodos e skills selecionados da Governança canônica. Essas cópias:

- são somente leitura;
- não recebem ajuste local, header, correção ou fatos do cliente;
- não tornam exemplos, números, ferramentas ou referências internas em fatos deste repositório;
- somente mudam por task explícita de ressincronização, com manifesto e hashes.

### 6.2 Generalização obrigatória

Toda skill futura deve separar:

1. `capacidade geral`: processo reutilizável para qualquer cliente;
2. `overlay local`: ponteiros para voz, oferta, decisão, estado e restrições deste cliente;
3. `contrato da tarefa`: objetivo, escopo, entradas, saída, gates e arquivos autorizados.

Não criar clones exclusivos como `funil-[cliente]` ou `[cliente]-voice` quando a diferença puder viver em uma fonte/overlay. Perfis linguísticos, fatos e ecossistemas pertencem às áreas 01–03; a skill apenas sabe como consumi-los.

Mecanismos observados em Débora foram generalizados nos contratos de decisão, diário, propagação, superação e fechamento. Nenhum fato, voz, oferta, página ou decisão de Débora pode entrar neste repositório.

## 7. Contrato mínimo de execução

Antes de produzir ou alterar algo, declarar ou inferir de forma explícita:

- objetivo;
- classe e modo;
- arquivos de leitura;
- arquivos autorizados para escrita;
- fonte dominante;
- capacidade dominante;
- decisões/alçadas afetadas;
- critério de aceite;
- writeback e rollback.

Escopo ausente ou contraditório: parar a mutação, registrar a lacuna e pedir decisão.

## 8. Alçadas

### Permitido sem confirmação adicional, quando dentro da task

- ler arquivos locais;
- inventariar, hashear, classificar e diagnosticar;
- criar documentação local e artefatos explicitamente pedidos;
- testar referências, rotas e consistência;
- registrar diário, handoff, status e fila de propagação.

### Exige confirmação humana específica

- decidir ou alterar produto, preço, promessa, entrega ou público;
- publicar página, anúncio, conteúdo ou ativo;
- pausar/criar campanha, alterar orçamento, segmentação, evento, conta ou integração;
- fazer deploy, alterar domínio, checkout, CRM ou automação externa;
- excluir, sobrescrever evidência ou promover fonte incerta a vigente;
- executar propagação fora dos arquivos autorizados pela task atual.

### Exceção operacional específica de Guilherme

`DEC-2026-08-26-001` institui duas trilhas: `ESTRATEGIA-CONTINUUM` e `EXECUCAO-DIRIGIDA-GUILHERME`.

Na execução dirigida, um pedido direto e preservável de Guilherme autoriza selecionar e criar/publicar o anúncio solicitado dentro de campanha, objetivo, público, geografia, orçamento e teto já aprovados por Victor. A divergência com a estratégia recomendada deve ser registrada, mas não bloqueia a execução nem reabre o planejamento.

`Subir` sem pedido explícito de ativação significa deixar em `PAUSED`. Campanha nova, objetivo novo, mudança de verba/teto, público, geografia, destino, oferta, promessa ou fluxo continuam sob autorização específica de Victor/Continuum. Política de plataforma, consentimento, veracidade e risco jurídico continuam como gates duros.

A regra completa, inclusive a fronteira econômica da relação e a ausência de precedente para outros clientes, vive em `MODUS-OPERANDI.md`.

Para ação externa, usar:

```text
AÇÃO PROPOSTA:
IMPACTO ESPERADO:
RISCO:
COMO REVERTER:
AUTORIDADE NECESSÁRIA:
ARQUIVOS/SISTEMAS AFETADOS:
```

## 9. Circuito obrigatório de writeback

```text
solicitação
  → classificação da área e do modo
  → contexto mínimo
  → política + decisão + estado + fonte
  → capacidade dominante
  → contrato da execução
  → execução dentro da alçada
  → verificação
  → DIARIO-DE-BORDO.md + log da área
  → FILA-PROPAGACAO.md
  → STATUS.md, somente se o estado mudou
  → handoff + gate
```

Uma decisão apenas sinaliza propagação. A fila não autoriza editar arquivos fora do contrato atual.

## 10. Status documental e superação

Documentos operacionais novos usam uma das linhas:

```text
> STATUS: VIGENTE · fonte
> STATUS: VIGENTE · derivado de [origem] · sync AAAA-MM-DD
> STATUS: EM TRANSIÇÃO · não canônico
> STATUS: HISTÓRICO · não editar
> STATUS: SUPERADO por [caminho/ID] em AAAA-MM-DD · não usar como fonte
> STATUS: A VALIDAR · autoridade: [responsável]
```

Fontes brutas e binários são classificados em catálogo/manifesto lateral. Não reescrever apenas para inserir status.

## 11. Fechamento de sessão

Antes de concluir trabalho relevante:

1. verificar somente o escopo contratado;
2. registrar o que mudou e o que não mudou;
3. gravar decisões com autoridade e proveniência;
4. atualizar a fila sem propagar automaticamente;
5. atualizar `STATUS.md` se houver mudança verificada;
6. registrar rollback;
7. produzir handoff quando houver gate, bloqueio ou continuidade.

## 12. Proteções da transição

- Governança e Débora são referências somente leitura.
- O kernel v3 está preservado em `10 - registros e arquivo/governanca-pre-iteracao/`.
- Nenhum caminho operacional legado foi movido pela Fase 2.
- O `CLAUDE.md.bak-20260615` original permanece na raiz temporariamente e também está preservado no arquivo.
- Divergências de Pixel, estado de mídia, páginas, preços e atividade de funis continuam abertas; nunca corrigir por suposição.
- A arquitetura futura existe para roteamento, não para declarar que a canonização ou a migração já ocorreram.
