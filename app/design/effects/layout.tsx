'use client';

import React from 'react';

import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  function EffectsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Effects');
      setDescription('Special effects and visual enhancements for modern web applications.');
      setFields(getBaseFields('effects'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  const tabs = {
    items: [
      { label: "HTML/CSS", value: "html-css" },
      { label: "Tailwind", value: "tailwind" },
      { label: "MagicUI", value: "magicui" },
    ],
    basePath: "/design/effects"
  };

  return (
        <div className="flex flex-col min-h-screen"> 
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <EffectsConfigurator />
          {children}
        </div>  
      </main>
    </div>
  );
}
