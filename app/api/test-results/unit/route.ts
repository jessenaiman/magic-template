import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';

export async function GET() {
  const root = process.cwd();
  const unit = join(root, 'test-results', 'unit.json');

  try {
    const raw = await fs.readFile(unit, 'utf8');
    const data = JSON.parse(raw);
    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        error: 'No Vitest results found. Run unit tests to populate test-results/.',
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 404 }
    );
  }
}
