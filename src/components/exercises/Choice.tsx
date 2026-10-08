import { useEffect, useMemo, useState } from 'react';
import { RichText, SpeakButton } from '../RichText';
import { speak } from '../../lib/speech';
import { shuffle } from '../../lib/util';
import type { ExProps } from './types';

function Choices({ choices, answer, locked, onPick }: { choices: string[]; answer: number; locked: boolean; onPick: (i: number) => void }) {
  const order = useMemo(() => shuffle(choices.map((_, i) => i)), [choices]);
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="choices">
      {order.map((i) => {
        const state = picked === null || !locked ? '' : i === answer ? 'correct' : i === picked ? 'wrong' : 'dim';
        return (
          <button
            type="button"
            key={i}
            className={`choice ${state}`}
            disabled={locked}
            onClick={() => {
              setPicked(i);
              onPick(i);
            }}
          >
            <RichText text={choices[i]} as="span" />
          </button>
        );
      })}
    </div>
  );
}

export function Mcq({ ex, locked, onResult }: ExProps<'mcq'>) {
  return (
    <div className="ex">
      <div className="ex-prompt">
        <RichText text={ex.prompt} />
        {ex.audio && <SpeakButton text={ex.audio} />}
      </div>
      <Choices choices={ex.choices} answer={ex.answer} locked={locked} onPick={(i) => onResult(i === ex.answer)} />
    </div>
  );
}

export function Listen({ ex, locked, onResult }: ExProps<'listen'>) {
  useEffect(() => {
    const t = setTimeout(() => speak(ex.audio), 300);
    return () => clearTimeout(t);
  }, [ex.audio]);
  return (
    <div className="ex">
      <p className="ex-prompt">Écoute et choisis ce que tu entends.</p>
      <div className="ex-center">
        <SpeakButton text={ex.audio} big />
        <button type="button" className="link" onClick={() => speak(ex.audio, { rate: 0.55 })}>🐢 plus lentement</button>
      </div>
      <Choices choices={ex.choices} answer={ex.answer} locked={locked} onPick={(i) => onResult(i === ex.answer)} />
    </div>
  );
}

export function Cloze({ ex, locked, onResult }: ExProps<'cloze'>) {
  const [fill, setFill] = useState<string | null>(null);
  return (
    <div className="ex">
      {ex.prompt && <RichText text={ex.prompt} className="ex-prompt" />}
      <p className="cloze-sentence" lang="ko">
        {ex.before}
        <span className={`cloze-blank ${fill ? 'filled' : ''}`}>{fill ?? '＿＿'}</span>
        {ex.after}
      </p>
      {ex.translation && <p className="ex-translation">{ex.translation}</p>}
      <Choices
        choices={ex.choices}
        answer={ex.answer}
        locked={locked}
        onPick={(i) => {
          setFill(ex.choices[i]);
          const ok = i === ex.answer;
          if (ok) speak(ex.before + ex.choices[i] + ex.after);
          onResult(ok);
        }}
      />
    </div>
  );
}
