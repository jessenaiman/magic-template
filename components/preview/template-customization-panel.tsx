'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { PreviewSlider } from './preview-slider';
import { PreviewInput } from './preview-input';
import { PreviewSwitch } from './preview-switch';

// Reusable field configuration types (extracted from preview-customization-panel)
export interface BaseFieldConfig {
  id: string;
  label: string;
  type: 'color' | 'slider' | 'text' | 'switch' | 'select' | 'custom';
  description?: string;
  hidden?: boolean | ((settings: TemplateCustomizationSettings) => boolean);
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

export interface SelectFieldConfig extends BaseFieldConfig {
  type: 'select';
  options: Array<{ value: string; label: string }>;
}

export interface CustomFieldConfig extends BaseFieldConfig {
  type: 'custom';
  render: (ctx: {
    settings: TemplateCustomizationSettings;
    update: (patch: Partial<TemplateCustomizationSettings>) => void;
  }) => React.ReactNode;
}

export type TemplateFieldConfig =
  | SliderFieldConfig
  | ColorFieldConfig
  | TextFieldConfig
  | SwitchFieldConfig
  | SelectFieldConfig
  | CustomFieldConfig;

// Template-specific customization settings
export interface TemplateCustomizationSettings {
  // Component library selection
  componentLibrary: 'shadcn' | 'magicui';
  // Theme selection
  theme: 'light' | 'dark' | 'system';
  // Display size/viewport
  displaySize: 'mobile' | 'tablet' | 'desktop' | 'full';
  // Form customization
  formStyle: 'minimal' | 'outlined' | 'filled';
  buttonVariant: 'default' | 'outline' | 'ghost' | 'link';
  // Layout options
  layout: 'single' | 'grid' | 'flex';
  spacing: 'tight' | 'normal' | 'loose';
  // Animation settings
  animations: boolean;
  animationSpeed: 'slow' | 'normal' | 'fast';
  // Allow any additional custom properties
  [key: string]: any;
}

// Default template customization settings
export const defaultTemplateCustomization: TemplateCustomizationSettings = {
  componentLibrary: 'shadcn',
  theme: 'light',
  displaySize: 'desktop',
  formStyle: 'outlined',
  buttonVariant: 'default',
  layout: 'single',
  spacing: 'normal',
  animations: true,
  animationSpeed: 'normal',
};

// Template customization context
interface TemplateCustomizationContextValue {
  settings: TemplateCustomizationSettings;
  updateSettings: (patch: Partial<TemplateCustomizationSettings>) => void;
  resetSettings: () => void;
}

const TemplateCustomizationContext = React.createContext<TemplateCustomizationContextValue | null>(null);

export function TemplateCustomizationProvider({
  children,
  initialSettings
}: {
  children: React.ReactNode;
  initialSettings?: Partial<TemplateCustomizationSettings>;
}) {
  const [settings, setSettings] = React.useState<TemplateCustomizationSettings>({
    ...defaultTemplateCustomization,
    ...initialSettings,
  });

  const updateSettings = React.useCallback((patch: Partial<TemplateCustomizationSettings>) => {
    setSettings(prev => ({ ...prev, ...patch }));
  }, []);

  const resetSettings = React.useCallback(() => {
    setSettings(defaultTemplateCustomization);
  }, []);

  const value = React.useMemo(() => ({
    settings,
    updateSettings,
    resetSettings,
  }), [settings, updateSettings, resetSettings]);

  return (
    <TemplateCustomizationContext.Provider value={value}>
      {children}
    </TemplateCustomizationContext.Provider>
  );
}

export function useTemplateCustomization() {
  const context = React.useContext(TemplateCustomizationContext);
  if (!context) {
    throw new Error('useTemplateCustomization must be used within a TemplateCustomizationProvider');
  }
  return context;
}

// Reusable field renderer component
interface FieldRendererProps {
  field: TemplateFieldConfig;
  settings: TemplateCustomizationSettings;
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
      const sliderValue = React.useMemo(() => {
        const value = (settings as any)[sliderField.id];
        return value !== undefined ? value : sliderField.min;
      }, [(settings as any)[sliderField.id], sliderField.min]);

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
      const boolValue = Boolean(current);
      return (
        <PreviewSwitch
          label={sw.label}
          checked={boolValue}
          description={sw.description}
          onChange={(c) => onChange(sw.id, c)}
        />
      );
    }

