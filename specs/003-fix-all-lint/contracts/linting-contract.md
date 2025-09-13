# Linting Process Contract

## Overview
This contract defines the process for fixing lint errors in the codebase.

## Process Steps
1. Run ESLint on the project
2. Identify errors outside excluded directories
3. Fix errors methodically, one file at a time
4. Verify no new errors introduced
5. Commit changes

## Excluded Directories
- src/components/ui
- src/components/magicui
- src/components/animate-ui

## Error Categories
- TypeScript errors (@typescript-eslint/*)
- React errors (react/*)
- Accessibility errors (jsx-a11y/*)
- Code style errors

## Success Criteria
- Zero lint errors in non-excluded directories
- No functionality broken
- Code remains readable and maintainable
