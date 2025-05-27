"use client";

import Image from "next/image";
import React from "react";

const Hero_1 = () => {
  return (
    <div className="flex justify-center items-start lg:content-center  lg:px-25 lg:items-center lg:justify-center p-[0.625rem]">
      <div className="flex-1 p-2.5 flex flex-col justify-start items-start gap-4  lg:items-center lg:justify-center">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h1 className="self-stretch justify-start text-black-950 text-4xl lg:text-5xl font-bold font-sora tracking-wide">
            Expert Healthcare Consultation
            <br />
            Anytime, Anywhere
          </h1>
          <div className=" p-[0.625rem] self-stretch justify-start text-black-700 text-lg lg:text-2xl font-normal font-switzer">
            Access top tier health consultations from the comfort of your home
            or on the go. Our platform connects you with experienced medical
            professionals around the clock.
          </div>
        </div>
        <div className="self-stretch p-2.5 inline-flex justify-start items-start overflow-hidden">
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl lg:text-4xl  font-bold font-sora ">
              25+
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal font-switzer ">
              Clinics in
              <br />
              Asansol
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl lg:text-4xl font-bold font-sora">
              580+
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal font-switzer">
              Certified Medical <br /> Professionals
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch justify-start text-primary-800 text-2xl font-bold lg:text-4xl font-sora">
              98%
            </div>
            <div className="self-stretch justify-start text-black-700 text-xs lg:text-lg font-normal font-switzer">
              Patient Satisfaction
              <br />
              Rate
            </div>
          </div>
        </div>
        <div className="self-stretch flex  items-start justify-center gap-3.5 flex-col lg:flex-row lg:justify-start">
          <button
            data-icon="true"
            data-property-1="Default"
            className="px-7 py-4 bg-primary-800 rounded-[32px] flex justify-center items-center gap-2.5 overflow-hidden"
            onClick={() => {
              const section = document.getElementById("book_appointment");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="justify-start text-white  text-base lg:text-xl font-medium font-switzer">
              Book an Appointment
            </div>

            <div className="size-4 lg:size-6 relative">
              <Image
                src="/Calendar.svg"
                alt="Calendar"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </button>
          <button
            data-icon="true"
            data-property-1="Default"
            className="size- px-7 py-4 rounded-[32px]  outline-1 outline-offset-[-1px] outline-primary-700 flex justify-center items-center gap-2.5 overflow-hidden"
          >
            <div className="justify-start text-primary-700 text-xl font-medium font-switzer">
              Explore Services
            </div>
            <div className="size-4 lg:size-6 relative overflow-hidden">
              <Image
                src="/remix.svg"
                alt="remix"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[650px] relative rounded-[32px]  flex-col justify-start items-start gap-2.5 hidden lg:block">
        <div className="size-[500px] left-0 top-[75px] absolute bg-radial from-primary-200 to-black-50 rounded-full blur-[50px]" />

        <Image
          src="/hero.svg"
          alt="hero image"
          width={500}
          height={650}
          className="rounded-[32px] relative"
          priority
        />
      </div>
    </div>
  );
};

export default Hero_1;
