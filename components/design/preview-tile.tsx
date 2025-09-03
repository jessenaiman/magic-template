'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, Code2, Palette, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { PreviewProvider, usePreviewContext } from './preview-controls/preview-context';
import PreviewControlsBar from './preview-controls/preview-controls-bar';
import PreviewCustomizationPanel from './preview-controls/preview-customization-panel';
import { cn } from '@/lib/utils';
import CodeHighlighter from '@/components/code/CodeHighlighter';

/**
 * Maintains backward compatibility with legacy PreviewTile props while
 * delegating state management to the new PreviewContext + modular controls.
 */
interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

export interface PreviewTileProps {
  title: string;
  /**
   * Optional descriptive text displayed below the canvas.
   */
  description?: string;
  children: React.ReactNode;
  componentName: string;
  category?: string;
  codeExamples?: CodeExample[];
  installCommand?: string;
  documentationUrl?: string;
  /**
   * Initial customization overrides (optional).
   */
  initialCustomization?: Partial<{
    backgroundColor: string;
    textColor: string;
    borderRadius: number;
    padding: number;
    fontSize: number;
    fontWeight?: number;
    shadowIntensity?: number;
  }>;
  /**
   * When true, shows the customization panel inline (always visible).
   * Otherwise panel is toggled with a button.
   */
  alwaysShowCustomization?: boolean;
  /**
   * Default collapsed state for customization panel (when not always shown).
   */
  defaultCustomizeOpen?: boolean;
  /**
   * Render prop for injecting extra actions near the controls bar (top-right cluster).
   */
  extraActions?: React.ReactNode;
  /**
   * Optional className overrides.
   */
  className?: string;
  /**
   * Height of preview canvas area.
   */
  canvasHeight?: number;
}

/* -------------------------------- Internal Body -------------------------------- */

