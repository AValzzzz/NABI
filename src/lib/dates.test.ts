import { describe, expect, it } from 'vitest';
import { streak } from './dates';

describe('streak', () => {
  const days = ['2026-03-01', '2026-03-03', '2026-03-04', '2026-03-05'];

  it('counts consecutive days ending today', () => {
    expect(streak(days, '2026-03-05')).toBe(3);
  });

  it('keeps yesterday’s streak alive until today is done', () => {
    expect(streak(days, '2026-03-06')).toBe(3);
  });

  it('breaks after a missed day', () => {
    expect(streak(days, '2026-03-07')).toBe(0);
  });
});
