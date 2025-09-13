'use client';

import * as React from 'react';
import { PreviewTile } from '@/components/preview/preview-tile';
import { CustomizationSettings } from '@/components/preview/preview-context';

function Container({
  children,
  customization,
}: {
  children: React.ReactNode;
  customization: Partial<CustomizationSettings>;
}) {
  const { backgroundColor, borderRadius = 12, padding = 16 } = customization;
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: backgroundColor as string | undefined,
        borderRadius: typeof borderRadius === 'number' ? borderRadius : 12,
        padding: typeof padding === 'number' ? padding : 16,
      }}
    >
      {children}
    </div>
  );
}

export default function TailwindEffectsPage() {
  return (
    <>
      <div className="col-span-full mb-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Tailwind CSS Effects
        </h2>
        <p className="text-muted-foreground">
          A collection of modern web design effects created with Tailwind CSS
          utility classes.
        </p>
      </div>

      <PulseEffectPreview />
      <HoverGrowPreview />
      <GradientTextPreview />
      <BackdropBlurPreview />
      <AnimatedBorderPreview />
      <ShimmerEffectPreview />
    </>
  );
}

function PulseEffectPreview() {
  return (
    <PreviewTile
      title="Pulse Effect"
      componentName="PulseEffect"
      description="A pulsing animation effect using Tailwind's animate-pulse"
      code={`<div className="animate-pulse bg-blue-500 rounded-full h-24 w-24"></div>`}
      customFields={[
        {
          id: 'size',
          label: 'Size',
          type: 'slider',
          min: 40,
          max: 120,
          step: 10,
        },
        { id: 'color', label: 'Color', type: 'color' },
        { id: 'shape', label: 'Shape', type: 'text' },
      ]}
      initialCustomization={{
        size: 80,
        color: '#3b82f6',
        shape: 'rounded-full',
      }}
    >
      {customization => (
        <Container customization={customization}>
          <div
            className={`animate-pulse ${customization.shape || 'rounded-full'}`}
            style={{
              backgroundColor: customization.color || '#3b82f6',
              height: `${customization.size || 80}px`,
              width: `${customization.size || 80}px`,
            }}
          ></div>
        </Container>
      )}
    </PreviewTile>
  );
}

