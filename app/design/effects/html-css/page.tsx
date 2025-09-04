// app/design/effects/html-css/page.tsx
'use client';
import { PreviewTile } from '@/components/preview-tile';

export default function HtmlCssEffectsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">HTML & CSS Effects</h2>
        <p className="text-muted-foreground">
          A collection of modern web design effects created with only HTML and CSS.
        </p>
      </div>

      <PulsingButtonPreview />
      <GradientBorderCardPreview />
      <FlippingCardPreview />
    </div>
  );
}

function PulsingButtonPreview() {
  return (
    <PreviewTile
      title="Pulsing Button"
      componentName="PulsingButton"
      description="A button with a pulsing effect"
      code={`<button className="pulsing-button">Click Me</button>`}
      customFields={[]}
      initialCustomization={{
        buttonText: 'Click Me',
      }}
    >
      {(customization) => (
        <>
          <style>{`
            .pulsing-button {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
              70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
              100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
            }
          `}</style>
          <button className="pulsing-button px-4 py-2 bg-blue-500 text-white rounded-md">
            {customization.buttonText || 'Click Me'}
          </button>
        </>
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
      customFields={[]}
      initialCustomization={{}}
    >
      {(customization) => (
        <>
          <style>{`
            .gradient-border-card {
              position: relative;
              background: #1a202c;
              border-radius: 0.5rem;
              padding: 1.5rem;
              color: white;
            }
            .gradient-border-card::before {
              content: '';
              position: absolute;
              top: -2px; left: -2px;
              right: -2px; bottom: -2px;
              background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
              border-radius: inherit;
              z-index: -1;
            }
          `}</style>
          <div className="gradient-border-card">
            <h3 className="text-lg font-bold">Card Title</h3>
            <p>This card has a beautiful gradient border.</p>
          </div>
        </>
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
      customFields={[]}
      initialCustomization={{}}
    >
      {(customization) => (
        <>
          <style>{`
            .flipping-card-container {
              perspective: 1000px;
            }
            .flipping-card {
              width: 100%;
              height: 150px;
              position: relative;
              transform-style: preserve-3d;
              transition: transform 0.6s;
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
              background-color: #3182ce;
            }
            .flipping-card-back {
              background-color: #2c5282;
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
        </>
      )}
    </PreviewTile>
  );
}