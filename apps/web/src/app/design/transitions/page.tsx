
"use client";

import React from "react";
import Link from "next/link";
import ShinyText from "@repo/components/ShinyText";

export default function TransitionsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
            Mastering Web Transitions
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Transitions are the invisible threads that weave together user experiences, 
          creating seamless flows between states and views. Well-crafted transitions 
          reduce cognitive load, provide context, and make interfaces feel alive.
        </p>
        
        <div className="pt-2">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <ShinyText 
              text="Explore my UI development services" 
              speed={6} 
              className="text-primary font-medium" 
            />
            <span className="text-primary">→</span>
          </Link>
        </div>
        
        <div className="mt-6 flex gap-2">
          <div className="rounded-lg border bg-card p-4 text-sm text-card-foreground shadow-sm max-w-lg">
            <div className="font-medium mb-2">Why Transitions Matter</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Reduce perceived loading times</li>
              <li>• Provide spatial context and orientation</li>
              <li>• Guide user attention effectively</li>
              <li>• Create polished, professional experiences</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Examples Section */}
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Discover seamless page and content transitions for modern web applications. 
          From subtle fades to dynamic morphing effects, each implementation 
          showcases smooth animation techniques with a focus on user experience. 
          Select a technology stack above to explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Smooth animations</li>
              <li>Page transitions</li>
              <li>Content morphing</li>
              <li>View transitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
