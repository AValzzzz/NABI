import { useEffect, useState } from 'react';
import { Mascot, type Stage } from './Mascot';

export const PASS = 0.6;

export function Setback({ stage, size = 140 }: { stage: Stage; size?: number }) {
  const [cheer, setCheer] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setCheer(true), 2400);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="setback">
      <Mascot key={cheer ? 'cheer' : 'sad'} stage={stage} mood={cheer ? 'encourage' : 'sad'} size={size} />
      <p key={cheer ? 'c' : 's'} className="bubble-say setback-say">
        {cheer ? 'Ce n’est pas grave, tu feras mieux la prochaine fois !' : 'Oh non… ce n’était pas terrible cette fois.'}
      </p>
    </div>
  );
}
