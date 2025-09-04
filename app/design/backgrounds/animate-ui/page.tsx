'use client';

import * as React from 'react';
import { useDesignPage } from '@/components/design-page-context';
import { PreviewTile } from '@/components/preview-tile';
import { FieldConfig } from '@/components/preview-customization-panel';
import { CustomizationSettings } from '@/components/preview-context';
import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble';
import { GradientBackground } from '@/components/animate-ui/backgrounds/gradient';
import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';

function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle('Animate UI Backgrounds');
    setDescription('A collection of animated backgrounds from Animate UI, featuring interactive and dynamic effects.');
  }, [setTitle, setDescription]);

  return null;
}

export default function BackgroundsPage() {
  return (
    <div className="space-y-8">
      <PageConfigurator />

      <PreviewTile
        title="Bubble Background"
        description="An interactive background featuring smoothly animated gradient bubbles, creating a playful, dynamic, and visually engaging backdrop."
        componentName="BubbleBackground"
        customFields={[
          {
            id: 'interactive',
            label: 'Interactive',
            type: 'switch',
            description: 'Enable mouse interaction with bubbles'
          },
          {
            id: 'colors.first',
            label: 'First Color',
            type: 'color',
            description: 'RGB values for the first bubble color'
          },
          {
            id: 'colors.second',
            label: 'Second Color',
            type: 'color',
            description: 'RGB values for the second bubble color'
          },
          {
            id: 'colors.third',
            label: 'Third Color',
            type: 'color',
            description: 'RGB values for the third bubble color'
          }
        ]}
        initialCustomization={{
          interactive: true,
          colors: {
            first: '18,113,255',
            second: '221,74,255',
            third: '0,220,255',
            fourth: '200,50,50',
            fifth: '180,180,50',
            sixth: '140,100,255'
          }
        }}
        code={`<BubbleBackground
  interactive={true}
  colors={{
    first: '{colors.first}',
    second: '{colors.second}',
    third: '{colors.third}',
    fourth: '200,50,50',
    fifth: '180,180,50',
    sixth: '140,100,255'
  }}
/>`}
      >
        {(customization) => (
          <BubbleBackground
            className="size-full min-h-[400px]"
            interactive={customization.interactive}
            colors={{
              first: customization.colors.first,
              second: customization.colors.second,
              third: customization.colors.third,
              fourth: customization.colors.fourth,
              fifth: customization.colors.fifth,
              sixth: customization.colors.sixth
            }}
          />
        )}
      </PreviewTile>

      <PreviewTile
        title="Gradient Background"
        description="A background component featuring a subtle yet engaging animated gradient effect, smoothly transitioning colors to enhance visual depth."
        componentName="GradientBackground"
        customFields={[
          {
            id: 'duration',
            label: 'Animation Duration',
            type: 'slider',
            description: 'Duration of the gradient animation in seconds',
            min: 5,
            max: 30,
            step: 1
          }
        ]}
        initialCustomization={{
          duration: 15
        }}
        code={`<GradientBackground
  transition={{
    duration: {duration},
    ease: 'easeInOut',
    repeat: Infinity
  }}
/>`}
      >
        {(customization) => (
          <GradientBackground
            className="size-full min-h-[400px]"
            transition={{
              duration: customization.duration,
              ease: 'easeInOut',
              repeat: Infinity
            }}
          />
        )}
      </PreviewTile>

      <PreviewTile
        title="Stars Background"
        description="A dark, interactive background featuring animated dots of varying sizes and speeds, simulating a dynamic and immersive starry space effect."
        componentName="StarsBackground"
        customFields={[
          {
            id: 'factor',
            label: 'Movement Factor',
            type: 'slider',
            description: 'How much the stars move with mouse movement',
            min: 0,
            max: 0.2,
            step: 0.01
          },
          {
            id: 'speed',
            label: 'Animation Speed',
            type: 'slider',
            description: 'Speed of star movement',
            min: 20,
            max: 100,
            step: 5
          },
          {
            id: 'starColor',
            label: 'Star Color',
            type: 'color',
            description: 'Color of the stars'
          }
        ]}
        initialCustomization={{
          factor: 0.05,
          speed: 50,
          starColor: '#ffffff'
        }}
        code={`<StarsBackground
  factor={factor}
  speed={speed}
  starColor="{starColor}"
/>`}
      >
        {(customization) => (
          <StarsBackground
            className="size-full min-h-[400px]"
            factor={customization.factor}
            speed={customization.speed}
            starColor={customization.starColor}
          />
        )}
      </PreviewTile>
    </div>
  );
}