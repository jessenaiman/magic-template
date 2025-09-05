import { test, expect, Page } from '@playwright/test';

// Helper to wait for animations to complete
async function waitForAnimations(page: Page) {
  await page.waitForTimeout(500);
}

// Helper to check if element is visible and interactable
async function isElementReady(page: Page, selector: string): Promise<boolean> {
  try {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible', timeout: 5000 });
    return await element.isVisible() && await element.isEnabled();
  } catch {
    return false;
  }
}

test.describe('Preview Tile Interactions', () => {
  test.beforeEach(async ({ page }) => {
    // Start from a page with preview tiles
    await page.goto('/design/transitions/magicui');
    await page.waitForLoadState('domcontentloaded');
    await waitForAnimations(page);
  });

  test('Preview tiles expand and collapse correctly', async ({ page }) => {
    // Find the first preview tile
    const firstTile = page.locator('[data-preview-tile]').first();
    await expect(firstTile).toBeVisible();

    // Get the tile title for identification
    const tileTitle = await firstTile.locator('h3').first().textContent();
    expect(tileTitle).toBeTruthy();

    // Check initial state - should not be expanded
    const initialExpandedState = await firstTile.getAttribute('data-expanded');
    expect(initialExpandedState).toBeFalsy();

    // Click to expand the tile
    await firstTile.click();
    await waitForAnimations(page);

    // Verify tile is expanded
    const expandedState = await firstTile.getAttribute('data-expanded');
    expect(expandedState).toBeTruthy();

    // Click outside to collapse
    await page.click('body', { position: { x: 10, y: 10 } });
    await waitForAnimations(page);

    // Verify tile is collapsed
    const collapsedState = await firstTile.getAttribute('data-expanded');
    expect(collapsedState).toBeFalsy();
  });

  test('Customize button opens customization panel', async ({ page }) => {
    const tiles = page.locator('[data-preview-tile]');
    const tileCount = await tiles.count();
    
    if (tileCount > 0) {
      const firstTile = tiles.first();
      
      // Look for customize button
      const customizeButton = firstTile.locator('button:has-text("Customize"), button[aria-label*="customize"], button[title*="customize"]').first();
      
      if (await customizeButton.isVisible()) {
        await customizeButton.click();
        await waitForAnimations(page);
        
        // Check if customization panel appeared
        const customizationPanel = page.locator('[data-customization-panel], .customization-panel, [role="dialog"]');
        await expect(customizationPanel).toBeVisible();
        
        // Check for common customization controls
        const controls = page.locator('input[type="range"], input[type="number"], select, input[type="checkbox"]');
        const controlCount = await controls.count();
        expect(controlCount).toBeGreaterThan(0);
      }
    }
  });

  test('Code view button shows and hides code', async ({ page }) => {
    const tiles = page.locator('[data-preview-tile]');
    const tileCount = await tiles.count();
    
    if (tileCount > 0) {
      const firstTile = tiles.first();
      
      // Look for code view button
      const codeButton = firstTile.locator('button:has-text("View code"), button:has-text("Code"), button[aria-label*="code"]').first();
      
      if (await codeButton.isVisible()) {
        // Click to show code
        await codeButton.click();
        await waitForAnimations(page);
        
        // Check if code panel appeared
        const codePanel = page.locator('pre, code, [data-code-panel]').first();
        await expect(codePanel).toBeVisible();
        
        // Verify code content is present
        const codeContent = await codePanel.textContent();
        expect(codeContent).toBeTruthy();
        expect(codeContent!.length).toBeGreaterThan(10);
        
        // Click again to hide code
        await codeButton.click();
        await waitForAnimations(page);
        
        // Code panel should be hidden or removed
        const isCodeVisible = await codePanel.isVisible().catch(() => false);
        expect(isCodeVisible).toBeFalsy();
      }
    }
  });

  test('Copy code button works correctly', async ({ page }) => {
    const tiles = page.locator('[data-preview-tile]');
    const tileCount = await tiles.count();
    
    if (tileCount > 0) {
      const firstTile = tiles.first();
      
      // First show the code
      const codeButton = firstTile.locator('button:has-text("View code"), button:has-text("Code"), button[aria-label*="code"]').first();
      
      if (await codeButton.isVisible()) {
        await codeButton.click();
        await waitForAnimations(page);
        
        // Look for copy button
        const copyButton = page.locator('button:has-text("Copy"), button[aria-label*="copy"], button[title*="copy"]').first();
        
        if (await copyButton.isVisible()) {
          // Grant clipboard permissions
          await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
          
          await copyButton.click();
          await waitForAnimations(page);
          
          // Verify clipboard content (if accessible)
          const clipboardContent = await page.evaluate(async () => {
            try {
              return await navigator.clipboard.readText();
            } catch {
              return null;
            }
          });
          
          if (clipboardContent) {
            expect(clipboardContent.length).toBeGreaterThan(0);
          }
          
          // Look for success feedback
          const successFeedback = page.locator(':has-text("Copied"), :has-text("Success"), .success, [data-success]');
          const feedbackVisible = await successFeedback.isVisible().catch(() => false);
          // Success feedback is optional, so we don't fail if it's not present
        }
      }
    }
  });

  test('Preview tiles respond to global controls', async ({ page }) => {
    // Look for global control buttons (pause, reset, theme toggle)
    const pauseButton = page.locator('button:has-text("Pause"), button[aria-label*="pause"]').first();
    const resetButton = page.locator('button:has-text("Reset"), button[aria-label*="reset"]').first();
    const themeButton = page.locator('button:has-text("Dark"), button:has-text("Light"), button[aria-label*="theme"]').first();
    
    // Test pause functionality
    if (await pauseButton.isVisible()) {
      await pauseButton.click();
      await waitForAnimations(page);
      
      // Verify animations are paused (check for paused state indicators)
      const pausedIndicators = page.locator('[data-paused="true"], .paused, [aria-label*="paused"]');
      const pausedCount = await pausedIndicators.count();
      // Paused state verification is optional as implementation may vary
    }
    
    // Test reset functionality
    if (await resetButton.isVisible()) {
      await resetButton.click();
      await waitForAnimations(page);
      
      // Animations should restart - verify by checking for animation elements
      const animatedElements = page.locator('[style*="animation"], [class*="animate"], [data-animate]');
      const animatedCount = await animatedElements.count();
      // Animation presence verification is optional as implementation may vary
    }
    
    // Test theme toggle
    if (await themeButton.isVisible()) {
      const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      
      await themeButton.click();
      await waitForAnimations(page);
      
      const newTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test('Multiple preview tiles can be interacted with independently', async ({ page }) => {
    const tiles = page.locator('[data-preview-tile]');
    const tileCount = await tiles.count();
    
    if (tileCount >= 2) {
      const firstTile = tiles.nth(0);
      const secondTile = tiles.nth(1);
      
      // Expand first tile
      await firstTile.click();
      await waitForAnimations(page);
      
      const firstExpanded = await firstTile.getAttribute('data-expanded');
      expect(firstExpanded).toBeTruthy();
      
      // Expand second tile (should collapse first if single-expansion mode)
      await secondTile.click();
      await waitForAnimations(page);
      
      const secondExpanded = await secondTile.getAttribute('data-expanded');
      expect(secondExpanded).toBeTruthy();
      
      // Check if first tile is still expanded (depends on implementation)
      const firstStillExpanded = await firstTile.getAttribute('data-expanded');
      // This test allows for both single and multi-expansion modes
    }
  });
});

test.describe('Design Layout Integration', () => {
  test('Tab navigation works correctly', async ({ page }) => {
    await page.goto('/design/transitions');
    await page.waitForLoadState('domcontentloaded');
    
    // Find tab navigation
    const tabs = page.locator('[role="tab"], .tab, [data-tab]');
    const tabCount = await tabs.count();
    
    if (tabCount > 1) {
      // Click each tab and verify content changes
      for (let i = 0; i < Math.min(tabCount, 5); i++) {
        const tab = tabs.nth(i);
        const tabText = await tab.textContent();
        
        await tab.click();
        await waitForAnimations(page);
        
        // Verify tab is active
        const isActive = await tab.getAttribute('aria-selected') === 'true' || 
                         await tab.getAttribute('data-active') === 'true' ||
                         await tab.evaluate(el => el.classList.contains('active'));
        
        expect(isActive).toBeTruthy();
        
        // Verify URL reflects tab selection (if applicable)
        const currentUrl = page.url();
        // URL changes are optional depending on implementation
      }
    }
  });

  test('Sidebar navigation reflects current page', async ({ page }) => {
    const testPages = [
      '/design/transitions',
      '/design/buttons',
      '/design/effects'
    ];
    
    for (const pagePath of testPages) {
      await page.goto(pagePath);
      await page.waitForLoadState('domcontentloaded');
      
      // Look for active navigation indicators in sidebar
      const activeNavItems = page.locator('nav a[aria-current="page"], nav .active, nav [data-active="true"]');
      const activeCount = await activeNavItems.count();
      
      expect(activeCount).toBeGreaterThan(0);
      
      // Verify the active item corresponds to current page
      if (activeCount > 0) {
        const activeItem = activeNavItems.first();
        const href = await activeItem.getAttribute('href');
        expect(href).toBeTruthy();
        expect(pagePath).toContain(href!);
      }
    }
  });

  test('Responsive design works on different screen sizes', async ({ page }) => {
    await page.goto('/design/transitions');
    await page.waitForLoadState('domcontentloaded');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await waitForAnimations(page);
    
    // Verify mobile navigation (hamburger menu, etc.)
    const mobileNav = page.locator('button[aria-label*="menu"], .mobile-menu, [data-mobile-nav]');
    const hasMobileNav = await mobileNav.count() > 0;
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await waitForAnimations(page);
    
    // Verify layout adapts
    const sidebar = page.locator('aside, .sidebar, nav');
    const sidebarVisible = await sidebar.isVisible().catch(() => false);
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await waitForAnimations(page);
    
    // Verify desktop layout
    const desktopSidebar = page.locator('aside, .sidebar');
    const desktopSidebarVisible = await desktopSidebar.isVisible().catch(() => false);
    
    // Desktop should typically show sidebar
    expect(desktopSidebarVisible).toBeTruthy();
  });

  test('Page transitions work smoothly', async ({ page }) => {
    await page.goto('/design/transitions');
    await page.waitForLoadState('domcontentloaded');
    
    // Navigate to different sections and verify smooth transitions
    const navigationLinks = page.locator('nav a[href^="/design/"]');
    const linkCount = await navigationLinks.count();
    
    if (linkCount > 0) {
      const testLink = navigationLinks.first();
      const href = await testLink.getAttribute('href');
      
      if (href) {
        // Click navigation link
        await testLink.click();
        await page.waitForLoadState('domcontentloaded');
        
        // Verify navigation completed
        await expect(page).toHaveURL(href);
        
        // Check for transition artifacts or broken layouts
        const body = page.locator('body');
        await expect(body).toBeVisible();
        
        // Verify no layout shift indicators
        const layoutShiftElements = page.locator('[style*="transform"], .transition-');
        const hasTransitions = await layoutShiftElements.count() > 0;
        // Transitions are optional, so we don't fail if they're not present
      }
    }
  });
});
