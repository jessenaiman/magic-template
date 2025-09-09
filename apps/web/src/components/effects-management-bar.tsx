'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Palette,
  Wand2,
  Command,
} from 'lucide-react';
import { SlidingNumber } from '@/packages/components/animate-ui/text/sliding-number';
import { motion, type Variants, type Transition } from 'motion/react';
import { usePreviewContext } from './preview/preview-context';
import { useRouter } from 'next/navigation';

// Define effect categories
const EFFECT_CATEGORIES = [
  { name: 'HTML/CSS', path: '/design/effects/html-css', icon: Layers },
  { name: 'Tailwind', path: '/design/effects/tailwind', icon: Palette },
  { name: 'MagicUI', path: '/design/effects/magicui', icon: Wand2 },
];

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

function EffectsManagementBar() {
  const [currentCategory, setCurrentCategory] = React.useState(2); // Default to MagicUI (index 2)
  const router = useRouter();
  const { updateCustomization } = usePreviewContext();

  const handlePrevCategory = React.useCallback(() => {
    if (currentCategory > 0) {
      const newCategory = currentCategory - 1;
      setCurrentCategory(newCategory);
      router.push(EFFECT_CATEGORIES[newCategory].path);
    }
  }, [currentCategory, router]);

  const handleNextCategory = React.useCallback(() => {
    if (currentCategory < EFFECT_CATEGORIES.length - 1) {
      const newCategory = currentCategory + 1;
      setCurrentCategory(newCategory);
      router.push(EFFECT_CATEGORIES[newCategory].path);
    }
  }, [currentCategory, router]);

  // Theme toggle handlers
  const setLightTheme = React.useCallback(() => {
    updateCustomization({ 
      backgroundColor: '#ffffff',
      textColor: '#000000'
    });
  }, [updateCustomization]);

  const setDarkTheme = React.useCallback(() => {
    updateCustomization({ 
      backgroundColor: '#121212',
      textColor: '#ffffff'
    });
  }, [updateCustomization]);

  const setColorfulTheme = React.useCallback(() => {
    updateCustomization({ 
      backgroundColor: '#f0f9ff',
      textColor: '#0c4a6e'
    });
  }, [updateCustomization]);

  return (
    <div className="flex w-fit flex-wrap items-center gap-y-2 rounded-2xl border border-border bg-background p-2 shadow-lg">
      <div className="mx-auto flex shrink-0 items-center">
        <button
          disabled={currentCategory === 0}
          className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30"
          onClick={handlePrevCategory}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="mx-2 flex items-center space-x-1 text-sm tabular-nums">
          <SlidingNumber
            className="text-foreground"
            padStart
            number={currentCategory + 1}
          />
          <span className="text-muted-foreground">/ {EFFECT_CATEGORIES.length}</span>
        </div>
        <button
          disabled={currentCategory === EFFECT_CATEGORIES.length - 1}
          className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30"
          onClick={handleNextCategory}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mx-3 h-6 w-px bg-border rounded-full" />

      <motion.div
        layout
        layoutRoot
        className="mx-auto flex flex-wrap space-x-2 sm:flex-nowrap"
      >
        <motion.button
          {...BUTTON_MOTION_CONFIG}
          className="flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-neutral-200/60 dark:bg-neutral-600/80 px-2.5 py-2 text-neutral-600 dark:text-neutral-200"
          aria-label="Light Theme"
          onClick={setLightTheme}
        >
          <Palette size={20} className="shrink-0" />
          <motion.span
            variants={LABEL_VARIANTS}
            transition={LABEL_TRANSITION}
            className="invisible text-sm"
          >
            Light
          </motion.span>
        </motion.button>

        <motion.button
          {...BUTTON_MOTION_CONFIG}
          className="flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-neutral-800/80 dark:bg-neutral-800/80 px-2.5 py-2 text-neutral-200 dark:text-neutral-200"
          aria-label="Dark Theme"
          onClick={setDarkTheme}
        >
          <Palette size={20} className="shrink-0" />
          <motion.span
            variants={LABEL_VARIANTS}
            transition={LABEL_TRANSITION}
            className="invisible text-sm"
          >
            Dark
          </motion.span>
        </motion.button>

        <motion.button
          {...BUTTON_MOTION_CONFIG}
          className="flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-blue-200/60 dark:bg-blue-800/80 px-2.5 py-2 text-blue-600 dark:text-blue-300"
          aria-label="Colorful Theme"
          onClick={setColorfulTheme}
        >
          <Palette size={20} className="shrink-0" />
          <motion.span
            variants={LABEL_VARIANTS}
            transition={LABEL_TRANSITION}
            className="invisible text-sm"
          >
            Colorful
          </motion.span>
        </motion.button>
      </motion.div>

      <div className="mx-3 hidden h-6 w-px bg-border sm:block rounded-full" />

      <motion.button
        whileTap={{ scale: 0.975 }}
        className="flex w-full h-10 text-sm cursor-pointer items-center justify-center rounded-lg bg-teal-500 dark:bg-teal-600/80 px-3 py-2 text-white transition-colors duration-300 dark:hover:bg-teal-800 hover:bg-teal-600 sm:w-auto"
      >
        <span className="mr-1 text-neutral-200">Current:</span>
        <span>{EFFECT_CATEGORIES[currentCategory].name}</span>
        <div className="mx-3 h-5 w-px bg-white/40 rounded-full" />
        <div className="flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 -mr-1">
          <Command size={14} />E
        </div>
      </motion.button>
    </div>
  );
}

export { EffectsManagementBar };
