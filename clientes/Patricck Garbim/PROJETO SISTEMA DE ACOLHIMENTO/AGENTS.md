# Sistema de gestão para comunidade terapêutica (equivalente ao Sys CT)

## O que é este projeto
Estamos construindo um sistema web próprio, equivalente ao Sys CT, para gestão de comunidade terapêutica e clínica de dependência química. O dono do projeto é Patricck Di Karllo Garbim, do Instituto Casa do Pai. Quem usa são conselheiros, psicólogos, psiquiatras, enfermeiros, escritório e administração.

## Documento de referência (leia antes de qualquer tarefa)
O arquivo `Levantamento_Sys_CT_FINAL.pdf`, na raiz do repositório, é a especificação completa. Ele tem 13 seções. Para cada tarefa, leia as seções que dizem respeito a ela e use os nomes exatos dos rótulos das telas.
- Seções 1 e 2: visão geral e menu (14 itens).
- Seções 3 a 5: todos os módulos, campos, listas de opções e telas.
- Seção 6: modelo de dados.
- Seção 7 e 8: fluxos, relatórios e documentos.
- Seção 12: banco de dados, regras de servidor, prompt do Assistente IA, avisos, validações e permissões por cargo.
- Seção 13: ordem de construção em cinco etapas.
Se o PDF e este arquivo divergirem, vale este arquivo. Se algo não estiver no PDF, pergunte antes de inventar.

## Regras que nunca podem ser quebradas
1. **Dados reais nunca entram no repositório, nos testes ou nos exemplos.** Use só dados fictícios (nomes, CPFs e telefones inventados). Isso inclui prints, planilhas e arquivos de teste.
2. **Registro clínico nunca é apagado de verdade.** Exclusão é lógica: marca como excluído e guarda quem excluiu e quando.
3. **Cada cargo vê só a sua área.** Psicólogo só a área de Psicólogo, Psiquiatra só a de Psiquiatria, Enfermeiro só a de Enfermagem, e assim por diante. Exceção: todos os cargos leem a aba Anamnese e os dados de Acolhimento. Os perfis se somam. O servidor recusa o acesso mesmo que a pessoa digite o endereço direto. A matriz completa está na seção 12 do PDF.
4. **Leitura de aba clínica fica registrada** (usuário, acolhido, data e hora), por causa da LGPD.
5. **Fase do acolhido** é calculada pelos dias desde a data do acolhimento: triagem do dia 1 ao 15; fase 1 até o dia 90; fase 2 do dia 91 ao 180; fase 3 do dia 181 ao 270; Continuidade depois. O PASSE cai 5 meses após a admissão.
6. **O prontuário pertence ao acolhimento (PAS), não à pessoa.** Quem volta à CT ganha acolhimento e PAS novos.
7. Senhas, chaves e tokens nunca vão para o código. Use variáveis de ambiente e arquivo `.env` fora do controle de versão.

## Como trabalhar
- Trabalhe **uma etapa por vez**, na ordem da seção 13. Não comece a etapa seguinte sem eu pedir.
- Antes de programar uma etapa, apresente um plano curto (tabelas, telas, rotas, testes) e espere o meu "pode fazer".
- Mudanças em pequenos passos, cada um com testes que rodam. Rode os testes antes de dizer que terminou.
- Faça commits pequenos, com mensagem em português, dizendo o que mudou.
- Ao fim de cada etapa, escreva em `docs/PROGRESSO.md` o que ficou pronto, o que falta e as decisões tomadas.
- Antes de ações que mudam muita coisa (apagar arquivos, trocar o banco, mexer em permissões), pergunte.

## Idioma e estilo
- Responda sempre em português do Brasil, em texto direto e humano, sem enrolação.
- Telas, mensagens, rótulos e documentação em português, com os nomes exatos do PDF (por exemplo "Registrar Saída", "Inserir Evolução do PAS", "Assistente IA").
- Não use travessão nos textos. Nomes de código (variáveis, tabelas, rotas) podem seguir o padrão da tecnologia escolhida, mas os nomes de negócio devem vir do PDF.

## Decisões técnicas (preencher quando forem tomadas)
- Linguagem e estrutura: Laravel (PHP), telas montadas no servidor (Blade) com Bootstrap 5, testes em Pest
- Banco de dados: PostgreSQL
- Onde vai rodar: A DEFINIR
- Uma só CT no começo, ou várias: uma só CT (mesmo assim toda tabela leva `ct_id`)
