import { useState } from 'react';
import { go } from '../lib/router';
import { DEMO_LESSON } from '../content/demo';
import { useApp } from '../AppData';
import { TopBar } from '../components/Layout';
import { LessonPlayer } from '../components/LessonPlayer';
import { Mascot, stageForMonth } from '../components/Mascot';
import { Confetti } from '../components/Confetti';
import { sfx } from '../lib/sfx';

export function Demo() {
  const { month } = useApp();
  const stage = stageForMonth(month);
  const [score, setScore] = useState<number | null>(null);
  const [run, setRun] = useState(0);
  return (
    <div className="screen session">
      <TopBar title={DEMO_LESSON.title} onBack={() => go('atelier')} />
      {score === null ? (
        <LessonPlayer key={run} steps={DEMO_LESSON.steps} stage={stage} onComplete={(s) => { sfx('complete'); setScore(s); }} />
      ) : (
        <div className="session-done">
          <Confetti />
          <Mascot stage={stage} mood="happy" size={140} />
          <h2>Démo terminée</h2>
          <p>Score : {Math.round(score * 100)} %</p>
          <button type="button" className="btn btn-secondary btn-block" onClick={() => { setScore(null); setRun((r) => r + 1); }}>Recommencer</button>
          <button type="button" className="btn btn-primary btn-block" onClick={() => go('atelier')}>Retour</button>
        </div>
      )}
    </div>
  );
}
