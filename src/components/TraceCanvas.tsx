import { useCallback, useEffect, useRef, useState } from 'react';
import { Undo, Erase } from './Icons';

const FONT = '"Apple SD Gothic Neo", "Noto Sans KR", "Noto Sans CJK KR", "Malgun Gothic", sans-serif';
const SIZE = 300; 
const INK = SIZE * 0.055;
const GLYPH = (n: number) => `500 ${Math.round(n * 0.72)}px ${FONT}`;

type Pt = [number, number];

function drawGlyph(ctx: CanvasRenderingContext2D, char: string, n: number, stroke = 0) {
  ctx.font = GLYPH(n);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  const m = ctx.measureText(char);
  const y = n / 2 + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
  const x = n / 2 + (m.actualBoundingBoxLeft - m.actualBoundingBoxRight) / 2;
  ctx.fillText(char, x, y);
  if (stroke) {
    ctx.lineWidth = stroke;
    ctx.strokeText(char, x, y);
  }
}

export interface TraceResult {
  score: number;
  precision: number;
  coverage: number;
}

interface Props {
  char: string;
  showModel?: boolean;
  onScore?: (r: TraceResult) => void;
}

export function TraceCanvas({ char, showModel = true, onScore }: Props) {
  const pad = useRef<HTMLDivElement>(null);
  const guide = useRef<HTMLCanvasElement>(null);
  const ink = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Pt[][]>([]);
  const drawing = useRef(false);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<TraceResult | null>(null);

  const setup = (c: HTMLCanvasElement | null) => {
    if (!c) return null;
    const px = Math.round(SIZE * (window.devicePixelRatio || 1));
    if (c.width !== px || c.height !== px) {
      c.width = px;
      c.height = px;
    }
    const ctx = c.getContext('2d')!;
    ctx.setTransform(px / SIZE, 0, 0, px / SIZE, 0, 0);
    return ctx;
  };

  useEffect(() => {
    const el = pad.current;
    if (!el) return;
    const fit = () => {
      const w = Math.round(el.getBoundingClientRect().width);
      el.style.height = `${w}px`;
      for (const c of [guide.current, ink.current]) {
        if (c) { c.style.width = `${w}px`; c.style.height = `${w}px`; }
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const ctx = setup(guide.current);
    if (!ctx) return;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.strokeStyle = '#d9cfb8';
    ctx.setLineDash([6, 6]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(SIZE / 2, 0); ctx.lineTo(SIZE / 2, SIZE);
    ctx.moveTo(0, SIZE / 2); ctx.lineTo(SIZE, SIZE / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    if (showModel) {
      ctx.fillStyle = '#e4d9c6';
      ctx.strokeStyle = '#b3a28c';
      drawGlyph(ctx, char, SIZE, 2);
    }
  }, [char, showModel]);

  const redraw = useCallback(() => {
    const ctx = setup(ink.current);
    if (!ctx) return;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.strokeStyle = '#3b2f25';
    ctx.lineWidth = INK;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const s of strokes.current) {
      ctx.beginPath();
      s.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      if (s.length === 1) ctx.lineTo(s[0][0] + 0.1, s[0][1]);
      ctx.stroke();
    }
  }, []);

  const clear = useCallback(() => {
    strokes.current = [];
    setCount(0);
    setResult(null);
    redraw();
  }, [redraw]);

  useEffect(clear, [char, clear]);

  const point = (e: React.PointerEvent): Pt => {
    const r = ink.current!.getBoundingClientRect();
    const k = SIZE / r.width;
    return [(e.clientX - r.left) * k, (e.clientY - r.top) * k];
  };

  const down = (e: React.PointerEvent) => {
    e.preventDefault();
    ink.current!.setPointerCapture(e.pointerId);
    drawing.current = true;
    strokes.current.push([point(e)]);
    setResult(null);
    redraw();
  };
  const move = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    strokes.current[strokes.current.length - 1].push(point(e));
    redraw();
  };
  const up = () => {
    if (!drawing.current) return;
    drawing.current = false;
    setCount(strokes.current.length);
  };

  const undo = () => {
    strokes.current.pop();
    setCount(strokes.current.length);
    setResult(null);
    redraw();
  };

  const check = () => {
    const r = scoreTrace(char, strokes.current);
    setResult(r);
    onScore?.(r);
  };

  return (
    <div className="trace">
      <div className="trace-pad" ref={pad}>
        <canvas ref={guide} className="trace-layer" />
        <canvas
          ref={ink}
          className="trace-layer trace-ink"
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
        />
      </div>
      <div className="trace-tools">
        <button type="button" className="btn btn-ghost" onClick={undo} disabled={!count}><Undo size={18} /> Annuler</button>
        <button type="button" className="btn btn-ghost" onClick={clear} disabled={!count}><Erase size={18} /> Effacer</button>
        <button type="button" className="btn btn-primary" onClick={check} disabled={!count}>Vérifier</button>
      </div>
      {result && (
        <p className={`trace-result ${result.score >= 0.55 ? 'ok' : 'ko'}`}>
          {result.score >= 0.75 ? 'Magnifique ! ✨' : result.score >= 0.55 ? 'Bien joué !' : 'Presque… réessaie en suivant le modèle.'}
          <span> {Math.round(result.score * 100)} %</span>
        </p>
      )}
    </div>
  );
}

export function scoreTrace(char: string, strokes: Pt[][]): TraceResult {
  const N = 96;
  const k = N / SIZE;
  const layer = (draw: (ctx: CanvasRenderingContext2D) => void) => {
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    ctx.fillStyle = ctx.strokeStyle = '#000';
    ctx.lineCap = ctx.lineJoin = 'round';
    draw(ctx);
    const d = ctx.getImageData(0, 0, N, N).data;
    const out = new Uint8Array(N * N);
    for (let i = 0; i < out.length; i++) out[i] = d[i * 4 + 3] > 60 ? 1 : 0;
    return out;
  };
  const glyph = (tolerance: number) => (ctx: CanvasRenderingContext2D) => drawGlyph(ctx, char, N, tolerance);
  const inkLayer = (width: number) => (ctx: CanvasRenderingContext2D) => {
    ctx.lineWidth = width;
    for (const s of strokes) {
      ctx.beginPath();
      s.forEach(([x, y], i) => (i ? ctx.lineTo(x * k, y * k) : ctx.moveTo(x * k, y * k)));
      if (s.length === 1) ctx.lineTo(s[0][0] * k + 0.1, s[0][1] * k);
      ctx.stroke();
    }
  };

  const strict = layer(glyph(0));
  const loose = layer(glyph(N * 0.09));
  const userInk = layer(inkLayer(INK * k));
  const userWide = layer(inkLayer(INK * k * 2.4));

  let inkTotal = 0, inkOn = 0, glyphTotal = 0, glyphCovered = 0;
  for (let i = 0; i < N * N; i++) {
    if (userInk[i]) { inkTotal++; if (loose[i]) inkOn++; }
    if (strict[i]) { glyphTotal++; if (userWide[i]) glyphCovered++; }
  }
  const precision = inkTotal ? inkOn / inkTotal : 0;
  const coverage = glyphTotal ? glyphCovered / glyphTotal : 0;
  const score = precision + coverage ? (2 * precision * coverage) / (precision + coverage) : 0;
  return { score, precision, coverage };
}
