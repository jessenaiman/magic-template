'use client';
// MagicUI Page Transitions Demo using PreviewSurface/PreviewTile

import React, { useState } from 'react';
import { PreviewTile } from '@/components/preview/preview-tile';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { MorphingText } from '@/components/magicui/morphing-text';
import { SpinningText } from '@/components/magicui/spinning-text';
import { HyperText } from '@/components/magicui/hyper-text';
import { WordRotate } from '@/components/magicui/word-rotate';

const magicuiTransitionCode = `
import { BlurFade } from "@/components/magicui/blur-fade";

function Demo() {
  const [page, setPage] = useState("A");
  return (
    <>
      <button onClick={() => setPage("A")}>Go to Page A</button>
      <button onClick={() => setPage("B")}>Go to Page B</button>
      <BlurFade duration={0.6} direction="up">
        {page === "A" ? "Page A Content" : "Page B Content"}
      </BlurFade>
    </>
  );
}
`;

const textAnimateCode = `
import { TextAnimate } from "@/components/magicui/text-animate";

function Demo() {
  return (
    <TextAnimate
      by="word"
      animation="blurIn"
      duration={0.5}
    >
      Click the button to see the text animation
    </TextAnimate>
  );
}
`;

const morphingTextCode = `
import { MorphingText } from "@/components/magicui/morphing-text";

function Demo() {
  return (
    <MorphingText texts={["Hello", "World", "React", "MagicUI"]} />
  );
}
`;

const spinningTextCode = `
import { SpinningText } from "@/components/magicui/spinning-text";

function Demo() {
  return (
    <SpinningText duration={8}>
      Spinning Text Animation
    </SpinningText>
  );
}
`;

const hyperTextCode = `
import { HyperText } from "@/components/magicui/hyper-text";

function Demo() {
  return (
    <HyperText
      duration={300}
    >
      Hover over me to see the effect
    </HyperText>
  );
}
`;

const wordRotateCode = `
import { WordRotate } from "@/components/magicui/word-rotate";

function Demo() {
  return (
    <WordRotate
      words={["First", "Second", "Third", "Fourth"]}
      duration={2500}
    />
  );
}
`;

function MagicUITransitionDemo({
  customization,
}: {
  customization: Partial<Record<string, any>>;
}) {
  const [page, setPage] = useState<'A' | 'B'>('A');
  const duration = customization.duration ?? 0.6;
  const direction = customization.direction || 'top';
  const ease = customization.ease || 'easeOut';

  return (
    <div className="relative w-full h-40 flex flex-col items-center justify-center">
      <div className="mb-4 flex gap-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white font-medium transition-colors hover:bg-blue-600"
          onClick={() => setPage('A')}
        >
          Go to Page A
        </button>
        <button
          className="px-4 py-2 rounded bg-purple-500 text-white font-medium transition-colors hover:bg-purple-600"
          onClick={() => setPage('B')}
        >
          Go to Page B
        </button>
      </div>
      <div className="relative w-full h-24 flex items-center justify-center">
        <BlurFade
          duration={duration}
          direction={direction}
          className="absolute w-full h-full flex items-center justify-center bg-white rounded shadow"
          style={{
            zIndex: 2,
          }}
          key={page}
        >
          <span
            className={`text-lg font-semibold ${page === 'A' ? 'text-blue-700' : 'text-purple-700'}`}
          >
            {page === 'A' ? 'Page A Content' : 'Page B Content'}
          </span>
        </BlurFade>
      </div>
    </div>
  );
}

function TextAnimateDemo({
  customization,
}: {
  customization: Partial<Record<string, any>>;
}) {
  const duration = customization.duration ?? 0.5;
  const animation = customization.animation || 'blurIn';
  const by = customization.by || 'word';

  return (
    <div className="flex items-center justify-center h-40 w-full">
      <TextAnimate
        by={by}
        animation={animation}
        duration={duration}
        className="text-2xl font-bold text-center"
      >
        Click the replay button to see text animation
      </TextAnimate>
    </div>
  );
}

function MorphingTextDemo() {
  const texts = ['Hello', 'World', 'React', 'MagicUI', 'Transitions'];

  return (
    <div className="flex items-center justify-center h-40 w-full">
      <MorphingText texts={texts} className="text-4xl font-bold" />
    </div>
  );
}

function SpinningTextDemo({
  customization,
}: {
  customization: Partial<Record<string, any>>;
}) {
  const duration = customization.duration ?? 8;
  const reverse = customization.reverse === true;

  return (
    <div className="flex items-center justify-center h-40 w-full">
      <SpinningText
        duration={duration}
        reverse={reverse}
        className="text-3xl font-bold"
      >
        Spinning Text
      </SpinningText>
    </div>
  );
}

