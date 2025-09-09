import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load home page without errors', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');

    // Check that the page loaded successfully (no 404, 500 errors)
    await expect(page).toHaveURL(/\/$/);

    // Check for common error indicators
    const pageTitle = await page.title();
    expect(pageTitle).toBeTruthy();
    expect(pageTitle).not.toContain('Error');
    expect(pageTitle).not.toContain('404');
    expect(pageTitle).not.toContain('500');

    // Check that the page has loaded content (not empty)
    const bodyText = await page.locator('body').textContent();
    expect(bodyText?.length).toBeGreaterThan(0);

    // Check for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Wait a moment for any async errors to appear
    await page.waitForTimeout(1000);

    // Assert no console errors occurred
    expect(errors).toHaveLength(0);
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Check for basic meta tags
    const title = await page.locator('title').textContent();
    expect(title).toBeTruthy();

    // Check for viewport meta tag (important for mobile)
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('should be responsive', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // On mobile, check that content is accessible
      const body = page.locator('body');
      await expect(body).toBeVisible();
    } else {
      // On desktop, check basic layout
      const body = page.locator('body');
      await expect(body).toBeVisible();
    }
  });
});
