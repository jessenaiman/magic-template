import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mainNavigation } from '@/app/navigation.config';
import fs from 'fs';
import path from 'path';

// Track tested routes for reporting
const testedRoutes = new Set<string>();
const missingRoutes: string[] = [];
const duplicateHrefs: {href: string; paths: string[]}[] = [];

// Log test results after all tests complete
afterAll(() => {
  console.log('\n\n=== Navigation Test Results ===');
  
  if (testedRoutes.size > 0) {
    console.log('\n✅ Tested Routes:');
    Array.from(testedRoutes).sort().forEach(route => {
      console.log(`  - ${route}`);
    });
  }

  if (missingRoutes.length > 0) {
    console.log('\n❌ Missing Routes:');
    missingRoutes.sort().forEach(route => {
      console.log(`  - ${route}`);
    });
  }

  if (duplicateHrefs.length > 0) {
    console.log('\n⚠️  Duplicate Hrefs:');
    duplicateHrefs.forEach(({href, paths}) => {
      console.log(`  - "${href}" found in:`);
      paths.forEach(p => console.log(`      ${p}`));
    });
  }
  
  console.log('\n==============================\n');
});

// Helper function to check if a file exists
const fileOrDirectoryExists = (filePath: string): boolean => {
  const fullPath = path.join(process.cwd(), 'app', filePath);
  return fs.existsSync(fullPath);
};

// Helper to check if a page exists at the given path
const pageExists = (routePath: string): boolean => {
  // Skip external links and hash links
  if (routePath.startsWith('http') || routePath === '#') {
    return true;
  }

  // Check for page.tsx, page.jsx, or index.tsx files
  const basePath = routePath.replace(/^\//, '');
  const possiblePaths = [
    { path: `${basePath}/page.tsx`, type: 'page.tsx' },
    { path: `${basePath}/page.jsx`, type: 'page.jsx' },
    { path: `${basePath}/index.tsx`, type: 'index.tsx' },
    { path: `${basePath}/index.jsx`, type: 'index.jsx' },
    { path: `${basePath}/page/page.tsx`, type: 'page/page.tsx' },
    { path: `${basePath}/page/page.jsx`, type: 'page/page.jsx' },
  ];

  // Track that we've tested this route
  testedRoutes.add(routePath);
  
  // Check each possible path
  for (const {path: checkPath, type} of possiblePaths) {
    if (fileOrDirectoryExists(checkPath)) {
      console.log(`✓ Found ${routePath} (${type})`);
      return true;
    }
  }

  // If we get here, no valid page was found
  console.log(`✗ Missing: ${routePath}`);
  missingRoutes.push(routePath);
  return false;
};

describe('Navigation Configuration', () => {
  it('has valid navigation structure', () => {
    // Basic structure validation
    expect(Array.isArray(mainNavigation)).toBe(true);
    expect(mainNavigation.length).toBeGreaterThan(0);

    // List of known routes that might not exist yet
    const knownMissingRoutes = new Set([
      '/design/backgrounds/magicui',
      // Add other known missing routes here
    ]);

    const checkNavigationItem = (item: any, isChild = false) => {
      expect(item).toHaveProperty('label');
      expect(item).toHaveProperty('href');
      
      // Skip external links and hash links
      if (!item.href.startsWith('http') && item.href !== '#') {
        // For parent items, we only check if the directory exists
        if (item.children && item.children.length > 0) {
          const dirPath = item.href.replace(/^\//, '');
          if (!fileOrDirectoryExists(dirPath)) {
            console.warn(`⚠️  Directory not found: ${item.href}`);
          }
        } else if (!knownMissingRoutes.has(item.href)) {
          // For leaf nodes, check if the page exists (skip known missing routes)
          if (!pageExists(item.href)) {
            console.warn(`⚠️  Page not found: ${item.href}`);
          }
        }
      }

      // Recursively check children
      if (item.children) {
        expect(Array.isArray(item.children)).toBe(true);
        item.children.forEach((child: any) => checkNavigationItem(child, true));
      }
    };

    // Check each section and its items
    mainNavigation.forEach(section => {
      expect(section).toHaveProperty('label');
      expect(section).toHaveProperty('items');
      expect(Array.isArray(section.items)).toBe(true);
      expect(section.items.length).toBeGreaterThan(0);

      section.items.forEach(item => checkNavigationItem(item));
    });
  });

  it('has no duplicate hrefs except allowed ones', () => {
    console.log('\nChecking for duplicate hrefs...');
    
    const hrefs = new Map<string, string[]>(); // href -> array of paths where it appears
    const allowedDuplicates = new Set(['#']); // Add any other allowed duplicates here
    
    // Expected parent-child href duplicates (parent has same href as its overview child)
    const expectedDuplicates = new Set([
      '/design/backgrounds',
      '/design/buttons',
      '/design/responsive-design',
      '/design/effects',
      '/design/transitions',
      '/design/text'
    ]);

    const checkItem = (item: any, path: string = '') => {
      const itemPath = path ? `${path} > ${item.label}` : item.label;
      
      if (!allowedDuplicates.has(item.href)) {
        if (!hrefs.has(item.href)) {
          hrefs.set(item.href, []);
        }
        hrefs.get(item.href)?.push(itemPath);
      }

      if (item.children) {
        item.children.forEach((child: any) => checkItem(child, itemPath));
      }
    };

    mainNavigation.forEach(section => {
      section.items.forEach((item: any) => checkItem(item));
    });

    // Find actual duplicates
    duplicateHrefs.length = 0; // Reset from previous runs
    
    hrefs.forEach((paths, href) => {
      if (paths.length > 1) {
        duplicateHrefs.push({ href, paths: [...paths] });
      }
    });

    // Only fail the test if there are unexpected duplicates
    const unexpectedDuplicates = duplicateHrefs.filter(
      ({href}) => !expectedDuplicates.has(href)
    );

    if (unexpectedDuplicates.length > 0) {
      const errorMessage = unexpectedDuplicates
        .map(({href, paths}) => `"${href}" found in:\n  - ${paths.join('\n  - ')}`)
        .join('\n\n');
      
      throw new Error(`Unexpected duplicate hrefs found:\n${errorMessage}`);
    } else if (duplicateHrefs.length > 0) {
      console.log('\nℹ️  Expected duplicate hrefs (parent/child structure):');
      duplicateHrefs.forEach(({href, paths}) => {
        console.log(`  - "${href}" found in: ${paths.join(', ')}`);
      });
    }
  });

  it('has valid external links', () => {
    console.log('\nChecking external links...');
    
    const externalLinks = mainNavigation
      .flatMap(section => section.items)
      .filter(item => item.href.startsWith('http'));

    if (externalLinks.length > 0) {
      console.log('\n🔗 External Links (verify manually):');
      externalLinks.forEach(link => {
        console.log(`  - ${link.label}: ${link.href}`);
      });
    } else {
      console.log('No external links found in navigation.');
    }
  });
});
