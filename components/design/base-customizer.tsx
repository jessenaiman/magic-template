'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Base customizable settings that all design components should have
export interface BaseCustomizationSettings {
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  paddingX: number;
  paddingY: number;
  fontSize: number;
  shadowStyle: string;
  animationType: string;
}

export const defaultBaseSettings: BaseCustomizationSettings = {
  backgroundColor: '#2563eb',
  textColor: '#ffffff',
  borderRadius: 6,
  paddingX: 16,
  paddingY: 12,
  fontSize: 14,
  shadowStyle: 'none',
  animationType: 'none',
};

interface BaseCustomizerProps {
  title: string;
  description: string;
  baseSettings: BaseCustomizationSettings;
  onSettingsChange: (settings: BaseCustomizationSettings) => void;
  customFields?: React.ReactNode;
  previewContent: (settings: BaseCustomizationSettings) => React.ReactNode;
  codeGenerators?: {
    css?: (settings: BaseCustomizationSettings) => string;
    tailwind?: (settings: BaseCustomizationSettings) => string;
    react?: (settings: BaseCustomizationSettings) => string;
  };
  additionalOptions?: React.ReactNode;
}

export function BaseCustomizerComponent({
  title,
  description,
  baseSettings: initialSettings,
  onSettingsChange,
  customFields,
  previewContent,
  codeGenerators,
  additionalOptions,
}: BaseCustomizerProps) {
  const [settings, setSettings] = useState<BaseCustomizationSettings>(initialSettings);

  const updateSettings = (updates: Partial<BaseCustomizationSettings>) => {
    const newSettings = { ...settings, ...updates };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const generateTailwindClasses = () => {
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

    return `className="px-${Math.round(settings.paddingX/4)} py-${Math.round(settings.paddingY/4)} ${rounded} font-medium text-${settings.fontSize >= 16 ? 'base' : 'sm'} ${shadow} ${animation ? `hover:${animation}` : ''} transition-all duration-200"`;
  };

  const generateCSS = () => `.custom-component {
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: ${settings.paddingY}px ${settings.paddingX}px;
  font-size: ${settings.fontSize}px;
  box-shadow: ${settings.shadowStyle === 'none' ? 'none' : settings.shadowStyle === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' : settings.shadowStyle === 'medium' ? '0 4px 6px rgba(0,0,0,0.1)' : settings.shadowStyle === 'large' ? '0 10px 15px rgba(0,0,0,0.1)' : '0 20px 25px rgba(0,0,0,0.1)'};
  transition: all 0.2s ease;
}

.custom-component:hover {
  ${settings.animationType === 'scale' ? 'transform: scale(1.05);' : ''}
  ${settings.animationType === 'glow' ? 'box-shadow: 0 0 30px rgba(var(--primary), 0.5);' : ''}
}`;

  const generateReact = () => `<div
  className="custom-component"
  style={{
    backgroundColor: '${settings.backgroundColor}',
    color: '${settings.textColor}',
    borderRadius: '${settings.borderRadius}px',
    padding: '${settings.paddingY}px ${settings.paddingX}px',
    fontSize: '${settings.fontSize}px',
  }}
>
  Custom Component
</div>`;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Component Customizer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {/* Base Color Fields */}
              <div className="space-y-2">
                <Label htmlFor="bg-color">Background Color</Label>
                <Input
                  id="bg-color"
                  type="color"
                  value={settings.backgroundColor}
                  onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
                  className="w-full h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-color">Text Color</Label>
                <Input
                  id="text-color"
                  type="color"
                  value={settings.textColor}
                  onChange={(e) => updateSettings({ textColor: e.target.value })}
                  className="w-full h-10"
                />
              </div>

              {/* Base Spacing/Size Fields */}
              <div className="space-y-2">
                <Label>Border Radius: {settings.borderRadius}px</Label>
                <Slider
                  value={[settings.borderRadius]}
                  onValueChange={(value) => updateSettings({ borderRadius: value[0] ?? settings.borderRadius })}
                  max={20}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Horizontal Padding: {settings.paddingX}px</Label>
                <Slider
                  value={[settings.paddingX]}
                  onValueChange={(value) => updateSettings({ paddingX: value[0] ?? settings.paddingX })}
                  max={32}
                  min={8}
                  step={2}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Vertical Padding: {settings.paddingY}px</Label>
                <Slider
                  value={[settings.paddingY]}
                  onValueChange={(value) => updateSettings({ paddingY: value[0] ?? settings.paddingY })}
                  max={24}
                  min={6}
                  step={2}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Font Size: {settings.fontSize}px</Label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => updateSettings({ fontSize: value[0] ?? settings.fontSize })}
                  max={24}
                  min={12}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Custom fields from extending component */}
              {customFields}
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold mb-3">Live Preview</h3>
              {previewContent(settings)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Generated Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {codeGenerators?.css && (
                <div>
                  <h4 className="text-sm font-medium mb-2">CSS</h4>
                  <CodeBlock code={codeGenerators.css(settings)} language="css" />
                </div>
              )}

              {codeGenerators?.tailwind && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Tailwind CSS</h4>
                  <CodeBlock code={codeGenerators.tailwind(settings)} language="html" />
                </div>
              )}

              {codeGenerators?.react && (
                <div>
                  <h4 className="text-sm font-medium mb-2">React/JSX</h4>
                  <CodeBlock code={codeGenerators.react(settings)} language="tsx" />
                </div>
              )}

              {/* Default generators if no custom ones provided */}
              {!codeGenerators && (
                <>
                  <div>
                    <h4 className="text-sm font-medium mb-2">CSS</h4>
                    <CodeBlock code={generateCSS()} language="css" />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Tailwind CSS</h4>
                    <CodeBlock code={`<div ${generateTailwindClasses()}>Custom Component</div>`} language="html" />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">React/JSX</h4>
                    <CodeBlock code={generateReact()} language="tsx" />
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Options */}
      {(additionalOptions || true) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Advanced Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label>Animation Type</Label>
                <select
                  className="w-full p-2 border rounded"
                  value={settings.animationType}
                  onChange={(e) => updateSettings({ animationType: e.target.value })}
                >
                  <option value="none">None</option>
                  <option value="scale">Hover Scale</option>
                  <option value="glow">Hover Glow</option>
                  <option value="pulse">Pulse</option>
                  <option value="shimmer">Shimmer</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Shadow Style</Label>
                <select
                  className="w-full p-2 border rounded"
                  value={settings.shadowStyle}
                  onChange={(e) => updateSettings({ shadowStyle: e.target.value })}
                >
                  <option value="none">None</option>
                  <option value="subtle">Subtle</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="glow">Glow</option>
                </select>
              </div>

              {/* Additional options from extending component */}
              {additionalOptions}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}