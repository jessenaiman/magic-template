# Project Structure Standards

**Document Version**: 1.0
**Created**: September 12, 2025
**Last Updated**: September 12, 2025
**Applies To**: Next.js projects with MagicUI, Shadcn, Animate-UI, ReactBits

## Overview

This document defines the standard project structure and organization patterns for Next.js applications using the specified UI libraries. These standards ensure consistency, maintainability, and proper separation of concerns.

## Directory Structure Standards

### Root Level Structure

```bash
/home/adam/Dev/magic-template/
├── .vscode/                    # VS Code configuration
│   ├── mcp.json               # MCP server configuration
│   └── settings.json          # Workspace settings
├── specs/                     # Feature specifications and planning
│   └── [feature-name]/        # Feature-specific documentation
├── src/
│   ├── app/                   # Next.js App Router
│   ├── components/            # Reusable components
│   └── lib/                   # Utility libraries
├── types/                     # TypeScript type definitions
├── public/                    # Static assets
├── assets/                    # Project-specific assets
└── [config files]             # Package.json, tsconfig, etc.
```

### Source Directory Structure (`src/`)

```bash
src/
├── app/                       # Next.js App Router (required)
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   └── [route]/              # Route-specific pages
├── components/                # Component organization
│   ├── ui/                   # Shadcn UI components
│   ├── magicui/              # MagicUI components
│   ├── animate-ui/           # Animation components
│   ├── [UpperCase].tsx       # ReactBits components
│   └── [feature]/            # Feature-specific components
├── lib/                       # Utility functions and configurations
│   ├── utils.ts              # General utilities
│   └── [domain].ts           # Domain-specific utilities
├── hooks/                     # Custom React hooks
├── config/                    # Configuration files
└── types/                     # Local type definitions
```

## Component Organization Standards

### Third-Party Component Restrictions

**IMPORTANT**: The following component directories are LOCKED and READ-ONLY:
- `src/components/ui/` (Shadcn UI components)
- `src/components/magicui/` (MagicUI components)  
- `src/components/animate-ui/` (Animate-UI components)
- ReactBits components (UpperCase files in `src/components/`)

**Policy**:
- ❌ NO manual editing, code review, or linting of these components
- ❌ NO custom modifications or patches
- ✅ ONLY reinstall through official CLI tools
- ✅ ONLY use as installed - modify usage, not the components themselves

**Rationale**: These components come with their own standards and are maintained by their respective libraries. Custom modifications break compatibility and update paths.

### Shadcn UI Components (`src/components/ui/`)

- **Location**: `src/components/ui/` **[LOCKED - READ ONLY]**
- **Naming**: Lowercase with hyphens (e.g., `button.tsx`, `card.tsx`)
- **Installation**: CLI only - `npx shadcn@latest add [component]`
- **Customization**: Modify only through CLI reinstall with `--overwrite`
- **Validation**: Use `mcp_shadcn_list_items_in_registries` before use
- **Linting**: DISABLED - Do not lint these files

### MagicUI Components (`src/components/magicui/`)

- **Location**: `src/components/magicui/` **[LOCKED - READ ONLY]**
- **Naming**: Follow MagicUI naming conventions
- **Installation**: CLI only through MagicUI documentation
- **Validation**: Use `mcp_magicuidesig_getUIComponents` before use
- **Dependencies**: Relies on Shadcn UI components
- **Linting**: DISABLED - Do not lint these files

### Animate-UI Components (`src/components/animate-ui/`)

- **Location**: `src/components/animate-ui/` **[LOCKED - READ ONLY]**
- **Naming**: Follow Animate-UI naming conventions
- **Integration**: Works with Radix UI and Shadcn
- **Validation**: Check Animate-UI documentation before use
- **Linting**: DISABLED - Do not lint these files

### ReactBits Components (`src/components/[UpperCase].tsx`)

- **Location**: `src/components/` **[LOCKED - READ ONLY]**
- **Naming**: PascalCase filenames (e.g., `Sparkles.tsx`, `LiquidEther.tsx`)
- **Organization**: Individual files in components root
- **Validation**: Check ReactBits documentation before use
- **Linting**: DISABLED - Do not lint these files

