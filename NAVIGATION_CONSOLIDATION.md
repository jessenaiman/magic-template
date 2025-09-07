# Modular Navigation System Refactor

## Problem
The codebase contains multiple scattered navigation components, creating confusion and code duplication:

- `nav-main.tsx`
- `top-navbar.tsx`
- `menu-bar.tsx`
- `simple-navbar.tsx`
- `simple-design-nav.tsx`

An initial plan to merge these into a single `consolidated-navbar.tsx` file was found to be suboptimal, as it created a monolithic component that is difficult to maintain.

## Solution: A Modular, Composable Architecture
We will adopt a modular approach, building the navigation system around three core, specialized components located in `components/navigation/`:

- **`unified-navbar.tsx`**: The primary, full-featured top navigation bar. It will serve as the main entry point for top-level navigation.
- **`unified-sidebar.tsx`**: A dedicated component for all sidebar navigation, including collapsible and nested menus.
- **`unified-breadcrumbs.tsx`**: A component for handling breadcrumb navigation, designed to be composed within the `unified-navbar`.

This architecture promotes separation of concerns, improves maintainability, and aligns with DRY principles by allowing composition over monolithic inheritance.

## Migration and Deprecation Plan

1.  **Refactor Core Components**: Modernize `unified-navbar.tsx` and `unified-sidebar.tsx` to address implementation issues (e.g., type-safe icons, hydration, modern React practices).

2.  **Systematic Component Replacement**: All old navigation components will be deprecated and replaced by one of the core unified components.

    | Old Component         | New Replacement         |
    |-----------------------|-------------------------|
    | `top-navbar.tsx`      | `unified-navbar.tsx`    |
    | `menu-bar.tsx`        | `unified-navbar.tsx`    |
    | `simple-navbar.tsx`   | `unified-navbar.tsx` (with props for minimal variant) |
    | `nav-main.tsx`        | `unified-sidebar.tsx`   |
    | `simple-design-nav.tsx` | `unified-sidebar.tsx`   |

3.  **Delete Deprecated Files**: Once a component's usage has been fully migrated, its file will be deleted to clean the codebase.

4.  **Delete `consolidated-navbar.tsx`**: The monolithic `consolidated-navbar.tsx` and its related examples will be removed as they are now obsolete under this new plan.

## Benefits

1.  **Maintainability**: Smaller, focused components are easier to understand, debug, and enhance.
2.  **Reusability & Composition**: Core components can be composed in different ways across the application.
3.  **Clear Separation of Concerns**: Each component has a distinct responsibility (navbar, sidebar, breadcrumbs).
4.  **Reduced Complexity**: Eliminates the need for a complex `variant` prop and conditional logic for rendering different navigation types within one file.
