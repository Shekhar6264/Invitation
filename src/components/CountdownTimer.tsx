import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-29T09:15:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING_DATE - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">Counting Down To</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">The Big Day</h2>
      </motion.div>

      <div className="max-w-sm mx-auto flex justify-center gap-3">
        {units.map((u, i) => (
          <motion.div
            key={u.label}
            className="glass-card rounded-xl p-4 w-20 text-center glow-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.p
              className="font-display text-3xl md:text-4xl font-bold text-gold"
              key={u.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(u.value).padStart(2, "0")}
            </motion.p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mt-1">{u.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CountdownTimer;
