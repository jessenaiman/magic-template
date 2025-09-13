'use client';

import * as React from 'react';
import { useDesignPage } from './design-page-context';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';

export function TransitionControlPanel() {
  const { triggerTransitionReplay } = useDesignPage();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleReplay = () => {
    triggerTransitionReplay();
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
            className="rounded-lg border bg-card shadow-lg backdrop-blur-md p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Transition Controls
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
              <p className="text-xs text-muted-foreground">
                Click the replay button to trigger all transitions on the page.
              </p>

              <Button onClick={handleReplay} className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Replay All Transitions
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="rounded-lg border bg-card shadow-lg backdrop-blur-md p-3"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => setIsExpanded(true)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Transition Controls</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
