import { useState } from 'react';
import { go } from '../lib/router';
import { speak } from '../lib/speech';
import { Header } from '../components/Layout';
import { HangulKeyboard } from '../components/HangulKeyboard';
import { TraceCanvas } from '../components/TraceCanvas';
import { Speaker } from '../components/Icons';

const CONSONANTS = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅃㅆㅉ'.split('');
const VOWELS = 'ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔ'.split('');

type Tab = 'keyboard' | 'write' | 'demo';

export function Atelier() {
  const [tab, setTab] = useState<Tab>('write');
  return (
    <div className="screen">
      <Header title="Atelier" subtitle="S’entraîner librement" />
      <div className="segmented">
        {([['write', 'Écriture'], ['keyboard', 'Clavier'], ['demo', 'Démo']] as const).map(([k, label]) => (
          <button type="button" key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>
      {tab === 'write' && <Write />}
      {tab === 'keyboard' && <Keyboard />}
      {tab === 'demo' && (
        <div className="pad center-col">
          <p>Aperçu de tous les types d’explications et d’exercices des futures leçons.</p>
          <button type="button" className="btn btn-primary btn-block" onClick={() => go('demo')}>Lancer la démo</button>
        </div>
      )}
    </div>
  );
}

function Write() {
  const [char, setChar] = useState('ㄱ');
  const [model, setModel] = useState(true);
  const [custom, setCustom] = useState('');
  return (
    <div className="pad">
      <div className="jamo-picker" lang="ko">
        {[...CONSONANTS, ...VOWELS].map((c) => (
          <button type="button" key={c} className={c === char ? 'on' : ''} onClick={() => setChar(c)}>{c}</button>
        ))}
      </div>
      <div className="row-between">
        <label className="switch">
          <input type="checkbox" checked={model} onChange={(e) => setModel(e.target.checked)} />
          <span>Modèle visible</span>
        </label>
        <button type="button" className="btn btn-ghost" onClick={() => speak(char)}><Speaker size={18} /> Écouter</button>
      </div>
      <TraceCanvas char={char} showModel={model} />
      <details className="custom-char">
        <summary>Tracer une syllabe de ton choix</summary>
        <div className="type-field small" lang="ko">{custom}<span className="caret" /></div>
        <HangulKeyboard value={custom} onChange={setCustom} onSubmit={() => custom.trim() && setChar(custom.trim().slice(-1))} submitLabel="Tracer" />
      </details>
    </div>
  );
}

function Keyboard() {
  const [text, setText] = useState('');
  return (
    <div className="pad">
      <p className="muted small">Tape des jamos : ils s’assemblent automatiquement en blocs syllabiques.</p>
      <div className="type-field" lang="ko">{text}<span className="caret" /></div>
      <div className="row-between">
        <button type="button" className="btn btn-ghost" onClick={() => setText('')} disabled={!text}>Tout effacer</button>
        <button type="button" className="btn btn-secondary" onClick={() => speak(text)} disabled={!text.trim()}><Speaker size={18} /> Écouter</button>
      </div>
      <HangulKeyboard value={text} onChange={setText} />
    </div>
  );
}
