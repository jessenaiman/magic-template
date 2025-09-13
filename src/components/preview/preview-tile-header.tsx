'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Code2, Settings, Share, X } from 'lucide-react';

export interface PreviewTileHeaderProps {
  title: string;
  description?: string;
  hasCustomFields?: boolean;
  onCustomizeClick?: () => void;
  onCodeClick?: () => void;
  onCopyClick?: () => void;
  onCloseClick?: () => void;
  showCustomize?: boolean;
  showCode?: boolean;
  isExpanded?: boolean;
}

export function PreviewTileHeader({
  title,
  description,
  hasCustomFields = false,
  onCustomizeClick,
  onCodeClick,
  onCopyClick,
  onCloseClick,
  showCustomize = false,
  showCode = false,
  isExpanded = false,
}: PreviewTileHeaderProps) {
  const handleButtonClick = (callback?: () => void, type?: 'customize' | 'code' | 'copy' | 'close') => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      
      // Close other panels first
      if (type !== 'customize' && showCustomize && onCustomizeClick) {
        onCustomizeClick();
      }
      if (type !== 'code' && showCode && onCodeClick) {
        onCodeClick();
      }
      
      // Then execute the callback
      callback?.();
    };
  };

  return (
    <header className="p-4 border-b flex items-center justify-between gap-2">
      <div className="flex-1 min-w-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            </TooltipTrigger>
            {description && (
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{description}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Control Buttons */}
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md p-0.5">
        <TooltipProvider>
          {hasCustomFields && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 hover:bg-muted data-[state=open]:bg-muted"
                  onClick={handleButtonClick(onCustomizeClick, 'customize')}
                  aria-label="Customize component"
                  data-state={showCustomize ? 'open' : 'closed'}
                >
                  <Settings className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Customize</TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 hover:bg-muted data-[state=open]:bg-muted"
                onClick={handleButtonClick(onCodeClick, 'code')}
                aria-label="View code"
                data-state={showCode ? 'open' : 'closed'}
              >
                <Code2 className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">View Code</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 hover:bg-muted"
                onClick={handleButtonClick(onCopyClick, 'copy')}
                aria-label="Copy code to clipboard"
              >
                <Share className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Copy Code</TooltipContent>
          </Tooltip>
          {isExpanded && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 hover:bg-muted text-muted-foreground hover:text-foreground"
                  onClick={handleButtonClick(onCloseClick, 'close')}
                  aria-label="Close expanded view"
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Close</TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>
    </header>
  );
}
