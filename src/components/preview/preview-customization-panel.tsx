'use client';

import * as React from 'react';
import { cn } from '@/src/app/lib/utils';
import { PreviewSlider } from './preview-slider';
import { PreviewInput } from './preview-input';
import { PreviewSwitch } from './preview-switch';
import { usePreviewContext, CustomizationSettings } from './preview-context';

/**
 * Field configuration for dynamic rendering
 */
export interface BaseFieldConfig {
  id: string;
  label: string;
  type: 'color' | 'slider' | 'text' | 'switch' | 'custom';
  description?: string;
  hidden?: boolean | ((settings: CustomizationSettings) => boolean);
}

export interface SliderFieldConfig extends BaseFieldConfig {
  type: 'slider';
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export interface ColorFieldConfig extends BaseFieldConfig {
  type: 'color';
}

export interface TextFieldConfig extends BaseFieldConfig {
  type: 'text';
  maxLength?: number;
  placeholder?: string;
}

export interface SwitchFieldConfig extends BaseFieldConfig {
  type: 'switch';
}

export interface CustomFieldConfig extends BaseFieldConfig {
  type: 'custom';
  render: (ctx: {
    settings: CustomizationSettings;
    update: (patch: Partial<CustomizationSettings>) => void;
  }) => React.ReactNode;
}

export type FieldConfig =
  | SliderFieldConfig
  | ColorFieldConfig
  | TextFieldConfig
  | SwitchFieldConfig
  | CustomFieldConfig;

export interface PreviewCustomizationPanelProps {
  /**
   * Override or extend the default field list.
   * If provided, entirely replaces defaults unless mergeWithDefaults = true.
   */
  fields?: FieldConfig[];
  /**
   * When true, merges provided fields with defaults (id collision overwrites defaults).
   */
  mergeWithDefaults?: boolean;
  className?: string;
  title?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  /**
   * Callback whenever customization settings change (after internal context update).
   */
  onSettingsChange?: (settings: CustomizationSettings) => void;
  /**
   * Optional custom footer content (e.g., buttons).
   */
  footer?: React.ReactNode;
  /**
   * Show reset button
   */
  allowReset?: boolean;
  /**
   * Additional action buttons rendered next to reset
   */
  actions?: React.ReactNode;
}

/**
 * Default field configuration matching original Chakra Preview controls.
 */
const defaultFieldConfigs: FieldConfig[] = [
  {
    id: 'backgroundColor',
    label: 'Background',
    type: 'color',
    description: 'Background (hex / rgb)'
  },
  {
    id: 'textColor',
    label: 'Text Color',
    type: 'color'
  },
  {
    id: 'borderRadius',
    label: 'Radius',
    type: 'slider',
    min: 0,
    max: 32,
    step: 1
  },
  {
    id: 'padding',
    label: 'Padding',
    type: 'slider',
    min: 0,
    max: 48,
    step: 2
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
    id: 'shadowIntensity',
    label: 'Shadow',
    type: 'slider',
    min: 0,
    max: 24,
    step: 2
  },
  {
    id: 'fontWeight',
    label: 'Bold Text',
    type: 'switch',
    description: 'Toggle between normal (400) and semi-bold (600)'
  }
];

export function PreviewCustomizationPanel({
  fields,
  mergeWithDefaults = false,
  className,
  title = 'Customize',
  collapsible = true,
  defaultCollapsed = false,
  onSettingsChange,
  footer,
  allowReset = true,
  actions
}: PreviewCustomizationPanelProps) {
  const { state, updateCustomization, reset } = usePreviewContext();
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  // Local draft state for pending changes
  const [draft, setDraft] = React.useState<CustomizationSettings>(state.customization);

  // Sync draft with context when panel opens or context changes
  React.useEffect(() => {
    setDraft(state.customization);
  }, [state.customization, collapsed]);

  // Build effective field list
  const effectiveFields = React.useMemo(() => {
    if (!fields) return defaultFieldConfigs;
    if (!mergeWithDefaults) return fields;
    const map = new Map<string, FieldConfig>();
    defaultFieldConfigs.forEach(f => map.set(f.id, f));
    fields.forEach(f => map.set(f.id, f));
    return Array.from(map.values());
  }, [fields, mergeWithDefaults]);

  // External notification
  React.useEffect(() => {
    if (onSettingsChange) onSettingsChange(state.customization);
  }, [state.customization, onSettingsChange]);

  const handleFieldChange = (id: string, rawValue: any) => {
    // Special handling for switch fontWeight
    if (id === 'fontWeight') {
      setDraft(d => ({ ...d, fontWeight: rawValue ? 600 : 400 }));
      return;
    }
    setDraft(d => ({ ...d, [id]: rawValue }));
  };

  const handleSave = () => {
    updateCustomization(draft);
  };

  const visibleFields = effectiveFields.filter(f => {
    if (typeof f.hidden === 'function') return !f.hidden(draft);
    return !f.hidden;
  });

  return (
    <div
      className={cn(
        'rounded-md border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40',
        'shadow-sm flex flex-col',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 border-b',
          collapsible && 'cursor-pointer select-none'
        )}
        onClick={() => collapsible && setCollapsed(c => !c)}
      >
        <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
        {collapsible && (
          <span className="text-xs text-muted-foreground">
            {collapsed ? 'Show' : 'Hide'}
          </span>
        )}
      </div>

      {!collapsed && (
        <div className="p-4 space-y-5 overflow-y-auto max-h-[480px]">
          {visibleFields.map(field => (
            <FieldRenderer
              key={field.id}
              field={field}
              settings={draft}
              onChange={handleFieldChange}
            />
          ))}

          {(allowReset || footer || actions) && (
            <div className="pt-4 mt-2 border-t flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className={cn(
                    'text-xs rounded-md border px-2.5 py-1.5 font-medium',
                    'bg-primary text-primary-foreground hover:bg-primary/80 transition-colors'
                  )}
                >
                  Save
                </button>
                {allowReset && (
                  <button
                    type="button"
                    onClick={reset}
                    className={cn(
                      'text-xs rounded-md border px-2.5 py-1.5 font-medium',
                      'bg-muted/40 hover:bg-muted/70 transition-colors'
                    )}
                  >
                    Reset
                  </button>
                )}
                {actions}
              </div>
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------- Field Renderer ---------------- */

interface FieldRendererProps {
  field: FieldConfig;
  settings: CustomizationSettings;
  onChange: (id: string, value: any) => void;
}

function FieldRenderer({ field, settings, onChange }: FieldRendererProps) {
  switch (field.type) {
    case 'color':
      return (
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-tight flex items-center gap-2">
            {field.label}
            <input
              type="color"
              className="h-6 w-6 cursor-pointer rounded border bg-background"
              value={(settings as any)[field.id]}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          </label>
          {field.description && (
            <p className="text-[11px] text-muted-foreground leading-tight">
              {field.description}
            </p>
          )}
        </div>
      );

    case 'slider': {
      const sliderField = field as SliderFieldConfig;
      // Memoize the slider value to prevent unnecessary re-renders
      const sliderValue = React.useMemo(() => {
        const value = (settings as any)[sliderField.id];
        return value !== undefined ? value : sliderField.min;
      }, [(settings as any)[sliderField.id], sliderField.min]);

      // Memoize the onChange handler
      const handleChange = React.useCallback(
        (v: number) => {
          if ((settings as any)[sliderField.id] !== v) {
            onChange(sliderField.id, v);
          }
        },
        [sliderField.id, onChange, settings]
      );

      return (
        <div className="space-y-1.5">
          <PreviewSlider
            label={sliderField.label}
            value={sliderValue}
            min={sliderField.min}
            max={sliderField.max}
            step={sliderField.step}
            valueUnit={sliderField.unit}
            description={field.description}
            onChange={handleChange}
          />
        </div>
      );
    }

    case 'text': {
      const tf = field as TextFieldConfig;
      return (
        <PreviewInput
          label={tf.label}
          value={(settings as any)[tf.id] ?? ''}
          maxLength={tf.maxLength}
          placeholder={tf.placeholder}
          description={tf.description}
          onChange={(v) => onChange(tf.id, v)}
        />
      );
    }

    case 'switch': {
      const sw = field as SwitchFieldConfig;
      const current = (settings as any)[sw.id];
      const boolValue =
        sw.id === 'fontWeight'
          ? (current ?? settings.fontWeight) >= 500
          : Boolean(current);
      return (
        <PreviewSwitch
          label={sw.label}
          checked={boolValue}
          description={sw.description}
          onChange={(c) => onChange(sw.id, c)}
        />
      );
    }

    case 'custom': {
      const cf = field as CustomFieldConfig;
      return (
        <div className="space-y-1.5">
          {cf.label && (
            <div className="text-xs font-medium tracking-tight">{cf.label}</div>
          )}
          {cf.render({
            settings,
            update: (patch) => {
              // Pass patch upstream
              Object.entries(patch).forEach(([k, v]) => onChange(k, v));
            }
          })}
          {cf.description && (
            <p className="text-[11px] text-muted-foreground leading-tight">
              {cf.description}
            </p>
          )}
        </div>
      );
    }

    default:
      return null;
  }
}

export default PreviewCustomizationPanel;