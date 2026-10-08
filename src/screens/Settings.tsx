import { useEffect, useRef, useState } from 'react';
import { useApp } from '../AppData';
import { go } from '../lib/router';
import { exportBackup, importBackup, resetAll, type Backup } from '../lib/db';
import { koreanVoices, speak, speechSupported, voicesReady } from '../lib/speech';
import { today } from '../lib/dates';
import { TopBar } from '../components/Layout';
import { Sheet } from '../components/Sheet';

export function Settings() {
  const app = useApp();
  const { settings, updateSettings } = app;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(koreanVoices());
  const [msg, setMsg] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const taps = useRef(0);
  const file = useRef<HTMLInputElement>(null);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone;

  useEffect(() => void voicesReady().then(setVoices), []);

  const doExport = async () => {
    const data = JSON.stringify(await exportBackup());
    const name = `nabi-sauvegarde-${today()}.json`;
    const blob = new Blob([data], { type: 'application/json' });
    const f = new File([blob], name, { type: 'application/json' });
    if (navigator.canShare?.({ files: [f] })) {
      try {
        await navigator.share({ files: [f], title: name });
        return;
      } catch (e) {
        if ((e as Error).name === 'AbortError') return;
      }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  };

  const doImport = async (f: File) => {
    try {
      await importBackup(JSON.parse(await f.text()) as Backup);
      await app.refresh();
      setMsg('Sauvegarde restaurée ✓');
    } catch (e) {
      setMsg(`Erreur : ${(e as Error).message}`);
    }
  };

  return (
    <div className="screen">
      <TopBar title="Réglages" onBack={() => history.length > 1 ? history.back() : go('home')} />
      <div className="pad settings">
        <section className="paper-card">
          <h3>Voix coréenne</h3>
          {!speechSupported() ? (
            <p className="warn">La synthèse vocale n’est pas disponible sur ce navigateur.</p>
          ) : voices.length === 0 ? (
            <p className="warn">Aucune voix coréenne trouvée. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Coréen, puis télécharge « Yuna ».</p>
          ) : (
            <label className="field">
              <span>Voix</span>
              <select value={settings.voiceURI ?? ''} onChange={(e) => void updateSettings({ voiceURI: e.target.value || undefined })}>
                <option value="">Automatique</option>
                {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}
              </select>
            </label>
          )}
          <label className="field">
            <span>Vitesse : {settings.rate.toFixed(2)}×</span>
            <input type="range" min={0.5} max={1.2} step={0.05} value={settings.rate} onChange={(e) => void updateSettings({ rate: Number(e.target.value) })} />
          </label>
          <button type="button" className="btn btn-secondary" onClick={() => speak('안녕하세요')}>Tester la voix</button>
          <p className="muted small">Astuce : si tu n’entends rien, vérifie que le bouton silencieux de l’iPhone est désactivé.</p>
        </section>

        <section className="paper-card">
          <h3>Sons</h3>
          <label className="switch">
            <input type="checkbox" checked={settings.sounds} onChange={(e) => void updateSettings({ sounds: e.target.checked })} />
            <span>Effets sonores (bonne / mauvaise réponse)</span>
          </label>
        </section>

        <section className="paper-card">
          <h3>Sauvegarde</h3>
          <p className="muted small">Ta progression est stockée uniquement sur cet appareil. Exporte-la régulièrement (Fichiers / iCloud Drive).</p>
          <div className="row-gap">
            <button type="button" className="btn btn-primary" onClick={() => void doExport()}>Exporter</button>
            <button type="button" className="btn btn-secondary" onClick={() => file.current?.click()}>Importer</button>
          </div>
          <input ref={file} type="file" accept="application/json,.json" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) void doImport(f); e.target.value = ''; }} />
          {msg && <p className="small">{msg}</p>}
        </section>

        {!standalone && (
          <section className="paper-card">
            <h3>Installer l’application</h3>
            <p className="small">Dans Safari : bouton <b>Partager</b> → <b>Sur l’écran d’accueil</b>. NABI fonctionnera ensuite hors ligne, en plein écran.</p>
          </section>
        )}

        <section className="paper-card">
          <h3>Zone sensible</h3>
          <button type="button" className="btn btn-danger" onClick={() => setConfirmReset(true)}>Tout réinitialiser</button>
        </section>

        {app.debug && (
          <section className="paper-card">
            <h3>🧪 Mode test</h3>
            <button type="button" className="btn btn-secondary" onClick={() => go('debug')}>Ouvrir le mode test</button>
          </section>
        )}

        {}
        <p className="muted small center" onClick={() => { if (++taps.current >= 5) go('debug'); }}>NABI v{__APP_VERSION__}</p>
      </div>

      <Sheet open={confirmReset} onClose={() => setConfirmReset(false)}>
        <h3>Tout effacer ?</h3>
        <p>Leçons, cartes et statistiques seront supprimées. Pense à exporter une sauvegarde avant.</p>
        <button type="button" className="btn btn-danger btn-block" onClick={async () => { await resetAll(); await app.refresh(); setConfirmReset(false); go('home'); }}>
          Oui, tout effacer
        </button>
        <button type="button" className="btn btn-ghost btn-block" onClick={() => setConfirmReset(false)}>Annuler</button>
      </Sheet>
    </div>
  );
}
