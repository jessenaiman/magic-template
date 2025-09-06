'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Command,
  LucideIcon,
} from 'lucide-react';
import { SlidingNumber } from '@/components/animate-ui/text/sliding-number';
import { motion, type Variants, type Transition } from 'motion/react';
import { usePreviewContext } from './preview/preview-context';

// Define button types for the management bar
export interface ManagementBarButton {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

// Define navigation item for the management bar
export interface ManagementBarNavItem {
  name: string;
  path?: string;
  action?: () => void;
}

export interface CustomizableManagementBarProps {
  // Navigation items for the pagination
  navItems?: ManagementBarNavItem[];
  // Current selected index
  currentIndex?: number;
  // Action buttons to display in the middle section
  actionButtons?: ManagementBarButton[];
  // Primary action button on the right
  primaryAction?: {
    label: string;
    sublabel?: string;
    shortcut?: string;
    onClick?: () => void;
  };
  // Optional class name for styling
  className?: string;
}

const BUTTON_MOTION_CONFIG = {
  initial: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: {
    rest: { maxWidth: '40px' },
    hover: {
      maxWidth: '140px',
      transition: { type: 'spring', stiffness: 200, damping: 35, delay: 0.15 },
    },
    tap: { scale: 0.95 },
  },
  transition: { type: 'spring', stiffness: 250, damping: 25 },
} as const;

const LABEL_VARIANTS: Variants = {
  rest: { opacity: 0, x: 4 },
  hover: { opacity: 1, x: 0, visibility: 'visible' },
  tap: { opacity: 1, x: 0, visibility: 'visible' },
};

const LABEL_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
};

export function CustomizableManagementBar({
  navItems = [],
  currentIndex = 0,
  actionButtons = [],
  primaryAction,
  className = '',
}: CustomizableManagementBarProps) {
  const [currentPage, setCurrentPage] = React.useState(currentIndex + 1);
  const { updateCustomization } = usePreviewContext();
  
  const handlePrevPage = React.useCallback(() => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      
      // If we have navigation items with paths, navigate to them
      if (navItems && navItems[newPage - 1]) {
        const item = navItems[newPage - 1];
        if (item.path && typeof window !== 'undefined') {
          window.location.href = item.path;
        } else if (item.action) {
          item.action();
        }
      }
    }
  }, [currentPage, navItems]);

  const handleNextPage = React.useCallback(() => {
    if (navItems && currentPage < navItems.length) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      
      // If we have navigation items with paths, navigate to them
      if (navItems[newPage - 1]) {
        const item = navItems[newPage - 1];
        if (item.path && typeof window !== 'undefined') {
          window.location.href = item.path;
        } else if (item.action) {
          item.action();
        }
      }
    }
  }, [currentPage, navItems]);

  return (
    <div className={`flex w-fit flex-wrap items-center gap-y-2 rounded-2xl border border-border bg-background p-2 shadow-lg ${className}`}>
      {/* Navigation Controls */}
      {navItems.length > 0 && (
        <div className="mx-auto flex shrink-0 items-center">
          <button
            disabled={currentPage === 1}
            className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30"
            onClick={handlePrevPage}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="mx-2 flex items-center space-x-1 text-sm tabular-nums">
            <SlidingNumber
              className="text-foreground"
              padStart
              number={currentPage}
            />
            <span className="text-muted-foreground">/ {navItems.length}</span>
          </div>
          <button
            disabled={currentPage === navItems.length}
            className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30"
            onClick={handleNextPage}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Divider if we have both navigation and action buttons */}
      {navItems.length > 0 && actionButtons.length > 0 && (
        <div className="mx-3 h-6 w-px bg-border rounded-full" />
      )}

      {/* Action Buttons */}
      {actionButtons.length > 0 && (
        <motion.div
          layout
          layoutRoot
          className="mx-auto flex flex-wrap space-x-2 sm:flex-nowrap"
        >
          {actionButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <motion.button
                key={`action-${index}`}
                {...BUTTON_MOTION_CONFIG}
                className={`flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg px-2.5 py-2 ${button.className || 'bg-neutral-200/60 dark:bg-neutral-600/80 text-neutral-600 dark:text-neutral-200'}`}
                aria-label={button.label}
                onClick={button.onClick}
              >
                <Icon size={20} className="shrink-0" />
                <motion.span
                  variants={LABEL_VARIANTS}
                  transition={LABEL_TRANSITION}
                  className="invisible text-sm"
                >
                  {button.label}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Divider before primary action */}
      {primaryAction && (actionButtons.length > 0 || navItems.length > 0) && (
        <div className="mx-3 hidden h-6 w-px bg-border sm:block rounded-full" />
      )}

      {/* Primary Action Button */}
      {primaryAction && (
        <motion.button
          whileTap={{ scale: 0.975 }}
          className="flex w-full h-10 text-sm cursor-pointer items-center justify-center rounded-lg bg-teal-500 dark:bg-teal-600/80 px-3 py-2 text-white transition-colors duration-300 dark:hover:bg-teal-800 hover:bg-teal-600 sm:w-auto"
          onClick={primaryAction.onClick}
        >
          {primaryAction.sublabel && (
            <span className="mr-1 text-neutral-200">{primaryAction.sublabel}:</span>
          )}
          <span>{primaryAction.label}</span>
          {primaryAction.shortcut && (
            <>
              <div className="mx-3 h-5 w-px bg-white/40 rounded-full" />
              <div className="flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 -mr-1">
                <Command size={14} />{primaryAction.shortcut}
              </div>
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}
