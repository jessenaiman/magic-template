'use client';

import { useState } from "react";
import { BaseCustomizerComponent, defaultBaseSettings, type BaseCustomizationSettings } from "@/components/design/base-customizer";

export default function CustomizeTextPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);
  const [textStyle, setTextStyle] = useState('bold');

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const previewContent = (settings: BaseCustomizationSettings) => (
    <div className="w-full h-32 rounded-lg flex items-center justify-center">
      <div
        className="w-full h-full rounded-lg flex items-center justify-center text-center"
        style={{
          backgroundColor: settings.backgroundColor,
          color: settings.textColor,
          padding: `${settings.paddingY}px ${settings.paddingX}px`,
          borderRadius: `${settings.borderRadius}px`,
          fontSize: `${settings.fontSize}px`,
          fontWeight: 'bold',
        }}
      >
        <div>
          <h2 className="font-bold">{textStyle} Text</h2>
          <p className="text-sm opacity-70 mt-2">Sample text styling</p>
        </div>
      </div>
    </div>
  );

  const customFields = (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Text Style</label>
        <select
          value={textStyle}
          onChange={(e) => setTextStyle(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="bold">Bold</option>
          <option value="light">Light</option>
          <option value="italic">Italic</option>
          <option value="uppercase">Uppercase</option>
          <option value="underline">Underline</option>
        </select>
      </div>
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Text Styles"
      description="Create and customize typography with interactive controls and live preview."
      baseSettings={settings}
      onSettingsChange={handleSettingsChange}
      customFields={customFields}
      previewContent={previewContent}
    />
  );
}