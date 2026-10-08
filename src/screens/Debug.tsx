import { useEffect, useState } from 'react';
import { useApp } from '../AppData';
import { go } from '../lib/router';
import * as store from '../lib/db';
import { newCard } from '../lib/srs';
import { dayOffset, isDebug, setDayOffset, setDebug } from '../lib/debug';
import { formatDayFr } from '../lib/dates';
import { LESSONS, MONTHS } from '../content/curriculum';
import type { Lesson } from '../content/types';
import { TopBar } from '../components/Layout';

const STATE_ICON = { done: '✅', available: '▶️', tomorrow: '⏳', locked: '🔒' } as const;

export function Debug() {
  const app = useApp();
  const [offset, setOffset] = useState(dayOffset);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!isDebug()) {
      setDebug(true);
      void app.refresh();
    }
  }, []);

  const shift = async (n: number | null) => {
    const next = n === null ? 0 : offset + n;
    setDayOffset(next);
    setOffset(next);
    await app.refresh();
  };

  const play = (l: Lesson) => {
    location.hash = `/session?lesson=${l.id}`;
  };

  const completeUpTo = async (l: Lesson) => {
    const upTo = LESSONS.slice(0, LESSONS.indexOf(l) + 1).filter((x) => !app.progress[x.id]);
    for (const x of upTo) {
      await store.completeLesson({ id: x.id, completedOn: app.day, score: 1 }, x.cards.map((c) => newCard(c, x.id, app.day)));
    }
    await app.refresh();
    setMsg(`${upTo.length} leçon${upTo.length > 1 ? 's' : ''} validée${upTo.length > 1 ? 's' : ''} jusqu’au jour ${l.day}.`);
  };

  const allDue = async () => {
    await store.makeAllDue(app.day);
    await app.refresh();
    setMsg('Toutes les cartes sont à réviser aujourd’hui.');
  };

  const turnOff = async () => {
    setDebug(false);
    await app.refresh();
    go('settings');
  };

  return (
    <div className="screen">
      <TopBar title="🧪 Mode test" onBack={() => go('home')} />
      <div className="pad settings">
        <section className="paper-card">
          <h3>Mode test activé</h3>
          <p className="small">Plus de limite d’une leçon par jour : dès qu’une leçon est finie, la suivante s’ouvre. Tu peux aussi rejouer n’importe quelle leçon, sauter des étapes (⏭ en haut des leçons) et avancer le calendrier.</p>
          <p className="muted small">⚠️ Tout ce que tu fais ici modifie ta vraie progression. Exporte une sauvegarde avant (Réglages), ou réinitialise après.</p>
          {msg && <p className="small"><strong>{msg}</strong></p>}
        </section>

        <section className="paper-card">
          <h3>Date simulée</h3>
          <p className="small"><strong>{formatDayFr(app.day)}</strong>{offset ? ` (aujourd’hui ${offset > 0 ? '+' : ''}${offset} j)` : ' (vraie date)'}</p>
          <div className="row-gap">
            <button type="button" className="btn btn-secondary" onClick={() => void shift(-1)}>−1 jour</button>
            <button type="button" className="btn btn-primary" onClick={() => void shift(1)}>+1 jour</button>
            <button type="button" className="btn btn-secondary" onClick={() => void shift(7)}>+7 jours</button>
          </div>
          {offset !== 0 && <button type="button" className="link" onClick={() => void shift(null)}>Revenir à la vraie date</button>}
        </section>

        <section className="paper-card">
          <h3>Révisions</h3>
          <p className="small">{app.cards.length} cartes · {app.dueCount} à réviser</p>
          <button type="button" className="btn btn-secondary" onClick={() => void allDue()} disabled={!app.cards.length}>Tout rendre à réviser maintenant</button>
        </section>

        <section className="paper-card">
          <h3>Leçons</h3>
          <p className="muted small">▶ jouer la leçon (même déjà faite ou verrouillée) · ✓ valider instantanément toutes les leçons jusqu’à celle-ci (avec leurs cartes).</p>
          {MONTHS.filter((m) => LESSONS.some((l) => l.month === m.month)).map((m) => (
            <details key={m.month} className="debug-month" open={m.month === app.month}>
              <summary>Mois {m.month} · {m.title}</summary>
              {LESSONS.filter((l) => l.month === m.month).map((l) => (
                <div key={l.id} className="debug-lesson">
                  <span className="debug-state">{STATE_ICON[app.states[LESSONS.indexOf(l)]]}</span>
                  <span className="debug-title"><b>J{l.day}</b> {l.title}</span>
                  <button type="button" className="btn btn-primary btn-mini" onClick={() => play(l)} aria-label={`Jouer le jour ${l.day}`}>▶</button>
                  <button type="button" className="btn btn-secondary btn-mini" onClick={() => void completeUpTo(l)} disabled={!!app.progress[l.id]} aria-label={`Valider jusqu’au jour ${l.day}`}>✓</button>
                </div>
              ))}
            </details>
          ))}
        </section>

        <section className="paper-card">
          <button type="button" className="btn btn-danger" onClick={() => void turnOff()}>Désactiver le mode test</button>
        </section>
      </div>
    </div>
  );
}
