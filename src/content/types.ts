export type CardKind = 'hangul' | 'vocab' | 'phrase' | 'particle' | 'grammar';

export interface CardSeed {
  id: string; 
  kind: CardKind;
  ko: string;
  fr: string;
  note?: string; 
  roman?: string;
  speak?: string; 
}

export type Role = 'topic' | 'subject' | 'object' | 'verb' | 'place' | 'time' | 'adverb' | 'other';

export type MascotMood = 'idle' | 'happy' | 'thinking' | 'encourage' | 'sleep';

export type Block =
  | { type: 'title'; text: string }
  | { type: 'text'; text: string }
  | { type: 'tip'; text: string; mood?: MascotMood }
  | { type: 'letters'; items: { char: string; roman?: string; mnemonic?: string; speak?: string }[] }
  | { type: 'breakdown'; segments: { ko: string; role: Role; gloss: string; particle?: { ko: string; key: string } }[]; translation: string; note?: string }
  | { type: 'dialog'; lines: { who: string; ko: string; fr?: string }[] }
  | { type: 'compose'; items: { parts: string[]; result: string; roman?: string }[] }
  | { type: 'strokes'; chars: string[] }
  | { type: 'liaison'; items: { written: string; spoken: string; fr?: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'clock'; h?: number; m?: number; interactive?: boolean }
  | { type: 'timeline'; points: { label: string; ko: string; fr?: string }[]; start?: number };

export type Exercise =
  | { type: 'mcq'; prompt: string; audio?: string; choices: string[]; answer: number; explain?: string }
  | { type: 'cloze'; prompt?: string; before: string; after: string; choices: string[]; answer: number; translation?: string; explain?: string }
  | { type: 'order'; prompt?: string; translation: string; tiles: string[]; distractors?: string[]; explain?: string }
  | { type: 'listen'; audio: string; choices: string[]; answer: number; explain?: string }
  | { type: 'type'; prompt: string; answer: string | string[]; audio?: string; explain?: string }
  | { type: 'trace'; char: string; roman?: string; prompt?: string }
  | { type: 'read'; ko: string; fr?: string; prompt?: string }
  | { type: 'write'; prompt: string; placeholder?: string; mustInclude?: string[]; explain?: string }
  | { type: 'match'; prompt?: string; pairs: [string, string][] }
  | { type: 'clock'; prompt?: string; audio?: string; h: number; m: number; explain?: string }
  | { type: 'sort'; prompt: string; buckets: [string, string]; items: { text: string; bucket: 0 | 1 }[]; explain?: string }
  | { type: 'grid'; prompt?: string; head: string[]; rows: (string | GridBlank)[][]; explain?: string };

export interface GridBlank {
  answer: string | string[];
}

export type Step = { kind: 'learn'; blocks: Block[] } | { kind: 'practice'; exercise: Exercise };

export interface Lesson {
  id: string; 
  month: number;
  week: number; 
  day: number; 
  title: string;
  summary?: string;
  cards: CardSeed[]; 
  steps: Step[]; 
  interleave?: Exercise[]; 
}

export interface MonthInfo {
  month: number;
  title: string;
  goal: string;
}

export interface GlossaryEntry {
  title: string;
  forms?: string;
  body: string; 
  examples?: { ko: string; fr: string }[];
}
