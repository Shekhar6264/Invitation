import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(ellipse, hsl(350 60% 75% / 0.8), hsl(38 72% 50% / 0.4))`,
              borderRadius: "50% 0 50% 50%",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
