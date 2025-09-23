import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-pink-950 lg:px-25 p-5 flex justify-between ">
      <div className="flex  gap-4 justify-between items-start  flex-col lg:w-1/2 ">
        <div className="list-none flex flex-col gap-[1rem]">
          <div className="w-[4.25rem] h-[0.8125rem] md:w-[9.4375rem] md:h-[1.875rem]">
            <Image
              src="/footer_image.webp"
              alt="navbar_logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority={false}
              loading="lazy"
            />
          </div>

          <p className="text-black-50 font-normal text-[0.312rem] md:text-[0.8125rem] md:font-normal">
            Compassion, Care, Commitment
          </p>
        </div>

        <div className=" flex flex-col justify-start items-start overflow-hidden">
          <div className=" text-black-50 text-[8px] lg:text-lg font-medium">
            © 2025 AWCH. All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex self-stretch   flex-col justify-start  gap-2 overflow-hidden lg:w-1/2">
        <div className="self-stretch inline-flex justify-between gap-5 overflow-hidden">
          <div className="size- flex justify-start items-start gap-2">
            <div className="size-  inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-white text-[8px] lg:text-xl font-normal">
                Privacy & Policy
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-white text-[8px] lg:text-xl text-xl font-normal">
                Terms & Condition
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch  lg:p-2.5 inline-flex justify-start items-center gap-4 lg:gap-5">
          <div className="size- p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Link
                href="https://www.instagram.com/avishkarhospitals?utm_source=ig_web_button_share_sheet&igsh=dXcxNTV1MDV5ZzI2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="instagram"
                  width={0}
                  height={0}
                  src="/social/instagram.svg"
                  className="w-4 lg:w-6"
                  priority={false}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="size-  p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Link
                href="https://www.facebook.com/people/Avishkar-Women-Children-Hospital/61576893392133/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="facebook"
                  width={0}
                  height={0}
                  src="/social/facebook.svg"
                  className="w-4 lg:w-6"
                  priority={false}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          {/* <div className="size-  p-1 lg:p-2.5 bg-primary-50 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Image
                alt="x"
                width={0}
                height={0}
                src="/social/x.svg"
                className="w-4 lg:w-6"
                priority={false}
                loading="lazy"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
