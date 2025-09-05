import { test, expect, type Page, type ConsoleMessage } from '@playwright/test';
import { discoverAllRoutes } from '../tests/route-utils';

// Discover routes once per worker
const routes = discoverAllRoutes();

// Useful visibility to both humans and LLMs
console.log(`Discovered ${routes.length} routes:`);
for (const r of routes) console.log(` - ${r}`);

test.describe('Route smoke', () => {
  for (const route of routes) {
    test(`visits ${route}`, async ({ page, baseURL }: { page: Page; baseURL?: string }) => {
      const consoleErrors: string[] = [];

      page.on('console', (msg: ConsoleMessage) => {
        if (msg.type() === 'error') {
          consoleErrors.push(`[console.${msg.type()}] ${msg.text()}`);
        }
      });
      page.on('pageerror', (err: unknown) => {
        consoleErrors.push(`[pageerror] ${String(err)}`);
      });

      const url = new URL(route, baseURL ?? 'http://localhost:3000').toString();
      const response = await page.goto(url, { waitUntil: 'load' });

      // Basic load assertions
      expect(response, `No response for ${route}`).toBeTruthy();
      expect(response!.ok(), `Non-OK status ${response?.status()} for ${route}`).toBe(true);

      // Ensure body is rendered and has content
      await expect(page.locator('body')).toBeVisible();

      // Optionally wait for network to settle
      await page.waitForLoadState('networkidle');

      // Assert no console errors were emitted during load
      expect.soft(consoleErrors, `Console errors on ${route}`).toEqual([]);
    });
  }
});
