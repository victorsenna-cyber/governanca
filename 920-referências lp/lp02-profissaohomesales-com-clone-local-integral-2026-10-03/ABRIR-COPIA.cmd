@echo off
cd /d "%~dp0"
node _ferramentas\abrir.cjs
if errorlevel 1 pause
