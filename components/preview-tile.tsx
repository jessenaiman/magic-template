'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Code2, Settings, Share, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePreviewContext, CustomizationSettings } from '@/components/preview-context';
import PreviewCustomizationPanel, { FieldConfig } from '@/components/preview-customization-panel';
import { usePreviewTileExpansion } from '@/components/preview-surface';
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

// Robust code generation function with template support
function generateCode(
  template: string,
  customization: Partial<CustomizationSettings>,
  codeType: string = 'jsx'
): string {
  // Handle different code types with appropriate templates
  switch (codeType) {
    case 'jsx':
    case 'tsx':
      return generateJsxCode(template, customization);
    case 'css':
      return generateCssCode(template, customization);
    case 'tailwind':
      return generateTailwindCode(template, customization);
    case 'html':
      return generateHtmlCode(template, customization);
    default:
      return generateJsxCode(template, customization);
  }
}

// JSX/TSX code generation with proper template handling
function generateJsxCode(template: string, customization: Partial<CustomizationSettings>): string {
  // Enhanced template replacement that handles complex structures
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = customization[key];
    
    // Handle different value types appropriately
    if (value === undefined || value === null) {
      return key; // Keep the placeholder if not found
    }
    
    if (typeof value === 'string') {
      // For strings, wrap in quotes if it looks like a value (not a variable name)
      if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)) {
        return `"${value.replace(/"/g, '\\"')}"`;
      }
      return value;
    }
    
    if (typeof value === 'number') {
      return value.toString();
    }
    
    if (typeof value === 'boolean') {
      return value.toString();
    }
    
    // For objects, arrays, etc., use JSON stringify
    return JSON.stringify(value);
  });
}

// CSS code generation
function generateCssCode(template: string, customization: Partial<CustomizationSettings>): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = customization[key];
    return value !== undefined && value !== null ? value.toString() : key;
  });
}

// Tailwind code generation (similar to CSS but might need special handling)
function generateTailwindCode(template: string, customization: Partial<CustomizationSettings>): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = customization[key];
    return value !== undefined && value !== null ? value.toString() : key;
  });
}

// HTML code generation
function generateHtmlCode(template: string, customization: Partial<CustomizationSettings>): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = customization[key];
    return value !== undefined && value !== null ? value.toString() : key;
  });
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
  children: (customization: Partial<CustomizationSettings>) => React.ReactNode;
  className?: string;
  codeType?: 'jsx' | 'css' | 'tailwind' | 'html' | 'tsx';
  baseViewCode?: string;
}

export function PreviewTile({
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
}: PreviewTileProps) {
  const { expandedTile, setExpandedTile } = usePreviewTileExpansion();
  const [showCode, setShowCode] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Bind to global PreviewContext so page-wide controls affect tiles
  const { state } = usePreviewContext();
  const customization = React.useMemo<Partial<CustomizationSettings>>(
    () => ({ ...state.customization, ...initialCustomization }),
    [state.customization, initialCustomization]
  );

  // Generate code only when needed (when showCode is true or expanded)
  const generatedCode = React.useMemo(() => {
    if (!showCode && expandedTile !== title) {
      return baseViewCode || '// Click the code icon to view generated code';
    }

    return generateCode(code, customization, codeType);
  }, [showCode, expandedTile, title, code, customization, codeType, baseViewCode]);

  // Handle outside click to close customization panel
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showControls &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement)?.closest('[data-preview-tile]')
      ) {
        setShowControls(false);
      }
    };

    if (showControls) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showControls]);

  const handleExpand = () => {
    setExpandedTile(current => (current === title ? null : title));
    setShowCode(false);
  };

  const handleShowCode = () => {
    setShowCode(current => !current);
    if (!expandedTile) {
      setExpandedTile(title);
    }
  };
  const handleToggleControls = () => {
    if (expandedTile !== title) setExpandedTile(title);
    setShowControls(c => !c);
    // If opening controls, don't force code panel open/closed
  };

  // The child component receives the effective customization state
  return (
     <div
       className={cn(
         "group relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 flex flex-col min-h-[300px]",
         expandedTile === title
           ? "z-20 col-span-full md:col-span-3 lg:col-span-4 scale-[1.03] ring-2 ring-primary"
           : "",
         className
       )}
       data-preview-tile
       onClick={() => {
         if (expandedTile !== title) setExpandedTile(title);
       }}
     >
       {/* Title Header */}
       <header className="p-4 border-b flex items-center justify-between gap-2">
         <div className="flex-1 min-w-0">
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <h3 className="text-lg font-semibold line-clamp-1 cursor-help">{title}</h3>
               </TooltipTrigger>
               {description && (
                 <TooltipContent side="top" className="max-w-xs">
                   <p className="text-sm">{description}</p>
                 </TooltipContent>
               )}
             </Tooltip>
           </TooltipProvider>
         </div>
         {/* Icon Bar */}
         <div className="flex items-center gap-2">
           <TooltipProvider>
             {customFields.length > 0 && (
               <Tooltip>
                 <TooltipTrigger asChild>
                   <Button
                     size="icon"
                     variant="ghost"
                     className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                     onClick={handleToggleControls}
                   >
                     <Settings className="h-4 w-4" />
                   </Button>
                 </TooltipTrigger>
                 <TooltipContent>Customize</TooltipContent>
               </Tooltip>
             )}
             <Tooltip>
               <TooltipTrigger asChild>
                 <Button
                   size="icon"
                   variant="ghost"
                   className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                   onClick={handleShowCode}
                 >
                   <Code2 className="h-4 w-4" />
                 </Button>
               </TooltipTrigger>
               <TooltipContent>View Code</TooltipContent>
             </Tooltip>
             <Tooltip>
               <TooltipTrigger asChild>
                 <Button
                   size="icon"
                   variant="ghost"
                   className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                   onClick={() => {
                     if (navigator?.clipboard) {
                       navigator.clipboard.writeText(generatedCode);
                     }
                   }}
                 >
                   <Share className="h-4 w-4" />
                 </Button>
               </TooltipTrigger>
               <TooltipContent>Share</TooltipContent>
             </Tooltip>
           </TooltipProvider>
         </div>
       </header>

       {/* Full-Height Preview Area with Overlay Support */}
       <div className="flex-1 relative min-h-[200px] flex flex-col">
         <div className="relative flex-1 flex items-stretch">
           {/* Overlay container for background/text overlays */}
           <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
             {/* Overlay text/content slot (optional, can be extended via children or prop) */}
             {/* Example: <span className="text-2xl font-bold text-white/80 drop-shadow">Overlay Text</span> */}
           </div>
           <div className="relative flex-1 flex items-center justify-center h-full rounded-md border bg-background overflow-hidden">
             {typeof children === 'function'
               ? children(customization)
               : <div className="text-red-500">Error: children prop must be a function</div>
             }
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
         {expandedTile === title && showControls && customFields.length > 0 && (
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
         {(showCode || expandedTile === title) && (
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
     </div>
  );
}