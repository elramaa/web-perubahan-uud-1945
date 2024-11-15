import { motion } from "framer-motion";

const variants = {
  init: {
    x: "-50%",
    y: 5,
  },
  jump: {
    y: -5,
    boxShadow: "0px 0px 20px 5px #ffdf94",
    transition: {
      type: "tween",
      repeat: Infinity,
      duration: 1,
    },
  },
};

export default function CTAButton() {
  return (
    <motion.div
      className="w-max absolute bottom-20 lg:bottom-12 left-1/2 -translate-x-1/2 bg-cream rounded-full px-8 py-4 font-semibold text-lightbrick flex gap-2 items-center"
      variants={variants}
      initial="init"
      whileInView="jump"
    >
      Scroll to learn more!
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 fill-lightbrick"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" />
        </g>
      </svg>
    </motion.div>
  );
}
