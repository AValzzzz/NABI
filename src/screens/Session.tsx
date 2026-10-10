import { useEffect, useState } from 'react';
import { useApp } from '../AppData';
import { go, routeParam } from '../lib/router';
import * as store from '../lib/db';
import { newCard } from '../lib/srs';
import { buildInterleave } from '../lib/interleave';
import { sfx } from '../lib/sfx';
import { LESSONS, lessonById } from '../content/curriculum';
import type { Lesson } from '../content/types';
import { Evolution, Mascot, stageForMonth } from '../components/Mascot';
import { ReviewQueue } from '../components/ReviewQueue';
import { LessonPlayer } from '../components/LessonPlayer';
import { Confetti } from '../components/Confetti';
import { PASS, Setback } from '../components/Setback';
import { Close } from '../components/Icons';

type Phase = 'intro' | 'review' | 'lesson' | 'interleave' | 'done';

const PHASES = [
  { key: 'review', n: 1, name: 'Rappel actif', minutes: 5 },
  { key: 'lesson', n: 2, name: 'Micro-leçon', minutes: 11 },
  { key: 'interleave', n: 3, name: 'Entrelacement', minutes: 4 },
] as const;

export function Session() {
  const app = useApp();
  const { day, today } = app;
  const [forced] = useState(() => (app.debug ? lessonById(routeParam('lesson') ?? '') : undefined));
  const lesson = forced ?? (today.state === 'available' ? today.lesson : undefined);
  const stage = stageForMonth(app.month);

  const [phase, setPhase] = useState<Phase>('intro');
  const [startStep, setStartStep] = useState(0);
  const [phaseStart, setPhaseStart] = useState(Date.now());
  const [lessonScore, setLessonScore] = useState<number | null>(null);
  const [completedLesson, setCompletedLesson] = useState<Lesson>();
  const [reviewed, setReviewed] = useState(0);

  const [due] = useState(() => app.cards.filter((c) => c.due <= day));
  const [interleave, setInterleave] = useState(() => buildInterleave(lesson, app.cards));

  useEffect(() => {
    void store.getSession().then((s) => {
      if (!s || s.day !== day || s.phase === 'done') return;
      if (s.phase === 'lesson' && s.lessonId === lesson?.id) {
        setStartStep(s.step ?? 0);
        setPhase('lesson');
      }
    });
  }, [day, lesson?.id]);

  const enter = (p: Exclude<Phase, 'intro'>) => {
    setPhase(p);
    setPhaseStart(Date.now());
    window.scrollTo(0, 0);
    void store.saveSession({ day, phase: p, lessonId: lesson?.id, step: 0 });
  };

  const afterReview = () => enter(lesson ? 'lesson' : 'interleave');

  const finishLesson = async (score: number) => {
    if (!lesson) return;
    await store.completeLesson({ id: lesson.id, completedOn: day, score }, lesson.cards.map((c) => newCard(c, lesson.id, day)));
    setLessonScore(score);
    setCompletedLesson(lesson);
    setInterleave(buildInterleave(lesson, [...(await store.allCards())]));
    enter('interleave');
  };

  const finishAll = async () => {
    await store.markStudyDay(day);
    sfx('complete');
    enter('done');
    await app.refresh();
  };

  const current = PHASES.find((p) => p.key === phase);

  return (
    <div className="screen session">
      {phase !== 'intro' && phase !== 'done' && current && (
        <div className="session-top">
          <button type="button" className="icon-btn" onClick={() => { void app.refresh(); go('home'); }} aria-label="Quitter">
            <Close />
          </button>
          <div className="phase-track">
            {PHASES.map((p) => (
              <span key={p.key} className={`phase-pip ${p.key === phase ? 'now' : PHASES.findIndex((x) => x.key === phase) > p.n - 1 ? 'past' : ''}`} />
            ))}
          </div>
          <PhaseTimer start={phaseStart} minutes={current.minutes} />
        </div>
      )}
      {current && <p className="phase-name">Étape {current.n} · {current.name}</p>}

      {phase === 'intro' && (
        <div className="session-intro">
          <Mascot stage={stage} mood="happy" size={130} />
          <h2>Séance du jour</h2>
          <ol className="plan">
            <li><b>1</b><div><strong>Rappel actif</strong><small>{due.length ? `${due.length} carte${due.length > 1 ? 's' : ''} à réviser` : 'Aucune carte à réviser'} · ~5 min</small></div></li>
            <li><b>2</b><div><strong>Micro-leçon</strong><small>{lesson ? lesson.title : today.state === 'tomorrow' ? 'Prochaine leçon demain' : 'Leçons bientôt disponibles'} · ~11 min</small></div></li>
            <li><b>3</b><div><strong>Entrelacement</strong><small>{interleave.length ? `${interleave.length} exercices mélangés` : 'Pas encore assez de cartes'} · ~4 min</small></div></li>
          </ol>
          <button type="button" className="btn btn-primary btn-block btn-big" onClick={() => (due.length ? enter('review') : afterReview())}>
            C’est parti !
          </button>
          {app.debug && lesson && (
            <button type="button" className="btn btn-secondary btn-block" onClick={() => enter('lesson')}>
              🧪 Aller directement à la leçon
            </button>
          )}
        </div>
      )}

      {phase === 'review' && (
        <>
          <ReviewQueue cards={due} day={day} onFinish={afterReview} onProgress={(n) => setReviewed(due.length - n)} />
          {app.debug && <button type="button" className="link" onClick={afterReview}>🧪 Passer les révisions</button>}
          <SkipAfter start={phaseStart} minutes={5} label="Passer à la leçon →" onSkip={afterReview} hint={`${reviewed} révisée${reviewed > 1 ? 's' : ''} — les autres restent dans l’onglet Révisions.`} />
        </>
      )}

      {phase === 'lesson' && lesson && (
        <>
          <h2 className="lesson-title">{lesson.title}</h2>
          <LessonPlayer
            steps={lesson.steps}
            stage={stage}
            start={startStep}
            debug={app.debug}
            onStep={(step) => void store.saveSession({ day, phase: 'lesson', lessonId: lesson.id, step })}
            onComplete={finishLesson}
          />
        </>
      )}

      {phase === 'interleave' && (
        interleave.length ? (
          <LessonPlayer steps={interleave.map((exercise) => ({ kind: 'practice' as const, exercise }))} stage={stage} debug={app.debug} onComplete={finishAll} />
        ) : (
          <div className="empty">
            <Mascot stage={stage} mood="thinking" size={100} />
            <p>Pas encore assez de cartes pour mélanger les leçons. Ça viendra vite !</p>
            <button type="button" className="btn btn-primary btn-block" onClick={finishAll}>Terminer</button>
          </div>
        )
      )}

      {phase === 'done' && <Done stageLesson={completedLesson} score={lessonScore} />}
    </div>
  );
}

