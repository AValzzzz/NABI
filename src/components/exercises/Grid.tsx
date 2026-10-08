import { useMemo, useState } from 'react';
import type { GridBlank } from '../../content/types';
import { HangulKeyboard } from '../HangulKeyboard';
import { RichText } from '../RichText';
import { normalizeKo } from '../../lib/hangul';
import type { ExProps } from './types';

const answersOf = (b: GridBlank) => (Array.isArray(b.answer) ? b.answer : [b.answer]);

export function Grid({ ex, locked, onResult }: ExProps<'grid'>) {
  const blanks = useMemo(
    () => ex.rows.flatMap((r, i) => r.flatMap((c, j) => (typeof c === 'string' ? [] : [`${i}:${j}`]))),
    [ex],
  );
  const [values, setValues] = useState<Record<string, string>>({});
  const [active, setActive] = useState(blanks[0]);
  const isLast = blanks.every((k) => k === active || values[k]?.trim());

  const ok = (key: string, blank: GridBlank) => answersOf(blank).map(normalizeKo).includes(normalizeKo(values[key] ?? ''));

  const submit = () => {
    if (!values[active]?.trim()) return;
    const next = blanks.find((k) => !values[k]?.trim() && k !== active);
    if (next) return setActive(next);
    onResult(ex.rows.every((r, i) => r.every((c, j) => typeof c === 'string' || ok(`${i}:${j}`, c))));
  };

  return (
    <div className="ex ex-grid">
      {ex.prompt && (
        <div className="ex-prompt">
          <RichText text={ex.prompt} />
        </div>
      )}
      <div className="b-table-wrap">
        <table className="b-table grid-table">
          <thead><tr>{ex.head.map((h) => <th key={h}><RichText text={h} as="span" /></th>)}</tr></thead>
          <tbody>
            {ex.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => {
                  if (typeof c === 'string') return <td key={j}><RichText text={c} as="span" /></td>;
                  const key = `${i}:${j}`;
                  const state = locked ? (ok(key, c) ? 'ok' : 'ko') : key === active ? 'active' : '';
                  return (
                    <td key={j}>
                      <button type="button" className={`grid-cell ${state}`} lang="ko" disabled={locked} onClick={() => setActive(key)}>
                        {values[key] || ' '}
                        {key === active && !locked && <span className="caret" />}
                      </button>
                      {locked && state === 'ko' && (
                        <RichText text={`→ [[${answersOf(c)[0]}]]`} as="div" className="grid-fix" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!locked && (
        <HangulKeyboard
          value={values[active] ?? ''}
          onChange={(v) => setValues((s) => ({ ...s, [active]: v }))}
          onSubmit={submit}
          submitLabel={isLast ? 'Vérifier' : 'Suivant'}
        />
      )}
    </div>
  );
}
