'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, Code2, Palette, ExternalLink, Settings } from 'lucide-react';
import Link from 'next/link';

import { PreviewProvider, usePreviewContext } from './preview-controls/preview-context';
import PreviewControlsBar from './preview-controls/preview-controls-bar';
import PreviewCustomizationPanel from './preview-controls/preview-customization-panel';
import { cn } from '@/lib/utils';
import CodeHighlighter from '@/components/code/CodeHighlighter';

/**
 * Enhanced PreviewTile component with unified design system support
 * Maintains backward compatibility while integrating new preview-controls system
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
  /**
   * Design system type for specialized styling
   */
  designSystem?: 'reactbits' | 'html-css' | 'tailwind' | 'shadcn' | 'magicui' | 'animate-ui';
  /**
   * Show advanced controls (play/pause, text editing, etc.)
   */
  showAdvancedControls?: boolean;
  /**
   * Custom field configurations for the customization panel
   */
  customFields?: any[];
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
  canvasHeight = 200,
  designSystem = 'reactbits',
  showAdvancedControls = true,
  customFields
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

  // Design system specific styling
  const designSystemStyles = {
    'reactbits': 'border-blue-500/20 hover:border-blue-500/40',
    'html-css': 'border-green-500/20 hover:border-green-500/40', 
    'tailwind': 'border-purple-500/20 hover:border-purple-500/40',
    'shadcn': 'border-orange-500/20 hover:border-orange-500/40',
    'magicui': 'border-pink-500/20 hover:border-pink-500/40',
    'animate-ui': 'border-cyan-500/20 hover:border-cyan-500/40'
  };

  return (
    <div className={cn('space-y-4 group', className)}>
      <Card className={cn(
        'relative flex flex-col transition-all duration-300 hover:shadow-lg border-2',
        designSystemStyles[designSystem],
        'bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm'
      )}>
        {/* Floating top-right controls cluster */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
          {extraActions}
          
          {/* Design system badge */}
          <div className={cn(
            'px-2 py-1 text-[10px] font-medium rounded-full border',
            designSystem === 'reactbits' && 'bg-blue-500/10 text-blue-600 border-blue-500/20',
            designSystem === 'html-css' && 'bg-green-500/10 text-green-600 border-green-500/20',
            designSystem === 'tailwind' && 'bg-purple-500/10 text-purple-600 border-purple-500/20',
            designSystem === 'shadcn' && 'bg-orange-500/10 text-orange-600 border-orange-500/20',
            designSystem === 'magicui' && 'bg-pink-500/10 text-pink-600 border-pink-500/20',
            designSystem === 'animate-ui' && 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20'
          )}>
            {designSystem.toUpperCase()}
          </div>

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
                  <DialogTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    {componentName} - Implementation
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {installCommand && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium mb-2">Installation</div>
                      <div className="flex items-center justify-between bg-background rounded px-3 py-2">
                        <code className="text-sm font-mono">{installCommand}</code>
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
                'h-8 w-8 p-0 transition-all',
                customizeOpen && 'bg-primary/10 text-primary'
              )}
              aria-label="Customize"
              onClick={() => setCustomizeOpen(o => !o)}
            >
              <Settings className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {/* Component title and description */}
        <div className="p-4 pb-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Top overlay controls bar (new modular bar) */}
        {showAdvancedControls && (
          <div className="px-4 pb-2">
            <PreviewControlsBar
              className="w-full"
              onShowCode={hasCode ? () => setCodeOpen(true) : undefined}
              compact={true}
              size="sm"
            />
          </div>
        )}

        <CardContent className="relative pt-0">
          <div
            className={cn(
              'bg-muted/20 rounded-lg mt-2 overflow-hidden transition-all duration-300 relative flex items-center justify-center',
              'border border-dashed border-border/30 group-hover:border-border/50'
            )}
            style={{
              minHeight: canvasHeight,
              maxHeight: canvasHeight,
              opacity: state.playing ? 1 : 0.7,
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
            {showAdvancedControls && (
              <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium shadow-sm border">
                {state.displayText}
              </div>
            )}
          </div>

          {/* Customization panel */}
          {(alwaysShowCustomization || customizeOpen) && (
            <div className="mt-4">
              <PreviewCustomizationPanel
                collapsible
                defaultCollapsed={false}
                allowReset
                title={`Customize ${title}`}
                fields={customFields}
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
    designSystem = 'reactbits',
    ...rest
  } = props;

  // Default customization based on design system
  const systemDefaults = {
    'reactbits': {
      backgroundColor: '#060010',
      textColor: '#ffffff',
      borderRadius: 12,
      padding: 32,
      fontSize: 24
    },
    'html-css': {
      backgroundColor: '#1a1a1a',
      textColor: '#ffffff',
      borderRadius: 8,
      padding: 24,
      fontSize: 18
    },
    'tailwind': {
      backgroundColor: '#0a0a0a',
      textColor: '#ffffff',
      borderRadius: 12,
      padding: 24,
      fontSize: 20
    },
    'shadcn': {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      borderRadius: 12,
      padding: 24,
      fontSize: 16
    },
    'magicui': {
      backgroundColor: '#0a0a0a',
      textColor: '#ffffff',
      borderRadius: 16,
      padding: 32,
      fontSize: 24
    },
    'animate-ui': {
      backgroundColor: '#170D27',
      textColor: '#ffffff',
      borderRadius: 12,
      padding: 28,
      fontSize: 22
    }
  };

  const mergedCustomization = {
    ...systemDefaults[designSystem],
    ...initialCustomization
  };

  return (
    <PreviewProvider
      initialText={title}
      initialCustomization={mergedCustomization}
    >
      <PreviewTileInner title={title} designSystem={designSystem} {...rest} />
    </PreviewProvider>
  );
}

export default PreviewTile;

