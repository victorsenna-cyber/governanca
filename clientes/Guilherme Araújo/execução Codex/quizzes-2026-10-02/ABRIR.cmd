@echo off
cd /d "%~dp0"
start "" http://127.0.0.1:4173/permissao.html
start "" http://127.0.0.1:4173/signos.html
node server.cjs
