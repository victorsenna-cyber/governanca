# -*- coding: utf-8 -*-
"""Monta o pacote de upload para o Gerenciador de Arquivos da Hostinger.

Uso, na raiz da conta:   py -I montar-hostinger.py

Gera  hostinger/public_html/<pasta>/   (cópia limpa de cada site/)
      hostinger/<pasta>.zip            (um zip por página, para subir e extrair)
      hostinger/MANIFESTO.txt          (SHA-256 de cada arquivo, para conferir no ar)

Rodar de novo sempre que um site/ mudar (ex.: virada de preço em 30/11).
Só copia index.html, script.js, styles.css e assets/. README, qa/ e index1/ ficam de fora.
"""
import hashlib
import os
import shutil
import zipfile

AQUI = os.path.dirname(os.path.abspath(__file__))
SAIDA = os.path.join(AQUI, "hostinger")
RAIZ = os.path.join(SAIDA, "public_html")

PAGINAS = [
    ("ingles", "pagina-1-ingles-para-brasileiros"),
    ("portuguese", "pagina-2-portugues-para-estrangeiros"),
    ("experience", "pagina-3-evento"),
]
ARQUIVOS = ("index.html", "script.js", "styles.css")


def sha(caminho):
    h = hashlib.sha256()
    with open(caminho, "rb") as f:
        h.update(f.read())
    return h.hexdigest()


if os.path.isdir(RAIZ):
    shutil.rmtree(RAIZ)
os.makedirs(RAIZ)

linhas = []
for pasta, origem in PAGINAS:
    src = os.path.join(AQUI, origem, "site")
    dst = os.path.join(RAIZ, pasta)
    os.makedirs(dst)
    for nome in ARQUIVOS:
        shutil.copy2(os.path.join(src, nome), os.path.join(dst, nome))
    if os.path.isdir(os.path.join(src, "assets")):
        shutil.copytree(os.path.join(src, "assets"), os.path.join(dst, "assets"))

    zpath = os.path.join(SAIDA, pasta + ".zip")
    if os.path.exists(zpath):
        os.remove(zpath)
    total = 0
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
        for base, _, nomes in os.walk(dst):
            for nome in sorted(nomes):
                cheio = os.path.join(base, nome)
                rel = os.path.relpath(cheio, RAIZ).replace(os.sep, "/")
                z.write(cheio, rel)
                linhas.append("%s  %s" % (sha(cheio), rel))
                total += 1
    print("%-11s %2d arquivos  %s" % (pasta, total, os.path.basename(zpath)))

with open(os.path.join(SAIDA, "MANIFESTO.txt"), "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(sorted(linhas, key=lambda l: l.split("  ", 1)[1])) + "\n")
print("manifesto:", len(linhas), "arquivos")
