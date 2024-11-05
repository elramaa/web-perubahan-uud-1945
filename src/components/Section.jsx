import { motion } from "framer-motion";
import BorderedText from "./BorderedText";

const headingVariants = {
  init: (align) => ({
    x: align === "left" ? "-100%" : align === "right" ? "100%" : 0,
  }),
  appear: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const alignClassName = (align, ifLeft, ifRight) => {
  if (align == "left") return ifLeft;
  else if (align == "right") return ifRight;
};

export default function Section({ title, children, align = "left" }) {
  return (
    <section className={`w-full mb-20 text-cream `}>
      <motion.h2
        variants={headingVariants}
        custom={align}
        initial="init"
        whileInView="appear"
        className={`w-max uppercase bg-cream py-4 font-rumble text-white text-2xl lg:text-4xl mb-8 px-20 ${alignClassName(
          align,
          "rounded-r-full",
          "ml-auto rounded-l-full"
        )}`}
      >
        <BorderedText
          className="-translate-y-0.5 lg:-translate-y-2.5 block"
          borderWidth="sm"
        >
          {title}
        </BorderedText>
      </motion.h2>
      <div
        className={`flex lg:grid px-8 flex-col ${alignClassName(
          align,
          "lg:grid-cols-[3fr_2fr]",
          "lg:grid-cols-[2fr_3fr]"
        )}`}
      >
        {children}
      </div>
    </section>
  );
}
