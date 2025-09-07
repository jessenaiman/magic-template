---
description: 'Next Agent Onboarding & Task Prompt for Magic Template'
mode: chatmode
---

# You must follow all rules in `.github/instructions/` in addition to the instructions below.

## Directory Structure
- app/ - Main application directory for Next.js App Router
- app/layout.tsx - Global layout for the entire app
- app/page.tsx - Landing page
- app/design/ - Design showcase pages
- app/design/layout.tsx - Layout for all design pages, includes PreviewProvider
- app/design/[category]/ - Dynamic routes for component categories
- app/design/[category]/page.tsx - Individual category pages
- components/ - Reusable React components
- components/preview/ - Preview system components
- components/preview/preview-context.tsx - Context for global preview state
- components/preview/preview-grid.tsx - Responsive grid for tiles
- components/preview/preview-tile.tsx - Individual preview tile component
- components/preview/preview-tile-header.tsx - Header with controls for each tile
- components/preview/preview-customization-panel.tsx - Customization controls
- components/ui/ - shadcn/ui components (do not modify)
- components/magicui/ - Magic UI components (do not modify)
- components/animate-ui/ - Animate UI components (do not modify)
- .github/instructions/ - Project-specific rules and guidelines

# Next Agent Onboarding & Task Prompt

## Mandatory Verification & Research

Before making any code or documentation changes, you **must** use the context7 (mcp) tool to fetch and verify the latest official documentation for:
- Next.js (App Router, layouts, routing, server/client components)
- shadcn/ui (component usage, theming, installation)
- Tailwind CSS (utility classes, configuration, best practices)

## Project-Specific Facts (Do Not Assume)

1. **Tailwind 4.1 is installed and does not use a config file.**
   - Do not look for or create `tailwind.config.js`.
2. **shadcn components are installed in `/components/ui`.**
   - Never modify these unless explicitly instructed.
3. **magicui components are installed in `/components/magicui`.**
   - Never modify these unless explicitly instructed.
4. **animate-ui components are installed in `/components/magicui`.**
   - Never modify these unless explicitly instructed.
5. **Design, layout, page, category, and navigation changes:**
   - Only make changes to design, layout, page, category, or navigation files if you have explicit, direct instructions.
   - Always confirm with the user before making any design or layout change, even if it seems obvious or trivial.
6. **How to make changes:**
   - For design: Only edit files in `app/design/` or `components/` if told to, and always check `.github/instructions/` for rules.
   - For page/layout: Only edit `app/page.tsx`, `app/layout.tsx`, or `app/design/layout.tsx` with explicit permission.
   - For category: Only edit or create files in `app/design/[category]/` with clear instructions.
   - For navigation: Only edit navigation components or configs with explicit direction.

## Additional Success Criteria

- Always check for and follow any project-specific instructions in `.github/instructions/` before making changes.
- Never alter `/components/ui`, `/components/magicui`, or `/components/animate-ui` directly unless explicitly told.
- Document any changes in the appropriate README or documentation file if required.
- Use only the latest, verified documentation for all framework/library changes (always use context7/mcp for this).
- Confirm with the user before making any global or structural changes.
- If unsure, ask for clarification before proceeding.
- All code and documentation must be clear, minimal, and follow project conventions.

## Example Task

> You are asked to update the styling of a shadcn button. What do you do?
>
> 1. Use context7 (mcp) to fetch the latest shadcn/ui and Tailwind CSS docs.
> 2. Confirm the button is in `/components/ui` and do **not** edit it unless explicitly told.
> 3. If changes are allowed, follow project and library best practices, and document your work if required.
> 4. If in doubt, confirm with the user before proceeding.

---

*This prompt is self-contained and must be followed by all agents after passing the alignment check.*