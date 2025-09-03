# Project Documentation Rules (Non-Obvious Only)

- **Multi-technology design system**: This isn't just a blog - it's a comprehensive design system showcasing ReactBits, MagicUI, Animate-UI, and ShadCN implementations side-by-side
- **Navigation structure**: The navigation.config.ts file defines a hierarchical menu that must match actual page routes - mismatches cause silent navigation failures
- **Component categorization**: Components are organized by both technology stack AND category (backgrounds, buttons, text, effects) - this dual organization is critical for understanding
- **Demo presentation pattern**: All design components follow the PreviewTile wrapper pattern for consistent demo presentation across the design system
- **Animation reference system**: Custom CSS animations are centralized in app/globals.css with `--animate-*` variables - components reference these rather than defining animations locally