import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, gradient, image }) => {
  return (
    <div
      className={` self-stretch h-80 flex bg-gradient-to-bl ${gradient} rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden min-h-[420px]
                  group transition-transform duration-200 hover:scale-[1.015]`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="z-10 self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-50 text-3xl font-medium font-['Switzer_Variable']">
            {title}
          </div>
        </div>

        {/* Hover effect added on this button */}
        <button
          data-icon="true"
          data-property-1="Default"
          className="size- px-7 py-4 bg-white/30 rounded-[32px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 overflow-hidden 
                     transition-all duration-300 group-hover:bg-white/40 hover:backdrop-blur-lg hover:scale-105 cursor-pointer"
        >
          <div className="justify-start text-white text-base lg:text-xl font-medium font-['Switzer_Variable'] transition-colors duration-300 group-hover:text-black">
            Read More
          </div>
          <div className="size-6 relative transition-transform duration-300 group-hover:translate-x-1">
            <Image
              alt="arrow"
              src="/arrow_outward.svg"
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
