const HOURS = ['열두', '한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열', '열한'];
const DIGITS = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];

export function sino(n: number): string {
  const tens = Math.floor(n / 10);
  const units = n % 10;
  return (tens > 1 ? DIGITS[tens] : '') + (tens ? '십' : '') + DIGITS[units];
}

export const hourWord = (h: number) => HOURS[((h % 12) + 12) % 12];
export function koreanTime(h: number, m: number, { half = true } = {}): string {
  const hour = `${hourWord(h)} 시`;
  if (!m) return hour;
  if (m === 30 && half) return `${hour} 반`;
  return `${hour} ${sino(m)} 분`;
}

export const digitalTime = (h: number, m: number) => `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')}`;
