import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = [
  'src/assets',
  'public/src/assets',
  'public/assets'
];

async function optimizeDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.size > 200 * 1024) { // If larger than 200KB
        const tempPath = filePath + '.tmp';
        try {
          await sharp(filePath)
            .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
            .png({ quality: 80, compressionLevel: 8 })
            .toFile(tempPath);
          
          fs.renameSync(tempPath, filePath);
          const newStat = fs.statSync(filePath);
          console.log(`Optimized ${file} in ${dir}: ${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024).toFixed(0)}KB`);
        } catch (err) {
          console.error(`Failed to optimize ${filePath}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

async function run() {
  console.log("Starting image optimization...");
  for (const dir of dirs) {
    await optimizeDirectory(dir);
  }
  console.log("Image optimization complete!");
}

run();
