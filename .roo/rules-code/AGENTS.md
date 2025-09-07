# Project Coding Rules (Non-Obvious Only)

- **Component restrictions**: DO NOT MODIFY `/components/[ui|magicui|animate-ui]` - these are exact copies of open source libraries with legal implications
- **Dynamic category discovery**: Add new design categories by creating directories in `app/design/` - they auto-discover via `lib/category-discovery.ts`
- **Navigation structure**: Each design category must have "Overview" page + implementation-specific pages (e.g., `/design/buttons`, `/design/buttons/tailwind`)
- **Test location**: Unit tests go in `tests/unit/` directory (not standard `__tests__/`)
- **Custom utilities**: 
  - GitHub stars fetching may cause test failures if API unavailable
- **Preview system**: Design pages require `DesignPageProvider` and `PreviewProvider` context wrappers
- **Background component**: Layout uses `FlickeringGrid` from magicui - don't modify animation parameters