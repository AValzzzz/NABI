const KEY = 'nabi-debug';
const OFFSET_KEY = 'nabi-debug-offset';

const read = (k: string) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const write = (k: string, v: string | null) => {
  try {
    if (v === null) localStorage.removeItem(k);
    else localStorage.setItem(k, v);
  } catch {
  }
};

export const isDebug = () => read(KEY) === '1';

export function setDebug(on: boolean) {
  write(KEY, on ? '1' : null);
  if (!on) write(OFFSET_KEY, null);
}

export const dayOffset = () => (isDebug() ? Number(read(OFFSET_KEY)) || 0 : 0);
export const setDayOffset = (n: number) => write(OFFSET_KEY, n ? String(n) : null);
