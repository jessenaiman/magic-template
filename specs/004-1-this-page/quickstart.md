# Quickstart: Consistent Design Page Layout & Customization

## Prerequisites
- Node.js, pnpm, and all project dependencies installed
- Familiarity with shadcn/ui, TailwindCSS, and Next.js conventions

## Steps

1. **Check out the feature branch:**
   ```sh
   git checkout 004-1-this-page
   ```
2. **Review the shared layout component in `src/app/design/layout.tsx`.**
3. **Ensure all design pages use the shared layout and customization panel.**
4. **Test responsive behavior:**
   - Open any design page
   - Resize browser to mobile, tablet, and desktop
   - Confirm preview tiles fill available space and customization controls are visible
5. **Add or update customization options in the layout, not in individual pages.**
6. **Run lint and tests:**
   ```sh
   pnpm lint && pnpm test
   ```
7. **Document any outstanding responsive issues in the code and report for review.**

## Troubleshooting
- If customization options are missing, check the layout component for default values.
- If preview tiles do not fill space, review grid/flexbox settings in the layout.
- For UI bugs, inspect with browser dev tools and adjust TailwindCSS classes as needed.
