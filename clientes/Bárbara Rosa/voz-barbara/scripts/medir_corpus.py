import argparse, hashlib, json, re
from collections import Counter
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
NAME = 'Reunião Zoom de Continuum AI Systems & Bárbara 2026-09-05 14h40(GMT-3h00).txt'
HASH = 'd7326af1a774936c01d7181ab0ef7b05ef860089cee8a450adb267d65aa00d0e'
TOKEN = re.compile(r'[^\W\d_]+|\d+(?:[.,]\d+)*', re.UNICODE)
LEXICON = {
 'V': r'\b(?:olha|olhar|olhando|olhado|olho|olhos|vejo|veja|ver|vi|vê|visão|luz|mostrar|mostrando)\b',
 'A': r'\b(?:ouvir|ouço|escutar|escuto|escutando|som|barulho|silêncio)\b',
 'C': r'\b(?:senti|sentiu|sentir|sinto|sentindo|suado|presa|amarrada|apertado|saturad[ao]|balança|peito|pressão|tombo|barca|encarar|aguentando)\b',
 'D': r'\b(?:pensado|pensei|pensar|penso|analisar|analisa|analisando|entender|verifiquei|verificar|conhecimento|coerência|incoerente)\b',
}
EXPRESSIONS = ['sabe','entendeu','tu','você','né','então','então assim','daí','aí','porque','só que','o que eu vou te dizer','combinado','combinadíssimo','meu amigo','meu amor','amor','vitão','palavra','honesta','honesto','honestidade','desonestidade','desonesto','caráter','confiança','confio','confiar','carinho','coração','humano','humanas','humanizado','resultados','assertivo','assertiva','ideal']

def main():
 p=argparse.ArgumentParser(description='Mede somente o corpus de 05/09/2026. Sem --write, não grava; --source serve para verificar em staging.')
 p.add_argument('--source',type=Path)
 p.add_argument('--candidates',action='store_true')
 p.add_argument('--write',action='store_true')
 args=p.parse_args()
 source=args.source or BASE.parent/'01-contexto/transcripts'/NAME
 raw=source.read_bytes()
 assert hashlib.sha256(raw).hexdigest()==HASH, 'Fonte mudou: revisar as anotações.'
 text=raw.decode('utf-8-sig')
 pattern=re.compile(r'(?m)^(\d{2}:\d{2}:\d{2}) --> (\d{2}:\d{2}:\d{2})\r?\n([^:\r\n]+): ([^\r\n]*)')
 records=[dict(start=m[1],end=m[2],speaker=m[3],text=m[4],line=text.count('\n',0,m.start())+2) for m in pattern.finditer(text)]
 assert len(records)==len(re.findall(r'(?m)^\d{2}:\d{2}:\d{2} --> ',text)), 'Segmento não reconhecido.'
 own=[r for r in records if r['speaker']=='Bárbara Rosa']
 assert own
 hits=[]
 for r in own:
  found=sorted((m.start(),s,m.group()) for s,pat in LEXICON.items() for m in re.finditer(pat,r['text'],re.I))
  for offset,s,phrase in found:
   hits.append(dict(id=f'VAK-{len(hits)+1:03}',system=s,line=r['line'],time=r['start'],phrase=phrase,text=r['text']))
 if args.candidates:
  for h in hits: print(f"{h['id']} {h['system']} L{h['line']} {h['time']} [{h['phrase']}] {h['text']}")
  return
 ann=json.loads((BASE/'references/anotacoes.json').read_text(encoding='utf-8-sig'))
 accepted=ann['vak_aceitos']; excluded=ann['vak_excluidos']
 assert set(accepted).isdisjoint(excluded)
 assert set(accepted)|set(excluded)=={h['id'] for h in hits}, 'Candidatos sem revisão ou IDs inválidos.'
 classified=Counter(accepted.values())
 assert set(classified)<=set('VACD')
 byline={r['line']:r for r in own}
 metaprograms={}
 for dim,sample in ann['metaprogramas'].items():
  c=Counter()
  for unit in sample:
   assert unit['quote'] in byline[unit['line']]['text'], f'Citação inválida: {unit}'
   c[unit['code']]+=1
  metaprograms[dim]={'n':len(sample),'contagem':dict(c),'percentuais':{k:round(v/len(sample)*100,1) for k,v in c.items()}}
 owntext='\n'.join(r['text'] for r in own)
 def frequency(phrase):
  pat=r'(?<!\w)'+re.escape(phrase).replace(r'\ ',r'[\s,.!?;:]+')+r'(?!\w)'
  return len(re.findall(pat,owntext,re.I))
 out={'fonte':'01-contexto/transcripts/'+NAME,'sha256':HASH,'periodo':[records[0]['start'],records[-1]['end']],
  'blocos_por_falante':dict(Counter(r['speaker'] for r in records)),
  'palavras_por_falante':{s:sum(len(TOKEN.findall(r['text'])) for r in records if r['speaker']==s) for s in sorted({r['speaker'] for r in records})},
  'nota':'Tokens Unicode alfabéticos ou numéricos. Blocos do export não são turnos. Frequência lexical inclui fala relatada e ruídos. VAK possui revisão contextual explícita; metaprogramas são amostra intencional declarada.',
  'frequencias_literais':{e:frequency(e) for e in EXPRESSIONS},
  'vak':{'candidatos':len(hits),'excluidos':len(excluded),'n':len(accepted),'contagem':{s:classified[s] for s in 'VACD'},'percentuais':{s:round(classified[s]/len(accepted)*100,1) for s in 'VACD'}},'metaprogramas':metaprograms}
 if args.write:
  refs=BASE/'references'
  lines=['# Corpus filtrado — Bárbara Rosa · 05/09/2026','','> Interno. Extraído literalmente por prefixo do falante. Sem correção de ASR. Fala relatada permanece no texto, mas não prova autoria verbal. Horários de relógio GMT-3, não tempo decorrido.','',f'SHA-256 da fonte: `{HASH}`.','']
  for i,r in enumerate(own,1): lines += [f"## B-{i:03} · {r['start']}–{r['end']} · fonte L{r['line']}",'',r['text'],'']
  (refs/'corpus-barbara-2026-09-05.md').write_text('\n'.join(lines),encoding='utf-8')
  (refs/'contagens.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print(json.dumps(out,ensure_ascii=False,indent=2))

if __name__=='__main__': main()
