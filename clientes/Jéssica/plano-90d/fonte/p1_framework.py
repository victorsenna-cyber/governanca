# -*- coding: utf-8 -*-
"""Plano Estrategico 90 Dias - Jessica Oliveira | Emotional Speaking
Construtor do PDF. Identidade: vermelho fechado, dourado, off-white."""

import html as _html
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, PageBreak, KeepTogether,
                                Flowable, CondPageBreak)

# ---------------------------------------------------------------- fontes
F = "/usr/share/fonts/truetype/crosextra/"
pdfmetrics.registerFont(TTFont("Display", F + "Caladea-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Display-B", F + "Caladea-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Display-I", F + "Caladea-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Body", F + "Carlito-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Body-B", F + "Carlito-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Body-I", F + "Carlito-Italic.ttf"))
pdfmetrics.registerFontFamily("Display", normal="Display", bold="Display-B", italic="Display-I")
pdfmetrics.registerFontFamily("Body", normal="Body", bold="Body-B", italic="Body-I")

# ---------------------------------------------------------------- paleta
PAPER      = colors.HexColor("#FCFBF8")
OFFWHITE   = colors.HexColor("#F4F0E8")
INK        = colors.HexColor("#231F20")
INK_MUTED  = colors.HexColor("#5F5558")
RUBY       = colors.HexColor("#6E1830")
RUBY_DEEP  = colors.HexColor("#2D0C19")
RUBY_SOFT  = colors.HexColor("#8A2945")
GOLD       = colors.HexColor("#C6A56C")
GOLD_LIGHT = colors.HexColor("#E2C995")
LINE       = colors.HexColor("#D8D2C6")

PW, PH = A4
ML, MR, MT, MB = 22 * mm, 20 * mm, 24 * mm, 20 * mm
CW = PW - ML - MR

# ---------------------------------------------------------------- estilos
def S(name, **kw):
    base = dict(name=name, fontName="Body", fontSize=9.6, leading=14.6,
                textColor=INK, spaceAfter=0, spaceBefore=0, alignment=TA_LEFT)
    base.update(kw)
    return ParagraphStyle(**base)

ST = {
 "h1":      S("h1", fontName="Display-B", fontSize=23, leading=26, textColor=RUBY_DEEP, spaceAfter=3),
 "h1sub":   S("h1sub", fontName="Body", fontSize=9.4, leading=13.5, textColor=INK_MUTED, spaceAfter=11),
 "h2":      S("h2", fontName="Display-B", fontSize=13.6, leading=17, textColor=RUBY, spaceBefore=13, spaceAfter=5),
 "h3":      S("h3", fontName="Body-B", fontSize=10.2, leading=14, textColor=INK, spaceBefore=9, spaceAfter=3),
 "eyebrow": S("eyebrow", fontName="Body-B", fontSize=7.4, leading=10, textColor=GOLD, spaceAfter=4),
 "p":       S("p", spaceAfter=7),
 "plead":   S("plead", fontName="Display", fontSize=11.6, leading=17.4, textColor=INK, spaceAfter=9),
 "small":   S("small", fontSize=8.4, leading=12.2, textColor=INK_MUTED, spaceAfter=5),
 "li":      S("li", leftIndent=11, bulletIndent=1, spaceAfter=3.4),
 "linum":   S("linum", leftIndent=15, bulletIndent=1, spaceAfter=3.4),
 "th":      S("th", fontName="Body-B", fontSize=8.5, leading=11.4, textColor=PAPER),
 "td":      S("td", fontSize=8.7, leading=12.2),
 "tdb":     S("tdb", fontName="Body-B", fontSize=8.7, leading=12.2),
 "tdm":     S("tdm", fontSize=8.4, leading=11.8, textColor=INK_MUTED),
 "callh":   S("callh", fontName="Body-B", fontSize=9.4, leading=13, textColor=RUBY),
 "callp":   S("callp", fontSize=9.2, leading=13.6, spaceBefore=2),
 "quote":   S("quote", fontName="Display-I", fontSize=10.4, leading=15.6, textColor=RUBY_DEEP),
 "script":  S("script", fontSize=9.2, leading=14, textColor=INK),
 "cov1":    S("cov1", fontName="Display-B", fontSize=38, leading=41, textColor=PAPER),
 "cov2":    S("cov2", fontName="Display", fontSize=15, leading=21, textColor=GOLD_LIGHT),
 "cov3":    S("cov3", fontName="Body", fontSize=9.6, leading=15, textColor=colors.HexColor("#D9CFC4")),
 "cov4":    S("cov4", fontName="Body-B", fontSize=7.6, leading=11, textColor=GOLD),
}

