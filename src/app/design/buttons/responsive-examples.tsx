"use client";

import { PreviewTile } from "@/components/preview/preview-tile";
import { PreviewGrid } from "@/components/preview/preview-grid";
import { Smartphone, Tablet, Monitor, ChevronDown } from "lucide-react";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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

export default function ResponsiveButtonExamplesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Responsive Button Examples</h1>
        <p className="text-muted-foreground">
          Modern responsive button designs that adapt seamlessly across all device sizes using mobile-first principles.
        </p>
      </div>

      <PreviewGrid>
        <PreviewTile
          title="Mobile-First Design"
          description="Starts mobile, scales up"
          componentName="mobile-first-button"
          code={`const MobileFirstButton = ({ children, ...props }) => (
  <button
    className={
      w-full px-4 py-3 text-sm font-medium rounded-lg
      bg-blue-600 text-white hover:bg-blue-700
      sm:w-auto sm:px-6 sm:text-base
      md:px-8 md:py-4 md:text-lg
      transition-all duration-300
      \${props.className || ''}
    }
    {...props}
  >
    {children}
  </button>
);`}
          children={<MobileFirstButton>Responsive Button</MobileFirstButton>}
        />

        <PreviewTile
          title="Responsive Button Group"
          description="Stacked on mobile, horizontal on desktop"
          componentName="responsive-button-group"
          code={`const ResponsiveButtonGroup = ({ buttons, className = "" }) => (
  <div className={\`flex flex-col gap-3 w-full sm:flex-row sm:w-auto sm:gap-2 \${className}\`}>
    {buttons.map((label, index) => (
      <button
        key={index}
        className={\`
          px-6 py-3 rounded-lg font-medium transition-all duration-300
          w-full sm:w-auto sm:flex-1 md:flex-initial
          \${
            index === 0
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : index === 1
              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
              : 'text-gray-700 hover:bg-gray-50 border border-gray-300'
          }
        \`}
      >
        {label}
      </button>
    ))}
  </div>
);`}
          children={<ResponsiveButtonGroup />}
        />

        <PreviewTile
          title="Adaptive Icon Button"
          description="Icon and text scale together"
          componentName="adaptive-icon-button"
          code={`const AdaptiveIconButton = ({ children, icon: Icon, ...props }) => (
  <button
    className={\`
      flex items-center justify-center gap-2
      px-4 py-3 rounded-lg font-medium
      bg-green-600 text-white hover:bg-green-700
      transition-all duration-300
      w-full sm:w-auto
      \${props.className || ''}
    \`}
    {...props}
  >
    {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
    <span className="text-sm sm:text-base">{children}</span>
  </button>
);`}
          children={<AdaptiveIconButton icon={ Smartphone }>
            Download App
          </AdaptiveIconButton>}
        />

        <PreviewTile
          title="Collapsible Button Menu"
          description="Dropdown on mobile, horizontal on desktop"
          componentName="collapsible-button-menu"
          code={`const CollapsibleButtonMenu = ({ items, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={\`relative \${className}\`}>
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
          children={<CollapsibleButtonMenu />}
        />
      </PreviewGrid>

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

        <div className="mt-6">
          <h4 className="font-medium mb-2">Example Configuration (tailwind.config.js)</h4>
          <div className="relative">
            <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-4 text-sm text-gray-100">
{`// tailwind.config.js
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
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}