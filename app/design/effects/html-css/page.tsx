// app/design/effects/html-css/page.tsx
'use client';

import * as React from 'react';
import { PreviewTile } from '@/components/preview-tile';
import { PreviewSurface } from '@/components/preview-surface';
import { CustomizationSettings } from '@/components/preview-context';

function Container({ children, customization }: { children: React.ReactNode; customization: Partial<CustomizationSettings>; }) {
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

export default function HtmlCssEffectsPage() {
  return (
    <PreviewSurface initialCustomization={{
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 16
    }}>
      <div className="col-span-full mb-4">
        <h2 className="text-2xl font-bold tracking-tight">HTML & CSS Effects</h2>
        <p className="text-muted-foreground">
          A collection of modern web design effects created with only HTML and CSS.
        </p>
      </div>
      
      <PulsingButtonPreview />
      <GradientBorderCardPreview />
      <FlippingCardPreview />
      <GlowingButtonPreview />
      <NeumorphicCardPreview />
      <TextRevealPreview />
    </PreviewSurface>
  );
}

function PulsingButtonPreview() {
  return (
    <PreviewTile
      title="Pulsing Button"
      componentName="PulsingButton"
      description="A button with a pulsing effect"
      code={`<button className="pulsing-button">Click Me</button>`}
      customFields={[
        { id: 'buttonText', label: 'Button Text', type: 'text' },
        { id: 'buttonColor', label: 'Button Color', type: 'color' },
        { id: 'pulseColor', label: 'Pulse Color', type: 'color' },
        { id: 'pulseSpeed', label: 'Pulse Speed', type: 'slider', min: 0.5, max: 3, step: 0.1 }
      ]}
      initialCustomization={{
        buttonText: 'Click Me',
        buttonColor: '#3b82f6',
        pulseColor: 'rgba(0, 123, 255, 0.7)',
        pulseSpeed: 2
      }}
    >
      {(customization) => (
        <Container customization={customization}>
          <style>{`
            .pulsing-button {
              animation: pulse ${customization.pulseSpeed || 2}s infinite;
            }
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 ${customization.pulseColor || 'rgba(0, 123, 255, 0.7)'}; }
              70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
              100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
            }
          `}</style>
          <button 
            className="pulsing-button px-4 py-2 text-white rounded-md" 
            style={{ backgroundColor: customization.buttonColor || '#3b82f6' }}
          >
            {customization.buttonText || 'Click Me'}
          </button>
        </Container>
      )}
    </PreviewTile>
  );
}

function GradientBorderCardPreview() {
  return (
    <PreviewTile
      title="Gradient Border Card"
      componentName="GradientBorderCard"
      description="A card with a gradient border"
      code={`<div className="gradient-border-card">Card Content</div>`}
      customFields={[
        { id: 'cardTitle', label: 'Card Title', type: 'text' },
        { id: 'cardContent', label: 'Card Content', type: 'text' },
        { id: 'cardBgColor', label: 'Card Background', type: 'color' },
        { id: 'gradientStart', label: 'Gradient Start', type: 'color' },
        { id: 'gradientEnd', label: 'Gradient End', type: 'color' }
      ]}
      initialCustomization={{
        cardTitle: 'Card Title',
        cardContent: 'This card has a beautiful gradient border.',
        cardBgColor: '#1a202c',
        gradientStart: '#f09433',
        gradientEnd: '#bc1888'
      }}
    >
      {(customization) => (
        <Container customization={customization}>
          <style>{`
            .gradient-border-card {
              position: relative;
              background: ${customization.cardBgColor || '#1a202c'};
              border-radius: 0.5rem;
              padding: 1.5rem;
              color: white;
            }
            .gradient-border-card::before {
              content: '';
              position: absolute;
              top: -2px; left: -2px;
              right: -2px; bottom: -2px;
              background: linear-gradient(45deg, ${customization.gradientStart || '#f09433'}, ${customization.gradientEnd || '#bc1888'});
              border-radius: inherit;
              z-index: -1;
            }
          `}</style>
          <div className="gradient-border-card">
            <h3 className="text-lg font-bold">{customization.cardTitle || 'Card Title'}</h3>
            <p>{customization.cardContent || 'This card has a beautiful gradient border.'}</p>
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}

function FlippingCardPreview() {
  return (
    <PreviewTile
      title="Flipping Card"
      componentName="FlippingCard"
      description="A card that flips on hover"
      code={`<div className="flipping-card-container"><div className="flipping-card">...</div></div>`}
      customFields={[
        { id: 'frontColor', label: 'Front Color', type: 'color' },
        { id: 'backColor', label: 'Back Color', type: 'color' },
        { id: 'transitionSpeed', label: 'Transition Speed', type: 'slider', min: 0.2, max: 2, step: 0.1 },
      ]}
      initialCustomization={{
        frontColor: '#3182ce',
        backColor: '#2c5282',
        transitionSpeed: 0.6
      }}
    >
      {(customization) => (
        <Container customization={customization}>
          <style>{`
            .flipping-card-container {
              perspective: 1000px;
              width: 100%;
              max-width: 300px;
            }
            .flipping-card {
              width: 100%;
              height: 150px;
              position: relative;
              transform-style: preserve-3d;
              transition: transform ${customization.transitionSpeed || 0.6}s;
            }
            .flipping-card-container:hover .flipping-card {
              transform: rotateY(180deg);
            }
            .flipping-card-front, .flipping-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              border-radius: 0.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            .flipping-card-front {
              background-color: ${customization.frontColor || '#3182ce'};
            }
            .flipping-card-back {
              background-color: ${customization.backColor || '#2c5282'};
              transform: rotateY(180deg);
            }
          `}</style>
          <div className="flipping-card-container">
            <div className="flipping-card">
              <div className="flipping-card-front">
                <p>Hover over me!</p>
              </div>
              <div className="flipping-card-back">
                <p>See? I flipped!</p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}

function GlowingButtonPreview() {
  return (
    <PreviewTile
      title="Glowing Button"
      componentName="GlowingButton"
      description="A button with a glowing effect on hover"
      code={`<button className="glowing-button">Hover Me</button>`}
      customFields={[
        { id: 'buttonText', label: 'Button Text', type: 'text' },
        { id: 'glowColor', label: 'Glow Color', type: 'color' },
        { id: 'buttonColor', label: 'Button Color', type: 'color' },
      ]}
      initialCustomization={{
        buttonText: 'Hover Me',
        glowColor: '#ff00ff',
        buttonColor: '#6d28d9'
      }}
    >
      {(customization) => (
        <Container customization={customization}>
          <style>{`
            .glowing-button {
              position: relative;
              padding: 0.75rem 1.5rem;
              background-color: ${customization.buttonColor || '#6d28d9'};
              color: white;
              border: none;
              border-radius: 0.5rem;
              font-weight: bold;
              cursor: pointer;
              overflow: hidden;
              z-index: 1;
              transition: all 0.3s;
            }
            .glowing-button::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: ${customization.glowColor || '#ff00ff'};
              z-index: -1;
              border-radius: 0.6rem;
              opacity: 0;
              transition: opacity 0.3s;
            }
            .glowing-button:hover::before {
              opacity: 1;
            }
            .glowing-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
          `}</style>
          <button className="glowing-button">
            {customization.buttonText || 'Hover Me'}
          </button>
        </Container>
      )}
    </PreviewTile>
  );
}

function NeumorphicCardPreview() {
  return (
    <PreviewTile
      title="Neumorphic Card"
      componentName="NeumorphicCard"
      description="A card with a modern neumorphic design"
      code={`<div className="neumorphic-card">Neumorphic Design</div>`}
      customFields={[
        { id: 'baseColor', label: 'Base Color', type: 'color' },
        { id: 'shadowIntensity', label: 'Shadow Intensity', type: 'slider', min: 0.1, max: 0.5, step: 0.05 },
        { id: 'borderRadius', label: 'Border Radius', type: 'slider', min: 4, max: 24, step: 2 },
      ]}
      initialCustomization={{
        baseColor: '#e0e0e0',
        shadowIntensity: 0.2,
        borderRadius: 16
      }}
    >
      {(customization) => {
        const baseColor = customization.baseColor || '#e0e0e0';
        const intensity = customization.shadowIntensity || 0.2;
        const radius = customization.borderRadius || 16;
        
        // Calculate shadow colors based on base color and intensity
        const darkenAmount = Math.round(255 * intensity);
        const lightenAmount = Math.round(255 * intensity * 0.8);
        
        return (
          <Container customization={customization}>
            <style>{`
              .neumorphic-card {
                background: ${baseColor};
                color: #333;
                padding: 2rem;
                border-radius: ${radius}px;
                box-shadow: 
                  ${8 * intensity}px ${8 * intensity}px ${16 * intensity}px rgba(0, 0, 0, ${intensity}),
                  -${8 * intensity}px -${8 * intensity}px ${16 * intensity}px rgba(255, 255, 255, ${intensity * 0.8});
                width: 200px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                transition: all 0.3s ease;
              }
              .neumorphic-card:hover {
                box-shadow: 
                  ${4 * intensity}px ${4 * intensity}px ${8 * intensity}px rgba(0, 0, 0, ${intensity}),
                  -${4 * intensity}px -${4 * intensity}px ${8 * intensity}px rgba(255, 255, 255, ${intensity * 0.8});
                transform: translateY(-2px);
              }
            `}</style>
            <div className="neumorphic-card">
              Neumorphic Design
            </div>
          </Container>
        );
      }}
    </PreviewTile>
  );
}

function TextRevealPreview() {
  return (
    <PreviewTile
      title="Text Reveal"
      componentName="TextReveal"
      description="Text that reveals itself with a gradient effect"
      code={`<div className="text-reveal">Reveal Text</div>`}
      customFields={[
        { id: 'text', label: 'Text', type: 'text' },
        { id: 'startColor', label: 'Start Color', type: 'color' },
        { id: 'endColor', label: 'End Color', type: 'color' },
        { id: 'animationDuration', label: 'Animation Duration', type: 'slider', min: 1, max: 5, step: 0.5 },
      ]}
      initialCustomization={{
        text: 'Reveal Text',
        startColor: '#ff0080',
        endColor: '#7928ca',
        animationDuration: 3
      }}
    >
      {(customization) => (
        <Container customization={customization}>
          <style>{`
            .text-reveal {
              position: relative;
              font-size: 2.5rem;
              font-weight: bold;
              background: linear-gradient(
                to right, 
                ${customization.startColor || '#ff0080'}, 
                ${customization.endColor || '#7928ca'}
              );
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              position: relative;
            }
            .text-reveal::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background: white;
              animation: reveal ${customization.animationDuration || 3}s ease infinite;
            }
            @keyframes reveal {
              0% { width: 100%; }
              50% { width: 0%; }
              100% { width: 0%; }
            }
          `}</style>
          <div className="text-reveal">
            {customization.text || 'Reveal Text'}
          </div>
        </Container>
      )}
    </PreviewTile>
  );
}