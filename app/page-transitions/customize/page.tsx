'use client';

import { useState } from "react";
import { BaseCustomizerComponent, defaultBaseSettings, type BaseCustomizationSettings } from "@/components/base-customizer";

export default function CustomizePageTransitionsPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);
  const [transitionType, setTransitionType] = useState('fade');

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const previewContent = (settings: BaseCustomizationSettings) => (
    <div className="w-full h-32 rounded-lg flex items-center justify-center">
      <div
        className="w-full h-full rounded-lg flex items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: settings.backgroundColor,
          color: settings.textColor,
          padding: `${settings.paddingY}px ${settings.paddingX}px`,
          borderRadius: `${settings.borderRadius}px`,
        }}
      >
        <div className="text-center">
          <h3 className="font-medium">{transitionType} Transition</h3>
          <p className="text-sm opacity-70">Click to animate</p>
        </div>
      </div>
    </div>
  );

  const customFields = (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Transition Type</label>
        <select
          value={transitionType}
          onChange={(e) => setTransitionType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="fade">Fade In/Out</option>
          <option value="slide">Slide</option>
          <option value="scale">Scale</option>
          <option value="rotate">Rotate</option>
          <option value="bounce">Bounce</option>
        </select>
      </div>
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Page Transitions"
      description="Create and customize page transition effects with smooth animations."
      baseSettings={settings}
      onSettingsChange={handleSettingsChange}
      customFields={customFields}
      previewContent={previewContent}
    />
  );
}