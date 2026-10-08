import { describe, expect, it } from 'vitest';
import { newCard, review, sortDue, MIN_EASE } from './srs';

const seed = { id: 'c1', kind: 'vocab' as const, ko: '사과', fr: 'pomme' };
const day = '2026-10-08';

describe('SM-2', () => {
  it('new cards are due the next day', () => {
    expect(newCard(seed, 'l1', day).due).toBe('2026-10-09');
  });

  it('grows intervals 1 → 6 → ×ease on good answers', () => {
    let c = newCard(seed, 'l1', day);
    c = review(c, 'good', day);
    expect(c.interval).toBe(1);
    c = review(c, 'good', day);
    expect(c.interval).toBe(6);
    c = review(c, 'good', day);
    expect(c.interval).toBe(15);
    expect(c.due).toBe('2026-10-23');
  });

  it('a lapse resets reps and lowers ease (never below the floor)', () => {
    let c = newCard(seed, 'l1', day);
    for (let i = 0; i < 3; i++) c = review(c, 'good', day);
    for (let i = 0; i < 10; i++) c = review(c, 'again', day);
    expect(c.reps).toBe(0);
    expect(c.interval).toBe(1);
    expect(c.lapses).toBe(10);
    expect(c.ease).toBe(MIN_EASE);
  });

  it('easy grows faster than hard', () => {
    let c = newCard(seed, 'l1', day);
    c = review(review(c, 'good', day), 'good', day);
    expect(review(c, 'easy', day).interval).toBeGreaterThan(review(c, 'hard', day).interval);
  });

  it('sorts most overdue first', () => {
    const a = { ...newCard(seed, 'l1', day), id: 'a', due: '2026-10-05' };
    const b = { ...newCard(seed, 'l1', day), id: 'b', due: '2026-10-01' };
    expect(sortDue([a, b]).map((c) => c.id)).toEqual(['b', 'a']);
  });
});
