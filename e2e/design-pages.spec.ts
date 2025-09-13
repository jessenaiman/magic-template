import { test, expect } from '@playwright/test';

test.describe('Design Pages Load Test', () => {
  test('should load design index page', async ({ page }) => {
    await page.goto('/design');
    await expect(page).toHaveTitle(/Design/);
    // Check for design section content
    await expect(page.locator('text=Design')).toBeVisible();
  });

  test('should load buttons design page', async ({ page }) => {
    await page.goto('/design/buttons');
    // Check for buttons section content
    await expect(page.locator('text=Button')).toBeVisible();
  });

  test('should load text design page', async ({ page }) => {
    await page.goto('/design/text');
    // Check for text section content
    await expect(page.locator('text=Text')).toBeVisible();
  });

  test('should load backgrounds design page', async ({ page }) => {
    await page.goto('/design/backgrounds');
    // Check for backgrounds section content
    await expect(page.locator('text=Background')).toBeVisible();
  });

  test('should load effects design page', async ({ page }) => {
    await page.goto('/design/effects');
    // Check for effects section content
    await expect(page.locator('text=Effect')).toBeVisible();
  });

  test('should load animations design page', async ({ page }) => {
    await page.goto('/design/animations');
    // Check for animations section content
    await expect(page.locator('text=Animation')).toBeVisible();
  });

  test('should load transitions design page', async ({ page }) => {
    await page.goto('/design/transitions');
    // Check for transitions section content
    await expect(page.locator('text=Transition')).toBeVisible();
  });

  test('should load responsive design page', async ({ page }) => {
    await page.goto('/design/responsive-design');
    // Check for responsive design section content
    await expect(page.locator('text=Responsive')).toBeVisible();
  });
});
