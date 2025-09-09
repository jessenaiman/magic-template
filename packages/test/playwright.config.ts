import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  tsconfig: './tsconfig.playwright.json',
  testDir: '../../apps/web/tests',
  testMatch: '**/*.spec.ts',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  use: { baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  reporter: process.env.CI ? 'github' : 'list',
});
