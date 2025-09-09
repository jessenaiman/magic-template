"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import landingBlur from "../assets/svg/landing-blur.svg";

// Simplified hero with Tailwind-only styling (removed orphan custom class names)
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="relative mx-auto flex flex-col items-center text-center max-w-4xl">
      {/* Soft blurred background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={landingBlur as unknown as string}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl dark:opacity-50"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
      </div>

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
        <span className="animate-pulse">New</span>
        <span className="text-foreground/60">Pixel Blast</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <path d="M6 12L10 8L6 4" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl leading-tight">
        React Components
        <br className="hidden sm:block" />
        <span className="inline-block mt-2">For Creative Developers</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
        Highly customizable animated components that make your React projects truly stand out.
        Build expressive UI faster with accessible, composable building blocks.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/text-animations/split-text"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <span>Browse Components</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/10 transition group-hover:translate-x-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M6 12L10 8L6 4" />
            </svg>
          </span>
        </Link>

        <Link
          href="/design/backgrounds"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          Explore Backgrounds
        </Link>
      </div>

      {/* Sub-note */}
      <div className="mt-6 text-xs text-muted-foreground">
        <span>{isMobile ? "Optimized for mobile experience." : "Resize the window to preview responsiveness."}</span>
      </div>
    </div>
  );
}