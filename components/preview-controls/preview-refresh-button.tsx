'use client';

import * as React from 'react';
import { RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PreviewRefreshButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  spinningDurationMs?: number;
  tooltip?: string;
  size?: 'sm' | 'md';
}

export function PreviewRefreshButton({
  spinningDurationMs = 650,
  tooltip = 'Restart / Replay',
  size = 'md',
  className,
  onClick,
  disabled,
  ...rest
}: PreviewRefreshButtonProps) {
  const [spinning, setSpinning] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setSpinning(true);
    timerRef.current = window.setTimeout(() => setSpinning(false), spinningDurationMs);
    onClick?.(e);
  };

  const sizeClasses =
    size === 'sm'
      ? 'h-8 w-8 text-[15px]'
      : 'h-9 w-9 text-[16px]';

  return (
    <button
      type="button"
      aria-label="Refresh"
      title={tooltip}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'relative inline-flex items-center justify-center rounded-md border',
        'bg-background/80 backdrop-blur-sm shadow-sm',
        'hover:bg-muted/60 active:scale-[0.97] transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ring-offset-background',
        'disabled:opacity-50 disabled:pointer-events-none',
        sizeClasses,
        className
      )}
      {...rest}
    >
      <RotateCcw
        className={cn(
          'h-4 w-4',
          spinning && 'animate-spin',
          disabled && 'opacity-60'
        )}
      />
      {/* Subtle halo while spinning */}
      {spinning && (
        <span
          className="pointer-events-none absolute inset-0 rounded-md animate-pulse bg-primary/5"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export default PreviewRefreshButton;