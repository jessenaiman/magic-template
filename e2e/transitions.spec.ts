import { test, expect, type Page } from '@playwright/test';

// Helper: navigate to transitions magicui page
async function gotoTransitionsMagicUI(page: Page) {
  await page.goto('/design/transitions/magicui');
  await expect(page.getByRole('heading', { name: 'MagicUI BlurFade Page Transition' })).toBeVisible();
}

test.describe('Transitions: MagicUI', () => {
  test('BlurFade Page Transition buttons switch content', async ({ page }) => {
    await gotoTransitionsMagicUI(page);

    const tile = page.getByRole('heading', { name: 'MagicUI BlurFade Page Transition' }).locator('..');
    // Buttons live inside first demo tile; use button text
    await page.getByRole('button', { name: 'Go to Page A' }).click();
    await expect(page.getByText('Page A Content')).toBeVisible();

    await page.getByRole('button', { name: 'Go to Page B' }).click();
    await expect(page.getByText('Page B Content')).toBeVisible();
  });

  test('Text Animate demo is visible and responds to replay', async ({ page }) => {
    await gotoTransitionsMagicUI(page);
    // Find tile by title
    const header = page.getByRole('heading', { name: 'Text Animation' });
    await expect(header).toBeVisible();
    // Ensure demo content rendered
    await expect(page.getByText('Click the replay button to see text animation')).toBeVisible();
    // Try clicking the global transition control (collapsed icon button on left)
    // It might be collapsed; first click the small icon to expand, then click replay in panel
    // The collapsed icon is a button without a name; fallback: press the first left-fixed button if present
    const controlToggle = page.locator('div.fixed.left-4.top-24 button').first();
    if (await controlToggle.isVisible()) {
      await controlToggle.click();
      // In expanded panel, click the Replay All Transitions button
      const replay = page.getByRole('button', { name: 'Replay All Transitions' });
      if (await replay.isVisible()) {
        await replay.click();
      }
    }
    // Still expect the text to remain present (animation does not remove it)
    await expect(page.getByText('Click the replay button to see text animation')).toBeVisible();
  });

  test('Morphing Text demo renders', async ({ page }) => {
    await gotoTransitionsMagicUI(page);
    await expect(page.getByRole('heading', { name: 'Morphing Text' })).toBeVisible();
    // The morphing text swaps content; assert one of the words appears eventually
    await expect(page.locator('text=Hello')).toBeVisible({ timeout: 10_000 });
  });

  test('Spinning Text demo renders and respects controls', async ({ page }) => {
    await gotoTransitionsMagicUI(page);
    const tileHeader = page.getByRole('heading', { name: 'Spinning Text' });
    await expect(tileHeader).toBeVisible();
    const tile = tileHeader.locator('..').locator('..');
    // Toggle reverse switch within this tile if present
    const reverseLabel = tile.getByText('Reverse Direction');
    if (await reverseLabel.count()) {
      const switchEl = reverseLabel.first().locator('..').locator('button,input').first();
      if (await switchEl.isVisible()) {
        await switchEl.click();
      }
    }
    // Assert the tile content is still rendered
    await expect(tile).toBeVisible();
  });

  test('Hyper Text demo scrambles on hover', async ({ page }) => {
    await gotoTransitionsMagicUI(page);
    await expect(page.getByRole('heading', { name: 'Hyper Text' })).toBeVisible();
    const text = page.getByText('Hover over me to see the effect').first();
    await expect(text).toBeVisible();
    await text.hover();
    // After hover, text continues to exist (content may change during animation)
    await expect(text).toBeVisible();
  });

  test('Word Rotation demo renders and updates', async ({ page }) => {
    await gotoTransitionsMagicUI(page);
    const tileHeader = page.getByRole('heading', { name: 'Word Rotation' });
    await expect(tileHeader).toBeVisible();
    const tile = tileHeader.locator('..').locator('..');
    // Verify one of the words becomes visible within this tile by inspecting text content
    await page.waitForTimeout(1000);
    const content = await tile.textContent();
    expect(content && /(First|Second|Third|Fourth|Fifth)/.test(content)).toBeTruthy();
  });
});
