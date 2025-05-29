"use client";

import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({ title, image }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="self-stretch h-80   rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden min-h-[420px] group transition-transform duration-200 hover:scale-[1.015]  bg-no-repeat bg-w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom left, rgba(0,0,0,0.4), rgba(0,0,0,0.6)),url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="z-10 self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden relative">
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-50 text-3xl font-medium font-['Switzer_Variable']">
            {title}
          </div>
        </div>
        {/* Hover effect added on this button */}
        <button
          className="size- px-7 py-4 bg-white/30 rounded-[32px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 overflow-hidden  hover:bg-primary-50 transition-all duration-300 group-hover:bg-white/40 hover:backdrop-blur-lg hover:scale-105 cursor-pointer hover:text-primary-700"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div className="justify-start text-white text-base lg:text-xl font-medium font-['Switzer_Variable'] transition-colors duration-300 group-hover:text-primary-700 ">
            Read More
          </div>
          <div className="size-6 relative transition-transform duration-300 group-hover:translate-x-1">
            <Image
              alt="arrow"
              src={onHover ? "/arrow_outward-700.svg" : "/arrow_outward.svg"}
              width={24}
              height={24}
              className="w-6 h-6 aspect-square"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
