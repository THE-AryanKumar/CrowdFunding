'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "../images/Crowdfunding.jpg";
import pattern from "../images/pattern.png";
import { MdReadMore } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const About = () => {
  return (
    <section className="">
      <motion.div
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" relative section bg-black/30 w-[85%] mx-auto rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] p-8 z-20"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <Image
              src={banner}
              alt=""
              className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl select-none lg:text-4xl font-medium lg:font-extrabold mb-3 relative">
                  <span className="text-[100px] select-none border-black absolute opacity-30 -top-[37px] hidden lg:block bg-transparent">
                    About Us
                  </span>
                  About Us
                </h2>
                <p className="mb-4 font-primary text-[20px] xl:font-extrabold text-[#d97706]">
                  Crowd Funding and NGOs
                </p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis iusto atque natus doloremque totam omnis! <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, praesentium.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="gap-x-2 bg-[#d97706] hover:bg-primary hover:text-[#d97706]">
                    Read More... <MdReadMore size={35} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative xl:flex -top-[90px] left-[48px] z-10">
        <Image
          src={pattern}
          width={320}
          height={320}
          alt=""
          className="xl:flex"
        />
      </div>
    </section>
  );
};

export default About;
