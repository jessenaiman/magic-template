import { test, expect } from '@playwright/test';

test('home renders', async ({ page }) => {
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  const res = await page.request.get(base + '/');
  expect(res.status()).toBe(200);

  await page.goto(base + '/');
  await expect(page.locator('header, nav, main')).toBeVisible();
});
