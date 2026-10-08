import { TraceCanvas } from '../TraceCanvas';
import { StrokeOrder } from '../StrokeOrder';
import { RichText, SpeakButton } from '../RichText';
import type { ExProps } from './types';

export function Trace({ ex, locked, onResult }: ExProps<'trace'>) {
  return (
    <div className="ex">
      <div className="ex-prompt">
        <RichText text={ex.prompt ?? 'Trace la lettre en suivant le modèle.'} />
        <span className="trace-target" lang="ko">
          {ex.char} {ex.roman && <span className="roman">[{ex.roman}]</span>}
        </span>
        <SpeakButton text={ex.char} />
      </div>
      <StrokeOrder char={ex.char} size={84} />
      <TraceCanvas char={ex.char} onScore={(r) => !locked && r.score >= 0.55 && onResult(true)} />
      {!locked && (
        <button type="button" className="link" onClick={() => onResult(false)}>
          Passer
        </button>
      )}
    </div>
  );
}
