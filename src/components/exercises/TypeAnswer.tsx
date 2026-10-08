import { useState } from 'react';
import { HangulKeyboard } from '../HangulKeyboard';
import { RichText, SpeakButton } from '../RichText';
import { normalizeKo } from '../../lib/hangul';
import type { ExProps } from './types';

export function TypeAnswer({ ex, locked, onResult }: ExProps<'type'>) {
  const [value, setValue] = useState('');
  const answers = (Array.isArray(ex.answer) ? ex.answer : [ex.answer]).map(normalizeKo);
  const submit = () => value.trim() && onResult(answers.includes(normalizeKo(value)));
  return (
    <div className="ex ex-type">
      <div className="ex-prompt">
        <RichText text={ex.prompt} />
        {ex.audio && <SpeakButton text={ex.audio} />}
      </div>
      <div className="type-field" lang="ko">
        {value}
        {!locked && <span className="caret" />}
      </div>
      {!locked && <HangulKeyboard value={value} onChange={setValue} onSubmit={submit} submitLabel="Vérifier" />}
    </div>
  );
}
