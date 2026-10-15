@echo off
REM Inicia o sistema neste computador. Depois abra http://localhost:8090 no navegador.
REM Para parar, feche esta janela.
echo Iniciando o sistema em http://localhost:8090 ...
wsl.exe -d Ubuntu-24.04 --cd "%~dp0." -e php artisan serve --host=0.0.0.0 --port=8090
pause
