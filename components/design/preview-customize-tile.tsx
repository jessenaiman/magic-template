"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Label } from "@workspace/ui/components/label";
import { Input } from "@workspace/ui/components/input";
import { Slider } from "@workspace/ui/components/slider";
import { Popover, PopoverTrigger, PopoverContent } from "@workspace/ui/components/animate-ui/radix/popover";
import { Palette, Play, Pause, RotateCcw, Settings, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface CustomizationSettings {
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  padding: number;
  fontSize: number;
  fontWeight?: number;
  shadowIntensity?: number;
  linkStates?: {
    default: string;
    hover: string;
    active: string;
    visited: string;
  };
}

export interface PreviewCustomizeTileProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  componentName: string;
  category?: string;
  customizationSettings: CustomizationSettings;
  onCustomizationChange: (settings: CustomizationSettings) => void;
  isRunning: boolean;
  onRunningChange: (running: boolean) => void;
  displayText: string;
  onTextChange: (text: string) => void;
}

export function PreviewCustomizeTile({
  title,
  description,
  children,
  componentName,
  category = "component",
  customizationSettings,
  onCustomizationChange,
  isRunning,
  onRunningChange,
  displayText,
  onTextChange,
}: PreviewCustomizeTileProps) {
  const handleSettingChange = (key: keyof CustomizationSettings, value: any) => {
    onCustomizationChange({
      ...customizationSettings,
      [key]: value,
    });
  };

  const handleRestart = () => {
    onRunningChange(false);
    setTimeout(() => {
      onRunningChange(true);
      onTextChange(title);
    }, 500);
  };

  const handleChangeText = () => {
    onTextChange(
      displayText === title ? "Custom Text" :
      displayText === "Custom Text" ? "Updated" : title
    );
  };

  const resetToDefaults = () => {
    onCustomizationChange({
      backgroundColor: '#ffffff',
      textColor: '#000000',
      borderRadius: 6,
      padding: 16,
      fontSize: 14,
      shadowIntensity: 0,
    });
  };

  return (
    <div className="relative">
      {/* Enhanced overlay toolbar - sticks to top */}
      <div className="absolute top-3 left-3 right-3 z-20">
        <div className="flex justify-between items-center">
          {/* Component name label */}
          <div className="bg-background/95 backdrop-blur-md rounded-md px-3 py-2 shadow-lg border">
            <span className="text-sm font-semibold text-foreground">{displayText}</span>
          </div>

          {/* Control buttons */}
          <div className="flex items-center gap-1 bg-background/95 backdrop-blur-md rounded-md p-1 border shadow-lg">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => onRunningChange(!isRunning)}
            >
              {isRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleRestart}
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              asChild
            >
              <Link href={`/design/customize?component=${componentName}&category=${category}`}>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Popover trigger - palette icon */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-background/95 backdrop-blur-md shadow-lg border"
              >
                <Palette className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" side="bottom" align="center">
              <div className="space-y-4 p-4">
                <h3 className="text-lg font-semibold">Customize {componentName}</h3>

                {/* Basic Controls */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="bg-color">Background Color</Label>
                    <Input
                      id="bg-color"
                      type="color"
                      value={customizationSettings.backgroundColor}
                      onChange={(e) => handleSettingChange('backgroundColor', e.target.value)}
                      className="w-full h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="text-color">Text Color</Label>
                    <Input
                      id="text-color"
                      type="color"
                      value={customizationSettings.textColor}
                      onChange={(e) => handleSettingChange('textColor', e.target.value)}
                      className="w-full h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Border Radius: {customizationSettings.borderRadius}px</Label>
                    <Slider
                      value={[customizationSettings.borderRadius]}
                      onValueChange={(value) => handleSettingChange('borderRadius', value[0])}
                      min={0}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Padding: {customizationSettings.padding}px</Label>
                    <Slider
                      value={[customizationSettings.padding]}
                      onValueChange={(value) => handleSettingChange('padding', value[0])}
                      min={8}
                      max={32}
                      step={2}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Font Size: {customizationSettings.fontSize}px</Label>
                    <Slider
                      value={[customizationSettings.fontSize]}
                      onValueChange={(value) => handleSettingChange('fontSize', value[0])}
                      min={12}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <Button variant="outline" size="sm" onClick={resetToDefaults} className="w-full">
                  Reset to Defaults
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Preview content with full customization applied */}
      <div className="bg-muted/30 p-8 rounded-md m-6 mt-16 min-h-[200px] max-h-[200px] overflow-hidden transition-all duration-300 relative">
        <div
          className="transition-all duration-300 transform absolute inset-0 flex items-center justify-center"
          style={{
            opacity: isRunning ? 1 : 0.5,
            backgroundColor: customizationSettings.backgroundColor,
            color: customizationSettings.textColor,
            borderRadius: `${customizationSettings.borderRadius}px`,
            padding: `${customizationSettings.padding}px`,
            fontSize: `${customizationSettings.fontSize}px`,
            fontWeight: customizationSettings.fontWeight,
            boxShadow: customizationSettings.shadowIntensity
              ? `0 ${customizationSettings.shadowIntensity}px ${customizationSettings.shadowIntensity * 2}px rgba(0,0,0,0.1)`
              : 'none',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export const defaultCustomizationSettings: CustomizationSettings = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  borderRadius: 6,
  padding: 16,
  fontSize: 14,
  shadowIntensity: 0,
};
