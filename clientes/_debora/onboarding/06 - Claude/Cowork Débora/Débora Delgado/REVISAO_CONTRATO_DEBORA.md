# Revisão Contratual — Minuta e Anexos (Continuum AI Systems × Débora Delgado)

> Revisão contratual sênior dos arquivos `MINUTA_CONTRATO_ASSESSORIA_DEBORA.md` e `ANEXOS_CONTRATUAIS_DEBORA.md`, com base na documentação de risco anterior. **Não é parecer jurídico** — deve ser validada por advogado habilitado no Brasil antes da assinatura.
>
> **Data:** 02/06/2026 · **Revisor:** Continuum AI Systems · **Lado:** CONTRATADA (Continuum) · **Base:** padrões comerciais gerais + análise de risco interna.

---

## Nota sobre o percentual da garantia (5% vs 10%)

O comando de revisão apontou que o combinado comercial original seria **10%** do faturamento bruto e que a minuta teria divergido para **5%**. Em resposta direta, a CONTINUUM **confirmou expressamente: "5% mesmo"**.

**Conclusão:** não há divergência a corrigir. O percentual vigente e confirmado é **5% do faturamento bruto mensal**. A minuta (Cláusula 16.3) e os anexos (Anexo II) **já refletem corretamente os 5%**. Nenhuma versão revisada com 10% foi gerada, pois contrariaria a decisão atual da CONTINUUM.

Localização das ocorrências de 5% (todas corretas e consistentes entre si):
- Minuta, Cláusula 16.3 e 16.4;
- Minuta, seção "Pontos para validação jurídica final" (cabeçalho e item 2);
- Anexos, Anexo II (cabeçalho e seção 6).

---

## 1. Diagnóstico executivo

A minuta está bem estruturada e protege adequadamente a CONTINUUM em escopo, dependências da cliente, limitação de responsabilidade e falhas de terceiros. As 28 cláusulas cobrem o combinado; os anexos são consistentes com o corpo; e a seção de validação jurídica é transparente quanto ao ponto sensível.

Confirmado o percentual em 5%, **não há inconsistência numérica remanescente**. O que resta são (a) os riscos estruturais da garantia (devolução de 2x e vínculo ao faturamento), que são inerentes ao modelo comercial escolhido e já sinalizados, e (b) campos em aberto a preencher antes da assinatura.

**Decisão recomendada: aprovar com ajustes** — preencher campos pendentes, fechar critérios de atribuição e submeter à validação jurídica. Não é necessário refazer cláusulas.

## 2. Inconsistências encontradas

Após a confirmação dos 5%, **nenhuma inconsistência material**. Minuta e anexos estão alinhados quanto a percentual (5%), teto (R$24.000), gatilho (1,5x / R$18.000) e natureza acessória da garantia. As pendências são lacunas de preenchimento (campos `[...]`), não contradições.

## 3. Riscos ALTOS

**R-A1 — Devolução de 2x sobre valor recebido (Cl. 16.2).** Exposição de até R$24.000 contra R$12.000 recebidos por serviço já executado. Risco de leitura como cláusula penal desproporcional, sujeita a redução judicial (art. 413 do Código Civil). Inerente ao modelo; mitigado pelas condições de validade (Cl. 17) e pela natureza acessória (Cl. 16.4).

**R-A2 — Pagamento vinculado ao faturamento bruto (Cl. 16.3).** Mesmo a 5%, atrelar a devolução ao faturamento bruto expõe a contabilidade da empresa e pode reforçar leitura de participação nos resultados. Mitigado pela Cl. 16.4 (não-caracterização), mas permanece ponto de validação jurídica. Recomenda-se adicionar **piso de parcela + prazo-limite de quitação** (ver seção 7).

**R-A3 — Descaracterização como sociedade/investimento/mútuo/dívida.** A combinação "devolução + percentual do faturamento" é o gatilho clássico. Cláusulas 2.4 e 16.4 endereçam, mas a redação final deve ser chancelada por advogado.

## 4. Riscos MÉDIOS

Critérios de atribuição (Cl. 15 / Anexo II) com modelo e janela ainda em aberto — sem fechar, a meta de 1,5x fica disputável. Verba mínima e período de veiculação em branco (Cl. 12.3), sendo pré-requisito da garantia. Comprovação do faturamento (Cl. 16.5) sem método definido. Rescisão sem culpa (Cl. 24.3) sem critério de devolução proporcional, dado o pagamento antecipado. LGPD (Cl. 21.2) sem definição de papéis controlador/operador.

## 5. Riscos BAIXOS

Escopo e itens fora do escopo bem delimitados (Cl. 5, 7 / Anexo I). Limitação de responsabilidade sólida (Cl. 19). Força maior e falhas de terceiros bem cobertas (Cl. 20). Propriedade intelectual adequada, com ressalva de metodologias/templates (Cl. 22). Anexos consistentes com o corpo.

## 6. Cláusulas que precisam ser corrigidas