function PreviewTileInner({
  title,
  description = '',
  children,
  componentName,
  category = 'component',
  codeExamples = [],
  installCommand,
  documentationUrl,
  alwaysShowCustomization = false,
  defaultCustomizeOpen = false,
  extraActions,
  className,
  canvasHeight = 200
}: PreviewTileProps) {
  const { state } = usePreviewContext();

  // Code modal / dialog for examples
  const [codeOpen, setCodeOpen] = React.useState(false);
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);
  const [customizeOpen, setCustomizeOpen] = React.useState(defaultCustomizeOpen);

  const handleCopyCode = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy code:', err);
    }
  };

  const hasCode = codeExamples.length > 0;

  return (
    <div className={cn('space-y-4', className)}>
      <Card className="relative flex flex-col transition-all duration-300 hover:shadow-lg">
        {/* Floating top-right controls cluster */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
          {extraActions}
          {documentationUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              asChild
              aria-label="Documentation"
            >
              <Link href={documentationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          )}

          {hasCode && (
            <Dialog open={codeOpen} onOpenChange={setCodeOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  aria-label="View Code"
                >
                  <Code2 className="h-3.5 w-3.5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {componentName} - Implementation
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {installCommand && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium mb-2">Installation</div>
                      <div className="flex items-center justify-between bg-background rounded px-3 py-2">
                        <code className="text-sm">{installCommand}</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyCode(installCommand, -1)}
                          className="h-8 w-8 p-0"
                          aria-label="Copy Install Command"
                        >
                          {copiedIndex === -1 ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {codeExamples.length === 1 ? (
                    <div className="space-y-2">
                      {codeExamples[0].title && (
                        <div className="text-sm font-medium text-muted-foreground">
                          {codeExamples[0].title}
                        </div>
                      )}
                      <div className="relative">
                        <CodeHighlighter
                          language={codeExamples[0].language}
                          codeString={codeExamples[0].code}
                          snippetId={`${componentName.toLowerCase()}-main`}
                          showLineNumbers
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyCode(codeExamples[0].code, 0)}
                          className="absolute top-2 left-2 h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700"
                          aria-label="Copy Code"
                        >
                          {copiedIndex === 0 ? (
                            <Check className="h-3 w-3 text-green-400" />
                          ) : (
                            <Copy className="h-3 w-3 text-gray-300" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Tabs
                      defaultValue={`${codeExamples[0].language}-0`}
                      className="w-full"
                    >
                      <TabsList
                        className="grid w-full"
                        style={{
                          gridTemplateColumns: `repeat(${Math.min(
                            codeExamples.length,
                            4
                          )}, 1fr)`
                        }}
                      >
                        {codeExamples.map((example, index) => (
                          <TabsTrigger
                            key={`${example.language}-${index}`}
                            value={`${example.language}-${index}`}
                            className="text-xs"
                          >
                            {example.title || example.language.toUpperCase()}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {codeExamples.map((example, index) => (
                        <TabsContent
                          key={`content-${example.language}-${index}`}
                          value={`${example.language}-${index}`}
                          className="mt-4"
                        >
                          <div className="relative">
                            <CodeHighlighter
                              language={example.language}
                              codeString={example.code}
                              snippetId={`${componentName.toLowerCase()}-${index}`}
                              showLineNumbers
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleCopyCode(example.code, index)
                              }
                              className="absolute top-2 left-2 h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700"
                              aria-label="Copy Code Block"
                            >
                              {copiedIndex === index ? (
                                <Check className="h-3 w-3 text-green-400" />
                              ) : (
                                <Copy className="h-3 w-3 text-gray-300" />
                              )}
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}

          {!alwaysShowCustomization && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'h-8 w-8 p-0',
                customizeOpen && 'bg-muted/60'
              )}
              aria-label="Customize"
              onClick={() => setCustomizeOpen(o => !o)}
            >
              <Palette className="h-3.5 w-3.5" />
            </Button>
          )}

          {/* Storybook link - kept for parity */}
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2 py-1 flex items-center gap-1"
            asChild
            aria-label="View in Storybook"
          >
            <a
              href={`http://localhost:6006/?path=/docs/design-buttons-${componentName.toLowerCase()}--docs`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1" />
              <span className="text-[11px] font-medium">Storybook</span>
            </a>
          </Button>
        </div>

        {/* Top overlay controls bar (new modular bar) */}
        <div className="p-3 pt-16 pb-0">
          <PreviewControlsBar
            className="w-full"
            onShowCode={hasCode ? () => setCodeOpen(true) : undefined}
          />
        </div>

        <CardContent className="relative">
          <div
            className={cn(
              'bg-muted/30 rounded-md mt-4 overflow-hidden transition-all duration-300 relative flex items-center justify-center',
              'border border-dashed border-border/40'
            )}
            style={{
              minHeight: canvasHeight,
              maxHeight: canvasHeight,
              opacity: state.playing ? 1 : 0.55,
              backgroundColor: state.customization.backgroundColor,
              color: state.customization.textColor,
              borderRadius: state.customization.borderRadius,
              padding: state.customization.padding
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-all duration-300"
              style={{
                fontSize: state.customization.fontSize,
                fontWeight: state.customization.fontWeight,
                boxShadow: state.customization.shadowIntensity
                  ? `0 ${state.customization.shadowIntensity}px ${
                      (state.customization.shadowIntensity || 0) * 2
                    }px rgba(0,0,0,0.1)`
                  : 'none'
              }}
            >
              {children}
            </div>

            {/* Label overlay bottom-left */}
            <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm rounded px-3 py-1 text-xs font-medium shadow-sm border">
              {state.displayText}
            </div>
          </div>

          {/* Description (optional) */}
            {description && (
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}

          {/* Customization panel */}
          {(alwaysShowCustomization || customizeOpen) && (
            <div className="mt-5">
              <PreviewCustomizationPanel
                collapsible
                defaultCollapsed={false}
                allowReset
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* --------------------------- Public PreviewTile Wrapper --------------------------- */

export function PreviewTile(props: PreviewTileProps) {
  const {
    title,
    initialCustomization,
    ...rest
  } = props;

  return (
    <PreviewProvider
      initialText={title}
      initialCustomization={initialCustomization}
    >
      <PreviewTileInner title={title} {...rest} />
    </PreviewProvider>
  );
}

export default PreviewTile;

/**
 * Deprecated notes:
 * - Legacy internal state (isRunning, displayText, customizationSettings) replaced by context.
 * - Controls replaced by PreviewControlsBar + PreviewCustomizationPanel.
 * - Code examples dialog retained; simplified multi-tab logic preserved.
 * - Provided backward-compatible props.
 */