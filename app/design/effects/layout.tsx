'use client';

import { DesignNavigation } from "@/components/ui/design-navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        {children}
      </main>
    </div>
  );
}
