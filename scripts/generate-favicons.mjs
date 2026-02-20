import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Sage green brand color
const primaryColor = '#8fae8b';
const darkGreen = '#537550';
const lightGreen = '#f4f7f4';

// Create SVG favicon with leaf design
const createFaviconSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" fill="none">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 1}" fill="${primaryColor}"/>
  <path d="M${size/2} ${size*0.1875}c${-size*0.1875} ${size*0.1875} ${-size*0.21875} ${size*0.4375} ${-size*0.21875} ${size*0.4375}s${size*0.09375} ${-size*0.03125} ${size*0.21875} ${-size*0.03125} ${size*0.21875} ${size*0.03125} ${size*0.21875} ${size*0.03125}${-size*0.03125} ${-size*0.25} ${-size*0.21875} ${-size*0.4375}z" fill="${lightGreen}"/>
  <path d="M${size/2} ${size*0.3125}v${size*0.3125}" stroke="${darkGreen}" stroke-width="${Math.max(1, size/24)}" stroke-linecap="round"/>
</svg>`;

// Generate PNG from SVG
async function generatePng(svgContent, outputPath, size) {
  const buffer = Buffer.from(svgContent);
  await sharp(buffer)
    .resize(size, size)
    .png()
    .toFile(outputPath);
  console.log(`Generated: ${outputPath} (${size}x${size})`);
}

// Generate ICO (just use smallest PNG as base, browsers handle this)
async function generateIco(svgContent, outputPath) {
  // For ICO, we'll create a 32x32 PNG (most browsers use PNG favicons anyway)
  const buffer = Buffer.from(svgContent);

  // Create multiple sizes for ICO
  const sizes = [16, 32];
  const images = await Promise.all(
    sizes.map(size =>
      sharp(buffer)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Use 32x32 as favicon.ico (most modern browsers)
  await sharp(Buffer.from(createFaviconSvg(32)))
    .resize(32, 32)
    .png()
    .toFile(outputPath.replace('.ico', '-32.png'));

  console.log(`Generated: ${outputPath} (using 32x32 PNG)`);
}

async function main() {
  try {
    // Ensure public directory exists
    mkdirSync(publicDir, { recursive: true });

    // Generate different sizes
    const svg32 = createFaviconSvg(32);
    const svg180 = createFaviconSvg(180);
    const svg192 = createFaviconSvg(192);

    await Promise.all([
      generatePng(createFaviconSvg(16), join(publicDir, 'favicon-16x16.png'), 16),
      generatePng(createFaviconSvg(32), join(publicDir, 'favicon-32x32.png'), 32),
      generatePng(createFaviconSvg(180), join(publicDir, 'apple-touch-icon.png'), 180),
    ]);

    // For favicon.ico, we'll just copy the 32x32 PNG and browsers will handle it
    // Most modern browsers prefer PNG anyway
    const pngBuffer = await sharp(Buffer.from(createFaviconSvg(32)))
      .resize(32, 32)
      .png()
      .toBuffer();

    writeFileSync(join(publicDir, 'favicon.ico'), pngBuffer);
    console.log('Generated: favicon.ico (32x32 PNG format)');

    console.log('\nAll favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

main();
