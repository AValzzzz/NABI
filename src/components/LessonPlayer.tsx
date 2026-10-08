import { useState } from 'react';
import type { Step } from '../content/types';
import { BlockView } from './Blocks';
import { ExerciseRunner } from './exercises/ExerciseRunner';
import type { Stage } from './Mascot';

interface Props {
  steps: Step[];
  stage: Stage;
  start?: number;
  onStep?: (index: number) => void;
  onComplete: (score: number) => void;
  debug?: boolean;
}

export function LessonPlayer({ steps, stage, start = 0, onStep, onComplete, debug }: Props) {
  const [i, setI] = useState(Math.min(start, Math.max(steps.length - 1, 0)));
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  const step = steps[i];

  const next = (correct?: boolean) => {
    const r = right + (correct ? 1 : 0);
    const t = total + (correct === undefined ? 0 : 1);
    setRight(r);
    setTotal(t);
    if (i + 1 >= steps.length) onComplete(t ? r / t : 1);
    else {
      setI(i + 1);
      onStep?.(i + 1);
      window.scrollTo(0, 0);
    }
  };

  const jump = (k: number) => {
    if (k >= steps.length) return onComplete(total ? right / total : 1);
    setI(k);
    onStep?.(k);
    window.scrollTo(0, 0);
  };

  if (!step) return null;
  return (
    <div className="player">
      {debug && (
        <div className="player-debug">
          <button type="button" className="btn btn-secondary btn-mini" disabled={i === 0} onClick={() => jump(i - 1)}>⏮</button>
          <span>🧪 étape {i + 1}/{steps.length} · {step.kind === 'learn' ? 'explication' : step.exercise.type}</span>
          <button type="button" className="btn btn-secondary btn-mini" onClick={() => jump(i + 1)}>{i + 1 >= steps.length ? 'Fin ⏭' : '⏭'}</button>
        </div>
      )}
      <div className="steps-dots">
        {steps.map((s, k) => (
          <span key={k} className={`dot ${k < i ? 'past' : k === i ? 'now' : ''} ${s.kind}`} />
        ))}
      </div>
      {step.kind === 'learn' ? (
        <div className="learn">
          <div className="paper-card">
            {step.blocks.map((b, k) => <BlockView key={k} block={b} stage={stage} />)}
          </div>
          <button type="button" className="btn btn-primary btn-block" onClick={() => next()}>
            {steps[i + 1]?.kind === 'learn' ? 'Suivant' : 'J’ai compris, à moi !'}
          </button>
        </div>
      ) : (
        <ExerciseRunner key={i} ex={step.exercise} stage={stage} onDone={next} />
      )}
    </div>
  );
}
