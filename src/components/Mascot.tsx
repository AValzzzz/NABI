import type { MascotMood } from '../content/types';

export type Stage = 'caterpillar' | 'chrysalis' | 'butterfly';

export function stageForMonth(month: number): Stage {
  return month <= 2 ? 'caterpillar' : month <= 4 ? 'chrysalis' : 'butterfly';
}

const SPRITES = import.meta.glob('../assets/sprites/*.png', { eager: true, import: 'default' }) as Record<string, string>;
const sprite = (name: string) => SPRITES[`../assets/sprites/${name}.png`];

const CHRYSALIS_MOOD: Record<MascotMood, string> = { idle: 'idle', happy: 'glow', thinking: 'idle', encourage: 'idle', sleep: 'idle' };
const BUTTERFLY_MOOD: Record<MascotMood, string> = { idle: 'idle', happy: 'celebrate', thinking: 'idle', encourage: 'fly', sleep: 'idle' };

interface Props {
  stage?: Stage;
  mood?: MascotMood;
  size?: number;
  className?: string;
}

export function Mascot({ stage = 'caterpillar', mood = 'idle', size = 120, className = '' }: Props) {
  const variant = stage === 'chrysalis' ? CHRYSALIS_MOOD[mood] : stage === 'butterfly' ? BUTTERFLY_MOOD[mood] : mood;
  const src = sprite(`${stage}-${variant}`) ?? sprite(`${stage}-idle`);
  const cls = `mascot mascot-${mood} ${className}`;
  if (src) return <img className={cls} src={src} width={size} height={size} alt="Nabi" draggable={false} />;
  const Svg = stage === 'chrysalis' ? Chrysalis : stage === 'butterfly' ? Butterfly : Caterpillar;
  return (
    <span className={cls} style={{ width: size, height: size }} role="img" aria-label="Nabi">
      <Svg mood={mood} />
    </span>
  );
}

function Face({ mood, cx, cy, r }: { mood: MascotMood; cx: number; cy: number; r: number }) {
  const eyeY = cy - r * 0.05;
  const dx = r * 0.38;
  const eyes =
    mood === 'sleep' ? (
      <g stroke="#3b2f25" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d={`M${cx - dx - 6} ${eyeY} q6 5 12 0`} />
        <path d={`M${cx + dx - 6} ${eyeY} q6 5 12 0`} />
      </g>
    ) : (
      <g fill="#3b2f25">
        <circle cx={cx - dx} cy={eyeY} r={mood === 'happy' ? 3 : 3.6} />
        <circle cx={cx + dx} cy={eyeY} r={mood === 'happy' ? 3 : 3.6} />
      </g>
    );
  const mouth = {
    idle: `M${cx - 6} ${cy + r * 0.38} q6 5 12 0`,
    happy: `M${cx - 9} ${cy + r * 0.32} q9 12 18 0`,
    thinking: `M${cx - 5} ${cy + r * 0.42} h10`,
    encourage: `M${cx - 7} ${cy + r * 0.44} q7 -5 14 0`,
    sleep: `M${cx - 4} ${cy + r * 0.42} q4 3 8 0`,
  }[mood];
  return (
    <g>
      {}
      <g fill="none" stroke="#5a4636" strokeWidth="2.2">
        <circle cx={cx - dx} cy={eyeY} r={r * 0.27} fill="#ffffff55" />
        <circle cx={cx + dx} cy={eyeY} r={r * 0.27} fill="#ffffff55" />
        <path d={`M${cx - dx + r * 0.27} ${eyeY} h${2 * dx - r * 0.54}`} />
      </g>
      {eyes}
      <circle cx={cx - r * 0.62} cy={cy + r * 0.3} r={r * 0.12} fill="#f4a7a7" opacity=".8" />
      <circle cx={cx + r * 0.62} cy={cy + r * 0.3} r={r * 0.12} fill="#f4a7a7" opacity=".8" />
      <path d={mouth} stroke="#3b2f25" strokeWidth="2.4" fill={mood === 'happy' ? '#e0736b' : 'none'} strokeLinecap="round" />
      {mood === 'sleep' && <text x={cx + r} y={cy - r * 0.9} fontSize="16" fill="#8a7a69" fontWeight="800">z</text>}
      {mood === 'thinking' && <text x={cx + r * 0.9} y={cy - r * 0.8} fontSize="18" fill="#8a7a69" fontWeight="800">?</text>}
    </g>
  );
}

