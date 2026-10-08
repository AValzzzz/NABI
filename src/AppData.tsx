import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import * as store from './lib/db';
import type { Card } from './lib/srs';
import { lessonStates, todaysLesson, type LessonProgress, type LessonState } from './lib/unlock';
import { today } from './lib/dates';
import { isDebug } from './lib/debug';
import { LESSONS } from './content/curriculum';
import { configureSpeech } from './lib/speech';
import { setSoundsEnabled } from './lib/sfx';
import type { Lesson } from './content/types';

interface AppData {
  ready: boolean;
  day: string;
  settings: store.Settings;
  cards: Card[];
  dueCount: number;
  progress: Record<string, LessonProgress>;
  states: LessonState[];
  today: { index: number; lesson?: Lesson; state?: LessonState };
  studyDays: string[];
  debug: boolean;
  month: number;
  refresh: () => Promise<void>;
  updateSettings: (patch: Partial<store.Settings>) => Promise<void>;
}

const Ctx = createContext<AppData | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [day, setDay] = useState(today);
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(store.DEFAULT_SETTINGS);
  const [cards, setCards] = useState<Card[]>([]);
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({});
  const [studyDays, setStudyDays] = useState<string[]>([]);
  const [debug, setDebugState] = useState(isDebug);

  const refresh = useCallback(async () => {
    const [s, c, p, sd] = await Promise.all([store.getSettings(), store.allCards(), store.lessonProgress(), store.getStudyDays()]);
    setSettings(s);
    configureSpeech(s);
    setSoundsEnabled(s.sounds);
    setCards(c);
    setProgress(p);
    setStudyDays(sd);
    setDebugState(isDebug());
    setDay(today());
    setReady(true);
  }, []);

  useEffect(() => {
    void refresh();
    void store.requestPersistence();
    const onVisible = () => document.visibilityState === 'visible' && today() !== day && void refresh();
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [refresh, day]);

  const updateSettings = useCallback(
    async (patch: Partial<store.Settings>) => {
      const next = { ...settings, ...patch };
      setSettings(next);
      configureSpeech(next);
      setSoundsEnabled(next.sounds);
      await store.saveSettings(next);
    },
    [settings],
  );

  const value = useMemo<AppData>(() => {
    const t = todaysLesson(LESSONS, progress, day, debug);
    const last = [...LESSONS].reverse().find((l) => progress[l.id]);
    return {
      ready,
      day,
      settings,
      cards,
      dueCount: cards.filter((c) => c.due <= day).length,
      progress,
      states: lessonStates(LESSONS, progress, day, debug),
      today: t,
      studyDays,
      debug,
      month: t.lesson?.month ?? last?.month ?? 1,
      refresh,
      updateSettings,
    };
  }, [ready, day, settings, cards, progress, studyDays, debug, refresh, updateSettings]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp outside provider');
  return v;
}