function HoverGrowPreview() {
  return (
    <PreviewTile
      title="Hover Grow"
      componentName="HoverGrow"
      description="An element that grows on hover using Tailwind's transform and transition"
      code={`<div className="transform transition-all duration-300 hover:scale-110 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">Hover me</div>`}
      customFields={[
        { id: 'text', label: 'Text', type: 'text' },
        {
          id: 'scale',
          label: 'Scale Amount',
          type: 'slider',
          min: 1.05,
          max: 1.5,
          step: 0.05,
        },
        {
          id: 'duration',
          label: 'Duration (ms)',
          type: 'slider',
          min: 100,
          max: 1000,
          step: 100,
        },
        { id: 'bgColor', label: 'Background Color', type: 'color' },
      ]}
      initialCustomization={{
        text: 'Hover me',
        scale: 1.1,
        duration: 300,
        bgColor: '#4f46e5',
      }}
    >
      {customization => (
        <Container customization={customization}>
          <div
            className="transform transition-all rounded-lg shadow-lg text-white p-4 text-center font-medium"
            style={{
              backgroundColor: customization.bgColor || '#4f46e5',
              transitionDuration: `${customization.duration || 300}ms`,
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = `scale(${customization.scale || 1.1})`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {customization.text || 'Hover me'}
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}

function GradientTextPreview() {
  return (
    <PreviewTile
      title="Gradient Text"
      componentName="GradientText"
      description="Text with a gradient effect using Tailwind's gradient and text utilities"
      code={`<h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Gradient Text</h2>`}
      customFields={[
        { id: 'text', label: 'Text', type: 'text' },
        { id: 'fromColor', label: 'From Color', type: 'color' },
        { id: 'toColor', label: 'To Color', type: 'color' },
        {
          id: 'fontSize',
          label: 'Font Size',
          type: 'slider',
          min: 24,
          max: 72,
          step: 4,
        },
      ]}
      initialCustomization={{
        text: 'Gradient Text',
        fromColor: '#8b5cf6',
        toColor: '#ec4899',
        fontSize: 36,
      }}
    >
      {customization => (
        <Container customization={customization}>
          <h2
            className="font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${customization.fromColor || '#8b5cf6'}, ${customization.toColor || '#ec4899'})`,
              fontSize: `${customization.fontSize || 36}px`,
            }}
          >
            {customization.text || 'Gradient Text'}
          </h2>
        </Container>
      )}
    </PreviewTile>
  );
}

function BackdropBlurPreview() {
  return (
    <PreviewTile
      title="Backdrop Blur"
      componentName="BackdropBlur"
      description="A card with backdrop blur effect using Tailwind's backdrop-filter"
      code={`<div className="relative p-8">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75"></div>
  <div className="relative backdrop-blur-md bg-white/30 p-6 rounded-lg shadow-xl">
    <h3 className="text-white font-bold">Frosted Glass</h3>
    <p className="text-white/80">This card has a backdrop blur effect</p>
  </div>
</div>`}
      customFields={[
        {
          id: 'blurAmount',
          label: 'Blur Amount',
          type: 'slider',
          min: 2,
          max: 20,
          step: 2,
        },
        {
          id: 'opacity',
          label: 'Background Opacity',
          type: 'slider',
          min: 0.1,
          max: 0.9,
          step: 0.1,
        },
        { id: 'fromColor', label: 'Gradient From', type: 'color' },
        { id: 'toColor', label: 'Gradient To', type: 'color' },
      ]}
      initialCustomization={{
        blurAmount: 8,
        opacity: 0.3,
        fromColor: '#06b6d4',
        toColor: '#3b82f6',
      }}
    >
      {customization => (
        <Container customization={customization}>
          <div className="relative w-full max-w-sm h-48 p-8">
            <div
              className="absolute inset-0 opacity-75 rounded-lg"
              style={{
                backgroundImage: `linear-gradient(to right, ${customization.fromColor || '#06b6d4'}, ${customization.toColor || '#3b82f6'})`,
              }}
            ></div>
            <div
              className="relative p-6 rounded-lg shadow-xl h-full flex flex-col justify-center"
              style={{
                backdropFilter: `blur(${customization.blurAmount || 8}px)`,
                backgroundColor: `rgba(255, 255, 255, ${customization.opacity || 0.3})`,
              }}
            >
              <h3 className="text-white font-bold text-xl">Frosted Glass</h3>
              <p className="text-white/80 mt-2">
                This card has a backdrop blur effect
              </p>
            </div>
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}

function AnimatedBorderPreview() {
  return (
    <PreviewTile
      title="Animated Border"
      componentName="AnimatedBorder"
      description="A button with an animated border effect using Tailwind and CSS"
      code={`<button className="relative px-6 py-3 font-bold text-white rounded-lg group">
  <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="relative">Hover Me</span>
</button>`}
      customFields={[
        { id: 'text', label: 'Button Text', type: 'text' },
        { id: 'color1', label: 'Border Color 1', type: 'color' },
        { id: 'color2', label: 'Border Color 2', type: 'color' },
        {
          id: 'offset',
          label: 'Border Offset',
          type: 'slider',
          min: 1,
          max: 8,
          step: 1,
        },
      ]}
      initialCustomization={{
        text: 'Hover Me',
        color1: '#5b21b6',
        color2: '#9d174d',
        offset: 3,
      }}
    >
      {customization => (
        <Container customization={customization}>
          <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
            <span
              className="absolute inset-0 w-full h-full transition duration-300 transform ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
              style={{
                backgroundColor: customization.color1 || '#5b21b6',
                transform: `translate(-${customization.offset || 3}px, -${customization.offset || 3}px)`,
              }}
            ></span>
            <span
              className="absolute inset-0 w-full h-full transition duration-300 transform ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
              style={{
                backgroundColor: customization.color2 || '#9d174d',
                transform: `translate(${customization.offset || 3}px, ${customization.offset || 3}px)`,
              }}
            ></span>
            <span className="relative">{customization.text || 'Hover Me'}</span>
          </button>
        </Container>
      )}
    </PreviewTile>
  );
}

function ShimmerEffectPreview() {
  return (
    <PreviewTile
      title="Shimmer Effect"
      componentName="ShimmerEffect"
      description="A shimmer loading effect using Tailwind and CSS animations"
      code={`<div className="relative overflow-hidden bg-gray-200 h-24 w-full rounded-lg">
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200"></div>
</div>`}
      customFields={[
        { id: 'baseColor', label: 'Base Color', type: 'color' },
        { id: 'shimmerColor', label: 'Shimmer Color', type: 'color' },
        {
          id: 'duration',
          label: 'Animation Duration (s)',
          type: 'slider',
          min: 0.5,
          max: 5,
          step: 0.5,
        },
        {
          id: 'height',
          label: 'Height (px)',
          type: 'slider',
          min: 40,
          max: 200,
          step: 20,
        },
      ]}
      initialCustomization={{
        baseColor: '#e5e7eb',
        shimmerColor: '#ffffff',
        duration: 2,
        height: 80,
      }}
    >
      {customization => (
        <Container customization={customization}>
          <style>{`
            @keyframes shimmer {
              100% { transform: translateX(100%); }
            }
          `}</style>
          <div
            className="relative overflow-hidden w-full rounded-lg"
            style={{
              backgroundColor: customization.baseColor || '#e5e7eb',
              height: `${customization.height || 80}px`,
            }}
          >
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${customization.baseColor || '#e5e7eb'}, ${customization.shimmerColor || '#ffffff'}, ${customization.baseColor || '#e5e7eb'})`,
                animation: `shimmer ${customization.duration || 2}s infinite`,
              }}
            ></div>
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}
