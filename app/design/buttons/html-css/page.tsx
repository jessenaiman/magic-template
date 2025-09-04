'use client';

import * as React from 'react';
import { useDesignPage } from '@/components/design-page-context';
import { PreviewTile, PreviewTileProps } from '@/components/preview-tile';
import { FieldConfig } from '@/components/preview-controls/preview-customization-panel';

// This small component's only job is to send this page's specific
// configuration up to the parent layout's hero component.
function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle('HTML & CSS Buttons');
    setDescription('A collection of buttons created with only HTML and CSS, focusing on semantic and accessible design. These examples share a common set of controls.');
    
    // Define the controls that are common to ALL button examples on this page.
    const buttonFields: FieldConfig[] = [
        { id: 'buttonText', label: 'Button Text', type: 'text', placeholder: 'Click Me' },
        { id: 'fontSize', label: 'Font Size', type: 'slider', min: 12, max: 24, step: 1, unit: 'px' },
        { id: 'borderRadius', label: 'Border Radius', type: 'slider', min: 0, max: 32, step: 2, unit: 'px' },
        { id: 'backgroundColor', label: 'Background', type: 'color' },
    ];
    setFields(buttonFields);
  }, [setTitle, setDescription, setFields]);

  return null; // This component does not render any UI itself.
}

// --- Preview Tile Configurations ---

const pulsingButtonConfig: PreviewTileProps = {
  title: "Pulsing Button",
  description: "Draws attention with a subtle pulse animation.",
  componentName: "PulsingButton",
  code: `<button class="pulsing-button">{buttonText}</button>`,
  initialCustomization: {
    buttonText: 'Click Me',
    backgroundColor: '#3b82f6', // blue-500
  },
  children: (customization) => (
    <>
      <style>{`
        .pulsing-button { animation: pulse 2s infinite; background-color: ${customization.backgroundColor}; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 ${customization.backgroundColor}b3; }
          70% { box-shadow: 0 0 0 10px ${customization.backgroundColor}00; }
          100% { box-shadow: 0 0 0 0 ${customization.backgroundColor}00; }
        }
      `}</style>
      <button 
        className="pulsing-button px-4 py-2 text-white rounded-md"
        style={{ fontSize: `${customization.fontSize}px`, borderRadius: `${customization.borderRadius}px` }}
      >
        {customization.buttonText || 'Click Me'}
      </button>
    </>
  ),
};

const hoverEffectButtonConfig: PreviewTileProps = {
    title: "Hover Effect Button",
    description: "Changes background on hover.",
    componentName: "HoverButton",
    code: `<button class="hover-effect-button">{buttonText}</button>`,
    initialCustomization: {
        buttonText: 'Hover Me',
        backgroundColor: '#10b981', // emerald-500
        fontSize: 16,
        borderRadius: 8,
    },
    children: (customization) => (
        <>
            <style>{`
                .hover-effect-button { transition: background-color 0.3s; }
                .hover-effect-button:hover { background-color: #059669 !important; }
            `}</style>
             <button
                className="hover-effect-button px-4 py-2 text-white rounded-md"
                style={{
                    backgroundColor: customization.backgroundColor,
                    fontSize: `${customization.fontSize}px`,
                    borderRadius: `${customization.borderRadius}px`,
                }}
            >
                {customization.buttonText || 'Hover Me'}
            </button>
        </>
    ),
};


export default function HtmlCssButtonsPage() {
  return (
    <>
      <PageConfigurator />
      
      {/* The Hero is rendered by the parent layout, not the page */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PreviewTile {...pulsingButtonConfig} />
        <PreviewTile {...hoverEffectButtonConfig} />
      </div>
    </>
  );
}