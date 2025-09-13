# Tasks: Home Page Code Review and Optimization

**Input**: Design documents from `/specs/001-## Dependencies

- Build foundation (T001-T009) before any other work
- Tests (T010-T013) before implementation (T014-T020)

## Parallel Execution Examples

### Phase 3.1: Build Foundation (Can run in parallel)

```bash
# Terminal 1: Build verification
task T001 && task T002 && task T003

# Terminal 2: Asset and route fixes  
task T004 && task T005

# Terminal 3: Server and build testing
task T006 && task T007

# Parallel: Package installation and linting
task T008 & task T009 &
```

### Phase 3.2: Tests First (All can run in parallel)

```bash
# All contract tests can run simultaneously
task T010 & task T011 & task T012 & task T013 &
```

### Phase 3.3: Core Implementation (Sequential due to shared files)

```bash
# Sequential: Component review and fixes
task T014 && task T015 && task T016 && task T017

# Parallel: ReactBits validation (different components)
task T018

# Sequential: Page modifications
task T019 && task T020
```

### Phase 3.5: Polish (Some parallel)

```bash
# Parallel: Unit tests and docs
task T024 & task T026 &

# Sequential: Performance and manual testing
task T025 && task T027 && task T028
```

## Task Validation Checklist

- [ ] **Build Success**: T001-T009 complete before any changes?
- [ ] **Test Contracts**: T010-T013 cover all contracts/ files?
- [ ] **Component Entities**: T018 validates all component libraries?
- [ ] **Integration Tests**: T011-T012 cover quickstart.md scenarios?
- [ ] **Dependencies**: All prerequisites respected?
- [ ] **File Boundaries**: Only custom components modified (not ui/, magicui/, animate-ui/, [UpperCase].tsx)?

## Success Criteria

✅ **Build works** before any changes  
✅ **All contracts have tests** (component-validation, testing-contract)  
✅ **All entities validated** (MagicUI, Shadcn, Animate-UI, ReactBits, Page, Tests)  
✅ **All requirements implemented** (lazy loading, transitions, error handling)  
✅ **Third-party boundaries respected** (no modifications to locked directories)

## Task Validation Checklist

- [ ] **Build Success**: T001-T009 complete before any changes?
- [ ] **Test Contracts**: T010-T013 cover all contracts/ files?
- [ ] **Component Entities**: T018 validates all component libraries?
- [ ] **Integration Tests**: T011-T012 cover quickstart.md scenarios?
- [ ] **Dependencies**: All prerequisites respected?
- [ ] **File Boundaries**: Only custom components modified (not ui/, magicui/, animate-ui/, [UpperCase].tsx)?

## Success Criteria

✅ **Build works** before any changes  
✅ **All contracts have tests** (component-validation, testing-contract)  
✅ **All entities validated** (MagicUI, Shadcn, Animate-UI, ReactBits, Page, Tests)  
✅ **All requirements implemented** (lazy loading, transitions, error handling)  
✅ **Third-party boundaries respected** (no modifications to locked directories)-page-code-review/`
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
   → Core: component validation, code review, fixes
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

- [ ] T014 Review and fix file naming and placement in src/components/ (ONLY custom components: lowercase .tsx files, excluding ui/, magicui/, animate-ui/, [UpperCase].tsx)
- [ ] T015 Remove code duplications in custom components only (src/components/ lowercase .tsx files only)
- [ ] T016 Fix bad practices in src/app/page.tsx and custom components (src/components/ lowercase .tsx files only)
- [ ] T017 Address architecture violations in project structure (excluding LOCKED directories: ui/, magicui/, animate-ui/, [UpperCase].tsx files)
- [ ] T018 [P] Validate ReactBits components using MCP tools (READ ONLY: src/components/[UpperCase].tsx files - NO modifications allowed)
- [ ] T019 Implement lazy loading for components using next/dynamic
- [ ] T020 Replace custom transitions with Next.js transitions in src/app/page.tsx

## Phase 3.4: Integration

- [ ] T021 Connect lazy loading to page rendering in src/app/page.tsx
- [ ] T022 Implement error handling for component failures
- [ ] T023 Test component loading and memory usage

## Phase 3.5: Polish

- [ ] T024 [P] Unit tests for component validation in tests/unit/test_component_validation.ts
- [ ] T025 Performance optimization for page load and scrolling
- [ ] T026 [P] Update documentation in README.md and specs/
- [ ] T027 Create code review markdown files for completed tasks
- [ ] T028 Run manual testing and validation per quickstart.md

## Dependencies

- Build foundation (T001-T009) before any other work
- Tests (T010-T013) before implementation (T014-T020)
