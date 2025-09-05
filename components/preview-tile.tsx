'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Icons } from '@/components/icons';
import {
  PreviewCustomizationPanel,
  useDesignControls,
} from '@/components/preview-customization-panel';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CodeHighlighter from './code-highlighter';

export interface PreviewTileProps {
  name: string;
  description: string;
  path: string;
  img: string | StaticImageData;
  isComponent?: boolean;
  code?: string;
  children: React.ReactNode;
  className?: string;
  options?: any;
}

const PreviewTile = ({
  name,
  description,
  path,
  img,
  isComponent = false,
  code,
  children,
  className,
  options,
}: PreviewTileProps) => {
  const router = useRouter();
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const { design, setDesign, reset } = useDesignControls(options);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group/card relative flex h-[20rem] w-full flex-col justify-between overflow-hidden rounded-xl border text-card-foreground shadow',
        theme === 'dark'
          ? '[box-shadow:0_0_0_1px_rgba(255,255,255,0.1),_0_2px_4px_0_rgba(0,0,0,0.05)]'
          : '[box-shadow:0_0_0_1px_rgba(0,0,0,0.05),_0_2px_4px_0_rgba(0,0,0,0.05)]',
        className,
      )}
    >
      <Dialog open={isCustomizing} onOpenChange={setIsCustomizing}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Customize Component</DialogTitle>
          </DialogHeader>
          <div className="flex h-[30rem] flex-col justify-between">
            <div className="flex h-full items-center justify-center rounded-lg border bg-zinc-100 dark:bg-zinc-900">
              {children}
            </div>
            {isComponent && options && (
              <PreviewCustomizationPanel
                options={options}
                design={design}
                setDesign={setDesign}
                onReset={reset}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showCode} onOpenChange={setShowCode}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="max-h-[70vh] overflow-y-auto">
            {code && <CodeHighlighter code={code} />}
          </div>
        </DialogContent>
      </Dialog>
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="opacity-20 transition-opacity group-hover/card:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="absolute inset-0 z-10 h-full w-full bg-zinc-900/30 opacity-0 transition-opacity group-hover/card:opacity-100" />
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {children}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-4">
          <p className="text-sm text-zinc-400">{description}</p>
        </div>

        {isComponent && (
          <div className="absolute right-2 top-2 z-20 flex items-center gap-1">
            <button
              onClick={() => setIsCustomizing(true)}
              className="z-20 flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800/80 p-1.5 backdrop-blur-sm transition-all hover:bg-zinc-700/80"
              aria-label="Customize"
            >
              <Icons.settings className="h-4 w-4 text-zinc-400" />
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className="z-20 flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800/80 p-1.5 backdrop-blur-sm transition-all hover:bg-zinc-700/80"
              aria-label="Show code"
            >
              <Icons.code className="h-4 w-4 text-zinc-400" />
            </button>
          </div>
        )}

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 right-4 z-20"
          >
            <Button
              size="sm"
              variant="secondary"
              className="translate-y-2 opacity-0 transition-all group-hover/card:translate-y-0 group-hover/card:opacity-100"
              onClick={() => router.push(path)}
            >
              <span className="mr-2">{isComponent ? 'Details' : 'View'}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-4 top-4 z-20">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PreviewTile;