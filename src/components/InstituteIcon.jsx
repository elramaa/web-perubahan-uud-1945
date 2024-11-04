import { motion } from "framer-motion";

const variants = {
  init: {
    x: "-50%",
    y: -100,
  },
  appear: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 8,
    },
  },
};

export default function InstituteIcon() {
  return (
    <motion.div
      className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-full flex px-8 py-4 gap-8"
      variants={variants}
      initial="init"
      animate="appear"
    >
      <img src="img/smansa.webp" alt="SMAN 1 Malang" className="h-8 md:h-12" />
      <div className="h-8 md:h-12 overflow-hidden">
        <img
          src="img/kurikulum-merdeka.webp"
          alt="Kurikulum Merdeka"
          className="object-cover h-full scale-[1.3] md:scale-[1.4]"
        />
      </div>
    </motion.div>
  );
}
