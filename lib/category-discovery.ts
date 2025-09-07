import fs from 'node:fs';
import path from 'node:path';

/**
 * Represents a discovered design category in the app/design/[category] structure
 */
export interface DesignCategory {
  /** The URL-safe category slug (e.g., 'backgrounds', 'buttons') */
  slug: string;
  /** The display name for the category */
  name: string;
  /** Path relative to app/design/[category] */
  path: string;
}

/**
 * Represents a discovered technology implementation within a category
 */
export interface TechnologyImplementation {
  /** The technology slug (e.g., 'magicui', 'tailwind') */
  slug: string;
  /** Display name for the technology */
  name: string;
  /** Full path to the technology implementation */
  path: string;
  /** Category this technology belongs to */
  category: string;
}

const APP_DIR = path.resolve(process.cwd(), 'app');
const DESIGN_DIR = path.join(APP_DIR, 'design');

/**
 * Check if a path is a directory
 */
function isDirectory(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Get list of directory names from a path
 */
function listDirectories(p: string): string[] {
  try {
    return fs.readdirSync(p)
      .map((name) => path.join(p, name))
      .filter(isDirectory)
      .map((dirPath) => path.basename(dirPath));
  } catch {
    return [];
  }
}

/**
 * Check if directory name should be excluded from discovery
 * Excludes Next.js dynamic segments, route groups, and special directories
 */
function isExcludedDirectory(name: string): boolean {
  // Exclude Next.js dynamic segments [category]
  if (name.startsWith('[') && name.endsWith(']')) return true;

  // Exclude Next.js route groups (groupName)
  if (name.startsWith('(') && name.endsWith(')')) return true;

  // Exclude special directories
  const excluded = ['node_modules', '.next', 'dist', 'build', '.git'];
  return excluded.includes(name);
}

/**
 * Convert slug to display name
 */
function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\bCss\b/g, 'CSS')  // Fix common abbreviations
    .replace(/\bUi\b/g, 'UI');
}

/**
 * Discover all design categories from app/design/[category] subdirectories
 * @returns Array of discovered design categories
 */
export function discoverCategories(): DesignCategory[] {
  if (!isDirectory(DESIGN_DIR)) {
    console.warn('Design directory not found:', DESIGN_DIR);
    return [];
  }

  const subdirectories = listDirectories(DESIGN_DIR);

  return subdirectories
    .filter(name => !isExcludedDirectory(name))
    .map(slug => ({
      slug,
      name: slugToName(slug),
      path: slug
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

/**
 * Discover all technology implementations for a specific category
 * @param category - The category slug to discover implementations for
 * @returns Array of discovered technology implementations
 */
export function discoverTechnologyImplementations(category: string): TechnologyImplementation[] {
  const categoryPath = path.join(DESIGN_DIR, category);

  if (!isDirectory(categoryPath)) {
    console.warn(`Category directory not found: ${categoryPath}`);
    return [];
  }

  const subdirectories = listDirectories(categoryPath);

  return subdirectories
    .filter(name => !isExcludedDirectory(name))
    .map(slug => ({
      slug,
      name: slugToName(slug),
      path: path.join(category, slug),
      category
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

/**
 * Get all technology implementations across all categories
 * @returns Flat array of all technology implementations
 */
export function discoverAllTechnologyImplementations(): TechnologyImplementation[] {
  const categories = discoverCategories();
  const allImplementations: TechnologyImplementation[] = [];

  categories.forEach(category => {
    const implementations = discoverTechnologyImplementations(category.slug);
    allImplementations.push(...implementations);
  });

  return allImplementations;
}

/**
 * Check if a category exists
 * @param category - Category slug to check
 */
export function categoryExists(category: string): boolean {
  const categoryPath = path.join(DESIGN_DIR, category);
  return isDirectory(categoryPath);
}

/**
 * Check if a technology implementation exists for a given category
 * @param category - Category slug
 * @param technology - Technology slug
 */
export function technologyImplementationExists(category: string, technology: string): boolean {
  const techPath = path.join(DESIGN_DIR, category, technology);
  return isDirectory(techPath);
}

/**
 * Get category metadata including available technologies
 * @param category - Category slug
 * @returns Category with implementations or null if not found
 */
export function getCategoryWithTechnologies(category: string): {
  category: DesignCategory;
  technologies: TechnologyImplementation[];
} | null {
  if (!categoryExists(category)) return null;

  const categories = discoverCategories();
  const categoryInfo = categories.find(c => c.slug === category);

  if (!categoryInfo) return null;

  const technologies = discoverTechnologyImplementations(category);

  return {
    category: categoryInfo,
    technologies
  };
}