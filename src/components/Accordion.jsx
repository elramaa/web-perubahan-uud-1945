import { motion } from "framer-motion";
import { useState } from "react";
import Chevron from "./svg/Chevron";

const accordionItemVariants = {
  hover: {
    scale: 1.05,
  },
};

export default function Accordion({ content, className }) {
  const [openedID, setOpenedID] = useState(-1);
  return (
    <motion.ul layoutRoot className={`w-full lg:w-4/5 text-cream ${className}`}>
      {Object.entries(content).map(([key, value], i) => (
        <motion.li
          key={key}
          className="mb-2"
          style={{
            originX: "left",
          }}
          variants={accordionItemVariants}
          whileHover="hover"
        >
          <button
            className="bg-cream w-full flex justify-between px-8 text-left py-4 text-lightbrick font-bold text-xl uppercase rounded-t-xl"
            onClick={() => setOpenedID(openedID == i ? -1 : i)}
          >
            {key}
            <Chevron
              className="h-8 aspect-square stroke-lightbrick stroke-[3]"
              animate={openedID == i ? { rotateX: 180 } : {}}
            />
          </button>
          {typeof value == "object" ? (
            <motion.ul
              className="list-disc list-inside py-4 px-8 bg-cream text-lightbrick rounded-b-xl overflow-hidden border-white"
              initial={{ height: 0 }}
              animate={{
                originY: "top",
                height: openedID == i ? "auto" : 0,
                paddingTop: openedID == i ? "1rem" : 0,
                paddingBottom: openedID == i ? "1rem" : 0,
                borderTopWidth: 2,
              }}
            >
              {value.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              layout
              className="py-4 px-8 bg-cream text-lightbrick border-t-2 border-white rounded-b-xl overflow-hidden"
              initial={{ height: 0 }}
              animate={{
                originY: "top",
                height: openedID == i ? "auto" : 0,
                paddingTop: openedID == i ? "1rem" : 0,
                paddingBottom: openedID == i ? "1rem" : 0,
                borderTopWidth: 2,
              }}
            >
              {value.split("\n").map((val) => (
                <p key={val}>{val}</p>
              ))}
            </motion.div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}

{
  /* <AccordionList>
	<AccordionItem />
	<AccordionItem />
	<AccordionItem />
</AccordionList> */
}
