import { describe, expect, it } from 'vitest';
import { LESSONS } from './curriculum';
import { GLOSSARY } from './glossary';
import { strokesFor } from '../lib/strokes';
import { koreanTime } from '../lib/clock';
import type { Exercise } from './types';

const hangulWeeks = (l: (typeof LESSONS)[number]) => l.month === 1 && l.week <= 2;

const tokens = (value: unknown) => [...JSON.stringify(value).matchAll(/\[\[(.+?)\]\]/g)].map((m) => m[1]);
const attr = (token: string, key: string) => token.split('|').slice(1).find((a) => a.startsWith(`${key}:`))?.slice(key.length + 1);

const exercises = (l: (typeof LESSONS)[number]): Exercise[] => [
  ...l.steps.flatMap((s) => (s.kind === 'practice' ? [s.exercise] : [])),
  ...(l.interleave ?? []),
];

describe('curriculum', () => {
  it('has unique, ordered lessons', () => {
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(LESSONS.length);
    LESSONS.forEach((l, i) => expect(l.day).toBe(i + 1));
  });

  it('has globally unique card ids', () => {
    const ids = LESSONS.flatMap((l) => l.cards.map((c) => c.id));
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  it('keeps card answers as plain text (only `note` is rich text)', () => {
    for (const c of LESSONS.flatMap((l) => l.cards)) expect(c.fr, c.id).not.toMatch(/\[\[|\*\*/);
  });

  it('only romanizes Hangul showcase content, during the Hangul weeks', () => {
    for (const l of LESSONS) {
      const romanized = tokens(l).filter((t) => attr(t, 'r'));
      if (!hangulWeeks(l)) expect(romanized, l.id).toEqual([]);
      for (const c of l.cards) {
        if (c.kind !== 'hangul') {
          expect(c.roman, c.id).toBeUndefined();
          expect(tokens(c.note ?? '').filter((t) => attr(t, 'r')), c.id).toEqual([]);
        }
      }
    }
  });

  it('links every particle token to a glossary entry', () => {
    for (const l of LESSONS) {
      const keys = [
        ...tokens(l).map((t) => attr(t, 'p')).filter(Boolean),
        ...l.steps.flatMap((s) => (s.kind === 'learn' ? s.blocks : [])).flatMap((b) =>
          b.type === 'breakdown' ? b.segments.flatMap((seg) => (seg.particle ? [seg.particle.key] : [])) : []),
      ];
      for (const k of keys) expect(GLOSSARY[k!], `${l.id}: ${k}`).toBeDefined();
    }
  });

  it('has well-formed exercises', () => {
    for (const l of LESSONS) {
      for (const ex of exercises(l)) {
        const where = `${l.id} ${JSON.stringify(ex).slice(0, 80)}`;
        if (ex.type === 'mcq' || ex.type === 'cloze' || ex.type === 'listen') {
          expect(ex.answer, where).toBeLessThan(ex.choices.length);
          expect(new Set(ex.choices).size, where).toBe(ex.choices.length);
        }
        if (ex.type === 'listen') expect(ex.choices[ex.answer], where).toBe(ex.audio);
        if (ex.type === 'match') {
          expect(new Set(ex.pairs.map((p) => p[0])).size, where).toBe(ex.pairs.length);
          expect(new Set(ex.pairs.map((p) => p[1])).size, where).toBe(ex.pairs.length);
        }
        if (ex.type === 'sort') expect(new Set(ex.items.map((i) => i.text)).size, where).toBe(ex.items.length);
        if (ex.type === 'grid') {
          ex.rows.forEach((r) => expect(r.length, where).toBe(ex.head.length));
          expect(ex.rows.flat().some((c) => typeof c !== 'string'), where).toBe(true);
        }
        if (ex.type === 'trace') expect(strokesFor(ex.char), where).not.toBeNull();
        if (ex.type === 'clock') {
          expect(ex.h >= 1 && ex.h <= 12 && ex.m % 5 === 0 && ex.m < 60, where).toBe(true);
          expect(ex.h === 12 && ex.m === 0, where).toBe(false);
          if (ex.audio) expect([koreanTime(ex.h, ex.m), koreanTime(ex.h, ex.m, { half: false })], where).toContain(ex.audio);
        }
      }
      for (const s of l.steps) {
        if (s.kind === 'learn') {
          for (const b of s.blocks) if (b.type === 'strokes') b.chars.forEach((c) => expect(strokesFor(c), `${l.id} ${c}`).not.toBeNull());
        }
      }
    }
  });
});
