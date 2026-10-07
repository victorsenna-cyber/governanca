from pathlib import Path
import re, json, hashlib

out = Path(__file__).resolve().parent
client = out.parents[1]
src = client / '01 - contexto' / '_transcripts' / 'Reunião Zoom de Continuum AI Systems & Débora 2026-09-30 13h30(GMT-3h00).txt'
raw_bytes = src.read_bytes()
raw = raw_bytes.decode('utf-8-sig').replace('\r\n', '\n')
blocks = []
for block in re.split(r'\n\s*\n', raw.strip()):
    m = re.fullmatch(r'(\d{2}:\d{2}:\d{2}) --> (\d{2}:\d{2}:\d{2})\n([^:\n]+):\s*(.*)', block.strip(), re.S)
    if not m:
        raise ValueError('Unparsed block: ' + block[:100])
    start, end, speaker, body = m.groups()
    blocks.append(dict(start=start, end=end, speaker=speaker, body=body))
turns = []
for b in blocks:
    if turns and turns[-1]['speaker'] == b['speaker']:
        turns[-1]['body'] += ' ' + b['body']
        turns[-1]['end'] = b['end']
    else:
        turns.append(b.copy())
header = '# Transcrição agrupada da reunião Débora em 30 de setembro de 2026\n\n> STATUS: HISTÓRICO · derivado isolado · não corrigido por audição\n\nTimestamps são horários da fonte, não tempo decorrido. Ordem original preservada, inclusive sobreposições. Nenhuma correção lexical; somente agrupamento consecutivo por falante. Falas suspeitas de ASR permanecem para rastreabilidade.\n\n'
(out / 'TRANSCRIPT-LIMPO.md').write_text(header + '\n\n'.join(f"[{t['start']}–{t['end']}] {t['speaker']}: {t['body']}" for t in turns) + '\n', encoding='utf-8')
ours = [t for t in turns if t['speaker'] == 'Continuum AI Systems']
words = lambda s: len(re.findall(r'\w+', s))
speech = ' '.join(t['body'] for t in ours).lower()
denom = words(speech)
markers = ['entendeu', 'sabe', 'ali', 'tipo assim', 'digamos assim', 'eu acredito', 'creio', 'basicamente', 'realmente', 'extremamente', 'todo mundo', 'ninguém', 'sempre', 'não tem como', 'então']
metrics = {'words_victor': denom, 'turns_victor': len(ours), 'words_all': sum(words(t['body']) for t in turns), 'markers': {}}
for marker in markers:
    pattern = r'\b' + r'[\s,.!?]+'.join(re.escape(w) for w in marker.split()) + r'\b'
    n = len(re.findall(pattern, speech))
    metrics['markers'][marker] = {'n': n, 'per1000': round(n * 1000 / denom, 2)}
(out / 'METRICAS-VOZ.json').write_text(json.dumps(metrics, ensure_ascii=False, indent=2), encoding='utf-8')
longest = sorted(ours, key=lambda t: words(t['body']), reverse=True)[:10]
(out / 'DEZ-TURNOS-VICTOR.md').write_text('# Dez turnos mais longos de Victor\n\n> STATUS: HISTÓRICO · corpus automático para auditoria textual\n\n' + '\n\n'.join(f"[{t['start']}–{t['end']}] ({words(t['body'])} palavras) {t['body']}" for t in longest), encoding='utf-8')
manifest = {'source': str(src), 'sha256': hashlib.sha256(raw_bytes).hexdigest(), 'bytes': len(raw_bytes), 'blocks': len(blocks), 'turns': len(turns), 'first': blocks[0]['start'], 'last': blocks[-1]['end'], 'all_blocks_parsed': True, 'transcript_word_preservation': sum(words(t['body']) for t in turns) == sum(words(t['body']) for t in blocks)}
(out / 'FONTES-E-PREPARACAO.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(manifest, ensure_ascii=False))
print(json.dumps(metrics, ensure_ascii=False))
