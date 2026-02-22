import { test, expect } from '@playwright/test';

const pages = [
  {
    path: '/',
    name: 'Homepage',
    expectedTitle: /Health & Wellness/i,
    expectedH1: /Transform Your Health|Restore Your Health|Take Control/i,
  },
  {
    path: '/about',
    name: 'About page',
    expectedTitle: /About/i,
    expectedH1: /Hi, I'm|About/i,
  },
  {
    path: '/services',
    name: 'Services page',
    expectedTitle: /Services/i,
    expectedH1: /Programs to.*Restore Your Health|Programs/i,
  },
  {
    path: '/contact',
    name: 'Contact page',
    expectedTitle: /Contact/i,
    expectedH1: /Let's Start|Get in Touch|Contact|Discovery/i,
  },
];

test.describe('Page Loading Tests', () => {
  for (const page of pages) {
    test(`${page.name} returns 200 status`, async ({ request }) => {
      const response = await request.get(page.path);
      expect(response.status()).toBe(200);
    });

    test(`${page.name} has correct title`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await expect(browserPage).toHaveTitle(page.expectedTitle);
    });

    test(`${page.name} has H1 element`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      const h1 = browserPage.locator('h1').first();
      await expect(h1).toBeVisible();
      await expect(h1).toHaveText(page.expectedH1);
    });
  }
});

test.describe('Page Content Verification', () => {
  test('Homepage has all major sections', async ({ page }) => {
    await page.goto('/');

    // Hero section
    await expect(page.locator('text=Book a Free Discovery Call').first()).toBeVisible();

    // About preview
    await expect(page.locator('text=About Me').first()).toBeVisible();

    // Services preview
    await expect(page.locator('text=Services').first()).toBeVisible();

    // FAQ section
    await expect(page.locator('text=Frequently Asked Questions').first()).toBeVisible();
  });

  test('About page has certifications section', async ({ page }) => {
    await page.goto('/about');

    // Check for certification badges
    await expect(page.locator('text=HC').first()).toBeVisible();
    await expect(page.locator('text=AccrediPro').first()).toBeVisible();
  });

  test('Services page has service offerings', async ({ page }) => {
    await page.goto('/services');

    // Check for main service sections
    await expect(page.locator('text=Personalized Wellness Program').first()).toBeVisible();
    await expect(page.locator('text=Ongoing Support').first()).toBeVisible();
  });

  test('Contact page has contact form', async ({ page }) => {
    await page.goto('/contact');

    // Check for form elements
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});
