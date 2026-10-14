import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('./public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const sources = [
  {
    name: 'ranjit-hero',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPEqAAJS2nM0RWGkFpdlrDbHDimmNRF9Tiep3Oz1xf_d-qBoYmSr3iseq7ZHadeGYJZu5D9DQuckVzaJJXxyHEU8qnS8zQ5e_CxRBPq7yBoXaUXIZjxG2P4mWf5Ovv1AsNfKjtBJ5zlYN1dILj9DIRtyLyo4A2GvMQyz1P1fPBeGdfgALqL4EGNA5WG-ce2zQrKSwv0oYcJS1Ia0xKao4v4r-LXYuO9F4Ck00wc1OWET4GuqnUjpnLwg',
    widths: [480, 720, 960],
  },
  {
    name: 'kerala-travel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_OC75h7aoGroRcOE9lkKghk62AGxHxW3JAB29-sOu_7DUhQytJEuHR-JK_8KqEm8bi891QiFBZ_B7IK2OiFvrTzUzHI-_0lubdRle9g2PdiCShFd5NBii3g-s4jb-Ko2u88lPtROdEZSmzflr5O32t6kpHs1gq7qilm47dgeQDzEZn6hb2wTd_vjlQAGJjU7axohwg_T89_GVtkt1AMCvZBGbLTPpJT1oQoWcI8x9Z24HlOo69i131Q',
    widths: [640, 960],
  },
  {
    name: 'aura-salon',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw9SypembPBQwzMApkn4IdPY-VgOYDiLzdwPd8c7faRT3skrefjjAfwmQEjEjxqQjPM2ACA708HDlxQpBIoA3Zl7Cws8iWbTp5tuQ5ZDg1SxhRpAC53L3_lkw3_pq6ot0Fp73-aqtdh7oJ-lR02DMdLrXB7nlPE9TA5_yZa77SS3I5xYZ5U9vrpWK_rsxNv-T1YIil3DNZqiWQP8bESiFKYC1mijhmbdLNo5ZPREAFFTk8rZHk36uycQ',
    widths: [640, 960],
  },
  {
    name: 'ranjit-about',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA27hMxbgfHfDdBDMeZzdzomAX0yBgWx8V9B1eiVrsmGkVbKhc54rmJP2qLlp4Im8Mh8hxMwvrCytlrPGn8l4SJQj0MaoCOku_TX2z6sHkDHAUzrysRPq0zKVquI3MwoyT-Nq_YttcU1XgirN0_f-YzbU_QsTaHlZlIXzrqSZE_cksY0R1gcPtqwyqyeWunnQR-DO-XeH9nWCaBgWI4FKHUeKCPtsqI7zGia9q7ESJ-G6VLzeqPSaop6g',
    widths: [480, 720, 960],
  },
];

async function run() {
  for (const src of sources) {
    try {
      console.log(`Fetching ${src.name}...`);
      const res = await fetch(src.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());

      // Save master JPG
      const masterPath = path.join(imagesDir, `${src.name}.jpg`);
      await sharp(buffer).jpeg({ quality: 85, progressive: true }).toFile(masterPath);

      // Generate responsive sizes & formats (WebP, AVIF, JPG)
      for (const w of src.widths) {
        await sharp(buffer)
          .resize(w)
          .webp({ quality: 80 })
          .toFile(path.join(imagesDir, `${src.name}-${w}w.webp`));

        await sharp(buffer)
          .resize(w)
          .avif({ quality: 75 })
          .toFile(path.join(imagesDir, `${src.name}-${w}w.avif`));

        await sharp(buffer)
          .resize(w)
          .jpeg({ quality: 80, progressive: true })
          .toFile(path.join(imagesDir, `${src.name}-${w}w.jpg`));
      }
      console.log(`Saved responsive assets for ${src.name}`);
    } catch (err) {
      console.error(`Failed to process ${src.name}:`, err.message);
    }
  }
}

run();
