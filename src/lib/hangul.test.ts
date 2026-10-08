import { describe, expect, it } from 'vitest';
import { appendJamo, backspace, compose, decompose, soundOf, typeJamos } from './hangul';

const t = (s: string) => typeJamos(s.split(''));

describe('hangul composition', () => {
  it('composes and decomposes syllables', () => {
    expect(compose({ initial: 'ㅎ', medial: 'ㅏ', final: 'ㄴ' })).toBe('한');
    expect(decompose('글')).toEqual({ initial: 'ㄱ', medial: 'ㅡ', final: 'ㄹ' });
  });

  it('types full words like an IME', () => {
    expect(t('ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ')).toBe('안녕하세요');
    expect(t('ㄱㅏㅁㅅㅏㅎㅏㅂㄴㅣㄷㅏ')).toBe('감사합니다');
    expect(t('ㅎㅘㅈㅏㅇㅅㅣㄹ')).toBe('화장실');
  });

  it('builds compound vowels and finals', () => {
    expect(t('ㄱㅗㅏ')).toBe('과');
    expect(t('ㅇㅡㅣ')).toBe('의');
    expect(t('ㄱㅏㅂㅅ')).toBe('값');
    expect(t('ㄱㅏㅂㅅㅣ')).toBe('갑시');
    expect(t('ㅇㅣㄹㄱㅓ')).toBe('일거');
  });

  it('moves a final consonant to the next syllable before a vowel', () => {
    expect(t('ㄱㅏㄴㅏ')).toBe('가나');
  });

  it('does not take ㄸ ㅃ ㅉ as finals', () => {
    expect(t('ㄱㅏㄸㅏ')).toBe('가따');
  });

  it('backspace removes one jamo at a time', () => {
    expect(backspace('값')).toBe('갑');
    expect(backspace('갑')).toBe('가');
    expect(backspace('과')).toBe('고');
    expect(backspace('고')).toBe('ㄱ');
    expect(backspace('ㄱ')).toBe('');
  });

  it('does not merge across a space', () => {
    expect(appendJamo('가 ', 'ㅏ')).toBe('가 ㅏ');
  });
});

describe('soundOf', () => {
  it('reads isolated jamo by their sound', () => {
    expect(soundOf('ㄴ')).toBe('나');
    expect(soundOf('ㅇ')).toBe('아');
    expect(soundOf('ㅓ')).toBe('어');
    expect(soundOf('책')).toBe('책');
    expect(soundOf('안녕하세요')).toBe('안녕하세요');
  });
});
