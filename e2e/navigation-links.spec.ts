import { test, expect, type Page } from '@playwright/test';
import { mainNavigation } from '../app/navigation.config';
import fs from 'fs';
import path from 'path';

// Extract all valid hrefs from navigation config
function extractHrefs(items: any[]): Array<{href: string, label: string, parent?: string}> {
  let hrefs: Array<{href: string, label: string, parent?: string}> = [];
  for (const item of items) {
    if (item.href && item.href !== '#' && !item.href.startsWith('http')) {
      hrefs.push({href: item.href, label: item.label});
    }
    if (item.children) {
      hrefs = hrefs.concat(extractHrefs(item.children).map(child => ({
        ...child,
        parent: item.label
      })));
    }
  }
  return hrefs;
}

// Store test results for the test-report page
interface TestResult {
  href: string;
  label: string;
  parent?: string;
  status: 'pass' | 'fail' | 'skipped';
  error?: string;
  responseTime?: number;
  timestamp: string;
}

const testResults: TestResult[] = [];

// Function to save test results to a JSON file
async function saveTestResults() {
  const resultsDir = path.join(process.cwd(), 'test-results');
  const resultsPath = path.join(resultsDir, 'navigation-test-results.json');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }
  
  // Write results to file
  fs.writeFileSync(resultsPath, JSON.stringify(testResults, null, 2));
  console.log(`Test results saved to ${resultsPath}`);
  
  // Also save to app directory for the test-report page
  const appResultsDir = path.join(process.cwd(), 'app', 'test-report');
  const appResultsPath = path.join(appResultsDir, 'navigation-results.json');
  
  if (!fs.existsSync(appResultsDir)) {
    fs.mkdirSync(appResultsDir, { recursive: true });
  }
  
  fs.writeFileSync(appResultsPath, JSON.stringify(testResults, null, 2));
  console.log(`Test results also saved to ${appResultsPath}`);
}

// Extract all navigation items
const navigationItems = extractHrefs(mainNavigation.flatMap(section => section.items));

// Filter to only test internal pages (exclude external links)
const internalLinks = navigationItems.filter(item => !item.href.startsWith('http') && item.href !== '#');

// Known routes that should be skipped in testing
const skipRoutes: string[] = [
  // Add any routes that should be skipped here
];

test.describe('Navigation Links', () => {
  // Run after all tests to save results
  test.afterAll(async () => {
    await saveTestResults();
  });
  
  // Test each navigation link loads without errors
  for (const item of internalLinks) {
    test(`Link: ${item.label} (${item.href})`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const startTime = Date.now();
      const testResult: TestResult = {
        href: item.href,
        label: item.label,
        parent: item.parent,
        status: 'skipped',
        timestamp: new Date().toISOString()
      };
      
      // Skip known problematic routes
      if (skipRoutes.includes(item.href)) {
        test.skip();
        testResult.status = 'skipped';
        testResult.error = 'Route explicitly skipped';
        testResults.push(testResult);
        return;
      }
      
      try {
        // Listen for console errors
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });

        // Navigate to the page
        const response = await page.goto(item.href, { timeout: 30000 });
        
        // Wait for the page to be fully loaded
        await page.waitForLoadState('networkidle');
        
        // Calculate response time
        const responseTime = Date.now() - startTime;
        testResult.responseTime = responseTime;
        
        // Check for console errors
        if (consoleErrors.length > 0) {
          console.warn(`Console errors on ${item.href}:`, consoleErrors);
        }
        
        // Verify the page loaded successfully
        expect(response?.status(), `Status code for ${item.href}`).toBeLessThan(400);
        expect(page.url()).toContain(item.href);
        
        // Check for common error indicators
        const pageContent = await page.content();
        expect(pageContent).not.toContain('404');
        
        // Check that we have some meaningful content
        const bodyText = await page.evaluate(() => document.body.textContent || '');
        expect(bodyText.length).toBeGreaterThan(50);
        
        // Test passed
        testResult.status = 'pass';
        testResults.push(testResult);
        
      } catch (error: unknown) {
        // Test failed
        testResult.status = 'fail';
        testResult.error = error instanceof Error ? error.message : String(error);
        testResults.push(testResult);
        throw error;
      }
    });
  }
});
