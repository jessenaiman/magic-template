# Project Architecture Rules (Non-Obvious Only)

- **Dual-purpose architecture**: This is both a blog AND a comprehensive design system - the architecture serves both content presentation and component demonstration
- **Technology stack isolation**: Components are strictly organized by technology (reactbits, magicui, animate-ui, shadcn) with no cross-stack dependencies - this isolation is architectural, not just organizational
- **Design system navigation**: The navigation.config.ts drives a hierarchical menu system that must precisely match the actual file structure - architectural mismatch causes silent failures
- **Centralized animation system**: All custom animations are defined in app/globals.css with CSS custom properties (`--animate-*`) - components reference these rather than defining animations locally
- **Demo presentation layer**: The PreviewTile component provides a consistent presentation layer across all design system components - this architectural pattern ensures uniform demo experiences
- **MDX processing pipeline**: The build system requires Fumadocs MDX preprocessing (`fumadocs-mdx &&` prefix) - this architectural dependency is critical for proper compilation