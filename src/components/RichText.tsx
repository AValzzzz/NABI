import { Fragment, useState, type ReactNode } from 'react';
import { speak } from '../lib/speech';
import { GLOSSARY } from '../content/glossary';
import { Sheet } from './Sheet';
import { Speaker } from './Icons';

const TOKEN = /\[\[(.+?)\]\]|\*\*(.+?)\*\*/g;

export function RichText({ text, as: Tag = 'p', className }: { text: string; as?: 'p' | 'span' | 'div'; className?: string }) {
  const [glossKey, setGlossKey] = useState<string | null>(null);
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[2] !== undefined) out.push(<strong key={m.index}>{m[2]}</strong>);
    else out.push(<Token key={m.index} raw={m[1]} onParticle={setGlossKey} />);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));

  return (
    <>
      <Tag className={className}>{out}</Tag>
      <GlossarySheet entryKey={glossKey} onClose={() => setGlossKey(null)} />
    </>
  );
}

function Token({ raw, onParticle }: { raw: string; onParticle: (key: string) => void }) {
  const [ko, ...attrs] = raw.split('|');
  const attr = Object.fromEntries(attrs.map((a) => [a.slice(0, a.indexOf(':')), a.slice(a.indexOf(':') + 1)]));

  if (attr.p) {
    return (
      <button type="button" className="tok tok-particle" lang="ko" onClick={() => onParticle(attr.p)}>
        {ko}
      </button>
    );
  }
  const sub = attr.r ?? attr.t;
  return (
    <button type="button" className={`tok tok-ko ${sub ? 'tok-sub' : ''}`} lang="ko" onClick={() => speak(ko)}>
      <span>{ko}</span>
      {sub && <small className={attr.r ? 'roman' : 'gloss'}>{attr.r ? `[${sub}]` : sub}</small>}
    </button>
  );
}

export function GlossarySheet({ entryKey, onClose }: { entryKey: string | null; onClose: () => void }) {
  const entry = entryKey ? GLOSSARY[entryKey] : undefined;
  return (
    <Sheet open={!!entryKey} onClose={onClose}>
      {entry ? (
        <div className="gloss">
          <h3>{entry.title}</h3>
          {entry.forms && <p className="gloss-forms" lang="ko">{entry.forms}</p>}
          <RichText text={entry.body} />
          {entry.examples?.map((ex) => (
            <Fragment key={ex.ko}>
              <button type="button" className="gloss-ex" onClick={() => speak(ex.ko)}>
                <span lang="ko"><Speaker size={16} /> {ex.ko}</span>
                <small>{ex.fr}</small>
              </button>
            </Fragment>
          ))}
        </div>
      ) : (
        <p>Explication à venir.</p>
      )}
      <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
        Compris !
      </button>
    </Sheet>
  );
}

export function SpeakButton({ text, label, big }: { text: string; label?: string; big?: boolean }) {
  return (
    <button type="button" className={`speak ${big ? 'speak-big' : ''}`} onClick={() => speak(text)} aria-label={`Écouter ${text}`}>
      <Speaker size={big ? 28 : 18} />{label && <span>{label}</span>}
    </button>
  );
}
