'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { usePreviewContext, useCustomizationProp } from './preview-context';

export interface PreviewInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  value: string;
  onChange?: (next: string) => void;
  maxLength?: number;
  widthPx?: number;
  disabled?: boolean;
  description?: string;
  className?: string;
}

export function PreviewInput({
  label,
  value,
  onChange,
  maxLength,
  widthPx = 240,
  disabled,
  description,
  className,
  ...rest
}: PreviewInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn('flex flex-col gap-1 text-sm', disabled && 'opacity-60 cursor-not-allowed', className)}>
      {label && (
        <label className="font-medium tracking-tight">
          {label}
          {maxLength ? (
            <span className="ml-2 text-[10px] font-normal text-muted-foreground">
              {value.length}/{maxLength}
            </span>
          ) : null}
        </label>
      )}
      <input
        className={cn(
          'h-9 rounded-md border bg-background px-3 py-1 text-sm outline-none ring-offset-background',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
          'transition-colors placeholder:text-muted-foreground',
          disabled && 'pointer-events-none'
        )}
        style={{ width: widthPx }}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        onChange={handleChange}
        {...rest}
      />
      {description && <p className="text-[11px] text-muted-foreground">{description}</p>}
    </div>
  );
}

/* Example binding helper:
 *
 * function TitleField() {
 *   const { state, setDisplayText } = usePreviewContext();
 *   return (
 *     <PreviewInput
 *       label="Display Text"
 *       value={state.displayText}
 *       onChange={setDisplayText}
 *       maxLength={40}
 *     />
 *   );
 * }
 */

/* Theming Notes:
 * - Width is controlled via widthPx prop for deterministic alignment in control panels.
 * - Focus styles leverage design system CSS variables (ring, background).
 * - Caller manages layout; component stays as small flex container.
 */

export default PreviewInput;