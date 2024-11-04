import { motion } from "framer-motion";

// const pVariants = {
//   init: (from) => ({
//     x: from === "left" ? -300 : from === "right" ? 300 : 0,
//     opacity: 0,
//   }),
//   whileInView: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       when: "beforeChildren",
//     },
//   },
// };

const slideDivVariants = {
  init: {
    scaleX: 1,
  },
  whileInView: (from) => ({
    originX: from,
    scaleX: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

export default function SlideParagraph({ children, from = "left" }) {
  return (
    <motion.p className="relative">
      {children}
      {/* SLIDE DIV */}
      <motion.span
        variants={slideDivVariants}
        custom={from}
        initial="init"
        whileInView="whileInView"
        className="block absolute top-0 left-0 w-full h-full bg-cream"
      ></motion.span>
    </motion.p>
  );
}
