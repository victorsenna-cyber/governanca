from pathlib import Path
import json, hashlib, re
p = Path(__file__).resolve().parent
m = json.loads((p / 'FONTES-E-PREPARACAO.json').read_text(encoding='utf-8'))
raw = Path(m['source']).read_bytes()
text = raw.decode('utf-8-sig').replace('\r\n', '\n')
points = json.loads((p / 'PONTOS.json').read_text(encoding='utf-8'))
errors = []
for n, axis, ts, fact, quote, consequence in points:
    pattern = re.escape(ts) + r' --> [^\n]+\n[^\n]+?: ([^\n]+)'
    matches = re.findall(pattern, text)
    if not any(quote in body for body in matches):
        errors.append({'id': n, 'timestamp': ts, 'quote': quote})
result = {'source_unchanged': hashlib.sha256(raw).hexdigest() == m['sha256'], 'points': len(points), 'quote_timestamp_failures': errors, 'sequential_ids': [x[0] for x in points] == list(range(1, len(points)+1)), 'source_blocks_parsed': m['all_blocks_parsed'], 'word_preservation': m['transcript_word_preservation']}
index = (p.parents[3] / 'execução Codex' / 'STATUS-CODEX.md').read_text(encoding='utf-8')
result['index_entries'] = index.count('clientes/Débora Delgado/execução Codex/call-2026-09-30/')
(p / 'VALIDACAO.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
raise SystemExit(0 if result['source_unchanged'] and not errors and result['sequential_ids'] and result['index_entries'] == 1 else 1)
