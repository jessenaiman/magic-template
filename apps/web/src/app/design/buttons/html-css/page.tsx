'use client';

import * as React from 'react';
import { useDesignPage } from '@/src/components/design-page-context';
import { PreviewTile } from '@/src/components/preview/preview-tile';
import { FieldConfig } from '@/src/components/preview/preview-customization-panel';
import { CustomizationSettings } from '@/src/components/preview/preview-context';
import { cn } from '@/src/lib/utils';

// Default values for the preview context
const defaultCustomization: Partial<CustomizationSettings> = {
  buttonText: 'Click Me',
  fontSize: 16,
  borderRadius: 6,
  backgroundColor: '#3b82f6',
  textColor: '#ffffff',
  paddingX: 16,
  paddingY: 8,
  fontWeight: 500,
  pulseColor: '#3b82f6',
  pulseSpeed: 2,
  hoverBackgroundColor: '#2563eb',
  hoverTranslateY: -2,
  gradientFrom: '#8b5cf6',
  gradientTo: '#ec4899',
  gradientAngle: 135
};

// This small component's only job is to send this page's specific
// configuration up to the parent layout's hero component.
function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle('HTML & CSS Buttons');
    setDescription('A collection of buttons created with only HTML and CSS, focusing on semantic and accessible design. These examples share a common set of controls.');
    
    // Define the controls that are common to ALL button examples on this page.
    const buttonFields: FieldConfig[] = [
      { 
        id: 'buttonText', 
        label: 'Button Text', 
        type: 'text',
        description: 'The text displayed on the button',
        placeholder: 'Click Me'
      },
      { 
        id: 'fontSize', 
        label: 'Font Size', 
        type: 'slider', 
        min: 12, 
        max: 24, 
        step: 1, 
        unit: 'px',
        description: 'Size of the button text'
      },
      {
        id: 'fontWeight',
        label: 'Font Weight',
        type: 'slider',
        min: 400,
        max: 700,
        step: 100,
        description: 'Thickness of the button text'
      },
      { 
        id: 'borderRadius', 
        label: 'Border Radius', 
        type: 'slider', 
        min: 0, 
        max: 32, 
        step: 2, 
        unit: 'px',
        description: 'Roundness of button corners'
      },
      { 
        id: 'backgroundColor', 
        label: 'Background', 
        type: 'color',
        description: 'Button background color'
      },
      {
        id: 'textColor',
        label: 'Text Color',
        type: 'color',
        description: 'Button text color'
      },
      {
        id: 'paddingX',
        label: 'Horizontal Padding',
        type: 'slider',
        min: 8,
        max: 48,
        step: 2,
        unit: 'px',
        description: 'Horizontal space inside the button'
      },
      {
        id: 'paddingY',
        label: 'Vertical Padding',
        type: 'slider',
        min: 4,
        max: 24,
        step: 1,
        unit: 'px',
        description: 'Vertical space inside the button'
      }
    ];
    setFields(buttonFields);
  }, [setTitle, setDescription, setFields]);

  return null;
}

// --- Preview Tile Configurations ---

