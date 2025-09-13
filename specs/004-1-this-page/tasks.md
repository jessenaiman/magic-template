# Tasks: Consistent Design Page Layout & Customization

**Input**: Design documents from `/specs/004-1-this-page/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
2. Load optional design documents: data-model.md, contracts/, research.md
3. Generate tasks by category: Setup, Tests, Core, Integration, Polish
4. Apply task rules: [P] for parallel, TDD order, sequential for same file
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness
9. Return: SUCCESS (tasks ready for execution)
```

## Phase 3.1: Setup
- [x] T001 Ensure project dependencies are installed (pnpm, shadcn/ui, tailwindcss)
    - Verified in package.json: pnpm, tailwindcss, shadcn/ui present as dependencies or devDependencies. No reinstall needed.
- [x] T002 [P] Do not reinstall linting and formatting tools (eslint, prettier, markdownlint). Make sure they are handling 3rd party installations without requiring uneeded fixes, they should work as intended once installed.
    - eslint and prettier present and configured. markdownlint config not found in root, but not required for this step. No fixes or reinstalls performed.
- [x] T003 [P] Validate project structure matches plan (src/app/design, shared layout, etc.).
    - Filesystem tree for /src/app/design:
      - animations/
        - animate-ui/page.tsx
        - animatecss/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - page.tsx
        - reactbits/page.tsx
      - backgrounds/
        - animate-ui/page.tsx
        - html-css/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - page.tsx
        - tailwind/page.tsx
      - buttons/
        - animate-css/page.tsx
        - animate-ui/page.tsx
        - animate-ui-examples.tsx
        - customize/page.tsx
        - html-css/page.tsx
        - interactive-accessibility-examples.tsx
        - layout.tsx
        - magic/page.tsx
        - page.tsx
        - responsive-examples.tsx
        - shadcn/page.tsx
        - tailwind/page.tsx
      - effects/
        - html-css/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - page.tsx
        - tailwind/page.tsx
      - layout.tsx
      - page.tsx
      - responsive-design/
        - html-css/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - nextjs/page.tsx
        - page.tsx
        - tailwindcss/page.tsx
      - text/
        - html-css/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - page.tsx
        - reactbits/page.tsx
        - shadcn/page.tsx
        - tailwind/page.tsx
      - transitions/
        - html-css/page.tsx
        - layout.tsx
        - magicui/page.tsx
        - nextjs/page.tsx
        - page.tsx
        - tailwind/page.tsx
    - Preview components in /src/components/preview:
      - preview-context.tsx
      - preview-controls-bar.tsx
      - preview-customization-panel.tsx
      - preview-grid.tsx
      - preview-input.tsx
      - preview-prop-table.tsx
      - preview-select.tsx
      - preview-slider.tsx
      - preview-surface.tsx
      - preview-switch.tsx
      - preview-tile-header.tsx
      - preview-tile.tsx
      - template-customization-panel.tsx
      - template-preview.tsx
    - Shared layout found in /src/app/design/layout.tsx and per-category layouts.
    - This matches the documented plan structure for design pages and preview components.

---

**Setup phase complete. All configuration and structure validated.**

## Phase 3.2: Tests First (TDD)

### Test Setup Review (2025-09-13)

- **Playwright** is present in devDependencies and used in npm scripts for e2e and navigation tests, but there is no explicit playwright.config file. Playwright is not the main runner for integration tests.
- **Vitest** is the primary test runner for unit, contract, and integration tests. It is configured in `vitest.config.ts` and uses Testing Library for React component tests.
- **Testing Library** is used for all React integration/unit tests. Jest types are present for matcher compatibility, but Jest is not used as a runner.
- **Storybook Vitest** plugin is present for story-based tests.
- **Test files** are located in `tests/integration/`, `tests/contract/`, and `tests/unit/` (unit folder not shown above but referenced in config).

#### Recommendations
- Focus on Playwright for runtime/e2e tests that require browser automation or navigation.
- Use Vitest + Testing Library for all integration and unit tests (current setup is correct for React component logic and UI validation).
- Consider removing Jest as a dependency if not used directly (only keep types if needed for matchers).
- Document Playwright usage and add a playwright.config file if advanced Playwright features are needed in the future.

---

[ ] T004 [P] Ensure all test matcher typings (e.g., Testing Library, jest-dom) are present and recognized by the test runner
[ ] T005 [P] Fix or update all tests to match the actual implementation API and props (update tests if implementation changes, and update implementation if tests are correct)
[ ] T006 [P] Write contract test for design page customization API (placeholder, see contracts/design-page-customization.md)
[ ] T007 [P] Write integration test: design page renders with default customization options (tests/integration/design-page-defaults.test.tsx)
[ ] T008 [P] Write integration test: preview tiles expand responsively on all breakpoints (tests/integration/preview-tiles-responsive.test.tsx)
[ ] T009 [P] Write integration test: customization panel applies changes to preview tiles (tests/integration/customization-panel.test.tsx)

## Phase 3.3: Core Implementation
- [ ] T008 [P] Refactor layout logic into shared layout component (src/app/design/layout.tsx)
- [ ] T009 [P] Implement default customization options in layout, not in individual pages
- [ ] T010 [P] Update all design pages to use shared layout and customization panel
- [ ] T011 [P] Update preview tile grid to fill available space responsively (src/components/preview/preview-grid.tsx)
- [ ] T012 [P] Ensure customization panel and preview tile are responsive and accessible

## Phase 3.4: Integration & Polish
- [ ] T013 [P] Document outstanding responsive issues and check in for review (README or code comments)
- [ ] T014 [P] Add unit tests for layout and customization logic (tests/unit/layout-customization.test.tsx)
- [ ] T015 [P] Run lint and fix all markdown, code, and style errors
- [ ] T016 [P] Update quickstart.md with any new troubleshooting steps

## Parallel Execution Guidance
- Tasks marked [P] can be executed in parallel (e.g., T002, T003, T004–T007, T008–T012, T013–T016)
- Example: To run all integration tests in parallel:
  ```sh
  pnpm test tests/integration/design-page-defaults.test.tsx &
  pnpm test tests/integration/preview-tiles-responsive.test.tsx &
  pnpm test tests/integration/customization-panel.test.tsx &
  wait
  ```

---

All tasks are dependency-ordered and ready for execution. Each task specifies the file(s) to be edited or created. Complete all TDD tasks before starting implementation.
