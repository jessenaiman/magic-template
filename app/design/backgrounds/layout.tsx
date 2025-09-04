'use client';

import React from "react";
import { DesignTabs } from "@/components/design-tabs";
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";

interface LayoutProps {
  children: React.ReactNode;
}

export default function BackgroundsLayout({ children }: LayoutProps) {
  function BackgroundsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Background Components');
      setDescription('Explore dynamic and interactive background patterns across different technology stacks. Each implementation demonstrates modern design techniques and performance optimizations.');
      setFields(getBaseFields('background'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <BackgroundsConfigurator />
          
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "MagicUI", value: "magicui" },
              { label: "ReactBits", value: "reactbits" },
              { label: "Animate UI", value: "animate-ui" }
            ]}
            basePath="/design/backgrounds"
          />
          
          {children}
        </div>
      </main>
    </div>
  );
}
