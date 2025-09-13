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
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: code review, component validation, fixes
   → Integration: lazy loading, transitions, error handling
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
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

## Phase 3.1: Setup

- [ ] T001 Validate project structure using MCP filesystem tools in /home/adam/Dev/magic-template
- [ ] T002 [P] Install/update Next.js, MagicUI, Shadcn, Animate-UI, ReactBits via CLI
- [ ] T003 [P] Configure linting and formatting tools (ESLint, Prettier)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

### CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation

- [ ] T004 [P] Contract test for component validation in tests/contract/test_component_validation.ts
- [ ] T005 [P] Contract test for home page load in tests/contract/test_home_page_load.ts
- [ ] T006 [P] Contract test for scroll to bottom in tests/contract/test_scroll_to_bottom.ts
- [ ] T007 [P] Integration test for code review workflow in tests/integration/test_code_review_flow.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [ ] T008 Review and fix file naming and placement in src/components/
- [ ] T009 Remove code duplications across component libraries
- [ ] T010 Fix bad practices in src/app/page.tsx and components
- [ ] T011 Address architecture violations in project structure
- [ ] T012 [P] Validate MagicUI components using MCP tools in src/components/magicui/
- [ ] T013 [P] Validate Shadcn components using MCP tools in src/components/ui/
- [ ] T014 [P] Validate Animate-UI components using MCP tools in src/components/animate-ui/
- [ ] T015 [P] Validate ReactBits components using MCP tools in src/components/[UpperCase].tsx
- [ ] T016 Implement lazy loading for components using next/dynamic
- [ ] T017 Replace custom transitions with Next.js transitions in src/app/page.tsx

## Phase 3.4: Integration

- [ ] T018 Connect lazy loading to page rendering in src/app/page.tsx
- [ ] T019 Implement error handling for component failures
- [ ] T020 Test component loading and memory usage

## Phase 3.5: Polish

- [ ] T021 [P] Unit tests for component validation in tests/unit/test_component_validation.ts
- [ ] T022 Performance optimization for page load and scrolling
- [ ] T023 [P] Update documentation in README.md and specs/
- [ ] T024 Create code review markdown files for completed tasks
- [ ] T025 Run manual testing and validation per quickstart.md

## Dependencies

- Tests (T004-T007) before implementation (T008-T017)
- T008 blocks T009-T011
- T012-T015 can run in parallel
- T016 blocks T018
- Implementation before polish (T021-T025)

## Parallel Example

```bash
# Launch T004-T007 together:
Task: "Contract test for component validation in tests/contract/test_component_validation.ts"
Task: "Contract test for home page load in tests/contract/test_home_page_load.ts"
Task: "Contract test for scroll to bottom in tests/contract/test_scroll_to_bottom.ts"
Task: "Integration test for code review workflow in tests/integration/test_code_review_flow.ts"
```

## Notes

- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Use MCP tools for documentation validation before any changes
- Ensure CLI-only package installation
- Create code review markdown for each completed task
