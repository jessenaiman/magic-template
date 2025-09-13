# Tasks: Fix All Lint Errors

**Input**: Design documents from `/specs/003-fix-all-lint/`  
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Project Structure (Actual)

This is a **single Next.js project** with the following structure:

- **Source code**: `src/` directory
- **Tests**: `tests/` directory at repository root  
- **Components**: `src/components/`
- **Pages**: `src/app/` (App Router)
- **Stories**: `src/stories/` (Storybook)
- **Types**: `types/` directory
- **Build tools**: Next.js, TypeScript, ESLint, Vitest

## Execution Flow (main)

```text
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
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
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Phase 3.1: Setup

- [ ] T001 Configure ESLint and Next.js linting tools per research.md
- [ ] T002 [P] Run initial lint check to establish baseline error count
- [ ] T003 [P] Ensure shadcn components are properly configured in components.json

## ⚠️ CRITICAL WARNING: MCP Tool Usage Required

**MEMORY CONSTRAINTS**: Due to limited available memory (51% used), you MUST use MCP tools for this task to succeed. Without MCP tools, you will run out of context and fail to complete the lint fixes.

**Required MCP Tools**:
- `mcp_filesystem_read_text_file` - Read files for error analysis
- `mcp_filesystem_search_files` - Find files with patterns
- `mcp_context7_get-library-docs` - Get TypeScript/ESLint documentation
- `mcp_magicuidesig_getUIComponents` - Verify component installations

**Failure to use MCP tools will result in incomplete fixes and wasted effort.**

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### Fix unused variables/imports (@typescript-eslint/no-unused-vars)

- [ ] T007 [P] Fix unused variables in src/app/design/effects/html-css/page.tsx
- [ ] T008 [P] Fix unused variables in src/app/design/effects/layout.tsx
- [ ] T009 [P] Fix unused variables in src/app/design/layout.tsx
- [ ] T010 [P] Fix unused variables in src/app/design/responsive-design/layout.tsx
- [ ] T011 [P] Fix unused variables in src/app/design/text/html-css/page.tsx
- [ ] T012 [P] Fix unused variables in src/app/design/text/layout.tsx
- [ ] T013 [P] Fix unused variables in src/app/design/text/shadcn/page.tsx
- [ ] T014 [P] Fix unused variables in src/app/design/text/tailwind/page.tsx
- [ ] T015 [P] Fix unused variables in src/app/design/transitions/layout.tsx
- [ ] T016 [P] Fix unused variables in src/app/design/transitions/magicui/page.tsx
- [ ] T017 [P] Fix unused variables in src/app/templates/layout.tsx
- [ ] T018 [P] Fix unused variables in src/app/test-report/page.tsx
- [ ] T019 [P] Fix unused variables in src/components/background-customization-panel.tsx
- [ ] T020 [P] Fix unused variables in src/components/base-customizer.tsx
- [ ] T021 [P] Fix unused variables in src/components/customizable-management-bar.tsx
- [ ] T022 [P] Fix unused variables in src/components/design-page-hero.tsx
- [ ] T023 [P] Fix unused variables in src/components/minimal-preview-tile.tsx
- [ ] T024 [P] Fix unused variables in src/components/navigation/unified-navbar.tsx
- [ ] T025 [P] Fix unused variables in src/components/notification-provider.tsx
- [ ] T026 [P] Fix unused variables in src/components/preview/preview-input.tsx
- [ ] T027 [P] Fix unused variables in src/components/preview/preview-tile.tsx
- [ ] T028 [P] Fix unused variables in src/components/preview/preview-surface.tsx
- [ ] T029 [P] Fix unused variables in src/components/read-more-section.tsx

### Fix unescaped entities (react/no-unescaped-entities)

- [ ] T030 [P] Fix unescaped entities in src/app/design/effects/page.tsx
- [ ] T031 [P] Fix unescaped entities in src/app/design/text/shadcn/page.tsx
- [ ] T032 [P] Fix unescaped entities in src/app/design/text/tailwind/page.tsx
- [ ] T033 [P] Fix unescaped entities in src/app/not-found.tsx
- [ ] T034 [P] Fix unescaped entities in src/app/templates/contact/page.tsx
- [ ] T035 [P] Fix unescaped entities in src/app/templates/login/page.tsx
- [ ] T036 [P] Fix unescaped entities in src/app/test-report/navigation-results.tsx
- [ ] T037 [P] Fix unescaped entities in src/stories/Page.tsx

### Fix explicit any types (@typescript-eslint/no-explicit-any)

- [ ] T038 [P] Fix explicit any in src/app/design/transitions/html-css/page.tsx
- [ ] T039 [P] Fix explicit any in src/app/design/transitions/magicui/page.tsx
- [ ] T040 [P] Fix explicit any in src/app/design/transitions/nextjs/page.tsx
- [ ] T041 [P] Fix explicit any in src/app/design/transitions/tailwind/page.tsx
- [ ] T042 [P] Fix explicit any in src/components/background-customization-panel.tsx
- [ ] T043 [P] Fix explicit any in src/components/design-page-context.tsx
- [ ] T044 [P] Fix explicit any in src/components/landing/AnimatedSurface.tsx
- [ ] T045 [P] Fix explicit any in src/components/minimal-preview-tile.tsx
- [ ] T046 [P] Fix explicit any in src/components/preview/preview-context.tsx
- [ ] T047 [P] Fix explicit any in src/components/preview/preview-customization-panel.tsx
- [ ] T048 [P] Fix explicit any in src/components/preview/preview-tile.tsx
- [ ] T049 [P] Fix explicit any in src/components/preview/template-customization-panel.tsx
- [ ] T050 [P] Fix explicit any in src/components/preview/template-preview.tsx
- [ ] T051 [P] Fix explicit any in src/components/templates/template-preview.tsx

### Fix other error types

- [ ] T052 [P] Fix empty object type in src/components/background-preview-tile.tsx
- [ ] T053 [P] Fix img elements in src/components/feature-cards.tsx
- [ ] T054 [P] Fix img elements in src/components/hero-landing.tsx
- [ ] T055 [P] Fix img elements in src/components/hero.tsx
- [ ] T056 [P] Fix img elements in src/components/landing/HeroLanding.tsx
- [ ] T057 [P] Fix React hooks rules in src/components/preview/preview-select.tsx
- [ ] T058 [P] Fix React hooks rules in src/components/preview/preview-slider.tsx
- [ ] T059 [P] Fix React hooks rules in src/components/preview/preview-switch.tsx
- [ ] T060 [P] Fix React hooks exhaustive deps in src/components/preview/preview-context.tsx
- [ ] T061 [P] Fix React hooks exhaustive deps in src/components/preview/preview-customization-panel.tsx

## Phase 3.4: Integration

- [ ] T062 Verify no new lint errors introduced after fixes
- [ ] T063 Update ESLint configuration if needed for better rules
- [ ] T064 Run Codacy analysis to check for additional issues
- [ ] T065 Reinstall shadcn components if Codacy reports issues

## Phase 3.5: Polish

- [ ] T066 [P] Run final lint check to confirm zero errors
- [ ] T067 [P] Update documentation with linting best practices
- [ ] T068 [P] Create lint error tracking script for future monitoring
- [ ] T069 Performance validation: Ensure fixes don't impact build time
- [ ] T070 Final commit and push to GitHub for review

## Dependencies

- Tests (T004-T006) before implementation (T007-T061)
- All core fixes (T007-T061) before integration (T062-T065)
- Integration (T062-T065) before polish (T066-T070)
- Configuration fixes (T063) may unblock multiple file fixes

## Parallel Example

```bash
# Launch T007-T029 together (unused variables fixes):
Task: "Fix unused variables in src/app/design/effects/html-css/page.tsx"
Task: "Fix unused variables in src/app/design/effects/layout.tsx"
Task: "Fix unused variables in src/app/design/layout.tsx"
... (and so on for all unused variable fixes)
```

```bash
# Launch T030-T037 together (unescaped entities fixes):
Task: "Fix unescaped entities in src/app/design/effects/page.tsx"
Task: "Fix unescaped entities in src/app/design/text/shadcn/page.tsx"
... (and so on for all unescaped entity fixes)
```

## Notes

- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each logical group of fixes
- Check lint count after each change - if errors increase, revert
- Exclude directories: src/components/ui, src/components/magicui, src/components/animate-ui
- Use shadcn CLI from mcp tools for component reinstallation
- Push to GitHub after major changes for review

## Task Generation Rules

### Applied during main() execution

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist

### GATE: Checked by main() before returning

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task
