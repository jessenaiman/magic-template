/**
 * Home Page Component
 *
 * ARCHITECTURE: Server Component
 * - No 'use client' directive - runs on server
 * - Composes the landing page from client components
 * - Handles initial page data and routing
 *
 * PATTERN: Server Component with Client Children
 * - Server component handles page-level composition
 * - Client component (LandingPage) handles interactions and animations
 * - Clean separation of concerns between data and presentation
 */

import LandingPage from "@/components/landing-page";

export default function HomePage() {
  return <LandingPage />;
}