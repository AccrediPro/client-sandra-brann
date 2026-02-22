const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = 'https://goebelfunctionalhealth.com';

  // Desktop home - scroll deeper for AboutPreview
  let ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  let p = await ctx.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.evaluate(() => window.scrollTo(0, 3000));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-d-home-3000.png' });
  await p.evaluate(() => window.scrollTo(0, 4500));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-d-home-4500.png' });
  await ctx.close();
  console.log('Done');

  await browser.close();
})();
