'use client';

import { useState } from 'react';
import { PreviewTile } from '@/components/preview/preview-tile';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Switch } from '@/components/ui/switch';

export default function ShadCNTextPage() {
  const [isBold] = useState(false);
  const [isItalic] = useState(false);
  const [textSize] = useState<'sm' | 'base' | 'lg' | 'xl' | '2xl'>('base');

  const textSizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  } as const;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          ShadCN UI Text Components
        </h2>
        <p className="text-muted-foreground">
          Text components built with ShadCN UI. These examples demonstrate how
          to use and customize ShadCN's text-related components with proper
          accessibility and styling.
        </p>
      </div>

      {/* Typography Showcase */}
      <PreviewTile
        title="Typography System"
        description="Comprehensive typography system using ShadCN UI components with proper semantic HTML and responsive sizing."
        componentName="TypographySystem"
        code={`<div class="space-y-4">
  <h1 class="text-4xl font-bold">Heading 1</h1>
  <h2 class="text-3xl font-semibold">Heading 2</h2>
  <h3 class="text-2xl font-medium">Heading 3</h3>
  <p class="text-base">This is a paragraph demonstrating the text styling capabilities.</p>
</div>`}
        initialCustomization={{
          backgroundColor: '#ffffff',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 16,
        }}
      >
        {customization => (
          <div className="space-y-4">
            <h1
              className={`text-4xl font-bold ${isBold ? 'font-black' : ''} ${isItalic ? 'italic' : ''}`}
            >
              Heading 1
            </h1>
            <h2
              className={`text-3xl font-semibold ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''}`}
            >
              Heading 2
            </h2>
            <h3
              className={`text-2xl font-medium ${isBold ? 'font-semibold' : ''} ${isItalic ? 'italic' : ''}`}
            >
              Heading 3
            </h3>
            <p
              className={`${textSizeClasses[textSize]} ${isBold ? 'font-medium' : ''} ${isItalic ? 'italic' : ''}`}
            >
              This is a paragraph demonstrating the text styling capabilities.
              ShadCN UI provides excellent typography foundations with proper
              contrast and accessibility.
            </p>
          </div>
        )}
      </PreviewTile>

      {/* Badge Collection */}
      <PreviewTile
        title="Badge Variants"
        description="Collection of badge components demonstrating different styles and usage patterns for text labels."
        componentName="BadgeCollection"
        code={`<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Default</span>
  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary</span>
  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">Destructive</span>
  <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Outline</span>
</div>`}
        initialCustomization={{
          backgroundColor: '#f8fafc',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 14,
        }}
      >
        {customization => (
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        )}
      </PreviewTile>

      {/* Form Text Elements */}
      <PreviewTile
        title="Form Text Elements"
        description="Text-related form components including labels, inputs, and textareas with proper accessibility."
        componentName="FormTextElements"
        code={`<div class="space-y-4">
  <div class="space-y-2">
    <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
    <input id="name" placeholder="Enter your name" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
  </div>
  <div class="space-y-2">
    <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>
    <input id="email" type="email" placeholder="email@example.com" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
  </div>
  <div class="space-y-2">
    <label for="message" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
    <textarea id="message" placeholder="Type your message here..." class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
  </div>
</div>`}
        initialCustomization={{
          backgroundColor: '#ffffff',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 14,
        }}
      >
        {customization => (
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
        )}
      </PreviewTile>

      {/* Interactive Text Cards */}
      <PreviewTile
        title="Text Cards"
        description="Card components with text content demonstrating different text styles and layouts."
        componentName="TextCards"
        code={`<div class="grid gap-4">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Informational Card</h3>
      <p class="text-sm text-muted-foreground">This card contains descriptive text with proper hierarchy</p>
    </div>
    <div class="p-6 pt-0">
      <p class="text-sm text-muted-foreground">Cards are excellent for organizing text content with clear visual hierarchy and proper spacing between different text elements.</p>
    </div>
  </div>
</div>`}
        initialCustomization={{
          backgroundColor: '#f8fafc',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 14,
        }}
      >
        {customization => (
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
                  Cards are excellent for organizing text content with clear
                  visual hierarchy and proper spacing between different text
                  elements.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </PreviewTile>

      {/* Text with Actions */}
      <PreviewTile
        title="Text with Actions"
        description="Text elements combined with interactive components like buttons and switches."
        componentName="TextWithActions"
        code={`<div class="space-y-4">
  <div class="flex items-center justify-between">
    <label for="notifications" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Enable Notifications</label>
    <button role="switch" aria-checked="false" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"></button>
  </div>
  <div class="flex items-center justify-between">
    <span class="text-sm">Dark Mode</span>
    <button role="switch" aria-checked="false" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"></button>
  </div>
  <div class="flex items-center gap-2">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">Learn More</button>
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">Get Started</button>
  </div>
</div>`}
        initialCustomization={{
          backgroundColor: '#ffffff',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 14,
        }}
      >
        {customization => (
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
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        )}
      </PreviewTile>

      {/* Status Messages */}
      <PreviewTile
        title="Status Messages"
        description="Text-based status indicators and messages with appropriate styling and icons."
        componentName="StatusMessages"
        code={`<div class="space-y-3">
  <div class="flex items-center gap-2 text-green-600">
    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
    <span class="text-sm">Online - System is operational</span>
  </div>
  <div class="flex items-center gap-2 text-yellow-600">
    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
    <span class="text-sm">Warning - Maintenance scheduled</span>
    </div>
  )}
  <div class="flex items-center gap-2 text-red-600">
    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
    <span class="text-sm">Error - Service disruption</span>
  </div>
  <div class="flex items-center gap-2 text-blue-600">
    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
    <span class="text-sm">Info - New features available</span>
  </div>
</div>`}
        initialCustomization={{
          backgroundColor: '#f8fafc',
          textColor: '#000000',
          borderRadius: 12,
          padding: 24,
          fontSize: 14,
        }}
      >
        {customization => (
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
        )}
      </PreviewTile>
    </div>
  );
}
