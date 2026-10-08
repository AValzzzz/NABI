import { useState } from 'react';
import { strokeLength, strokesFor } from '../lib/strokes';
import { speak } from '../lib/speech';

const SPEED = 140; 
const GAP = 0.25; 

export function StrokeOrder({ char, size = 110, label, say }: { char: string; size?: number; label?: boolean; say?: string }) {
  const [run, setRun] = useState(0);
  const strokes = strokesFor(char);
  if (!strokes) return null;

  let t = 0.2;
  const timed = strokes.map((s) => {
    const len = strokeLength(s);
    const dur = len / SPEED;
    const item = { s, len, dur, delay: t };
    t += dur + GAP;
    return item;
  });
  const d = (s: number[][]) => s.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');

  return (
    <button
      type="button"
      className="stroke-order"
      onClick={() => { setRun((r) => r + 1); if (say) speak(say); }}
      aria-label={`Ordre des traits de ${char}, toucher pour revoir`}
    >
      <svg key={run} viewBox="-6 -6 112 112" width={size} height={size} aria-hidden="true">
        <path d="M50 -6V106M-6 50H106" className="so-cross" />
        {timed.map(({ s }, i) => <path key={`g${i}`} d={d(s)} className="so-ghost" />)}
        {timed.map(({ s, len, dur, delay }, i) => (
          <path
            key={`s${i}`}
            d={d(s)}
            className="so-ink"
            style={{ strokeDasharray: len, strokeDashoffset: len, animation: `so-draw ${dur}s linear ${delay}s forwards` }}
          />
        ))}
        {timed.map(({ s, delay }, i) => (
          <g key={`n${i}`} className="so-num" style={{ animationDelay: `${delay}s` }}>
            <circle cx={s[0][0]} cy={s[0][1]} r="7" />
            <text x={s[0][0]} y={s[0][1]} dy="0.35em">{i + 1}</text>
          </g>
        ))}
      </svg>
      {label && <span className="so-label" lang="ko">{char} <small>{strokes.length} trait{strokes.length > 1 ? 's' : ''}</small></span>}
    </button>
  );
}
