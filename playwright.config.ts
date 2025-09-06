import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  /* Look for test files in the e2e directory */
  timeout: 60_000,
  retries: 2,
  forbidOnly: true,
  expect: {
    timeout: 10_000,
  },
  /* Reporters for easy readability */
  reporter: [
    ['list'],
    // Preserve existing html report location to avoid orphaning reports
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    // Add CI/machine-readable outputs consumed by /test-report
    ['junit', { outputFile: 'test-results/e2e-junit.xml' }],
    ['json', { outputFile: 'test-results/e2e.json' }],
    // Custom categorized JSON for /test-report page
    [require.resolve('./scripts/playwright-detailed-reporter.js'), { outputFile: 'test-results/e2e-detailed.json' }],
  ],
  // webServer block disabled for start-server-and-test sequencing
  // webServer: {
  //   command: 'pnpm dev',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: true,
  //   timeout: 120_000,
  // },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // Store artifacts under test-results; keep html report untouched above
    // Note: Playwright will create this path if missing
    // This does not conflict with existing directories
    // @ts-expect-error: outputDir is valid in PW config use
    outputDir: 'test-results/playwright-artifacts',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
