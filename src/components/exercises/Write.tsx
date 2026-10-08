import { useState } from 'react';
import { HangulKeyboard } from '../HangulKeyboard';
import { RichText, SpeakButton } from '../RichText';
import { normalizeKo } from '../../lib/hangul';
import { speak } from '../../lib/speech';
import type { ExProps } from './types';

export function Write({ ex, locked, onResult }: ExProps<'write'>) {
  const [value, setValue] = useState('');
  const submit = () => {
    const v = value.trim();
    if (!v) return;
    speak(v);
    const text = normalizeKo(v);
    onResult((ex.mustInclude ?? []).every((w) => w.split('|').some((alt) => text.includes(normalizeKo(alt)))));
  };
  return (
    <div className="ex ex-type">
      <div className="ex-prompt">
        <RichText text={ex.prompt} />
      </div>
      <div className="type-field" lang="ko">
        {value || (!locked && ex.placeholder ? <span className="placeholder">{ex.placeholder}</span> : null)}
        {!locked && <span className="caret" />}
        {locked && value && <SpeakButton text={value.trim()} />}
      </div>
      {!locked && <HangulKeyboard value={value} onChange={setValue} onSubmit={submit} submitLabel="Écouter" />}
    </div>
  );
}
