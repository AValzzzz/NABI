import { useRef, useState } from 'react';
import { digitalTime, koreanTime } from '../lib/clock';
import { speak } from '../lib/speech';

const C = 100; 
const R = 92;

const polar = (deg: number, r: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
};

export function ClockFace({ h, m, onChange, size = 220 }: { h: number; m: number; onChange?: (h: number, m: number) => void; size?: number }) {
  const svg = useRef<SVGSVGElement>(null);
  const dragging = useRef<'h' | 'm' | null>(null);

  const angleAt = (e: React.PointerEvent) => {
    const box = svg.current!.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * 200 - C;
    const y = ((e.clientY - box.top) / box.height) * 200 - C;
    return { deg: ((Math.atan2(y, x) * 180) / Math.PI + 450) % 360, dist: Math.hypot(x, y) };
  };
  const move = (e: React.PointerEvent) => {
    if (!onChange || !dragging.current) return;
    const { deg } = angleAt(e);
    if (dragging.current === 'm') onChange(h, (Math.round(deg / 30) * 5) % 60);
    else onChange(Math.round((deg - m / 2 + 360) / 30) % 12 || 12, m);
  };

  const hourTip = polar((h % 12) * 30 + m / 2, 50);
  const minTip = polar(m * 6, 74);
  return (
    <svg
      ref={svg}
      className={`clock ${onChange ? 'clock-live' : ''}`}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={koreanTime(h, m)}
      onPointerDown={(e) => {
        if (!onChange) return;
        dragging.current = angleAt(e).dist < R * 0.6 ? 'h' : 'm';
        svg.current!.setPointerCapture(e.pointerId);
        move(e);
      }}
      onPointerMove={move}
      onPointerUp={() => (dragging.current = null)}
      onPointerCancel={() => (dragging.current = null)}
    >
      <circle className="clock-face" cx={C} cy={C} r={R} />
      {Array.from({ length: 60 }, (_, i) => {
        const a = polar(i * 6, R - 4);
        const b = polar(i * 6, i % 5 ? R - 8 : R - 13);
        return <line key={i} className={i % 5 ? 'clock-tick' : 'clock-tick big'} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const p = polar((i + 1) * 30, R - 26);
        return <text key={i} className="clock-num" x={p.x} y={p.y}>{i + 1}</text>;
      })}
      <line className="clock-hand hour" x1={C} y1={C} x2={hourTip.x} y2={hourTip.y} />
      <line className="clock-hand minute" x1={C} y1={C} x2={minTip.x} y2={minTip.y} />
      <circle className="clock-pin" cx={C} cy={C} r={6} />
    </svg>
  );
}

export function ClockBlock({ h = 3, m = 0, interactive }: { h?: number; m?: number; interactive?: boolean }) {
  const [time, setTime] = useState({ h, m });
  const ko = koreanTime(time.h, time.m);
  return (
    <div className="b-clock">
      <ClockFace h={time.h} m={time.m} onChange={interactive ? (h, m) => setTime({ h, m }) : undefined} />
      <button type="button" className="clock-reading" onClick={() => speak(ko)}>
        <span lang="ko">{ko}</span>
        <small>{digitalTime(time.h, time.m)}</small>
      </button>
      {interactive && <small className="muted">Fais tourner les aiguilles : la petite près du centre, la grande près du bord.</small>}
    </div>
  );
}

