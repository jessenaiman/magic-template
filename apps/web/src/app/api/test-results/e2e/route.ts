import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';

export async function GET() {
  const root = process.cwd();
  const detailed = join(root, 'test-results', 'e2e-detailed.json');
  const fallback = join(root, 'test-results', 'e2e.json');

  try {
    let raw: string | null = null;
    try {
      raw = await fs.readFile(detailed, 'utf8');
    } catch {
      // fall back to basic Playwright JSON if detailed report missing yet
      raw = await fs.readFile(fallback, 'utf8');
    }

    const data = JSON.parse(raw!);
    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        error: 'No Playwright results found. Run tests to populate test-results/.',
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 404 }
    );
  }
}
