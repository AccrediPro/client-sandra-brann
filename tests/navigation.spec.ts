import { test, expect } from '@playwright/test';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

test.describe('Desktop Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Use desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('logo link navigates to homepage', async ({ page }) => {
    await page.goto('/about');

    // Click the logo link
    const logoLink = page.locator('header a[href="/"]').first();
    await expect(logoLink).toBeVisible();
    await expect(logoLink).toHaveText('Mariska Goebel');

    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('desktop nav links are visible on large screens', async ({ page }) => {
    await page.goto('/');

    // Check that all nav links are visible in desktop navigation (aria-label="Main navigation")
    const desktopNav = page.getByLabel('Main navigation');
    await expect(desktopNav).toBeVisible();

    for (const link of navLinks) {
      // Use getByRole to find text links (not the CTA button) matching the label
      const navLink = desktopNav.getByRole('link', { name: link.label, exact: true });
      await expect(navLink).toBeVisible();
    }
  });

  test('nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    // Test each nav link using desktop navigation
    const desktopNav = page.getByLabel('Main navigation');

    for (const link of navLinks) {
      await page.goto('/'); // Start from homepage each time

      // Use getByRole to find text links (not the CTA button) matching the label
      const navLink = desktopNav.getByRole('link', { name: link.label, exact: true });
      await navLink.click();

      // Verify we're on the correct page
      await expect(page).toHaveURL(new RegExp(`${link.href}$`));
    }
  });

  test('active link has correct styling', async ({ page }) => {
    const desktopNav = page.getByLabel('Main navigation');

    // Check homepage
    await page.goto('/');
    const homeLink = desktopNav.locator('a[href="/"]');
    await expect(homeLink).toHaveAttribute('aria-current', 'page');
    await expect(homeLink).toHaveClass(/bg-primary-50/);

    // Check about page
    await page.goto('/about');
    const aboutLink = desktopNav.locator('a[href="/about"]');
    await expect(aboutLink).toHaveAttribute('aria-current', 'page');
    await expect(aboutLink).toHaveClass(/bg-primary-50/);
  });

  test('Get in Touch CTA button navigates to contact', async ({ page }) => {
    await page.goto('/');

    // Find the CTA button in the header
    const ctaButton = page.locator('header').getByRole('link', { name: 'Get in Touch' });
    await expect(ctaButton).toBeVisible();

    await ctaButton.click();
    await expect(page).toHaveURL('/contact');
  });

  test('no 404 errors on nav links', async ({ page, request }) => {
    for (const link of navLinks) {
      const response = await request.get(link.href);
      expect(response.status()).toBe(200);
    }

    // Also test the CTA link
    const contactResponse = await request.get('/contact');
    expect(contactResponse.status()).toBe(200);
  });
});

test.describe('Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Use mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('mobile menu button is visible on small screens', async ({ page }) => {
    await page.goto('/');

    // Desktop nav should be hidden
    const desktopNav = page.locator('header nav.hidden.md\\:flex');
    await expect(desktopNav).not.toBeVisible();

    // Mobile menu button should be visible
    const mobileMenuBtn = page.locator('#mobile-menu-btn');
    await expect(mobileMenuBtn).toBeVisible();
    await expect(mobileMenuBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile menu opens when button is clicked', async ({ page }) => {
    await page.goto('/');

    const mobileMenuBtn = page.locator('#mobile-menu-btn');
    const mobileMenu = page.locator('#mobile-menu');

    // Menu should be closed initially (translated off-screen)
    await expect(mobileMenu).toHaveClass(/translate-x-full/);
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');

    // Click to open
    await mobileMenuBtn.click();

    // Menu should now be visible
    await expect(mobileMenu).toHaveClass(/translate-x-0/);
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');
    await expect(mobileMenuBtn).toHaveAttribute('aria-expanded', 'true');
  });

  test('mobile menu closes when close button is clicked', async ({ page }) => {
    await page.goto('/');

    // Open the menu first
    await page.locator('#mobile-menu-btn').click();

    // Wait for menu to be open
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);

    // Click close button
    await page.locator('#mobile-menu-close').click();

    // Menu should be closed
    await expect(mobileMenu).toHaveClass(/translate-x-full/);
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
  });

  test('mobile menu closes when backdrop is clicked', async ({ page }) => {
    await page.goto('/');

    // Open the menu
    await page.locator('#mobile-menu-btn').click();

    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);

    // Click backdrop
    await page.locator('#mobile-menu-backdrop').click({ force: true });

    // Menu should be closed
    await expect(mobileMenu).toHaveClass(/translate-x-full/);
  });

  test('mobile menu closes on Escape key', async ({ page }) => {
    await page.goto('/');

    // Open the menu
    await page.locator('#mobile-menu-btn').click();

    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);

    // Press Escape
    await page.keyboard.press('Escape');

    // Menu should be closed
    await expect(mobileMenu).toHaveClass(/translate-x-full/);
  });

  test('mobile menu has all nav links', async ({ page }) => {
    await page.goto('/');

    // Open the menu
    await page.locator('#mobile-menu-btn').click();

    // Check all links are visible in mobile menu
    for (const link of navLinks) {
      const mobileNavLink = page.locator(`#mobile-menu nav a[href="${link.href}"]`);
      await expect(mobileNavLink).toBeVisible();
      await expect(mobileNavLink).toHaveText(link.label);
    }
  });

  test('mobile menu links navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    // Open menu
    await page.locator('#mobile-menu-btn').click();

    // Wait for menu to be visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);

    // Click About link and wait for navigation
    await Promise.all([
      page.waitForURL('/about'),
      page.locator('#mobile-menu nav a[href="/about"]').click(),
    ]);

    // Should be on about page
    await expect(page).toHaveURL('/about');

    // Menu should be closed after navigation
    await expect(mobileMenu).toHaveClass(/translate-x-full/);
  });

  test('mobile menu CTA button navigates to contact', async ({ page }) => {
    await page.goto('/');

    // Open menu
    await page.locator('#mobile-menu-btn').click();

    // Wait for menu to be visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);

    // Click CTA button in mobile menu
    const mobileCta = mobileMenu.getByRole('link', { name: 'Get in Touch' });
    await expect(mobileCta).toBeVisible();

    // Click and wait for navigation
    await Promise.all([
      page.waitForURL('/contact'),
      mobileCta.click(),
    ]);

    await expect(page).toHaveURL('/contact');
  });
});

test.describe('Header Behavior', () => {
  test('header is sticky and stays at top', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('#site-header');
    await expect(header).toHaveClass(/fixed/);
    await expect(header).toHaveClass(/top-0/);

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));

    // Header should still be visible at top
    const headerBounds = await header.boundingBox();
    expect(headerBounds?.y).toBe(0);
  });

  test('header gets shadow on scroll', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('#site-header');

    // Initially no shadow (or verify initial state)
    await expect(header).not.toHaveClass(/shadow-md/);

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 50));

    // Wait for shadow class to be added
    await expect(header).toHaveClass(/shadow-md/);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));

    // Shadow should be removed
    await expect(header).not.toHaveClass(/shadow-md/);
  });
});
