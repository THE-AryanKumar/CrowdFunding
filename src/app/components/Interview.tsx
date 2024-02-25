"use client";

import React, { useState } from "react";
import ModalVideo, { ModalVideoProps } from "react-modal-video";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import sachin from "../../../public/sachin.jpg";
import { FaPlay } from "react-icons/fa";
import '../modalVideo.scss'

const Interview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = React.useState(true);

  const handleButtonClick = () => {
    setIsOpen(true);
    setButtonVisible(false);
  };

  return (
    <section
      className="mt-20 bg-black section bg-no-repeat bg-cover bg-center lg:h-[812px]"
      style={{ backgroundImage: `url(${sachin.src})` }}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <h3 className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8">
              "Lorem ipsum dolor, sit amet elit. Nam, nihil!"
            </h3>
            <div>
              <div
                onClick={handleButtonClick}
                className="flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition"
              >
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px] overflow-hidden">
                  <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                    <div className="pl-1">
                      <FaPlay className="text-black size-[30px]" />
                    </div>
                  </div>
                </div>
                <div className="font-quaternary uppercase text-xl">
                  Watch It Now
                </div>
              </div>
            </div>
            <ModalVideo
              channel="youtube"
              // autoplay
              isOpen={isOpen}
              videoId="uJMCNJP2ipI"
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
