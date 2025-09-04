// components/preview-tile.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Code2, Settings, Play, Pause, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewContext } from '@/components/preview-controls/preview-context';
import PreviewCustomizationPanel, { FieldConfig } from '@/components/preview-controls/preview-customization-panel';

export interface PreviewTileProps {
  title: string;
  description: string;
  componentName: string;
  category: 'text' | 'button' | 'card' | 'animation';
  children: React.ReactNode;
  installCommand?: string;
  initialCustomization?: Record<string, any>;
  customFields?: FieldConfig[];
  showAdvancedControls?: boolean;
  className?: string;
  containerClassName?: string;
  previewClassName?: string;
  isExpanded?: boolean;
  onExpand?: () => void;
}

export function PreviewTile({
  title,
  description,
  componentName,
  children,
  initialCustomization,
  customFields,
  isExpanded,
  onExpand,
  className
}: PreviewTileProps) {
  const { state, setPlaying } = usePreviewContext();

  const handleShowCode = () => {
    // In a real app, you would use a modal or a new view to show the code.
    // For this example, we'll just log it to the console.
    console.log(`
      // 1. Install dependencies
      // npm install ...

      // 2. Import the component
      import { ${componentName} } from '@/components/magicui/${componentName}';

      // 3. Use it in your component
      export default function MyComponent() {
        return (
          <${componentName} />
        );
      }
    `);
    alert('Code snippet logged to the console.');
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-300", 
      isExpanded ? 'col-span-full' : 'lg:col-span-1',
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onExpand}>
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Customize</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setPlaying(!state.playing)}>
                  {state.playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{state.playing ? 'Pause' : 'Play'}</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setPlaying(false)}>
                        <Square className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Stop</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleShowCode}>
                  <Code2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Show Code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div 
          className="relative flex items-center justify-center rounded-lg border p-8"
          style={{
            backgroundColor: state.customization.backgroundColor,
            color: state.customization.textColor,
          }}
        >
          {children}
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground font-mono">
            {componentName}
          </div>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <PreviewCustomizationPanel fields={customFields} />
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}