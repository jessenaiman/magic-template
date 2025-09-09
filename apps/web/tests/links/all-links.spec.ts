import { test, expect } from '@playwright/test';

test('all internal links are reachable', async ({ page }) => {
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';

  await page.goto(base + '/');

  const hrefs = await page.$$eval('a[href]', as =>
    Array.from(new Set(
      as
        .map(a => (a as HTMLAnchorElement).getAttribute('href') || '')
        .filter(h => h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/#'))
    ))
  );

  const sample = hrefs.slice(0, 50);
  for (const href of sample) {
    const url = base + href;
    const res = await page.request.get(url);
    expect(res.status(), `GET ${url}`).toBeLessThan(400);
  }
});
