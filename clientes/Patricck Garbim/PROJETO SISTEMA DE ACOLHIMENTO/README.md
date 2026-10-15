# Sistema de Acolhimento

Sistema web de gestão para comunidade terapêutica, equivalente ao Sys CT.
A especificação completa está em `Levantamento_Sys_CT_FINAL.pdf`, e as regras do projeto em `CLAUDE.md`.
O andamento está em `docs/PROGRESSO.md`.

## Tecnologia

- Laravel 12 (PHP 8.3), telas montadas no servidor com Bootstrap 5
- PostgreSQL 16
- Testes automáticos com Pest

Neste computador, o PHP e o PostgreSQL rodam dentro do WSL (Ubuntu 24.04).

## Como usar no dia a dia

- **Abrir o sistema:** dois cliques em `iniciar-sistema.bat` e acesse http://localhost:8090.
- **Usuários de teste:** veja `docs/TESTE_ETAPA_1.md`.

## Comandos (no terminal do Ubuntu, dentro da pasta do projeto)

```bash
# Rodar todos os testes
./vendor/bin/pest

# Recriar o banco de desenvolvimento com as listas e os usuários fictícios
php artisan migrate:fresh --seed

# Criar o primeiro Administrador numa instalação nova (a senha é pedida no terminal)
php artisan sistema:criar-administrador email@exemplo.test "Nome do Administrador"
```

## Configuração

Copie `.env.example` para `.env` e preencha a senha do banco (`DB_PASSWORD`) e `SENHA_USUARIOS_TESTE`.
O arquivo `.env` nunca vai para o Git.
