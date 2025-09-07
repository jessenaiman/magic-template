# Project Ask Mode Rules (Non-Obvious Only)

- **Component restrictions**: DO NOT MODIFY `/components/[ui|magicui|animate-ui]`
- **Design system**: Uses shadcn/ui with CSS variables - theme controlled via `components.json`
- **Dynamic category discovery**: Add new design categories by creating directories in `app/design/` - auto-discovered via `lib/category-discovery.ts`
- **Navigation structure**: Each design category must have "Overview" page + implementation-specific pages (e.g., `/design/buttons`, `/design/buttons/tailwind`)
- **Preview system**: Design pages require `DesignPageProvider` and `PreviewProvider` context wrappers
- **Background**: Layout uses `FlickeringGrid` component from magicui for animated background