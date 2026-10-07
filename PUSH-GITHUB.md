# Push para o GitHub — instruções (27/07/2026)

O repositório já está **iniciado, commitado e com o remote configurado** nesta pasta.
Falta só o `push`, que precisa sair da sua máquina (o ambiente do Claude não tem rede para o GitHub).

---

## 1. Confirmar que o repo existe no GitHub e é PRIVADO

Abrir <https://github.com/victorsenna-cyber/governan-a>

- **Se não existir:** criar em <https://github.com/new> com o nome `governan-a`,
  marcando **Private**. **Não** marcar "Add a README", "Add .gitignore" nem licença —
  o repo precisa nascer vazio, senão o push dá conflito.
- **Se já existir:** conferir em *Settings → General → Danger Zone* que está
  como **Private**. Este repo tem dados de clientes, registros jurídicos,
  políticas financeiras e o `STATUS.md` com pipeline e caixa.

## 2. Rodar o push

Abrir o **PowerShell** e colar:

```powershell
cd "C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\01 - Governança"
git config http.postBuffer 524288000
git push -u origin main
```

O `http.postBuffer` evita erro de HTTP em push grande — são ~287 MB.

## 3. Autenticação

Na primeira vez o Git vai pedir credencial:

- **Janela do navegador / Git Credential Manager** → basta logar. Caminho normal.
- **Se pedir usuário e senha no terminal:** a senha **não** é a do GitHub, é um
  Personal Access Token. Gerar em
  <https://github.com/settings/tokens> → *Generate new token (classic)* →
  marcar o escopo **`repo`** → copiar e colar como senha.

---

## O que ficou de fora do versionamento

Ver `.gitignore`. Em resumo:

| Excluído | Motivo |
|---|---|
| `70-metodologias-chave/` (12 PDFs, 71 MB) | Livros de terceiros com copyright — Hormozi, Brunson, Rackham etc. Subir para o GitHub expõe a risco de DMCA. Continuam locais, e a fonte primária segue em `..\LIVROS\`. |
| `Onboarding Orquestrado - Donna Weber.pdf` em `clientes/debora/` | Cópia do mesmo livro. |
| `Thumbs.db`, `.DS_Store`, `~$*`, `*.tmp` | Lixo de sistema operacional. |
| `node_modules/`, `.venv/`, `__pycache__/`, `.next/`, `.cache/` | Dependências e cache regeneráveis. |
| `.env`, `*.key`, `*.pem`, `credentials*.json` | Rede de segurança contra vazar segredo. Hoje não existe nenhum arquivo desses no repo. |

`build/` e `dist/` **não** foram ignorados de forma ampla: este é um repo de
documentos, e uma pasta com esse nome dentro de projeto de cliente pode ser a
única cópia de um entregável (é o caso de `clientes/Débora Delgado/04 - web design/build`).

---

## Depois do primeiro push

O commit inicial é grande porque carrega 287 MB de PDF, imagem e zip de cliente.
Do segundo commit em diante, só o diff sobe — e como o repo é 949 arquivos `.md`
contra 54 PDFs, o dia a dia é leve.

Rotina normal daqui em diante:

```powershell
cd "C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\01 - Governança"
git add -A
git commit -m "descrição da mudança"
git push
```

### Ponto de atenção para depois

Existem duas pastas de Débora em `clientes/`: `Débora Delgado/` (65 MB) e
`debora/` (61 MB). O `CLAUDE.md` §7 aponta `Débora Delgado/` como a canônica.
As duas subiram, para não perder nada — mas vale consolidar e deixar a
divergência resolvida no repo.
