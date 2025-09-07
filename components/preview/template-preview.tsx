'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Copy, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CodeHighlighter } from '@/components/code-highlighter';

// Utility function to get language for syntax highlighting
function getLanguageForCode(code: string): string {
  if (code.includes('import') || code.includes('export') || code.includes('function') || code.includes('const') || code.includes('let')) {
    return code.includes('tsx') || code.includes('<') ? 'tsx' : 'javascript';
  }
  if (code.includes('class=') || code.includes('id=') || code.includes('<div') || code.includes('<span')) {
    return 'html';
  }
  if (code.includes('bg-') || code.includes('text-') || code.includes('p-') || code.includes('m-')) {
    return 'css';
  }
  return 'javascript';
}

// Simple code generation function for templates
function generateTemplateCode(template: string, variables: Record<string, any> = {}): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = variables[key];
    if (value === undefined || value === null) {
      return key;
    }
    if (typeof value === 'string') {
      if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)) {
        return `"${value.replace(/"/g, '\\"')}"`;
      }
      return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return value.toString();
    }
    return JSON.stringify(value);
  });
}

export interface TemplatePreviewProps {
  title: string;
  description?: string;
  componentName: string;
  code: string;
  variables?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  showCodeByDefault?: boolean;
}

export function TemplatePreview({
  title,
  description,
  componentName,
  code,
  variables = {},
  children,
  className,
  showCodeByDefault = false,
}: TemplatePreviewProps) {
  const [showCode, setShowCode] = React.useState(showCodeByDefault);
  const [copied, setCopied] = React.useState(false);

  const generatedCode = React.useMemo(() => {
    return generateTemplateCode(code, variables);
  }, [code, variables]);

  const language = React.useMemo(() => {
    return getLanguageForCode(generatedCode);
  }, [generatedCode]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1 text-sm text-muted-foreground">
                {description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="h-8 w-8 p-0"
            >
              {showCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyCode}
              className="h-8 w-8 p-0"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Preview */}
        <div className="rounded-lg border bg-card p-4">
          {children}
        </div>

        {/* Code */}
        {showCode && (
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                {componentName}
              </span>
              {copied && (
                <span className="text-xs text-green-600 font-medium">
                  Copied!
                </span>
              )}
            </div>
            <CodeHighlighter
              code={generatedCode}
              language={language}
              className="text-sm"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
