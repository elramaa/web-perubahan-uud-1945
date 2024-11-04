import BorderedText from "./BorderedText";
import { motion } from "framer-motion";

const variants = {
  init: {
    y: -500,
  },
  appear: {
    y: "-3rem",
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 8,
    },
  },
};

export default function Title() {
  return (
    <motion.div
      className="text-6xl md:text-8xl"
      variants={variants}
      initial="init"
      animate="appear"
    >
      <h1 className="font-rumble text-center text-white">
        <BorderedText borderWidth="lg">UUD NRI 1945</BorderedText>
      </h1>
      <h1 className="font-rumble text-center text-white">
        <BorderedText borderWidth="lg">Sebelum &amp; Sesudah</BorderedText>
      </h1>
      <h1 className="font-rumble text-center text-white">
        <BorderedText borderWidth="lg">Amandemen</BorderedText>
      </h1>
    </motion.div>
  );
}
