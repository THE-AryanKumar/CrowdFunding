"use client";

import React from "react";
import { IoNutrition } from "react-icons/io5";
import { RiRefund2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

interface FadeInProps {
  delay: number;
}

const fadeIn2 = ({ delay }: FadeInProps) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Services = () => {
  const fadeInAnimation = fadeIn({ direction: "up", delay: 0.2 });
  return (
    <section className="services -mt-24 mb-28 items-center justify-center transform translate-y-[20px] md:translate-y-0">
      <motion.div
        // initial={{opacity:0, y:'100%'}}
        // animate={{opacity:1, y:0}}
        // exit={{opacity:0,y:'100%'}}
        // transition={transitions1}
        variants={fadeInAnimation}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-white bg-cover bg-no-repeat max-w-[1450px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[80px] px-6 xl:px-0 relative flex items-center xl:items-start -z-10"
        style={{ backgroundImage: "url(/running.jpg)" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center flex-col xl:flex-row xl:mb-[140px]">
            <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              Our best services
            </h2>
            <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              excepturi eum consequuntur repellendus incidunt corporis
              perspiciatis nulla ipsum officiis suscipit!
            </p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto mt-8 xl:-mt-[100px]">
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          <motion.div
            variants={fadeIn2({ delay: 0.4 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] max-w-[1150px] mx-auto flex flex-col items-center text-center"
          >
            <div className="mb-[15px]">
              <IoNutrition
                size={40}
                color="black"
                style={{ color: "#d97706" }}
              />
            </div>
            <h3 className="h3 mb-[10px]">General Sportsman</h3>
            <p className="font-light leading-normal max-w-[360px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn2({ delay: 0.8 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] max-w-[1150px] mx-auto flex flex-col items-center text-center"
          >
            <div className="mb-[15px]">
              <RiRefund2Fill
                size={40}
                color="black"
                style={{ color: "#d97706" }}
              />
            </div>
            <h3 className="h3 mb-[10px]">General Sportsman</h3>
            <p className="font-light leading-normal max-w-[360px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn2({ delay: 1 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] max-w-[1150px] mx-auto flex flex-col items-center text-center"
          >
            <div className="mb-[15px]">
              <IoFastFood
                size={40}
                color="black"
                style={{ color: "#d97706" }}
              />
            </div>
            <h3 className="h3 mb-[10px]">General Sportsman</h3>
            <p className="font-light leading-normal max-w-[360px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn2({ delay: 1.2 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] max-w-[1150px] mx-auto flex flex-col items-center text-center"
          >
            <div className="mb-[15px]">
              <GiWeightLiftingUp
                size={40}
                color="black"
                style={{ color: "#d97706" }}
              />
            </div>
            <h3 className="h3 mb-[10px]">General Sportsman</h3>
            <p className="font-light leading-normal max-w-[360px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
