// Logo.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../images/crowd-removebg-preview.png";

interface LogoProps {
  title?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ title, className }: LogoProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link href={"/"}>
      <div className={`flex items-center ${className}`}>
        <Image alt="logo image" src={LogoImage} width={120} height={100} />
        {windowWidth > 610 && (
          <h1 className="text-3xl font-extrabold uppercase ml-2 w-16 md:w-32 lg:w-48 hover:text-black/80 transition-transform">
            {title || "Crowd."}&trade; 
          </h1>
        )}
      </div>
    </Link>
  );
};

export default Logo;
