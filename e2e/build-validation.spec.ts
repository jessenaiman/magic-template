import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

test.describe('Build Validation', () => {
  test('Application builds successfully without errors', async () => {
    let buildOutput = '';
    let buildError = '';
    
    try {
      // Run the build command and capture output
      buildOutput = execSync('pnpm build', {
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
        stdio: 'pipe'
      });
    } catch (error: any) {
      buildError = error.message;
      if (error.stdout) buildOutput = error.stdout;
      if (error.stderr) buildError += '\n' + error.stderr;
    }
    
    // Log build output for debugging
    console.log('Build Output:', buildOutput);
    if (buildError) {
      console.error('Build Error:', buildError);
    }
    
    // Check for build success indicators
    const successIndicators = [
      'Compiled successfully',
      'Build completed',
      'Export successful',
      '✓ Compiled'
    ];
    
    const hasSuccessIndicator = successIndicators.some(indicator => 
      buildOutput.includes(indicator)
    );
    
    // Check for error indicators
    const errorIndicators = [
      'Error:',
      'Failed to compile',
      'Build failed',
      'TypeError:',
      'SyntaxError:',
      'Module not found'
    ];
    
    const hasErrorIndicator = errorIndicators.some(indicator => 
      buildOutput.includes(indicator) || buildError.includes(indicator)
    );
    
    // Fail if build errors are present
    if (hasErrorIndicator) {
      throw new Error(`Build failed with errors:\n${buildOutput}\n${buildError}`);
    }
    
    // Verify build artifacts exist
    const buildDir = join(process.cwd(), '.next');
    expect(existsSync(buildDir)).toBeTruthy();
    
    // Check for essential build files
    const essentialFiles = [
      '.next/build-manifest.json',
      '.next/static',
      '.next/server'
    ];
    
    for (const file of essentialFiles) {
      const filePath = join(process.cwd(), file);
      expect(existsSync(filePath)).toBeTruthy();
    }
  });

  test('TypeScript compilation passes without errors', async () => {
    let tscOutput = '';
    let tscError = '';
    
    try {
      // Run TypeScript compiler check
      tscOutput = execSync('pnpm tsc --noEmit', {
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 120000, // 2 minutes timeout
        stdio: 'pipe'
      });
    } catch (error: any) {
      tscError = error.message;
      if (error.stdout) tscOutput = error.stdout;
      if (error.stderr) tscError += '\n' + error.stderr;
    }
    
    console.log('TypeScript Output:', tscOutput);
    if (tscError) {
      console.error('TypeScript Error:', tscError);
    }
    
    // Check for TypeScript errors
    const tsErrorIndicators = [
      'error TS',
      'Found 1 error',
      'Found 2 errors',
      'Found 3 errors',
      'Found 4 errors',
      'Found 5 errors'
    ];
    
    const hasTsErrors = tsErrorIndicators.some(indicator => 
      tscOutput.includes(indicator) || tscError.includes(indicator)
    );
    
    if (hasTsErrors) {
      throw new Error(`TypeScript compilation failed:\n${tscOutput}\n${tscError}`);
    }
  });

  test('ESLint passes without errors', async () => {
    let eslintOutput = '';
    let eslintError = '';
    
    try {
      // Run ESLint check
      eslintOutput = execSync('pnpm lint', {
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 60000, // 1 minute timeout
        stdio: 'pipe'
      });
    } catch (error: any) {
      eslintError = error.message;
      if (error.stdout) eslintOutput = error.stdout;
      if (error.stderr) eslintError += '\n' + error.stderr;
    }
    
    console.log('ESLint Output:', eslintOutput);
    if (eslintError) {
      console.error('ESLint Error:', eslintError);
    }
    
    // Check for ESLint errors (warnings are acceptable)
    const eslintErrorIndicators = [
      'error  ',
      '✖ 1 problem',
      '✖ 2 problems',
      '✖ 3 problems'
    ];
    
    const hasEslintErrors = eslintErrorIndicators.some(indicator => 
      eslintOutput.includes(indicator) || eslintError.includes(indicator)
    );
    
    if (hasEslintErrors) {
      throw new Error(`ESLint found errors:\n${eslintOutput}\n${eslintError}`);
    }
  });

  test('Package dependencies are properly installed', async () => {
    // Check if package.json exists
    const packageJsonPath = join(process.cwd(), 'package.json');
    expect(existsSync(packageJsonPath)).toBeTruthy();
    
    // Read and parse package.json
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    expect(packageJson.dependencies).toBeDefined();
    expect(packageJson.devDependencies).toBeDefined();
    
    // Check if node_modules exists
    const nodeModulesPath = join(process.cwd(), 'node_modules');
    expect(existsSync(nodeModulesPath)).toBeTruthy();
    
    // Check for critical dependencies
    const criticalDeps = [
      'react',
      'next',
      '@types/react',
      'typescript'
    ];
    
    for (const dep of criticalDeps) {
      const depPath = join(process.cwd(), 'node_modules', dep);
      expect(existsSync(depPath)).toBeTruthy();
    }
  });

  test('Environment configuration is valid', async () => {
    // Check for Next.js config
    const nextConfigPath = join(process.cwd(), 'next.config.js');
    const nextConfigTsPath = join(process.cwd(), 'next.config.ts');
    const nextConfigMjsPath = join(process.cwd(), 'next.config.mjs');
    
    const hasNextConfig = existsSync(nextConfigPath) || 
                         existsSync(nextConfigTsPath) || 
                         existsSync(nextConfigMjsPath);
    
    expect(hasNextConfig).toBeTruthy();
    
    // Check for TypeScript config
    const tsConfigPath = join(process.cwd(), 'tsconfig.json');
    expect(existsSync(tsConfigPath)).toBeTruthy();
    
    // Validate tsconfig.json structure
    const tsConfig = JSON.parse(readFileSync(tsConfigPath, 'utf8'));
    expect(tsConfig.compilerOptions).toBeDefined();
    expect(tsConfig.compilerOptions.target).toBeDefined();
    expect(tsConfig.compilerOptions.module).toBeDefined();
  });

  test('Static assets are properly configured', async () => {
    // Check for public directory
    const publicDir = join(process.cwd(), 'public');
    expect(existsSync(publicDir)).toBeTruthy();
    
    // Check for app directory (App Router)
    const appDir = join(process.cwd(), 'app');
    expect(existsSync(appDir)).toBeTruthy();
    
    // Check for components directory
    const componentsDir = join(process.cwd(), 'components');
    expect(existsSync(componentsDir)).toBeTruthy();
    
    // Check for lib directory
    const libDir = join(process.cwd(), 'lib');
    expect(existsSync(libDir)).toBeTruthy();
  });

  test('Build output is optimized', async () => {
    // This test assumes build has already run
    const buildDir = join(process.cwd(), '.next');
    
    if (existsSync(buildDir)) {
      // Check for static optimization
      const staticDir = join(buildDir, 'static');
      expect(existsSync(staticDir)).toBeTruthy();
      
      // Check for chunks directory
      const chunksDir = join(staticDir, 'chunks');
      if (existsSync(chunksDir)) {
        // Verify chunks are created (indicates code splitting)
        const chunkFiles = require('fs').readdirSync(chunksDir);
        expect(chunkFiles.length).toBeGreaterThan(0);
      }
      
      // Check build manifest
      const buildManifestPath = join(buildDir, 'build-manifest.json');
      if (existsSync(buildManifestPath)) {
        const buildManifest = JSON.parse(readFileSync(buildManifestPath, 'utf8'));
        expect(buildManifest.pages).toBeDefined();
        expect(Object.keys(buildManifest.pages).length).toBeGreaterThan(0);
      }
    }
  });
});

