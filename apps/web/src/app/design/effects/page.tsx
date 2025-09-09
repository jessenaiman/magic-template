
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/packages/components/ui/card';
import { Button } from '@/packages/components/ui/button';
import { ArrowRight, Code, Sparkles, Wand2 } from 'lucide-react';
import { GridBeams } from '@/packages/components/magicui/grid-beams';
import { Meteors } from '@/packages/components/magicui/meteors';
import { RetroGrid } from '@/packages/components/magicui/retro-grid';

export default function EffectsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section with MagicUI Effect */}
      <div className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-md">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Visual Effects Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Explore a collection of interactive and animated visual effects. 
            From subtle glows to dynamic particles, each implementation demonstrates 
            modern animation techniques with a focus on performance and interactivity.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/design/effects/html-css">
                <Code className="mr-2 h-4 w-4" /> HTML & CSS Effects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/design/effects/tailwind">
                <Sparkles className="mr-2 h-4 w-4" /> Tailwind Effects
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/design/effects/magicui">
                <Wand2 className="mr-2 h-4 w-4" /> MagicUI Effects
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <RetroGrid opacity={0.3} cellSize={60} />
        </div>
      </div>

      {/* Effect Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* HTML & CSS Card */}
        <Card className="overflow-hidden">
          <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="relative z-10">HTML & CSS</span>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <CardHeader>
            <CardTitle>HTML & CSS Effects</CardTitle>
            <CardDescription>Pure CSS animations and transitions without JavaScript</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Discover the power of modern CSS with animations, transitions, and visual effects 
              that don't require any JavaScript. Perfect for lightweight implementations.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/design/effects/html-css" className="flex justify-between w-full">
                <span>Explore HTML & CSS Effects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Tailwind Card */}
        <Card className="overflow-hidden">
          <div className="relative h-40 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="relative z-10">Tailwind</span>
            </div>
            <div className="absolute inset-0">
              <Meteors number={10} />
            </div>
          </div>
          <CardHeader>
            <CardTitle>Tailwind Effects</CardTitle>
            <CardDescription>Utility-first animations and effects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Leverage Tailwind's utility classes to create stunning animations and effects 
              with minimal custom CSS. Ideal for rapid development and consistent design.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/design/effects/tailwind" className="flex justify-between w-full">
                <span>Explore Tailwind Effects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* MagicUI Card */}
        <Card className="overflow-hidden">
          <div className="relative h-40 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="relative z-10">MagicUI</span>
            </div>
            <div className="absolute inset-0">
              <GridBeams gridSize={40} rayCount={10} rayOpacity={0.3} backgroundColor="transparent">
                <div />
              </GridBeams>
            </div>
          </div>
          <CardHeader>
            <CardTitle>MagicUI Effects</CardTitle>
            <CardDescription>Pre-built React components with stunning effects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore our collection of ready-to-use React components with built-in animations 
              and effects. Drop them into your project for instant visual impact.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/design/effects/magicui" className="flex justify-between w-full">
                <span>Explore MagicUI Effects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Features Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {['Interactive animations', 'Dynamic particles', 'Glowing effects', 'Smooth transitions'].map((feature, i) => (
          <Card key={i} className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">{feature}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
