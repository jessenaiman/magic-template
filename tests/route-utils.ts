import fs from 'node:fs';
import path from 'node:path';

const APP_DIR = path.resolve(process.cwd(), 'app');

function isDir(p: string) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function listDirs(p: string): string[] {
  try {
    return fs.readdirSync(p).map((name) => path.join(p, name));
  } catch {
    return [];
  }
}

function toRouteFromPageTsx(filePath: string): string | null {
  // Expect paths like: <root>/app/page.tsx or <root>/app/design/buttons/page.tsx
  const rel = path.relative(APP_DIR, filePath);
  if (rel.startsWith('..')) return null;
  // Filter out dynamic or optional segments for now to avoid param requirements
  if (rel.includes('[') || rel.includes(']')) return null;
  // Exclude route groups like (marketing)
  const segments = rel.split(path.sep).filter(Boolean).filter((s) => !(s.startsWith('(') && s.endsWith(')')));
  // Remove trailing 'page.tsx'
  if (segments[segments.length - 1] !== 'page.tsx') return null;
  const withoutPage = segments.slice(0, -1);
  const route = '/' + withoutPage.join('/');
  return route === '/' ? '/' : route;
}

export function discoverAllRoutes(): string[] {
  const routes: string[] = [];

  function walk(dir: string) {
    for (const entry of listDirs(dir)) {
      if (isDir(entry)) {
        walk(entry);
      } else if (entry.endsWith(path.join('', 'page.tsx'))) {
        const route = toRouteFromPageTsx(entry);
        if (route && !routes.includes(route)) routes.push(route);
      }
    }
  }

  if (isDir(APP_DIR)) walk(APP_DIR);

  // Ensure root route exists if app/page.tsx present
  // Sort for stable output
  return routes.sort((a, b) => a.localeCompare(b));
}
