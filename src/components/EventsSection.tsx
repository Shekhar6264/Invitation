import { motion } from "framer-motion";
import { Sparkles, Music, Palette, Heart } from "lucide-react";

const events = [
  {
    icon: Palette,
    name: "Haldi",
    date: "April 27, 2026",
    time: "7:00 PM",
    venue: "Family Residence",
    color: "from-yellow-600/20 to-amber-500/10",
  },
  {
    icon: Sparkles,
    name: "Mehndi",
    date: "April 28, 2026",
    time: "11:00 AM",
    venue: "Family Residence",
    color: "from-green-700/20 to-emerald-500/10",
  },
  // {
  //   icon: Music,
  //   name: "Sangeet",
  //   date: "Dec 13, 2026",
  //   time: "7:00 PM",
  //   venue: "Grand Ballroom",
  //   color: "from-pink-600/20 to-rose-500/10",
  // },
  {
    icon: Heart,
    name: "Wedding",
    date: "April 29, 2026",
    time: "10:31 AM",
    venue: "Shiva sai fuction hall",
    color: "from-red-700/20 to-orange-500/10",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">Celebrations</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">Wedding Events</h2>
      </motion.div>

      <div className="max-w-md mx-auto space-y-4">
        {events.map((event, i) => (
          <motion.div
            key={event.name}
            className={`glass-card rounded-xl p-5 bg-gradient-to-r ${event.color} relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                <event.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-cream">{event.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{event.date} · {event.time}</p>
                <p className="text-sm text-gold-light font-body mt-1">{event.venue}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
