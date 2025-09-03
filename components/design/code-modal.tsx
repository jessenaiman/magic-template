"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Copy, Check } from "lucide-react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  componentName: string;
  componentCode: string;
  tailwindCode: string;
}

export function CodeModal({ 
  open, 
  onOpenChange, 
  componentName, 
  componentCode, 
  tailwindCode 
}: CodeModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            {componentName} - Code
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="component" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="component">Component</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind Only</TabsTrigger>
          </TabsList>
          
          <TabsContent value="component" className="mt-4">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="absolute right-2 top-2 z-10"
                onClick={() => copyToClipboard(componentCode)}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <div className="max-h-96 overflow-auto rounded-md border">
                <pre className="p-4 bg-muted rounded text-sm overflow-auto">
                  <code>{componentCode}</code>
                </pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tailwind" className="mt-4">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="absolute right-2 top-2 z-10"
                onClick={() => copyToClipboard(tailwindCode)}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <div className="max-h-96 overflow-auto rounded-md border">
                <pre className="p-4 bg-muted rounded text-sm overflow-auto">
                  <code>{tailwindCode}</code>
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
