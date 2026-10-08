import { useMemo, useState } from 'react';
import { speak } from '../../lib/speech';
import { sfx } from '../../lib/sfx';
import { shuffle } from '../../lib/util';
import type { ExProps } from './types';
import { RichText } from '../RichText';

export function Match({ ex, locked, onResult }: ExProps<'match'>) {
  const left = useMemo(() => shuffle(ex.pairs.map((_, i) => i)), [ex]);
  const right = useMemo(() => shuffle(ex.pairs.map((_, i) => i)), [ex]);
  const [sel, setSel] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const pickRight = (i: number) => {
    if (sel === null) return;
    if (i === sel) {
      const next = [...done, i];
      setDone(next);
      setSel(null);
      sfx('tap');
      if (next.length === ex.pairs.length) onResult(mistakes <= 1);
    } else {
      setWrong(i);
      setMistakes((m) => m + 1);
      sfx('wrong');
      setTimeout(() => setWrong(null), 450);
    }
  };

  return (
    <div className="ex">
      <RichText text={ex.prompt ?? 'Associe les paires.'} className="ex-prompt" />
      <div className="match">
        <div className="match-col" lang="ko">
          {left.map((i) => (
            <button
              type="button"
              key={i}
              className={`choice ${done.includes(i) ? 'correct' : sel === i ? 'selected' : ''}`}
              disabled={locked || done.includes(i)}
              onClick={() => { setSel(i); speak(ex.pairs[i][0]); }}
            >
              {ex.pairs[i][0]}
            </button>
          ))}
        </div>
        <div className="match-col">
          {right.map((i) => (
            <button
              type="button"
              key={i}
              className={`choice ${done.includes(i) ? 'correct' : wrong === i ? 'wrong shake' : ''}`}
              disabled={locked || done.includes(i)}
              onClick={() => pickRight(i)}
            >
              {ex.pairs[i][1]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
