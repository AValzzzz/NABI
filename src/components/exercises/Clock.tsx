import { useEffect, useState } from 'react';
import { ClockFace } from '../Clock';
import { RichText, SpeakButton } from '../RichText';
import { speak } from '../../lib/speech';
import type { ExProps } from './types';

export function ClockSet({ ex, locked, onResult }: ExProps<'clock'>) {
  const [time, setTime] = useState({ h: 12, m: 0 });
  useEffect(() => {
    if (!ex.audio) return;
    const t = setTimeout(() => speak(ex.audio!), 300);
    return () => clearTimeout(t);
  }, [ex.audio]);
  return (
    <div className="ex">
      <div className="ex-prompt">
        <RichText text={ex.prompt ?? 'Place les aiguilles.'} />
        {ex.audio && <SpeakButton text={ex.audio} />}
      </div>
      <div className="ex-center">
        <ClockFace h={time.h} m={time.m} onChange={locked ? undefined : (h, m) => setTime({ h, m })} />
        <small className="muted">Petite aiguille près du centre · grande aiguille près du bord</small>
      </div>
      {!locked && (
        <button type="button" className="btn btn-primary btn-block" onClick={() => onResult(time.h % 12 === ex.h % 12 && time.m === ex.m)}>
          Vérifier
        </button>
      )}
    </div>
  );
}
