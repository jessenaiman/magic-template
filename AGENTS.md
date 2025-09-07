# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Build/Lint/Test Commands (Non-Obvious)

- **Unit tests**: Use `pnpm test:unit` (runs from `tests/unit/` directory, not `__tests__/`)
- **Single unit test**: `pnpm vitest run --config vitest.unit.config.ts tests/unit/path/to/test.test.ts`
- **E2E navigation tests**: `pnpm test:navigation` (comprehensive route testing)
- **Preview tile tests**: `pnpm test:preview-tiles` (component interaction tests)
- **Build validation**: `pnpm test:build` (verifies production build works)
- **Comprehensive test suite**: `pnpm test:comprehensive` (runs all test types with custom reporter)

## Code Style & Patterns (Non-Obvious)

- **Component restrictions**: DO NOT MODIFY `/components/[ui|magicui|animate-ui]` - these are exact copies of open source libraries with legal implications
- **Dynamic routing**: Design categories auto-discovered via `lib/category-discovery.ts` - add new categories by creating directories in `app/design/`
- **Navigation structure**: Each design category has "Overview" page + implementation-specific pages (e.g., `/design/buttons`, `/design/buttons/tailwind`)
- **Test structure**: Unit tests in `tests/unit/` (not standard `__tests__/`), E2E tests in `e2e/`
- **Custom utilities**: 
  - Custom Playwright reporter categorizes test failures in `scripts/playwright-detailed-reporter.js`

## Critical Files & Restrictions

- **Protected files**: `app/page.tsx` and `app/layout.tsx` should not be modified without explicit instruction
- **Test reports**: Comprehensive test runner generates `TEST_EXECUTION_REPORT.md` with categorized failures
- **Design system**: Uses shadcn/ui with CSS variables - theme controlled via `components.json`

## Gotchas & Non-Obvious Patterns

- **Navigation config**: Dynamic navigation generated from `app/navigation.config.ts` - update here when adding new design categories
- **Component context**: Design pages use `DesignPageProvider` and `PreviewProvider` for state management
- **Background**: Layout uses `FlickeringGrid` component from magicui for animated background
- **Theme system**: Uses shadcn/ui CSS variable theming - configure via `components.json`