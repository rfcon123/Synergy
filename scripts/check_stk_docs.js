const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'public', 'STK_DOCUMENT', 'index.json');
const folder = path.join(root, 'public', 'STK_DOCUMENT');

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const files = new Set(fs.readdirSync(folder));

const missing = [];
for (const doc of index.documents) {
  const filename = doc.filename || '';
  if (!files.has(filename)) {
    // find possible matches
    const id = filename.replace(/[^0-9]/g, '');
    const candidates = [...files].filter(f => f.includes(id));
    missing.push({ doc, exists: false, candidates });
  }
}

if (missing.length === 0) {
  console.log('All files referenced by index.json exist.');
} else {
  console.log('Missing files: ' + missing.length);
  for (const m of missing) {
    console.log('\nDeclared: ' + JSON.stringify(m.doc));
    if (m.candidates.length) {
      console.log('Candidates in folder:');
      for (const c of m.candidates) console.log(' - ' + c);
    } else {
      console.log('No candidates found in folder.');
    }
  }
  process.exit(2);
}