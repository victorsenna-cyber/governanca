# -*- coding: utf-8 -*- (parte E: render)
import sys

OUT = sys.argv[1] if len(sys.argv) > 1 else "plano.pdf"

GRID = 12 * mm  # respiro do papel: malha discreta, so na capa


def cover_page(canv, doc):
    canv.saveState()
    canv.setFillColor(RUBY_DEEP)
    canv.rect(0, 0, PW, PH, stroke=0, fill=1)
    # malha sutil
    canv.setStrokeColor(colors.HexColor("#3B1123"))
    canv.setLineWidth(0.4)
    x = GRID
    while x < PW:
        canv.line(x, 0, x, PH); x += GRID
    y = GRID
    while y < PH:
        canv.line(0, y, PW, y); y += GRID
    # barra dourada lateral
    canv.setFillColor(GOLD)
    canv.rect(0, 0, 4.5, PH, stroke=0, fill=1)
    # arco de acento no canto inferior direito
    canv.setStrokeColor(colors.HexColor("#7A2B45"))
    canv.setLineWidth(1.1)
    for r in (26 * mm, 38 * mm, 50 * mm):
        canv.circle(PW - 6 * mm, -4 * mm, r, stroke=1, fill=0)
    canv.restoreState()


def inner_page(canv, doc):
    canv.saveState()
    canv.setFillColor(PAPER)
    canv.rect(0, 0, PW, PH, stroke=0, fill=1)
    # topo: filete dourado curto + assinatura
    canv.setFillColor(GOLD)
    canv.rect(ML, PH - 15 * mm, 16, 1.4, stroke=0, fill=1)
    canv.setFont("Body", 7.2)
    canv.setFillColor(INK_MUTED)
    canv.drawString(ML + 22, PH - 15 * mm - 1, "Emotional Speaking  ·  plano estratégico de 90 dias")
    # rodape
    canv.setStrokeColor(LINE)
    canv.setLineWidth(0.5)
    canv.line(ML, MB - 6 * mm, PW - MR, MB - 6 * mm)
    canv.setFont("Body", 7.2)
    canv.setFillColor(INK_MUTED)
    canv.drawString(ML, MB - 10.5 * mm, "Jéssica Oliveira  ·  06/08/2026 a 04/11/2026")
    canv.setFont("Display-B", 9)
    canv.setFillColor(RUBY)
    canv.drawRightString(PW - MR, MB - 10.8 * mm, str(canv.getPageNumber() - 1))
    canv.restoreState()


doc = BaseDocTemplate(OUT, pagesize=A4,
                      leftMargin=ML, rightMargin=MR, topMargin=MT, bottomMargin=MB,
                      title="Plano Estrategico 90 Dias - Emotional Speaking - Jessica Oliveira",
                      author="Continuum AI Systems",
                      subject="Plano estrategico de 90 dias: funil de vendas e direcao criativa",
                      creator="Continuum AI Systems")

frame_cover = Frame(ML, MB, CW, PH - MT - MB, id="cover",
                    leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
frame_inner = Frame(ML, MB, CW, PH - MT - MB, id="inner",
                    leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)

doc.addPageTemplates([
    PageTemplate(id="Cover", frames=[frame_cover], onPage=cover_page),
    PageTemplate(id="Inner", frames=[frame_inner], onPage=inner_page),
])

def flatten(seq):
    out = []
    for b in seq:
        if isinstance(b, (list, tuple)):
            out.extend(flatten(b))
        else:
            out.append(b)
    return out

flow = flatten(BLOCKS)
switched = False

from reportlab.platypus import NextPageTemplate
final = []
for i, b in enumerate(flow):
    final.append(b)
    if isinstance(b, PageBreak) and not switched:
        final.insert(len(final) - 1, NextPageTemplate("Inner"))
        switched = True

doc.build(final)
print("OK ->", OUT)
