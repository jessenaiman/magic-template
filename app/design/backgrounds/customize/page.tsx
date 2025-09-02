'use client';

import { useState } from "react";
import { BaseCustomizerComponent, defaultBaseSettings, type BaseCustomizationSettings } from "@/components/design/base-customizer";

export default function CustomizeBackgroundsPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);
  const [backgroundType, setBackgroundType] = useState('solid');

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const generateCSS = () => `.custom-background {
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  padding: ${settings.paddingY}px ${settings.paddingX}px;
  border-radius: ${settings.borderRadius}px;
  box-shadow: ${settings.shadowStyle === 'none' ? 'none' :
             settings.shadowStyle === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'medium' ? '0 4px 6px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'large' ? '0 10px 15px rgba(0,0,0,0.1)' :
             '0 20px 25px rgba(0,0,0,0.1)'};
  background:
    ${backgroundType === 'gradient' ? `linear-gradient(135deg, ${settings.backgroundColor} 0%, #ffffff 100%)` :
      backgroundType === 'pattern' ? `repeating-linear-gradient(45deg, ${settings.backgroundColor}, ${settings.backgroundColor} 10px, transparent 10px, transparent 20px)` :
      backgroundType === 'texture' ? `${settings.backgroundColor} url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="3" fill="${settings.textColor}" opacity="0.2"/><circle cx="75" cy="25" r="3" fill="${settings.textColor}" opacity="0.2"/><circle cx="25" cy="75" r="3" fill="${settings.textColor}" opacity="0.2"/><circle cx="75" cy="75" r="3" fill="${settings.textColor}" opacity="0.2"/></svg>')` :
      settings.backgroundColor};
  transition: all 0.2s ease;
}

.custom-background:hover {
  ${settings.animationType === 'scale' ? 'transform: scale(1.05);' :
    settings.animationType === 'glow' ? 'box-shadow: 0 0 30px rgba(59,130,246,0.5);' : ''}
}`;

  const generateTailwind = () => {
    const rounded = settings.borderRadius <= 4 ? 'rounded' :
                   settings.borderRadius <= 8 ? 'rounded-md' :
                   settings.borderRadius <= 12 ? 'rounded-lg' : 'rounded-xl';
    const shadow = settings.shadowStyle === 'none' ? '' :
                   settings.shadowStyle === 'subtle' ? 'shadow-sm' :
                   settings.shadowStyle === 'medium' ? 'shadow-md' :
                   settings.shadowStyle === 'large' ? 'shadow-lg' : 'shadow-xl';

    let bgClasses = '';
    if (backgroundType === 'gradient') {
      bgClasses = `bg-gradient-to-br from-[${settings.backgroundColor}] to-white`;
    } else if (backgroundType === 'pattern') {
      bgClasses = `bg-[repeating-linear-gradient(45deg,${settings.backgroundColor},${settings.backgroundColor}_10px,transparent_10px,transparent_20px)]`;
    } else {
      bgClasses = `bg-[${settings.backgroundColor}]`;
    }

    return `className="px-${Math.round(settings.paddingX/4)} py-${Math.round(settings.paddingY/4)} ${rounded} ${bgClasses} ${shadow || ''} text-[${settings.textColor}] transition-all duration-200"`;
  };

  const generateReact = () => `<div
  className="custom-background w-full h-64 rounded-lg p-8"
  style={{
    backgroundColor: '${settings.backgroundColor}',
    color: '${settings.textColor}',
    padding: '${settings.paddingY}px ${settings.paddingX}px',
  }}
>
  <h2 className="text-2xl font-bold">${settings.textColor === '#ffffff' ? 'Light' : 'Dark'} Background</h2>
  <p className="mt-4 opacity-80">Custom background component with sophisticated styling.</p>
</div>`;

  const previewContent = (settings: BaseCustomizationSettings) => (
    <div
      className="w-full h-32 rounded-lg p-4 flex items-center justify-center transition-all duration-200 border"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
        padding: `${settings.paddingY}px ${settings.paddingX}px`,
        borderRadius: `${settings.borderRadius}px`,
        boxShadow: settings.shadowStyle === 'none' ? 'none' :
                settings.shadowStyle === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' :
                settings.shadowStyle === 'medium' ? '0 4px 6px rgba(0,0,0,0.1)' :
                settings.shadowStyle === 'large' ? '0 10px 15px rgba(0,0,0,0.1)' :
                '0 20px 25px rgba(0,0,0,0.1)',
      }}
    >
      <div className="text-center">
        <h3 className="font-medium">Custom Background</h3>
        <p className="text-sm opacity-70">Preview area</p>
      </div>
    </div>
  );

  const customFields = (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Background Type</label>
        <select
          value={backgroundType}
          onChange={(e) => setBackgroundType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="solid">Solid Color</option>
          <option value="gradient">Gradient</option>
          <option value="pattern">Pattern</option>
          <option value="texture">Texture</option>
        </select>
      </div>
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Your Backgrounds"
      description="Create and customize background designs with interactive controls and live preview."
      baseSettings={settings}
      onSettingsChange={handleSettingsChange}
      customFields={customFields}
      previewContent={previewContent}
      codeGenerators={{
        css: generateCSS,
        tailwind: generateTailwind,
        react: generateReact,
      }}
    />
  );
}