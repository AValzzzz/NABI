import { useEffect, useRef, useState } from 'react';
import { review, sortDue, type Card, type Grade } from '../lib/srs';
import { saveReview } from '../lib/db';
import { sfx } from '../lib/sfx';
import { CardReview } from './CardReview';

interface Item { card: Card; relearn: boolean }

export interface ReviewStats { reviewed: number; correct: number }

export function ReviewQueue({ cards, day, onFinish, onProgress }: {
  cards: Card[];
  day: string;
  onFinish: (s: ReviewStats) => void;
  onProgress?: (remaining: number) => void;
}) {
  const [queue, setQueue] = useState<Item[]>(() => sortDue(cards).map((card) => ({ card, relearn: false })));
  const stats = useRef<ReviewStats>({ reviewed: 0, correct: 0 });

  useEffect(() => {
    onProgress?.(queue.length);
    if (!queue.length) onFinish(stats.current);
  }, [queue.length]);

  const grade = async (g: Grade) => {
    const [head, ...rest] = queue;
    let card = head.card;
    if (!head.relearn) {
      card = review(card, g, day);
      await saveReview(card, g, day);
      stats.current.reviewed++;
      if (g !== 'again') stats.current.correct++;
    }
    sfx(g === 'again' ? 'wrong' : 'tap');
    setQueue(g === 'again' ? [...rest, { card, relearn: true }] : rest);
  };

  const head = queue[0];
  if (!head) return null;
  return (
    <div>
      <p className="queue-count">{queue.length} carte{queue.length > 1 ? 's' : ''} restante{queue.length > 1 ? 's' : ''}{head.relearn ? ' · 2e essai' : ''}</p>
      <CardReview key={head.card.id + queue.length} card={head.card} day={day} onGrade={grade} />
    </div>
  );
}
