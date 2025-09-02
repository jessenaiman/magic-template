"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Palette, Play, Pause, RotateCcw, Settings, Code2, ExternalLink, Copy, Check } from "lucide-react";
import CodeHighlighter from "@/components/code/CodeHighlighter";
import Link from "next/link";

interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

interface PreviewTileProps {
  title: string;
  description: string;
  children: React.ReactNode;
  componentName: string;
  category?: string;
  codeExamples?: CodeExample[];
  installCommand?: string;
  documentationUrl?: string;
}

export function PreviewTile({
  title,
  description,
  children,
  componentName,
  category = "component",
  codeExamples = [],
  installCommand,
  documentationUrl
}: PreviewTileProps) {
  const [isRunning, setIsRunning] = useState(true);
  const [displayText, setDisplayText] = useState(title);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [customizationSettings, setCustomizationSettings] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderRadius: 6,
    padding: 16,
    fontSize: 14,
  });

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomizationSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleRestart = () => {
    setIsRunning(false);
    setDisplayText(title);
    setTimeout(() => setIsRunning(true), 500);
  };
  const handleChangeText = () => setDisplayText(displayText === title ? "Custom Text" : displayText === "Custom Text" ? "Updated" : title);

  const handleCopyCode = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Preview Card */}
      <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative">
  {/* Fixed controls menu */}
  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md p-1 border shadow-sm">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleRestart}>
            <RotateCcw className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleChangeText}>
            <Settings className="h-3 w-3" />
          </Button>
          {codeExamples.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Code2 className="h-3 w-3" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{title} - Implementation</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {installCommand && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium mb-2">Installation</div>
                      <div className="flex items-center justify-between bg-background rounded px-3 py-2">
                        <code className="text-sm">{installCommand}</code>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleCopyCode(installCommand, -1)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedIndex === -1 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {codeExamples.length === 1 ? (
                    <div className="space-y-2">
                      {codeExamples[0].title && (
                        <div className="text-sm font-medium text-muted-foreground">
                          {codeExamples[0].title}
                        </div>
                      )}
                      <div className="relative">
                        <CodeHighlighter
                          code={codeExamples[0].code}
                          language={codeExamples[0].language}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyCode(codeExamples[0].code, 0)}
                          className="absolute top-2 left-2 h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700"
                        >
                          {copiedIndex === 0 ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3 text-gray-300" />}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Tabs defaultValue={`${codeExamples[0].language}-0`} className="w-full">
                      <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${Math.min(codeExamples.length, 4)}, 1fr)` }}>
                        {codeExamples.map((example, index) => (
                          <TabsTrigger 
                            key={`${example.language}-${index}`} 
                            value={`${example.language}-${index}`}
                            className="text-xs"
                          >
                            {example.title || example.language.toUpperCase()}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {codeExamples.map((example, index) => (
                        <TabsContent key={`content-${example.language}-${index}`} value={`${example.language}-${index}`} className="mt-4">
                          <div className="relative">
                            <CodeHighlighter
                              code={example.code}
                              language={example.language}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyCode(example.code, index)}
                              className="absolute top-2 left-2 h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700"
                            >
                              {copiedIndex === index ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3 text-gray-300" />}
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
          {documentationUrl && (
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
              <Link href={documentationUrl} target="_blank">
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          )}
          {/* Storybook direct link for this component */}
          <Button
            variant="outline"
            size="sm"
            className="ml-1 px-2 py-1 flex items-center gap-1"
            asChild
          >
            <a
              href={`http://localhost:6006/?path=/docs/design-buttons-${componentName.toLowerCase()}--docs`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${componentName} in Storybook`}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">View in Storybook</span>
            </a>
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Palette className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 p-4">
                <h3 className="text-lg font-semibold">Customize {componentName}</h3>
                
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <Input
                    type="color"
                    value={customizationSettings.backgroundColor}
                    onChange={(e) => handleCustomizationChange('backgroundColor', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <Input
                    type="color"
                    value={customizationSettings.textColor}
                    onChange={(e) => handleCustomizationChange('textColor', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Border Radius: {customizationSettings.borderRadius}px</Label>
                  <Slider
                    value={[customizationSettings.borderRadius]}
                    onValueChange={(value) => handleCustomizationChange('borderRadius', value[0])}
                    min={0}
                    max={20}
                    step={1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Padding: {customizationSettings.padding}px</Label>
                  <Slider
                    value={[customizationSettings.padding]}
                    onValueChange={(value) => handleCustomizationChange('padding', value[0])}
                    min={8}
                    max={32}
                    step={2}
                  />
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCustomizationSettings({
                    backgroundColor: '#ffffff',
                    textColor: '#000000',
                    borderRadius: 6,
                    padding: 16,
                    fontSize: 14,
                  })}
                >
                  Reset to Defaults
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <CardContent className="flex flex-1 items-center justify-center bg-muted/30 p-8 rounded-md m-6 mt-8 min-h-[200px] max-h-[200px] overflow-hidden transition-all duration-300 relative">
          <div
            className="transition-all duration-300 transform absolute inset-0 flex items-center justify-center"
            style={{
              opacity: isRunning ? 1 : 0.5,
              backgroundColor: customizationSettings.backgroundColor,
              color: customizationSettings.textColor,
              borderRadius: `${customizationSettings.borderRadius}px`,
              padding: `${customizationSettings.padding}px`,
            }}
          >
            {children}
          </div>
          {/* Overlay component name */}
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded px-3 py-1 text-sm font-medium shadow-sm">
            {displayText}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}