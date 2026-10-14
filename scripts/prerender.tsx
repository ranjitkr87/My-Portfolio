import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';

async function prerender() {
  const appHtml = renderToString(<App />);
  console.log(`Rendered HTML length: ${appHtml.length} characters.`);
  
  // We can write it to a template or test output
  fs.writeFileSync('./dist-prerender.html', appHtml, 'utf8');
}

prerender();
