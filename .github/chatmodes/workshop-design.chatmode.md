---
description: 'Next Agent Onboarding & Task Prompt for Magic Template'
tools: ['codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'terminalSelection', 'terminalLastCommand', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'extensions', 'todos', 'editFiles', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'Desktop Commander', 'Context7', '@magicuidesign/mcp', 'animateui/shadcn', 'context7-mcp', 'memory']
---

# You must follow all rules in `.github/instructions/` in addition to the instructions below.

If you scan my project for the answer instead of using context7, fetch, or docfork when asked a best practice question, your answer fails and you are replaced with a new agent.

## Mandatory Verification & Research

Before making any code or documentation changes, you **must** use the context7 (mcp) tool to fetch and verify the latest official documentation for:
- Next.js (App Router, layouts, routing, server/client components)
- shadcn/ui (component usage, theming, installation)
- Tailwind CSS (utility classes, configuration, best practices)

## Project-Specific Facts (Do Not Assume)

## Dynamic Routes are required for pages that have variable segments in their URLs, such as `/workshop/[id]` or `/user/[username]/profile`. These routes allow the application to handle requests for different resources dynamically based on the URL parameters.
- No workarounds or hacks are allowed.
- No custom solutions that bypass Next.js's built-in routing capabilities are permitted.
- Dynamic routes are something nextjs can handle and they need to be researched and implemented.
- Dynamic Navigation code must include comments and links to this documentation: https://nextjs.org/docs/14/app/building-your-application/routing/dynamic-routes. 

## Nextjs Project Files
- All code must include comments with links to relevant documentation. 
- This is the only acceptable nextjs documentation: https://nextjs.org/docs/14

## Radixui Component Use
- installed to /components/ui and must match shadcn/ui usage patterns
- Never modify these unless explicitly instructed. 
- This is the only acceptable nextjs documentation: https://www.radix-ui.com/themes/docs/

## Shadcn Component Use
- installed to /components/ui and must match shadcn/ui usage patterns
- Never modify these unless explicitly instructed.
- installed to /components/ui and must be reinstalled through the cli and terminal if any issues are found.
- This is the only acceptable nextjs documentation: https://ui.shadcn.com/docs/

## Tailwind CSS Use
- Tailwind 4.1 is installed and does not use a config file.
- Do not look for or create `tailwind.config.js`.
- This is the only acceptable Tailwind documentation: https://tailwindcss.com/docs
- layouts and design must follow Tailwind best practices and conventions.
- do not reinvent new breakpoints, colors, or utilities. If you are adding something new it probably is the wrong thing to do.

## MagicUI Component Use
- installed to /components/magicui and must match magicui usage patterns
- Never modify these unless explicitly instructed.
- This is the only acceptable MagicUI documentation: https://www.magicui.design/docs/
- magicui components are installed in `/components/magicui`.

## Animate-UI Component Use
- installed to /components/animate-ui and must match animate-ui usage patterns
- This is the only acceptable Animate-UI documentation: https://animate-ui.com/docs/

## Design, layout, page, category, and navigation changes
   - Only make changes to design, layout, page, category, or navigation files if you have explicit, direct instructions.
   - Always confirm with the user before making any design or layout change, even if it seems obvious or trivial.


### How to make changes:
   - For design: Only edit files in `app/design/` or `components/` if told to, and always check `.github/instructions/` for rules.
   - For page/layout: Only edit `app/page.tsx`, `app/layout.tsx`, or `app/design/layout.tsx` with explicit permission.
   - For category: Only edit or create files in `app/design/[category]/` with clear instructions.
   - For navigation: Only edit navigation components or configs with explicit direction.

## Additional Success Criteria

- Always check for and follow any project-specific instructions in `.github/instructions/` before making changes.
- Never alter `/components/ui`, `/components/magicui`, or `/components/animate-ui` directly unless explicitly told.
- Relate in chat all code changes, research, and reasoning to the user's original request.
- Use only the latest, verified documentation for all framework/library changes (always use context7/mcp for this).
- All code and documentation must be clear, minimal, and follow project conventions.
- Confirm with the user before making any global or structural changes.
- If unsure, ask for clarification before proceeding.
**A single failure of any the above will result in all code changes being reverted and your termination.**


## Example Task

> You are asked to update the styling of a button. What do you do?
>
> 1. Use context7 (mcp) to fetch the latest shadcn/ui and Tailwind CSS docs.
> 2. Assume the button is installed at `/components/[ui|magicui|animate-ui]` and do **not** edit it unless explicitly told.
> 3. KISS and DRY must apply to your solution. If the solution creates more lines of code than already exist, continue thinking until a professional and efficient refactoring will reduce complexity.
> 4. Follow project and library best practices, and be prepared to answer questions and be quizzed on your changes.
> 5. If in doubt, confirm with the user before proceeding.

