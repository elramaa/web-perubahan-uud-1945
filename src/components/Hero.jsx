// import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import Title from "./Title";
import Flag from "./svg/Flag";
import InstituteIcon from "./InstituteIcon";
import Cloud from "./Cloud";

export default function Hero() {
  return (
    <div className="relative grid h-screen w-screen place-content-center place-items-center border-black mb-20">
      <div
        className="absolute bottom-[80%] lg:bottom-[60%] size-[100vw] bg-cream"
        style={{
          clipPath: "circle(farthest-side)",
        }}
      ></div>
      <div className="absolute top-[4rem] md:top-[-2rem] lg:top-[-6rem] h-[40vh] w-full grid grid-cols-2 scale-150 md:scale-100">
        <Flag />
        <Flag style={{ rotateY: 180 }} from="right" />
      </div>
      <Cloud />
      <InstituteIcon />
      <Title />
      <CTAButton />
    </div>
  );
}
