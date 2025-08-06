"use client";

import { FaUserDoctor } from "react-icons/fa6";
import Image from "next/image";
import CountUp from "react-countup";

const Hero_1 = () => {
  return (
    <div className="flex justify-center items-start lg:content-center  lg:px-25 lg:items-center lg:justify-center p-1 ">
      <div className="flex-1 p-2.5 flex flex-col justify-start items-start gap-7  lg:items-center lg:justify-center ">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h1 className="self-stretch justify-start text-black-950 text-4xl lg:text-5xl font-bold  tracking-wide z-10">
            Expert Women and Child Healthcare in Asansol
          </h1>
          <h2 className=" pt-1 self-stretch justify-start text-black-700 text-lg lg:text-xl font-normal z-10">
            Access top-tier health consultations from the comfort of your home
            or while on the go. Avishkar Woman and Child Hospital in Asansol
            connects you with experienced medical professionals, 24/7.
          </h2>
        </div>

        <div className="self-stretch pt-2.5 inline-flex justify-start items-start overflow-hidden z-10">
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl lg:text-4xl font-bold">
              <CountUp end={11} duration={2.5} />
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal">
              Clinics in
              <br />
              Asansol
            </div>
          </div>

          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl lg:text-4xl font-bold">
              <CountUp end={580} duration={2.5} />+
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal">
              Certified Medical <br />
              Professionals
            </div>
          </div>

          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl font-bold lg:text-4xl">
              <CountUp end={98} duration={2.5} suffix="%" />
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal">
              Patient Satisfaction
              <br />
              Rate
            </div>
          </div>
        </div>
        <div className="self-stretch flex  items-start justify-center gap-3.5 flex-col lg:flex-row lg:justify-start">
          <a
            href="tel:+917872227333"
            data-icon="true"
            data-property-1="Default"
            className="px-7 py-4 bg-primary-800 rounded-[32px] flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-primary-900 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600"
          >
            <div className="justify-start text-white  text-base lg:text-xl font-medium">
              Call to Book
            </div>

            <div className="size-4 lg:size-5 relative">
              <Image
                src="/call.png"
                alt="Calendar"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority={false}
                loading="lazy"
              />
            </div>
          </a>
          <button
            className="size- px-7 text-primary-700 py-4 rounded-[32px]  outline-1 outline-offset-[-1px] outline-primary-700 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-primary-900 hover:text-black-50 transition-all duration-300  "
            onClick={() => {
              const section = document.getElementById("our_Doctor");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="justify-start  text-base lg:text-xl font-medium">
              Meet Our Doctor
            </div>
            <div className="size-4 lg:size-5 relative overflow-hidden flex justify-center items-center ">
              <FaUserDoctor
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[650px] relative rounded-[32px]  flex-col justify-start items-start gap-2.5 hidden lg:flex lg:items-center lg:justify-center">
        {/* <div className="size-[700px]  absolute bg-radial from-primary-200 to-black-50 rounded-full blur-[50px] overflow-hidden" /> */}
        {/* <div
          style={{
            maskImage:
              "linear-gradient(rgba(0, 0, 0, 1) 50%, transparent 100%)",
          }}
        > */}
        <div>
          <div
            className="flex items-center justify-center content-center 
           transition-transform duration-500 
           "
          >
            <Image
              src="/herolg.webp"
              alt="hero image"
              width={650}
              height={700}
              className="relative transition-transform duration-500 scale-110"
              priority={false}
              loading="lazy"
            />
          </div>
          <Image
            src="/heroism.webp"
            alt="hero image"
            width={80}
            height={70}
            className=" absolute bottom-60 left-[194px] animate-[var(--animate-pulse-scale)]"
            priority={false}
            loading="lazy"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero_1;