function HyperTextDemo({
  customization,
}: {
  customization: Partial<Record<string, any>>;
}) {
  const duration = customization.duration ?? 300;

  return (
    <div className="flex items-center justify-center h-40 w-full">
      <HyperText
        duration={duration}
        className="text-2xl font-bold cursor-pointer"
      >
        Hover over me to see the effect
      </HyperText>
    </div>
  );
}

function WordRotateDemo({
  customization,
}: {
  customization: Partial<Record<string, any>>;
}) {
  const duration = customization.duration ?? 2500;
  const words = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  return (
    <div className="flex items-center justify-center h-40 w-full">
      <WordRotate
        words={words}
        duration={duration}
        className="text-3xl font-bold"
      />
    </div>
  );
}

export default function MagicUIPageTransitionsPage() {
  return (
    <>
      {/* BlurFade Page Transition */}
      <PreviewTile
        title="MagicUI BlurFade Page Transition"
        description="Simulate navigation between pages using MagicUI's BlurFade animation. Click the buttons to switch pages."
        componentName="BlurFade"
        code={magicuiTransitionCode}
        codeType="tsx"
        customFields={[
          {
            id: 'duration',
            label: 'Duration (s)',
            type: 'slider',
            min: 0.2,
            max: 2,
            step: 0.05,
          },
          {
            id: 'direction',
            label: 'Direction (top or bottom)',
            type: 'text',
          },
          {
            id: 'ease',
            label: 'Easing',
            type: 'text',
          },
        ]}
        initialCustomization={{
          duration: 0.6,
          direction: 'top',
          ease: 'easeOut',
        }}
      >
        {customization => (
          <MagicUITransitionDemo customization={customization} />
        )}
      </PreviewTile>

      {/* Text Animate */}
      <PreviewTile
        title="Text Animation"
        description="Animate text with various effects using MagicUI's TextAnimate component."
        componentName="TextAnimate"
        code={textAnimateCode}
        codeType="tsx"
        customFields={[
          {
            id: 'duration',
            label: 'Duration (s)',
            type: 'slider',
            min: 0.1,
            max: 1,
            step: 0.05,
          },
          {
            id: 'animation',
            label: 'Animation Type',
            type: 'text',
            description: 'blurIn, fadeIn, slideUp, etc.',
          },
          {
            id: 'by',
            label: 'Split By',
            type: 'text',
            description: 'word, character, line',
          },
        ]}
        initialCustomization={{
          duration: 0.5,
          animation: 'blurIn',
          by: 'word',
        }}
      >
        {customization => <TextAnimateDemo customization={customization} />}
      </PreviewTile>

      {/* Morphing Text */}
      <PreviewTile
        title="Morphing Text"
        description="Smoothly morph between different text values using MagicUI's MorphingText component."
        componentName="MorphingText"
        code={morphingTextCode}
        codeType="tsx"
      >
        <MorphingTextDemo />
      </PreviewTile>

      {/* Spinning Text */}
      <PreviewTile
        title="Spinning Text"
        description="Text that spins in a circular animation using MagicUI's SpinningText component."
        componentName="SpinningText"
        code={spinningTextCode}
        codeType="tsx"
        customFields={[
          {
            id: 'duration',
            label: 'Duration (s)',
            type: 'slider',
            min: 2,
            max: 20,
            step: 0.5,
          },
          {
            id: 'reverse',
            label: 'Reverse Direction',
            type: 'switch',
          },
        ]}
        initialCustomization={{
          duration: 8,
          reverse: false,
        }}
      >
        {customization => <SpinningTextDemo customization={customization} />}
      </PreviewTile>

      {/* Hyper Text */}
      <PreviewTile
        title="Hyper Text"
        description="Text with hover effects using MagicUI's HyperText component."
        componentName="HyperText"
        code={hyperTextCode}
        codeType="tsx"
        customFields={[
          {
            id: 'duration',
            label: 'Duration (s)',
            type: 'slider',
            min: 0.1,
            max: 1,
            step: 0.05,
          },
        ]}
        initialCustomization={{
          duration: 0.3,
        }}
      >
        {customization => <HyperTextDemo customization={customization} />}
      </PreviewTile>

      {/* Word Rotate */}
      <PreviewTile
        title="Word Rotation"
        description="Rotate between different words using MagicUI's WordRotate component."
        componentName="WordRotate"
        code={wordRotateCode}
        codeType="tsx"
        customFields={[
          {
            id: 'duration',
            label: 'Duration (ms)',
            type: 'slider',
            min: 1000,
            max: 5000,
            step: 100,
          },
        ]}
        initialCustomization={{
          duration: 2500,
        }}
      >
        {customization => <WordRotateDemo customization={customization} />}
      </PreviewTile>
    </>
  );
}
