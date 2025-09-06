// Vitest setup file (jsdom)
import { vi, beforeAll, afterEach, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

declare global {
  interface Window {
    ResizeObserver: typeof ResizeObserver;
  }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock console methods in test environment
const consoleError = console.error;
const consoleWarn = console.warn;

beforeAll(() => {
  // Suppress expected error messages in tests
  console.error = (...args) => {
    // Ignore specific expected errors
    if (args[0]?.includes('usePreviewTileExpansion must be used within a PreviewSurface')) {
      return;
    }
    consoleError(...args);
  };

  console.warn = (...args) => {
    // Suppress specific warnings
    if (args[0]?.includes('A component is changing an uncontrolled input to be controlled')) {
      return;
    }
    consoleWarn(...args);
  };
});

afterAll(() => {
  // Restore original console methods
  console.error = consoleError;
  console.warn = consoleWarn;
});
