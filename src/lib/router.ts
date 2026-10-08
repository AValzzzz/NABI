import { useEffect, useState } from 'react';

export type Route = 'home' | 'session' | 'review' | 'atelier' | 'progress' | 'settings' | 'demo' | 'debug';

const parse = (): Route => {
  const r = location.hash.replace(/^#\/?/, '').split('?')[0];
  return (['session', 'review', 'atelier', 'progress', 'settings', 'demo', 'debug'] as Route[]).includes(r as Route) ? (r as Route) : 'home';
};

export function useRoute(): Route {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => {
      setRoute(parse());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const go = (r: Route) => {
  location.hash = r === 'home' ? '/' : `/${r}`;
};

export const routeParam = (name: string) => new URLSearchParams(location.hash.split('?')[1] ?? '').get(name);
