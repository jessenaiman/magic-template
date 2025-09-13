'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { useEffect } from 'react';

/**
 * Web Vitals Performance Monitoring Component
 *
 * Tracks and reports Core Web Vitals metrics:
 * - FCP (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - TTFB (Time to First Byte)
 *
 * Metrics are logged to console and can be sent to analytics services.
 */
export function WebVitalsMonitor() {
  useReportWebVitals(metric => {
    // Log metrics for development and monitoring
    console.log(`[WebVitals] ${metric.name}:`, {
      value: metric.value,
      rating: getRating(metric.name, metric.value),
      id: metric.id,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send to analytics service (e.g., Google Analytics, Vercel Analytics)
    // Example: gtag('event', 'web_vitals', { ...metric })
  });

  return null; // This component doesn't render anything
}

/**
 * Get performance rating based on metric thresholds
 * Based on Google's Core Web Vitals assessment criteria
 */
function getRating(
  metricName: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  switch (metricName) {
    case 'FCP':
    case 'LCP':
      if (value <= 2500) return 'good';
      if (value <= 4000) return 'needs-improvement';
      return 'poor';

    case 'FID':
    case 'INP':
      if (value <= 100) return 'good';
      if (value <= 300) return 'needs-improvement';
      return 'poor';

    case 'CLS':
      if (value <= 0.1) return 'good';
      if (value <= 0.25) return 'needs-improvement';
      return 'poor';

    case 'TTFB':
      if (value <= 800) return 'good';
      if (value <= 1800) return 'needs-improvement';
      return 'poor';

    default:
      return 'good';
  }
}

/**
 * Hook for tracking client component load performance
 * Measures time to interactive for client components
 */
export function useClientComponentMetrics() {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const loadTime = performance.now() - startTime;
      console.log(`[ClientComponent] Load time: ${loadTime.toFixed(2)}ms`);
    };
  }, []);
}
