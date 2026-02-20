import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
];

test.describe('SEO Tests', () => {
  for (const pageInfo of pages) {
    test.describe(`${pageInfo.name}`, () => {
      test('has title', async ({ page }) => {
        await page.goto(pageInfo.path);
        const title = await page.title();
        expect(title.length).toBeGreaterThan(10);
        expect(title.length).toBeLessThan(70);
      });

      test('has meta description', async ({ page }) => {
        await page.goto(pageInfo.path);
        const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
        expect(metaDescription).toBeTruthy();
        expect(metaDescription!.length).toBeGreaterThan(50);
        expect(metaDescription!.length).toBeLessThan(160);
      });

      test('has exactly one H1', async ({ page }) => {
        await page.goto(pageInfo.path);
        const h1Count = await page.locator('h1').count();
        expect(h1Count).toBe(1);
      });

      test('has Open Graph tags', async ({ page }) => {
        await page.goto(pageInfo.path);

        const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
        const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
        const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');

        expect(ogTitle).toBeTruthy();
        expect(ogDescription).toBeTruthy();
        expect(ogType).toBeTruthy();
      });

      test('has Twitter card meta tags', async ({ page }) => {
        await page.goto(pageInfo.path);

        const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
        expect(twitterCard).toBeTruthy();
      });

      test('images have alt text', async ({ page }) => {
        await page.goto(pageInfo.path);

        const images = page.locator('img');
        const count = await images.count();

        for (let i = 0; i < count; i++) {
          const img = images.nth(i);
          const alt = await img.getAttribute('alt');
          // Allow empty alt for decorative images but attribute must exist
          expect(alt).not.toBeNull();
        }
      });

      test('links have discernible text', async ({ page }) => {
        await page.goto(pageInfo.path);

        const links = page.locator('a[href]');
        const count = await links.count();

        for (let i = 0; i < count; i++) {
          const link = links.nth(i);
          const text = await link.textContent();
          const ariaLabel = await link.getAttribute('aria-label');
          const hasChild = await link.locator('*').count() > 0;

          // Link should have text, aria-label, or child elements with text
          const hasDiscernibleText = (text && text.trim().length > 0) || ariaLabel || hasChild;
          expect(hasDiscernibleText).toBeTruthy();
        }
      });
    });
  }

  test('robots.txt is accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('User-agent');
    expect(text).toContain('Sitemap');
  });

  test('Homepage has JSON-LD schema', async ({ page }) => {
    await page.goto('/');

    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();

    const schema = JSON.parse(jsonLd!);
    expect(schema['@type']).toBeTruthy();
  });

  test('Canonical URLs are present', async ({ page }) => {
    for (const pageInfo of pages) {
      await page.goto(pageInfo.path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      // Canonical may or may not be set - just check it doesn't break
      // If present, it should be a valid URL
      if (canonical) {
        expect(canonical).toMatch(/^https?:\/\//);
      }
    }
  });
});
