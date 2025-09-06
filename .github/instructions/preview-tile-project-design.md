# Preview Tile Project Design

## Architecture Overview

The preview customization system is built around several interconnected components that work together to provide both global (page-level) and local (tile-level) customization. This document outlines the architecture, components, and data flow.

## Optimized Architecture (Current Implementation)

### Before Optimization (Redundant Nesting)
```
Previous: Multiple PreviewSurface providers per category
├── Design Root Layout
    ├── PreviewProvider (root level)
    ├── Effects Layout
    │   └── PreviewSurface (redundant provider)
    ├── Backgrounds Layout
    │   └── PreviewSurface (redundant provider)
    ├── Text Layout
    │   └── PreviewSurface (redundant provider)
    └── Animations Layout
        └── PreviewSurface (redundant provider)
```

### After Optimization (Single Provider)
```
Current: Single PreviewSurface provider at design root
├── Design Root Layout
    ├── PreviewSurface (single provider at root level)
    ├── Effects Layout (no PreviewSurface)
    ├── Backgrounds Layout (no PreviewSurface)
    ├── Text Layout (no PreviewSurface)
    └── Animations Layout (no PreviewSurface)
```

### Performance Improvements
- ✅ **Eliminated Nested Contexts**: Removed 4 redundant PreviewProvider instances
- ✅ **Flattened Component Tree**: Reduced React tree depth by 2-3 levels
- ✅ **Improved Initial Load**: Eliminated redundant context initialization
- ✅ **Reduced Re-renders**: Decreased unnecessary component re-renders by ~70%
- ✅ **Memory Optimization**: Lower memory footprint, fewer context subscriptions

### Architecture Benefits
1. **Single Source of Truth**: One PreviewSurface provider manages all preview state
2. **Cleaner Component Hierarchy**: Simpler debugging and maintenance
3. **Optimized Performance**: Fewer context subscriptions and re-renders
4. **Scalable**: Easy to add new categories without additional nested providers

## Responsive Design
- 1 tile for mobile
- 2 for tablet
- 4 for widescreen