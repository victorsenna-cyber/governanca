# Contorno do defeito 15: roda o build-pdf.py da casa SEM alterá-lo, trocando o weasyprint
# (que não importa no Windows) por um renderizador que grava o HTML e imprime pelo Chrome headless.
# uso: python pdf_chrome.py <caminho do build-pdf.py> --in doc.md --out doc.pdf [--capa capa.json] [...]
import os, re, runpy, subprocess, sys, types

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FONTES = ("<link rel='preconnect' href='https://fonts.googleapis.com'>"
          "<link href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700"
          "&family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=block' rel='stylesheet'>")


class CSS:
    def __init__(self, string="", font_config=None):
        self.string = string


class HTML:
    def __init__(self, string="", base_url=None):
        self.string = string

    def write_pdf(self, saida, stylesheets=(), font_config=None):
        css = "\n".join(s.string for s in stylesheets)
        css = re.sub(r"@font-face\{[^}]*\}\s*", "", css)  # fontes locais de Linux saem; entram as do Google Fonts
        css = css.replace("'DejaVu Sans Mono'", "'DejaVu Sans Mono','Consolas',monospace")
        css += "\nhtml{-webkit-print-color-adjust:exact;print-color-adjust:exact}\n"
        # o Chrome não trata `page:first` (página nomeada) como o weasyprint: sem isto a capa herda a margem padrão e encolhe
        # largura fixa de 210mm na capa estoura a caixa de conteúdo e faz o Chrome encolher o documento INTEIRO (corpo saía a 83%)
        # Conserto medido: com a capa em página de margem zero o Chrome encolhia TUDO a 83–85% (corpo 7,1pt em vez de 8,4pt).
        # A capa passa a viver dentro da margem normal da página, sem largura nem página própria; o corpo sai no tamanho do template.
        css += "@page :first{margin:22mm 17mm 20mm 17mm} .cover{page:auto !important; width:auto !important; height:252mm !important}\n"
        doc = self.string.replace("</head>", FONTES + "<style>" + css + "</style></head>", 1)
        saida = os.path.abspath(saida)
        tmp = os.path.splitext(saida)[0] + ".render.html"
        with open(tmp, "w", encoding="utf-8") as f:
            f.write(doc)
        url = "file:///" + tmp.replace("\\", "/").replace(" ", "%20")
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                        "--virtual-time-budget=15000", "--print-to-pdf=" + saida, url],
                       check=True, capture_output=True, timeout=120)
        os.remove(tmp)


class FontConfiguration:
    pass


wp = types.ModuleType("weasyprint")
wp.HTML, wp.CSS = HTML, CSS
wpt = types.ModuleType("weasyprint.text")
wpf = types.ModuleType("weasyprint.text.fonts")
wpf.FontConfiguration = FontConfiguration
sys.modules.update({"weasyprint": wp, "weasyprint.text": wpt, "weasyprint.text.fonts": wpf})

alvo = sys.argv[1]
sys.argv = [alvo] + sys.argv[2:]
runpy.run_path(alvo, run_name="__main__")
