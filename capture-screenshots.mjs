import { chromium } from 'playwright';
import { join } from 'path';

const sites = [
  { url: 'https://london-beauties.vercel.app/', name: 'london-beauties' },
  { url: 'https://silo-restaurant.vercel.app/', name: 'silo-restaurant' },
  { url: 'https://realstate-builders.vercel.app/', name: 'realstate-builders' },
  { url: 'https://misspasocial.vercel.app/', name: 'misspasocial' },
  { url: 'https://rheinhotel-schulz-flax.vercel.app/', name: 'rheinhotel-schulz' },
];

const outputDir = join(process.cwd(), 'public', 'portfolio');

async function main() {
  const browser = await chromium.launch({ headless: true });

  for (const site of sites) {
    console.log(`Capturing ${site.name}...`);
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 }
    });
    
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      // Wait a bit more for animations/images
      await page.waitForTimeout(3000);
      
      // Take full page screenshot
      await page.screenshot({
        path: join(outputDir, `${site.name}.png`),
        fullPage: true,
      });
      
      console.log(`✅ ${site.name} captured!`);
    } catch (err) {
      console.error(`❌ Error capturing ${site.name}:`, err.message);
    }
    
    await page.close();
  }

  await browser.close();
  console.log('All done!');
}

main();
