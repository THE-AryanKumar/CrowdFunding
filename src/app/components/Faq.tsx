import React from "react";
import sachin from "../../../public/sachin.jpg";

const Faq = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white h-full mt-28">
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen bg-center bg-no-repeat relative">
        <span className="relative h2 font-medium lg:font-extrabold mb-3 text-7xl text-black opacity-60 lg:text-9xl sm:text-9xl top-[40px] transform -translate-x-1/2 -translate-y-1/2 lg:left-[180px] sm:left-[40px] z-10 lg:transform-none">
          Work
        </span>
        <div className="relative flex flex-col lg:flex-row flex-1 z-100 lg:left-[80px]">
          <div className="text-[360px] text-black/50 xl:text-[520px] leading-none font-tertiary lg:tracking-[0.055em] bg-no-repeat bg-right bg-clip-text font-bold"
          style={{ backgroundImage: `url(${sachin.src})` }}>
            07
          </div>
        </div>
        <div className="">{/* image */}</div>
      </div>
      <div className="w-full sm:w-1/2 h-screen snap-y snap-mandatory overflow-y-scroll smooth-scroll-container">
        <div className="snap-start h-screen flex justify-center items-center bg-white transition-transform duration-500 ease-in-out">
          <div className="flex flex-col items-start text-black mt-[-120px]">
            <p className="text-4xl sm:text-8xl">
              Pro. <br /> Lorem
            </p>
            <p className="text-2xl sm:text-4xl py-10">Lorem, ipsum.</p>
            <p className="text-base sm:text-2xl">
              Lorem ipsum dolor sit amet consectetur..
            </p>
          </div>
        </div>
        <div className="snap-start h-screen flex justify-center items-center bg-white/80">
          <div className="flex flex-col items-start text-black mt-[-120px]">
            <p className="text-4xl sm:text-8xl">
              Pro. <br /> Lorem
            </p>
            <p className="text-2xl sm:text-4xl py-10">Lorem, ipsum.</p>
            <p className="text-base sm:text-2xl">
              Lorem ipsum dolor sit amet consectetur..
            </p>
          </div>
        </div>
        <div className="snap-start h-screen flex justify-center items-center bg-white">
          <div className="flex flex-col items-start text-black mt-[-120px]">
            <p className="text-4xl sm:text-8xl">
              Pro. <br /> Lorem
            </p>
            <p className="text-2xl sm:text-4xl py-10">Lorem, ipsum.</p>
            <p className="text-base sm:text-2xl">
              Lorem ipsum dolor sit amet consectetur..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
