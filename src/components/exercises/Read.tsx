import { useState } from 'react';
import { RichText, SpeakButton } from '../RichText';
import { speak } from '../../lib/speech';
import type { ExProps } from './types';

export function Read({ ex, locked, onResult }: ExProps<'read'>) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ex">
      <div className="ex-prompt">
        <RichText text={ex.prompt ?? 'Lis ce mot **à voix haute**, puis vérifie.'} />
      </div>
      <p className="read-word" lang="ko">{ex.ko}</p>
      {!shown ? (
        <button type="button" className="btn btn-primary btn-block" onClick={() => { setShown(true); speak(ex.ko); }}>
          Vérifier
        </button>
      ) : (
        <>
          <div className="ex-center">
            <SpeakButton text={ex.ko} big />
            {ex.fr && <p className="ex-translation">{ex.fr}</p>}
          </div>
          {!locked && (
            <div className="sort-buckets">
              <button type="button" className="btn btn-secondary" onClick={() => onResult(false)}>Pas tout à fait</button>
              <button type="button" className="btn btn-primary" onClick={() => onResult(true)}>Je l’ai bien lu</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
