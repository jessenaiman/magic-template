# Preview Tile Project Design

## Architecture Overview

The preview customization system is built around several interconnected components that work together to provide both global (page-level) and local (tile-level) customization. This document outlines the architecture, components, and data flow.

## Core Components

### 1. PreviewContext (`preview-context.tsx`)
- Provides global state management for customization settings
- Exposes key functions: `setPlaying`, `setDisplayText`, `updateCustomization`, and `reset`
- Maintains the `state` object with `playing`, `displayText`, and `customization` properties
- All preview tiles can access this context to respond to global changes

### 2. PreviewSurface (`preview-surface.tsx`)
- Container component that wraps all preview tiles on a page
- Creates a PreviewProvider context for all child components
- Renders the global PageControls component when `showGlobalControls` is true
- Manages tile expansion state through PreviewTileExpansionContext

### 3. PreviewCustomizationPanel (`preview-customization-panel.tsx`)
- Renders customization controls based on field configurations
- Used for both global controls (as PageControls) and per-tile controls
- Supports various field types: color, slider, text, switch, and custom
- Has default field configurations for common properties like backgroundColor, textColor, etc.

### 4. PreviewTile (`preview-tile.tsx`)
- Individual preview component that displays a specific effect/component
- Merges global customization state with its own initialCustomization
- Renders its children with the merged customization settings
- Can have its own local customization controls

### 5. SimpleNavbar (`simple-navbar.tsx`)
- Provides global theme and playback controls
- Displays the active page title
- Replaces the previous management bar with a simpler, more focused interface

### 6. Container Component (in each effects page)
- Wrapper component that applies consistent styling to preview content
- Uses customization settings for styling (background, border radius, padding)
- Ensures visual consistency across all preview tiles

## Data Flow

### Global State Flow
```
SimpleNavbar (play/pause/reset) → PreviewContext → All PreviewTiles
PageControls → PreviewContext → All PreviewTiles
```

### Local State Flow
```
Tile-specific controls → Individual PreviewTile
```

### Customization Merging
```tsx
// In PreviewTile component:
const customization = React.useMemo<Partial<CustomizationSettings>>(
  () => ({ ...state.customization, ...initialCustomization }),
  [state.customization, initialCustomization]
);
```
This means tile-specific settings override global settings when both are present.

## Field Configuration

Each customization field is defined with a configuration object:

```tsx
// Example field configurations
{ id: 'backgroundColor', label: 'Background', type: 'color' }
{ id: 'borderRadius', label: 'Radius', type: 'slider', min: 0, max: 32, step: 1 }
{ id: 'text', label: 'Text', type: 'text' }
```

These field configurations are used in:
1. The global PageControls (default fields)
2. Each PreviewTile's customFields prop (tile-specific fields)

## Connection Between Page and Tile Customizations

### Page-Level Customization
The page defines global customization through `PreviewSurface`:
```tsx
<PreviewSurface initialCustomization={{
  backgroundColor: '#f5f5f5',
  borderRadius: 12,
  padding: 16
}}>
```

### Tile-Level Customization
Each tile can define its own customization fields:
```tsx
<PreviewTile
  customFields={[
    { id: 'gridSize', label: 'Grid Size', type: 'slider', min: 20, max: 80, step: 5 },
    // ...more fields
  ]}
  initialCustomization={{
    // Tile-specific initial values
  }}
>
```

### Component Rendering
The actual component rendering uses the merged customization:
```tsx
{(customization) => (
  <Container customization={customization}>
    <GridBeams
      gridSize={(customization.gridSize as number) ?? 40}
      // ...other props
    />
  </Container>
)}
```

## Consistency Requirements

To maintain consistency across all effects pages:

1. **Visual Consistency**
   - All preview tiles must use the Container component
   - Container styling should be consistent (background, border radius, padding)
   - Expanded tile behavior should be consistent

2. **Control Consistency**
   - All preview tiles should expose appropriate customization controls
   - Controls should update the live preview in real-time
   - Similar components should have similar customization options

3. **Navigation Consistency**
   - Sidebar navigation should only expand the current category
   - SimpleNavbar should only include theme and playback controls
   - Page titles should be derived from the current pathname

## Effects Pages Structure

Each effects page follows this structure:
1. Page header with title and description
2. PreviewSurface with global customization settings
3. Multiple PreviewTile components, each with:
   - Title, description, and component name
   - Code snippet
   - Custom fields for tile-specific controls
   - Container-wrapped component with customization applied

## Best Practices

1. Always use the Container component for consistent styling
2. Define appropriate customization fields for each component
3. Provide sensible default values for all customizable properties
4. Use type checking for component props to prevent runtime errors
5. Ensure all controls update the live preview in real-time
6. Keep the navbar simple with only essential controls
7. Maintain responsive design for all layouts and viewports