import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('./public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Geometric "R" monogram as paths on rounded square:
// Lime #C6FF3D on Void #09090B background
const svgMonogram = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#09090B"/>
  <path d="M 140 110 H 290 C 356 110 395 146 395 205 C 395 255 360 286 308 296 L 396 402 H 318 L 236 302 H 212 V 402 H 140 V 110 Z M 212 172 V 242 H 282 C 316 242 332 228 332 207 C 332 186 316 172 282 172 H 212 Z" fill="#C6FF3D"/>
</svg>`;

// Maskable variant (with more padding for circular crop)
const svgMaskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#09090B"/>
  <path d="M 160 135 H 285 C 342 135 375 166 375 216 C 375 259 345 285 301 294 L 376 385 H 310 L 240 299 H 220 V 385 H 160 V 135 Z M 220 188 V 248 H 280 C 308 248 322 236 322 218 C 322 200 308 188 280 188 H 220 Z" fill="#C6FF3D"/>
</svg>`;

async function generate() {
  // 1. favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgMonogram, 'utf8');

  const svgBuffer = Buffer.from(svgMonogram);
  const maskableBuffer = Buffer.from(svgMaskable);

  // 2. favicon.ico (32x32 png format works standardly or as 32px icon)
  await sharp(svgBuffer).resize(32, 32).toFormat('png').toFile(path.join(publicDir, 'favicon-32x32.png'));
  // Write 32px png as favicon.ico
  await sharp(svgBuffer).resize(32, 32).toFormat('png').toFile(path.join(publicDir, 'favicon.ico'));

  // 3. apple-touch-icon 180x180
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 4. icon-192.png
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));

  // 5. icon-512.png
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));

  // 6. maskable-512.png
  await sharp(maskableBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'maskable-512.png'));

  // 7. site.webmanifest
  const manifest = {
    name: "Ranjit Rajan — Webflow & Frontend Developer",
    short_name: "Ranjit Rajan",
    description: "Webflow & Frontend developer portfolio in Kochi, Kerala, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Generated icons and site.webmanifest successfully.');
}

generate();
