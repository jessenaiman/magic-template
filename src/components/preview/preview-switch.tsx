'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';

export interface PreviewSwitchProps {
  label?: string;
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  description?: string;
  labelPosition?: 'left' | 'right' | 'top';
  className?: string;
  size?: 'sm' | 'md';
  id?: string;
}

const sizeMap = {
  sm: {
    track: 'h-4 w-7',
    thumb:
      'h-3 w-3 translate-x-0.5 data-[state=checked]:translate-x-[1.375rem]',
  },
  md: {
    track: 'h-5 w-9',
    thumb: 'h-4 w-4 translate-x-0.5 data-[state=checked]:translate-x-[1.75rem]',
  },
};

export function PreviewSwitch({
  label,
  checked,
  onChange,
  disabled,
  description,
  labelPosition = 'left',
  className,
  size = 'md',
  id,
}: PreviewSwitchProps) {
  const switchId = id || React.useId();

  const layoutClass =
    labelPosition === 'top'
      ? 'flex-col items-start'
      : labelPosition === 'right'
        ? 'flex-row-reverse items-center'
        : 'flex-row items-center';

  return (
    <div
      className={cn(
        'flex gap-2 text-sm',
        layoutClass,
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}
    >
      {label && (
        <label
          htmlFor={switchId}
          className={cn(
            'font-medium tracking-tight select-none',
            labelPosition === 'top' && 'mb-1',
            disabled && 'pointer-events-none'
          )}
        >
          {label}
        </label>
      )}

      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer rounded-full border border-transparent transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ring-offset-background',
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted',
          sizeMap[size].track,
          disabled && 'pointer-events-none',
          !disabled && 'hover:opacity-90'
        )}
        data-state={checked ? 'checked' : 'unchecked'}
      >
        <span
          data-state={checked ? 'checked' : 'unchecked'}
          className={cn(
            'pointer-events-none inline-block rounded-full bg-background shadow transition-transform',
            'ring-1 ring-border',
            sizeMap[size].thumb
          )}
        />
      </button>

      {description && (
        <p className="text-[11px] text-muted-foreground leading-tight max-w-[240px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default PreviewSwitch;
