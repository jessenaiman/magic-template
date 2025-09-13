'use client';

import React from "react";
import { SimpleNavbar } from "@/components/simple-navbar";
import { useDesignPage } from "@/components/design-page-context";
import { DesignPageHero } from "@/components/design-page-hero";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ButtonsLayout({ children }: LayoutProps) {
  function ButtonsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Button Components');
      setDescription('Discover interactive button components with modern animations and effects. Each implementation showcases different styling approaches and interaction patterns.');
      setFields([]);
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
  <SimpleNavbar />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <ButtonsConfigurator />
          <DesignPageHero />
          {children}
        </div>
      </main>
    </div>
  );
}
