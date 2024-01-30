"use client"

import React from "react";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string; 
}

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
