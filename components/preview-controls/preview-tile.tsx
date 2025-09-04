// components/preview-tile.tsx
'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Code2, Settings, Play, Pause, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewContext, CustomizationSettings } from '@/components/preview-controls/preview-context';
import PreviewCustomizationPanel, { FieldConfig } from '@/components/preview-controls/preview-customization-panel';
import { usePreviewTileExpansion } from '@/components/preview-controls/preview-surface';
import { CodeHighlighter } from '@/components/code/code-highlighter';

export interface PreviewTileProps {
  title: string;
  description: string;
  componentName: string;
  children: (customization: Partial<CustomizationSettings>) => React.ReactNode;
  code: string;
  customFields: FieldConfig[];
  initialCustomization: Partial<CustomizationSettings>;
  className?: string;
}

export function PreviewTile({
  title,
  description,
  componentName,
  children,
  code,
  customFields,
  initialCustomization,
  className,
}: PreviewTileProps) {
  const { state: globalState, setPlaying } = usePreviewContext();
  const { expandedTile, setExpandedTile } = usePreviewTileExpansion();

  // Local state for this tile's specific customizations
  const [localCustomization, setLocalCustomization] = React.useState(initialCustomization);

  const [showCode, setShowCode] = React.useState(false);
  const isExpanded = expandedTile === title;

  const handleExpand = () => {
    setExpandedTile(current => (current === title ? null : title));
    setShowCode(false);
  };

  const handleShowCode = () => {
    setShowCode(current => !current);
    if (!isExpanded) {
      setExpandedTile(title);
    }
  };

  const resetTileCustomization = () => {
    setLocalCustomization(initialCustomization);
  };

  // The child component receives a merge of global and local state
  const mergedCustomization = { ...globalState.customization, ...localCustomization };

  return (
    <motion.div layout className={cn("transition-all duration-500", isExpanded ? 'col-span-full' : 'lg:col-span-1')}>
      <Card className={cn("overflow-hidden w-full", className)}>
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="space-y-1">
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{componentName}</CardDescription>
            </div>
            {/* ... (Tooltip and Button controls remain the same) ... */}
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative flex items-center justify-center p-8 min-h-[200px]" style={{ backgroundColor: mergedCustomization.backgroundColor }}>
            {children(mergedCustomization)}
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t"
              >
                {showCode ? (
                  <CodeHighlighter language="tsx" code={code} />
                ) : (
                  <PreviewCustomizationPanel
                    fields={customFields}
                    currentSettings={localCustomization}
                    onSettingsChange={setLocalCustomization}
                    actions={<Button size="sm" variant="outline" onClick={resetTileCustomization}>Reset Tile</Button>}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}