    case 'select': {
      const sf = field as SelectFieldConfig;
      return (
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-tight">
            {sf.label}
          </label>
          <select
            value={(settings as any)[sf.id] ?? sf.options[0]?.value}
            onChange={(e) => onChange(sf.id, e.target.value)}
            className="w-full px-2 py-1 text-xs border rounded bg-background"
          >
            {sf.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {sf.description && (
            <p className="text-[11px] text-muted-foreground leading-tight">
              {sf.description}
            </p>
          )}
        </div>
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

// Template Customization Panel Component
export interface TemplateCustomizationPanelProps {
  fields?: TemplateFieldConfig[];
  mergeWithDefaults?: boolean;
  className?: string;
  title?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onSettingsChange?: (settings: TemplateCustomizationSettings) => void;
  footer?: React.ReactNode;
  allowReset?: boolean;
  actions?: React.ReactNode;
}

// Default field configuration for templates
const defaultTemplateFieldConfigs: TemplateFieldConfig[] = [
  {
    id: 'componentLibrary',
    label: 'Component Library',
    type: 'select',
    options: [
      { value: 'shadcn', label: 'shadcn/ui' },
      { value: 'magicui', label: 'Magic UI' },
    ],
    description: 'Choose which component library to use'
  },
  {
    id: 'theme',
    label: 'Theme',
    type: 'select',
    options: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System' },
    ],
    description: 'Select theme preference'
  },
  {
    id: 'displaySize',
    label: 'Display Size',
    type: 'select',
    options: [
      { value: 'mobile', label: 'Mobile (375px)' },
      { value: 'tablet', label: 'Tablet (768px)' },
      { value: 'desktop', label: 'Desktop (1024px)' },
      { value: 'full', label: 'Full Width' },
    ],
    description: 'Preview different screen sizes'
  },
  {
    id: 'formStyle',
    label: 'Form Style',
    type: 'select',
    options: [
      { value: 'minimal', label: 'Minimal' },
      { value: 'outlined', label: 'Outlined' },
      { value: 'filled', label: 'Filled' },
    ],
    description: 'Choose form input styling'
  },
  {
    id: 'buttonVariant',
    label: 'Button Style',
    type: 'select',
    options: [
      { value: 'default', label: 'Default' },
      { value: 'outline', label: 'Outline' },
      { value: 'ghost', label: 'Ghost' },
      { value: 'link', label: 'Link' },
    ],
    description: 'Select button variant'
  },
  {
    id: 'layout',
    label: 'Layout',
    type: 'select',
    options: [
      { value: 'single', label: 'Single Column' },
      { value: 'grid', label: 'Grid' },
      { value: 'flex', label: 'Flex' },
    ],
    description: 'Choose layout structure'
  },
  {
    id: 'spacing',
    label: 'Spacing',
    type: 'select',
    options: [
      { value: 'tight', label: 'Tight' },
      { value: 'normal', label: 'Normal' },
      { value: 'loose', label: 'Loose' },
    ],
    description: 'Adjust element spacing'
  },
  {
    id: 'animations',
    label: 'Enable Animations',
    type: 'switch',
    description: 'Toggle animations on/off'
  },
  {
    id: 'animationSpeed',
    label: 'Animation Speed',
    type: 'select',
    options: [
      { value: 'slow', label: 'Slow' },
      { value: 'normal', label: 'Normal' },
      { value: 'fast', label: 'Fast' },
    ],
    description: 'Control animation timing',
    hidden: (settings) => !settings.animations
  },
];

export function TemplateCustomizationPanel({
  fields,
  mergeWithDefaults = false,
  className,
  title = 'Template Options',
  collapsible = true,
  defaultCollapsed = false,
  onSettingsChange,
  footer,
  allowReset = true,
  actions
}: TemplateCustomizationPanelProps) {
  const { settings, updateSettings, resetSettings } = useTemplateCustomization();
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const [draft, setDraft] = React.useState<TemplateCustomizationSettings>(settings);

  // Sync draft with context when panel opens or context changes
  React.useEffect(() => {
    setDraft(settings);
  }, [settings, collapsed]);

  // Build effective field list
  const effectiveFields = React.useMemo(() => {
    if (!fields) return defaultTemplateFieldConfigs;
    if (!mergeWithDefaults) return fields;
    const map = new Map<string, TemplateFieldConfig>();
    defaultTemplateFieldConfigs.forEach(f => map.set(f.id, f));
    fields.forEach(f => map.set(f.id, f));
    return Array.from(map.values());
  }, [fields, mergeWithDefaults]);

  // External notification
  React.useEffect(() => {
    if (onSettingsChange) onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  const handleFieldChange = (id: string, rawValue: any) => {
    setDraft(d => ({ ...d, [id]: rawValue }));
  };

  const handleSave = () => {
    updateSettings(draft);
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
                  Apply
                </button>
                {allowReset && (
                  <button
                    type="button"
                    onClick={resetSettings}
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

export default TemplateCustomizationPanel;
