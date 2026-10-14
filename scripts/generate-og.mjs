import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('./public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1200x630 OpenGraph card image in SVG format matching the design system
// Background Void #09090B, Hairline #26262E, Lime #C6FF3D, Hot Pink #FF3D9A, Text #F4EFE6
const svgOg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#09090B"/>
  
  <!-- Outer hairline frame -->
  <rect x="40" y="40" width="1120" height="550" rx="16" fill="#131318" stroke="#26262E" stroke-width="2"/>
  
  <!-- Monospace top bar -->
  <g transform="translate(80, 100)">
    <rect width="8" height="8" fill="#C6FF3D" y="-12"/>
    <text x="18" y="-4" fill="#A7A29A" font-family="monospace" font-size="16" letter-spacing="2" text-transform="uppercase">
      [WEBFLOW &amp; FRONTEND DEVELOPER · KOCHI, INDIA]
    </text>
  </g>

  <!-- Big headline -->
  <g transform="translate(80, 200)">
    <text x="0" y="0" fill="#F4EFE6" font-family="sans-serif" font-weight="900" font-size="64" letter-spacing="-1.5">
      I turn ideas into websites that
    </text>
    <text x="0" y="80" fill="#FF3D9A" font-family="sans-serif" font-weight="900" font-size="72" letter-spacing="-2">
      feel alive.
    </text>
  </g>

  <!-- Subheadline -->
  <g transform="translate(80, 360)">
    <text x="0" y="0" fill="#A7A29A" font-family="sans-serif" font-size="22" font-weight="400">
      4 years building for agencies and product companies.
    </text>
    <text x="0" y="32" fill="#A7A29A" font-family="sans-serif" font-size="22" font-weight="400">
      Fast, responsive sites that look sharp and turn visitors into enquiries.
    </text>
  </g>

  <!-- Bottom status and branding -->
  <g transform="translate(80, 520)">
    <rect width="210" height="42" rx="21" fill="#C6FF3D"/>
    <text x="105" y="27" fill="#09090B" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="1">
      RANJIT RAJAN
    </text>

    <text x="240" y="27" fill="#A7A29A" font-family="monospace" font-size="14" letter-spacing="1">
      CO-FOUNDER AT WWW.COCAIMO.COM
    </text>
  </g>

  <!-- Geometric accent box on the right -->
  <g transform="translate(930, 260)">
    <rect width="180" height="240" rx="16" fill="#09090B" stroke="#26262E" stroke-width="2"/>
    <path d="M 50 40 H 105 C 130 40 145 54 145 78 C 145 98 132 110 112 114 L 146 160 H 115 L 85 118 H 76 V 160 H 50 V 40 Z M 76 64 V 94 H 102 C 115 94 121 89 121 79 C 121 69 115 64 102 64 H 76 Z" fill="#C6FF3D"/>
    <text x="90" y="200" fill="#A7A29A" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">
      KOCHI · KERALA
    </text>
  </g>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(svgOg);
  await sharp(svgBuffer).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630) successfully.');
}

generate();
