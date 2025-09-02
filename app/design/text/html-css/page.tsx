'use client'

import { PreviewCustomizeTile, defaultCustomizationSettings, type CustomizationSettings } from "@/components/design/preview-customize-tile";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function HtmlCssTextPage() {
  const [runningStates, setRunningStates] = useState<Record<string, boolean>>({});
  const [textStates, setTextStates] = useState<Record<string, string>>({});

  const handleRunningChange = (id: string, running: boolean) => {
    setRunningStates(prev => ({ ...prev, [id]: running }));
  };

  const handleTextChange = (id: string, text: string) => {
    setTextStates(prev => ({ ...prev, [id]: text }));
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">HTML/CSS Text Components</h1>
        <p className="text-muted-foreground">
          Explore text styling with HTML and CSS. These examples demonstrate font sizes, weights, colors,
          and interactive states such as hover effects, focus states, and link color changes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Font Size Variants */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Font Size Variants"
            componentName="TextSize"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['size'] ?? true}
            onRunningChange={(running) => handleRunningChange('size', running)}
            displayText={textStates['size'] ?? "Font Size Variants"}
            onTextChange={(text) => handleTextChange('size', text)}
          >
            <div className="space-y-2">
              <div className="text-xs">Extra Small (12px)</div>
              <div className="text-sm">Small (14px)</div>
              <div className="text-base">Base (16px)</div>
              <div className="text-lg">Large (18px)</div>
              <div className="text-xl">XL (20px)</div>
            </div>
          </PreviewCustomizeTile>
        </Card>

        {/* Font Weight Variants */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Font Weight Variants"
            componentName="TextWeight"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['weight'] ?? true}
            onRunningChange={(running) => handleRunningChange('weight', running)}
            displayText={textStates['weight'] ?? "Font Weight Variants"}
            onTextChange={(text) => handleTextChange('weight', text)}
          >
            <div className="space-y-2">
              <div className="font-light">Font Light (300)</div>
              <div className="font-normal">Font Normal (400)</div>
              <div className="font-medium">Font Medium (500)</div>
              <div className="font-semibold">Font Semibold (600)</div>
              <div className="font-bold">Font Bold (700)</div>
            </div>
          </PreviewCustomizeTile>
        </Card>

        {/* Interactive Link States */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Link States"
            componentName="TextLink"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['link'] ?? true}
            onRunningChange={(running) => handleRunningChange('link', running)}
            displayText={textStates['link'] ?? "Link States"}
            onTextChange={(text) => handleTextChange('link', text)}
          >
            <div className="space-y-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 focus:text-blue-900 transition-colors duration-200 block">
                Normal Link → Hover me!
              </a>
              <a href="#" className="text-green-600 hover:text-green-300 active:text-green-400 visited:text-purple-600 transition-all duration-200 block">
                Interactive Link (hover, active, visited)
              </a>
              <button className="text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-3 py-1 rounded transition-all duration-200">
                Click me (button hover & active)
              </button>
            </div>
          </PreviewCustomizeTile>
        </Card>

        {/* Color Variations */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Color Variations"
            componentName="TextColor"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['color'] ?? true}
            onRunningChange={(running) => handleRunningChange('color', running)}
            displayText={textStates['color'] ?? "Color Variations"}
            onTextChange={(text) => handleTextChange('color', text)}
          >
            <div className="space-y-2">
              <div className="text-red-500">Red Text</div>
              <div className="text-blue-600">Blue Text</div>
              <div className="text-green-600">Green Text</div>
              <div className="text-purple-700">Purple Text</div>
              <div className="text-orange-500">Orange Text</div>
              <div className="text-pink-500">Pink Text</div>
            </div>
          </PreviewCustomizeTile>
        </Card>

        {/* Text Decorations */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Text Decorations"
            componentName="TextDecoration"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['decoration'] ?? true}
            onRunningChange={(running) => handleRunningChange('decoration', running)}
            displayText={textStates['decoration'] ?? "Text Decorations"}
            onTextChange={(text) => handleTextChange('decoration', text)}
          >
            <div className="space-y-2">
              <p className="underline">Underlined Text</p>
              <p className="line-through">Strikethrough Text</p>
              <p className="overline">Overlined Text</p>
              <p className="underline decoration-2 decoration-blue-500">Double Underline</p>
              <p className="underline decoration-wavy decoration-red-500">Wavy Underline</p>
            </div>
          </PreviewCustomizeTile>
        </Card>

        {/* CSS Classes Interactive */}
        <Card className="p-4">
          <PreviewCustomizeTile
            title="Interactive States"
            componentName="TextInteractive"
            customizationSettings={defaultCustomizationSettings}
            onCustomizationChange={() => {}}
            isRunning={runningStates['interactive'] ?? true}
            onRunningChange={(running) => handleRunningChange('interactive', running)}
            displayText={textStates['interactive'] ?? "Interactive States"}
            onTextChange={(text) => handleTextChange('interactive', text)}
          >
            <div className="space-y-3">
              <div className="p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-200 rounded">
                Hover this area (background changes)
              </div>
              <div className="p-3 border-2 border-gray-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer rounded">
                Hover for border & shadow
              </div>
              <input
                type="text"
                placeholder="Focus this input"
                className="w-full p-2 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 rounded"
              />
            </div>
          </PreviewCustomizeTile>
        </Card>
      </div>
    </div>
  );
}