import Image from "next/image";

import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({ title, image }) => {
  return (
    <div className="self-stretch relative h-80   rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden min-h-[420px] group transition-transform duration-200 hover:scale-[1.015]  bg-no-repeat bg-w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
        quality={80} // adjust quality as needed
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-black/40 to-black/60 z-10" />
      <div className="z-10 absolute self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-50 text-3xl font-medium">
            {title}
          </div>
        </div>
        {/* Hover effect added on this button */}
        <button className="size- px-7 py-4 bg-white/30 rounded-[32px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 overflow-hidden text-white hover:bg-primary-50 transition-all duration-300 group-hover:bg-white/40 hover:backdrop-blur-lg hover:scale-105 cursor-pointer hover:text-primary-700">
          <div className="justify-start text-white text-base lg:text-xl font-medium transition-colors duration-300 group-hover:text-primary-700 ">
            Read More
          </div>
          <div className="size-6 relative transition-transform duration-300 group-hover:translate-x-1 text-white group-hover:text-primary-700">
            <MdArrowOutward
              alt="arrow"
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
