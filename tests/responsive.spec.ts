import { test, expect, devices } from '@playwright/test';

const viewports = [
  { name: 'Mobile (375px)', width: 375, height: 667 },
  { name: 'Tablet (768px)', width: 768, height: 1024 },
  { name: 'Desktop (1440px)', width: 1440, height: 900 },
];

const pages = ['/', '/about', '/services', '/contact'];

test.describe('Responsive Design Tests', () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const pagePath of pages) {
        test(`${pagePath} has no horizontal scroll`, async ({ page }) => {
          await page.goto(pagePath);

          const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
          const viewportWidth = await page.evaluate(() => window.innerWidth);

          expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
        });

        test(`${pagePath} content is visible`, async ({ page }) => {
          await page.goto(pagePath);

          // Check H1 is visible
          const h1 = page.locator('h1').first();
          await expect(h1).toBeVisible();

          // Check footer is in document
          const footer = page.locator('footer');
          await expect(footer).toBeAttached();
        });
      }

      test('Navigation adapts to viewport', async ({ page }) => {
        await page.goto('/');

        if (viewport.width < 768) {
          // Mobile: hamburger menu should be visible
          await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
          // Desktop nav should be hidden
          await expect(page.getByLabel('Main navigation')).toBeHidden();
        } else {
          // Desktop: nav links should be visible
          await expect(page.getByLabel('Main navigation')).toBeVisible();
        }
      });
    });
  }
});

test.describe('Touch Target Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Buttons have adequate tap targets', async ({ page }) => {
    await page.goto('/');

    const ctaButtons = page.locator('a[href="/contact"], button[type="submit"]');
    const count = await ctaButtons.count();

    for (let i = 0; i < count; i++) {
      const button = ctaButtons.nth(i);
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          // Minimum tap target should be 44x44 pixels
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });
});
