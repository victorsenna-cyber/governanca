from pathlib import Path
import re, html, math, json
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Flowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'OPERACAO-COMPLETA-PROPOSTA-KRAKEN-2026-09-18.md'
OUTPUT = SOURCE.with_suffix('.pdf')
for name, file in [('Arial','arial.ttf'),('Arial-Bold','arialbd.ttf'),('Arial-Italic','ariali.ttf'),('Arial-BoldItalic','arialbi.ttf')]:
    pdfmetrics.registerFont(TTFont(name, 'C:/Windows/Fonts/'+file))
pdfmetrics.registerFontFamily('Arial',normal='Arial',bold='Arial-Bold',italic='Arial-Italic',boldItalic='Arial-BoldItalic')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyPlain',fontName='Arial',fontSize=10.3,leading=14.8,spaceAfter=8,textColor=colors.HexColor('#202020')))
styles.add(ParagraphStyle(name='TitlePlain',fontName='Arial-Bold',fontSize=19,leading=24,spaceAfter=15))
styles.add(ParagraphStyle(name='H2Plain',fontName='Arial-Bold',fontSize=13,leading=17,spaceBefore=12,spaceAfter=8,keepWithNext=True))
styles.add(ParagraphStyle(name='H3Plain',fontName='Arial-Bold',fontSize=11,leading=15,spaceBefore=8,spaceAfter=6,keepWithNext=True))
styles.add(ParagraphStyle(name='CellPlain',fontName='Arial',fontSize=9,leading=12,spaceAfter=0))
styles.add(ParagraphStyle(name='BulletPlain',parent=styles['BodyPlain'],leftIndent=12,firstLineIndent=-9))

def inline(s):
    s=html.escape(s)
    s=re.sub(r'`([^`]+)`',r'\1',s)
    s=re.sub(r'\*\*([^*]+)\*\*',r'<b>\1</b>',s)
    return s

class Diagram(Flowable):
    def __init__(self, code):
        super().__init__()
        self.width=475; self.height=663
        self.nodes={}
        for id, a, b in re.findall(r'([A-P])(?:\[([^\]]+)\]|\{([^}]+)\})',code):
            self.nodes[id]=a or b
        self.pos={'A':(165,620),'B':(165,565),'C':(165,510),'D':(330,510),'E':(165,455),
                  'F':(0,390),'G':(165,390),'H':(0,315),'I':(165,315),'J':(330,315),
                  'K':(165,240),'L':(165,185),'M':(165,130),'N':(165,75),'O':(165,20),'P':(330,20)}
    def draw(self):
        c=self.canv
        w,h=145,38
        def pt(n,side):
            x,y=self.pos[n]
            return {'t':(x+w/2,y+h),'b':(x+w/2,y),'l':(x,y+h/2),'r':(x+w,y+h/2)}[side]
        def arrow(points,label=None,lp=None):
            c.setStrokeColor(colors.HexColor('#777777'));c.setFillColor(colors.HexColor('#777777'));c.setLineWidth(.65)
            p=c.beginPath();p.moveTo(*points[0])
            for xy in points[1:]:p.lineTo(*xy)
            c.drawPath(p)
            x,y=points[-1];x0,y0=points[-2];a=math.atan2(y-y0,x-x0)
            q=c.beginPath();q.moveTo(x,y)
            q.lineTo(x-4.5*math.cos(a-.5),y-4.5*math.sin(a-.5));q.lineTo(x-4.5*math.cos(a+.5),y-4.5*math.sin(a+.5));q.close()
            c.drawPath(q,fill=1,stroke=0)
            if label:
                c.setFillColor(colors.white);c.rect(lp[0]-2,lp[1]-2,50,11,fill=1,stroke=0)
                c.setFillColor(colors.black);c.setFont('Arial',7.5);c.drawString(*lp,label)
        for a,b in [('A','B'),('B','C'),('C','E'),('E','G'),('G','I'),('K','L'),('L','M'),('M','N'),('N','O')]:arrow([pt(a,'b'),pt(b,'t')])
        arrow([pt('B','r'),(402.5,584),(402.5,548)])
        arrow([pt('D','b'),(402.5,440),(315,440),(315,409),pt('G','r')])
        arrow([pt('E','l'),(72.5,474),pt('F','t')])
        arrow([pt('F','b'),(72.5,373),(155,373),(155,345),(165,345)])
        arrow([pt('H','r'),pt('I','l')])
        arrow([pt('I','r'),pt('J','l')],'Ainda não',(311,362))
        arrow([pt('J','b'),(402.5,297),(237.5,297),pt('I','b')])
        arrow([pt('I','b'),pt('K','t')],'Sim',(243,286))
        arrow([pt('O','l'),(155,39),(155,259),pt('K','l')])
        arrow([pt('O','r'),pt('P','l')])
        arrow([pt('P','t'),(402.5,204),pt('L','r')])
        for id,(x,y) in self.pos.items():
            c.setFillColor(colors.HexColor('#f6f6f6'));c.setStrokeColor(colors.HexColor('#888888'));c.setLineWidth(.65)
            c.roundRect(x,y,w,h,4,fill=1,stroke=1)
            sty=ParagraphStyle('node',fontName='Arial-Bold' if id=='I' else 'Arial',fontSize=8.1,leading=10,alignment=1)
            p=Paragraph(inline(self.nodes[id]),sty);pw,ph=p.wrap(w-10,h-4)
            p.drawOn(c,x+5,y+(h-ph)/2)

