'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Code2, Settings, Play, Pause, Square, Share } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewContext, CustomizationSettings } from '@/components/preview-context';
import PreviewCustomizationPanel, { FieldConfig } from '@/components/preview-customization-panel';
import { usePreviewTileExpansion } from '@/components/design-page-context';
import { CodeHighlighter } from '@/components/code-highlighter';

export interface PreviewTileProps {
  title: string;
  description?: string;
  componentName: string;
  code: string;
  customFields?: FieldConfig[];
  initialCustomization?: Partial<CustomizationSettings>;
  children: (customization: Partial<CustomizationSettings>) => React.ReactNode;
  className?: string;
}

export function PreviewTile({
  title,
  description,
  componentName,
  code,
  customFields = [],
  initialCustomization = {},
  children,
  className,
}: PreviewTileProps) {
  const { expandedTile, setExpandedTile } = usePreviewTileExpansion();
  const [showCode, setShowCode] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);

  // Bind to global PreviewContext so page-wide controls affect tiles
  const { state } = usePreviewContext();
  const customization = React.useMemo<Partial<CustomizationSettings>>(
    () => ({ ...state.customization, ...initialCustomization }),
    [state.customization, initialCustomization]
  );

  const handleExpand = () => {
    setExpandedTile(current => (current === title ? null : title));
    setShowCode(false);
  };

  const handleShowCode = () => {
    setShowCode(current => !current);
    if (!expandedTile) {
      setExpandedTile(title);
    }
  };
  const handleToggleControls = () => {
    if (expandedTile !== title) setExpandedTile(title);
    setShowControls(c => !c);
    // If opening controls, don't force code panel open/closed
  };

  // The child component receives the effective customization state
  return (
      <div
        className={cn(
          "group relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300",
          expandedTile === title
            ? "z-20 col-span-full md:col-span-3 lg:col-span-3 scale-[1.03] ring-2 ring-primary"
            : "",
          className
        )}
        style={
          expandedTile === title
            ? { gridColumn: "1 / -1", position: "relative" }
            : undefined
        }
        onClick={() => {
          if (expandedTile !== title) setExpandedTile(title);
        }}
      >
      {/* Icon Bar */}
      <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <TooltipProvider>
          {/* Per-tile customization toggle */}
          {customFields.length > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={handleToggleControls}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Customize</TooltipContent>
            </Tooltip>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={handleShowCode}
              >
                <Code2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>View Code</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => {
                  if (navigator?.clipboard) {
                    navigator.clipboard.writeText(code);
                  }
                }}
              >
                <Share className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Preview Area */}
      <div className="aspect-[16/9] relative">
        <div className="absolute inset-0 p-6">
          <div className="h-full rounded-md border bg-background flex items-center justify-center overflow-hidden">
            {typeof children === 'function' 
              ? children(customization)
              : <div className="text-red-500">Error: children prop must be a function</div>
            }
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="p-6">
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Tile-level Customization Panel (expanded AND toggled) */}
      <AnimatePresence>
        {expandedTile === title && showControls && customFields.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t overflow-hidden"
          >
            <div className="p-6">
              <PreviewCustomizationPanel
                fields={customFields}
                title="Component Controls"
                className="border-none shadow-none p-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code Panel */}
      <AnimatePresence>
        {(showCode || expandedTile === title) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  {componentName}.tsx
                </span>
              </div>
              <CodeHighlighter
                language="tsx"
                code={code.replace(/\{([^}]+)\}/g, (_, key) => customization[key] || key)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
}