import type { Exercise, Lesson } from '../content/types';
import type { Card } from './srs';
import { sample, shuffle } from './util';

export function buildInterleave(lesson: Lesson | undefined, cards: Card[], size = 6): Exercise[] {
  const authored = lesson?.interleave ?? [];
  const pool = cards.filter((c) => c.kind !== 'hangul');
  if (pool.length < 4) return shuffle(authored);

  const todays = pool.filter((c) => c.lessonId === lesson?.id);
  const older = pool.filter((c) => c.lessonId !== lesson?.id);
  const picks = [...sample(older, Math.max(size - authored.length - 2, 2)), ...sample(todays, 2)];

  const auto = picks.map((card, i): Exercise => {
    const others = sample(pool.filter((c) => c.id !== card.id && c.fr !== card.fr && c.ko !== card.ko), 3);
    const mode = i % 3;
    if (mode === 0) {
      return { type: 'mcq', prompt: `Que veut dire [[${card.ko}]] ?`, choices: [card.fr, ...others.map((o) => o.fr)], answer: 0 };
    }
    if (mode === 1) {
      return { type: 'mcq', prompt: `Comment dit-on « ${card.fr} » ?`, choices: [card.ko, ...others.map((o) => o.ko)], answer: 0 };
    }
    return { type: 'listen', audio: card.speak ?? card.ko, choices: [card.ko, ...others.map((o) => o.ko)], answer: 0 };
  });

  return shuffle([...authored, ...auto]).slice(0, Math.max(size, authored.length));
}
