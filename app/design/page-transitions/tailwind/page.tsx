import React from 'react';

// A simple SVG icon for the animation section
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-6 w-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// Main component to showcase Tailwind CSS transitions and effects
const TransitionsDemo = () => {
  return (
    <div className="bg-white text-slate-800 font-sans p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Tailwind CSS Transitions
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A demonstration of transitions, transforms, and animations for a modern web application.
          </p>
        </div>

        {/* --- Transitions Section --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b pb-2">Transitions</h2>
          <p className="text-slate-600 mb-6">
            Control which CSS properties transition when they change. Hover over the elements below to see the effects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Transition: All */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-lg bg-blue-500 flex items-center justify-center text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
                All
              </div>
              <code className="mt-3 text-sm text-slate-500">transition-all</code>
            </div>
            {/* Transition: Colors */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-lg bg-slate-800 flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-slate-900">
                Colors
              </div>
              <code className="mt-3 text-sm text-slate-500">transition-colors</code>
            </div>
            {/* Transition: Opacity */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-lg bg-slate-800 flex items-center justify-center text-white font-semibold transition-opacity duration-300 hover:opacity-50">
                Opacity
              </div>
              <code className="mt-3 text-sm text-slate-500">transition-opacity</code>
            </div>
            {/* Transition: Shadow */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-lg bg-white border flex items-center justify-center font-semibold transition-shadow duration-300 hover:shadow-xl">
                Shadow
              </div>
              <code className="mt-3 text-sm text-slate-500">transition-shadow</code>
            </div>
            {/* Transition: Transform */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-lg bg-slate-800 flex items-center justify-center text-white font-semibold transition-transform duration-300 hover:rotate-12">
                Transform
              </div>
              <code className="mt-3 text-sm text-slate-500">transition-transform</code>
            </div>
          </div>
        </section>

        {/* --- Transforms Section --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b pb-2">Transforms</h2>
          <p className="text-slate-600 mb-6">
            Apply 2D transformations to elements. These are often combined with transitions for smooth effects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <button className="px-6 py-3 rounded-md bg-white border font-semibold transition-transform duration-200 ease-in-out hover:scale-110">
              Scale
            </button>
            <button className="px-6 py-3 rounded-md bg-white border font-semibold transition-transform duration-200 ease-in-out hover:rotate-6">
              Rotate
            </button>
            <button className="px-6 py-3 rounded-md bg-white border font-semibold transition-transform duration-200 ease-in-out hover:translate-x-2 hover:-translate-y-1">
              Translate
            </button>
            <button className="px-6 py-3 rounded-md bg-white border font-semibold transition-transform duration-200 ease-in-out hover:skew-x-12">
              Skew
            </button>
          </div>
        </section>

        {/* --- Animations Section --- */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b pb-2">Animations</h2>
          <p className="text-slate-600 mb-6">
            Use pre-defined, looping animations for loading states and other continuous effects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Animate Spin */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center">
                <LoadingSpinner />
              </div>
              <code className="mt-3 text-sm text-slate-500">animate-spin</code>
            </div>
            {/* Animate Ping */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
              </div>
              <code className="mt-3 text-sm text-slate-500">animate-ping</code>
            </div>
            {/* Animate Pulse */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg bg-slate-300 animate-pulse"></div>
              <code className="mt-3 text-sm text-slate-500">animate-pulse</code>
            </div>
            {/* Animate Bounce */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 animate-bounce"></div>
              </div>
              <code className="mt-3 text-sm text-slate-500">animate-bounce</code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransitionsDemo;
