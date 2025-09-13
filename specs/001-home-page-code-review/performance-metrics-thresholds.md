# Next.js Performance Metrics and Thresholds

**Document Version**: 1.0
**Created**: September 12, 2025
**Last Updated**: September 12, 2025
**Applies To**: Next.js landing page optimization

## Overview

This document defines measurable performance metrics and thresholds for the Next.js landing page. Performance requirements are based on Core Web Vitals standards and Next.js-specific optimization goals.

## Core Web Vitals Metrics

### First Contentful Paint (FCP)
- **Definition**: Time when the first text or image is painted
- **Target Threshold**: < 1.5 seconds (stricter than Google's 1.8s)
- **Good Rating**: < 1.8s
- **Needs Improvement**: 1.8s - 3.0s
- **Poor**: > 3.0s

### Largest Contentful Paint (LCP)
- **Definition**: Time when the largest content element is painted
- **Target Threshold**: < 2.0 seconds (stricter than Google's 2.5s)
- **Good Rating**: < 2.5s
- **Needs Improvement**: 2.5s - 4.0s
- **Poor**: > 4.0s

### Cumulative Layout Shift (CLS)
- **Definition**: Measures visual stability of the page
- **Target Threshold**: < 0.08 (stricter than Google's 0.1)
- **Good Rating**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

### First Input Delay (FID)
- **Definition**: Time from first user interaction to browser response
- **Target Threshold**: < 75 milliseconds (stricter than Google's 100ms)
- **Good Rating**: < 100ms
- **Needs Improvement**: 100ms - 300ms
- **Poor**: > 300ms

### Interaction to Next Paint (INP)
- **Definition**: Measures responsiveness to user interactions
- **Target Threshold**: < 150 milliseconds (stricter than Google's 200ms)
- **Good Rating**: < 200ms
- **Needs Improvement**: 200ms - 500ms
- **Poor**: > 500ms

### Time to First Byte (TTFB)
- **Definition**: Time for server to respond to navigation request
- **Target Threshold**: < 600 milliseconds (stricter than Google's 800ms)
- **Good Rating**: < 800ms
- **Needs Improvement**: 800ms - 1800ms
- **Poor**: > 1800ms

## Next.js Specific Metrics

### Custom Next.js Web Vitals
- **Next.js-hydration**: Time for React hydration to complete
  - **Target Threshold**: < 100 milliseconds
- **Next.js-route-change-to-render**: Time from route change to render start
  - **Target Threshold**: < 50 milliseconds
- **Next.js-render**: Time for component rendering
  - **Target Threshold**: < 50 milliseconds

### Client Component Loading Metrics
- **clientComponentLoadStart**: Timestamp of first client component load
  - **Target Threshold**: < 500 milliseconds from navigation
- **clientComponentLoadTimes**: Total time spent loading all client components
  - **Target Threshold**: < 200 milliseconds cumulative
- **clientComponentLoadCount**: Number of client components loaded
  - **Target Threshold**: Minimize count (lazy load where possible)

### Build Output Metrics
- **First Load JS**: Size of JavaScript loaded for initial page
  - **Target Threshold**: < 100 kB
- **Total Bundle Size**: Complete JavaScript bundle size
  - **Target Threshold**: < 200 kB (gzipped)
- **Static Assets**: Combined size of images, fonts, CSS
  - **Target Threshold**: < 50 kB (optimized)

## Landing Page Specific Requirements

### Zero Error Loading
- **JavaScript Errors**: 0 errors in console
- **Network Failures**: 0 failed requests
- **Hydration Mismatches**: 0 mismatches
- **Layout Shifts**: CLS < 0.1 during initial load

### Scroll Performance
- **Scroll Responsiveness**: < 16ms per frame (60fps)
- **Lazy Loading Trigger**: Components load within viewport + 200px
- **Memory Usage**: < 100MB during scroll to bottom
- **Frame Drops**: 0 dropped frames during scroll

### Component Loading
- **Above Fold Components**: Load within 1.5 seconds
- **Below Fold Components**: Lazy load within 500ms of entering viewport
- **Animation Performance**: 60fps during component animations
- **Transition Performance**: < 300ms for Next.js transitions

## Measurement and Monitoring

### Automated Testing
```javascript
// Web Vitals measurement
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log metrics for analysis
    console.log(`${metric.name}: ${metric.value}`)
  })
}
```

### Performance Budget
```javascript
// next.config.js performance budget
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Performance budgets
  performance: {
    hints: 'error',
    maxAssetSize: 250000,
    maxEntrypointSize: 500000,
  }
})
```

### Client Component Tracking
```javascript
// Track client component performance
function getClientComponentLoaderMetrics(options = {}) {
  const metrics = clientComponentLoadStart === 0 ? undefined : {
    clientComponentLoadStart,
    clientComponentLoadTimes,
    clientComponentLoadCount
  }
  return metrics
}
```

## Testing Requirements

### Load Testing
- **Concurrent Users**: Test with 100+ concurrent users
- **Page Load Time**: < 3.0 seconds under load
- **Error Rate**: < 0.1% error rate
- **Memory Leak**: No memory leaks during extended testing

### Scroll Testing
- **Scroll to Bottom**: Complete scroll in < 5 seconds
- **Component Loading**: All components load without errors
- **Memory Stability**: Memory usage remains stable
- **Performance Degradation**: No performance degradation during scroll

## Optimization Strategies

### Bundle Optimization
- **Code Splitting**: Implement route-based and component-based splitting
- **Tree Shaking**: Remove unused code automatically
- **Compression**: Enable gzip/brotli compression
- **Caching**: Implement proper cache headers

### Image Optimization
- **Format Selection**: Use WebP/AVIF when supported
- **Responsive Images**: Implement `sizes` attribute
- **Lazy Loading**: Load images only when needed
- **Preloading**: Preload critical images

### Runtime Optimization
- **Lazy Loading**: Implement React.lazy for components
- **Memoization**: Use React.memo for expensive components
- **Debouncing**: Debounce scroll and resize events
- **Virtualization**: Consider virtual scrolling for large lists

## Success Criteria

### Performance Score
- **Lighthouse Performance**: > 90
- **Web Vitals Score**: All metrics in "Good" range
- **Bundle Analysis**: Within defined size limits
- **Runtime Performance**: No blocking operations

### User Experience
- **Perceived Performance**: Page feels instant
- **Interaction Responsiveness**: All interactions < 100ms
- **Visual Stability**: No unexpected layout shifts
- **Error-Free Experience**: Zero console errors

## Monitoring and Alerts

### Real-time Monitoring
- **Core Web Vitals**: Monitor all CWV metrics
- **Error Tracking**: Alert on JavaScript errors
- **Performance Regression**: Alert on metric degradation
- **Memory Usage**: Monitor for memory leaks

### Reporting
- **Daily Reports**: Performance metrics summary
- **Weekly Analysis**: Trend analysis and optimization opportunities
- **Monthly Review**: Comprehensive performance audit
- **Incident Response**: Immediate alerts for critical issues

## Related Documents

- `project-structure-standards.md` - Project organization standards
- `specs/GITHUB-INSTRUCTIONS.md` - Tool usage and validation procedures
- `.vscode/mcp.json` - MCP server configuration for performance monitoring
