import { motion } from "framer-motion";
import coupleImg from "@/assets/couple-hero.jpg";
import couplePhoto1 from "../../img1.jpeg";
import couplePhoto3 from "../../img3.jpeg";

const CoupleIntro = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0">
        <img src={coupleImg} alt="" className="h-full w-full object-cover opacity-30" width={800} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-4 font-script text-2xl text-gold-light md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          className="my-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-5xl font-bold tracking-wide text-cream text-shadow-gold md:text-7xl">
            Swetha
          </h1>
          <p className="my-4 font-script text-4xl text-gold md:text-5xl">&</p>
          <h1 className="font-display text-5xl font-bold tracking-wide text-cream text-shadow-gold md:text-7xl">
            Sai
          </h1>
        </motion.div>

        <motion.div
          className="mx-auto my-6 h-px w-24 gradient-gold"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p
          className="font-body text-lg italic leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          "Two souls, one journey - bound by love, blessed by the stars."
        </motion.p>

        <motion.p
          className="mt-8 font-script text-xl text-gold-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Request the honour of your presence
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[couplePhoto3, couplePhoto1].map((photo, index) => (
            <div
              key={photo}
              className="overflow-hidden rounded-3xl border border-gold/20 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <img
                src={photo}
                alt={index === 0 ? "Bride and groom portrait" : "Bride and groom together"}
                loading="lazy"
                width={512}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleIntro;
