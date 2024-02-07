"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className=" select-none stats mt-[80px] xl:mt-[60px] relative z-20 bg-[#d97706]/10 py-[80px] xl:py-[150px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
            <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
              {counterOn && (
                <CountUp
                  start={0}
                  end={2}
                  duration={2}
                  delay={0}
                  className="h1 font-primary text-[#d97706]"
                />
              )}
              <span className='text-[70px]' style={{ color: '#d97706' }}>+</span>
              <p>Years Of Experience</p>
            </div>
            <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
              {counterOn && (
                <CountUp
                  start={0}
                  end={65}
                  duration={2}
                  delay={0}
                  className="h1 font-primary text-[#d97706]"
                />
              )}
              <span className='text-[70px]' style={{ color: '#d97706' }}>+</span>
              <p>Project Completed</p>
            </div>
            <div className="stats__item text-center xl:border-r xl:border-[#cda274]">
              {counterOn && (
                <CountUp
                  start={0}
                  end={150}
                  duration={2}
                  delay={0}
                  className="h1 font-primary text-[#d97706]"
                />
              )}
              <span className='text-[70px]' style={{ color: '#d97706' }}>+</span>
              <p>Activities</p>
            </div>
            <div className="stats__item text-center">
              {counterOn && (
                <CountUp
                  start={0}
                  end={85}
                  duration={2}
                  delay={0}
                  className="h1 font-primary text-[#d97706]"
                />
              )}
              <span className='text-[70px]' style={{ color: '#d97706' }}>k</span>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Stats;