function Done({ stageLesson, score }: { stageLesson?: Lesson; score: number | null }) {
  const { month } = useApp();
  const idx = stageLesson ? LESSONS.findIndex((l) => l.id === stageLesson.id) : -1;
  const nextLesson = idx >= 0 ? LESSONS[idx + 1] : undefined;
  const evolves = stageLesson && nextLesson && stageForMonth(stageLesson.month) !== stageForMonth(nextLesson.month);
  const stage = stageForMonth(evolves && nextLesson ? nextLesson.month : month);
  const missed = !evolves && score !== null && score < PASS;
  return (
    <div className="session-done">
      {!missed && <Confetti />}
      {evolves && stage !== 'caterpillar' ? <Evolution to={stage} size={150} /> : missed ? <Setback stage={stage} size={150} /> : <Mascot stage={stage} mood="happy" size={150} />}
      <h2>{evolves ? 'Nabi a évolué !' : 'Séance terminée !'}</h2>
      {score !== null && <p className="done-score">{missed ? 'Leçon terminée' : 'Leçon réussie'} à <strong>{Math.round(score * 100)} %</strong></p>}
      <p>{stageLesson ? 'Nouvelle leçon demain. Les cartes du jour reviendront au bon moment.' : 'Bravo pour cette séance de révision.'}</p>
      <button type="button" className="btn btn-primary btn-block btn-big" onClick={() => go('home')}>Retour à l’accueil</button>
    </div>
  );
}

function PhaseTimer({ start, minutes }: { start: number; minutes: number }) {
  const elapsed = useElapsed(start);
  const over = elapsed > minutes * 60;
  return (
    <span className={`timer ${over ? 'over' : ''}`}>
      {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, '0')}<small> / {minutes} min</small>
    </span>
  );
}

function SkipAfter({ start, minutes, label, hint, onSkip }: { start: number; minutes: number; label: string; hint: string; onSkip: () => void }) {
  const elapsed = useElapsed(start);
  if (elapsed < minutes * 60) return null;
  return (
    <div className="skip-after">
      <p>{hint}</p>
      <button type="button" className="btn btn-secondary btn-block" onClick={onSkip}>{label}</button>
    </div>
  );
}

function useElapsed(start: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return Math.max(0, Math.floor((now - start) / 1000));
}
