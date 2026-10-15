# -*- coding: utf-8 -*-
"""Gera entregas-cliente/fonte/plano-divulgacao.html a partir dos dois combos.

Uso (na raiz da conta):  py -I entregas-cliente/fonte/gerar_plano_divulgacao.py
PDF: Chrome sem interface (README de 90-templates/pdf-noturno).
As legendas saem dos combos; este script não contém copy de post.
"""
import io
import re
import html
import os

AQUI = os.path.dirname(os.path.abspath(__file__))
CONTA = os.path.abspath(os.path.join(AQUI, "..", ".."))


def ler(nome):
    return io.open(os.path.join(CONTA, "conteudo-instagram", nome), encoding="utf-8").read()


EV = ler("01-COMBO-EVENTO.md")
ES = ler("02-COMBO-EMOTIONAL-SPEAKING.md")


def bloco(cod):
    src = EV if cod.startswith("EV") else ES
    m = re.search(r"^### " + re.escape(cod) + r" · (.+?)$(.*?)(?=^### |^## |\Z)", src, re.S | re.M)
    assert m, cod
    return m.group(1).strip(), m.group(2)


def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
    s = re.sub(r"\{\{(.+?)\}\}", lambda m: "[" + m.group(1).lower().replace("_", " ") + "]", s)
    return s


def peca(cod, quando):
    titulo, corpo = bloco(cod)
    corpo = corpo.replace("{{QUANDO}}", quando)
    out = ["<h3>%s · %s</h3>" % (cod, html.escape(titulo))]
    fmt = re.search(r"\*\*Formato:\*\* (.+)", corpo)
    telas = re.search(r"\*\*Telas:\*\* (\d+)", corpo)
    if fmt:
        out.append('<p class="sub">Formato: %s</p>' % inline(fmt.group(1).strip()))
    if telas:
        out.append('<p class="sub">Carrossel de %s telas</p>' % telas.group(1))
    arte = re.search(r"\*\*Arte[^*]*\*\*\s*\n((?:>.*\n?)+)", corpo)
    if arte:
        linhas = [l[1:].strip() for l in arte.group(1).splitlines() if l.strip()]
        out.append(
            '<div class="copiar-rotulo">Texto da arte</div><div class="copiar">'
            + "".join("<p>%s</p>" % inline(l) for l in linhas)
            + "</div>"
        )
    linhas_tab = re.findall(r"^\| (\d+)(?: · [^|]+)? \| (.+?) \| [^|]+ \|$", corpo, re.M)
    if linhas_tab:
        out.append(
            '<div class="copiar-rotulo">Texto de cada tela</div><div class="copiar">'
            + "".join("<p><strong>%s.</strong> %s</p>" % (n, inline(tx)) for n, tx in linhas_tab)
            + "</div>"
        )
    leg = re.search(r"\*\*Legenda:\*\*\s*\n(.*?)(?=\n\*\*CTA:\*\*|\Z)", corpo, re.S)
    assert leg, cod
    paras = [p.strip() for p in re.split(r"\n\s*\n", leg.group(1)) if p.strip()]
    out.append(
        '<div class="copiar-rotulo">Legenda</div><div class="copiar">'
        + "".join("<p>%s</p>" % inline(p.replace("\n", " ")) for p in paras)
        + "</div>"
    )
    cta = re.search(r"\*\*CTA:\*\* (.+)", corpo)
    if cta:
        out.append('<p class="sub">Fecho: %s</p>' % inline(cta.group(1).strip()))
    return "\n".join(out)


ANTES = "Janeiro, em Florianópolis"
DEPOIS = "[dia] de janeiro, [local]"

SEMANAS = [
    ("Semana 1", "13 a 18 de outubro", [("EV-01", ANTES), ("ES-01", ANTES)],
     "A primeira palavra que vem quase sempre é a certa.", None),
    ("Semana 2", "19 a 25 de outubro", [("EV-C1", ANTES), ("ES-09", ANTES)],
     "O laptop rosa da Xuxa que você ganhou quando era criança.", None),
    ("Semana 3", "26 de outubro a 1º de novembro", [("EV-02", ANTES), ("ES-05", ANTES)],
     "O que fazer quando dá branco no meio da frase.", None),
    ("Semana 4", "2 a 8 de novembro", [("EV-13", ANTES), ("ES-02", ANTES)],
     "Por que você começa pelo corpo: respiração, postura, olhar.", None),
    ("Semana 5", "9 a 15 de novembro", [("EV-03", ANTES), ("ES-C1", ANTES)],
     "A ideia de que só se fala inglês morando fora.",
     "Na ES-C1, a legenda abre dizendo que essa frustração chega muito até você. Confira se é assim antes de publicar."),
    ("Semana 6 · a do anúncio", "16 a 22 de novembro, ou a semana em que o local confirmar",
     [("EV-14", DEPOIS), ("EV-C2", DEPOIS)],
     "Você mostrando o espaço, gravado lá, no dia da visita.",
     "A ordem do dia do anúncio: nós atualizamos a página, você avisa quem já comprou, e só depois o post vai para o feed."),
    ("Semana 7 · última da pré-venda", "23 a 29 de novembro", [("EV-15", DEPOIS), ("EV-06", DEPOIS)],
     "A aluna que não falava no grupo misto.",
     "Na EV-06, a legenda abre com \"toda vez que eu falo dessa tarde, alguém me manda essa mensagem\". "
     "Se isso ainda não aconteceu, troque a abertura por \"Essa é a dúvida que eu mais espero ouvir sobre essa tarde\"."),
]

partes = []
for nome, datas, pecas, reel, nota in SEMANAS:
    partes.append('<div class="page-break"></div><h2>%s</h2><p class="sub">%s</p>' % (nome, datas))
    for cod, quando in pecas:
        partes.append(peca(cod, quando))
    partes.append(
        "<h3>O reel da semana</h3><p><strong>Tema:</strong> %s</p><p>Trinta a sessenta segundos, uma ideia, você falando para a câmera.</p>"
        % html.escape(reel)
    )
    if nota:
        partes.append('<div class="nota"><p>%s</p></div>' % html.escape(nota))

MAPA = io.open(os.path.join(AQUI, "mapa.svg"), encoding="utf-8").read()
MOLDE = io.open(os.path.join(AQUI, "molde.html"), encoding="utf-8").read()

DOC = MOLDE.replace("<!--MAPA-->", MAPA).replace("<!--SEMANAS-->", "\n".join(partes))
io.open(os.path.join(AQUI, "plano-divulgacao.html"), "w", encoding="utf-8", newline="\n").write(DOC)
print("html ok", len(DOC))
