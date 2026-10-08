import { describe, expect, it } from 'vitest';
import { digitalTime, koreanTime, sino } from './clock';

describe('clock', () => {
  it('builds sino-Korean numbers', () => {
    expect([5, 10, 15, 20, 45, 59].map(sino)).toEqual(['오', '십', '십오', '이십', '사십오', '오십구']);
  });

  it('reads the time with native hours and sino minutes', () => {
    expect(koreanTime(1, 0)).toBe('한 시');
    expect(koreanTime(3, 10)).toBe('세 시 십 분');
    expect(koreanTime(4, 5)).toBe('네 시 오 분');
    expect(koreanTime(7, 30)).toBe('일곱 시 반');
    expect(koreanTime(7, 30, { half: false })).toBe('일곱 시 삼십 분');
    expect(koreanTime(11, 45)).toBe('열한 시 사십오 분');
    expect(koreanTime(12, 0)).toBe('열두 시');
    expect(koreanTime(0, 20)).toBe('열두 시 이십 분');
  });

  it('formats a 12-hour dial time', () => {
    expect(digitalTime(3, 5)).toBe('3:05');
    expect(digitalTime(12, 0)).toBe('12:00');
    expect(digitalTime(0, 30)).toBe('12:30');
  });
});
