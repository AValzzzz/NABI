import { useState } from 'react';
import { useApp } from '../AppData';
import { go } from '../lib/router';
import { LESSONS, MONTHS } from '../content/curriculum';
import { Header } from '../components/Layout';
import { Mascot, stageForMonth } from '../components/Mascot';
import { streak } from '../lib/dates';
import flame from '../assets/sprites/flame.webp';

export function Home() {
  const app = useApp();
  const { today, dueCount, day, studyDays } = app;
  const stage = stageForMonth(app.month);
  const doneToday = studyDays.includes(day);
  const days = streak(studyDays, day);
  const [showLater, setShowLater] = useState(false);

  const message = !LESSONS.length
    ? 'Les leçons arrivent bientôt ! En attendant, découvre l’Atelier.'
    : today.state === 'available'
      ? `Leçon du jour : ${today.lesson!.title}`
      : today.state === 'tomorrow'
        ? 'Leçon du jour terminée. Reviens demain pour la suite !'
        : 'Tu as terminé toutes les leçons disponibles. Bravo !';

  const canStart = today.state === 'available' || dueCount > 0;

  return (
    <div className="screen home">
      <Header />

      <section className="today-card">
        <Mascot stage={stage} mood={doneToday ? 'sleep' : 'idle'} size={110} className="bob" />
        <div className="today-body">
          <p className="bubble-say">{doneToday && today.state !== 'available' ? 'Séance terminée pour aujourd’hui. Nabi fait la sieste… à demain !' : message}</p>
          <div className="today-stats">
            {days > 0 && <span className={`streak ${doneToday ? '' : 'pending'}`} title={doneToday ? 'Série en cours' : 'Fais ta séance pour garder ta série'}><img src={flame} alt="" /><b>{days}</b> j</span>}
            <span><b>{dueCount}</b> à réviser</span>
            <span><b>{Object.keys(app.progress).length}</b>/{LESSONS.length || '—'} leçons</span>
          </div>
        </div>
      </section>
      <div className="pad">
        <button type="button" className="btn btn-primary btn-block btn-big" disabled={!canStart} onClick={() => go('session')}>
          {doneToday ? 'Refaire une séance' : 'Commencer la séance'}
          <small>~20 min · 3 étapes</small>
        </button>
      </div>

      <section className="journey">
        <h3>Mon parcours</h3>
        <div className="road">
          {MONTHS.slice(0, 6).map((m) => <MonthNode key={m.month} month={m.month} current={m.month === app.month} />)}
        </div>
        <button type="button" className="link" onClick={() => setShowLater((v) => !v)}>
          {showLater ? 'Masquer' : 'Voir la suite : vers le B2/C1 (mois 7–12)'}
        </button>
        {showLater && <div className="road road-later">{MONTHS.slice(6).map((m) => <MonthNode key={m.month} month={m.month} current={m.month === app.month} />)}</div>}
      </section>

      <div className="writing-lines" aria-hidden="true"><span>ㅏ</span><span>ㅓ</span><span>ㅗ</span><span className="faint">ㅜ</span></div>
    </div>
  );
}

function MonthNode({ month, current }: { month: number; current: boolean }) {
  const { progress } = useApp();
  const info = MONTHS[month - 1];
  const lessons = LESSONS.filter((l) => l.month === month);
  const done = lessons.filter((l) => progress[l.id]).length;
  const complete = lessons.length > 0 && done === lessons.length;
  return (
    <div className={`month-node ${current ? 'current' : ''} ${complete ? 'complete' : ''}`}>
      <span className="month-tag">Mois {month}</span>
      <div className="month-body">
        <strong>{info.title}</strong>
        <small>{info.goal}</small>
        {lessons.length ? (
          <div className="progress"><i style={{ width: `${(done / lessons.length) * 100}%` }} /></div>
        ) : (
          <small className="soon">Bientôt</small>
        )}
      </div>
      <Mascot stage={stageForMonth(month)} mood={current ? 'happy' : 'idle'} size={58} className={current ? '' : 'faded'} />
    </div>
  );
}
