# Category-Level Customization Architecture

This document describes the architecture for implementing category-level customization that can be applied to all components within a specific design category.

## Overview

The system allows each design category (backgrounds, responsive-design, etc.) to have its own set of global customization controls that apply to all components within that category. This follows the KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself) principles.

## Architecture Components

### 1. DesignPageContext Extensions

The `DesignPageContext` has been extended to support category-specific customization:

```typescript
interface DesignPageContextType {
  // ... existing fields
  backgroundCustomization: Record<string, any>;
  setBackgroundCustomization: (customization: Record<string, any>) => void;
  updateBackgroundCustomization: (patch: Record<string, any>) => void;
}
```

### 2. Category-Specific Customization Panels

Each category can have its own customization panel component:

- `BackgroundCustomizationPanel` - For background effects and colors
- Future: `ResponsiveDesignCustomizationPanel` - For screen sizes and devices
- Future: `AnimationCustomizationPanel` - For timing and easing

### 3. Specialized PreviewTile Components

Category-specific PreviewTile components that automatically apply category-level customization:

- `BackgroundPreviewTile` - Extends PreviewTile with background customization
- Future: `ResponsivePreviewTile` - Would apply responsive design settings
- Future: `AnimationPreviewTile` - Would apply animation settings

## How to Add a New Category

### Step 1: Extend DesignPageContext

Add new customization state and methods for your category:

```typescript
// In components/design-page-context.tsx
interface DesignPageContextType {
  // ... existing fields
  responsiveCustomization: Record<string, any>;
  setResponsiveCustomization: (customization: Record<string, any>) => void;
  updateResponsiveCustomization: (patch: Record<string, any>) => void;
}
```

### Step 2: Create Category Customization Panel

Create a component similar to `BackgroundCustomizationPanel`:

```typescript
// components/responsive-customization-panel.tsx
export function ResponsiveCustomizationPanel() {
  const { responsiveCustomization, updateResponsiveCustomization } = useDesignPage();
  // ... implementation for responsive design controls
}
```

### Step 3: Update Category Layout

Add the customization panel to your category layout:

```typescript
// app/design/responsive-design/layout.tsx
export default function ResponsiveDesignLayout({ children }: LayoutProps) {
  // ... existing code
  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar tabs={tabs} />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <ResponsiveCustomizationPanel />
          {children}
        </div>
      </main>
    </div>
  );
}
```

### Step 4: Create Specialized PreviewTile (Optional)

If needed, create a specialized PreviewTile for your category:

```typescript
// components/responsive-preview-tile.tsx
export function ResponsivePreviewTile(props: PreviewTileProps) {
  const { responsiveCustomization } = useDesignPage();
  const mergedCustomization = { ...props.initialCustomization, ...responsiveCustomization };
  return <PreviewTile {...props} initialCustomization={mergedCustomization} />;
}
```

## Benefits of This Architecture

1. **KISS**: Each category has clear, focused customization controls
2. **DRY**: Common functionality is shared through base components
3. **Extensible**: Easy to add new categories without modifying existing code
4. **Consistent**: All components within a category behave uniformly
5. **Modular**: Categories can be developed and tested independently

## Example: Backgrounds Implementation

The backgrounds category demonstrates this pattern with:

- **Global Controls**: Color pickers, opacity, intensity, speed sliders
- **Automatic Application**: All background components receive these settings
- **Layer Merging**: Category settings merge with component-specific settings

## Future Categories

This architecture can easily support:

- **Responsive Design**: Screen sizes, breakpoints, device emulation
- **Animations**: Duration, easing, delay, playback controls  
- **Typography**: Font families, sizes, spacing, colors
- **Effects**: Blur, shadows, gradients, filters

Each category follows the same pattern but with its own specialized controls and behavior.