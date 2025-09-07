'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewTileExpansion } from '@/components/preview/preview-context';
import { usePreviewContext, CustomizationSettings } from '@/components/preview/preview-context';
import PreviewCustomizationPanel, {
  FieldConfig,
} from '@/components/preview/preview-customization-panel';
import { PreviewTileHeader } from '@/components/preview/preview-tile-header';
import { CodeHighlighter } from '@/components/code-highlighter';

// Utility function to get language for syntax highlighting based on code type
function getLanguageForCodeType(codeType: string): string {
  switch (codeType) {
    case 'jsx':
    case 'tsx':
      return 'tsx';
    case 'css':
      return 'css';
    case 'tailwind':
      return 'css';
    case 'html':
      return 'html';
    default:
      return 'tsx';
  }
}

// Unified template replacement with optional type-aware processing
function replaceTemplatePlaceholders(
  template: string,
  customization: Partial<CustomizationSettings>,
  typeAware: boolean = false
): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = customization[key];

    // Handle undefined/null values
    if (value === undefined || value === null) {
      return key; // Keep placeholder if not found
    }

    if (!typeAware) {
      // Simple replacement for CSS, HTML, Tailwind
      return value.toString();
    }

    // Type-aware replacement for JSX/TSX
    if (typeof value === 'string') {
      // For strings, wrap in quotes if it looks like a value (not a variable name)
      if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)) {
        return `"${value.replace(/"/g, '\\"')}"`;
      }
      return value;
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return value.toString();
    }

    // For objects, arrays, etc., use JSON.stringify
    return JSON.stringify(value);
  });
}

// Robust code generation function with template support
function generateCode(
  template: string,
  customization: Partial<CustomizationSettings>,
  codeType: string = 'jsx'
): string {
  // Handle different code types with appropriate template handling
  switch (codeType) {
    case 'jsx':
    case 'tsx':
      // Use type-aware replacement for better JavaScript code generation
      return replaceTemplatePlaceholders(template, customization, true);
    case 'css':
    case 'tailwind':
    case 'html':
      // Use simple replacement for non-JavaScript code
      return replaceTemplatePlaceholders(template, customization, false);
    default:
      return replaceTemplatePlaceholders(template, customization, true);
  }
}

// Get file extension based on code type
function getFileExtension(codeType: string): string {
  switch (codeType) {
    case 'jsx':
      return 'jsx';
    case 'tsx':
      return 'tsx';
    case 'css':
      return 'css';
    case 'tailwind':
      return 'css';
    case 'html':
      return 'html';
    default:
      return 'tsx';
  }
}

export interface PreviewTileProps {
  title: string;
  description?: string;
  componentName: string;
  code: string;
  customFields?: FieldConfig[];
  initialCustomization?: Partial<CustomizationSettings>;
  children: React.ReactNode | ((customization: Partial<CustomizationSettings>) => React.ReactNode);
  className?: string;
  codeType?: 'jsx' | 'css' | 'tailwind' | 'html' | 'tsx';
  baseViewCode?: string;
}