def P(t, s="p"):   return Paragraph(t, ST[s])
def SP(h=6):       return Spacer(1, h)

def UL(items, style="li", bullet="—"):
    # bulletText tambem e literal: nunca passar entidade HTML aqui
    bullet = _html.unescape(bullet)
    return [Paragraph(t, ST[style], bulletText=bullet) for t in items]

def OL(items, style="linum"):
    return [Paragraph(t, ST[style], bulletText="%d." % (i + 1)) for i, t in enumerate(items)]

# ---------------------------------------------------------------- componentes
class Rule(Flowable):
    """Filete dourado curto."""
    def __init__(self, w=34, h=1.6, color=GOLD, space=7):
        Flowable.__init__(self); self.w, self.h, self.c, self.s = w, h, color, space
    def wrap(self, aw, ah): return (self.w, self.h + self.s)
    def draw(self):
        self.canv.setFillColor(self.c)
        self.canv.rect(0, self.s, self.w, self.h, stroke=0, fill=1)

class Band(Flowable):
    """Faixa rubi de abertura de secao, com numero e titulo."""
    def __init__(self, num, title, kicker=""):
        Flowable.__init__(self)
        # canvas.drawString nao interpreta entidades HTML: converter aqui
        self.num = _html.unescape(num)
        self.title = _html.unescape(title)
        self.kicker = _html.unescape(kicker)
        self.h = 30 * mm
    def wrap(self, aw, ah): return (CW, self.h + 9)
    def draw(self):
        c = self.canv
        c.setFillColor(RUBY_DEEP)
        c.roundRect(0, 9, CW, self.h, 13, stroke=0, fill=1)
        c.setFillColor(GOLD)
        c.rect(0, 9, 3.2, self.h, stroke=0, fill=1)
        c.setFont("Display-B", 33); c.setFillColor(colors.HexColor("#4A1425"))
        c.drawString(CW - 26 * mm, 9 + self.h / 2 - 11, self.num)
        c.setFont("Body-B", 7.4); c.setFillColor(GOLD)
        if self.kicker:
            c.drawString(13 * mm, 9 + self.h - 11 * mm, self.kicker.upper())
        c.setFont("Display-B", 17.5); c.setFillColor(PAPER)
        c.drawString(13 * mm, 9 + 9 * mm, self.title)

def _tbl(data, widths, style, rounded=True):
    t = Table(data, colWidths=widths, style=style, hAlign="LEFT", repeatRows=1)
    return t

def TABLE(header, rows, widths, aligns=None, zebra=True):
    """Tabela editorial: cabecalho rubi, linhas alternadas off-white."""
    data = [[Paragraph(h, ST["th"]) for h in header]]
    for r in rows:
        row = []
        for i, cell in enumerate(r):
            st = "td"
            if isinstance(cell, tuple):
                cell, st = cell
            row.append(Paragraph(cell, ST[st]))
        data.append(row)
    cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), RUBY),
        ("TEXTCOLOR", (0, 0), (-1, 0), PAPER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 5.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5.5),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 1), (-1, -2), 0.4, LINE),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
    ]
    if zebra:
        for i in range(1, len(data)):
            if i % 2 == 0:
                cmds.append(("BACKGROUND", (0, i), (-1, i), OFFWHITE))
    if aligns:
        for i, a in enumerate(aligns):
            if a != "L":
                cmds.append(("ALIGN", (i, 0), (i, -1), "RIGHT" if a == "R" else "CENTER"))
    return Table(data, colWidths=widths, style=TableStyle(cmds), hAlign="LEFT", repeatRows=1)

def CALLOUT(title, body, tone="gold"):
    """Caixa de destaque com canto arredondado."""
    bg = OFFWHITE if tone == "gold" else colors.HexColor("#F7ECEF")
    edge = GOLD if tone == "gold" else RUBY_SOFT
    inner = [Paragraph(title, ST["callh"])] if title else []
    if isinstance(body, str):
        body = [body]
    for b in body:
        inner.append(Paragraph(b, ST["callp"]))
    t = Table([[inner]], colWidths=[CW], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("LINEBEFORE", (0, 0), (0, -1), 2.4, edge),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("ROUNDEDCORNERS", [8, 8, 8, 8]),
    ]), hAlign="LEFT")
    return t

