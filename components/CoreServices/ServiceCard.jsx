import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, gradient, image }) => {
  return (
    <div
      className={`self-stretch h-80 flex bg-gradient-to-bl ${gradient} rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden min-h-[420px]`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-50 text-3xl font-medium font-['Switzer_Variable']">
            {title}
          </div>
        </div>
        <div
          data-icon="true"
          data-property-1="Default"
          className="size- px-7 py-4 bg-white/30 rounded-[32px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 overflow-hidden"
        >
          <div className="justify-start text-white text-base lg:text-xl font-medium font-['Switzer_Variable']">
            Read More
          </div>
          <div className="size-6 relative">
            <Image
              src="/arrow_outward.svg"
              width={24}
              height={24}
              className="w-6 h-6 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
