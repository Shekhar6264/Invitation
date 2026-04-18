import { motion } from "framer-motion";
import couplePhoto1 from "../../img1.jpeg";
import couplePhoto2 from "../../img2.jpeg";
import couplePhoto3 from "../../img3.jpeg";

const images = [
  { src: couplePhoto1, alt: "Bride and groom portrait" },
  { src: couplePhoto2, alt: "Bride and groom side pose" },
  { src: couplePhoto3, alt: "Bride and groom close embrace" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">Bride & Groom</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">Together Moments</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl border border-gold/10 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={512}
              height={768}
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-sm text-cream font-body">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
