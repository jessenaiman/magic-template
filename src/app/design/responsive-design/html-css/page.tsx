'use client';
import React, { useState } from 'react';

type View = 'mobile' | 'tablet' | 'desktop';

// --- SVG Icons for UI Controls ---
const MobileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="2"
      width="12"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="9"
      y1="19"
      x2="15"
      y2="19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const TabletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="5"
      x2="12"
      y2="5.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const DesktopIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="5"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 21L16 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 19V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

// --- Mock Navigation Components ---
const MobileNav = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around text-slate-500">
    {/* Mock Icons */}
    <div className="flex flex-col items-center text-blue-600">
      <div className="w-6 h-6 bg-blue-100 rounded"></div>
      <span className="text-xs mt-1">Home</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-6 h-6 bg-slate-200 rounded"></div>
      <span className="text-xs mt-1">Search</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-6 h-6 bg-slate-200 rounded"></div>
      <span className="text-xs mt-1">Profile</span>
    </div>
  </div>
);

const TabletNav = () => (
  <div className="absolute top-0 left-0 bottom-0 bg-slate-50 border-r border-slate-200 w-20 flex flex-col items-center py-4 space-y-4">
    {/* Mock Icons */}
    <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
    <div className="w-8 h-8 bg-blue-100 rounded-md"></div>
    <div className="w-8 h-8 bg-slate-200 rounded-md"></div>
    <div className="w-8 h-8 bg-slate-200 rounded-md"></div>
  </div>
);

const DesktopNav = () => (
  <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 h-16 flex items-center px-6 justify-between">
    <div className="flex items-center space-x-6">
      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
      <div className="h-6 w-20 bg-slate-200 rounded"></div>
      <div className="h-6 w-20 bg-slate-200 rounded"></div>
    </div>
    <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
  </div>
);

// --- Code Snippets for Designers ---
const codeSnippets: Record<View, string> = {
  mobile: `// Bottom Tab Navigation (Mobile)
// A common pattern for primary navigation on mobile devices.
// It's touch-friendly and always accessible.

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t h-16 flex justify-around items-center">
    {/* Replace with actual icons and links */}
    <a href="#" className="text-blue-600">Home</a>
    <a href="#" className="text-slate-500">Search</a>
    <a href="#" className="text-slate-500">Profile</a>
  </nav>
);`,
  tablet: `// Collapsible Sidebar (Tablet)
// Uses more horizontal space, often showing icons that expand to show text.
// Good for apps with more complex navigation needs.

const TabletNav = () => (
  <aside className="h-screen w-20 bg-slate-50 border-r p-4">
    {/* This example shows a collapsed state. 
        JavaScript would be needed to handle the expansion. */}
    <div className="flex flex-col space-y-4 items-center">
        {/* Replace with actual icons and links */}
        <div className="w-10 h-10 bg-blue-500 rounded-lg" />
        <div className="w-8 h-8 bg-slate-200 rounded-md" />
    </div>
  </aside>
);`,
  desktop: `// Full Top Navigation Bar (Desktop)
// Makes use of the wide screen real estate for logos, links, and user actions.
// This is the standard for most websites and complex web apps.

const DesktopNav = () => (
  <header className="w-full bg-white border-b h-16 flex items-center justify-between px-6">
    <div className="flex items-center space-x-6">
      <div className="w-8 h-8 bg-blue-500 rounded-lg" />
      <a href="#" className="font-semibold text-slate-700">Dashboard</a>
      <a href="#" className="text-slate-500">Projects</a>
    </div>
    <div className="w-8 h-8 bg-slate-300 rounded-full" />
  </header>
);`,
};

// --- Main Helper Component ---
const ResponsiveLayoutHelper = () => {
  const [view, setView] = useState<View>('desktop');
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[view]);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const viewConfig: Record<
    View,
    { width: string; height: string; nav: React.ReactElement }
  > = {
    mobile: { width: 'w-[375px]', height: 'h-[667px]', nav: <MobileNav /> },
    tablet: { width: 'w-[768px]', height: 'h-[1024px]', nav: <TabletNav /> },
    desktop: { width: 'w-full', height: 'h-[720px]', nav: <DesktopNav /> },
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Responsive Layout & Navigation Helper
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            A visual guide for designers to understand and implement common
            responsive patterns.
          </p>
        </div>

        {/* --- View Controls --- */}
        <div className="flex justify-center items-center space-x-2 bg-white p-2 rounded-lg shadow-sm border mb-8">
          <button
            onClick={() => setView('mobile')}
            className={`p-2 rounded-md transition-colors ${view === 'mobile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}
          >
            <MobileIcon />
          </button>
          <button
            onClick={() => setView('tablet')}
            className={`p-2 rounded-md transition-colors ${view === 'tablet' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}
          >
            <TabletIcon />
          </button>
          <button
            onClick={() => setView('desktop')}
            className={`p-2 rounded-md transition-colors ${view === 'desktop' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}
          >
            <DesktopIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* --- Visual Simulation --- */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Visual Simulation
            </h2>
            <div
              className={`relative bg-white rounded-lg shadow-2xl border border-slate-200 transition-all duration-300 ease-in-out ${viewConfig[view].width} ${viewConfig[view].height}`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {/* Mock Page Content */}
                <div
                  className={`p-4 ${view === 'tablet' ? 'pl-24' : ''} ${view === 'desktop' ? 'pt-20' : ''}`}
                >
                  <div className="h-40 bg-slate-100 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-6 w-1/2 bg-slate-100 rounded"></div>
                  </div>
                </div>
                {/* Render the correct navigation */}
              </div>
            </div>
          </div>

          {/* --- Code Example --- */}
          <div className="sticky top-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Code for Developers
            </h2>
            <div className="bg-slate-800 rounded-lg shadow-lg">
              <div className="flex justify-between items-center px-4 py-2 border-b border-slate-700">
                <p className="text-sm text-slate-400">
                  React (JSX) & Tailwind CSS
                </p>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white transition-colors px-3 py-1 bg-slate-700 rounded-md"
                >
                  <CopyIcon />
                  <span>{copySuccess || 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 text-sm text-slate-300 overflow-x-auto">
                <code></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayoutHelper;
