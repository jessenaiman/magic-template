# Preview Controls System

Modern, modular preview + customization architecture replacing legacy `components/common/Preview/*`.

## Goals
- Centralized state (play / text / customization) via context
- Declarative, config-driven customization UI
- Strong TypeScript typing
- Portable control primitives
- Backward compatibility shims for phased migration
- Extensible (custom fields, external actions, share state encoding)

## Core Files
- `preview-context.tsx` (Provider + hooks + serialization)
- `preview-controls-bar.tsx` (play / pause / replay / text / share / code entry)
- `preview-customization-panel.tsx` (dynamic field renderer)
- `preview-input.tsx`, `preview-switch.tsx`, `preview-slider.tsx`, `preview-select.tsx`, `preview-refresh-button.tsx`
- `preview-prop-table.tsx`
- Integrated composite usage inside `components/design/preview-tile.tsx`

## Quick Start

```tsx
import PreviewTile from '@/components/design/preview-tile';

export function Example() {
  return (
    <PreviewTile
      title="Animated Gradient"
      componentName="AnimatedGradient"
      description="An animated gradient text treatment."
      codeExamples={[
        { language: 'tsx', code: '<AnimatedGradientText>Hello</AnimatedGradientText>' }
      ]}
      initialCustomization={{ backgroundColor: '#101010', textColor: '#ffffff' }}
    >
      <div className="text-xl font-semibold">Hello Preview</div>
    </PreviewTile>
  );
}
```

## Direct (Low-Level) Usage

```tsx
import { PreviewProvider, usePreviewContext } from './preview-context';
import PreviewControlsBar from './preview-controls-bar';
import PreviewCustomizationPanel from './preview-customization-panel';

function Canvas() {
  const { state } = usePreviewContext();
  return (
    <div
      style={{
        background: state.customization.backgroundColor,
        color: state.customization.textColor,
        padding: state.customization.padding,
        borderRadius: state.customization.borderRadius,
        fontSize: state.customization.fontSize
      }}
      className="h-48 flex items-center justify-center rounded-md border"
    >
      {state.displayText}
    </div>
  );
}

export function CustomPreview() {
  return (
    <PreviewProvider initialText="My Component">
      <PreviewControlsBar />
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_260px]">
        <Canvas />
        <PreviewCustomizationPanel />
      </div>
    </PreviewProvider>
  );
}
```

## Customization Panel Fields

Default fields cover:
- backgroundColor (color)
- textColor (color)
- borderRadius (slider)
- padding (slider)
- fontSize (slider)
- shadowIntensity (slider)
- fontWeight (switch → 400/600)

Override or extend:

```tsx
<PreviewCustomizationPanel
  fields={[
    { id: 'backgroundColor', label: 'BG', type: 'color' },
    { id: 'padding', label: 'Pad', type: 'slider', min: 0, max: 64, step: 4 },
    {
      id: 'customTagline',
      label: 'Tagline',
      type: 'text',
      maxLength: 40,
      placeholder: 'Enter tagline'
    },
    {
      id: 'shadowIntensity',
      label: 'Shadow',
      type: 'slider',
      min: 0,
      max: 48,
      step: 2
    },
    {
      id: 'experimental',
      label: 'Experimental',
      type: 'custom',
      render: ({ settings, update }) => (
        <button
          className="text-[11px] px-2 py-1 rounded border"
          onClick={() => update({ padding: (settings.padding || 0) + 4 })}
        >
          Boost Padding
        </button>
      )
    }
  ]}
  mergeWithDefaults={false}
/>
```

`mergeWithDefaults`:
- `false` (default) → supplied list replaces defaults
- `true` → merges (same id overrides default)

## Field Visibility

Use `hidden` (boolean or predicate):

```ts
{ id: 'shadowIntensity', type: 'slider', label: 'Shadow', min: 0, max: 40, hidden: s => s.backgroundColor === '#000000' }
```

## Access / Update Single Customization Property

```tsx
import { useCustomizationProp } from './preview-context';

function RadiusNudge() {
  const { value, setValue } = useCustomizationProp('borderRadius');
  return (
    <button onClick={() => setValue(value + 2)} className="text-xs border px-2 py-1 rounded">
      Radius +2
    </button>
  );
}
```

## Replay / State Controls

`PreviewControlsBar` props:
- `allowPause`, `allowRestart`, `allowTextEdit`
- `onShowCode`, `onShare(encodedState)`
- `compact`, `size`, `elevated`

Replay logic encapsulated inside `PreviewRefreshButton`.

## Serialization (Share Links)

```ts
import { encodePreviewState, decodePreviewState } from './preview-context';

// encode
const encoded = encodePreviewState(state);

// decode
const restored = decodePreviewState(encoded);
```

Attach to query params (`?pv=`) to restore.

## Prop Table

```tsx
import { PreviewPropTable } from './preview-prop-table';

<PreviewPropTable
  propsList={[
    { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Control size variant', required: false },
    { name: 'onShare', type: '(s: string) => void', description: 'Share callback' }
  ]}
/>
```

Features:
- Copy buttons (name / type / default)
- Optional filtering (supply `filter` prop)
- Required highlighting
- Dense mode via `dense`

## Backward Compatibility

Legacy directory `components/common/Preview/*` now exports thin React.lazy shims:

| Legacy | New Target |
| ------ | ---------- |
| PreviewInput | preview-input.tsx |
| PreviewSelect | preview-select.tsx |
| PreviewSlider | preview-slider.tsx |
| PreviewSwitch | preview-switch.tsx |
| PropTable | preview-prop-table.tsx |
| RefreshButton | preview-refresh-button.tsx |
| BackgroundContent | (no direct replacement; compose manually) |
| Customize | (inline via PreviewCustomizationPanel) |

All emit one-time console warnings (dev only).

## Migration Steps

1. Replace grouped usage of individual legacy controls with `PreviewTile` where possible.
2. For custom layouts use `PreviewProvider` + manual composition.
3. Remove Chakra-specific layout wrappers.
4. Drop `Customize` wrapper and embed `<PreviewCustomizationPanel />`.
5. Replace `PropTable` with `PreviewPropTable`.
6. After all imports updated, delete legacy files (scripts / build should confirm no remaining import paths).

## Patterns

Inline Actions:

```tsx
<PreviewControlsBar
  onShare={(s) => console.log('shared state', s)}
  onShowCode={() => setCodeOpen(true)}
/>
```

Extra overlay actions (pass as `extraActions` prop to `PreviewTile` or build custom cluster).

## Removing Legacy Code

After verifying no imports from `components/common/Preview/` remain (search), remove the directory and update docs.

## Future Extensions (Not Implemented Yet)

- Encoded state hydration from query param in `<PreviewProvider>`
- Theming presets drop-down
- Integrated Storybook doc link abstraction

## License & Ownership

This subsystem is internal. No external publishing assumptions. Ensure updates remain framework-agnostic (avoid vendor-specific UI coupling).

## Changelog (Initial)

- v1: Introduction, parity with legacy features, shims added.
- Planned v1.1: Query param hydration + preset system.
