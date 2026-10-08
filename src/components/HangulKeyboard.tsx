import { useState } from 'react';
import { appendJamo, backspace } from '../lib/hangul';
import { sfx } from '../lib/sfx';
import { Erase } from './Icons';

const ROWS = [
  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'],
];
const SHIFT: Record<string, string> = { 'ㅂ': 'ㅃ', 'ㅈ': 'ㅉ', 'ㄷ': 'ㄸ', 'ㄱ': 'ㄲ', 'ㅅ': 'ㅆ', 'ㅐ': 'ㅒ', 'ㅔ': 'ㅖ' };
const VOWELS = new Set('ㅛㅕㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅒㅖ');

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  submitLabel?: string;
  disabled?: boolean;
}

export function HangulKeyboard({ value, onChange, onSubmit, submitLabel = 'OK', disabled }: Props) {
  const [shift, setShift] = useState(false);

  const press = (jamo: string) => {
    sfx('tap');
    onChange(appendJamo(value, shift && SHIFT[jamo] ? SHIFT[jamo] : jamo));
    setShift(false);
  };

  return (
    <div className={`kb ${disabled ? 'kb-disabled' : ''}`} onContextMenu={(e) => e.preventDefault()}>
      {ROWS.map((row, i) => (
        <div className="kb-row" key={i}>
          {i === 2 && (
            <button type="button" className={`kb-key kb-wide ${shift ? 'kb-on' : ''}`} onClick={() => setShift((s) => !s)} aria-label="Majuscule (consonnes doubles)">
              ⇧
            </button>
          )}
          {row.map((j) => {
            const label = shift && SHIFT[j] ? SHIFT[j] : j;
            return (
              <button type="button" key={j} className={`kb-key ${VOWELS.has(label) ? 'kb-vowel' : ''}`} onClick={() => press(j)} lang="ko">
                {label}
              </button>
            );
          })}
          {i === 2 && (
            <button type="button" className="kb-key kb-wide" onClick={() => onChange(backspace(value))} aria-label="Effacer">
              <Erase size={20} />
            </button>
          )}
        </div>
      ))}
      <div className="kb-row">
        <button type="button" className="kb-key kb-space" onClick={() => onChange(value + ' ')}>espace</button>
        {onSubmit && (
          <button type="button" className="kb-key kb-submit" onClick={onSubmit}>
            {submitLabel}
          </button>
        )}
      </div>
    </div>
  );
}