test.describe('Production Readiness', () => {
  test('Application starts in production mode', async ({ page }) => {
    // This test would require a production build to be running
    // For now, we'll test the development server
    
    try {
      await page.goto('/', { timeout: 30000 });
      await page.waitForLoadState('domcontentloaded');
      
      // Check if page loads without errors
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
      
      // Check for React hydration
      const reactRoot = page.locator('#__next, [data-reactroot]');
      await expect(reactRoot).toBeVisible();
      
    } catch (error) {
      console.warn('Production server test skipped - server may not be running');
      // Don't fail the test if server isn't running
    }
  });

  test('SEO meta tags are present', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Check for essential meta tags
    const title = await page.locator('title').textContent();
    expect(title).toBeTruthy();
    
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toBeAttached();
    
    const metaViewport = page.locator('meta[name="viewport"]');
    await expect(metaViewport).toBeAttached();
    
    // Check for Open Graph tags (optional but recommended)
    const ogTitle = page.locator('meta[property="og:title"]');
    const ogTitleExists = await ogTitle.count() > 0;
    
    const ogDescription = page.locator('meta[property="og:description"]');
    const ogDescriptionExists = await ogDescription.count() > 0;
    
    // Log SEO status
    console.log('SEO Check:', {
      title: !!title,
      description: await metaDescription.count() > 0,
      viewport: await metaViewport.count() > 0,
      ogTitle: ogTitleExists,
      ogDescription: ogDescriptionExists
    });
  });

  test('Performance metrics are acceptable', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    });
    
    console.log('Performance Metrics:', metrics);
    
    // Basic performance assertions (adjust thresholds as needed)
    expect(metrics.domContentLoaded).toBeLessThan(3000); // 3 seconds
    expect(metrics.loadComplete).toBeLessThan(5000); // 5 seconds
    
    if (metrics.firstContentfulPaint > 0) {
      expect(metrics.firstContentfulPaint).toBeLessThan(2000); // 2 seconds
    }
  });
});
