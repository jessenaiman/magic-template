'use client';

export default function BackgroundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        {children}
      </main>
    </div>
  );
}
