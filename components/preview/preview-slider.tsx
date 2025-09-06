'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export interface PreviewSliderProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (next: number) => void;
  disabled?: boolean;
  valueUnit?: string;
  widthPx?: number;
  showNumber?: boolean;
  description?: string;
  className?: string;
  id?: string;
  draggableNumber?: boolean;
}

export function PreviewSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  valueUnit = '',
  widthPx = 220,
  showNumber = true,
  description,
  className,
  id,
  draggableNumber = true
}: PreviewSliderProps) {
  const sliderId = id || React.useId();
  const numberRef = React.useRef<HTMLSpanElement | null>(null);
  const [draggingNumber, setDraggingNumber] = React.useState(false);
  const startY = React.useRef(0);
  const startValue = React.useRef(0);

  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  const handleValueChange = (vals: number[]) => {
    onChange?.(clamp(vals[0]));
  };

  const handleMouseDownNumber = (e: React.MouseEvent) => {
    if (!draggableNumber || disabled) return;
    setDraggingNumber(true);
    startY.current = e.clientY;
    startValue.current = value;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const delta = startY.current - e.clientY; // invert so upward increases
    const multiplier = step;
    const next = clamp(startValue.current + delta * multiplier);
    onChange?.(next);
  };

  const handleMouseUp = () => {
    setDraggingNumber(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-1 text-sm',
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}
      style={{ width: widthPx }}
    >
      {label && (
        <label
          htmlFor={sliderId}
          className={cn(
            'font-medium tracking-tight flex items-center justify-between select-none'
          )}
        >
          <span>{label}</span>
          {showNumber && (
            <span
              ref={numberRef}
              onMouseDown={handleMouseDownNumber}
              className={cn(
                'ml-2 tabular-nums font-mono text-xs px-1.5 py-0.5 rounded-md border bg-muted/40',
                draggableNumber && !disabled
                  ? 'cursor-ns-resize hover:bg-muted transition-colors'
                  : 'cursor-default'
              )}
              title={draggableNumber ? 'Drag up/down to adjust' : undefined}
              aria-live="off"
            >
              {value}
              {valueUnit}
            </span>
          )}
        </label>
      )}

      <Slider
        id={sliderId}
        value={[value]}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={handleValueChange}
        className={cn(
          'cursor-pointer select-none',
          draggingNumber && 'opacity-80'
        )}
      />

      {description && (
        <p className="text-[11px] text-muted-foreground leading-tight">{description}</p>
      )}
    </div>
  );
}

export default PreviewSlider;