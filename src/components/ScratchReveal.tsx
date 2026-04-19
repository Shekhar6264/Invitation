import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 140;
const SCRATCH_DISTANCE_THRESHOLD = 12;

const ScratchReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDrawing = false;
    let hasScratched = false;
    let lastX = 0;
    let lastY = 0;

    const drawScratchCover = () => {
      ctx.clearRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

      const baseGradient = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
      baseGradient.addColorStop(0, "#f8e29e");
      baseGradient.addColorStop(0.28, "#efc04a");
      baseGradient.addColorStop(0.62, "#c68f17");
      baseGradient.addColorStop(1, "#6e4807");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

      const shimmer = ctx.createLinearGradient(0, 0, CARD_WIDTH, 0);
      shimmer.addColorStop(0, "rgba(255,255,255,0)");
      shimmer.addColorStop(0.2, "rgba(255,255,255,0.08)");
      shimmer.addColorStop(0.5, "rgba(255,255,255,0.34)");
      shimmer.addColorStop(0.8, "rgba(255,255,255,0.08)");
      shimmer.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = shimmer;
      ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

      ctx.save();
      ctx.globalAlpha = 0.12;
      for (let i = -CARD_HEIGHT; i < CARD_WIDTH; i += 18) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + CARD_HEIGHT, CARD_HEIGHT);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#fff7d6";
        ctx.stroke();
      }
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 0.1;
      for (let i = 12; i < CARD_WIDTH; i += 28) {
        ctx.beginPath();
        ctx.arc(i, 24 + ((i / 28) % 2) * 24, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#5c3800";
        ctx.fill();
      }
      ctx.restore();
    };

    drawScratchCover();

    const checkReveal = () => {
      const pixels = ctx.getImageData(0, 0, CARD_WIDTH, CARD_HEIGHT).data;
      let cleared = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) cleared++;
      }

      if (cleared > CARD_WIDTH * CARD_HEIGHT * 0.04) {
        setRevealed(true);
      }
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 32;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      lastX = x;
      lastY = y;
      checkReveal();
    };

    const getXY = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const point = "touches" in e ? e.touches[0] : e;

      return {
        x: ((point.clientX - rect.left) / rect.width) * CARD_WIDTH,
        y: ((point.clientY - rect.top) / rect.height) * CARD_HEIGHT,
      };
    };

    const start = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      hasScratched = false;
      const { x, y } = getXY(e);
      lastX = x;
      lastY = y;
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;

      e.preventDefault();

      const { x, y } = getXY(e);
      const distance = Math.hypot(x - lastX, y - lastY);

      if (!hasScratched && distance < SCRATCH_DISTANCE_THRESHOLD) {
        return;
      }

      hasScratched = true;
      scratch(x, y);
    };

    const end = () => {
      isDrawing = false;
      hasScratched = false;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mouseleave", end);

    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseup", end);
      canvas.removeEventListener("mouseleave", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-4 flex justify-center"
    >
      <div className="relative w-full max-w-[300px] overflow-hidden rounded-[28px] border border-yellow-300/30 bg-black/55 px-6 py-7 text-center shadow-[0_0_35px_rgba(212,175,55,0.22)]">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-yellow-200/70 to-transparent"
          animate={revealed ? { opacity: 0 } : { opacity: [0.25, 0.8, 0.25], scaleX: [0.9, 1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <p className="text-[11px] uppercase tracking-[0.35em] text-gold-light/80">
          Wedding Date
        </p>
        <p className="mt-4 text-3xl font-display text-gold md:text-4xl">
          29th April 2026
        </p>

        {!revealed && (
          <>
            <canvas
              ref={canvasRef}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              className="absolute inset-0 h-full w-full touch-none cursor-grab active:cursor-grabbing"
            />
            <motion.div
              className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-yellow-100/15 bg-black/45 px-4 py-2 text-sm font-medium text-cream shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-[2px]"
              animate={revealed ? { opacity: 0 } : { opacity: [0.72, 1, 0.72], y: [0, -3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              <span className="text-sm tracking-[0.08em]">Scratch to reveal</span>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ScratchReveal;
