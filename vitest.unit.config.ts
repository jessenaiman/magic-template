import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: [
      'tests/unit/**/*.test.{ts,tsx}',
      'tests/contract/**/*.test.{ts,tsx}',
      'tests/integration/**/*.test.{ts,tsx}'
    ],
    environment: 'jsdom',
    globals: true,
    pool: 'threads',
    watch: false,
    setupFiles: ['./tests/setup.ts'],
    // Enable testing-library
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    }
  },
  resolve: {
    alias: {
      // Match the paths from tsconfig.json
      '@': path.resolve(__dirname, './'),
      // Add any other aliases from tsconfig.json here if needed
    },
  },
});
