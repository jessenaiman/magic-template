import { useEffect, useState } from 'react';
import { navigationItems } from '@/config/navigation';
import { loadDynamicNavigation } from '@/lib/dynamic-navigation';
import type { NavItem } from '@/lib/navigation-utils';

/**
 * Hook to load dynamic navigation items
 * This keeps the main navigation config clean while still providing dynamic loading
 */
export function useDynamicNavigation() {
  const [navItems, setNavItems] = useState<NavItem[]>(navigationItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        // Load dynamic items for Workshop and Templates
        const workshopItems = loadDynamicNavigation('design', 'design');
        const templateItems = loadDynamicNavigation('template', 'template');

        // Update the navigation items with dynamic children
        const updatedItems = navigationItems.map((item: NavItem) => {
          if (item.label === 'Workshop') {
            return { ...item, children: workshopItems };
          }
          if (item.label === 'Templates') {
            return { ...item, children: templateItems };
          }
          return item;
        });

        setNavItems(updatedItems);
      } catch (error) {
        console.warn('Failed to load dynamic navigation:', error);
        // Fall back to static navigation
        setNavItems(navigationItems);
      } finally {
        setLoading(false);
      }
    };

    loadNavigation();
  }, []);

  return { navItems, loading };
}
