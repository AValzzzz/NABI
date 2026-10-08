const COLORS = ['#8cc265', '#f2c14e', '#e07a5f', '#9fd3e8', '#b9a3e3', '#f4a7a7'];

export function Confetti({ count = 40 }: { count?: number }) {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            background: COLORS[i % COLORS.length],
            animationDelay: `${Math.random() * 0.6}s`,
            animationDuration: `${1.6 + Math.random() * 1.4}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}