function Caterpillar({ mood }: { mood: MascotMood }) {
  return (
    <svg viewBox="0 0 120 120">
      <ellipse cx="60" cy="104" rx="44" ry="5" fill="#00000012" />
      {[22, 38, 54].map((x, i) => (
        <circle key={x} cx={x} cy={88 - i * 2} r={13 - i * 0.5} fill={i % 2 ? '#a6d17f' : '#8cc265'} stroke="#5f8f45" strokeWidth="2" />
      ))}
      {}
      <rect x="42" y="62" width="20" height="20" rx="5" fill="#d9534f" stroke="#a63b37" strokeWidth="2" />
      <circle cx="80" cy="62" r="25" fill="#a6d17f" stroke="#5f8f45" strokeWidth="2.2" />
      <path d="M70 39 q-6 -14 -12 -16 M90 39 q6 -14 12 -16" stroke="#5f8f45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="57" cy="22" r="4" fill="#f2c14e" />
      <circle cx="103" cy="22" r="4" fill="#f2c14e" />
      <Face mood={mood} cx={80} cy={62} r={25} />
    </svg>
  );
}

function Chrysalis({ mood }: { mood: MascotMood }) {
  return (
    <svg viewBox="0 0 120 120">
      <path d="M18 14 L104 18" stroke="#8b5e3c" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 17 v8" stroke="#6b8f4e" strokeWidth="3" />
      {mood === 'happy' && <ellipse cx="60" cy="68" rx="40" ry="48" fill="#f2c14e44" />}
      <path d="M60 24 C88 30 92 80 60 110 C28 80 32 30 60 24 Z" fill="#9cc96f" stroke="#5f8f45" strokeWidth="2.2" />
      <path d="M45 50 q15 6 30 0 M43 72 q17 6 34 0 M48 92 q12 5 24 0" stroke="#7aa955" strokeWidth="2" fill="none" />
      <Face mood={mood} cx={60} cy={58} r={17} />
      <rect x="47" y="76" width="26" height="16" rx="2" fill="#4f7d8c" stroke="#2f5562" strokeWidth="1.5" />
      <path d="M60 76 v16" stroke="#e9f1f3" strokeWidth="1.5" />
    </svg>
  );
}

function Butterfly({ mood }: { mood: MascotMood }) {
  return (
    <svg viewBox="0 0 120 120" className={mood === 'happy' || mood === 'encourage' ? 'flap' : ''}>
      <g className="wings">
        <path d="M58 58 C30 10 4 30 16 56 C24 72 44 70 58 62 Z" fill="#b9a3e3" stroke="#6b5a9a" strokeWidth="2" />
        <path d="M62 58 C90 10 116 30 104 56 C96 72 76 70 62 62 Z" fill="#9fd3e8" stroke="#4f7d8c" strokeWidth="2" />
        <path d="M58 64 C36 70 26 96 44 100 C56 102 60 84 58 64 Z" fill="#f6c27a" stroke="#c48a3a" strokeWidth="2" />
        <path d="M62 64 C84 70 94 96 76 100 C64 102 60 84 62 64 Z" fill="#f4a7a7" stroke="#c46b6b" strokeWidth="2" />
        <circle cx="30" cy="46" r="6" fill="#ffffffaa" /><circle cx="90" cy="46" r="6" fill="#ffffffaa" />
      </g>
      <rect x="54" y="52" width="12" height="46" rx="6" fill="#f2d16b" stroke="#b8963a" strokeWidth="2" />
      <circle cx="60" cy="46" r="15" fill="#f2d16b" stroke="#b8963a" strokeWidth="2" />
      <path d="M54 33 q-4 -12 -10 -14 M66 33 q4 -12 10 -14" stroke="#5a4636" strokeWidth="2" fill="none" />
      <Face mood={mood} cx={60} cy={46} r={15} />
    </svg>
  );
}
