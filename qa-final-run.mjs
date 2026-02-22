import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const base = 'https://goebelfunctionalhealth.com';
const views = [
  { w: 1920, h: 1080, tag: 'desktop' },
  { w: 375, h: 812, tag: 'mobile' }
];
const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' }
];

for (const v of views) {
  for (const pg of pages) {
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h } });
    const p = await ctx.newPage();
    try {
      await p.goto(base + pg.path, { waitUntil: 'networkidle', timeout: 30000 });
      await p.screenshot({ path: `/tmp/final-${v.tag}-${pg.name}.png`, fullPage: true });
      console.log(`${v.tag}-${pg.name}: OK`);
    } catch(e) {
      console.log(`${v.tag}-${pg.name}: ERROR ${e.message}`);
    }
    await ctx.close();
  }
}

await browser.close();
