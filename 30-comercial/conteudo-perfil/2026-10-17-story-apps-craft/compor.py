import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
W0, H0 = im.size
k = W0 / 828
print("fonte", im.size)
# recorte do terminal: sem abas (nomes de cliente) e sem os ícones do editor à direita
crop = im.crop((int(4*k), int(338*k), int(706*k), int(728*k)))
W, H = 1080, 1920
bg = im.resize((W, int(H0 * W / W0))).crop((0, 0, W, H)).filter(ImageFilter.GaussianBlur(40))
bg = Image.blend(bg, Image.new("RGB", (W, H), (8, 10, 18)), 0.75)
cw = W - 60
ch = int(crop.height * cw / crop.width)
crop = crop.resize((cw, ch), Image.LANCZOS)
ty = 390
bg.paste(crop, (30, ty))
d = ImageDraw.Draw(bg)
F = "C:/Windows/Fonts/"
def block(lines, font, y, fg, bgc, pad=34, lh=1.32):
    asc, desc = font.getmetrics(); h = int((asc + desc) * lh)
    w = max(d.textlength(l, font=font) for l in lines)
    x = (W - w) / 2
    d.rounded_rectangle((x - pad, y - pad * 0.7, x + w + pad, y + h * len(lines) + pad * 0.5), radius=18, fill=bgc)
    for i, l in enumerate(lines):
        d.text(((W - d.textlength(l, font=font)) / 2, y + i * h), l, font=font, fill=fg)
    return y + h * len(lines) + pad * 0.5
def box_text(lines, font, y, fg, bgc, pad=(28, 14), center=True, gap=6):
    for ln in lines:
        w = d.textlength(ln, font=font)
        a, b = font.getbbox(ln)[1], font.getbbox(ln)[3]
        x = (W - w) / 2 if center else 60
        d.rounded_rectangle((x - pad[0], y - pad[1], x + w + pad[0], y + (b - a) + pad[1]), radius=14, fill=bgc)
        d.text((x, y - a), ln, font=font, fill=fg)
        y += (b - a) + 2 * pad[1] + gap
    return y
# 1 · chamada
f1 = ImageFont.truetype(F + "impact.ttf", 92)
box_text(["TROQUEI O OFFICE", "E A ADOBE HOJE."], f1, 120, (255, 255, 255), (37, 99, 235), pad=(30, 18), gap=4)
# 2 · bloco branco
f2 = ImageFont.truetype(F + "segoeuib.ttf", 44)
y = ty + ch + 90
y = block(["São 11 programas, e a minha IA", "abre todos eles sozinha.", "Ela edita e exporta o arquivo", "sem eu abrir a janela."], f2, y, (15, 15, 15), (255, 255, 255))
# 3 · fecho
f3 = ImageFont.truetype(F + "consolab.ttf", 36)
_end = block(["Próximo teste: uma proposta inteira", "em slide, sem eu tocar no programa.", "Conto aqui como foi."], f3, y + 70, (255, 255, 255), (0, 0, 0))
bg.save(out, quality=95)
print("ok fim do texto em y =", int(_end))
