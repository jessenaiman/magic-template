/**
 * Startup Application Test
 *
 * This test verifies that the Magic Template application can start up without critical errors.
 * It focuses on basic rendering and import resolution to ensure the build environment is functional.
 * If this test fails, it provides actionable data to fix build issues step by step.
 *
 * @description KISS test for application startup - checks if main components can render
 * @author Magic Template QA
 * @since 2025-09-09
 */

import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';

/**
 * Test suite for application startup
 */
describe('Application Startup', () => {
  /**
   * Basic startup test - attempts to render a simple component
   * This will fail if there are import errors, missing dependencies, or build issues
   */
  it('should render application without critical errors', async () => {
    try {
      // Attempt to import and render a basic component
      // This will catch import resolution errors and basic rendering issues
      const { default: LandingPage } = await import('../components/landing-page');

      // If import succeeds, try to render
      render(<LandingPage />);

      // Basic assertion - if we get here, rendering worked
      expect(document.body).toBeInTheDocument();

    } catch (error) {
      // If test fails, provide detailed error information
      console.error('Application Startup Test Failed:', error);

      // Re-throw with actionable message
      throw new Error(`
Application startup failed with the following error:

${error.message}

Actionable Steps to Fix:
1. Check import paths in landing-page.tsx
2. Verify @repo/components dependencies are resolved
3. Ensure TypeScript paths are correctly configured
4. Check for missing dependencies in package.json
5. Run 'pnpm install' to ensure all packages are installed
6. Fix any TypeScript compilation errors in packages/components

Error Details:
${error.stack || 'No stack trace available'}
      `);
    }
  });

  /**
   * Test for basic Next.js page rendering
   * This checks if the main page can be imported and has basic structure
   */
  it('should have valid page structure', async () => {
    try {
      const { default: Page } = await import('../app/page');

      // Check if it's a valid React component
      expect(typeof Page).toBe('function');

    } catch (error) {
      throw new Error(`
Page import failed:

${error.message}

This indicates issues with:
- Main page.tsx file
- App router configuration
- Next.js setup

Check apps/web/src/app/page.tsx for syntax errors or missing imports.
      `);
    }
  });
});
