'use client';

import { useState } from "react";
import { Button } from "@/packages/components/ui/button";
import { Slider } from "@/packages/components/ui/slider";
import { Label } from "@/packages/components/ui/label";
import {
  BaseCustomizerComponent,
  defaultBaseSettings,
  type BaseCustomizationSettings,
} from "@/src/components/base-customizer";

export default function CustomizeButtonsPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);

  // Extended settings for buttons
  const [fontWeight, setFontWeight] = useState(500);

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const generateCSS = () => {
    return `.custom-button {
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: ${settings.paddingY}px ${settings.paddingX}px;
  font-size: ${settings.fontSize}px;
  font-weight: ${fontWeight};
  border: none;
  cursor: pointer;
  box-shadow: ${settings.shadowStyle === 'none' ? 'none' :
             settings.shadowStyle === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'medium' ? '0 4px 6px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'large' ? '0 10px 15px rgba(0,0,0,0.1)' :
             '0 20px 25px rgba(0,0,0,0.1)'};
  transition: all 0.2s ease;
}

.custom-button:hover {
  ${settings.animationType === 'scale' ? 'transform: scale(1.05);' :
    settings.animationType === 'glow' ? 'box-shadow: 0 0 30px rgba(59,130,246,0.5);' : ''}
  opacity: 0.9;
}`;
  };

  const generateTailwind = () => {
    const bgColor = settings.backgroundColor;
    const textColor = settings.textColor;
    const rounded = settings.borderRadius <= 4 ? 'rounded' :
                   settings.borderRadius <= 8 ? 'rounded-md' :
                   settings.borderRadius <= 12 ? 'rounded-lg' : 'rounded-xl';
    const shadow = settings.shadowStyle === 'none' ? '' :
                   settings.shadowStyle === 'subtle' ? 'shadow-sm' :
                   settings.shadowStyle === 'medium' ? 'shadow-md' :
                   settings.shadowStyle === 'large' ? 'shadow-lg' : 'shadow-xl';

    const animation = settings.animationType === 'scale' ? 'hover:scale-105' :
                     settings.animationType === 'glow' ? '' :
                     settings.animationType === 'pulse' ? 'animate-pulse' :
                     settings.animationType === 'shimmer' ? '' : '';

    return `className="px-${Math.round(settings.paddingX/4)} py-${Math.round(settings.paddingY/4)} ${rounded} font-medium text-${settings.fontSize >= 16 ? 'base' : 'sm'} ${shadow} ${animation ? `hover:${animation}` : ''} transition-all duration-200" style={{ backgroundColor: '${bgColor}', color: '${textColor}', fontWeight: ${fontWeight} }}`;
  };

  const generateReact = () => {
    return `<Button
  className="custom-button"
  style={{
    backgroundColor: '${settings.backgroundColor}',
    color: '${settings.textColor}',
    borderRadius: '${settings.borderRadius}px',
    padding: '${settings.paddingY}px ${settings.paddingX}px',
    fontSize: '${settings.fontSize}px',
    fontWeight: ${fontWeight},
  }}
>
  Custom Button
</Button>`;
  };

  const previewContent = (settings: BaseCustomizationSettings) => (
    <Button
      className="font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
        borderRadius: `${settings.borderRadius}px`,
        padding: `${settings.paddingY}px ${settings.paddingX}px`,
        fontSize: `${settings.fontSize}px`,
        fontWeight: fontWeight,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Custom Button
    </Button>
  );

  const customFields = (
    <div className="space-y-2">
      <Label>Font Weight: {fontWeight}</Label>
      <Slider
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0] ?? fontWeight)}
        max={700}
        min={300}
        step={100}
        className="w-full"
      />
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Your Buttons"
      description="Create and customize button designs with interactive controls and live preview."
      baseSettings={settings}
      onSettingsChange={handleSettingsChange}
      customFields={customFields}
      previewContent={previewContent}
      codeGenerators={{
        css: generateCSS,
        tailwind: generateTailwind,
        react: generateReact,
      }}
      additionalOptions={
        <div className="space-y-2">
          <Label>Border Style</Label>
          <select className="w-full p-2 border rounded">
            <option>None</option>
            <option>Solid</option>
            <option>Dashed</option>
            <option>Dotted</option>
            <option>Gradient</option>
          </select>
        </div>
      }
    />
  );
}
