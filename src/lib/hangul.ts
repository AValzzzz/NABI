export const INITIALS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
export const MEDIALS = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
export const FINALS = ['', ...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split('')];

const SBASE = 0xac00;
const SCOUNT = 11172;

const VOWEL_PAIRS: Record<string, string> = {
  'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ',
};
const FINAL_PAIRS: Record<string, string> = {
  'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ',
  'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ',
};
const splitPair = (table: Record<string, string>, v: string): [string, string] | null => {
  const k = Object.keys(table).find((key) => table[key] === v);
  return k ? [k[0], k[1]] : null;
};

export const isVowel = (c: string) => MEDIALS.includes(c);
export const isConsonant = (c: string) => INITIALS.includes(c) || (FINALS.includes(c) && c !== '');

export function isSyllable(c: string): boolean {
  const code = c.charCodeAt(0);
  return c.length === 1 && code >= SBASE && code < SBASE + SCOUNT;
}

export interface Parts { initial: string; medial: string; final: string }

export function decompose(syllable: string): Parts | null {
  if (!isSyllable(syllable)) return null;
  const s = syllable.charCodeAt(0) - SBASE;
  return {
    initial: INITIALS[Math.floor(s / 588)],
    medial: MEDIALS[Math.floor((s % 588) / 28)],
    final: FINALS[s % 28],
  };
}

export function compose({ initial, medial, final }: Parts): string {
  const i = INITIALS.indexOf(initial);
  const m = MEDIALS.indexOf(medial);
  const f = FINALS.indexOf(final);
  if (i < 0 || m < 0 || f < 0) throw new Error(`Invalid jamo: ${initial}${medial}${final}`);
  return String.fromCharCode(SBASE + i * 588 + m * 28 + f);
}

export function appendJamo(text: string, jamo: string): string {
  const head = text.slice(0, -1);
  const last = text.slice(-1);
  const parts = decompose(last);

  if (isVowel(jamo)) {
    if (INITIALS.includes(last)) return head + compose({ initial: last, medial: jamo, final: '' });
    if (parts && !parts.final && VOWEL_PAIRS[parts.medial + jamo]) {
      return head + compose({ ...parts, medial: VOWEL_PAIRS[parts.medial + jamo] });
    }
    if (parts && parts.final) {
      const pair = splitPair(FINAL_PAIRS, parts.final);
      const [keep, move] = pair ?? ['', parts.final];
      return head + compose({ ...parts, final: keep }) + compose({ initial: move, medial: jamo, final: '' });
    }
    if (isVowel(last) && VOWEL_PAIRS[last + jamo]) return head + VOWEL_PAIRS[last + jamo];
    return text + jamo;
  }

  if (parts) {
    if (!parts.final && FINALS.includes(jamo)) return head + compose({ ...parts, final: jamo });
    if (parts.final && FINAL_PAIRS[parts.final + jamo]) {
      return head + compose({ ...parts, final: FINAL_PAIRS[parts.final + jamo] });
    }
  }
  return text + jamo;
}

export function backspace(text: string): string {
  const head = text.slice(0, -1);
  const last = text.slice(-1);
  const parts = decompose(last);
  if (!parts) {
    const pair = splitPair(VOWEL_PAIRS, last);
    return pair ? head + pair[0] : head;
  }
  if (parts.final) {
    const pair = splitPair(FINAL_PAIRS, parts.final);
    return head + compose({ ...parts, final: pair ? pair[0] : '' });
  }
  const vpair = splitPair(VOWEL_PAIRS, parts.medial);
  if (vpair) return head + compose({ ...parts, medial: vpair[0] });
  return head + parts.initial;
}

export function typeJamos(jamos: string[], start = ''): string {
  return jamos.reduce(appendJamo, start);
}

export function soundOf(s: string): string {
  if (INITIALS.includes(s)) return compose({ initial: s, medial: 'ㅏ', final: '' });
  if (isVowel(s)) return compose({ initial: 'ㅇ', medial: s, final: '' });
  return s;
}

export function normalizeKo(s: string): string {
  return s.normalize('NFC').trim().replace(/\s+/g, ' ').replace(/[.?!,]+$/, '');
}
