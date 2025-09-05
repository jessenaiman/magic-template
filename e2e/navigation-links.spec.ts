import { test, expect, type Page } from '@playwright/test';
import { mainNavigation } from '../app/navigation.config';

// Extract all valid hrefs from navigation config
function extractHrefs(items: any[]): string[] {
  let hrefs: string[] = [];
  for (const item of items) {
    if (item.href && item.href !== '#' && !item.href.startsWith('http')) {
      hrefs.push(item.href);
    }
    if (item.children) {
      hrefs = hrefs.concat(extractHrefs(item.children));
    }
  }
  return hrefs;
}

const navigationHrefs = extractHrefs(mainNavigation.flatMap(section => section.items));

// Filter to only test internal design pages (exclude external projects)
const designHrefs = navigationHrefs.filter(href => href.startsWith('/design'));

// Test only the transitions routes we implemented
const transitionsHrefs = designHrefs.filter(href => href.includes('/transitions'));

test.describe('Transitions Navigation Links', () => {
  // Test each transitions navigation link loads without errors
  transitionsHrefs.forEach((href, index) => {
    test(`Transitions link ${index}: ${href} loads successfully`, async ({ page }) => {
      const consoleErrors: string[] = [];
      
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(`[console.${msg.type()}] ${msg.text()}`);
        }
      });
      
      page.on('pageerror', (err) => {
        consoleErrors.push(`[pageerror] ${String(err)}`);
      });

      await page.goto(href, { waitUntil: 'load' });
      
      // Basic assertions
      await expect(page).toHaveURL(href);
      await expect(page.locator('body')).toBeVisible();
      
      // Wait for network to settle
      await page.waitForLoadState('networkidle');
      
      // Assert no console errors
      expect.soft(consoleErrors, `Console errors on ${href}`).toEqual([]);
    });
  });
});
