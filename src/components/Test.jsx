import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

export default function Test() {
  const [showText, setShowText] = useState(false);
  const constraintRef = useRef(null);
  return (
    <div className="grid h-screen w-screen auto-rows-[100vh] overflow-y-auto overflow-x-hidden bg-brick">
      <motion.div
        className="grid h-full w-full place-content-center place-items-center"
        ref={constraintRef}
      >
        <motion.div
          className="size-40 rounded-full bg-black"
          // initial={{ scale: 1 }}
          whileDrag={{
            // y: [null, -200, -150],
            // borderRadius: [9999, 100, 25],
            scale: 1.5,
            background: "pink",
          }}
          drag={true}
          dragConstraints={constraintRef}
          dragElastic={0.2}
          // transition={{ ease: "easeInOut", duration: 1.5 }}
          // onClick={() => setShowText(!showText)}
        ></motion.div>
      </motion.div>
      <div className="grid h-full place-content-center place-items-center">
        <motion.div
          className="size-40 rounded-full bg-black"
          initial={{ scale: 1 }}
          whileInView={{
            // y: [null, -200, -150],
            // borderRadius: [9999, 100, 25],
            scale: [null, 2, 1.5],
          }}
          // transition={{ ease: "easeInOut", duration: 1.5 }}
          // onClick={() => setShowText(!showText)}
        ></motion.div>
      </div>
    </div>
  );
}
