// import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import Title from "./Title";
import Flag from "./svg/Flag";
import InstituteIcon from "./InstituteIcon";
import Cloud from "./Cloud";

export default function Hero() {
  return (
    <div className="relative grid h-screen w-screen place-content-center place-items-center border-black mb-20">
      <div className="absolute bottom-[75%] sm:bottom-[69%] lg:bottom-[75%] xl:bottom-[60%] w-screen h-[60vw] lg:h-[80vw] xl:h-[100vw] bg-cream rounded-b-full"></div>
      <div className="absolute top-[4rem] md:top-[-2rem] lg:top-[-6rem] h-[40vh] w-full grid grid-cols-2 scale-150 md:scale-100">
        <Flag />
        <Flag style={{ rotateY: 180 }} />
      </div>
      <Cloud />
      <InstituteIcon />
      <Title />
      <CTAButton />
    </div>
  );
}
