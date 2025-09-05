// Vitest setup file (jsdom)
// Add any global mocks or setup needed for unit tests here.
// Keeping minimal to avoid side effects.

import '@testing-library/jest-dom';

// Example: silence console noise in tests if needed
// const originalError = console.error;
// beforeAll(() => {
//   console.error = (...args: any[]) => {
//     // Filter noisy React act warnings, etc.
//     originalError(...args);
//   };
// });
