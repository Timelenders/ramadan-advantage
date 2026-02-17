const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const ICON_DIR = path.join(__dirname, 'icons');

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const s = size / 512;

  // Background
  ctx.fillStyle = '#0a1628';
  ctx.fillRect(0, 0, size, size);

  // Timelenders arc — quadratic bezier
  // Tapered arc — filled shape (thick left, thin right), slightly thinner
  ctx.fillStyle = '#2b6e8a';
  ctx.beginPath();
  // Top edge
  ctx.moveTo(size * 0.10, size * 0.40);
  ctx.quadraticCurveTo(size * 0.48, size * 0.04, size * 0.90, size * 0.34);
  // Right tip (thin end)
  ctx.lineTo(size * 0.895, size * 0.355);
  // Bottom edge
  ctx.quadraticCurveTo(size * 0.49, size * 0.08, size * 0.125, size * 0.43);
  ctx.closePath();
  ctx.fill();

  // Clock hand — visible gap between arc bottom and hand top
  ctx.fillStyle = '#2b6e8a';
  const handW = 9 * s;
  const handH = 30 * s;
  const handX = size / 2 - handW / 2;
  const handY = size * 0.28; // visible gap below arc
  ctx.beginPath();
  ctx.roundRect(handX, handY, handW, handH, 2 * s);
  ctx.fill();

  // Gold crescent moon
  const moonX = size * 0.74;
  const moonY = size * 0.14;
  const moonR = 16 * s;
  ctx.fillStyle = '#d4a843';
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#0a1628';
  ctx.beginPath();
  ctx.arc(moonX + 7 * s, moonY - 4 * s, moonR * 0.82, 0, Math.PI * 2);
  ctx.fill();

  // "Ramadan" text
  ctx.fillStyle = '#f0f2f5';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const ramadanSize = Math.max(Math.round(68 * s), 8);
  ctx.font = `800 ${ramadanSize}px Georgia, serif`;
  ctx.fillText('Ramadan', size / 2, size * 0.54);

  // "Advantage" text
  ctx.fillStyle = '#2b6e8a';
  const advantageSize = Math.max(Math.round(48 * s), 6);
  ctx.font = `700 ${advantageSize}px Georgia, serif`;
  ctx.fillText('Advantage', size / 2, size * 0.68);

  // Gold underline
  ctx.strokeStyle = '#d4a843';
  ctx.lineWidth = 2.5 * s;
  ctx.lineCap = 'round';
  const lineY = size * 0.75;
  const lineW = size * 0.28;
  ctx.beginPath();
  ctx.moveTo(size / 2 - lineW, lineY);
  ctx.lineTo(size / 2 + lineW, lineY);
  ctx.stroke();

  // "TIMELENDERS" at the bottom
  ctx.fillStyle = '#6b7f99';
  const tlSize = Math.max(Math.round(16 * s), 4);
  ctx.font = `500 ${tlSize}px sans-serif`;
  ctx.fillText('TIMELENDERS', size / 2, size * 0.87);

  return canvas;
}

for (const size of SIZES) {
  const canvas = drawIcon(size);
  fs.writeFileSync(path.join(ICON_DIR, `icon-${size}x${size}.png`), canvas.toBuffer('image/png'));
  console.log(`Generated: icon-${size}x${size}.png`);
}

const appleCanvas = drawIcon(180);
fs.writeFileSync(path.join(ICON_DIR, 'apple-touch-icon.png'), appleCanvas.toBuffer('image/png'));
console.log('Generated: apple-touch-icon.png');

const favCanvas = drawIcon(32);
fs.writeFileSync(path.join(ICON_DIR, 'favicon-32x32.png'), favCanvas.toBuffer('image/png'));
console.log('Generated: favicon-32x32.png');

console.log('\nDone!');
