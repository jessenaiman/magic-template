import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],

  // Performance budgets and optimization
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "@radix-ui/react-avatar"],
  },

  // Bundle analysis and performance monitoring
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add bundle analyzer in development
    if (!dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
          openAnalyzer: false,
        })
      );
    }

    return config;
  },

  // Performance budgets
  // Note: Next.js doesn't have a built-in performance config
  // Performance budgets are enforced via ESLint rules and manual monitoring
};

export default nextConfig;
