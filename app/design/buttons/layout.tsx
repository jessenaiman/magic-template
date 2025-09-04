'use client';

import React from "react";
import { DesignNavigation } from "@/components/ui/design-navigation";
import { DesignTabs } from "@/components/design-tabs";
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ButtonsLayout({ children }: LayoutProps) {
  function ButtonsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Button Components');
      setDescription('Discover interactive button components with modern animations and effects. Each implementation showcases different styling approaches and interaction patterns.');
      setFields(getBaseFields('button'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  return (
    <div className="space-y-8">
      <ButtonsConfigurator />
      
      <div className="sticky top-0 z-10 -mx-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-6 py-4">
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "Shadcn", value: "shadcn" },
              { label: "Magic", value: "magic" },
              { label: "Animate CSS", value: "animate-css" }
            ]}
            basePath="/design/buttons"
          />
        </div>
      </div>
      
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}
