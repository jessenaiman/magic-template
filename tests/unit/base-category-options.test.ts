import { describe, it, expect } from 'vitest';
import { getBaseFields, mergeWithBaseOptions, type CategorySlug } from '../../components/base-category-options';

describe('base-category-options', () => {
  it('getBaseFields returns array for known categories', () => {
    const cats: CategorySlug[] = ['text','button','card','animation','background','effects','page-transition'];
    for (const c of cats) {
      const fields = getBaseFields(c);
      expect(Array.isArray(fields)).toBe(true);
    }
  });

  it('mergeWithBaseOptions prefers custom option on id collision', () => {
    const base = getBaseFields('page-transition');
    const custom = [{ id: 'duration', label: 'Duration (s) OVERRIDE', type: 'slider' as const }];
    const merged = mergeWithBaseOptions('page-transition', custom);
    const found = merged.find(f => f.id === 'duration');
    expect(found?.label).toContain('OVERRIDE');
  });
});
