import { useEffect, useState } from 'react';
import type { MascotMood } from '../content/types';

export type Stage = 'caterpillar' | 'chrysalis' | 'butterfly';

export function stageForMonth(month: number): Stage {
  return month <= 2 ? 'caterpillar' : month <= 4 ? 'chrysalis' : 'butterfly';
}

const SPRITES = import.meta.glob('../assets/sprites/mascot/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const sprite = (name: string) => SPRITES[`../assets/sprites/mascot/${name}.webp`];

type Pose = { pick: string[] } | { frames: string[]; ms: number };

const POSES: Record<Stage, Record<MascotMood, Pose>> = {
  caterpillar: {
    idle: { pick: ['idle-1', 'idle-2'] },
    happy: { pick: ['proud-1', 'proud-2', 'proud-3'] },
    thinking: { pick: ['thinking-1', 'thinking-2', 'thinking-3'] },
    encourage: { pick: ['encourage-1', 'encourage-2'] },
    sad: { pick: ['sad-1', 'sad-2'] },
    sleep: { pick: ['sleep'] },
  },
  chrysalis: {
    idle: { pick: ['read-1', 'read-2'] },
    happy: { pick: ['read-2'] },
    thinking: { pick: ['read-1'] },
    encourage: { pick: ['evolve-1'] },
    sad: { pick: ['read-1'] },
    sleep: { pick: ['read-1'] },
  },
  butterfly: {
    idle: { pick: ['idle'] },
    happy: { pick: ['celebrate'] },
    thinking: { pick: ['idle'] },
    encourage: { frames: ['fly-1', 'fly-2'], ms: 260 },
    sad: { pick: ['idle'] },
    sleep: { pick: ['idle'] },
  },
};

interface Props {
  stage?: Stage;
  mood?: MascotMood;
  size?: number;
  className?: string;
}

export function Mascot({ stage = 'caterpillar', mood = 'idle', size = 120, className = '' }: Props) {
  const pose = POSES[stage][mood];
  const names = 'pick' in pose ? pose.pick : pose.frames;
  const [seed] = useState(() => Math.random());
  const frame = useFrame('frames' in pose ? pose.frames.length : 1, 'frames' in pose ? pose.ms : 0);
  const name = 'pick' in pose ? names[Math.floor(seed * names.length)] : names[frame];
  return (
    <img
      className={`mascot mascot-${mood} ${className}`}
      src={sprite(`${stage}-${name}`)}
      width={size}
      height={size}
      alt="Nabi"
      draggable={false}
    />
  );
}

function useFrame(count: number, ms: number) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % count), ms);
    return () => clearInterval(id);
  }, [count, ms]);
  return frame % count;
}

type Step = { name: string; white?: boolean; ms: number };

const EVOLUTIONS: Record<'chrysalis' | 'butterfly', Step[]> = {
  chrysalis: [
    { name: 'caterpillar-proud-1', ms: 900 },
    { name: 'chrysalis-evolve-1', white: true, ms: 380 },
    { name: 'caterpillar-proud-1', white: true, ms: 380 },
    { name: 'chrysalis-evolve-1', white: true, ms: 260 },
    { name: 'caterpillar-proud-1', white: true, ms: 260 },
    { name: 'chrysalis-evolve-1', white: true, ms: 160 },
    { name: 'caterpillar-proud-1', white: true, ms: 160 },
    { name: 'chrysalis-evolve-1', white: true, ms: 500 },
    { name: 'chrysalis-evolve-2', ms: 0 },
  ],
  butterfly: [
    { name: 'chrysalis-evolve-1', ms: 700 },
    { name: 'chrysalis-evolve-2', ms: 600 },
    { name: 'butterfly-idle', white: true, ms: 380 },
    { name: 'chrysalis-evolve-2', ms: 380 },
    { name: 'butterfly-idle', white: true, ms: 260 },
    { name: 'chrysalis-evolve-2', ms: 260 },
    { name: 'butterfly-idle', white: true, ms: 160 },
    { name: 'chrysalis-evolve-2', ms: 160 },
    { name: 'butterfly-idle', white: true, ms: 500 },
    { name: 'butterfly-celebrate', ms: 0 },
  ],
};

export function Evolution({ to, size = 150, onDone }: { to: 'chrysalis' | 'butterfly'; size?: number; onDone?: () => void }) {
  const steps = EVOLUTIONS[to];
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [i, setI] = useState(reduced ? steps.length - 1 : 0);

  useEffect(() => {
    for (const s of steps) new Image().src = sprite(s.name);
  }, [steps]);

  useEffect(() => {
    if (i >= steps.length - 1) {
      onDone?.();
      return;
    }
    const id = setTimeout(() => setI(i + 1), steps[i].ms);
    return () => clearTimeout(id);
  }, [i, steps, onDone]);

  const step = steps[i];
  const last = i === steps.length - 1;
  return (
    <img
      className={`mascot evolving ${step.white ? 'whiteout' : ''} ${last ? 'evolved' : ''}`}
      src={sprite(step.name)}
      width={size}
      height={size}
      alt="Nabi évolue"
      draggable={false}
    />
  );
}
