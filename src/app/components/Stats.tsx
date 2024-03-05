"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  // const [counterOn, setCounterOn] = useState(false);
  return (
    // <ScrollTrigger
    //   onEnter={() => setCounterOn(true)}
    //   onExit={() => setCounterOn(false)}
    // >
    <motion.section
      transition={{ duration: 0.2, ease: [0.17, 0.55, 0.55, 1], delay: 1 }}
      initial={{ opacity: 0 }}
      variants={fadeIn({ direction: "up", delay: 0.4 })}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className=" select-none stats mt-[80px] xl:mt-[60px] relative z-20 bg-[#d97706]/10 py-[80px] xl:py-[150px]"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
            {/* {counterOn && ( */}
            <CountUp
              start={0}
              end={3}
              duration={2}
              delay={0}
              className="h1 font-primary text-[#d97706]"
            />
            {/* )} */}
            <span className="text-[70px]" style={{ color: "#d97706" }}>
              K+
            </span>
            <p>Projects funded</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
           
            <CountUp
              start={0}
              end={2024}
              duration={2}
              delay={0}
              className="h1 font-primary text-[#d97706]"
            />
            
            <span className="text-[70px]" style={{ color: "#d97706" }}>
              
            </span>
            <p>Since</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
            {/* {counterOn && ( */}
            <CountUp
              start={0}
              end={8.7}
              duration={2}
              delay={0}
              className="h1 font-primary text-[#d97706]"
            />
            {/* )} */}
            <span className="text-[70px]" style={{ color: "#d97706" }}>
              K+
            </span>
            <p>pledges</p>
          </div>
          <div className="stats__item text-center">
            {/* {counterOn && ( */}
            <CountUp
              start={0}
              end={5 }
              duration={2}
              delay={0}
              className="h1 font-primary text-[#d97706]"
            />
            {/* )} */}
            <span className="text-[70px]" style={{ color: "#d97706" }}>
              M+
            </span>
            <p>Towards creative work</p>
          </div>
        </div>
      </div>
    </motion.section>
    // </ScrollTrigger>
  );
};
export default Stats;
