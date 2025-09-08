import * as fs from 'fs';
import * as path from 'path';
import type { NavItem, IconName } from '@/lib/navigation-utils';

/**
 * Dynamically loads navigation items from the file system
 * This keeps the main navigation config clean and simple
 */
export function loadDynamicNavigation(basePath: string, baseHref: string): NavItem[] {
  const fullPath = path.join(process.cwd(), 'app', basePath);

  try {
    const categories = fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
      .filter(dirent => dirent.name !== 'layout.tsx' && dirent.name !== 'page.tsx')
      .map(dirent => dirent.name);

    return categories.map(categorySlug => {
      const categoryPath = path.join(fullPath, categorySlug);
      const examples = fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
        .filter(dirent => dirent.name !== 'layout.tsx' && dirent.name !== 'page.tsx')
        .map(dirent => dirent.name);

      const children: NavItem[] = [
        {
          label: "Overview",
          href: `/${basePath}/${categorySlug}`,
          icon: 'Layout' as IconName,
          description: `Overview of ${categorySlug.replace(/-/g, ' ')}`,
          children: [],
          isActive: false,
          external: false
        },
        ...examples.map(exampleSlug => ({
          label: exampleSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          href: `/${basePath}/${categorySlug}/${exampleSlug}`,
          icon: 'File' as IconName,
          description: `Example: ${exampleSlug.replace(/-/g, ' ')}`,
          children: [],
          isActive: false,
          external: false
        }))
      ];

      return {
        label: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        href: `/${basePath}/${categorySlug}`,
        icon: getIconForCategory(categorySlug) as IconName,
        description: getDescriptionForCategory(categorySlug),
        children,
        isActive: false,
        external: false
      };
    });
  } catch (error) {
    console.warn(`Failed to load dynamic navigation for ${basePath}:`, error);
    return [];
  }
}

// Helper functions for dynamic navigation
function getIconForCategory(categorySlug: string): IconName {
  const iconMap: Record<string, IconName> = {
    'animations': 'Palette',
    'backgrounds': 'Palette',
    'buttons': 'Zap',
    'effects': 'Sparkles',
    'text': 'Type',
    'transitions': 'ArrowRightLeft',
    'responsive-design': 'Layout',
  };
  return iconMap[categorySlug] || 'Palette';
}

function getDescriptionForCategory(categoryName: string): string {
  const lowercaseName = categoryName.toLowerCase();

  if (lowercaseName.includes('animation')) return 'Animated design components and patterns';
  if (lowercaseName.includes('background')) return 'Animated and static background patterns';
  if (lowercaseName.includes('button')) return 'Interactive button components and animations';
  if (lowercaseName.includes('effect')) return 'Visual effects and animations';
  if (lowercaseName.includes('text')) return 'Typography and text effects';
  if (lowercaseName.includes('transition')) return 'Smooth page transition effects';
  if (lowercaseName.includes('responsive')) return 'Mobile-first design patterns';

  return 'Design components and implementations';
}
