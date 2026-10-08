let ctx: AudioContext | undefined;
let enabled = true;

export const setSoundsEnabled = (on: boolean) => {
  enabled = on;
};

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', gain = 0.12) {
  ctx ??= new AudioContext();
  if (ctx.state === 'suspended') void ctx.resume();
  const t = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  osc.connect(g).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur);
}

export function sfx(kind: 'correct' | 'wrong' | 'tap' | 'complete') {
  if (!enabled) return;
  try {
    if (kind === 'correct') { tone(660, 0, 0.12); tone(990, 0.08, 0.18); }
    else if (kind === 'wrong') { tone(220, 0, 0.18, 'triangle', 0.1); }
    else if (kind === 'tap') { tone(880, 0, 0.05, 'sine', 0.05); }
    else { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.25)); }
  } catch {
  }
}
