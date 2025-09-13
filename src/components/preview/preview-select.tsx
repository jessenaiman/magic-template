'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';

export interface PreviewSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface PreviewSelectProps {
  label?: string;
  value: string;
  options: PreviewSelectOption[];
  onChange?: (next: string) => void;
  disabled?: boolean;
  placeholder?: string;
  widthPx?: number;
  description?: string;
  className?: string;
  id?: string;
  name?: string;
  size?: 'sm' | 'md';
  clearable?: boolean;
}

const sizeClass: Record<NonNullable<PreviewSelectProps['size']>, string> = {
  sm: 'h-8 text-xs',
  md: 'h-9 text-sm',
};

export function PreviewSelect({
  label,
  value,
  options,
  onChange,
  disabled,
  placeholder = 'Select…',
  widthPx = 200,
  description,
  className,
  id,
  name,
  size = 'md',
  clearable = false,
}: PreviewSelectProps) {
  const selectId = id || React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const effectiveOptions = React.useMemo(() => {
    if (clearable && options[0]?.value !== '') {
      return [
        { value: '', label: placeholder || '—', disabled: false },
        ...options,
      ];
    }
    return options;
  }, [options, clearable, placeholder]);

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
          htmlFor={selectId}
          className="font-medium tracking-tight select-none"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          className={cn(
            'w-full appearance-none rounded-md border bg-background pr-8 pl-3',
            'outline-none ring-offset-background',
            'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
            'transition-colors',
            sizeClass[size],
            'cursor-pointer'
          )}
        >
          {effectiveOptions.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          className={cn(
            'pointer-events-none absolute inset-y-0 right-2 flex items-center text-muted-foreground',
            size === 'sm' ? 'text-[11px]' : 'text-xs'
          )}
        >
          ▾
        </span>
      </div>
      {description && (
        <p className="text-[11px] text-muted-foreground leading-tight">
          {description}
        </p>
      )}
    </div>
  );
}

export default PreviewSelect;
