import { useState } from 'react';
import type { Block, Role } from '../content/types';
import { speak } from '../lib/speech';
import { decompose, isVowel } from '../lib/hangul';
import { GlossarySheet, RichText, SpeakButton } from './RichText';
import { Mascot, type Stage } from './Mascot';
import { StrokeOrder } from './StrokeOrder';
import { ClockBlock } from './Clock';

export const ROLE_LABEL: Record<Role, string> = {
  topic: 'Thème',
  subject: 'Sujet',
  object: 'Objet',
  verb: 'Verbe',
  place: 'Lieu',
  time: 'Temps',
  adverb: 'Manière',
  other: '',
};

export function BlockView({ block, stage }: { block: Block; stage: Stage }) {
  switch (block.type) {
    case 'title':
      return <h2 className="b-title">{block.text}</h2>;
    case 'text':
      return <RichText text={block.text} className="b-text" />;
    case 'tip':
      return (
        <div className="b-tip">
          <Mascot stage={stage} mood={block.mood ?? 'thinking'} size={56} />
          <RichText text={block.text} as="div" className="b-tip-text" />
        </div>
      );
    case 'letters':
      return (
        <div className="b-letters">
          {block.items.map((l) => (
            <button type="button" key={l.char} className="letter-card" onClick={() => speak(l.speak ?? l.char)}>
              <span className="letter-char" lang="ko">{l.char}</span>
              {l.roman && <span className="roman">[{l.roman}]</span>}
              {l.mnemonic && <small>{l.mnemonic}</small>}
            </button>
          ))}
        </div>
      );
    case 'compose':
      return (
        <div className="b-compose">
          {block.items.map((c) => (
            <button type="button" key={c.result} className="compose-row" onClick={() => speak(c.result)} lang="ko">
              {c.parts.map((p, i) => (
                <span key={i} className="compose-part-wrap">
                  {i > 0 && <span className="compose-op">+</span>}
                  <span className={`compose-part ${isVowel(p) ? 'vowel' : 'cons'}`}>{p}</span>
                </span>
              ))}
              <span className="compose-op">=</span>
              <span className="compose-result">{c.result}</span>
              {c.roman && <span className="roman">[{c.roman}]</span>}
            </button>
          ))}
        </div>
      );
    case 'strokes':
      return (
        <div className="b-strokes">
          {block.chars.map((c) => <StrokeOrder key={c} char={c} label say={c} />)}
        </div>
      );
    case 'liaison':
      return (
        <div className="b-compose">
          {block.items.map((l) => <LiaisonRow key={l.written} {...l} />)}
        </div>
      );
    case 'clock':
      return <ClockBlock h={block.h} m={block.m} interactive={block.interactive} />;
    case 'timeline':
      return <Timeline block={block} />;
    case 'breakdown':
      return <Breakdown block={block} />;
    case 'dialog':
      return <Dialog block={block} />;
    case 'table':
      return (
        <div className="b-table-wrap">
          <table className="b-table">
            <thead><tr>{block.head.map((h) => <th key={h}><RichText text={h} as="span" /></th>)}</tr></thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} as="span" /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function LiaisonRow({ written, spoken, fr }: { written: string; spoken: string; fr?: string }) {
  const w = [...written];
  const sp = [...spoken];
  const moves = w.flatMap((c, i) => {
    const final = decompose(c)?.final;
    return final && decompose(w[i + 1] ?? '')?.initial === 'ㅇ' ? [{ from: i, jamo: decompose(sp[i + 1] ?? '')?.initial ?? final }] : [];
  });
  const from = new Set(moves.map((m) => m.from));
  return (
    <button type="button" className="compose-row liaison" onClick={() => speak(written)} lang="ko">
      <span>{w.map((c, i) => <span key={i} className={from.has(i) ? 'li-from' : ''}>{c}</span>)}</span>
      <span className="compose-op">→</span>
      <span className="li-spoken">[{sp.map((c, i) => <span key={i} className={from.has(i - 1) ? 'li-to' : ''}>{c}</span>)}]</span>
      <small className="li-note">{moves.map((m) => `${m.jamo} glisse`).join(' · ')}{fr ? ` · ${fr}` : ''}</small>
    </button>
  );
}

function Breakdown({ block }: { block: Extract<Block, { type: 'breakdown' }> }) {
  const [gloss, setGloss] = useState<string | null>(null);
  const full = block.segments.map((s) => s.ko + (s.particle?.ko ?? '')).join(' ');
  return (
    <div className="b-breakdown">
      <div className="bd-row">
        {block.segments.map((s, i) => (
          <div key={i} className={`bd-seg role-${s.role}`}>
            <span className="bd-role">{ROLE_LABEL[s.role]}</span>
            <span className="bd-ko" lang="ko">
              <button type="button" onClick={() => speak(s.ko + (s.particle?.ko ?? ''))}>{s.ko}</button>
              {s.particle && (
                <button type="button" className="tok-particle" onClick={() => setGloss(s.particle!.key)}>{s.particle.ko}</button>
              )}
            </span>
            <span className="bd-gloss">{s.gloss}</span>
          </div>
        ))}
      </div>
      <div className="bd-translation">
        <SpeakButton text={full} />
        <span>{block.translation}</span>
      </div>
      {block.note && <RichText text={block.note} className="bd-note" />}
      <GlossarySheet entryKey={gloss} onClose={() => setGloss(null)} />
    </div>
  );
}

function Timeline({ block }: { block: Extract<Block, { type: 'timeline' }> }) {
  const [at, setAt] = useState(block.start ?? 0);
  const p = block.points[at];
  return (
    <div className="b-timeline">
      <div className="tl-road">
        {block.points.map((pt, i) => (
          <button
            type="button"
            key={i}
            className={`tl-stop ${i === at ? 'active' : ''}`}
            onClick={() => { setAt(i); speak(pt.ko); }}
          >
            <span className="tl-dot" />
            <RichText text={pt.label} as="span" />
          </button>
        ))}
      </div>
      <button type="button" className="tl-card" onClick={() => speak(p.ko)}>
        <span lang="ko">{p.ko}</span>
        {p.fr && <small>{p.fr}</small>}
      </button>
    </div>
  );
}

function Dialog({ block }: { block: Extract<Block, { type: 'dialog' }> }) {
  const [showFr, setShowFr] = useState(false);
  const speakers = [...new Set(block.lines.map((l) => l.who))];
  return (
    <div className="b-dialog">
      {block.lines.map((l, i) => (
        <button type="button" key={i} className={`bubble ${speakers.indexOf(l.who) % 2 ? 'right' : 'left'}`} onClick={() => speak(l.ko)}>
          <span className="who">{l.who}</span>
          <span lang="ko">{l.ko}</span>
          {showFr && l.fr && <small>{l.fr}</small>}
        </button>
      ))}
      {block.lines.some((l) => l.fr) && (
        <button type="button" className="link" onClick={() => setShowFr((v) => !v)}>
          {showFr ? 'Masquer la traduction' : 'Afficher la traduction'}
        </button>
      )}
    </div>
  );
}
