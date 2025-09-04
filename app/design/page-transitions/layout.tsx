'use client';

import { DesignNavigation } from "@/components/ui/design-navigation";
import { DesignTabs } from "@/components/design-tabs";
import React from 'react';
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageTransitionsLayout({ children }: LayoutProps) {
  function PageTransitionsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Page Transitions');
      setDescription('Smooth and engaging transitions between pages and views.');
      setFields(getBaseFields('page-transition'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="space-y-6">
          <PageTransitionsConfigurator />
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "MagicUI", value: "magicui" },
              { label: "Next.js", value: "nextjs" }
            ]}
            basePath="/design/page-transitions"
          />
          {children}
        </div>
      </main>
    </div>
  );
}
