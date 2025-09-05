import { test, expect, Page } from '@playwright/test';
import { mainNavigation, NavItem } from '../app/navigation.config';

// Utility to collect all navigation links recursively
function collectAllNavLinks(items: NavItem[]): NavItem[] {
  const links: NavItem[] = [];
  
  for (const item of items) {
    // Skip external links and hash links
    if (item.href && !item.href.startsWith('#') && !item.href.startsWith('http')) {
      links.push(item);
    }
    
    if (item.children) {
      links.push(...collectAllNavLinks(item.children));
    }
  }
  
  return links;
}

// Get all navigation links from config
const allNavLinks = mainNavigation.flatMap(section => collectAllNavLinks(section.items));

// Helper to check for runtime errors
async function checkForRuntimeErrors(page: Page, url: string) {
  const errors: string[] = [];
  
  // Listen for console errors (including React errors)
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      errors.push(`Console Error: ${text}`);
      
      // Specifically catch React context errors
      if (text.includes('must be used within') || 
          text.includes('useContext') || 
          text.includes('Context') ||
          text.includes('Provider')) {
        errors.push(`React Context Error: ${text}`);
      }
    }
  });
  
  // Listen for page errors (unhandled exceptions)
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}`);
    
    // Catch React hook errors specifically
    if (error.message.includes('must be used within') ||
        error.message.includes('useContext') ||
        error.message.includes('Invalid hook call')) {
      errors.push(`React Hook Error: ${error.message}`);
    }
  });
  
  // Listen for request failures
  page.on('requestfailed', request => {
    errors.push(`Request Failed: ${request.url()} - ${request.failure()?.errorText}`);
  });
  
  // Navigate to the page
  const response = await page.goto(url, { 
    waitUntil: 'domcontentloaded',
    timeout: 30000 
  });
  
  // Check response status
  if (!response || response.status() >= 400) {
    errors.push(`HTTP Error: ${response?.status()} for ${url}`);
  }
  
  // Wait longer for React errors to surface
  await page.waitForTimeout(3000);
  
  // Check for React error boundaries or error messages in the DOM
  const reactErrors = await page.evaluate(() => {
    const errorElements = document.querySelectorAll('[data-error], .error, [class*="error"]');
    const errors = [];
    
    for (const element of errorElements) {
      if (element.textContent && element.textContent.includes('Error')) {
        errors.push(`DOM Error: ${element.textContent.trim()}`);
      }
    }
    
    // Check for React DevTools error indicators
    const reactErrorBoundaries = document.querySelectorAll('[data-reactroot] *');
    for (const element of reactErrorBoundaries) {
      if (element.textContent && 
          (element.textContent.includes('Something went wrong') ||
           element.textContent.includes('Error Boundary') ||
           element.textContent.includes('must be used within'))) {
        errors.push(`React Error Boundary: ${element.textContent.trim()}`);
      }
    }
    
    return errors;
  });
  
  errors.push(...reactErrors);
  
  // Try to interact with the page to trigger any lazy-loaded errors
  try {
    await page.mouse.move(100, 100);
    await page.waitForTimeout(1000);
  } catch (e) {
    // Interaction errors are also failures
    errors.push(`Interaction Error: ${e}`);
  }
  
  return errors;
}

test.describe('Navigation Links - Comprehensive Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Set up error tracking for each test
    await page.goto('/');
  });

  // Test each navigation link individually
  for (const navItem of allNavLinks) {
    test(`Navigation: ${navItem.label} (${navItem.href}) loads without errors`, async ({ page }) => {
      const errors = await checkForRuntimeErrors(page, navItem.href);
      
      // Fail test if any runtime errors occurred
      if (errors.length > 0) {
        console.error(`Errors found for ${navItem.href}:`, errors);
        expect(errors).toHaveLength(0);
      }
      
      // Verify page loaded successfully
      await expect(page).toHaveURL(navItem.href);
      
      // Check for basic page structure
      const body = page.locator('body');
      await expect(body).toBeVisible();
      
      // Verify no hydration mismatch warnings or React errors
      const reactIssues = await page.evaluate(() => {
        const issues = [];
        
        // Check for hydration errors
        const allElements = Array.from(document.querySelectorAll('*'));
        for (const el of allElements) {
          if (el.textContent?.includes('Hydration failed') || 
              el.textContent?.includes('Text content does not match') ||
              el.textContent?.includes('must be used within') ||
              el.textContent?.includes('useContext') ||
              el.textContent?.includes('Invalid hook call')) {
            issues.push(`Hydration/React Error in DOM: ${el.textContent.substring(0, 200)}`);
          }
        }
        
        // Check for React error boundaries
        const errorBoundaries = document.querySelectorAll('[data-react-error-boundary]');
        if (errorBoundaries.length > 0) {
          issues.push(`React Error Boundary detected: ${errorBoundaries.length} boundaries`);
        }
        
        // Note: Console errors are captured by the page.on('console') listener above
        
        return issues;
      });
      
      // Fail if any React issues are detected
      if (reactIssues.length > 0) {
        console.error(`React issues found on ${navItem.href}:`, reactIssues);
        throw new Error(`React issues detected: ${reactIssues.join('; ')}`);
      }
    });
  }

  test('All navigation links are reachable from home page', async ({ page }) => {
    await page.goto('/');
    
    for (const navItem of allNavLinks) {
      // Try to find and click the navigation link
      const linkSelector = `a[href="${navItem.href}"]`;
      const link = page.locator(linkSelector).first();
      
      if (await link.isVisible()) {
        await link.click();
        await page.waitForLoadState('domcontentloaded');
        
        // Verify we navigated to the correct page
        await expect(page).toHaveURL(navItem.href);
        
        // Go back to home for next test
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');
      }
    }
  });

  test('Navigation breadcrumbs work correctly', async ({ page }) => {
    // Test nested navigation paths
    const nestedLinks = allNavLinks.filter(link => 
      link.href.split('/').length > 3 // e.g., /design/buttons/shadcn
    );
    
    for (const link of nestedLinks.slice(0, 5)) { // Test first 5 to avoid timeout
      await page.goto(link.href);
      await page.waitForLoadState('domcontentloaded');
      
      // Check if breadcrumbs or navigation state reflects current page
      const currentPath = await page.url();
      expect(currentPath).toContain(link.href);
      
      // Look for active navigation indicators
      const activeNavElements = page.locator('[aria-current="page"], .active, [data-active="true"]');
      const activeCount = await activeNavElements.count();
      
      // Should have at least one active navigation element
      expect(activeCount).toBeGreaterThan(0);
    }
  });

  test('Navigation preserves state across page changes', async ({ page }) => {
    await page.goto('/design/transitions');
    await page.waitForLoadState('domcontentloaded');
    
    // Check if theme toggle state is preserved
    const themeButton = page.locator('button[aria-label*="theme"], button:has-text("Dark"), button:has-text("Light")').first();
    
    if (await themeButton.isVisible()) {
      const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      
      // Navigate to another page
      await page.goto('/design/buttons');
      await page.waitForLoadState('domcontentloaded');
      
      // Check if theme is preserved
      const preservedTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      expect(preservedTheme).toBe(initialTheme);
    }
  });
});

test.describe('Navigation Performance', () => {
  test('Navigation links load within acceptable time', async ({ page }) => {
    const performanceResults: { url: string; loadTime: number }[] = [];
    
    for (const navItem of allNavLinks.slice(0, 10)) { // Test first 10 for performance
      const startTime = Date.now();
      
      await page.goto(navItem.href, { 
        waitUntil: 'domcontentloaded',
        timeout: 15000 
      });
      
      const loadTime = Date.now() - startTime;
      performanceResults.push({ url: navItem.href, loadTime });
      
      // Each page should load within 10 seconds
      expect(loadTime).toBeLessThan(10000);
    }
    
    // Log performance results for analysis
    console.log('Navigation Performance Results:', performanceResults);
  });

  test('Navigation does not cause memory leaks', async ({ page }) => {
    await page.goto('/');
    
    // Get initial memory usage
    const initialMetrics = await page.evaluate(() => {
      if ('memory' in performance) {
        return (performance as any).memory.usedJSHeapSize;
      }
      return 0;
    });
    
    // Navigate through several pages
    const testPages = allNavLinks.slice(0, 5);
    for (const navItem of testPages) {
      await page.goto(navItem.href);
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(1000);
    }
    
    // Force garbage collection if available
    await page.evaluate(() => {
      if ('gc' in window) {
        (window as any).gc();
      }
    });
    
    // Check final memory usage
    const finalMetrics = await page.evaluate(() => {
      if ('memory' in performance) {
        return (performance as any).memory.usedJSHeapSize;
      }
      return 0;
    });
    
    // Memory should not increase dramatically (allow for 50MB increase)
    if (initialMetrics > 0 && finalMetrics > 0) {
      const memoryIncrease = finalMetrics - initialMetrics;
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024); // 50MB
    }
  });
});
