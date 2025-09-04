'use client';

import { useState } from "react";
import { BaseCustomizerComponent, defaultBaseSettings, type BaseCustomizationSettings } from "@/components/base-customizer";

export default function CustomizeResponsiveDesignPage() {
  const [settings, setSettings] = useState(defaultBaseSettings);
  const [breakpoint, setBreakpoint] = useState('desktop');

  const handleSettingsChange = (newSettings: BaseCustomizationSettings) => {
    setSettings(newSettings);
  };

  const previewContent = (settings: BaseCustomizationSettings) => (
    <div className="w-full h-32 rounded-lg flex items-center justify-center">
      <div
        className={`rounded-lg flex items-center justify-center text-center w-48 h-24 ${
          breakpoint === 'mobile' ? 'w-32 h-16' :
          breakpoint === 'tablet' ? 'w-64 h-20' :
          'w-80 h-32'
        }`}
        style={{
          backgroundColor: settings.backgroundColor,
          color: settings.textColor,
          padding: `${settings.paddingY}px ${settings.paddingX}px`,
          borderRadius: `${settings.borderRadius}px`,
          fontSize: `${settings.fontSize}px`,
        }}
      >
        <div className="text-xs">
          {breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)} View
        </div>
      </div>
    </div>
  );

  const customFields = (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Breakpoint</label>
        <select
          value={breakpoint}
          onChange={(e) => setBreakpoint(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="mobile">Mobile (320px)</option>
          <option value="tablet">Tablet (768px)</option>
          <option value="desktop">Desktop (1024px)</option>
        </select>
      </div>
    </div>
  );

  return (
    <BaseCustomizerComponent
      title="Customize Responsive Design"
      description="Create and customize responsive layouts with breakpoint-specific controls."
      baseSettings={settings}
      onSettingsChange={handleSettingsChange}
      customFields={customFields}
      previewContent={previewContent}
    />
  );
}