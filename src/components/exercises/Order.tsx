import { useMemo, useState } from 'react';
import { speak } from '../../lib/speech';
import { shuffle } from '../../lib/util';
import type { ExProps } from './types';
import { RichText } from '../RichText';

export function Order({ ex, locked, onResult }: ExProps<'order'>) {
  const pool = useMemo(() => shuffle([...ex.tiles, ...(ex.distractors ?? [])].map((text, id) => ({ id, text }))), [ex]);
  const [line, setLine] = useState<number[]>([]);
  const answer = line.map((id) => pool.find((t) => t.id === id)!.text);

  const check = () => {
    const ok = answer.join(' ') === ex.tiles.join(' ');
    if (ok) speak(answer.join(' '));
    onResult(ok);
  };

  return (
    <div className="ex">
      {ex.prompt && <RichText text={ex.prompt} className="ex-prompt" />}
      <p className="ex-prompt">Construis la phrase : <strong>{ex.translation}</strong></p>
      <div className="order-line" lang="ko">
        {line.map((id) => (
          <button type="button" key={id} className="tile" disabled={locked} onClick={() => setLine((l) => l.filter((x) => x !== id))}>
            {pool.find((t) => t.id === id)!.text}
          </button>
        ))}
      </div>
      <div className="order-pool" lang="ko">
        {pool.map((t) => (
          <button
            type="button"
            key={t.id}
            className={`tile ${line.includes(t.id) ? 'tile-used' : ''}`}
            disabled={locked || line.includes(t.id)}
            onClick={() => setLine((l) => [...l, t.id])}
          >
            {t.text}
          </button>
        ))}
      </div>
      {!locked && (
        <button type="button" className="btn btn-primary btn-block" disabled={!line.length} onClick={check}>
          Vérifier
        </button>
      )}
    </div>
  );
}
