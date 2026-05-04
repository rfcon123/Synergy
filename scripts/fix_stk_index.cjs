const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'public', 'STK_DOCUMENT', 'index.json');
const folder = path.join(root, 'public', 'STK_DOCUMENT');

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const files = new Set(fs.readdirSync(folder));

let fixedCount = 0;
let ambiguous = 0;
let none = 0;

const fixed = JSON.parse(JSON.stringify(index));
for (const doc of fixed.documents) {
  const filename = doc.filename || '';
  if (!files.has(filename)) {
    const id = filename.replace(/[^0-9]/g, '');
    const candidates = [...files].filter(f => f.includes(id));
    if (candidates.length === 1) {
      // straightforward fix
      const newName = candidates[0];
      doc.filename = newName;
      doc.url = '/STK_DOCUMENT/' + newName;
      fixedCount++;
    } else if (candidates.length > 1) {
      ambiguous++;
    } else {
      none++;
    }
  }
}

const outPath = path.join(root, 'public', 'STK_DOCUMENT', 'index_auto_fixed.json');
fs.writeFileSync(outPath, JSON.stringify(fixed, null, 2));
console.log(`Wrote fixed index to ${outPath}`);
console.log(`Fixed: ${fixedCount}, Ambiguous: ${ambiguous}, Not found: ${none}`);
if (ambiguous > 0) process.exit(2);
