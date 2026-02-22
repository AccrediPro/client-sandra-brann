const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = 'https://goebelfunctionalhealth.com';

  // Desktop home - scroll to about preview section
  let ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  let p = await ctx.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.screenshot({ path: '/tmp/qa-d-home-top.png' });
  // Scroll down to find about preview
  await p.evaluate(() => window.scrollTo(0, 1500));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-d-home-about.png' });
  await ctx.close();
  console.log('Desktop home: done');

  // Desktop about page - top (hero with image)
  ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  p = await ctx.newPage();
  await p.goto(base + '/about', { waitUntil: 'networkidle', timeout: 30000 });
  await p.screenshot({ path: '/tmp/qa-d-about-top.png' });
  // Scroll to method section
  await p.evaluate(() => window.scrollTo(0, 2000));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-d-about-method.png' });
  // Scroll to holistic section
  await p.evaluate(() => window.scrollTo(0, 4000));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-d-about-holistic.png' });
  await ctx.close();
  console.log('Desktop about: done');

  // Mobile home
  ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  p = await ctx.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.screenshot({ path: '/tmp/qa-m-home-top.png' });
  await p.evaluate(() => window.scrollTo(0, 1200));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-m-home-about.png' });
  await ctx.close();
  console.log('Mobile home: done');

  // Mobile about
  ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  p = await ctx.newPage();
  await p.goto(base + '/about', { waitUntil: 'networkidle', timeout: 30000 });
  await p.screenshot({ path: '/tmp/qa-m-about-top.png' });
  await p.evaluate(() => window.scrollTo(0, 1500));
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/qa-m-about-method.png' });
  await ctx.close();
  console.log('Mobile about: done');

  await browser.close();
  console.log('All done');
})();
