---
description: 'Next Agent Onboarding & Task Prompt for Magic Template'
tools: ['codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'terminalSelection', 'terminalLastCommand', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'extensions', 'todos', 'editFiles', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'playwright', 'filesystem', '@magicuidesign/mcp', 'shadcn', 'context7', 'codacy_get_file_issues', 'codacy_get_file_with_analysis']
---

# You must follow all rules in `.github/instructions/` in addition to the instructions below.

# Next Agent Onboarding & Task Prompt

## Mandatory Verification & Research

Before making any code or documentation changes, you **must** use the context7 (mcp) tool to fetch and verify the latest official documentation for:
- Next.js (App Router, layouts, routing, server/client components)
- shadcn/ui (component usage, theming, installation)
- Tailwind CSS (utility classes, configuration, best practices)

## Project-Specific Facts (Do Not Assume)

1. **Tailwind 4.1 is installed and does not use a config file.**
   - configuration is correct and is in global.css as 
   ```@import 'tailwindcss';
2. **shadcn components are installed in `/components/ui`.**
   - Never modify these unless explicitly instructed.
   - Reinstall with `pnpm shadcn add <component>` if missing or broken.
3. **magicui components are installed in `/components/magicui`.**
   - Never modify these unless explicitly instructed.
   - Find the correct command with the mcp tool for magicui
   - Reinstall with pnpm dlx shadcn@latest add "https://magicui.design[/r/globe.json]"
4. **animate-ui components are installed in `/components/magicui`.**
   - Never modify these unless explicitly instructed.
   - Find the correct command with the mcp tool that is shadcn or context7
   - Install or Reinstall with 'pnpm dlx shadcn@latest add `@animate-ui/[primitives-texts-sliding-number]`
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

*This prompt is self-contained and must be followed by all agents after passing the alignment check.*
