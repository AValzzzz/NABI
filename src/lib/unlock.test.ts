import { describe, expect, it } from 'vitest';
import { lessonStates } from './unlock';
import type { Lesson } from '../content/types';

const L = (id: string): Lesson => ({ id, month: 1, week: 1, day: 1, title: id, cards: [], steps: [] });
const lessons = [L('a'), L('b'), L('c')];

describe('one lesson per day', () => {
  it('first lesson is available on day one', () => {
    expect(lessonStates(lessons, {}, '2026-10-08')).toEqual(['available', 'locked', 'locked']);
  });

  it('next lesson waits until tomorrow', () => {
    const done = { a: { id: 'a', completedOn: '2026-10-08', score: 1 } };
    expect(lessonStates(lessons, done, '2026-10-08')).toEqual(['done', 'tomorrow', 'locked']);
    expect(lessonStates(lessons, done, '2026-10-09')).toEqual(['done', 'available', 'locked']);
  });

  it('test mode unlocks the next lesson the same day', () => {
    const done = { a: { id: 'a', completedOn: '2026-10-08', score: 1 } };
    expect(lessonStates(lessons, done, '2026-10-08', true)).toEqual(['done', 'available', 'locked']);
  });

  it('missing days never unlocks more than one lesson', () => {
    const done = { a: { id: 'a', completedOn: '2026-10-01', score: 1 } };
    expect(lessonStates(lessons, done, '2026-10-20')).toEqual(['done', 'available', 'locked']);
  });
});
