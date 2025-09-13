/**
 * Vitest setup file for contract and integration tests
 * This file runs before all tests and sets up the testing environment
 */

import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with testing-library matchers
expect.extend(matchers);

// Clean up after each test case
afterEach(() => {
  cleanup();
});

// Mock console methods to reduce noise during testing
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: any[]) => {
    // Only show errors that are not from our intentionally failing tests
    if (!args[0]?.includes?.('Cannot find module')) {
      originalConsoleError(...args);
    }
  };

  console.warn = (...args: any[]) => {
    // Suppress warnings during test runs
    if (!args[0]?.includes?.('ReactDOMTestUtils')) {
      originalConsoleWarn(...args);
    }
  };
});

afterAll(() => {
  // Restore original console methods
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
