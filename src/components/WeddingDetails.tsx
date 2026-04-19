import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import ScratchReveal from "@/components/ScratchReveal";

const details = [
  { icon: Calendar, label: "Date", value: "Wednesday, April 29, 2026", type: "scratch" },
  { icon: Clock, label: "Time", value: "10:00 AM Onwards" },
  {
    icon: MapPin,
    label: "Venue",
    value: "Shiva Sai Function Hall",
    link: "https://maps.app.goo.gl/FB6XVCzbmT1C9GwF8?g_st=aw",
  },
];

const WeddingDetails = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="font-script text-2xl text-gold-light">Save the Date</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream md:text-4xl">
          Wedding Details
        </h2>
      </motion.div>

      <div className="mx-auto max-w-md space-y-4">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <item.icon className="h-5 w-5 text-gold" />
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {/* {item.label} */}
              </p>

              {item.type === "scratch" ? (
                <div className="mt-2">
                  <ScratchReveal />
                  <p className="mt-1 text-xs text-gray-400">Scratch to reveal</p>
                </div>
              ) : item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-col text-lg text-cream hover:text-gold font-display"
                >
                  <span>
                    {item.value} <span aria-hidden="true">&#8599;</span>
                  </span>
                  <span className="font-body text-sm text-gold-light">
                    Click here for location <span aria-hidden="true">&#8599;</span>
                  </span>
                </a>
              ) : (
                <p className="text-lg text-cream font-display">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WeddingDetails;
