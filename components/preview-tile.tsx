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
  const { state: globalState, updateCustomization } = usePreviewContext();
  const { expandedTile, setExpandedTile } = usePreviewTileExpansion();

  const [showCode, setShowCode] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);

  // Store initial customization in a ref to avoid stale closures
  const initialCustomizationRef = React.useRef(initialCustomization);

  // Merge global and component customization for rendering
  const customization = React.useMemo(() => {
    return {
      ...globalState.customization,
      ...initialCustomizationRef.current
    };
  }, [globalState.customization]);

  // Reset customization to initial values
  const handleReset = React.useCallback(() => {
    updateCustomization(initialCustomizationRef.current);
  }, [updateCustomization]);

  const handleExpand = () => {
    setExpandedTile(current => (current === title ? null : title));
    setShowCode(false);
  };

  const handleShowCode = () => {
    setShowCode(current => !current);
    setShowControls(false);
    if (!expandedTile) {
      setExpandedTile(title);
    }
  };

  const handleShowControls = () => {
    setShowControls(current => !current);
    setShowCode(false);
  };

  const handleLocalCustomization = (patch: Partial<CustomizationSettings>) => {
  };

  // The child component receives a merge of global and local state
  const mergedCustomization = { ...globalState.customization, ...initialCustomization };

  return (
    <div className={cn("group relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden", className)}>
      {/* Icon Bar */}
      <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={handleShowControls}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Customize</TooltipContent>
          </Tooltip>

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
                onClick={() => {}}
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
            {children(customization)}
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

      {/* Customization Panel */}
      <AnimatePresence>
        {showControls && customFields.length > 0 && (
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
              <div className="mt-4 flex justify-end">
                <Button size="sm" variant="outline" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code Panel */}
      <AnimatePresence>
        {showCode && (
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
              <pre className="rounded-lg bg-muted overflow-x-auto p-4">
                <code className="text-sm">
                  {code.replace(/\{([^}]+)\}/g, (_, key) => {
                    return customization[key] || key;
                  })}
                </code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}