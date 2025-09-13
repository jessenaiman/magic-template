# Quickstart: Fix All Lint Errors

## Prerequisites

- Node.js 18+
- pnpm installed
- Project dependencies installed (`pnpm install`)

## Running Linting

```bash
# Run ESLint on the entire project
pnpm lint

# Run on specific file
npx eslint src/app/design/backgrounds/tailwind/page.tsx

# Run with fix (auto-fix what can be fixed)
npx eslint --fix src/
```

## Common Error Patterns and Fixes

### 1. Unused Variables/Imports

**Error**: `@typescript-eslint/no-unused-vars`
**Fix**: Remove unused imports and variables, or prefix with `_` if needed for interfaces

### 2. Explicit Any Types

**Error**: `@typescript-eslint/no-explicit-any`
**Fix**: Replace `any` with specific types or `unknown`

### 3. Unescaped Entities in JSX

**Error**: `react/no-unescaped-entities`
**Fix**: Replace `'` with `&apos;` or `'` with `&quot;`

### 4. Incorrect Children Props

**Error**: `react/no-children-prop`
**Fix**: Pass children as nested elements instead of props

### 5. ARIA Attribute Issues

**Error**: `jsx-a11y/role-supports-aria-props`
**Fix**: Use correct ARIA attributes for the role (e.g., `aria-checked` for `role="switch"`)

## Workflow

1. Run `pnpm lint` to see current errors
2. Pick one file with errors
3. Fix all errors in that file
4. Run `pnpm lint` again to verify
5. If errors decreased or stayed same, commit changes
6. If errors increased, revert and try different approach
7. Repeat for next file

## Excluded Directories

Do not fix errors in:

- `src/components/ui`
- `src/components/magicui`
- `src/components/animate-ui`

These are third-party components that should be updated via package manager if needed.

## Validation

- All fixes should maintain functionality
- Code should remain readable
- No new runtime errors introduced
- CI/CD should pass after fixes
