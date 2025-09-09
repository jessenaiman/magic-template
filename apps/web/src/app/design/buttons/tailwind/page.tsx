'use client';

import * as React from 'react';
import { PreviewTile } from '@/src/components/preview/preview-tile';
import { useDesignPage } from '@/src/components/design-page-context';

import { PreviewGrid } from '@/src/components/preview/preview-grid';

function PageConfigurator() {
  const { setTitle, setDescription } = useDesignPage();

  React.useEffect(() => {
    setTitle('Tailwind CSS Buttons');
    setDescription(
      'Modern button designs using Tailwind CSS utility classes for rapid development.',
    );
  }, [setTitle, setDescription]);

  return null;
}

export default function TailwindButtonsPage() {
  return (
    <>
      <PageConfigurator />
      <PreviewGrid>
      <PreviewTile
        title="Primary Button"
        componentName="tailwind-primary-button"
        code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Primary Action
</button>`}
      >
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
          Primary Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Secondary Button"
        componentName="tailwind-secondary-button"
        code={`<button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 border border-gray-300">
  Secondary Action
</button>`}
      >
        <button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 border border-gray-300">
          Secondary Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Success Button"
        componentName="tailwind-success-button"
        code={`<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Success Action
</button>`}
      >
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
          Success Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Danger Button"
        componentName="tailwind-danger-button"
        code={`<button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Danger Action
</button>`}
      >
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
          Danger Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Outline Button"
        componentName="tailwind-outline-button"
        code={`<button className="px-6 py-3 bg-transparent text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
  Outline Action
</button>`}
      >
        <button className="px-6 py-3 bg-transparent text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
          Outline Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Ghost Button"
        componentName="tailwind-ghost-button"
        code={`<button className="px-6 py-3 bg-transparent text-gray-600 font-semibold rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
  Ghost Action
</button>`}
      >
        <button className="px-6 py-3 bg-transparent text-gray-600 font-semibold rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
          Ghost Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Large Button"
        componentName="tailwind-large-button"
        code={`<button className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl">
  Large Action
</button>`}
      >
        <button className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl">
          Large Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Small Button"
        componentName="tailwind-small-button"
        code={`<button className="px-3 py-1.5 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
  Small Action
</button>`}
      >
        <button className="px-3 py-1.5 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
          Small Action
        </button>
      </PreviewTile>

      <PreviewTile
        title="Loading Button"
        componentName="tailwind-loading-button"
        code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md flex items-center gap-2" disabled>
  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`}
      >
        <button
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled
        >
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </button>
      </PreviewTile>
      </PreviewGrid>
    </>
  );
}
