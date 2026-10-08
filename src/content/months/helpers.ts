import type { CardSeed } from '../types';

export const letter = (id: string, ko: string, roman: string, fr: string, note: string): CardSeed => ({
  id: `m1-h-${id}`, kind: 'hangul', ko, roman, fr, note,
});
