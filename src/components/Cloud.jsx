import { motion } from "framer-motion";

const variants = {
  left: {
    init: {
      x: -500,
      y: "-50%",
    },
    appear: {
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 5,
      },
    },
  },
  right: {
    init: {
      x: 500,
      y: "-50%",
    },
    appear: {
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 5,
      },
    },
  },
};

export default function Cloud() {
  return (
    <>
      <motion.div
        className="absolute top-[65%] md:top-1/2 -translate-y-1/2 -left-20 lg:-left-32 w-[50vw] md:w-[30vw]"
        variants={variants.left}
        initial="init"
        animate="appear"
        whileInView="appear"
      >
        <img src="svg/cloud1.svg" alt="Cloud" className="rotate-[15deg]" />
        <img src="svg/cloud2.svg" alt="Cloud" />
      </motion.div>
      <motion.div
        className="absolute top-[65%] md:top-1/2 -translate-y-1/2 -right-20 lg:-right-32 w-[50vw] md:w-[30vw]"
        style={{ rotateY: 180 }}
        variants={variants.right}
        initial="init"
        animate="appear"
        whileInView="appear"
      >
        <img src="svg/cloud1.svg" alt="Cloud" className="rotate-[15deg]" />
        <img src="svg/cloud2.svg" alt="Cloud" />
      </motion.div>
    </>
  );
}
