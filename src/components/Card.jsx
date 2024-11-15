import { motion } from "framer-motion";

const variants = {
  hover: {
    scale: 1.1,
    x: -10,
    boxShadow: "0px 0px 10px 2px #ffdf94",
  },
  whileInView: {
    rotateZ: [-25, 0],
    rotateY: [-180, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export default function Card({ img, title, className, children }) {
  return (
    <motion.div
      className={`w-full h-full bg-cream/90 text-lightbrick px-4 py-4 rounded-2xl ${className}`}
      style={{ zIndex: 10, transformPerspective: 500 }}
      variants={variants}
      whileHover="hover"
      whileInView="whileInView"
    >
      <h3 className="font-sans text-2xl uppercase font-extrabold text-lightbrick">
        {title}
      </h3>
      <img src={img.src} alt={img.alt} className="my-4" />
      {children}
    </motion.div>
  );
}