Nenhuma correção de **percentual** é necessária (5% confirmado). As cláusulas a **completar** (preenchimento, não reescrita): 11.1 (SLA de aprovação); 12.3 (verba mínima e período de veiculação); 15 / Anexo II (modelo de atribuição, janela, Fonte de Verdade); 16.5 (método de comprovação do faturamento); 24.3 (devolução proporcional em rescisão sem culpa); 26–27 (foro/arbitragem); 21.2 (papéis LGPD); Anexo I seção 3 (volume de criativos/cortes).

**Recomendação de robustez (opcional, preserva o combinado):** acrescentar à Cláusula 16.3 um piso de parcela mensal e um prazo-limite de quitação — ver seção 7.

## 7. Redações sugeridas para as cláusulas críticas

**Cláusula 16.3 — confirmada em 5%, com reforço de segurança (recomendado):**
> "16.3. Forma de pagamento da garantia. Acionada e validada a garantia, a devolução será realizada mensalmente, mediante repasse de **5% (cinco por cento)** do faturamento bruto mensal da CONTINUUM AI SYSTEMS, observado o **valor mínimo de parcela de R$ [____]/mês** e o **prazo máximo de quitação de [18/24] meses**, ao fim do qual o saldo remanescente, se houver, torna-se exigível em parcela única, até o teto de R$24.000,00, momento em que a obrigação se extingue. O percentual de faturamento é mera forma de cálculo da parcela, não conferindo participação societária ou nos lucros (Cl. 16.4)."

*Por que:* a 5%, sem piso e sem prazo, a quitação pode se arrastar indefinidamente, o que reforça a aparência de "dívida atrelada ao faturamento". O piso de parcela e o prazo-limite fecham essa brecha sem alterar o percentual combinado.

**Cláusula 16.5 — comprovação do faturamento:**
> "16.5. (...) a CONTINUUM informará o faturamento bruto mensal de referência mediante **declaração assinada por seu representante legal e/ou contador**, acompanhada de [extrato/relatório fiscal simplificado], com periodicidade mensal, preservada a confidencialidade (Cl. 21), vedado o acesso a informações que excedam o estritamente necessário ao cálculo da parcela."

**Cláusula 15.2 / Anexo II — atribuição (fechar antes de assinar):**
> Definir: Fonte de Verdade = [PagTrust/checkout]; modelo = [last-click/data-driven]; janela = [7 dias clique / 1 dia view]; receita pré-existente excluída por linha de corte na data de início.

**Alternativa de menor risco (caso a CONTINUUM queira reduzir exposição no futuro):** substituir o vínculo ao faturamento por **parcelas fixas** (ex.: 12 × R$2.000) — mantém o valor de 2x e elimina o risco de descaracterização (R-A2/R-A3). Registrada apenas como opção; **não aplicada**, pois o combinado atual é 5% do faturamento.

## 8. Campos obrigatórios pendentes

CNPJ/CPF e endereços das partes; datas de início/término (Cl. 3.1); SLA de aprovação (11.1); verba mínima de mídia e período de veiculação (12.3); Fonte de Verdade, modelo e janela de atribuição (15 / Anexo II); data de mensuração da meta (Anexo II); método de comprovação do faturamento (16.5); prazos de cura e aviso de rescisão (24.1); critério de devolução proporcional (24.3); foro/arbitragem (26–27); papéis LGPD (21.2); volume de criativos e cortes (Anexo I, seção 3); e-mails oficiais (25.1); piso de parcela e prazo-limite, se adotada a redação reforçada da 16.3.

## 9. Checklist antes da assinatura

1. Percentual da garantia confirmado em **5%** — OK, padronizado em todos os documentos.
2. Preencher todos os campos `[...]` listados na seção 8.
3. Fechar e documentar os critérios de atribuição (Fonte de Verdade, modelo, janela).
4. Avaliar adoção do piso de parcela + prazo-limite na Cl. 16.3.
5. Definir método de comprovação do faturamento (16.5).
6. Validar coerência entre teto da garantia (R$24.000) e teto de responsabilidade (R$12.000).
7. Submeter à revisão jurídica formal (os 9 pontos da seção final da minuta).

## 10. Decisão recomendada

**Aprovar com ajustes.** O percentual está confirmado em 5% e a minuta/anexos já o refletem corretamente — não há cláusula a refazer nem versão revisada a gerar. Bastam: preencher os campos pendentes, fechar os critérios de atribuição, considerar o reforço da Cl. 16.3 (piso + prazo) e levar à validação jurídica. Os riscos R-A1, R-A2 e R-A3 são inerentes ao modelo comercial escolhido e estão devidamente sinalizados para decisão informada.

---

*Revisão elaborada com base nos arquivos da parceria e na documentação de risco interna. Não constitui parecer jurídico. Como o percentual de 5% foi confirmado pela CONTINUUM, não foram geradas versões revisadas da minuta ou dos anexos — os arquivos existentes permanecem válidos.*
