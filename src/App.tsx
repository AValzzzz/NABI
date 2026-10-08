import { AppDataProvider, useApp } from './AppData';
import { useRoute } from './lib/router';
import { TabBar } from './components/Layout';
import { Mascot } from './components/Mascot';
import { Home } from './screens/Home';
import { Session } from './screens/Session';
import { Review } from './screens/Review';
import { Atelier } from './screens/Atelier';
import { Progress } from './screens/Progress';
import { Settings } from './screens/Settings';
import { Demo } from './screens/Demo';
import { Debug } from './screens/Debug';

function Shell() {
  const route = useRoute();
  const { ready, dueCount } = useApp();
  if (!ready) {
    return (
      <div className="splash">
        <Mascot size={110} className="bob" />
      </div>
    );
  }
  const focused = route === 'session' || route === 'demo';
  return (
    <div className={`app ${focused ? 'focused' : ''}`}>
      <main>
        {route === 'home' && <Home />}
        {route === 'session' && <Session key={location.hash} />}
        {route === 'review' && <Review />}
        {route === 'atelier' && <Atelier />}
        {route === 'progress' && <Progress />}
        {route === 'settings' && <Settings />}
        {route === 'demo' && <Demo />}
        {route === 'debug' && <Debug />}
      </main>
      {!focused && <TabBar route={route} badge={dueCount} />}
    </div>
  );
}

export function App() {
  return (
    <AppDataProvider>
      <Shell />
    </AppDataProvider>
  );
}
