# @repo/test

Shared test configuration for the monorepo.

- **Unit:** Vitest + React Testing Library (jsdom)
- **E2E/Smoke/Links:** Playwright

## Usage

- Add `@repo/test` as a devDependency in your app/package.
- Use the provided `vitest.config.ts` and `playwright.config.ts` for consistent test setup.

## Files

- `vitest.config.ts` — Vitest config (jsdom, RTL, coverage)
- `vitest.setup.ts` — Jest DOM setup
- `playwright.config.ts` — Playwright config (smoke/link tests)
