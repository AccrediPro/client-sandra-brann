import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test.describe('Form Fields', () => {
    test('renders all required form fields', async ({ page }) => {
      // Name field
      const nameInput = page.locator('input[name="name"]');
      await expect(nameInput).toBeVisible();
      await expect(nameInput).toHaveAttribute('type', 'text');

      // Email field
      const emailInput = page.locator('input[name="email"]');
      await expect(emailInput).toBeVisible();
      await expect(emailInput).toHaveAttribute('type', 'email');

      // Phone field (optional)
      const phoneInput = page.locator('input[name="phone"]');
      await expect(phoneInput).toBeVisible();
      await expect(phoneInput).toHaveAttribute('type', 'tel');

      // Message field
      const messageTextarea = page.locator('textarea[name="message"]');
      await expect(messageTextarea).toBeVisible();
    });

    test('renders labels for all fields', async ({ page }) => {
      await expect(page.locator('label[for="input-name"]')).toContainText('Your Name');
      await expect(page.locator('label[for="input-email"]')).toContainText('Email Address');
      await expect(page.locator('label[for="input-phone"]')).toContainText('Phone Number');
      await expect(page.locator('label[for="textarea-message"]')).toContainText('Your Message');
    });

    test('renders submit button', async ({ page }) => {
      const submitButton = page.locator('button[type="submit"]');
      await expect(submitButton).toBeVisible();
      await expect(submitButton).toContainText('Send Message');
    });

    test('shows required field indicator', async ({ page }) => {
      await expect(page.getByText('Required fields')).toBeVisible();
    });

    test('name field has correct placeholder', async ({ page }) => {
      const nameInput = page.locator('input[name="name"]');
      await expect(nameInput).toHaveAttribute('placeholder', 'Jane Smith');
    });

    test('email field has correct placeholder', async ({ page }) => {
      const emailInput = page.locator('input[name="email"]');
      await expect(emailInput).toHaveAttribute('placeholder', 'jane@example.com');
    });

    test('message field has placeholder text', async ({ page }) => {
      const messageTextarea = page.locator('textarea[name="message"]');
      const placeholder = await messageTextarea.getAttribute('placeholder');
      expect(placeholder).toBeTruthy();
    });
  });

  test.describe('Form Validation', () => {
    test('required fields have required attribute', async ({ page }) => {
      await expect(page.locator('input[name="name"]')).toHaveAttribute('required', '');
      await expect(page.locator('input[name="email"]')).toHaveAttribute('required', '');
      await expect(page.locator('textarea[name="message"]')).toHaveAttribute('required', '');
      await expect(page.locator('input[name="phone"]')).not.toHaveAttribute('required', '');
    });

    test('email field validates email format (via type=email)', async ({ page }) => {
      const emailInput = page.locator('input[name="email"]');
      await expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('form can be filled with valid data', async ({ page }) => {
      await page.locator('input[name="name"]').fill('Jane Smith');
      await page.locator('input[name="email"]').fill('jane@example.com');
      await page.locator('input[name="phone"]').fill('555-123-4567');
      await page.locator('textarea[name="message"]').fill('This is a test message');

      await expect(page.locator('input[name="name"]')).toHaveValue('Jane Smith');
      await expect(page.locator('input[name="email"]')).toHaveValue('jane@example.com');
      await expect(page.locator('input[name="phone"]')).toHaveValue('555-123-4567');
      await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message');
    });
  });

  test.describe('Form Submission', () => {
    test('shows loading state when form is submitted', async ({ page }) => {
      await page.locator('input[name="name"]').fill('Jane Smith');
      await page.locator('input[name="email"]').fill('test@example.com');
      await page.locator('textarea[name="message"]').fill('This is a test message for the loading state test');

      await page.locator('button[type="submit"]').click();

      await expect(page.locator('#contact-form-loading')).toBeVisible({ timeout: 3000 });
    });

    test('shows success state after submission', async ({ page }) => {
      await page.locator('input[name="name"]').fill('Jane Smith');
      await page.locator('input[name="email"]').fill('test@example.com');
      await page.locator('textarea[name="message"]').fill('This is a test message for the success state test');

      await page.locator('button[type="submit"]').click();

      await expect(page.locator('#contact-form-success')).toBeVisible({ timeout: 5000 });
      await expect(page.locator('#contact-form-success')).toContainText('Message Sent');
    });

    test('phone field is optional for submission', async ({ page }) => {
      await page.locator('input[name="name"]').fill('Jane Smith');
      await page.locator('input[name="email"]').fill('test@example.com');
      await page.locator('textarea[name="message"]').fill('Test message without phone number');

      await page.locator('button[type="submit"]').click();

      await expect(page.locator('#contact-form-success')).toBeVisible({ timeout: 5000 });
    });
  });

  test.describe('Form Accessibility', () => {
    test('form fields have autocomplete attributes', async ({ page }) => {
      await expect(page.locator('input[name="name"]')).toHaveAttribute('autocomplete', 'name');
      await expect(page.locator('input[name="email"]')).toHaveAttribute('autocomplete', 'email');
      await expect(page.locator('input[name="phone"]')).toHaveAttribute('autocomplete', 'tel');
    });

    test('success and error states have aria-live', async ({ page }) => {
      const loadingState = page.locator('[id$="-loading"]');
      const successState = page.locator('[id$="-success"]');
      const errorState = page.locator('[id$="-error"]');

      await expect(loadingState).toHaveAttribute('aria-live', 'polite');
      await expect(successState).toHaveAttribute('aria-live', 'polite');
      await expect(errorState).toHaveAttribute('aria-live', 'polite');
    });
  });
});

test.describe('Contact Page Elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('displays contact methods section', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'Email Me Directly' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Book a Free Session' })).toBeVisible();
  });

  test('displays FAQ section', async ({ page }) => {
    await expect(page.getByText('Before You Reach Out')).toBeVisible();
    await expect(page.getByText('How quickly will you respond?')).toBeVisible();
    await expect(page.getByText('What should I include in my message?')).toBeVisible();
    await expect(page.getByText('Is the initial consultation really free?')).toBeVisible();
  });

  test('page has proper title', async ({ page }) => {
    await expect(page).toHaveTitle(/Contact/i);
  });

  test('page hero has encouraging text', async ({ page }) => {
    await expect(page.getByText(/Let's Start|Book a Free Discovery|Get in Touch/i).first()).toBeVisible();
  });
});
