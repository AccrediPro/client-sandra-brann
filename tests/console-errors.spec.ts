import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/services', '/contact'];

test.describe('Console Error Tests', () => {
  for (const pagePath of pages) {
    test(`${pagePath} has no JavaScript console errors`, async ({ page }) => {
      const errors: string[] = [];

      // Listen for console errors
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // Listen for page errors (uncaught exceptions)
      page.on('pageerror', (error) => {
        errors.push(error.message);
      });

      await page.goto(pagePath);

      // Wait for any async scripts to load
      await page.waitForLoadState('networkidle');

      // Filter out known third-party errors or expected warnings
      const relevantErrors = errors.filter((error) => {
        // Ignore common third-party errors
        if (error.includes('Failed to load resource: the server responded with a status of 404')) {
          return false;
        }
        return true;
      });

      expect(relevantErrors).toHaveLength(0);
    });
  }

  test('No 404 errors for resources', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('response', (response) => {
      if (response.status() === 404) {
        failedRequests.push(response.url());
      }
    });

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
    }

    // Filter out expected 404s (like favicon requests in dev)
    const relevantFailures = failedRequests.filter((url) => {
      // Ignore common dev-mode 404s
      if (url.includes('favicon') && url.endsWith('.ico')) {
        return false;
      }
      return true;
    });

    expect(relevantFailures).toHaveLength(0);
  });
});
