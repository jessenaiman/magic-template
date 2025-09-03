'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/design/preview-tile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";

export default function ShadCNTextPage() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [textSize, setTextSize] = useState<'sm' | 'base' | 'lg' | 'xl' | '2xl'>('base');

  const textSizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  } as const;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">ShadCN UI Text Components</h2>
        <p className="text-muted-foreground">
          Text components built with ShadCN UI. These examples demonstrate how to use and customize
          ShadCN's text-related components with proper accessibility and styling.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Typography Showcase */}
        <PreviewTile
          title="Typography System"
          description="Comprehensive typography system using ShadCN UI components with proper semantic HTML and responsive sizing."
          componentName="TypographySystem"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#ffffff',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 16
          }}
          extraActions={
            <div className="flex gap-2">
              <Toggle
                pressed={isBold}
                onPressedChange={setIsBold}
                className="h-8 w-8 text-xs"
                aria-label="Toggle bold"
              >
                B
              </Toggle>
              <Toggle
                pressed={isItalic}
                onPressedChange={setIsItalic}
                className="h-8 w-8 text-xs italic"
                aria-label="Toggle italic"
              >
                I
              </Toggle>
              <select
                value={textSize}
                onChange={(e) => setTextSize(e.target.value as 'sm' | 'base' | 'lg' | 'xl' | '2xl')}
                className="px-2 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors text-white"
              >
                <option value="sm">Small</option>
                <option value="base">Base</option>
                <option value="lg">Large</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
              </select>
            </div>
          }
        >
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold ${isBold ? 'font-black' : ''} ${isItalic ? 'italic' : ''}`}>
              Heading 1
            </h1>
            <h2 className={`text-3xl font-semibold ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''}`}>
              Heading 2
            </h2>
            <h3 className={`text-2xl font-medium ${isBold ? 'font-semibold' : ''} ${isItalic ? 'italic' : ''}`}>
              Heading 3
            </h3>
            <p className={`${textSizeClasses[textSize]} ${isBold ? 'font-medium' : ''} ${isItalic ? 'italic' : ''}`}>
              This is a paragraph demonstrating the text styling capabilities. ShadCN UI provides
              excellent typography foundations with proper contrast and accessibility.
            </p>
          </div>
        </PreviewTile>

        {/* Badge Collection */}
        <PreviewTile
          title="Badge Variants"
          description="Collection of badge components demonstrating different styles and usage patterns for text labels."
          componentName="BadgeCollection"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#f8fafc',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 14
          }}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </PreviewTile>

        {/* Form Text Elements */}
        <PreviewTile
          title="Form Text Elements"
          description="Text-related form components including labels, inputs, and textareas with proper accessibility."
          componentName="FormTextElements"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#ffffff',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 14
          }}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
          </div>
        </PreviewTile>

        {/* Interactive Text Cards */}
        <PreviewTile
          title="Text Cards"
          description="Card components with text content demonstrating different text styles and layouts."
          componentName="TextCards"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#f8fafc',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 14
          }}
        >
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Informational Card</CardTitle>
                <CardDescription>
                  This card contains descriptive text with proper hierarchy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards are excellent for organizing text content with clear visual hierarchy
                  and proper spacing between different text elements.
                </p>
              </CardContent>
            </Card>
          </div>
        </PreviewTile>

        {/* Text with Actions */}
        <PreviewTile
          title="Text with Actions"
          description="Text elements combined with interactive components like buttons and switches."
          componentName="TextWithActions"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#ffffff',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 14
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <Switch />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </PreviewTile>

        {/* Status Messages */}
        <PreviewTile
          title="Status Messages"
          description="Text-based status indicators and messages with appropriate styling and icons."
          componentName="StatusMessages"
          category="text"
          designSystem="shadcn"
          initialCustomization={{
            backgroundColor: '#f8fafc',
            textColor: '#000000',
            borderRadius: 12,
            padding: 24,
            fontSize: 14
          }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Online - System is operational</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Warning - Maintenance scheduled</span>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm">Error - Service disruption</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Info - New features available</span>
            </div>
          </div>
        </PreviewTile>
      </div>
    </div>
  );
}