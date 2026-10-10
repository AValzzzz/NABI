import { useEffect, useState } from 'react';
import { useApp } from '../AppData';
import { allLogs, type ReviewLog } from '../lib/db';
import { addDays } from '../lib/dates';
import { LESSONS } from '../content/curriculum';
import { Header } from '../components/Layout';
import { Mascot, stageForMonth, type Stage } from '../components/Mascot';

const STAGES: { stage: Stage; months: string; label: string }[] = [
  { stage: 'caterpillar', months: 'Mois 1–2', label: 'Chenille' },
  { stage: 'chrysalis', months: 'Mois 3–4', label: 'Chrysalide' },
  { stage: 'butterfly', months: 'Mois 5–6', label: 'Papillon' },
];

export const MILESTONES = [7, 30, 60, 100, 180, 365];

const BADGES = import.meta.glob('../assets/sprites/badge-*.webp', { eager: true, import: 'default' }) as Record<string, string>;

export function Progress() {
  const app = useApp();
  const [logs, setLogs] = useState<ReviewLog[]>([]);
  useEffect(() => void allLogs().then(setLogs), []);

  const stage = stageForMonth(app.month);
  const learned = app.cards.filter((c) => c.reps > 0).length;
  const mature = app.cards.filter((c) => c.interval >= 21).length;
  const since = addDays(app.day, -30);
  const recent = logs.filter((l) => l.day >= since);
  const retention = recent.length ? Math.round((recent.filter((l) => l.grade !== 'again').length / recent.length) * 100) : null;
  const lessonsDone = Object.keys(app.progress).length;
  const days = app.studyDays.length;

  return (
    <div className="screen">
      <Header title="Progrès" subtitle="Le voyage de Nabi" />

      <section className="pad">
        <div className="evolution">
          {STAGES.map((s, i) => (
            <div key={s.stage} className={`evo ${s.stage === stage ? 'now' : STAGES.findIndex((x) => x.stage === stage) > i ? 'past' : 'future'}`}>
              <Mascot stage={s.stage} mood={s.stage === stage ? 'happy' : 'idle'} size={70} />
              <strong>{s.label}</strong>
              <small>{s.months}</small>
            </div>
          ))}
        </div>
        <div className="goal">
          <span>Objectif B1+</span>
          <div className="progress"><i style={{ width: `${Math.min(100, ((app.month - 1) / 6) * 100 + (lessonsDone && LESSONS.length ? 2 : 0))}%` }} /></div>
          <small>Mois {app.month} sur 6</small>
        </div>
      </section>

      <section className="pad stats">
        <Stat value={lessonsDone} label={plural(lessonsDone, 'leçon terminée', 'leçons terminées')} />
        <Stat value={days} label={plural(days, 'jour d’étude', 'jours d’étude')} />
        <Stat value={learned} label={plural(learned, 'carte apprise', 'cartes apprises')} />
        <Stat value={mature} label={plural(mature, 'carte maîtrisée', 'cartes maîtrisées')} hint="intervalle ≥ 3 semaines" />
        <Stat value={logs.length} label={plural(logs.length, 'révision', 'révisions')} />
        <Stat value={retention === null ? '—' : `${retention} %`} label="réussite (30 j)" />
      </section>

      <section className="pad">
        <h3>Récompenses</h3>
        <div className="badges">
          {MILESTONES.map((m) => {
            const got = days >= m;
            const img = BADGES[`../assets/sprites/badge-${m}.webp`];
            return (
              <div key={m} className={`badge-item ${got ? 'got' : ''}`}>
                {img ? <img src={img} alt="" /> : <span className="badge-medal">{m}</span>}
                <small>{m} jours</small>
                {!got && <small className="muted">encore {m - days}</small>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

const plural = (n: number, one: string, many: string) => (n > 1 ? many : one);

function Stat({ value, label, hint }: { value: number | string; label: string; hint?: string }) {
  return (
    <div className="stat" title={hint}>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}
