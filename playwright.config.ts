import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  /* Look for test files in the e2e directory */
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  /* Reporters for easy readability */
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  /* Run locally; Playwright will launch the dev server for us */
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
