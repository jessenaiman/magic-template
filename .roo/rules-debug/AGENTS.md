# Project Debug Rules (Non-Obvious Only)

- **MDX preprocessing**: Build failures often relate to missing `fumadocs-mdx` preprocessing - ensure scripts include `fumadocs-mdx &&` prefix
- **Component stack isolation**: Debug components within their technology stack (reactbits, magicui, etc.) - cross-stack imports cause silent failures
- **Animation debugging**: Custom CSS animations use `--animate-*` variables from `app/globals.css` - check variable definitions when animations fail
- **Design system navigation**: Missing page imports in navigation.config.ts don't throw clear errors - verify all href paths exist
- **PreviewTile wrapper**: Components without PreviewTile wrapper may render but won't show in design system tabs properly