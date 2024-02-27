"use client";

import React, { useState } from "react";
import { galleryData } from "../data";
import Image from "./Image";
import { motion } from "framer-motion";
import { Container } from "postcss";

const Gallery = () => {
  const { title, btnText, btnIcon, images } = galleryData;
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="bg-black/10 section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <h2
          className="font-primary
         h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </h2>
      </div>
      <div className="mb-8 lg:mb-20">
        <Image/>
      </div>
      <div className="flex justify-center">
        <button className="fonrt-primary text-lg tracking-[0.08em] uppercase px-[40px] duration-300 flex items-center gap-x-[10px] btn-lg bg-black hover:bg-dark/90 transition-all text-white">
          {btnText}
          <div className="text-xl">{btnIcon}</div>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
