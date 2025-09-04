"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDesignPage } from "@/components/design-page-context";
import { PreviewTile } from "@/components/preview-tile";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { RippleButton } from "@/components/ui/ripple-button";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { ChevronRightIcon, CheckIcon } from "lucide-react";
import React from "react";

export default function MagicButtonsPage() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle("Magic Buttons");
    setDescription(
      "Official MagicUI button components with stunning animations and effects.",
    );

    setFields([
      {
        id: "variant",
        label: "Variant",
        type: "custom",
        description: "Style variant of the button",
        options: ["default", "outline"],
      },
      {
        id: "size",
        label: "Size",
        type: "custom",
        description: "Size of the button",
        options: ["default", "sm", "lg", "icon"],
      },
      {
        id: "shimmerColor",
        label: "Shimmer Color",
        type: "color",
        description: "Color of the shimmer effect",
      },
      {
        id: "pulseColor",
        label: "Pulse Color",
        type: "color",
        description: "Color of the pulse effect",
      },
      {
        id: "rippleColor",
        label: "Ripple Color",
        type: "color",
        description: "Color of the ripple effect",
      },
    ]);
  }, [setTitle, setDescription, setFields]);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Rainbow Button */}
      <PreviewTile
        title="Rainbow Button"
        preview={<RainbowButton>Get Unlimited Access</RainbowButton>}
        code={`<RainbowButton>Get Unlimited Access</RainbowButton>`}
        language="tsx"
      />

      {/* Shimmer Button */}
      <PreviewTile
        title="Shimmer Button"
        preview={
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shimmer Button
            </span>
          </ShimmerButton>
        }
        code={`<ShimmerButton className="shadow-2xl">
  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
    Shimmer Button
  </span>
</ShimmerButton>`}
        language="tsx"
      />

      {/* Pulsating Button */}
      <PreviewTile
        title="Pulsating Button"
        preview={<PulsatingButton>Join Affiliate Program</PulsatingButton>}
        code={`<PulsatingButton>Join Affiliate Program</PulsatingButton>`}
        language="tsx"
      />

      {/* Ripple Button */}
      <PreviewTile
        title="Ripple Button"
        preview={<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>}
        code={`<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>`}
        language="tsx"
      />

      {/* Animated Subscribe Button */}
      <PreviewTile
        title="Animated Subscribe"
        preview={
          <AnimatedSubscribeButton className="w-36">
            <span className="group inline-flex items-center">
              Follow
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Subscribed
            </span>
          </AnimatedSubscribeButton>
        }
        code={`<AnimatedSubscribeButton className="w-36">
  <span className="group inline-flex items-center">
    Follow
    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
  </span>
  <span className="group inline-flex items-center">
    <CheckIcon className="mr-2 size-4" />
    Subscribed
  </span>
</AnimatedSubscribeButton>`}
        language="tsx"
      />

      {/* Magnetic Button */}
      <PreviewTile
        title="Magnetic Button"
        preview={
          <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              Magnetic Hover
            </span>
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Button>
        }
        code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                Magnetic Hover
              </span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
    Magnetic Hover
  </span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Neon Glow Button */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Neon Glow Button</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="relative inline-flex h-12 items-center justify-center rounded-md border-2 border-cyan-400 bg-black px-6 py-2 font-medium text-cyan-400 shadow-lg shadow-cyan-400/25 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
              Neon Glow
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="relative inline-flex h-12 items-center justify-center rounded-md border-2 border-cyan-400 bg-black px-6 py-2 font-medium text-cyan-400 shadow-lg shadow-cyan-400/25 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
  Neon Glow
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Morphing Button */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Morphing Button</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:rounded-full">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
                Morph Shape
              </span>
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:rounded-full">
  <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
    Morph Shape
  </span>
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Ripple Effect Button */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ripple Effect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">
              <span className="relative z-10">Ripple Click</span>
              <div className="absolute inset-0 rounded-md bg-orange-400 opacity-0 transition-opacity duration-300 group-active:opacity-30 group-active:animate-ping"></div>
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">
  <span className="relative z-10">Ripple Click</span>
  <div className="absolute inset-0 rounded-md bg-orange-400 opacity-0 transition-opacity duration-300 group-active:opacity-30 group-active:animate-ping"></div>
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Floating Button */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Floating Button</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:scale-110 hover:-translate-y-1">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:scale-110 hover:-translate-y-1">
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Border Animation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Border Animation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md border-2 border-indigo-600 bg-transparent px-6 py-2 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
              <span className="relative z-10">Animated Border</span>
              <div className="absolute inset-0 rounded-md bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
            </Button>
          </div>
          <CodeBlock
            code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md border-2 border-indigo-600 bg-transparent px-6 py-2 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
  <span className="relative z-10">Animated Border</span>
  <div className="absolute inset-0 rounded-md bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
</Button>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Spotlight Button */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Spotlight Button</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px] flex items-center justify-center">
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
        {/* Spotlight Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Spotlight Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
              <span className="relative z-10">Spotlight Effect</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
  <span className="relative z-10">Spotlight Effect</span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
