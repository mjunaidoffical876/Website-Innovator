const { chromium } = require('playwright');
const fs = require('fs');

async function extractLogos() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const sites = [
    { url: 'https://london-beauties.vercel.app/', name: 'london-beauties' },
    { url: 'https://silo-restaurant.vercel.app/', name: 'silo-restaurant' },
    { url: 'https://realstate-builders.vercel.app/', name: 'realstate-builders' },
    { url: 'https://misspasocial.vercel.app/', name: 'misspasocial' },
    { url: 'https://rheinhotel-schulz-flax.vercel.app/', name: 'rheinhotel-schulz' }
  ];

  fs.mkdirSync('public/logos', { recursive: true });

  for (let s of sites) {
    console.log('Extracting', s.name);
    try {
      await page.goto(s.url, { waitUntil: 'load', timeout: 15000 }).catch(() => {});
      
      // Let's try locating the logo specifically
      let locs = await page.$$('header img, nav img, a[href="/"] img, .logo img');
      let found = false;
      if (locs.length > 0) {
        let first = await locs[0].boundingBox();
        if (first) {
          await page.screenshot({ path: `public/logos/${s.name}.png`, clip: first });
          console.log('Saved', s.name, 'from DOM element');
          found = true;
        }
      }
      
      if (!found) {
        await page.screenshot({ 
          path: `public/logos/${s.name}.png`, 
          clip: { x: 50, y: 15, width: 250, height: 80 }
        });
        console.log('Saved', s.name, 'from raw clipping');
      }
    } catch(err) {
      console.log('Error', err.message);
    }
  }

  await browser.close();
}

extractLogos();
