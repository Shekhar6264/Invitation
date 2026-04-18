import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import ScratchReveal from "@/components/ScratchReveal";
const details = [
  { icon: Calendar, label: "Date", value: "Wednesday, April 29, 2026", type: "scratch" },
  { icon: Clock, label: "Time", value: "10:00 AM Onwards" },
  { icon: MapPin, label: "Venue", value: "Shiva Sai Function Hall", link: "https://maps.app.goo.gl/FB6XVCzbmT1C9GwF8?g_st=aw" },
];

const WeddingDetails = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="font-script text-2xl text-gold-light">Save the Date</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">
          Wedding Details
        </h2>
      </motion.div>

      <div className="max-w-md mx-auto space-y-4">
        {details.map((item, i) => (
          <motion.div
            key={item.label}
            className={`rounded-xl p-5 ${
              item.type === "scratch"
                ? "flex flex-col items-center justify-center text-center"
                : "glass-card flex items-center gap-4"
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            {item.type !== "scratch" && (
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {/* {item.label} */}
              </p>

              {/* 🎟️ SCRATCH CARD */}
              {item.type === "scratch" ? (
                <div className="mt-2">
                  <ScratchReveal />
                  <p className="text-xs text-gray-400 mt-1">Scratch to reveal ✨</p>
                </div>
              ) : item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="text-cream font-display text-lg hover:text-gold"
                >
                  {item.value} ↗
                </a>
              ) : (
                <p className="text-cream font-display text-lg">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WeddingDetails;