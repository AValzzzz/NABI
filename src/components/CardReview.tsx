import { useEffect, useMemo, useState } from 'react';
import type { Card, Grade } from '../lib/srs';
import { previewIntervals } from '../lib/srs';
import { speak } from '../lib/speech';
import { RichText, SpeakButton } from './RichText';

const KIND_LABEL: Record<Card['kind'], string> = {
  hangul: 'Lettre', vocab: 'Vocabulaire', phrase: 'Expression', particle: 'Particule', grammar: 'Structure',
};

const GRADES: { grade: Grade; label: string }[] = [
  { grade: 'again', label: 'À revoir' },
  { grade: 'hard', label: 'Difficile' },
  { grade: 'good', label: 'Bien' },
  { grade: 'easy', label: 'Facile' },
];

const fmt = (d: number) => (d <= 1 ? 'demain' : d < 30 ? `${d} j` : d < 365 ? `${Math.round(d / 30)} mois` : `${(d / 365).toFixed(1)} an`);

export function CardReview({ card, day, onGrade }: { card: Card; day: string; onGrade: (g: Grade) => void }) {
  const reverse = useMemo(() => card.kind !== 'hangul' && card.reps >= 2 && Math.random() < 0.5, [card]);
  const [shown, setShown] = useState(false);
  const preview = useMemo(() => previewIntervals(card, day), [card, day]);

  useEffect(() => setShown(false), [card]);

  const reveal = () => {
    setShown(true);
    if (reverse) speak(card.speak ?? card.ko);
  };

  return (
    <div className="review">
      <div className={`flashcard ${shown ? 'flipped' : ''}`}>
        <span className="fc-kind">{KIND_LABEL[card.kind]}{reverse ? ' · en coréen ?' : ''}</span>
        {reverse ? (
          <p className="fc-front-fr">{card.fr}</p>
        ) : (
          <button type="button" className="fc-front-ko" lang="ko" onClick={() => speak(card.speak ?? card.ko)}>
            {card.ko}
          </button>
        )}
        {shown && (
          <div className="fc-back">
            {reverse ? (
              <p className="fc-answer" lang="ko">{card.ko} <SpeakButton text={card.speak ?? card.ko} /></p>
            ) : (
              <p className="fc-answer">
                {card.roman && <span className="roman">[{card.roman}]</span>} {card.fr}
              </p>
            )}
            {card.note && <RichText text={card.note} className="fc-note" />}
          </div>
        )}
      </div>
      {!shown ? (
        <button type="button" className="btn btn-primary btn-block" onClick={reveal}>Afficher la réponse</button>
      ) : (
        <div className="grades">
          {GRADES.map(({ grade, label }) => (
            <button type="button" key={grade} className={`grade grade-${grade}`} onClick={() => onGrade(grade)}>
              <span>{label}</span>
              <small>{grade === 'again' ? 'bientôt' : fmt(preview[grade])}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
