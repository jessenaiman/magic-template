'use client';

import { useState } from "react";
import { BaseCustomizerComponent, defaultBaseSettings, type BaseCustomizationSettings } from "@/components/design/base-customizer";

export default function CustomizeEffectsPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);
  const [effectType, setEffectType] = useState('scale');

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const generateCSS = () => `.effect-component {
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  padding: ${settings.paddingY}px ${settings.paddingX}px;
  border-radius: ${settings.borderRadius}px;
  box-shadow: ${settings.shadowStyle === 'none' ? 'none' :
             settings.shadowStyle === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'medium' ? '0 4px 6px rgba(0,0,0,0.1)' :
             settings.shadowStyle === 'large' ? '0 10px 15px rgba(0,0,0,0.1)' :
             '0 20px 25px rgba(0,0,0,0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.effect-component:hover {
  ${effectType === 'scale' ? 'transform: scale(1.05)' :
    effectType === 'rotate' ? 'transform: rotate(5deg)' :
    effectType === 'bounce' ? 'transform: translateY(-10px)' :
    effectType === 'slide' ? 'transform: translateX(10px)' :
    effectType === 'glow' ? 'box-shadow: 0 0 30px rgba(59,130,246,0.5)' : ''}
}

${effectType === 'bounce' ? `
.effect-component:hover {
  animation: bounce 0.6s ease-in-out;
}
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}` : ''}`;

  const generateTailwind = () => {
    const rounded = settings.borderRadius <= 4 ? 'rounded' :
                   settings.borderRadius <= 8 ? 'rounded-md' :
                   settings.borderRadius <= 12 ? 'rounded-lg' : 'rounded-xl';
    const shadow = settings.shadowStyle === 'none' ? '' :
                   settings.shadowStyle === 'subtle' ? 'shadow-sm' :
                   settings.shadowStyle === 'medium' ? 'shadow-md' :
                   settings.shadowStyle === 'large' ? 'shadow-lg' : 'shadow-xl';

    let hoverEffect = '';
    switch (effectType) {
      case 'scale': hoverEffect = 'hover:scale-105'; break;
      case 'rotate': hoverEffect = 'hover:rotate-6'; break;
      case 'bounce': hoverEffect = 'hover:animate-bounce'; break;
      case 'slide': hoverEffect = 'hover:translate-x-3'; break;
      case 'glow': hoverEffect = 'hover:shadow-lg hover:shadow-blue-500/50'; break;
    }

    return `className="px-${Math.round(settings.paddingX/4)} py-${Math.round(settings.paddingY/4)} ${rounded} bg-[${settings.backgroundColor}] text-[${settings.textColor}] ${shadow || ''} ${hoverEffect} transition-all duration-300 cursor-pointer"`;
  };

  const generateReact = () => `<div
  className="effect-component"
  style={{
    backgroundColor: '${settings.backgroundColor}',
    color: '${settings.textColor}',
    padding: '${settings.paddingY}px ${settings.paddingX}px',
    borderRadius: '${settings.borderRadius}px',
  }}
>
  Effect Component
</div>`;

  const previewContent = (settings: BaseCustomizationSettings) => (
    <div
      className="w-full h-32 rounded-lg flex items-center justify-center border border-blue-200 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
        padding: `${settings.paddingY}px ${settings.paddingX}px`,
        borderRadius: `${settings.borderRadius}px`,
      }}
    >
      <div className="text-center">
        <h3 className="font-medium">{effectType} Effect</h3>
        <p className="text-sm opacity-70">Hover for effect</p>
      </div>
    </div>
  );

  const customFields = (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Effect Type</label>
        <select
          value={effectType}
          onChange={(e) => setEffectType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="scale">Scale</option>
          <option value="rotate">Rotate</option>
          <option value="bounce">Bounce</option>
          <option value="slide">Slide</option>
          <option value="glow">Glow</option>
        </select>
      </div>
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Effects"
      description="Create and customize hover and animation effects with interactive controls."
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