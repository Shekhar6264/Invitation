import { useRef, useEffect, useState } from "react";

const ScratchCircle = ({ value }: { value: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let isDrawing = false;

    const size = 80;
    const center = size / 2;

    // ✨ GOLD GRADIENT
    const gradient = ctx.createRadialGradient(
      center - 15,
      center - 15,
      5,
      center,
      center,
      center
    );

    gradient.addColorStop(0, "#fff4c2");
    gradient.addColorStop(0.3, "#f6d365");
    gradient.addColorStop(0.6, "#d4af37");
    gradient.addColorStop(0.85, "#a67c00");
    gradient.addColorStop(1, "#5c3d00");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(center, center, center, 0, Math.PI * 2);
    ctx.fill();

    // ✨ SHINE
    const shine = ctx.createRadialGradient(
      center - 10,
      center - 15,
      2,
      center - 10,
      center - 15,
      20
    );

    shine.addColorStop(0, "rgba(255,255,255,0.7)");
    shine.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = shine;
    ctx.beginPath();
    ctx.arc(center, center, center, 0, Math.PI * 2);
    ctx.fill();

    // 🔥 IMPROVED SCRATCH (LINE BASED)
    let lastX = 0;
    let lastY = 0;

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";

      ctx.lineWidth = 18; // BIG = easy scratch
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      lastX = x;
      lastY = y;
    };

    const getXY = (e: any) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
        y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top,
      };
    };

    const start = (e: any) => {
      isDrawing = true;
      const { x, y } = getXY(e);
      lastX = x;
      lastY = y;
    };

    const move = (e: any) => {
      if (!isDrawing) return;

      e.preventDefault(); // 🔥 mobile fix

      const { x, y } = getXY(e);
      scratch(x, y);
    };

    const end = () => {
      isDrawing = false;

      const pixels = ctx.getImageData(0, 0, size, size).data;
      let cleared = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) cleared++;
      }

      // 🔥 LOWER threshold = easier reveal
      if (cleared > pixels.length * 0.15) {
        setRevealed(true);
      }
    };

    // EVENTS
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", end);

    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("touchmove", move);
    canvas.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseup", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center bg-black/60 border border-yellow-400/30 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
      
      {/* VALUE */}
      <p className="text-gold text-lg font-display tracking-wide z-0">
        {value}
      </p>

      {/* SCRATCH */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          width={80}
          height={80}
          className="absolute inset-0 touch-none"
        />
      )}
    </div>
  );
};

const ScratchReveal = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-4">
      <ScratchCircle value="29th" />
      <ScratchCircle value="April" />
      <ScratchCircle value="2026" />
    </div>
  );
};

export default ScratchReveal;