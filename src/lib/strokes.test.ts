import { describe, expect, it } from 'vitest';
import { strokesFor } from './strokes';

describe('strokesFor', () => {
  it('follows the standard stroke counts', () => {
    const counts: Record<string, number> = { ㄱ: 1, ㄴ: 1, ㄷ: 2, ㄹ: 3, ㅁ: 3, ㅂ: 4, ㅅ: 2, ㅇ: 1, ㅈ: 2, ㅊ: 3, ㅋ: 2, ㅌ: 3, ㅍ: 4, ㅎ: 3, ㄲ: 2, ㅆ: 4, ㅏ: 2, ㅡ: 1, ㅕ: 3, ㅘ: 4, ㅢ: 2 };
    for (const [c, n] of Object.entries(counts)) expect(strokesFor(c)?.length, c).toBe(n);
  });

  it('composes simple syllables, consonant first', () => {
    expect(strokesFor('가')?.length).toBe(1 + 2);
    expect(strokesFor('물')?.length).toBe(3 + 2 + 3);
    expect(strokesFor('화')?.length).toBe(3 + 4);
    expect(strokesFor('꽃')?.length).toBe(2 + 2 + 3);
    for (let c = 0xac00; c <= 0xd7a3; c += 7) expect(strokesFor(String.fromCharCode(c)), String.fromCharCode(c)).not.toBeNull();
    const mo = strokesFor('모')!;
    expect(Math.max(...mo[0].map((p) => p[1]))).toBeLessThan(Math.max(...mo[mo.length - 1].map((p) => p[1])));
  });

  it('returns null for unsupported characters', () => {
    expect(strokesFor('!')).toBeNull();
    expect(strokesFor('a')).toBeNull();
  });
});
