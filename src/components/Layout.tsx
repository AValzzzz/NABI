import type { ReactNode } from 'react';
import { go, type Route } from '../lib/router';
import { useApp } from '../AppData';
import { Cards, Chart, Gear, Home, Pencil } from './Icons';

const BG_WORDS = ['공부', '가나', '공부', '가나다'];

export function Header({ title = 'NABI', subtitle = 'Apprendre le coréen pas à pas', children }: { title?: string; subtitle?: string; children?: ReactNode }) {
  const { debug, day } = useApp();
  return (
    <header className="header">
      {debug && <button type="button" className="debug-chip" onClick={() => go('debug')}>🧪 TEST · {day.slice(5)}</button>}
      <div className="header-bg" aria-hidden="true">
        {BG_WORDS.map((w, i) => <span key={i} className={`hw hw-${i}`}>{w}</span>)}
      </div>
      <button type="button" className="header-gear" onClick={() => go('settings')} aria-label="Réglages"><Gear /></button>
      <h1>{title}{title === 'NABI' && <sup lang="ko">나비</sup>}</h1>
      <p>{subtitle}</p>
      {children}
    </header>
  );
}

export function TopBar({ title, onBack, right }: { title: string; onBack: () => void; right?: ReactNode }) {
  return (
    <div className="topbar">
      <button type="button" className="icon-btn" onClick={onBack} aria-label="Retour">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M15 18 9 12l6-6" /></svg>
      </button>
      <h2>{title}</h2>
      <div className="topbar-right">{right}</div>
    </div>
  );
}

const TABS: { route: Route; label: string; Icon: () => ReactNode }[] = [
  { route: 'home', label: 'Accueil', Icon: () => <Home /> },
  { route: 'review', label: 'Révisions', Icon: () => <Cards /> },
  { route: 'atelier', label: 'Atelier', Icon: () => <Pencil /> },
  { route: 'progress', label: 'Progrès', Icon: () => <Chart /> },
];

export function TabBar({ route, badge }: { route: Route; badge?: number }) {
  return (
    <nav className="tabbar">
      {TABS.map(({ route: r, label, Icon }) => (
        <button type="button" key={r} className={`tab ${route === r ? 'active' : ''}`} onClick={() => go(r)}>
          <Icon />
          <span>{label}</span>
          {r === 'review' && !!badge && <b className="badge">{badge > 99 ? '99+' : badge}</b>}
        </button>
      ))}
    </nav>
  );
}
