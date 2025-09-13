import { FieldConfig } from './preview/preview-customization-panel';

/**
 * Base customization options shared across component categories.
 * These are intended to power the DesignPageHero controls and be merged with
 * page-level custom fields per example tile.
 */

/* ---------------- Text ---------------- */
export const baseTextOptions: FieldConfig[] = [
  {
    id: 'displayText',
    label: 'Text Content',
    type: 'text',
    description: 'The actual text displayed in the component',
  },
  {
    id: 'fontSize',
    label: 'Font Size',
    type: 'slider',
    min: 10,
    max: 48,
    step: 1,
    unit: 'px',
  },
  {
    id: 'fontWeight',
    label: 'Font Weight',
    type: 'slider',
    min: 100,
    max: 900,
    step: 100,
  },
  {
    id: 'textColor',
    label: 'Text Color',
    type: 'color',
  },
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color',
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 32,
    step: 1,
    unit: 'px',
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 0,
    max: 48,
    step: 4,
    unit: 'px',
  },
];

/* ---------------- Buttons ---------------- */
export const baseButtonOptions: FieldConfig[] = [
  {
    id: 'buttonText',
    label: 'Button Text',
    type: 'text',
    description: 'Text displayed on the button',
    placeholder: 'Click me',
  },
  {
    id: 'fontSize',
    label: 'Font Size',
    type: 'slider',
    min: 12,
    max: 24,
    step: 1,
    unit: 'px',
    description: 'Size of the button text',
  },
  {
    id: 'fontWeight',
    label: 'Font Weight',
    type: 'slider',
    min: 400,
    max: 700,
    step: 100,
    description: 'Thickness of the button text',
  },
  {
    id: 'textColor',
    label: 'Text Color',
    type: 'color',
    description: 'Color of the button text',
  },
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color',
    description: 'Button background color',
  },
  {
    id: 'paddingX',
    label: 'Horizontal Padding',
    type: 'slider',
    min: 8,
    max: 48,
    step: 2,
    unit: 'px',
    description: 'Horizontal space inside the button',
  },
  {
    id: 'paddingY',
    label: 'Vertical Padding',
    type: 'slider',
    min: 4,
    max: 24,
    step: 1,
    unit: 'px',
    description: 'Vertical space inside the button',
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 24,
    step: 1,
    unit: 'px',
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 8,
    max: 32,
    step: 2,
    unit: 'px',
  },
  {
    id: 'shadow',
    label: 'Shadow',
    type: 'slider',
    min: 0,
    max: 24,
    step: 2,
    description: 'Drop shadow intensity',
  },
];

/* ---------------- Cards / Containers ---------------- */
export const baseCardOptions: FieldConfig[] = [
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color',
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 24,
    step: 1,
    unit: 'px',
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 8,
    max: 48,
    step: 4,
    unit: 'px',
  },
  {
    id: 'shadow',
    label: 'Shadow',
    type: 'slider',
    min: 0,
    max: 24,
    step: 2,
  },
  {
    id: 'gap',
    label: 'Item Spacing',
    type: 'slider',
    min: 4,
    max: 32,
    step: 2,
    unit: 'px',
  },
];

/* ---------------- Generic Animation Controls ---------------- */
export const baseAnimationOptions: FieldConfig[] = [
  {
    id: 'duration',
    label: 'Duration',
    type: 'slider',
    min: 0.1,
    max: 3.0,
    step: 0.1,
    unit: 's',
  },
  {
    id: 'delay',
    label: 'Delay',
    type: 'slider',
    min: 0,
    max: 2.0,
    step: 0.1,
    unit: 's',
  },
  {
    id: 'playing',
    label: 'Playing',
    type: 'switch',
    description: 'Play/pause the animation',
  },
];

/* ---------------- Backgrounds ---------------- */
export const baseBackgroundOptions: FieldConfig[] = [
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color',
  },
  {
    id: 'accentColor',
    label: 'Accent Color',
    type: 'color',
    description: 'Primary accent used by certain background effects',
  },
  {
    id: 'intensity',
    label: 'Intensity',
    type: 'slider',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    id: 'speed',
    label: 'Speed',
    type: 'slider',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    id: 'opacity',
    label: 'Opacity',
    type: 'slider',
    min: 0,
    max: 100,
    step: 1,
    description: 'Overall effect opacity (%)',
  },
];

/* ---------------- Effects (generic visual effects) ---------------- */
export const baseEffectsOptions: FieldConfig[] = [
  {
    id: 'intensity',
    label: 'Intensity',
    type: 'slider',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    id: 'blur',
    label: 'Blur',
    type: 'slider',
    min: 0,
    max: 20,
    step: 1,
    unit: 'px',
  },
  {
    id: 'radius',
    label: 'Radius',
    type: 'slider',
    min: 0,
    max: 48,
    step: 1,
    unit: 'px',
  },
];

/* ---------------- Page Transitions ---------------- */
export const basePageTransitionOptions: FieldConfig[] = [
  {
    id: 'duration',
    label: 'Duration',
    type: 'slider',
    min: 0.1,
    max: 1.5,
    step: 0.05,
    unit: 's',
  },
  {
    id: 'easing',
    label: 'Easing',
    type: 'text',
    placeholder: 'easeInOut',
  },
  {
    id: 'direction',
    label: 'Direction',
    type: 'text',
    description: 'e.g., up | down | left | right',
  },
];

/**
 * Utility function to merge base options with component-specific options
 */
export type CategorySlug =
  | 'text'
  | 'button'
  | 'card'
  | 'animation'
  | 'background'
  | 'effects'
  | 'page-transition';

const BASE_FIELDS_BY_CATEGORY: Record<CategorySlug, FieldConfig[]> = {
  text: baseTextOptions,
  button: baseButtonOptions,
  card: baseCardOptions,
  animation: baseAnimationOptions,
  background: baseBackgroundOptions,
  effects: baseEffectsOptions,
  'page-transition': basePageTransitionOptions,
};

/**
 * Merge base options with component- or page-specific options.
 * Id collisions favor the custom option.
 */
export function mergeWithBaseOptions(
  category: CategorySlug,
  customOptions: FieldConfig[] = []
): FieldConfig[] {
  const base = BASE_FIELDS_BY_CATEGORY[category] ?? [];
  const merged = [...base];
  customOptions.forEach(customOption => {
    const existingIndex = merged.findIndex(
      option => option.id === customOption.id
    );
    if (existingIndex >= 0) {
      merged[existingIndex] = customOption;
    } else {
      merged.push(customOption);
    }
  });
  return merged;
}

/**
 * Convenience accessor to get the base field set for a category.
 */
export function getBaseFields(category: CategorySlug): FieldConfig[] {
  return BASE_FIELDS_BY_CATEGORY[category] ?? [];
}
