import { soundOf } from './hangul';

let rate = 0.85;
let preferredURI: string | undefined;

const synth = () => (typeof window !== 'undefined' ? window.speechSynthesis : undefined);

export const speechSupported = () => !!synth();

export function koreanVoices(): SpeechSynthesisVoice[] {
  return (synth()?.getVoices() ?? []).filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith('ko'));
}

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = koreanVoices();
  return (
    voices.find((v) => v.voiceURI === preferredURI) ??
    voices.find((v) => /premium|enhanced|améliorée/i.test(v.name)) ??
    voices.find((v) => v.localService) ??
    voices[0]
  );
}

export function configureSpeech(opts: { rate?: number; voiceURI?: string }) {
  if (opts.rate) rate = opts.rate;
  preferredURI = opts.voiceURI;
}

export function voicesReady(): Promise<SpeechSynthesisVoice[]> {
  const s = synth();
  if (!s) return Promise.resolve([]);
  if (s.getVoices().length) return Promise.resolve(koreanVoices());
  return new Promise((resolve) => {
    const done = () => resolve(koreanVoices());
    s.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, 1500);
  });
}

export function speak(text: string, opts: { rate?: number; onEnd?: () => void } = {}) {
  const s = synth();
  if (!s || !text) return;
  s.cancel(); 
  const u = new SpeechSynthesisUtterance(soundOf(text));
  u.lang = 'ko-KR';
  const voice = pickVoice();
  if (voice) u.voice = voice;
  u.rate = opts.rate ?? rate;
  if (opts.onEnd) u.onend = u.onerror = () => opts.onEnd?.();
  s.speak(u);
}
