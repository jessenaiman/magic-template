'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DesignTabsProps {
  category: 'text' | 'backgrounds' | 'components' | 'effects';
  technologies: string[];
  children: React.ReactNode;
  className?: string;
}

export function DesignTabs({ category, technologies, children, className }: DesignTabsProps) {
  const pathname = usePathname();
  const currentTech = pathname.split('/').pop() || technologies[0];

  return (
    <Tabs defaultValue={currentTech} className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-6">
        <TabsList className="w-full max-w-md">
          {technologies.map((tech) => (
            <TabsTrigger key={tech} value={tech} asChild>
              <Link href={`/design/${category}/${tech}`}>
                {tech === 'html-css' ? 'HTML/CSS' : tech.charAt(0).toUpperCase() + tech.slice(1)}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {React.Children.map(children, (child, index) => (
        <TabsContent value={technologies[index]} className="mt-0">
          {child}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default DesignTabs;