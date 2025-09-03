'use client';

import * as React from 'react';
import { Play, Pause, RotateCcw, Code2, Type, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewContext, encodePreviewState } from './preview-context';
import PreviewInput from './preview-input';
import PreviewRefreshButton from './preview-refresh-button';

export interface PreviewControlsBarProps {
  className?: string;
  /**
   * When true renders a compact (icon-only) layout.
   */
  compact?: boolean;
  /**
   * Allow inline editing of display text.
   */
  allowTextEdit?: boolean;
  /**
   * Callback when share (link encode) is requested.
   */
  onShare?: (encoded: string) => void;
  /**
   * Show code button (delegated handling).
   */
  onShowCode?: () => void;
  /**
   * Disable animations group entirely.
   */
  disableRunControls?: boolean;
  /**
   * Allow pausing (if false only restart will show).
   */
  allowPause?: boolean;
  /**
   * Allow replay/restart control.
   */
  allowRestart?: boolean;
  /**
   * Size variant.
   */
  size?: 'sm' | 'md';
  /**
   * Visual elevated style.
   */
  elevated?: boolean;
}

export function PreviewControlsBar({
  className,
  compact = false,
  allowTextEdit = true,
  onShare,
  onShowCode,
  disableRunControls = false,
  allowPause = true,
  allowRestart = true,
  size = 'md',
  elevated = true
}: PreviewControlsBarProps) {
  const { state, setPlaying, setDisplayText, reset } = usePreviewContext();
  const [editingLabel, setEditingLabel] = React.useState(false);

  const encoded = React.useMemo(() => encodePreviewState(state), [state]);

  const baseBtn =
    'relative inline-flex items-center justify-center rounded-md border transition-colors outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ring-offset-background ' +
    'disabled:opacity-50 disabled:pointer-events-none';
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  const btnDim = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';

  const groupBg =
    'bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55';
  const elevatedStyles = elevated
    ? 'shadow-sm border'
    : 'border border-transparent';

  const handleShare = () => {
    if (onShare) onShare(encoded);
    else {
      try {
        navigator.clipboard.writeText(window.location.origin + '?pv=' + encoded);
      } catch {
        /* noop */
      }
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl px-2 py-2',
        groupBg,
        elevatedStyles,
        'text-xs',
        compact && 'flex-wrap',
        className
      )}
    >
      {!disableRunControls && (
        <div className="flex items-center gap-1">
          {allowPause && (
            <button
              type="button"
              aria-label={state.playing ? 'Pause' : 'Play'}
              onClick={() => setPlaying(!state.playing)}
              className={cn(
                baseBtn,
                btnDim,
                'bg-muted/40 hover:bg-muted/60 active:scale-[0.97]'
              )}
            >
              {state.playing ? (
                <Pause className={iconSize} />
              ) : (
                <Play className={iconSize} />
              )}
            </button>
          )}

            {allowRestart && (
              <PreviewRefreshButton
                size={size === 'sm' ? 'sm' : 'md'}
                onClick={() => {
                  setPlaying(false);
                  // Give a short delay to simulate replay reset
                  setTimeout(() => setPlaying(true), 50);
                }}
                className={cn('border-muted/60')}
                tooltip="Replay"
              />
            )}

          <button
            type="button"
            aria-label="Reset settings"
            onClick={reset}
            className={cn(
              baseBtn,
              btnDim,
              'bg-muted/40 hover:bg-muted/60 active:scale-[0.97]'
            )}
          >
            <RotateCcw className={iconSize} />
          </button>
        </div>
      )}

      {allowTextEdit && (
        <div className="flex items-center gap-2 pl-1">
          {!editingLabel && (
            <button
              type="button"
              aria-label="Edit display text"
              onClick={() => setEditingLabel(true)}
              className={cn(
                baseBtn,
                'px-2 h-8 text-muted-foreground bg-muted/30 hover:bg-muted/50',
                size === 'sm' && 'h-8',
                size === 'md' && 'h-9'
              )}
            >
              <Type className={cn(iconSize, 'mr-1')} />
              {!compact && (
                <span className="text-[11px] font-medium">
                  {state.displayText}
                </span>
              )}
            </button>
          )}
          {editingLabel && (
            <div className="flex items-center gap-2">
              <PreviewInput
                label={compact ? undefined : 'Label'}
                value={state.displayText}
                widthPx={compact ? 140 : 180}
                maxLength={40}
                onChange={(v) => setDisplayText(v)}
                className="!mb-0"
              />
              <button
                type="button"
                onClick={() => setEditingLabel(false)}
                className={cn(
                  baseBtn,
                  'h-8 px-2 bg-primary/80 text-primary-foreground hover:bg-primary'
                )}
              >
                Save
              </button>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-1 ml-auto">
        {onShowCode && (
          <button
            type="button"
            aria-label="Show code"
            onClick={onShowCode}
            className={cn(
              baseBtn,
              btnDim,
              'bg-muted/40 hover:bg-muted/60 active:scale-[0.97]'
            )}
          >
            <Code2 className={iconSize} />
          </button>
        )}

        <button
          type="button"
          aria-label="Share settings"
          onClick={handleShare}
          className={cn(
            baseBtn,
            btnDim,
            'bg-muted/40 hover:bg-muted/60 active:scale-[0.97]'
          )}
        >
          <Share2 className={iconSize} />
        </button>
      </div>
    </div>
  );
}

export default PreviewControlsBar;