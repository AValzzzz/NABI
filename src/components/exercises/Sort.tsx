import { useMemo, useState } from 'react';
import { speak } from '../../lib/speech';
import { sfx } from '../../lib/sfx';
import { shuffle } from '../../lib/util';
import type { ExProps } from './types';
import { RichText } from '../RichText';

export function Sort({ ex, onResult }: ExProps<'sort'>) {
  const items = useMemo(() => shuffle(ex.items), [ex]);
  const [i, setI] = useState(0);
  const [errors, setErrors] = useState(0);
  const [flash, setFlash] = useState<'ok' | 'ko' | null>(null);
  const item = items[i];

  const pick = (bucket: 0 | 1) => {
    if (flash) return;
    const ok = bucket === item.bucket;
    sfx(ok ? 'tap' : 'wrong');
    setFlash(ok ? 'ok' : 'ko');
    const nextErrors = errors + (ok ? 0 : 1);
    setErrors(nextErrors);
    setTimeout(() => {
      setFlash(null);
      if (i + 1 < items.length) setI(i + 1);
      else onResult(nextErrors === 0);
    }, ok ? 450 : 900);
  };

  return (
    <div className="ex">
      <RichText text={ex.prompt} className="ex-prompt" />
      <p className="sort-count">{Math.min(i + 1, items.length)} / {items.length}</p>
      {item && (
        <button type="button" className={`sort-card ${flash ?? ''}`} lang="ko" onClick={() => speak(item.text)}>
          {item.text}
          {flash === 'ko' && <small>→ {ex.buckets[item.bucket]}</small>}
        </button>
      )}
      <div className="sort-buckets" lang="ko">
        {ex.buckets.map((b, k) => (
          <button type="button" key={b} className="btn btn-bucket" onClick={() => pick(k as 0 | 1)}>
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
