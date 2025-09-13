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
- [ ] T001 Ensure project dependencies are installed (pnpm, shadcn/ui, tailwindcss)
- [ ] T002 [P] Configure linting and formatting tools (eslint, prettier, markdownlint)
- [ ] T003 [P] Validate project structure matches plan (src/app/design, shared layout, etc.)

## Phase 3.2: Tests First (TDD)
- [ ] T004 [P] Ensure all test matcher typings (e.g., Testing Library, jest-dom) are present and recognized by the test runner
- [ ] T005 [P] Fix or update all tests to match the actual implementation API and props (update tests if implementation changes, and update implementation if tests are correct)
- [ ] T006 [P] Write contract test for design page customization API (placeholder, see contracts/design-page-customization.md)
- [ ] T007 [P] Write integration test: design page renders with default customization options (tests/integration/design-page-defaults.test.tsx)
- [ ] T008 [P] Write integration test: preview tiles expand responsively on all breakpoints (tests/integration/preview-tiles-responsive.test.tsx)
- [ ] T009 [P] Write integration test: customization panel applies changes to preview tiles (tests/integration/customization-panel.test.tsx)

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