## File Naming Conventions

### Components

- **React Components**: PascalCase (e.g., `Button.tsx`, `UserCard.tsx`)
- **Utility Components**: camelCase (e.g., `buttonVariants.ts`)
- **Index Files**: `index.ts` for barrel exports

### Pages and Routes

- **App Router**: Follow Next.js conventions
- **Dynamic Routes**: `[slug].tsx`, `[...catchAll].tsx`
- **API Routes**: `route.ts` in `app/api/` directory

### Utilities and Libraries

- **Utility Files**: camelCase (e.g., `dateUtils.ts`, `apiClient.ts`)
- **Configuration**: camelCase (e.g., `databaseConfig.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## Import and Export Standards

### Barrel Exports
```typescript
// src/components/ui/index.ts
export { Button } from './button'
export { Card } from './card'
export { Input } from './input'
```

### Import Organization
```typescript
// 1. React imports
import React from 'react'

// 2. Third-party libraries
import { motion } from 'framer-motion'

// 3. Local components (barrel imports preferred)
import { Button, Card } from '@/components/ui'

// 4. Local utilities
import { cn } from '@/lib/utils'

// 5. Types
import type { User } from '@/types/user'
```

## Code Standards Enforcement

### Pre-Change Validation
1. **MCP Tool Validation**: Use appropriate MCP tools to validate documentation
2. **Filesystem Review**: Use `mcp_filesystem_*` tools to review current structure
3. **Memory Check**: Use `mcp_memory_*` tools to check existing standards

### Post-Change Verification
1. **Structure Validation**: Confirm files are in correct locations
2. **Import Resolution**: Ensure all imports resolve correctly
3. **Type Checking**: Verify TypeScript compilation
4. **Linting**: Run ESLint and other code quality tools

## Library Usage Standards

### Next.js
- **Version**: Latest stable release
- **Router**: App Router (preferred)
- **Styling**: Tailwind CSS with proper configuration
- **Validation**: Check Next.js documentation before API usage

### UI Libraries Integration
- **Shadcn**: Base component library
- **MagicUI**: Enhanced components built on Shadcn
- **Animate-UI**: Animation utilities
- **ReactBits**: Specialized components
- **Dependency Order**: Shadcn → MagicUI → Animate-UI/ReactBits

## Testing Structure Standards

### Test File Locations
```
src/
├── components/
│   ├── Button.tsx
│   ├── Button.test.tsx         # Component tests
│   └── __tests__/              # Additional test files
└── lib/
    ├── utils.ts
    └── utils.test.ts           # Utility tests
```

### Playwright E2E Tests
- **Location**: `tests/` or `e2e/` directory
- **Naming**: `*.spec.ts` for E2E tests
- **Focus**: User journey testing, not unit testing

## Configuration Standards

### TypeScript Configuration
- **File**: `tsconfig.json` in root
- **Paths**: Configure `@/*` for `src/` directory
- **Strict Mode**: Enabled for type safety

### Tailwind Configuration
- **File**: `tailwind.config.js` or `tailwind.config.ts`
- **Content Paths**: Include all component directories
- **Theme Extensions**: Consistent with design system

## Validation Checklist

### Before Making Changes
- [ ] MCP tools validated and functional
- [ ] Current project structure reviewed
- [ ] Code standards checked in memory system
- [ ] Documentation reviewed for libraries being used

### After Making Changes
- [ ] Files in correct locations per standards
- [ ] Imports resolve correctly
- [ ] TypeScript compilation successful
- [ ] ESLint passes (excluding locked third-party component directories)
- [ ] Tests still pass (if applicable)

### Third-Party Component Validation
- [ ] NO modifications to `src/components/ui/`, `src/components/magicui/`, `src/components/animate-ui/`
- [ ] NO modifications to ReactBits components (UpperCase files in `src/components/`)
- [ ] NO linting of third-party component directories
- [ ] ONLY reinstall through official CLI tools when needed

## Related Documents

- `specs/GITHUB-INSTRUCTIONS.md` - Tool usage and process documentation
- `memory-system/` - Code standards storage and retrieval
- `.vscode/mcp.json` - MCP server configuration
