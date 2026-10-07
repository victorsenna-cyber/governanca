const fs = require('node:fs');
const v8 = require('node:v8');
const source = 'C:/Users/zioni/AppData/Roaming/Claude/IndexedDB/https_claude.ai_0.indexeddb.blob/4/00/b3';
const expected = 'cse_01DSEtiUejWB1hx4CCCGmn8i';
let bytes = fs.readFileSync(source);
function varint(buffer, cursor) {
  let value = 0, shift = 0, byte;
  do { byte = buffer[cursor.pos++]; value += (byte & 127) * 2 ** shift; shift += 7; } while (byte & 128);
  return value;
}
if (bytes[0] === 255 && bytes[1] === 17 && bytes[2] === 2) {
  const compressed = bytes.subarray(3), cursor = { pos: 0 };
  const out = Buffer.alloc(varint(compressed, cursor));
  let position = 0;
  while (cursor.pos < compressed.length) {
    const tag = compressed[cursor.pos++], type = tag & 3;
    let length, offset;
    if (type === 0) {
      length = tag >> 2;
      if (length < 60) length++;
      else {
        const n = length - 59; length = 0;
        for (let i = 0; i < n; i++) length += compressed[cursor.pos++] * 2 ** (8 * i);
        length++;
      }
      compressed.copy(out, position, cursor.pos, cursor.pos + length);
      position += length; cursor.pos += length;
    } else {
      if (type === 1) { length = 4 + ((tag >> 2) & 7); offset = ((tag & 224) << 3) + compressed[cursor.pos++]; }
      else {
        length = 1 + (tag >> 2); offset = 0;
        for (let i = 0; i < (type === 2 ? 2 : 4); i++) offset += compressed[cursor.pos++] * 2 ** (8 * i);
      }
      if (offset <= 0 || offset > position) throw new Error('Invalid Snappy offset');
      for (let i = 0; i < length; i++) out[position + i] = out[position + i - offset];
      position += length;
    }
  }
  if (position !== out.length) throw new Error('Snappy length mismatch');
  bytes = out;
}
if (!bytes.includes(Buffer.from(expected))) throw new Error('Session mismatch');
if (process.argv[2] === 'messages') {
  const compatible = Buffer.from(bytes.subarray(15)); compatible[1] = 15;
  const value = v8.deserialize(compatible);
  if (value.conversationUuid !== 'cowork:' + expected) throw new Error('Deserialized session mismatch');
  console.log(JSON.stringify({session:expected,events:value.tree.events.length,hasOlder:value.tree.hasOlder,floorSeq:value.tree.floorSeq,headSeq:value.tree.headSeq}));
  for (const event of value.tree.events) {
    const p = event.payload;
    if (!p || !['user', 'assistant'].includes(p.type)) continue;
    const content = p.message?.content;
    const text = typeof content === 'string' ? content : Array.isArray(content) ? content.filter(x => x.type === 'text').map(x => x.text).join('\n') : '';
    if (text) console.log(JSON.stringify({seq:event.seq,role:p.type,sessionId:p.session_id,text}));
  }
} else if (process.argv[2] === 'events') {
  const compatible = Buffer.from(bytes.subarray(15)); compatible[1] = 15;
  const value = v8.deserialize(compatible);
  if (value.conversationUuid !== 'cowork:' + expected) throw new Error('Deserialized session mismatch');
  console.log(JSON.stringify({session:expected,messageCount:value.messageCount,headSeq:value.tree.headSeq,floorSeq:value.tree.floorSeq,hasOlder:value.tree.hasOlder,events:value.tree.events.length}));
  for (const event of value.tree.events) console.log(JSON.stringify({seq:event.seq,keys:Object.keys(event),payloadKeys:Object.keys(event.payload || {}),type:event.payload?.type,role:event.payload?.role}));
} else if (process.argv[2] === 'metadata') {
  console.log(JSON.stringify({ source, session: expected, decodedBytes: bytes.length, header: bytes.subarray(0, 40).toString('hex'), node: process.version }));
  for (let offset = 0; offset < Math.min(bytes.length, 48); offset++) {
    if (bytes[offset] !== 255) continue;
    try { const value = v8.deserialize(bytes.subarray(offset)); console.log(JSON.stringify({ offset, keys: Object.keys(value), conversationUuid: value.conversationUuid })); break; }
    catch (error) {
      console.log(JSON.stringify({ offset, error: error.message }));
      if (offset === 15 && bytes[offset + 1] === 16) {
        const compatibility = Buffer.from(bytes.subarray(offset)); compatibility[1] = 15;
        try { const value = v8.deserialize(compatibility); console.log(JSON.stringify({ compatibility: 'header 16 to 15 on in-memory copy', keys: Object.keys(value), session: value.conversationUuid, treeKeys: Object.keys(value.tree || {}), events: value.tree?.events?.length })); }
        catch (secondError) { console.log(JSON.stringify({compatibilityError: secondError.message})); }
      }
    }
  }
} else {
  const strings = [];
  for (let i = 0; i < bytes.length; i++) {
    const tag = bytes[i];
    if (![34, 83, 99].includes(tag)) continue;
    const cursor = { pos: i + 1 };
    const length = varint(bytes, cursor);
    if (!Number.isFinite(length) || length < 16 || length > bytes.length - cursor.pos) continue;
    const value = bytes.subarray(cursor.pos, cursor.pos + length).toString(tag === 99 ? 'utf16le' : tag === 34 ? 'latin1' : 'utf8');
    if (value.includes('\u0000') || value.includes('\ufffd')) continue;
    strings.push({ offset: i, text: value });
    i = cursor.pos + length - 1;
  }
  const selected = strings.filter(x => process.argv[2] === 'all' ? x.text.length > 160 : /quiz|teto|criativ|biblioteca|pilar|léxico|lexico|autoriza|gratuito/i.test(x.text));
  const start = Number(process.argv[3] || 0), count = Number(process.argv[4] || 12);
  console.log(JSON.stringify({session: expected, strings: strings.length, matches: selected.length, start, count}));
  for (const value of selected.slice(start, start + count)) console.log(JSON.stringify(value));
}