export function PreviewTile(props: PreviewTileProps) {
  const {
    title,
    description,
    componentName,
    code,
    customFields = [],
    initialCustomization = {},
    children,
    className,
    codeType = 'jsx',
    baseViewCode,
  } = props;

  // Require expansion context from layout
  const { expandedTile, setExpandedTile } = usePreviewTileExpansion();
  const [showCode, setShowCode] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  // Bind to global PreviewContext so page-wide controls affect tiles
  const { state } = usePreviewContext();
  const customization = React.useMemo<Partial<CustomizationSettings>>(
    () => ({ ...state.customization, ...initialCustomization }),
    [state.customization, initialCustomization]
  );

  // Smoothly scroll the tile into view when it becomes expanded
  React.useEffect(() => {
    const isExpanded = expandedTile === title;
    if (!isExpanded) return;

    // Respect reduced motion
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Defer slightly to ensure layout has settled before scrolling
    const id = window.setTimeout(() => {
      rootRef.current?.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'center',
      });
    }, 50);
    return () => window.clearTimeout(id);
  }, [expandedTile, title]);

  // Generate code only when needed (when showCode is true or expanded)
  const generatedCode = React.useMemo(() => {
    if (!showCode && expandedTile !== title) {
      return baseViewCode || '// Click the code icon to view generated code';
    }

    return generateCode(code, customization, codeType);
  }, [showCode, expandedTile, title, code, customization, codeType, baseViewCode]);

  // Handle outside click to close any expanded panels
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInsideTile = target?.closest('[data-preview-tile]');
      
      if (!isInsideTile && expandedTile) {
        setExpandedTile(null);
        setShowControls(false);
        setShowCode(false);
      }
    };

    if (expandedTile || showControls || showCode) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [expandedTile, showControls, showCode, setExpandedTile]);

  const handleShowCode = () => {
    setShowCode(current => !current);
    if (!expandedTile) {
      setExpandedTile(title);
    }
    // Close customization when opening code
    if (showControls) {
      setShowControls(false);
    }
  };

  const handleToggleControls = () => {
    if (expandedTile !== title) setExpandedTile(title);
    setShowControls(c => !c);
    // Close code when opening customization
    if (showCode) {
      setShowCode(false);
    }
  };

  const handleClose = () => {
    setExpandedTile(null);
    setShowControls(false);
    setShowCode(false);
  };

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(generatedCode);
    }
  };

  // The child component receives the effective customization state
  return (
    <Card
      ref={rootRef as any}
      className={cn(
        "group relative overflow-hidden transition-all duration-300 flex flex-col",
        expandedTile === title
          ? "z-20 col-span-full scale-[1.03] ring-2 ring-primary"
          : "",
        className
      )}
      data-preview-tile
    >
       <PreviewTileHeader
         title={title}
         description={description}
         hasCustomFields={true}
         onCustomizeClick={handleToggleControls}
         onCodeClick={handleShowCode}
         onCopyClick={handleCopy}
         onCloseClick={handleClose}
         showCustomize={showControls}
         showCode={showCode}
         isExpanded={expandedTile === title}
       />

       {/* Preview Area with proper alignment and background */}
       <div className="flex-1 relative p-4">
         <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-background to-muted/20 rounded-lg border border-border/50 overflow-hidden">
           <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              {/* Handle both regular React children and function children that receive customization */}
              {typeof children === 'function' ? children(customization) : children}
           </div>
         </div>
       </div>

       {/* Description Footnote */}
       {description && (
         <div className="p-3 text-xs text-muted-foreground border-t bg-muted/20">
           <p className="line-clamp-2 leading-relaxed">
             {description}
           </p>
         </div>
       )}

       {/* Tile-level Customization Panel (expanded AND toggled) */}
       <AnimatePresence>
         {expandedTile === title && showControls && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.2 }}
             className="border-t overflow-hidden"
             ref={panelRef}
           >
             <div className="p-6">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-sm font-semibold tracking-tight">Component Controls</h4>
                 <Button
                   size="sm"
                   variant="ghost"
                   className="h-6 w-6 p-0 hover:bg-muted"
                   onClick={(e) => {
                     e.stopPropagation();
                     setShowControls(false);
                   }}
                 >
                   <X className="h-4 w-4" />
                 </Button>
               </div>
               <PreviewCustomizationPanel
                 fields={customFields}
                 className="border border-primary/20 bg-primary/5 p-4 rounded-lg"
                 allowReset={false}
               />
             </div>
           </motion.div>
         )}
       </AnimatePresence>

       {/* Code Panel */}
       <AnimatePresence>
         {expandedTile === title && showCode && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.2 }}
             className="border-t overflow-hidden"
           >
             <div className="p-6">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm text-muted-foreground">
                   {componentName}.{getFileExtension(codeType)}
                 </span>
               </div>
               <CodeHighlighter
                 language={getLanguageForCodeType(codeType)}
                 code={generatedCode}
               />
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </Card>
  );
}