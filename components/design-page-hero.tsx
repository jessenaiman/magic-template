'use client';

import * as React from 'react';
import { useDesignPage } from './design-page-context';
import { usePreviewContext } from './preview-context';
import { PreviewCustomizationPanel, FieldConfig } from './preview-customization-panel';
import { cn } from '@/lib/utils';
import { Settings, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function DesignPageHero() {
  const { title, description, fields = [] } = useDesignPage();
  const { state } = usePreviewContext();
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Filter out fields that should be hidden
  const visibleFields = fields.filter(field => !field.hidden);

  return (
    <div className="fixed right-4 top-24 z-50">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, x: 100, width: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20 }}
            className={cn(
              'rounded-lg border bg-card shadow-lg',
              'backdrop-blur-md bg-background/95'
            )}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">{title}</h2>
                  {description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {description}
                    </p>
                  )}
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsExpanded(false)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>

              {visibleFields.length > 0 && (
                <PreviewCustomizationPanel
                  fields={visibleFields}
                  title="Global Controls"
                  className="border-none shadow-none p-0"
                />
              )}
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
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Global Controls</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Title */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-40',
          'px-6 py-4 bg-background/95 backdrop-blur-md border-b'
        )}
      >
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
      </div>
    </div>
  );
}