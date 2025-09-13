'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';
import { Copy, Check } from 'lucide-react';

export interface PreviewPropRow {
  name: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
}

export interface PreviewPropTableProps {
  title?: string;
  propsList: PreviewPropRow[];
  className?: string;
  dense?: boolean;
  highlightRequired?: boolean;
  showCopyButtons?: boolean;
  /** Optional filter text (externally controlled) */
  filter?: string;
  /** Allow consumer to react to copy events */
  onCopy?: (prop: PreviewPropRow, field: 'name' | 'type' | 'default') => void;
  stickyHeader?: boolean;
}

export function PreviewPropTable({
  title = 'Props',
  propsList,
  className,
  dense = false,
  highlightRequired = true,
  showCopyButtons = true,
  filter,
  onCopy,
  stickyHeader = true
}: PreviewPropTableProps) {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const copyTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const handleCopy = (prop: PreviewPropRow, field: 'name' | 'type' | 'default') => {
    const value =
      field === 'name'
        ? prop.name
        : field === 'type'
        ? prop.type
        : prop.default ?? '';
    try {
      navigator.clipboard.writeText(value);
      setCopiedKey(`${prop.name}:${field}`);
      if (onCopy) onCopy(prop, field);
      copyTimer.current = window.setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      // swallow
    }
  };

  const filtered = React.useMemo(() => {
    if (!filter?.trim()) return propsList;
    const f = filter.toLowerCase();
    return propsList.filter(
      p =>
        p.name.toLowerCase().includes(f) ||
        p.type.toLowerCase().includes(f) ||
        (p.description && p.description.toLowerCase().includes(f))
    );
  }, [propsList, filter]);

  return (
    <div className={cn('w-full space-y-3', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        <span className="text-[11px] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'prop' : 'props'}
        </span>
      </div>

      <div className={cn(
        'relative overflow-x-auto rounded-md border bg-background/50',
        'shadow-sm'
      )}>
        <table
          className={cn(
            'w-full border-collapse text-xs',
            dense ? 'leading-tight' : 'leading-[1.35]'
          )}
        >
          <thead className="bg-muted/60 text-[11px] uppercase tracking-wide text-muted-foreground">
            <tr>
              <Th sticky={stickyHeader}>Property</Th>
              <Th sticky={stickyHeader}>Type</Th>
              <Th sticky={stickyHeader}>Default</Th>
              <Th sticky={stickyHeader} className="w-1/2 min-w-[220px]">Description</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((prop) => (
              <tr
                key={prop.name}
                className={cn(
                  'border-t border-border/60 hover:bg-muted/30 transition-colors group'
                )}
              >
                <Td mono highlight={highlightRequired && prop.required}>
                  <Copyable
                    value={prop.name}
                    onCopy={() => handleCopy(prop, 'name')}
                    active={copiedKey === `${prop.name}:name`}
                    show={showCopyButtons}
                  />
                  {prop.required && (
                    <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary">
                      required
                    </span>
                  )}
                </Td>
                <Td mono className="align-top">
                  <Copyable
                    value={prop.type}
                    onCopy={() => handleCopy(prop, 'type')}
                    active={copiedKey === `${prop.name}:type`}
                    show={showCopyButtons}
                  />
                </Td>
                <Td mono subdued className="align-top">
                  <Copyable
                    value={prop.default ?? '—'}
                    onCopy={() => handleCopy(prop, 'default')}
                    active={copiedKey === `${prop.name}:default`}
                    show={showCopyButtons && !!prop.default}
                  />
                </Td>
                <Td className="align-top text-[11px]">
                  {prop.description || <span className="text-muted-foreground/60">—</span>}
                </Td>
              </tr>
            ))}
            {!filtered.length && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-[11px] text-muted-foreground"
                >
                  No props match the current filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Subcomponents */

interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
  sticky?: boolean;
}
function Th({ className, children, sticky, ...rest }: ThProps) {
  return (
    <th
      className={cn(
        'px-3 py-2 text-left font-medium',
        sticky && 'sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-muted/70',
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
  mono?: boolean;
  subdued?: boolean;
  highlight?: boolean;
}
function Td({ className, mono, subdued, highlight, children, ...rest }: TdProps) {
  return (
    <td
      className={cn(
        'px-3 py-2 align-top',
        mono && 'font-mono text-[11px]',
        subdued && 'text-muted-foreground',
        highlight && 'bg-primary/5',
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
}

interface CopyableProps {
  value: string;
  active: boolean;
  onCopy: () => void;
  show?: boolean;
}
function Copyable({ value, active, onCopy, show }: CopyableProps) {
  return (
    <span className="relative inline-flex max-w-full items-center gap-1">
      <code className="rounded bg-muted/50 px-1.5 py-0.5">{value}</code>
      {show && (
        <button
          type="button"
            aria-label="Copy"
            className={cn(
              'h-4 w-4 rounded opacity-0 outline-none ring-offset-background transition-all',
              'focus-visible:ring-1 focus-visible:ring-ring focus-visible:opacity-100',
              'group-hover:opacity-60 hover:opacity-100',
              active && 'text-green-500 opacity-100'
            )}
            onClick={onCopy}
        >
          {active ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </button>
      )}
    </span>
  );
}

export default PreviewPropTable;