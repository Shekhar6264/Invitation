import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">We'd Love to See You</p>
        {/* <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">RSVP</h2> */}
      </motion.div>

      {/* <motion.div
        className="max-w-sm mx-auto glass-card rounded-2xl p-6 glow-gold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {submitted ? (
          <motion.div
            className="text-center py-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-gold" />
            </div>
            <p className="font-display text-xl text-cream">Thank You!</p>
            <p className="text-sm text-muted-foreground font-body mt-2">We can't wait to celebrate with you.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body block mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary/50 border border-gold/20 rounded-lg px-4 py-3 text-cream font-body focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body block mb-3">Will you attend?</label>
              <div className="flex gap-3">
                {["Joyfully Accepts", "Regretfully Declines"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAttending(opt)}
                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-body transition-all ${
                      attending === opt
                        ? "bg-gold/20 border-gold text-cream"
                        : "border-gold/20 text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!name || !attending}
              className="w-full py-3 rounded-lg gradient-gold text-primary-foreground font-display text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity hover:opacity-90"
            >
              <Send className="w-4 h-4" />
              Send RSVP
            </button>
          </form>
        )}
      </motion.div> */}

      {/* Footer */}
      <motion.div
        className="text-center mt-16 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-3xl text-gold-light">Swetha & Sai</p>
        <p className="text-sm text-muted-foreground font-body mt-2 tracking-[0.2em] uppercase">April 29, 2026</p>
        <div className="w-16 h-px gradient-gold mx-auto mt-4" />
      </motion.div>
    </section>
  );
};

export default RSVPSection;
