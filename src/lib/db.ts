import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import type { Card, Grade } from './srs';
import type { LessonProgress } from './unlock';

export interface Settings {
  voiceURI?: string;
  rate: number; 
  sounds: boolean;
}

export const DEFAULT_SETTINGS: Settings = { rate: 0.85, sounds: true };

export interface SessionState {
  day: string;
  phase: 'review' | 'lesson' | 'interleave' | 'done';
  lessonId?: string;
  step?: number;
}

export interface ReviewLog {
  id?: number;
  day: string;
  cardId: string;
  grade: Grade;
}

interface Meta {
  settings: Settings;
  session: SessionState;
  studyDays: string[];
}

interface NabiDB extends DBSchema {
  cards: { key: string; value: Card; indexes: { due: string; lessonId: string } };
  lessons: { key: string; value: LessonProgress };
  meta: { key: keyof Meta; value: Meta[keyof Meta] };
  log: { key: number; value: ReviewLog; indexes: { day: string } };
}

const STORES = ['cards', 'lessons', 'meta', 'log'] as const;
let dbp: Promise<IDBPDatabase<NabiDB>> | undefined;

export function db() {
  dbp ??= openDB<NabiDB>('nabi', 1, {
    upgrade(d) {
      const cards = d.createObjectStore('cards', { keyPath: 'id' });
      cards.createIndex('due', 'due');
      cards.createIndex('lessonId', 'lessonId');
      d.createObjectStore('lessons', { keyPath: 'id' });
      d.createObjectStore('meta');
      d.createObjectStore('log', { keyPath: 'id', autoIncrement: true }).createIndex('day', 'day');
    },
  });
  return dbp;
}

export async function requestPersistence() {
  try {
    if (navigator.storage?.persist && !(await navigator.storage.persisted())) await navigator.storage.persist();
  } catch {
  }
}

async function getMeta<K extends keyof Meta>(key: K): Promise<Meta[K] | undefined> {
  return (await (await db()).get('meta', key)) as Meta[K] | undefined;
}
async function setMeta<K extends keyof Meta>(key: K, value: Meta[K]) {
  await (await db()).put('meta', value, key);
}

export const getSettings = async () => ({ ...DEFAULT_SETTINGS, ...(await getMeta('settings')) });
export const saveSettings = (s: Settings) => setMeta('settings', s);
export const getSession = () => getMeta('session');
export const saveSession = (s: SessionState) => setMeta('session', s);
export const getStudyDays = async () => (await getMeta('studyDays')) ?? [];

export async function markStudyDay(day: string) {
  const days = await getStudyDays();
  if (!days.includes(day)) await setMeta('studyDays', [...days, day]);
}

export async function allCards() {
  return (await db()).getAll('cards');
}
export async function dueCards(day: string) {
  return (await db()).getAll('cards', IDBKeyRange.upperBound(day));
}
export async function putCards(cards: Card[]) {
  const tx = (await db()).transaction('cards', 'readwrite');
  await Promise.all([...cards.map((c) => tx.store.put(c)), tx.done]);
}

export async function saveReview(card: Card, grade: Grade, day: string) {
  const tx = (await db()).transaction(['cards', 'log'], 'readwrite');
  await Promise.all([
    tx.objectStore('cards').put(card),
    tx.objectStore('log').add({ day, cardId: card.id, grade }),
    tx.done,
  ]);
}

export async function allLogs() {
  return (await db()).getAll('log');
}

export async function lessonProgress(): Promise<Record<string, LessonProgress>> {
  const rows = await (await db()).getAll('lessons');
  return Object.fromEntries(rows.map((r) => [r.id, r]));
}

export async function completeLesson(progress: LessonProgress, newCards: Card[]) {
  const d = await db();
  const tx = d.transaction(['lessons', 'cards'], 'readwrite');
  const cards = tx.objectStore('cards');
  for (const c of newCards) if (!(await cards.get(c.id))) await cards.put(c);
  await tx.objectStore('lessons').put(progress);
  await tx.done;
}

export async function makeAllDue(day: string) {
  const tx = (await db()).transaction('cards', 'readwrite');
  for (const c of await tx.store.getAll()) await tx.store.put({ ...c, due: day });
  await tx.done;
}

export interface Backup {
  app: 'nabi';
  version: 1;
  exportedAt: string;
  data: Record<(typeof STORES)[number], unknown[]> & { metaKeys: string[] };
}

export async function exportBackup(): Promise<Backup> {
  const d = await db();
  return {
    app: 'nabi',
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      cards: await d.getAll('cards'),
      lessons: await d.getAll('lessons'),
      meta: await d.getAll('meta'),
      metaKeys: (await d.getAllKeys('meta')) as string[],
      log: await d.getAll('log'),
    },
  };
}

export async function importBackup(backup: Backup) {
  if (backup?.app !== 'nabi' || backup.version !== 1) throw new Error('Fichier de sauvegarde invalide.');
  const d = await db();
  const tx = d.transaction(STORES, 'readwrite');
  for (const s of STORES) await tx.objectStore(s).clear();
  for (const c of backup.data.cards as Card[]) await tx.objectStore('cards').put(c);
  for (const l of backup.data.lessons as LessonProgress[]) await tx.objectStore('lessons').put(l);
  for (const l of backup.data.log as ReviewLog[]) await tx.objectStore('log').put(l);
  backup.data.metaKeys.forEach((k, i) => tx.objectStore('meta').put(backup.data.meta[i] as never, k as keyof Meta));
  await tx.done;
}

export async function resetAll() {
  const d = await db();
  const tx = d.transaction(STORES, 'readwrite');
  for (const s of STORES) await tx.objectStore(s).clear();
  await tx.done;
}
