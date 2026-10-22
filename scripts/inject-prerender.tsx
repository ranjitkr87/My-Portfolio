import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App.tsx";

function run() {
  const appHtml = renderToString(<App />);

  const html = `<!doctype html>
<html lang="en-IN" class="dark">
  <head>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZXSHH55');</script>
<!-- End Google Tag Manager -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Ranjit Rajan | Webflow &amp; Frontend Developer in Kochi, Kerala</title>
    <meta
      name="description"
      content="Fast, responsive Webflow and frontend websites built with clean code and high craft by Ranjit Rajan, co-founder of Cocaimo in Kochi, Kerala, India."
    />
    <link rel="canonical" href="https://www.ranjitkrajan.com/" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="alternate" hreflang="en-IN" href="https://www.ranjitkrajan.com/" />
    <link rel="alternate" hreflang="x-default" href="https://www.ranjitkrajan.com/" />
    <meta name="theme-color" content="#09090B" />
    <meta name="color-scheme" content="dark" />
    <meta name="author" content="Ranjit Rajan" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="application-name" content="Ranjit Rajan" />

    <!-- Open Graph Social Sharing -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Ranjit Rajan — Webflow &amp; Frontend Developer" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:url" content="https://www.ranjitkrajan.com/" />
    <meta property="og:title" content="Ranjit Rajan | Webflow &amp; Frontend Developer in Kochi, Kerala" />
    <meta
      property="og:description"
      content="Fast, responsive Webflow and frontend websites built with clean code and high craft by Ranjit Rajan, co-founder of Cocaimo in Kochi, Kerala, India."
    />
    <meta property="og:image" content="https://www.ranjitkrajan.com/og-image-ranjit-rajan.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="Ranjit Rajan — Webflow &amp; Frontend Developer in Kochi, Kerala" />

    <!-- Twitter / X Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ranjit Rajan | Webflow &amp; Frontend Developer in Kochi, Kerala" />
    <meta
      name="twitter:description"
      content="Fast, responsive Webflow and frontend websites built with clean code and high craft by Ranjit Rajan, co-founder of Cocaimo in Kochi, Kerala, India."
    />
    <meta name="twitter:image" content="https://www.ranjitkrajan.com/og-image-ranjit-rajan.png" />
    <meta name="twitter:image:alt" content="Ranjit Rajan — Webflow &amp; Frontend Developer in Kochi, Kerala" />

    <!-- Favicons & Web Manifest -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/jpg" sizes="32x32" href="/ranjit-rajan-fav-icon.jpg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/ranjit-rajan-apple-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Preload Self-Hosted Display and Body Fonts for Zero Layout Shift -->
    <link
      rel="preload"
      href="/fonts/bricolage-grotesque-latin-wght-normal.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="/fonts/Geist-Variable.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />

    <!-- Preload Hero Image Asset -->
    <link
      rel="preload"
      as="image"
      href="/images/ranjit-hero-720w.webp"
      type="image/webp"
      fetchpriority="high"
    />
  </head>
  <body class="selection:bg-[#C6FF3D] selection:text-[#09090B]">
    <div id="root">${appHtml}</div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

  fs.writeFileSync(path.resolve("./index.html"), html, "utf8");
  console.log(
    "Successfully injected pre-rendered application HTML into index.html",
  );
}

run();
