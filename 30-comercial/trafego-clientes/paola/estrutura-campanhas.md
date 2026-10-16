# ESTRUTURA DE CAMPANHAS — Paola Lopes Rosa

> Método §5. Regra-mãe: 1 campanha por objetivo, mínimo de subdivisões que a verba sustenta. Nomenclatura da casa: `[cliente]-[canal]-[objetivo]-[funil]-[data]`, **com o campo `[produto]` acrescentado nesta conta** (método §5.5, campos da conta). Instituída em 14/10/2026, aplicada na campanha ativa no mesmo dia.

## 1. Nomenclatura (lei nesta conta)

Campos separados por hífen, **sempre na mesma posição e sempre preenchidos**, para filtrar no Gerenciador com *"contém"* e separar por posição numa planilha. Dentro de um campo não entra hífen: `25a60`, e não `25-60`. Tudo em minúscula, sem acento e sem espaço.

### Campanha · `[cliente]-[canal]-[produto]-[objetivo]-[funil]-[aaaammdd]`

| Campo | Valores | Por quê |
|---|---|---|
| cliente | `paola` | |
| canal | `meta` · `google` | |
| produto | `mesa` · `harmonia` · `grupo` | **o campo da conta.** Ela tem mais de uma oferta em fila (DEC-PL-24), e sem ele as campanhas de produtos diferentes ficam com o mesmo nome |
| objetivo | `conversa` (WhatsApp) · `venda` · `lead` · `engaj` | o resultado que a campanha compra, e não o nome do objetivo na Meta: esta usa o objetivo *Engajamento* para comprar conversa |
| funil | `topo` (público frio) · `meio` (engajou ou visitou) · `fundo` (conversou e não comprou) | o mesmo vocabulário da conta Patricck |
| data | `aaaammdd` do início da veiculação | ordena por data em qualquer lista. **Campanha nova = data nova; nunca se reaproveita nome** |

### Conjunto · `[público]-[idade]-[geo]-[posicionamento]-[segmentação]`

| Campo | Valores |
|---|---|
| público | `mulheres` · `todos` · `envolvidos` · `conversas` · `lal1` … |
| idade | `25a60` |
| geo | `br` · sigla da UF · cidade sem acento |
| posicionamento | **`igsr` (só Instagram Stories e Reels): único valor para conjunto novo desde 14/10/2026** (método §5.2) · legado: `ig` · `fbig` · `adv` |
| segmentação | `aberto` (sem interesse) · `int` (interesse) · `adv` (público Advantage ligado) |

### Anúncio · `[cliente]-[ângulo]-[formato]-[hook]-[linha]-[versão]`

O mesmo nome do arquivo da arte em `clientes/Paola Lopes Rosa/03 - criativos/`, com o `[hook]` explícito.

| Campo | Valores |
|---|---|
| ângulo | `area` · `relacionamento` (os dois do teste em curso, `PLANO-DE-MIDIA.md` §1) · reservados para peças futuras: `direcao` · `cetica` (versão 1, `CRIATIVOS.md` §2, fora do teste) |
| formato | `estatico` · `video` · `carrossel` |
| hook | `h1`, `h2`… dentro do ângulo e da versão |
| linha | `liso` (tela lisa, fonte do Instagram) · `rico` (fundo escuro, elementos e cor) · `DESIGN-V3.md` |
| versão | `v1`, `v2`, `v3`… da copy do ângulo |

🔴 **O nome não muda depois de o anúncio rodar.** Mudar o anúncio = anúncio novo com versão nova; o antigo é pausado com o nome que tinha. É o que deixa o número de cada peça legível no relatório.

## 2. Mapa vivo

| Campanha (nome) | Canal | Objetivo/evento | Conjuntos | Criativos ativos | Verba | Estágio | Desde |
|---|---|---|---|---|---|---|---|
| `paola-meta-mesa-conversa-topo-20261014` (`120253883442420785`) · conta `CA - 01` (`4531343710438456`) | Meta · só Instagram | conversa no WhatsApp (objetivo Engajamento, otimização Conversas) | 1 · `mulheres-25a60-br-ig-aberto` (`120253883758390785`) | 4 (abaixo) | R$ 200 no total, fim 20/10 23h59 | 🔴 **anúncios recusados em 15/10 23h51** pelo número do WhatsApp (`ad_not_approved_ctwa_number`), gasto R$ 0 · `LOG-DECISOES.md` 16/10 | 14/10/2026 |

| Anúncio | ID | Texto | Arte |
|---|---|---|---|
| `paola-area-estatico-h1-liso-v3` | `120253883758410785` | área da vida que não anda (`V3-AREA.md`) | `artes/paola-area-estatico-liso-v3-*.png` |
| `paola-area-estatico-h1-rico-v3` | `120253883758400785` | idem | `artes/paola-area-estatico-rico-v3-*.png` |
| `paola-relacionamento-estatico-h1-liso-v3` | `120253883758420785` | relacionamento que desanda (`V3-MODELO-RELACIONAMENTO.md`) | `artes/paola-relacionamento-estatico-liso-v3-*.png` |
| `paola-relacionamento-estatico-h1-rico-v3` | `120253883758430785` | idem | `artes/paola-relacionamento-estatico-rico-v3-*.png` |

**De → para (14/10/2026), para achar os nomes antigos em registros anteriores:**

| Nível | Antes | Depois |
|---|---|---|
| Campanha | `paola-mesa-whatsapp-teste01` | `paola-meta-mesa-conversa-topo-20261014` |
| Conjunto | `mulheres-br-aberto — Cópia` *(o conjunto original, `120253883445630785`, não aparece mais na conta)* | `mulheres-25a60-br-ig-aberto` |
| Anúncio | `Novo anúncio de Engajamento -` | `paola-area-estatico-h1-liso-v3` |
| Anúncio | `Novo anúncio de Engajamento — geral - azul` | `paola-area-estatico-h1-rico-v3` |
| Anúncio | `Novo anúncio de Engajamento — relacionamento` | `paola-relacionamento-estatico-h1-liso-v3` |
| Anúncio | `Novo anúncio de Engajamento — relacionamento - azul` | `paola-relacionamento-estatico-h1-rico-v3` |

O mapa entre anúncio e arte foi conferido pelo texto lido na prévia de cada anúncio e pela miniatura de cada criativo, comparada com as artes da pasta.

## 3. Convenção UTM deste cliente
Destino WhatsApp, sem página: não há UTM. A origem se lê pelo nome do anúncio no Gerenciador e pela palavra *conexão* na primeira mensagem, quando vier dos destaques.

## 4. Atribuição (travada)
Padrão da conta para conversas · não mudar até o fim do teste em 20/10.
