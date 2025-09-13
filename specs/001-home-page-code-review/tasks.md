# Tasks: Home Page Code Review and Optimization

**Input**: Design documents from `/specs/001-home-page-code-review/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)

```bash
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → validation tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Build: project structure, imports, compilation
   → Setup: dependencies, linting, verification
   → Tests: contract tests, integration tests
   → Core: code review, component validation, fixes
   → Integration: lazy loading, transitions, error handling
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Build success before any other work
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → Build works before any changes?
   → All contracts have tests?
   → All entities validated?
   → All requirements implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `src/` for frontend components and pages
- Paths assume Next.js structure with app router

## Phase 3.1: Build Foundation ⚠️ CRITICAL - MUST COMPLETE BEFORE ANY OTHER WORK

### Build Verification & Fixes (Proactive Prevention)

- [ ] T001 Validate project structure using MCP filesystem tools in /home/adam/Dev/magic-template
- [ ] T002 Attempt build and identify all compilation errors in package.json scripts
- [ ] T003 Fix broken import paths and module resolution in src/ files
- [ ] T004 Fix asset references (images, fonts, styles) in public/ and src/
- [ ] T005 Fix route configuration issues in src/app/ structure
- [ ] T006 Verify development server starts without errors in src/app/page.tsx
- [ ] T007 Confirm build completes successfully with npm run build
- [ ] T008 [P] Install/update Next.js, MagicUI, Shadcn, Animate-UI, ReactBits via CLI
- [ ] T009 [P] Configure linting and formatting tools (ESLint, Prettier)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

### CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation

- [ ] T010 [P] Contract test for component validation in tests/contract/test_component_validation.ts
- [ ] T011 [P] Contract test for home page load in tests/contract/test_home_page_load.ts
- [ ] T012 [P] Contract test for scroll to bottom in tests/contract/test_scroll_to_bottom.ts
- [ ] T013 [P] Integration test for code review workflow in tests/integration/test_code_review_flow.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [ ] T014 Review and fix file naming and placement in src/components/
- [ ] T015 Remove code duplications across component libraries
- [ ] T016 Fix bad practices in src/app/page.tsx and components
- [ ] T017 Address architecture violations in project structure
- [ ] T018 [P] Validate MagicUI components using MCP tools in src/components/magicui/
- [ ] T019 [P] Validate Shadcn components using MCP tools in src/components/ui/
- [ ] T020 [P] Validate Animate-UI components using MCP tools in src/components/animate-ui/
- [ ] T021 [P] Validate ReactBits components using MCP tools in src/components/[UpperCase].tsx
- [ ] T022 Implement lazy loading for components using next/dynamic
- [ ] T023 Replace custom transitions with Next.js transitions in src/app/page.tsx

## Phase 3.4: Integration

- [ ] T024 Connect lazy loading to page rendering in src/app/page.tsx
- [ ] T025 Implement error handling for component failures
- [ ] T026 Test component loading and memory usage

## Phase 3.5: Polish

- [ ] T027 [P] Unit tests for component validation in tests/unit/test_component_validation.ts
- [ ] T028 Performance optimization for page load and scrolling
- [ ] T029 [P] Update documentation in README.md and specs/
- [ ] T030 Create code review markdown files for completed tasks
- [ ] T031 Run manual testing and validation per quickstart.md

## Dependencies

- Build foundation (T001-T009) before any other work
- Tests (T010-T013) before implementation (T014-T023)
- T014 blocks T015-T017
- T018-T021 can run in parallel
- T022 blocks T024
- Implementation before polish (T027-T031)

## Parallel Example

```bash
# Launch T010-T013 together:
Task: "Contract test for component validation in tests/contract/test_component_validation.ts"
Task: "Contract test for home page load in tests/contract/test_home_page_load.ts"
Task: "Contract test for scroll to bottom in tests/contract/test_scroll_to_bottom.ts"
Task: "Integration test for code review workflow in tests/integration/test_code_review_flow.ts"
```

## Notes

- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Build success required before any changes
- Commit after each task
- Use MCP tools for documentation validation before any changes
- Ensure CLI-only package installation
- Create code review markdown for each completed task
