import { FieldConfig } from './preview-customization-panel';

/**
 * Base customization options shared across component categories
 */

export const baseTextOptions: FieldConfig[] = [
  {
    id: 'displayText',
    label: 'Text Content',
    type: 'text',
    description: 'The actual text displayed in the component'
  },
  {
    id: 'fontSize',
    label: 'Font Size',
    type: 'slider',
    min: 10,
    max: 48,
    step: 1,
    unit: 'px'
  },
  {
    id: 'fontWeight',
    label: 'Font Weight',
    type: 'slider',
    min: 100,
    max: 900,
    step: 100
  },
  {
    id: 'textColor',
    label: 'Text Color',
    type: 'color'
  },
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color'
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 32,
    step: 1,
    unit: 'px'
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 0,
    max: 48,
    step: 4,
    unit: 'px'
  }
];

export const baseButtonOptions: FieldConfig[] = [
  {
    id: 'buttonText',
    label: 'Button Text',
    type: 'text',
    description: 'Text displayed on the button'
  },
  {
    id: 'fontSize',
    label: 'Font Size',
    type: 'slider',
    min: 12,
    max: 24,
    step: 1,
    unit: 'px'
  },
  {
    id: 'fontWeight',
    label: 'Font Weight',
    type: 'slider',
    min: 400,
    max: 700,
    step: 100
  },
  {
    id: 'textColor',
    label: 'Text Color',
    type: 'color'
  },
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color'
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 24,
    step: 1,
    unit: 'px'
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 8,
    max: 32,
    step: 2,
    unit: 'px'
  },
  {
    id: 'shadow',
    label: 'Shadow',
    type: 'slider',
    min: 0,
    max: 24,
    step: 2,
    description: 'Drop shadow intensity'
  }
];

export const baseCardOptions: FieldConfig[] = [
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color'
  },
  {
    id: 'borderRadius',
    label: 'Border Radius',
    type: 'slider',
    min: 0,
    max: 24,
    step: 1,
    unit: 'px'
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 8,
    max: 48,
    step: 4,
    unit: 'px'
  },
  {
    id: 'shadow',
    label: 'Shadow',
    type: 'slider',
    min: 0,
    max: 24,
    step: 2
  },
  {
    id: 'gap',
    label: 'Item Spacing',
    type: 'slider',
    min: 4,
    max: 32,
    step: 2,
    unit: 'px'
  }
];

export const baseAnimationOptions: FieldConfig[] = [
  {
    id: 'duration',
    label: 'Duration',
    type: 'slider',
    min: 0.1,
    max: 3.0,
    step: 0.1,
    unit: 's'
  },
  {
    id: 'delay',
    label: 'Delay',
    type: 'slider',
    min: 0,
    max: 2.0,
    step: 0.1,
    unit: 's'
  },
  {
    id: 'playing',
    label: 'Playing',
    type: 'switch',
    description: 'Play/pause the animation'
  }
];

/**
 * Utility function to merge base options with component-specific options
 */
export function mergeWithBaseOptions(
  category: 'text' | 'button' | 'card' | 'animation',
  customOptions: FieldConfig[] = []
): FieldConfig[] {
  const baseOptions = {
    text: baseTextOptions,
    button: baseButtonOptions,
    card: baseCardOptions,
    animation: baseAnimationOptions
  };

  const base = baseOptions[category] || [];
  
  // Merge custom options, allowing overrides by id
  const merged = [...base];
  customOptions.forEach(customOption => {
    const existingIndex = merged.findIndex(option => option.id === customOption.id);
    if (existingIndex >= 0) {
      merged[existingIndex] = customOption;
    } else {
      merged.push(customOption);
    }
  });
  
  return merged;
}
