# Integração de foto e depoimentos — Página 1

> **Data:** 03/08/2026  
> **Escopo:** D6 — origem e prova  
> **Estado:** implementado localmente; produção inalterada

## Decisão de curva de voltagem

A prova social entra na D6, depois de a página apresentar o método e a experiência de aprendizagem e antes da qualificação e da oferta.

Essa posição cumpre três funções:

1. transforma a explicação do método em segurança percebida;
2. reduz a dúvida antes de a pessoa avaliar o próprio encaixe;
3. preserva a D8 rubi como único clímax decisório da página.

A composição evita uma parede de cards: as 15 capturas ocupam o mesmo plano e aparecem uma por vez, em rotação.

## Foto escolhida

**Origem:** `contexto/fotos/WhatsApp Image 2026-08-02 at 19.43.310.jpeg`  
**Destino web:** `site/assets/jessica-oliveira-professora.jpeg`

Esta versão quase quadrada substitui o retrato vertical. A imagem usa sua proporção natural de 828 × 804 px, sem `aspect-ratio`, `object-fit` ou corte forçado. Assim, a presença de Jéssica fica mais larga e menos alta dentro da dobra.

O retrato aparece somente na D6, conforme a decisão anterior de manter o hero tipográfico.

## Rotação dos depoimentos

As 15 capturas de `contexto/depoimentos/` foram copiadas individualmente para `site/assets/depoimentos/depoimento-01.jpeg` até `depoimento-15.jpeg`.

A ordem visual começa pelos três relatos mais diretamente ligados à promessa da página:

1. “divisor de águas”, método e ambiente seguro (`depoimento-12.jpeg`);
2. confiança para falar com naturalidade (`depoimento-02.jpeg`);
3. confiança, atenção e aulas dinâmicas (`depoimento-09.jpeg`).

Depois entram as outras 12 capturas. A rotação avança a cada nove segundos, pausa com mouse ou foco, respeita movimento reduzido e também pode ser controlada pelas setas visuais ou pelas teclas direcionais.

## Critérios de integridade

- todas as 15 capturas são exibidas integralmente, sem corte ou edição do conteúdo;
- nenhuma promessa, prazo, garantia ou resultado foi acrescentado;
- cada captura abre em tamanho original para conferência;
- a altura do carrossel permanece estável durante a troca;
- sem JavaScript, o primeiro e mais forte depoimento continua disponível;
- CTAs, preços, formulário, hero e configuração de produção não foram alterados.

## Arquivos alterados

- `site/index.html`
- `site/styles.css`
- `site/script.js`
- `site/assets/jessica-oliveira-professora.jpeg`
- `site/assets/depoimentos/depoimento-01.jpeg` a `depoimento-15.jpeg`
- `05-GATE-VISUAL-E-QA.md`
- `09-INTEGRACAO-FOTO-E-DEPOIMENTOS.md`

## Gate restante para publicação

Antes de publicar esta revisão, confirmar autorização de uso público do retrato de Jéssica e das 15 capturas de feedback. Essa confirmação é distinta da integração local realizada aqui.
