import { addDays } from './dates';
import type { CardSeed } from '../content/types';

export interface Card extends CardSeed {
  lessonId: string;
  ease: number;
  interval: number; 
  reps: number; 
  lapses: number;
  due: string; 
  lastReview?: string;
  addedOn: string;
}

export type Grade = 'again' | 'hard' | 'good' | 'easy';

export const QUALITY: Record<Grade, number> = { again: 1, hard: 3, good: 4, easy: 5 };

export const MIN_EASE = 1.3;
export const START_EASE = 2.5;

export function newCard(seed: CardSeed, lessonId: string, day: string): Card {
  return {
    ...seed,
    lessonId,
    ease: START_EASE,
    interval: 0,
    reps: 0,
    lapses: 0,
    due: addDays(day, 1),
    addedOn: day,
  };
}

export function review(card: Card, grade: Grade, day: string): Card {
  const q = QUALITY[grade];
  const ease = Math.max(MIN_EASE, card.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));

  if (q < 3) {
    return { ...card, ease, reps: 0, interval: 1, lapses: card.lapses + 1, due: addDays(day, 1), lastReview: day };
  }

  let interval: number;
  if (card.reps === 0) interval = grade === 'easy' ? 3 : 1;
  else if (card.reps === 1) interval = grade === 'hard' ? 3 : 6;
  else interval = Math.round(card.interval * (grade === 'hard' ? 1.2 : ease));
  interval = Math.max(interval, card.reps > 0 ? card.interval + (grade === 'hard' ? 0 : 1) : 1, 1);

  return { ...card, ease, reps: card.reps + 1, interval, due: addDays(day, interval), lastReview: day };
}

export function isDue(card: Card, day: string): boolean {
  return card.due <= day;
}

export function sortDue(cards: Card[]): Card[] {
  return [...cards].sort((a, b) => (a.due === b.due ? a.ease - b.ease : a.due < b.due ? -1 : 1));
}

export function previewIntervals(card: Card, day: string): Record<Grade, number> {
  const out = {} as Record<Grade, number>;
  for (const g of Object.keys(QUALITY) as Grade[]) out[g] = review(card, g, day).interval;
  return out;
}