export default function ButtonsPage() {
  return (
    <div className="grid gap-8">
      <PageConfigurator />
      <PreviewTile
        title="Basic Button"
        description="A simple button with hover and focus states. Uses CSS variables for easy theming."
        componentName="BasicButton"
        code={`<button
  className="px-{paddingX} py-{paddingY} rounded-{borderRadius} text-{fontSize} font-{fontWeight} bg-{backgroundColor} text-{textColor} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{backgroundColor}"
>
  {buttonText}
</button>`}
        initialCustomization={defaultCustomization}
        customFields={[
          { id: 'buttonText', label: 'Button Text', type: 'text' },
          { id: 'fontSize', label: 'Font Size', type: 'slider', min: 12, max: 24, step: 1, unit: 'px' },
          { id: 'fontWeight', label: 'Font Weight', type: 'slider', min: 400, max: 700, step: 100 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
          { id: 'textColor', label: 'Text Color', type: 'color' },
        ]}
      >
        {(customization: Partial<CustomizationSettings>) => (
          <button
            className={cn(
              'transition-all duration-200',
              'px-[var(--paddingX)] py-[var(--paddingY)]',
              'rounded-[var(--borderRadius)]',
              'text-[var(--fontSize)]',
              'font-[var(--fontWeight)]',
              'bg-[var(--backgroundColor)]',
              'text-[var(--textColor)]',
              'hover:bg-opacity-90',
              'focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}
            style={{
              '--paddingX': `${customization.paddingX}px`,
              '--paddingY': `${customization.paddingY}px`,
              '--borderRadius': `${customization.borderRadius}px`,
              '--fontSize': `${customization.fontSize}px`,
              '--fontWeight': customization.fontWeight,
              '--backgroundColor': customization.backgroundColor,
              '--textColor': customization.textColor,
            } as React.CSSProperties}
          >
            {customization.buttonText}
          </button>
        )}
      </PreviewTile>

      <PreviewTile
        title="Gradient Button"
        description="A button with a beautiful gradient background and hover effect."
        componentName="GradientButton"
        code={`<button
  className="px-{paddingX} py-{paddingY} rounded-{borderRadius} text-{fontSize} font-{fontWeight} text-{textColor} bg-gradient-to-r from-{gradientFrom} to-{gradientTo} hover:-translate-y-{hoverTranslateY} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{gradientFrom}"
>
  {buttonText}
</button>`}
        initialCustomization={{
          ...defaultCustomization,
          gradientFrom: '#8b5cf6',
          gradientTo: '#ec4899',
          hoverTranslateY: 2,
        }}
        customFields={[
          { id: 'buttonText', label: 'Button Text', type: 'text' },
          { id: 'fontSize', label: 'Font Size', type: 'slider', min: 12, max: 24, step: 1, unit: 'px' },
          { id: 'fontWeight', label: 'Font Weight', type: 'slider', min: 400, max: 700, step: 100 },
          { id: 'gradientFrom', label: 'Gradient Start', type: 'color' },
          { id: 'gradientTo', label: 'Gradient End', type: 'color' },
          { id: 'hoverTranslateY', label: 'Hover Lift', type: 'slider', min: 0, max: 4, step: 1, unit: 'px' },
        ]}
      >
        {(customization: Partial<CustomizationSettings>) => (
          <button
            className={cn(
              'transition-all duration-200',
              'px-[var(--paddingX)] py-[var(--paddingY)]',
              'rounded-[var(--borderRadius)]',
              'text-[var(--fontSize)]',
              'font-[var(--fontWeight)]',
              'text-white',
              'bg-gradient-to-r from-[var(--gradientFrom)] to-[var(--gradientTo)]',
              'hover:-translate-y-[var(--hoverTranslateY)]',
              'focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}
            style={{
              '--paddingX': `${customization.paddingX}px`,
              '--paddingY': `${customization.paddingY}px`,
              '--borderRadius': `${customization.borderRadius}px`,
              '--fontSize': `${customization.fontSize}px`,
              '--fontWeight': customization.fontWeight,
              '--gradientFrom': customization.gradientFrom,
              '--gradientTo': customization.gradientTo,
              '--hoverTranslateY': `${customization.hoverTranslateY}px`,
            } as React.CSSProperties}
          >
            {customization.buttonText}
          </button>
        )}
      </PreviewTile>

      <PreviewTile
        title="Pulsing Button"
        description="An attention-grabbing button with a pulsing animation effect."
        componentName="PulsingButton"
        code={`<button
  className="relative px-{paddingX} py-{paddingY} rounded-{borderRadius} text-{fontSize} font-{fontWeight} bg-{backgroundColor} text-{textColor} hover:bg-{hoverBackgroundColor} group"
>
  <span className="absolute inset-0 rounded-{borderRadius} bg-{pulseColor} animate-pulse opacity-50 group-hover:opacity-0" />
  <span className="relative">{buttonText}</span>
</button>`}
        initialCustomization={{
          ...defaultCustomization,
          pulseColor: '#3b82f6',
          pulseSpeed: 2,
          hoverBackgroundColor: '#2563eb',
        }}
        customFields={[
          { id: 'buttonText', label: 'Button Text', type: 'text' },
          { id: 'fontSize', label: 'Font Size', type: 'slider', min: 12, max: 24, step: 1, unit: 'px' },
          { id: 'fontWeight', label: 'Font Weight', type: 'slider', min: 400, max: 700, step: 100 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
          { id: 'pulseColor', label: 'Pulse Color', type: 'color' },
          { id: 'hoverBackgroundColor', label: 'Hover Color', type: 'color' },
        ]}
      >
        {(customization: Partial<CustomizationSettings>) => (
          <button
            className={cn(
              'relative transition-all duration-200',
              'px-[var(--paddingX)] py-[var(--paddingY)]',
              'rounded-[var(--borderRadius)]',
              'text-[var(--fontSize)]',
              'font-[var(--fontWeight)]',
              'bg-[var(--backgroundColor)]',
              'text-[var(--textColor)]',
              'hover:bg-[var(--hoverBackgroundColor)]',
              'group'
            )}
            style={{
              '--paddingX': `${customization.paddingX}px`,
              '--paddingY': `${customization.paddingY}px`,
              '--borderRadius': `${customization.borderRadius}px`,
              '--fontSize': `${customization.fontSize}px`,
              '--fontWeight': customization.fontWeight,
              '--backgroundColor': customization.backgroundColor,
              '--textColor': customization.textColor,
              '--pulseColor': customization.pulseColor,
              '--hoverBackgroundColor': customization.hoverBackgroundColor,
            } as React.CSSProperties}
          >
            <span
              className={cn(
                'absolute inset-0',
                'rounded-[var(--borderRadius)]',
                'bg-[var(--pulseColor)]',
                'animate-pulse opacity-50',
                'group-hover:opacity-0',
                'transition-opacity duration-200'
              )}
            />
            <span className="relative">{customization.buttonText}</span>
          </button>
        )}
      </PreviewTile>
    </div>
  );
}