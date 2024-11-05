import { motion } from "framer-motion";

const rootVariants = {
  appear: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  init: {
    rotateZ: 75,
    originX: "left",
  },
  appear: {
    rotateZ: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AnimatedList({ items }) {
  return (
    <motion.ul
      className="pl-4 list-outside list-disc my-4"
      variants={rootVariants}
      // whileInView="appear"
    >
      {items.map((e) => (
        <motion.li
          key={e}
          variants={itemVariants}
          initial="init"
          whileInView="appear"
        >
          {e}
        </motion.li>
      ))}
    </motion.ul>
  );
}
