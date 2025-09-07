"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PreviewTile } from "@/components/preview/preview-tile";
import { Smartphone, Tablet, Monitor, ChevronDown } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Mobile-First Button
const MobileFirstButton = ({ children, className = "", ...props }: any) => (
  <button
    className={`
      w-full px-4 py-3 text-sm font-medium rounded-lg
      bg-blue-600 text-white
      hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
      sm:w-auto sm:px-6 sm:text-base
      md:px-8 md:py-4 md:text-lg
      transition-all duration-300
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// Stack to Horizontal Button Group
const ResponsiveButtonGroup = ({ buttons = ["Primary", "Secondary", "Tertiary"], className = "" }: any) => (
  <div className={`flex flex-col gap-3 w-full sm:flex-row sm:w-auto sm:gap-2 ${className}`}>
    {buttons.map((label: string, index: number) => (
      <button
        key={index}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all duration-300
          ${index === 0 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : index === 1
            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
            : 'text-gray-700 hover:bg-gray-50 border border-gray-300'
          }
          w-full sm:w-auto sm:flex-1 md:flex-initial
        `}
      >
        {label}
      </button>
    ))}
  </div>
);

// Adaptive Icon Button
const AdaptiveIconButton = ({ children, icon: Icon, className = "", ...props }: any) => (
  <button
    className={`
      flex items-center justify-center gap-2
      px-4 py-3 rounded-lg font-medium
      bg-green-600 text-white hover:bg-green-700
      transition-all duration-300
      w-full sm:w-auto
      ${className}
    `}
    {...props}
  >
    {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
    <span className="text-sm sm:text-base">{children}</span>
  </button>
);

// Collapsible Button Menu
const CollapsibleButtonMenu = ({ items = ["Option 1", "Option 2", "Option 3"], className = "" }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Mobile: Dropdown */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <span>Menu Options</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {items.map((item: string, index: number) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal buttons */}
      <div className="hidden sm:flex gap-2">
        {items.map((item: string, index: number) => (
          <button
            key={index}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

// Container Query Button
const ContainerQueryButton = ({ children, className = "", ...props }: any) => (
  <div className="@container w-full">
    <button
      className={`
        @xs:px-4 @xs:py-2 @xs:text-sm
        @sm:px-6 @sm:py-3 @sm:text-base
        @md:px-8 @md:py-4 @md:text-lg
        @lg:px-10 @lg:py-5 @lg:text-xl
        px-3 py-2 text-xs
        bg-indigo-600 text-white rounded-lg
        hover:bg-indigo-700 transition-all duration-300
        w-full
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  </div>
);

export default function ResponsiveButtonExamplesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Responsive Button Examples</h1>
        <p className="text-muted-foreground">
          Modern responsive button designs that adapt seamlessly across all device sizes using mobile-first principles.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Mobile-First Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Mobile-First Button
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Mobile-First Design"
              description="Starts mobile, scales up"
              componentName="mobile-first-button"
            >
              <div className="w-full max-w-md">
                <MobileFirstButton>
                  Responsive Button
                </MobileFirstButton>
              </div>
            </PreviewTile>
            <CodeBlock
              code={`const MobileFirstButton = ({ children, ...props }) => (
  <button
    className="
      w-full px-4 py-3 text-sm font-medium rounded-lg
      bg-blue-600 text-white hover:bg-blue-700
      sm:w-auto sm:px-6 sm:text-base
      md:px-8 md:py-4 md:text-lg
      transition-all duration-300
    "
    {...props}
  >
    {children}
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Responsive Button Group */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Tablet className="h-5 w-5" />
              Stack to Horizontal Group
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Responsive Button Group"
              description="Stacked on mobile, horizontal on desktop"
              componentName="responsive-button-group"
            >
              <div className="w-full max-w-md">
                <ResponsiveButtonGroup />
              </div>
            </PreviewTile>
            <CodeBlock
              code={`const ResponsiveButtonGroup = ({ buttons }) => (
  <div className="flex flex-col gap-3 w-full sm:flex-row sm:w-auto sm:gap-2">
    {buttons.map((label, index) => (
      <button
        key={index}
        className="
          px-6 py-3 rounded-lg font-medium transition-all duration-300
          w-full sm:w-auto sm:flex-1 md:flex-initial
          /* Variant styles based on index */
        "
      >
        {label}
      </button>
    ))}
  </div>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Adaptive Icon Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Adaptive Icon Sizing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Adaptive Icon Button"
              description="Icon and text scale together"
              componentName="adaptive-icon-button"
            >
              <div className="w-full max-w-md">
                <AdaptiveIconButton icon={Smartphone}>
                  Download App
                </AdaptiveIconButton>
              </div>
            </PreviewTile>
            <CodeBlock
              code={`const AdaptiveIconButton = ({ children, icon: Icon, ...props }) => (
  <button
    className="
      flex items-center justify-center gap-2
      px-4 py-3 rounded-lg font-medium
      bg-green-600 text-white hover:bg-green-700
      transition-all duration-300
      w-full sm:w-auto
    "
    {...props}
  >
    {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
    <span className="text-sm sm:text-base">{children}</span>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Collapsible Button Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Collapsible Menu Pattern</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Collapsible Button Menu"
              description="Dropdown on mobile, horizontal on desktop"
              componentName="collapsible-button-menu"
            >
              <div className="w-full max-w-md">
                <CollapsibleButtonMenu />
              </div>
            </PreviewTile>
            <CodeBlock
              code={`const CollapsibleButtonMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile: Dropdown */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <span>Menu Options</span>
          <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {items.map((item, index) => (
              <button key={index} className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0">
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal buttons */}
      <div className="hidden sm:flex gap-2">
        {items.map((item, index) => (
          <button key={index} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Responsive Design Best Practices</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Mobile-First Approach</h4>
            <p className="text-muted-foreground text-sm">
              Start with mobile styles and use <code className="bg-background px-2 py-1 rounded">sm:</code>, 
              <code className="bg-background px-2 py-1 rounded">md:</code>, 
              <code className="bg-background px-2 py-1 rounded">lg:</code> breakpoints to enhance for larger screens.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Touch-Friendly Targets</h4>
            <p className="text-muted-foreground text-sm">
              Ensure buttons are at least 44px (roughly 3rem) tall on mobile for comfortable tapping.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Container Queries</h4>
            <p className="text-muted-foreground text-sm">
              Use <code className="bg-background px-2 py-1 rounded">@container</code> queries for component-based responsive design 
              when available (requires Tailwind CSS container queries plugin).
            </p>
          </div>
        </div>
        
        <CodeBlock
          code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}`}
          language="javascript"
        />
      </div>
    </div>
  );
}

// Don't forget to import useState at the top
import React from "react";