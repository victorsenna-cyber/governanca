# Pipeline de tratamento — foto D6 (PLANO-FOTO-DEBORA §2, adaptado à Fotos (8).png)
# Nao destrutivo: le o original, escreve exports novos.
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np
import os

SRC = r"Débora Delgado/Fotos (8).png"
OUT_DIR = "exports"
os.makedirs(OUT_DIR, exist_ok=True)

PAPEL = np.array([0xFA, 0xF8, 0xF3], dtype=np.float64)      # #FAF8F3
PETROLEO = np.array([0x22, 0x30, 0x36], dtype=np.float64)    # #223036 (pagina re-skin)

im = Image.open(SRC).convert("RGB")
arr = np.asarray(im).astype(np.float64)

# 1) Pretos elevados para petroleo (mistura maior nas sombras, zero nas luzes)
lum = arr.mean(axis=2, keepdims=True) / 255.0
shadow_w = np.clip((1.0 - lum) ** 2.2, 0, 1) * 0.22          # forca so em sombra profunda
arr = arr * (1 - shadow_w) + PETROLEO * shadow_w

# 2) Veu quente global sutil puxando pro papel (3%)
arr = arr * 0.97 + PAPEL * 0.03

# 3) Verdes levemente dessaturados (direcao musgo): reduz croma onde G domina
r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
green_mask = np.clip((g - np.maximum(r, b)) / 40.0, 0, 1) * 0.35
mean = arr.mean(axis=2, keepdims=True)
arr = arr * (1 - green_mask[..., None]) + (arr * 0.75 + mean * 0.25) * green_mask[..., None]

arr = np.clip(arr, 0, 255)
im2 = Image.fromarray(arr.astype(np.uint8))

# 4) Micro-ajustes globais
im2 = ImageEnhance.Color(im2).enhance(0.97)                   # -3% saturacao geral
im2 = ImageEnhance.Contrast(im2).enhance(1.02)                # +2% contraste

# 5) Sharpen leve (raio pequeno; em 1000px o efeito na pele e minimo)
im2 = im2.filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=4))

def export(img, width, grain_sigma, path_webp, quality=80):
    h = round(img.size[1] * width / img.size[0])
    out = img.resize((width, h), Image.LANCZOS)
    a = np.asarray(out).astype(np.float64)
    noise = np.random.default_rng(7).normal(0, grain_sigma, a.shape)  # grain apos resize
    a = np.clip(a + noise, 0, 255)
    out = Image.fromarray(a.astype(np.uint8))
    out.save(path_webp, "WEBP", quality=quality)
    print(path_webp, out.size, f"{os.path.getsize(path_webp)/1024:.0f}KB")
    return out

# Retrato 4:5 (a foto ja e 2400x3000 = 4:5, sem crop)
p1x = export(im2, 1000, 4.0, f"{OUT_DIR}/debora-d6.webp")
p2x = export(im2, 1600, 3.5, f"{OUT_DIR}/debora-d6@2x.webp")

# Preview JPG (antes x depois lado a lado, 1600px)
before = Image.open(SRC).convert("RGB").resize(p2x.size, Image.LANCZOS)
combo = Image.new("RGB", (p2x.size[0] * 2 + 20, p2x.size[1]), "white")
combo.paste(before, (0, 0))
combo.paste(p2x, (p2x.size[0] + 20, 0))
combo.thumbnail((2200, 1400))
combo.save(f"{OUT_DIR}/preview-antes-depois.jpg", quality=88)
print("preview ok")
