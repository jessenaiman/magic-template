'use client';

import * as React from 'react';
import { useDesignPage } from './design-page-context';
import { PreviewSlider } from './preview/preview-slider';
import { PreviewInput } from './preview/preview-input';
import { cn } from '@/src/lib/utils';
import { Paintbrush } from 'lucide-react';
import { Button } from '@/packages/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/packages/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';

export function BackgroundCustomizationPanel() {
  const { backgroundCustomization, updateBackgroundCustomization } = useDesignPage();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleFieldChange = (field: string, value: any) => {
    updateBackgroundCustomization({ [field]: value });
  };

  return (
    <div className="fixed left-4 top-24 z-50">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, x: -100, width: 320 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', damping: 20 }}
            className={cn(
              'rounded-lg border bg-card shadow-lg',
              'backdrop-blur-md bg-background/95 p-4'
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Paintbrush className="h-4 w-4" />
                Apply to All Backgrounds
              </h3>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                onClick={() => setIsExpanded(false)}
              >
                ×
              </Button>
            </div>

            <div className="space-y-4">
              {/* Background Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-tight flex items-center gap-2">
                  Background Color
                  <input
                    type="color"
                    className="h-6 w-6 cursor-pointer rounded border bg-background"
                    value={backgroundCustomization.backgroundColor || '#0f172a'}
                    onChange={(e) => handleFieldChange('backgroundColor', e.target.value)}
                  />
                </label>
              </div>

              {/* Accent Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-tight flex items-center gap-2">
                  Accent Color
                  <input
                    type="color"
                    className="h-6 w-6 cursor-pointer rounded border bg-background"
                    value={backgroundCustomization.accentColor || '#22c55e'}
                    onChange={(e) => handleFieldChange('accentColor', e.target.value)}
                  />
                </label>
              </div>

              {/* Opacity */}
              <PreviewSlider
                label="Opacity"
                value={backgroundCustomization.opacity || 100}
                min={0}
                max={100}
                step={1}
                valueUnit="%"
                description="Overall background opacity"
                onChange={(v) => handleFieldChange('opacity', v)}
              />

              {/* Intensity */}
              <PreviewSlider
                label="Intensity"
                value={backgroundCustomization.intensity || 50}
                min={0}
                max={100}
                step={1}
                description="Effect intensity level"
                onChange={(v) => handleFieldChange('intensity', v)}
              />

              {/* Speed */}
              <PreviewSlider
                label="Speed"
                value={backgroundCustomization.speed || 50}
                min={0}
                max={100}
                step={1}
                description="Animation speed"
                onChange={(v) => handleFieldChange('speed', v)}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-md shadow-lg"
                    onClick={() => setIsExpanded(true)}
                  >
                    <Paintbrush className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Apply to All Backgrounds</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}