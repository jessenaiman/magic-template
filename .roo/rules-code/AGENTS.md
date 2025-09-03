# Project Coding Rules (Non-Obvious Only)

- **Component organization**: Components are organized by technology stack (reactbits, magicui, animate-ui, shadcn) - don't mix imports across stacks
- **PreviewTile pattern**: All design components must use PreviewTile wrapper from `@/components/design/preview-tile` for consistent demo presentation
- **Animation imports**: Use `motion/react` for Framer Motion, not the deprecated `framer-motion` package
- **DesignTabs usage**: Design pages use DesignTabs component with technology-specific child components (reactbits, html-css, tailwind, magicui, shadcn, customize)
- **Custom CSS variables**: Extensive custom animations defined in `app/globals.css` with `--animate-*` variables - reference these instead of hardcoding animations
- **Path aliases**: Always use `@/` prefix for imports (configured in tsconfig.json) - never use relative paths beyond one level
- **Styling utility**: Use `cn()` from `@/lib/utils` for conditional Tailwind classes instead of manual string concatenation