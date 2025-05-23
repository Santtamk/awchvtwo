import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-pink-950 lg:px-25 p-5 flex justify-between ">
      <div className="flex  gap-4 justify-between items-start  flex-col lg:w-1/2 ">
        <div className="w-[4.25rem] h-[0.8125rem] md:w-[9.4375rem] md:h-[1.875rem]">
          <Image
            src="/Logo_white.svg"
            alt="navbar_logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        <div className=" flex flex-col justify-start items-start overflow-hidden">
          <div className=" text-black-50 text-[8px] lg:text-lg font-medium font-['Switzer_Variable']">
            © 2025 AWCH. All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex self-stretch   flex-col justify-start  gap-2 overflow-hidden lg:w-1/2">
        <div className="self-stretch inline-flex justify-between gap-5 overflow-hidden">
          <div className="size- flex justify-start items-start gap-2">
            <div className="size-  inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-white text-[8px] lg:text-xl font-normal font-['Switzer_Variable']">
                Privacy & Policy
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-white text-[8px] lg:text-xl text-xl font-normal font-['Switzer_Variable']">
                Terms & Condition
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch  lg:p-2.5 inline-flex justify-start items-center gap-4 lg:gap-5">
          <div className="size- p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Image
                width={0}
                height={0}
                src="/social/instagram.svg"
                className="w-4 lg:w-6"
              />
            </div>
          </div>
          <div className="size-  p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Image
                width={0}
                height={0}
                src="/social/facebook.svg"
                className="w-4 lg:w-6"
              />
            </div>
          </div>
          <div className="size-  p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Image
                width={0}
                height={0}
                src="/social/x.svg"
                className="w-4 lg:w-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
