import { useState } from 'react';
import type { Exercise } from '../../content/types';
import { sfx } from '../../lib/sfx';
import { RichText } from '../RichText';
import { Mascot, type Stage } from '../Mascot';
import { Cloze, Listen, Mcq } from './Choice';
import { Order } from './Order';
import { TypeAnswer } from './TypeAnswer';
import { Trace } from './Trace';
import { Match } from './Match';
import { Sort } from './Sort';
import { Write } from './Write';
import { Read } from './Read';
import { ClockSet } from './Clock';
import { Grid } from './Grid';
import { digitalTime, koreanTime } from '../../lib/clock';

function answerText(ex: Exercise): string | undefined {
  switch (ex.type) {
    case 'mcq':
    case 'listen':
    case 'cloze':
      return ex.choices[ex.answer];
    case 'order':
      return ex.tiles.join(' ');
    case 'type':
      return Array.isArray(ex.answer) ? ex.answer[0] : ex.answer;
    case 'clock':
      return `${koreanTime(ex.h, ex.m)} (${digitalTime(ex.h, ex.m)})`;
  }
}

export function ExerciseRunner({ ex, stage, onDone }: { ex: Exercise; stage: Stage; onDone: (correct: boolean) => void }) {
  const [result, setResult] = useState<boolean | null>(null);
  const locked = result !== null;
  const onResult = (ok: boolean) => {
    if (locked) return;
    sfx(ok ? 'correct' : 'wrong');
    setResult(ok);
  };
  const props = { locked, onResult };
  const answer = answerText(ex);

  return (
    <div className="runner">
      {ex.type === 'mcq' && <Mcq ex={ex} {...props} />}
      {ex.type === 'listen' && <Listen ex={ex} {...props} />}
      {ex.type === 'cloze' && <Cloze ex={ex} {...props} />}
      {ex.type === 'order' && <Order ex={ex} {...props} />}
      {ex.type === 'type' && <TypeAnswer ex={ex} {...props} />}
      {ex.type === 'trace' && <Trace ex={ex} {...props} />}
      {ex.type === 'match' && <Match ex={ex} {...props} />}
      {ex.type === 'sort' && <Sort ex={ex} {...props} />}
      {ex.type === 'write' && <Write ex={ex} {...props} />}
      {ex.type === 'read' && <Read ex={ex} {...props} />}
      {ex.type === 'clock' && <ClockSet ex={ex} {...props} />}
      {ex.type === 'grid' && <Grid ex={ex} {...props} />}

      {locked && (
        <div className={`feedback ${result ? 'ok' : 'ko'}`}>
          <Mascot stage={stage} mood={result ? 'happy' : 'encourage'} size={64} />
          <div className="feedback-text">
            <strong>{result ? pickPraise() : 'Pas tout à fait…'}</strong>
            {!result && answer && <span lang="ko">Réponse : <RichText text={answer} as="span" /></span>}
            {'explain' in ex && ex.explain && <RichText text={ex.explain} as="div" />}
          </div>
          <button type="button" className="btn btn-primary" onClick={() => onDone(result)}>
            Continuer
          </button>
        </div>
      )}
    </div>
  );
}

const PRAISE = ['Bravo !', 'Parfait !', 'Super !', 'Excellent !'];
const pickPraise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];
