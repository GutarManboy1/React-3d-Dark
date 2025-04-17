import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SplineScene from "./SplineScene";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 flex flex-col  top-[80px] max-w-7xl mx-auto">
        <h1 className={`${styles.heroHeadText} mt-5`}>
          Hey, I'm <span className="text-[#915EFF]">Glenn</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a Software Engineer, <br className="sm:block hidden" />
          that makes and breaks tons of stuff!
        </p>
      </div>
      <SplineScene />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about ">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
const HeroSection = SectionWrapper(Hero, "home");
export default HeroSection;
