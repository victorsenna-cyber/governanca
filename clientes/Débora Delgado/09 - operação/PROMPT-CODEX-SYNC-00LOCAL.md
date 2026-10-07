# Prompt Codex — sincronizar a pasta da Débora para 00 - Local (espelho)

> STATUS: SUPERADO em 20/07/2026 · NÃO EXECUTAR. A cópia operacional canônica agora é
> `00 - Local\01 - Governança\clientes\Débora Delgado`. As origens anteriores foram
> preservadas como leitura/legado. Este prompt contém `/MIR` para outro destino e fica
> apenas como registro histórico; qualquer sincronização futura exige uma decisão nova.

> Abrir o Codex em qualquer pasta que alcance os dois caminhos (ex.: `C:\Users\zioni\Organizacional\01 - Continuum`). Colar o prompt abaixo.

---

## Contexto e regra de ouro
- **FONTE DA VERDADE (origem, somente leitura):**
  `C:\Users\zioni\Organizacional\01 - Continuum\04 - Onboarding\Operação\Débora Delgado`
- **DESTINO (espelho, recebe as mudanças):**
  `C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\clientes\debora\onboarding`
- **Sincronização UNIDIRECIONAL: origem → destino.** NUNCA escrever de volta na origem. NUNCA usar o destino como fonte.

## Prompt para o Codex

> Sincronize (espelhe) o conteúdo da pasta ORIGEM para a pasta DESTINO abaixo, de forma **unidirecional (origem → destino)**. A ORIGEM é a fonte da verdade e **não pode ser modificada** em hipótese alguma.
>
> ORIGEM (não modificar): `C:\Users\zioni\Organizacional\01 - Continuum\04 - Onboarding\Operação\Débora Delgado`
> DESTINO (espelho): `C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\clientes\debora\onboarding`
>
> Requisitos:
> 1. Copie todos os arquivos e subpastas da ORIGEM para o DESTINO, criando o DESTINO se não existir.
> 2. Atualize no DESTINO os arquivos que mudaram na ORIGEM (por data/tamanho/hash).
> 3. Remova do DESTINO o que não existe mais na ORIGEM (espelho fiel) — **mas só dentro do DESTINO**, nunca na origem.
> 4. **Nunca escreva, mova, renomeie ou apague nada na ORIGEM.** Se qualquer passo exigir tocar a origem, pare e avise.
> 5. Preserve a estrutura de pastas idêntica.
> 6. **Exclua do espelho** (não copiar): `.git/`, `node_modules/`, arquivos temporários (`~$*`, `*.tmp`), e a pasta `_arquivo/` se quiser um espelho enxuto (opcional — confirmar). Copie normalmente os `.md`, `.html`, `.json`, `.css`, imagens e áudios.
> 7. Ao final, gere um **relatório**: quantos arquivos copiados/atualizados/removidos, e liste os caminhos alterados.
>
> Método sugerido no Windows (escolha o mais seguro que tiver):
> - **robocopy** (nativo, ideal para espelho):
>   `robocopy "C:\Users\zioni\Organizacional\01 - Continuum\04 - Onboarding\Operação\Débora Delgado" "C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\clientes\debora\onboarding" /MIR /XD ".git" "node_modules" /XF "~$*" "*.tmp" /R:2 /W:2 /NP /LOG:"%TEMP%\sync-debora.log"`
>   - `/MIR` espelha (inclui remoção no destino); `/XD`/`/XF` excluem pastas/arquivos; o LOG guarda o relatório.
>   - ⚠️ `/MIR` só age no DESTINO — confirme que os caminhos origem/destino estão na ordem certa ANTES de rodar (origem primeiro). Rode um **teste com `/L`** (list-only, não copia) primeiro e mostre o que faria.
> - Alternativa: script PowerShell com `Copy-Item`/`Compare-Object` se preferir controle fino.
>
> **Ordem de execução:** (1) rode `/L` (simulação) e mostre o relatório do que seria copiado/removido; (2) só depois da minha confirmação, rode de verdade sem `/L`.

## Automação (opcional, depois de validar 1x)
- Pode virar tarefa agendada do Windows (Agendador de Tarefas) rodando o robocopy 1×/dia, ou um hook manual "sincronizar antes de fechar o dia".
- **Sempre origem → destino.** Se algum dia quiser o inverso, é outra decisão explícita (e arriscada — a fonte da verdade é a pasta da Operação).

## Registro
Após sincronizar, anexar o relatório (copiados/atualizados/removidos) e registrar 1 linha no `DIARIO-DE-BORDO.md` da origem — **feito pelo humano ou por uma sessão separada**, já que o Codex não deve escrever na origem.
