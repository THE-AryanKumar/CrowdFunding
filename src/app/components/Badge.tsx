"use client";

import React from "react";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string; 
  icon: React.ReactNode; 
  endCountNum: number; 
  endCountText: string;
  badgeText: string; 
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="test-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl text-[#f59e0b] leading-none font-bold text-primary">
          <CountUp className="text-[#f59e0b]" end={endCountNum} delay={1} duration={4} />
          <span style={{ color: '#f59e0b' }}>{endCountText}</span>
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
