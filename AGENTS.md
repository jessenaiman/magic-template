# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project Architecture

**Non-obvious structure**: This is a Next.js 15 blog with an extensive design system showcasing multiple UI libraries:
- MagicUI components in `components/magicui/` 
- ReactBits components in `components/reactbits/` (200+ animation components)
- Animate-UI components in `components/animate-ui/`
- ShadCN UI components in `components/ui/`

**Design system organization**: Components are organized by technology stack across multiple directories:
- `/design/backgrounds/` - Background animation components
- `/design/buttons/` - Button components  
- `/design/text/` - Text animation components
- `/design/effects/` - Special effects components
- Each category has subdirectories for different implementations (reactbits, magicui, html-css, tailwind, customize)

## Critical Patterns

**Component imports**: Always use absolute imports with `@/` prefix (configured in tsconfig.json paths)
**Styling**: Uses `cn()` utility from `@/lib/utils` for conditional Tailwind classes
**Animation libraries**: Uses both Framer Motion (`motion/react`) and custom CSS animations

## Build & Development

**MDX processing**: Requires `fumadocs-mdx` preprocessing - scripts include `fumadocs-mdx &&` prefix
**Package manager**: Uses pnpm (not npm or yarn) - install with `pnpm install`
**Development**: Run with `pnpm dev` (uses Next.js 15 with Turbopack)

## Gotchas

**DesignTabs component**: Used in design pages to showcase multiple technology implementations side-by-side
**PreviewTile pattern**: Components use PreviewTile wrapper for consistent demo presentation
**Custom animations**: Extensive custom CSS animations defined in `app/globals.css` with `--animate-*` variables