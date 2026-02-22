import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = 'https://goebelfunctionalhealth.com';
  const configs = [
    { w: 1920, h: 1080, tag: 'desktop' },
    { w: 375, h: 812, tag: 'mobile' }
  ];
  const urls = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/services', name: 'services' },
    { path: '/contact', name: 'contact' }
  ];
  for (const c of configs) {
    for (const u of urls) {
      try {
        const ctx = await browser.newContext({ viewport: { width: c.w, height: c.h }});
        const p = await ctx.newPage();
        const r = await p.goto(base + u.path, { waitUntil: 'networkidle', timeout: 30000 });
        if (r && r.status() < 400) {
          await p.screenshot({ path: `/tmp/final-${c.tag}-${u.name}.png`, fullPage: true });
          console.log(`${c.tag}-${u.name}: OK (${r.status()})`);
        } else {
          console.log(`${c.tag}-${u.name}: SKIP (${r ? r.status() : 'null'})`);
        }
        await ctx.close();
      } catch(e) { console.log(`${c.tag}-${u.name}: ERR ${e.message}`); }
    }
  }
  await browser.close();
  console.log('Done');
})();
