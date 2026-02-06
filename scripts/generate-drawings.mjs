import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const STK_INDEX = path.join(ROOT, 'public', 'STK_DOCUMENT', 'index.json');
const DRAWINGS_DIR = path.join(ROOT, 'public', 'STK_DOCUMENT', 'drawings');

function sanitizeName(name) {
  return name
    .replace(/[:\\/*?"<>|]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/__+/g, '_')
    .trim();
}

async function main() {
  const countArg = Number(process.argv[2] || 20);
  const count = Number.isFinite(countArg) && countArg > 0 ? countArg : 20;

  const raw = await fs.readFile(STK_INDEX, 'utf8');
  const json = JSON.parse(raw);
  const docs = Array.isArray(json.documents) ? json.documents : [];

  await fs.mkdir(DRAWINGS_DIR, { recursive: true });

  const images = [];
  for (let i = 0; i < Math.min(count, docs.length); i++) {
    const doc = docs[i];
    const base = sanitizeName(doc.name || doc.filename || `drawing_${i + 1}`);
    const svgName = `${base}.svg`;
    const pngName = `${base}.png`;
    const jpgName = `${base}.jpg`;

    const svgPath = path.join(DRAWINGS_DIR, svgName);

    const svgContent = `<?xml version="1.0" encoding="utf-8"?>\n` +
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>\n` +
      `  <rect width='100%' height='100%' fill='#f8fafc'/>\n` +
      `  <rect x='20' y='20' width='1160' height='760' rx='10' fill='#eef2ff' stroke='#c7d2fe' stroke-width='6'/>\n` +
      `  <text x='600' y='380' font-family='Arial, Helvetica, sans-serif' font-size='36' fill='#0f172a' text-anchor='middle'>${(doc.name||doc.filename||base).replace(/&/g,'&amp;')}</text>\n` +
      `  <text x='600' y='420' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='#0f172a' text-anchor='middle'>Generated placeholder</text>\n` +
      `</svg>\n`;

    await fs.writeFile(svgPath, svgContent, 'utf8');

    images.push({
      name: doc.name || doc.filename || `drawing_${i + 1}`,
      files: [
        { format: 'svg', filename: svgName, url: `/STK_DOCUMENT/drawings/${svgName}` },
        { format: 'png', filename: pngName, url: `/STK_DOCUMENT/drawings/${pngName}` },
        { format: 'jpg', filename: jpgName, url: `/STK_DOCUMENT/drawings/${jpgName}` }
      ]
    });
  }

  const index = { images };
  await fs.writeFile(path.join(DRAWINGS_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8');

  console.log(`Generated ${images.length} SVG placeholders and updated drawings/index.json`);
  console.log('Next step (optional): run `npm run convert-drawings` to rasterize SVGs to PNG/JPEG (requires sharp).');
}

main().catch(err => { console.error(err); process.exit(1); });