text=SOURCE.read_text(encoding='utf-8-sig')
lines=text.splitlines(); story=[];i=0;plain=[]
while i<len(lines):
    line=lines[i].strip()
    if not line:i+=1;continue
    if line.startswith('```mermaid'):
        block=[];i+=1
        while i<len(lines) and not lines[i].startswith('```'):block.append(lines[i]);i+=1
        story.append(Diagram('\n'.join(block)));story.append(PageBreak());i+=1;continue
    if line.startswith('|'):
        rows=[]
        while i<len(lines) and lines[i].strip().startswith('|'):
            cells=[x.strip() for x in lines[i].strip().strip('|').split('|')]
            if not all(re.fullmatch(r':?-+:?',x) for x in cells):
                rows.append([Paragraph(inline(x),styles['CellPlain']) for x in cells]);plain.extend(cells)
            i+=1
        t=Table(rows,colWidths=[132,156,187],repeatRows=1,hAlign='LEFT')
        t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#eeeeee')),('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),.4,colors.HexColor('#c8c8c8')),('LEFTPADDING',(0,0),(-1,-1),6),('RIGHTPADDING',(0,0),(-1,-1),6),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
        story.extend([t,Spacer(1,9)]);continue
    if line.startswith('#'):
        level=len(line)-len(line.lstrip('#'));content=line[level:].strip()
        if content.startswith('2. Fluxo geral'):story.append(PageBreak())
        story.append(Paragraph(inline(content),styles[{1:'TitlePlain',2:'H2Plain',3:'H3Plain'}[level]]));plain.append(content);i+=1;continue
    if line.startswith('- '):
        story.append(Paragraph('• '+inline(line[2:]),styles['BulletPlain']));plain.append(line[2:]);i+=1;continue
    paragraph=[line];i+=1
    while i<len(lines) and lines[i].strip() and not lines[i].startswith(('#','|','```','- ')):
        paragraph.append(lines[i].strip());i+=1
    value=' '.join(paragraph);plain.append(value);story.append(Paragraph(inline(value),styles['BodyPlain']))

def footer(c,doc):
    c.saveState();c.setFillColor(colors.HexColor('#777777'));c.setFont('Arial',8)
    c.drawRightString(A4[0]-60,29,str(doc.page));c.restoreState()
doc=SimpleDocTemplate(str(OUTPUT),pagesize=A4,rightMargin=60,leftMargin=60,topMargin=43,bottomMargin=43,title='Kraken - operação completa da proposta',author='Continuum')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
reader=PdfReader(OUTPUT)
extracted=' '.join(p.extract_text() or '' for p in reader.pages)
norm=lambda s:re.sub(r'\s+','',s.replace('`','').replace('**',''))
missing=[s[:100] for s in plain if norm(s) not in norm(extracted)]
report={'source':str(SOURCE),'output':str(OUTPUT),'pages':len(reader.pages),'missing_text_blocks':missing,'validation':'All source paragraphs and table cells checked against PDF text; Mermaid rendered as vector diagram.'}
(Path(__file__).parent/'validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
if missing:raise RuntimeError('Missing source content')
