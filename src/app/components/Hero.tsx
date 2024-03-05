"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import DevImg from "./DevImg";
import HeroImg from "../images/CROWD.svg";
import HeroImg2 from "../images/Funding.svg";
import HeroImg3 from "../images/colorball.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { RiBriefcase4Fill } from "react-icons/ri";
import { RiTodoFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { RiFootballFill } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Badge from "./Badge";
import Socials from "./Socials";

const locationSequence = [
  "India, New delhi",
  3000,
  "Rio Janeiro, Brazil",
  3000,
  "Paris, France",
  3000,
  "Berlin, Germany",
  3000,
  "Athens, Germany",
  3000,
];

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const Hero = () => {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBackground(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
      <motion.div
        className=" h-screen bg-cover bg-center transition-opacity duration-3000 ease-in-out"
        style={{
          backgroundImage: showBackground ? "url(/bg_landing.png)" : "none",
        }}
      >
        <div className="top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-[-120px] md:translate-y-0">
          <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
            <div className="bg-blue-500 bg-opacity-0 h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12 relative md:right-[100px] md:top-[-80px]">
              <MouseParallaxContainer
                globalFactorX={0.1}
                globalFactorY={0.2}
                resetOnLeave
                className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
              >
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.4}
                  className="relative"
                >
                  <motion.div
                    variants={fadeIn({ direction: "up", delay: 0.4 })}
                    initial="hidden"
                    animate="show"
                    className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px] select-none "
                  >
                    <Image src={HeroImg} fill alt="" className="object-cover" />
                  </motion.div>
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.9}
                  factorY={0.9}
                  className="absolute xl:left-6 z-30"
                >
                  <motion.div
                    variants={fadeIn({ direction: "up", delay: 0.4 })}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] select-none"
                  >
                    <Image
                      src={HeroImg2}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </motion.div>
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.3}
                  factorY={0.6}
                  className="hidden xl:flex absolute right-0 z-20 opacity-80"
                >
                  <motion.div
                    variants={fadeIn({ direction: "left", delay: 1.4 })}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] relative right-[30px] top-[-10px] select-none"
                  >
                    <Image
                      src={HeroImg3}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </motion.div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
              <div className="container mx-auto md:relative md:left-[100px]">
                <motion.div
                  variants={fadeIn({ direction: "up", delay: 0.8 })}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex justify-between gap-x-8"
                >
                  <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <span className="flex items-center">
                      <RiFootballFill className="text-[#d97706] inline-block size-8" />
                      <span className="ml-2 text-2xl "></span>
                      <span className="inline-block"> </span>
                      <TypeAnimation
                        className="text-[#d97706] inline-block text-2xl"
                        sequence={locationSequence}
                        wrapper="div"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                        cursor={false}
                      />
                    </span>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                      Fueling dreams, igniting passions. Unlock boundless
                      potential with our crowdfunding hub dedicated to
                      supporting sports athletes and esports players. Together,
                      let's make aspirations a reality!
                    </p>
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                      <Link href="/contact">
                        <Button className="gap-x-2 bg-[#d97706] hover:bg-primary hover:text-[#d97706]">
                          Contact me <RiSendPlaneFill size={18} />
                        </Button>
                      </Link>
                    </div>
                    <Socials
                      containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                      iconsStyles="text-primary text-[22px] hover:text-[#d97706] hover:transform hover:scale-110 transition-all"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={fadeIn({ direction: "left", delay: 0.6 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="hidden xl:flex relative right-[40px] top-[-40px] select-none"
            >
              <Badge
                containerStyles="absolute top-[24%] -left-[4rem]"
                icon={<RiBriefcase4Fill size={25} color="orange" />}
                endCountNum={99}
                endCountText=""
                badgeText="NGO's"
              />
              <Badge
                containerStyles="absolute top-[80%] -left-[1rem]"
                icon={<RiTodoFill size={25} color="orange" />}
                endCountNum={3}
                endCountText="k"
                badgeText="Athletes"
              />
              <Badge
                containerStyles="absolute top-[55%] -right-16"
                icon={<RiTeamFill size={25} color="orange" />}
                endCountNum={21}
                endCountText="+"
                badgeText="Team"
              />
              <div className="bg-hero_shapes2_light dark:bg-hero_shapes2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 user-select-none"></div>
              <DevImg
                containerStyles="bg-hero_shapes w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/batsman.png"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
