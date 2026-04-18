import { motion } from "framer-motion";

const colors = [
  // { name: "Royal Gold", hex: "#C9A84C", desc: "Traditional & Regal" },
  // { name: "Deep Maroon", hex: "#8B2252", desc: "Elegant & Rich" },
  // { name: "Ivory Cream", hex: "#F5F0E0", desc: "Soft & Classic" },
  // { name: "Blush Pink", hex: "#E8A0B5", desc: "Romantic & Warm" },
];

const DressCode = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">What to Wear</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">Dress Code</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-sm mx-auto">
          Traditional Indian attire preferred. Here's our color palette inspiration.
        </p>
      </motion.div>

      <div className="max-w-sm mx-auto grid grid-cols-2 gap-4">
        {colors.map((c, i) => (
          <motion.div
            key={c.name}
            className="glass-card rounded-xl p-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gold/30"
              style={{ backgroundColor: c.hex }}
            />
            <p className="font-display text-sm font-semibold text-cream">{c.name}</p>
            <p className="text-xs text-muted-foreground font-body mt-1">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DressCode;
