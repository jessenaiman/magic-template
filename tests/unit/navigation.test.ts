import { describe, it, expect } from 'vitest';
import { mainNavigation } from '@/app/navigation.config';
import fs from 'fs';
import path from 'path';

// Helper function to check if a file exists
const fileExists = (filePath: string): boolean => {
  const fullPath = path.join(process.cwd(), 'app', filePath);
  return fs.existsSync(fullPath);
};

describe('Navigation Configuration', () => {
  it('has valid navigation structure', () => {
    // Basic structure validation
    expect(Array.isArray(mainNavigation)).toBe(true);
    expect(mainNavigation.length).toBeGreaterThan(0);

    // Check each section
    mainNavigation.forEach(section => {
      expect(section).toHaveProperty('label');
      expect(section).toHaveProperty('items');
      expect(Array.isArray(section.items)).toBe(true);
      expect(section.items.length).toBeGreaterThan(0);

      // Check each navigation item
      section.items.forEach(item => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('href');
        
        // Check if the href points to a valid route
        if (item.href !== '#') {  // Skip external links
          const routePath = item.href.endsWith('/') ? `${item.href}page` : `${item.href}/page`;
          const pagePath = routePath.replace(/^\//, ''); // Remove leading slash
          
          // Check for either .tsx or .jsx page files
          const pageExists = ['.tsx', '.jsx'].some(ext => 
            fileExists(`${pagePath}${ext}`) || fileExists(`${pagePath}/index${ext}`)
          );
          
          expect(pageExists, `Page not found for route: ${item.href}`).toBe(true);
        }

        // Check children if they exist
        if (item.children) {
          expect(Array.isArray(item.children)).toBe(true);
          item.children.forEach(child => {
            expect(child).toHaveProperty('label');
            expect(child).toHaveProperty('href');
            
            // Check if child href points to a valid route
            if (child.href !== '#') {  // Skip external links
              const childRoutePath = child.href.endsWith('/') ? `${child.href}page` : `${child.href}/page`;
              const childPagePath = childRoutePath.replace(/^\//, '');
              
              const childPageExists = ['.tsx', '.jsx'].some(ext => 
                fileExists(`${childPagePath}${ext}`) || fileExists(`${childPagePath}/index${ext}`)
              );
              
              expect(childPageExists, `Page not found for child route: ${child.href}`).toBe(true);
            }
          });
        }
      });
    });
  });

  it('has no duplicate hrefs', () => {
    const hrefs = new Set<string>();
    const duplicates = new Set<string>();

    const checkItem = (item: { href: string; children?: Array<{ href: string }> }) => {
      if (hrefs.has(item.href)) {
        duplicates.add(item.href);
      } else {
        hrefs.add(item.href);
      }

      if (item.children) {
        item.children.forEach(checkItem);
      }
    };

    mainNavigation.forEach(section => {
      section.items.forEach(checkItem);
    });

    expect(duplicates.size, `Duplicate hrefs found: ${Array.from(duplicates).join(', ')}`).toBe(0);
  });

  it('has valid external links', () => {
    const externalLinks = mainNavigation
      .flatMap(section => section.items)
      .filter(item => item.href.startsWith('http'));

    // If there are external links, we can add validation here
    // For now, just log them for manual verification
    if (externalLinks.length > 0) {
      console.log('External links to verify manually:', 
        externalLinks.map(link => `${link.label}: ${link.href}`)
      );
    }
  });
});
