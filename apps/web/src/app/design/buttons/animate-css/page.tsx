'use client';

import * as React from 'react';
import { PreviewTile } from '@/src/components/preview/preview-tile';
import { useDesignPage } from '@/src/components/design-page-context';
import { Play, Heart, Download, Share, Zap, Sparkles } from 'lucide-react';

function PageConfigurator() {
  const { setTitle, setDescription } = useDesignPage();

  React.useEffect(() => {
    setTitle('Animate.css Buttons');
    setDescription(
      'Interactive button animations using CSS keyframes and Animate.css library for smooth, performant effects.',
    );
  }, [setTitle, setDescription]);

  return null;
}

export default function AnimateCssButtonsPage() {
  return (
    <>
      <PageConfigurator />
      <PreviewTile
        title="Bounce Effect"
        componentName="animate-css-bounce-button"
        code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:animate-bounce transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  <Play className="inline-block w-4 h-4 mr-2" />
  Bounce Me
</button>`}
      >
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:animate-bounce transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Play className="inline-block w-4 h-4 mr-2" />
          Bounce Me
        </button>
      </PreviewTile>

      <PreviewTile
        title="Pulse Effect"
        componentName="animate-css-pulse-button"
        code={`<button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
  <Heart className="inline-block w-4 h-4 mr-2" />
  Pulse Me
</button>`}
      >
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          <Heart className="inline-block w-4 h-4 mr-2" />
          Pulse Me
        </button>
      </PreviewTile>

      <PreviewTile
        title="Ping Effect"
        componentName="animate-css-ping-button"
        code={`<button className="relative px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
  <span className="absolute -top-1 -right-1 flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>
  <Download className="inline-block w-4 h-4 mr-2" />
  Download
</button>`}
      >
        <button className="relative px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <Download className="inline-block w-4 h-4 mr-2" />
          Download
        </button>
      </PreviewTile>

      <PreviewTile
        title="Spin Effect"
        componentName="animate-css-spin-button"
        code={`<button className="group px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-purple-700">
  <Zap className="inline-block w-4 h-4 mr-2 group-hover:animate-spin transition-transform" />
  Spin Icon
</button>`}
      >
        <button className="group px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-purple-700">
          <Zap className="inline-block w-4 h-4 mr-2 group-hover:animate-spin transition-transform" />
          Spin Icon
        </button>
      </PreviewTile>

      <PreviewTile
        title="Shake Effect"
        componentName="animate-css-shake-button"
        code={`/* CSS */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake:hover {
  animation: shake 0.5s ease-in-out;
}

/* JSX */
<button className="animate-shake px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
  <Share className="inline-block w-4 h-4 mr-2" />
  Shake Me
</button>`}
      >
        <style jsx>{`
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            75% {
              transform: translateX(5px);
            }
          }
          .animate-shake:hover {
            animation: shake 0.5s ease-in-out;
          }
        `}</style>
        <button className="animate-shake px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          <Share className="inline-block w-4 h-4 mr-2" />
          Shake Me
        </button>
      </PreviewTile>

      <PreviewTile
        title="Wiggle Effect"
        componentName="animate-css-wiggle-button"
        code={`/* CSS */
@keyframes wiggle {
  0%, 7% { transform: rotateZ(0); }
  15% { transform: rotateZ(-15deg); }
  20% { transform: rotateZ(10deg); }
  25% { transform: rotateZ(-10deg); }
  30% { transform: rotateZ(6deg); }
  35% { transform: rotateZ(-4deg); }
  40%, 100% { transform: rotateZ(0); }
}
.animate-wiggle:hover {
  animation: wiggle 1s ease-in-out;
}

/* JSX */
<button className="animate-wiggle px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
  <Sparkles className="inline-block w-4 h-4 mr-2" />
  Wiggle Fun
</button>`}
      >
        <style jsx>{`
          @keyframes wiggle {
            0%,
            7% {
              transform: rotateZ(0);
            }
            15% {
              transform: rotateZ(-15deg);
            }
            20% {
              transform: rotateZ(10deg);
            }
            25% {
              transform: rotateZ(-10deg);
            }
            30% {
              transform: rotateZ(6deg);
            }
            35% {
              transform: rotateZ(-4deg);
            }
            40%,
            100% {
              transform: rotateZ(0);
            }
          }
          .animate-wiggle:hover {
            animation: wiggle 1s ease-in-out;
          }
        `}</style>
        <button className="animate-wiggle px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          <Sparkles className="inline-block w-4 h-4 mr-2" />
          Wiggle Fun
        </button>
      </PreviewTile>
    </>
  );
}