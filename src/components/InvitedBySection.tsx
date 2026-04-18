import { motion } from "framer-motion";
import invitedByPhoto from "../../img4.jpeg";

const InvitedBySection = () => {
  return (
    <section className="px-6 pb-20">
      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-gold/15 bg-secondary/20"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/35" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 text-center md:p-12 md:text-left">
            <p className="font-script text-2xl text-gold-light md:text-3xl">Invited By</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream md:text-5xl">
              Rapolu Raghupathi
              <span className="block font-script text-gold md:text-4xl">&</span>
              Mounika
            </h2>
            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-cream/75 md:text-base">
              With love and blessings, they warmly invite you to join this joyful celebration and
              share in the wedding moments.
            </p>
          </div>

          <div className="relative h-full min-h-[420px]">
            <img
              src={invitedByPhoto}
              alt="Family photo of Rapolu Raghupathi and Mounika"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10 md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-background/15" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitedBySection;
