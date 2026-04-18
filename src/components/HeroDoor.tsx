import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weddingDoor from "@/assets/wedding-door.jpg";

interface HeroDoorProps {
  onOpen: () => void;
}

const HeroDoor = ({ onOpen }: HeroDoorProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
  };

  return (
    <AnimatePresence>
      {!open ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden cursor-pointer"
          onClick={handleOpen}
          exit={{ opacity: 0 }}
        >
          {/* 🏛️ FULL DOOR BACKGROUND */}
          <img
            src={weddingDoor}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 🌑 DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ✨ CENTER LIGHT LEAK */}
          <motion.div
            className="absolute left-1/2 top-0 w-[3px] h-full bg-yellow-300 blur-sm"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transform: "translateX(-50%)" }}
          />

          {/* TEXT */}
          <div className="absolute bottom-16 w-full text-center text-white">
            <p className="text-3xl font-serif text-yellow-300">
              You're Invited
            </p>
            <p className="text-xs tracking-[0.4em] mt-2 uppercase">
              Tap to Open
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div className="fixed inset-0 z-[100] bg-black overflow-hidden">
          {/* 💡 INSIDE LIGHT */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,215,120,0.8), black)",
            }}
          />

          {/* 🚪 LEFT PANEL */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full overflow-hidden"
            style={{
              transformOrigin: "left center",
              perspective: 2500,
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -115 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img
              src={weddingDoor}
              className="w-full h-full object-cover object-left"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />

            {/* shadow */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* 🚪 RIGHT PANEL */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full overflow-hidden"
            style={{
              transformOrigin: "right center",
              perspective: 2500,
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 115 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img
              src={weddingDoor}
              className="w-full h-full object-cover object-right"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />

            {/* shadow */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* ✨ LIGHT BURST */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 1.5 }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,120,0.9), transparent 70%)",
            }}
          />

          {/* 🎬 TRANSITION */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            onAnimationComplete={onOpen}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroDoor;