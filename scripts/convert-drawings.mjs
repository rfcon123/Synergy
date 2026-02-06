import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const DRAWINGS_DIR = path.join(ROOT, 'public', 'STK_DOCUMENT', 'drawings');

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (e) {
    console.error('Package "sharp" is required. Install with: npm install sharp');
    process.exit(1);
  }

  const files = await fs.readdir(DRAWINGS_DIR);
  const svgs = files.filter(f => f.toLowerCase().endsWith('.svg'));
  if (!svgs.length) {
    console.log('No SVG files found in', DRAWINGS_DIR);
    return;
  }

  for (const svg of svgs) {
    const base = svg.slice(0, -4);
    const svgPath = path.join(DRAWINGS_DIR, svg);
    const pngPath = path.join(DRAWINGS_DIR, `${base}.png`);
    const jpgPath = path.join(DRAWINGS_DIR, `${base}.jpg`);

    const buffer = await fs.readFile(svgPath);
    await sharp(buffer).png().toFile(pngPath);
    await sharp(buffer).jpeg({ quality: 88 }).toFile(jpgPath);
    console.log('Converted', svg, '→', `${base}.png`, `${base}.jpg`);
  }

  console.log('Conversion complete.');
}

main().catch(err => { console.error(err); process.exit(1); });
