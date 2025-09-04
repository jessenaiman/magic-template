# AGENTS.md

Concise guidance for agents—retain only non-obvious, project-specific rules.

- MDX requires `fumadocs-mdx` preprocessing in all scripts (see package.json).
- `transpilePackages: ["geist"]` is set in next.config.ts for Geist font support.
- Design system is split by technology stack: MagicUI, ReactBits, Animate-UI, ShadCN, each in its own directory.
- Design directories (backgrounds, buttons, text, effects) have subfolders for each tech (magicui, reactbits, html-css, tailwind, customize).
- `DesignTabs` component is used to showcase multiple implementations side-by-side.
- `PreviewTile` wrapper ensures consistent demo presentation across components.
- Custom CSS animations use `--animate-*` variables in app/globals.css.
- Some components rely on absolute imports via `@/` (see tsconfig.json).
- Hidden coupling: some design pages depend on both DesignTabs and PreviewTile for layout.
- Silent MDX build failures if `fumadocs-mdx` is omitted.
- Geist font requires explicit transpilation or fonts may not load.
- Not all design system components are exported from a single index—import paths vary.
- Some animation demos require both Framer Motion and custom CSS.
- PreviewTile pattern is required for demo consistency, not just visual style.
- Some directories (e.g., /customize) contain experimental or non-standard implementations.
- Environment setup: pnpm, Next.js 15, Turbopack, and custom MDX pipeline.
- Extensive use of custom hooks and context providers in components/context/.
- Some assets (SVG, icons) are referenced via absolute paths.
- Do not assume all UI libraries are available in every design category.
- Some demo pages expect specific directory structure for auto-discovery.
- Performance: custom CSS animations may impact initial load if overused.