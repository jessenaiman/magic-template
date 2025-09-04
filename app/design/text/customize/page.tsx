'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/preview-controls/preview-tile";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function CustomizeTextPage() {
  const [textContent, setTextContent] = useState('Customize Me!');
  const [fontSize, setFontSize] = useState(24);
  const [fontWeight, setFontWeight] = useState(600);
  const [textColor, setTextColor] = useState('#ffffff');
  const [backgroundColor, setBackgroundColor] = useState('#1a1a1a');
  const [animationType, setAnimationType] = useState('gradient');
  const [animationSpeed, setAnimationSpeed] = useState(2);
  const [enableShadow, setEnableShadow] = useState(true);

  const animationStyles = {
    gradient: {
      background: `linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ff6b6b)`,
      backgroundSize: '300% 300%',
      animation: `gradientShift ${8 / animationSpeed}s ease infinite`
    },
    glow: {
      textShadow: enableShadow ? `0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor` : 'none',
      animation: `pulseGlow ${3 / animationSpeed}s infinite alternate`
    },
    bounce: {
      animation: `bounce ${2 / animationSpeed}s infinite`
    },
    fade: {
      animation: `fadeInOut ${4 / animationSpeed}s infinite alternate`
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Text Customization Playground</h2>
        <p className="text-muted-foreground">
          Interactive playground for customizing text components. Experiment with different
          properties and see how they affect the text styling and animations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customization Controls */}
        <div className="space-y-6">
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="text-lg font-semibold mb-4">Text Properties</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="textContent">Text Content</Label>
                <Input
                  id="textContent"
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                  placeholder="Enter text to animate"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fontSize">Font Size: {fontSize}px</Label>
                <Slider
                  id="fontSize"
                  min={12}
                  max={72}
                  step={2}
                  value={[fontSize]}
                  onValueChange={([value]) => setFontSize(value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fontWeight">Font Weight: {fontWeight}</Label>
                <Slider
                  id="fontWeight"
                  min={100}
                  max={900}
                  step={100}
                  value={[fontWeight]}
                  onValueChange={([value]) => setFontWeight(value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="textColor">Text Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="textColor"
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-8 p-1"
                    />
                    <Input
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-8 p-1"
                    />
                    <Input
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6 bg-card">
            <h3 className="text-lg font-semibold mb-4">Animation Settings</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="animationType">Animation Type</Label>
                <Select value={animationType} onValueChange={setAnimationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select animation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradient">Gradient Shift</SelectItem>
                    <SelectItem value="glow">Glow Effect</SelectItem>
                    <SelectItem value="bounce">Bounce</SelectItem>
                    <SelectItem value="fade">Fade In/Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="animationSpeed">Animation Speed: {animationSpeed}x</Label>
                <Slider
                  id="animationSpeed"
                  min={0.5}
                  max={4}
                  step={0.5}
                  value={[animationSpeed]}
                  onValueChange={([value]) => setAnimationSpeed(value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="enableShadow" className="cursor-pointer">
                  Enable Shadow Effects
                </Label>
                <Switch
                  id="enableShadow"
                  checked={enableShadow}
                  onCheckedChange={setEnableShadow}
                />
              </div>

              <Button
                onClick={() => {
                  setTextContent('Customize Me!');
                  setFontSize(24);
                  setFontWeight(600);
                  setTextColor('#ffffff');
                  setBackgroundColor('#1a1a1a');
                  setAnimationType('gradient');
                  setAnimationSpeed(2);
                  setEnableShadow(true);
                }}
                variant="outline"
                className="w-full"
              >
                Reset to Defaults
              </Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <PreviewTile
          title="Live Customization Preview"
          description="Real-time preview of your text customization with interactive controls."
          componentName="TextCustomizer"
          category="text"
          designSystem="reactbits"
          initialCustomization={{
            backgroundColor: backgroundColor,
            textColor: textColor,
            borderRadius: 12,
            padding: 32,
            fontSize: fontSize
          }}
          alwaysShowCustomization={true}
        >
          <div
            className="text-center"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              color: textColor,
              ...animationStyles[animationType as keyof typeof animationStyles]
            }}
          >
            {textContent}
          </div>
        </PreviewTile>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulseGlow {
          0% { opacity: 0.8; text-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
          100% { opacity: 1; text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-8px); }
          70% { transform: translateY(-4px); }
          90% { transform: translateY(-2px); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}