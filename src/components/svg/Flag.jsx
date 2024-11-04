import { motion } from "framer-motion";

const variants = {
  svg: {
    init: {},
    appear: {
      transition: {
        duration: 1,
        staggerChildren: 0.05,
      },
    },
  },
  path: {
    init: {
      opacity: 0,
      pathLength: 0,
    },
    appear: {
      opacity: 1,
      pathLength: 1,
      transition: {},
    },
  },
};

export default function Flag({ style, className }) {
  return (
    <motion.svg
      viewBox="0 0 1102 738"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      variants={variants.svg}
      initial="init"
      animate="appear"
    >
      <motion.path
        d="M31.847 86.2863L267.5 156.5L229.584 247.115L3.99993 180.294L31.847 86.2863Z"
        fill="#FCFCFC"
        variants={variants.path}
      />
      <motion.path
        d="M295 258.5L518.5 340.5L483 431L256 353L295 258.5Z"
        fill="#FCFCFC"
        variants={variants.path}
      />
      <motion.path
        d="M582.5 483.5L980.5 590L949.5 673.5L544 574.123L582.5 483.5Z"
        fill="#FCFCFC"
        variants={variants.path}
      />
      <motion.path
        d="M57.4084 -0.00744629L299 71.5L267.5 156.5L31.847 86.2863L57.4084 -0.00744629Z"
        fill="#CD0E0E"
        variants={variants.path}
      />
      <motion.path
        d="M324.5 177.5L553 256.5L518.5 340.5L295 258.5L324.5 177.5Z"
        fill="#CD0E0E"
        variants={variants.path}
      />
      <motion.path
        d="M612.5 399.447L1012.5 505.5L980.5 590L582.5 483.5L612.5 399.447Z"
        fill="#CD0E0E"
        variants={variants.path}
      />
      <motion.path
        d="M229.584 247.115L267.5 156.5L295 258.5L256 353L229.584 247.115Z"
        fill="#C8C7C7"
        variants={variants.path}
      />
      <motion.path
        d="M483 431L518.5 340.5L582.5 483.5L544 574.123L483 431Z"
        fill="#C8C7C7"
        variants={variants.path}
      />
      <motion.path
        d="M267.5 156.5L299 71.5L324.5 177.5L295 258.5L267.5 156.5Z"
        fill="#A41212"
        variants={variants.path}
      />
      <motion.path
        d="M518.5 340.5L553 256.5L612.5 399.447L582.5 483.5L518.5 340.5Z"
        fill="#A41212"
        variants={variants.path}
      />
      <motion.path
        d="M949.5 673.5L980.5 590L1045.5 704L985 732.5L949.5 673.5Z"
        fill="#C8C7C7"
        variants={variants.path}
      />
      <motion.path
        d="M980.5 590L1012.5 505.5L1102 676L1045.5 704L980.5 590Z"
        fill="#A41212"
        variants={variants.path}
      />
      <motion.path
        d="M229.584 247.115L3.99993 180.294L0.5 195L219 261L246 367.5L474 445.5L535 590L945 686L975 738L985 732.5L949.5 673.5L544 574.123L483 431L256 353L229.584 247.115Z"
        fill="#A50000"
        variants={variants.path}
      />
    </motion.svg>
  );
}
