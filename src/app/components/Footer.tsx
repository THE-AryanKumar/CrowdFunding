"use client";

import React from "react";
import Logo from "./Logo";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { scrollReveal } from "../../../variants";

const Footer = () => {
  return (
    <motion.footer
      variants={scrollReveal({ distance: "10px", interval: 1 })}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="p-4 bg-white sm:p-6 dark:bg-gray-800 overflow-x-hidden mt-14"
    >
      <div className="w-full bottom-0 bg-gradient-to-l from-[#ec830ce6] to-brown-800 text-white py-30px border-tl-125px text-sm leading-20px min-h-screen flex items-center justify-center bg-white rounded-tr-[200px]">
        <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">Need help ?</h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-gray-800">
              To ensure that all Wikipedia content is verifiable, anyone may
              question an uncited claim. If your work has been tagged
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <a className="bg-red-500 hover:bg-black hover:text-white justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact US
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <div className="">
                <Logo />
              </div>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why us
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <a>
                  <RiInstagramFill className="hover:text-white" />
                </a>
                <a>
                  <RiTwitterXFill className="hover:text-white" />
                </a>
                <a>
                  <RiYoutubeFill className="hover:text-white" />
                </a>
              </div>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-gray-600">
              Copyright © 2020 Besnik Creative
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
