import { motion } from "framer-motion";
import BorderedText from "./BorderedText";

const headingVariants = {
  init: (align) => ({
    x: align === "left" ? -300 : align === "right" ? 300 : 0,
  }),
  appear: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Section({ title, children, align = "left" }) {
  return (
    <section
      className={`w-3/5 mb-20 text-cream ${
        align == "right" ? "place-self-end" : ""
      }`}
    >
      <motion.h2
        variants={headingVariants}
        custom={align}
        initial="init"
        whileInView="appear"
        className={`w-max uppercase bg-cream py-4 font-rumble text-white text-4xl mb-8 px-20 ${
          align == "right"
            ? "place-self-end rounded-l-full"
            : align == "left"
            ? "rounded-r-full"
            : ""
        }`}
      >
        <BorderedText
          className="-translate-y-2.5 block text-right"
          borderWidth="sm"
        >
          {title}
        </BorderedText>
      </motion.h2>
      <div className="px-8">{children}</div>
    </section>
  );
}
