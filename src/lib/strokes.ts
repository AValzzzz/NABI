import { decompose } from './hangul';

export type Pt = [number, number];
export type Stroke = Pt[];

function circle(cx: number, cy: number, r: number): Stroke {
  return Array.from({ length: 33 }, (_, i) => {
    const a = -Math.PI / 2 - (i / 32) * Math.PI * 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as Pt;
  });
}

const JAMO: Record<string, Stroke[]> = {
  ㄱ: [[[18, 20], [80, 20], [78, 55], [68, 86]]],
  ㄴ: [[[24, 14], [24, 80], [86, 80]]],
  ㄷ: [[[20, 20], [80, 20]], [[22, 20], [22, 80], [84, 80]]],
  ㄹ: [[[20, 15], [78, 15], [78, 48]], [[22, 48], [78, 48]], [[22, 48], [22, 84], [82, 84]]],
  ㅁ: [[[22, 18], [22, 82]], [[22, 18], [78, 18], [78, 82]], [[22, 82], [78, 82]]],
  ㅂ: [[[25, 15], [25, 85]], [[75, 15], [75, 85]], [[25, 50], [75, 50]], [[25, 85], [75, 85]]],
  ㅅ: [[[50, 15], [16, 84]], [[38, 39], [84, 84]]],
  ㅇ: [circle(50, 50, 32)],
  ㅈ: [[[18, 20], [72, 20], [22, 84]], [[50, 49], [84, 84]]],
  ㅊ: [[[50, 6], [50, 18]], [[18, 30], [72, 30], [22, 88]], [[50, 58], [84, 88]]],
  ㅏ: [[[40, 10], [40, 90]], [[40, 50], [70, 50]]],
  ㅓ: [[[30, 50], [60, 50]], [[60, 10], [60, 90]]],
  ㅗ: [[[50, 30], [50, 62]], [[12, 62], [88, 62]]],
  ㅜ: [[[12, 38], [88, 38]], [[50, 38], [50, 72]]],
  ㅡ: [[[12, 50], [88, 50]]],
  ㅣ: [[[50, 10], [50, 90]]],
  ㅐ: [[[32, 10], [32, 90]], [[32, 50], [56, 50]], [[66, 10], [66, 90]]],
  ㅋ: [[[18, 18], [80, 18], [78, 55], [68, 86]], [[22, 50], [78, 50]]],
  ㅌ: [[[20, 16], [80, 16]], [[22, 48], [78, 48]], [[22, 16], [22, 82], [84, 82]]],
  ㅍ: [[[16, 18], [84, 18]], [[36, 18], [32, 82]], [[64, 18], [68, 82]], [[12, 82], [88, 82]]],
  ㅎ: [[[50, 4], [50, 16]], [[22, 28], [78, 28]], circle(50, 64, 22)],
  ㅑ: [[[40, 10], [40, 90]], [[40, 36], [70, 36]], [[40, 64], [70, 64]]],
  ㅕ: [[[30, 36], [60, 36]], [[30, 64], [60, 64]], [[60, 10], [60, 90]]],
  ㅛ: [[[36, 32], [36, 62]], [[64, 32], [64, 62]], [[12, 62], [88, 62]]],
  ㅠ: [[[12, 38], [88, 38]], [[36, 38], [36, 72]], [[64, 38], [64, 72]]],
  ㅔ: [[[22, 50], [48, 50]], [[48, 10], [48, 90]], [[70, 10], [70, 90]]],
  ㅒ: [[[32, 10], [32, 90]], [[32, 36], [56, 36]], [[32, 64], [56, 64]], [[66, 10], [66, 90]]],
  ㅖ: [[[18, 36], [44, 36]], [[18, 64], [44, 64]], [[46, 10], [46, 90]], [[70, 10], [70, 90]]],
};

type Rect = [number, number, number, number]; 

const place = (strokes: Stroke[], [x, y, w, h]: Rect): Stroke[] =>
  strokes.map((s) => s.map(([px, py]) => [x + (px / 100) * w, y + (py / 100) * h] as Pt));

for (const pair of ['ㄲㄱㄱ', 'ㄸㄷㄷ', 'ㅃㅂㅂ', 'ㅆㅅㅅ', 'ㅉㅈㅈ', 'ㄳㄱㅅ', 'ㄵㄴㅈ', 'ㄶㄴㅎ', 'ㄺㄹㄱ', 'ㄻㄹㅁ', 'ㄼㄹㅂ', 'ㄽㄹㅅ', 'ㄾㄹㅌ', 'ㄿㄹㅍ', 'ㅀㄹㅎ', 'ㅄㅂㅅ']) {
  const [jamo, left, right] = pair;
  JAMO[jamo] = [...place(JAMO[left], [0, 8, 52, 84]), ...place(JAMO[right], [48, 8, 52, 84])];
}

const COMPOUND: Record<string, [string, string]> = {
  ㅘ: ['ㅗ', 'ㅏ'], ㅙ: ['ㅗ', 'ㅐ'], ㅚ: ['ㅗ', 'ㅣ'], ㅝ: ['ㅜ', 'ㅓ'], ㅞ: ['ㅜ', 'ㅔ'], ㅟ: ['ㅜ', 'ㅣ'], ㅢ: ['ㅡ', 'ㅣ'],
};
const compound = (v: string, lying: Rect, standing: Rect) => [...place(JAMO[COMPOUND[v][0]], lying), ...place(JAMO[COMPOUND[v][1]], standing)];
for (const v of Object.keys(COMPOUND)) JAMO[v] = compound(v, [0, 0, 62, 100], [48, 0, 52, 100]);

const VERTICAL = new Set('ㅏㅓㅣㅐㅔㅑㅕㅒㅖ');
const HORIZONTAL = new Set('ㅗㅜㅡㅛㅠ');

function layout(vertical: boolean, hasFinal: boolean): [Rect, Rect, Rect?] {
  if (vertical) {
    return hasFinal
      ? [[4, 4, 52, 52], [50, 0, 46, 62], [20, 58, 60, 40]]
      : [[4, 10, 52, 80], [50, 4, 46, 92]];
  }
  return hasFinal
    ? [[20, 0, 60, 38], [4, 28, 92, 38], [20, 62, 60, 36]]
    : [[18, 2, 64, 52], [4, 44, 92, 52]];
}

export function strokesFor(char: string): Stroke[] | null {
  if (JAMO[char]) return JAMO[char];
  const parts = decompose(char);
  if (!parts) return null;
  const { initial, medial, final } = parts;
  if (!JAMO[initial] || !JAMO[medial] || (final && !JAMO[final])) return null;
  if (COMPOUND[medial]) {
    const [ri, rl, rs, rf]: Rect[] = final
      ? [[6, 2, 48, 34], [2, 24, 58, 34], [52, 0, 46, 64], [18, 62, 56, 36]]
      : [[6, 2, 50, 44], [2, 34, 60, 46], [52, 0, 46, 100]];
    return [...place(JAMO[initial], ri), ...compound(medial, rl, rs), ...(final ? place(JAMO[final], rf) : [])];
  }
  const vertical = VERTICAL.has(medial);
  if (!vertical && !HORIZONTAL.has(medial)) return null;
  const [ri, rm, rf] = layout(vertical, !!final);
  return [...place(JAMO[initial], ri), ...place(JAMO[medial], rm), ...(final && rf ? place(JAMO[final], rf) : [])];
}

export const strokeLength = (s: Stroke) =>
  s.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - s[i - 1][0], p[1] - s[i - 1][1]) : 0), 0);
