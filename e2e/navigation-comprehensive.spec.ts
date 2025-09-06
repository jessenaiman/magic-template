// Minimal, DRY, KISS Playwright navigation/runtime test suite

import { test, expect, Page } from '@playwright/test';
import { mainNavigation, NavItem } from '../app/navigation.config';

// Collect all navigation links (excluding anchors/external)
function collectNavLinks(items: NavItem[], links: NavItem[] = []): NavItem[] {
  for (const item of items) {
    if (item.href && !item.href.startsWith('#') && !item.href.startsWith('http')) {
      links.push(item);
    }
    if (item.children) {
      collectNavLinks(item.children, links);
    }
  }
  return links;
}
const allNavLinks = mainNavigation.flatMap(section => collectNavLinks(section.items));

// Targeted error selectors
const ERROR_SELECTORS = [
  '[data-error]',
  '[data-react-error-boundary]',
  '.error',
  '[class*="error"]'
];

// Utility: check for runtime errors after navigation
async function checkForErrors(page: Page) {
  const errors: string[] = [];
  const consoleListener = (msg: any) => {
    if (msg.type() === 'error') errors.push(`Console: ${msg.text()}`);
  };
  const pageErrorListener = (err: any) => {
    errors.push(`PageError: ${err.message}`);
  };
  page.on('console', consoleListener);
  page.on('pageerror', pageErrorListener);

  // Wait for possible hydration/runtime errors to surface
  await page.waitForTimeout(1500);

  // Check for error boundaries or visible error messages
  for (const selector of ERROR_SELECTORS) {
    const elements = await page.$$(selector);
    for (const el of elements) {
      const text = (await el.textContent())?.trim();
      if (text && /error|failed|boundary|must be used within|hydration/i.test(text)) {
        errors.push(`DOM: ${text}`);
      }
    }
  }

  // Clean up listeners
  page.off('console', consoleListener);
  page.off('pageerror', pageErrorListener);

  return errors;
}

test.describe('Navigation & Runtime Checks', () => {
  for (const navItem of allNavLinks) {
    test(`navigates to ${navItem.label} (${navItem.href}) without runtime errors`, async ({ page }) => {
      const response = await page.goto(navItem.href, { waitUntil: 'domcontentloaded', timeout: 30000 });
      expect(response && response.status() < 400).toBeTruthy();

      // Check for errors after navigation
      const errors = await checkForErrors(page);
      expect(errors, `Errors found on ${navItem.href}: ${errors.join('; ')}`).toHaveLength(0);

      // Basic page structure check
      await expect(page.locator('body')).toBeVisible({ timeout: 5000 });
      await expect(page).toHaveURL(navItem.href, { timeout: 10000 });
    });
  }
});
