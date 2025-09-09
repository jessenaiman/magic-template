'use client';

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@repo/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/components/ui/tooltip';

interface CodeHighlighterProps {
  language: string;
  code: string;
  wrap?: boolean;
  className?: string;
}

export function CodeHighlighter({
  language,
  code,
  wrap = false,
  className,
}: CodeHighlighterProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setHasCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }).catch(err => {
      toast.error('Failed to copy code.');
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className={cn('relative w-full rounded-md', className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCopy}
              className="absolute top-2 right-2 z-10 h-8 w-8"
            >
              {hasCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{hasCopied ? 'Copied!' : 'Copy code'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={wrap}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          borderRadius: '0.5rem',
          width: '100%',
        }}
        codeTagProps={{
          className: 'font-mono text-sm',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}