def DARKBOX(title, body):
    """Caixa rubi - usar com parcimonia. Clima de decisao."""
    inner = [Paragraph(title, S("x", fontName="Display-B", fontSize=12.4, leading=16, textColor=GOLD_LIGHT, spaceAfter=4))]
    if isinstance(body, str):
        body = [body]
    for b in body:
        inner.append(Paragraph(b, S("y", fontSize=9.4, leading=14, textColor=colors.HexColor("#F0E6DC"), spaceAfter=4)))
    return Table([[inner]], colWidths=[CW], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), RUBY_DEEP),
        ("TOPPADDING", (0, 0), (-1, -1), 13),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 13),
        ("LEFTPADDING", (0, 0), (-1, -1), 15),
        ("RIGHTPADDING", (0, 0), (-1, -1), 15),
        ("ROUNDEDCORNERS", [13, 13, 13, 13]),
    ]), hAlign="LEFT")

def SCRIPTBOX(lines, label="MENSAGEM PRONTA"):
    """Bloco de mensagem literal, para copiar e colar."""
    inner = [Paragraph(label, S("sl", fontName="Body-B", fontSize=7, leading=10, textColor=GOLD, spaceAfter=4))]
    for ln in lines:
        inner.append(Paragraph(ln, ST["script"]))
    return Table([[inner]], colWidths=[CW], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FAF6EE")),
        ("BOX", (0, 0), (-1, -1), 0.7, GOLD),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("ROUNDEDCORNERS", [10, 10, 10, 10]),
    ]), hAlign="LEFT")

def TWO(left, right, gap=7 * mm, ratio=0.5):
    lw = (CW - gap) * ratio
    rw = CW - gap - lw
    return Table([[left, "", right]], colWidths=[lw, gap, rw], style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]), hAlign="LEFT")

def MINI(title, body, tone=OFFWHITE):
    inner = [Paragraph(title, S("mt", fontName="Body-B", fontSize=9, leading=12.4, textColor=RUBY, spaceAfter=3))]
    if isinstance(body, str):
        body = [body]
    for b in body:
        inner.append(Paragraph(b, S("mb", fontSize=8.7, leading=12.6, spaceAfter=3)))
    return Table([[inner]], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), tone),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [10, 10, 10, 10]),
    ]))

def KPIROW(items):
    """Tres numeros grandes lado a lado."""
    cells = []
    for big, lab in items:
        cells.append([Paragraph(big, S("kb", fontName="Display-B", fontSize=21, leading=24,
                                       textColor=RUBY, alignment=TA_CENTER, spaceAfter=2)),
                      Paragraph(lab, S("kl", fontSize=7.9, leading=11, textColor=INK_MUTED,
                                       alignment=TA_CENTER))])
    n = len(cells)
    w = (CW - (n - 1) * 5 * mm) / n
    row, widths = [], []
    for i, c in enumerate(cells):
        if i:
            row.append(""); widths.append(5 * mm)
        row.append(c); widths.append(w)
    return Table([row], colWidths=widths, style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("ROUNDEDCORNERS", [10, 10, 10, 10]),
    ] + [("BACKGROUND", (i, 0), (i, 0), OFFWHITE) for i in range(0, len(widths), 2)]),
        hAlign="LEFT")

def STEP(num, title, body, minutes=None):
    """Etapa numerada com selo redondo."""
    seal = Table([[Paragraph(num, S("sn", fontName="Display-B", fontSize=13, leading=15,
                                    textColor=PAPER, alignment=TA_CENTER))]],
                 colWidths=[9 * mm], rowHeights=[9 * mm],
                 style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), RUBY),
                                   ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                                   ("LEFTPADDING", (0, 0), (-1, -1), 0),
                                   ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                                   ("ROUNDEDCORNERS", [13, 13, 13, 13])]))
    head = title if not minutes else "%s <font color='#8A2945' size='8'>&nbsp;&nbsp;%s</font>" % (title, minutes)
    inner = [Paragraph(head, S("st", fontName="Body-B", fontSize=9.8, leading=13.4, textColor=INK, spaceAfter=3))]
    if isinstance(body, str):
        body = [body]
    for b in body:
        inner.append(Paragraph(b, S("sb", fontSize=9.1, leading=13.4, spaceAfter=3)))
    return Table([[seal, "", inner]], colWidths=[9 * mm, 4 * mm, CW - 13 * mm],
                 style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                                   ("LEFTPADDING", (0, 0), (-1, -1), 0),
                                   ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                                   ("TOPPADDING", (0, 0), (-1, -1), 0),
                                   ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]), hAlign="LEFT")

def OPENER(num, title, kicker, lead):
    return [Band(num, title, kicker), SP(5), P(lead, "plead")]

BLOCKS = []
