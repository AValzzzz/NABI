import { useState } from 'react';
import { useApp } from '../AppData';
import { formatDayFr } from '../lib/dates';
import { Header } from '../components/Layout';
import { Mascot, stageForMonth } from '../components/Mascot';
import { ReviewQueue, type ReviewStats } from '../components/ReviewQueue';
import { Confetti } from '../components/Confetti';
import { PASS, Setback } from '../components/Setback';

export function Review() {
  const app = useApp();
  const stage = stageForMonth(app.month);
  const [running, setRunning] = useState(false);
  const [due, setDue] = useState(() => app.cards.filter((c) => c.due <= app.day));
  const [result, setResult] = useState<ReviewStats | null>(null);
  const missed = !!result && result.reviewed > 0 && result.correct / result.reviewed < PASS;
  const next = app.cards.filter((c) => c.due > app.day).map((c) => c.due).sort()[0];

  const finish = (s: ReviewStats) => {
    setRunning(false);
    setResult(s);
    void app.refresh();
  };

  if (running) {
    return (
      <div className="screen">
        <Header title="Révisions" subtitle="Rappel actif" />
        <div className="pad"><ReviewQueue cards={due} day={app.day} onFinish={finish} /></div>
        <div className="pad"><button type="button" className="link" onClick={() => finish({ reviewed: 0, correct: 0 })}>Arrêter</button></div>
      </div>
    );
  }

  return (
    <div className="screen">
      <Header title="Révisions" subtitle="Rappel actif · répétition espacée" />
      <div className="pad center-col">
        {result && result.reviewed > 0 && !missed && <Confetti count={24} />}
        {app.dueCount > 0 ? (
          <>
            <Mascot stage={stage} mood="thinking" size={120} />
            <p className="big-number">{app.dueCount}</p>
            <p>carte{app.dueCount > 1 ? 's' : ''} à réviser aujourd’hui</p>
            <button type="button" className="btn btn-primary btn-block btn-big" onClick={() => { setDue(app.cards.filter((c) => c.due <= app.day)); setResult(null); setRunning(true); }}>
              Réviser
            </button>
          </>
        ) : (
          <>
            {missed ? <Setback stage={stage} size={120} /> : <Mascot stage={stage} mood={result ? 'happy' : 'sleep'} size={120} />}
            {result && result.reviewed > 0 && <p><strong>{result.correct}/{result.reviewed}</strong> retrouvées.{missed ? '' : ' Bien joué !'}</p>}
            <p>{app.cards.length ? 'Rien à réviser pour le moment.' : 'Tes cartes apparaîtront ici après ta première leçon.'}</p>
            {next && <p className="muted">Prochaine révision : {formatDayFr(next)}</p>}
          </>
        )}
        <p className="muted small">{app.cards.length} carte{app.cards.length > 1 ? 's' : ''} dans ta collection</p>
      </div>
    </div>
  );
}
