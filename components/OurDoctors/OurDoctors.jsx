"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const doctors = [
  {
    name: "Dr. Ashraf Azam",
    image: "/Doctors/ASHRAF_AZAM.webp",
    slug: "ashraf-azam",
  },
  {
    name: "Dr. Priyanka Mandal",
    image: "/Doctors/priyanka_mandal.webp",
    slug: "priyanka-mandal",
  },
  {
    name: "Dr. Neetu Singh",
    image: "/Doctors/neetu_singh.jpg",
    slug: "neetu-singh",
  },
  {
    name: "Dr. Sanjeeda Khanam",
    image: "/placeholder.png", // placeholder image
    slug: "sanjeeda-khanam",
    comingSoon: true,
  },
];

const OurDoctors = () => {
  return (
    <div
      className="self-stretch p-12  inline-flex flex-col justify-center items-center content-center  gap-2.5 overflow-hidden lg:px-25"
      id="our_Doctor"
    >
      <div className="flex flex-col justify-start items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold tracking-wide">
              Meet Our Doctors
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-500 text-lg lg:text-2xl font-normal ">
              Our medical team combines experience, empathy, and excellence.
              Meet the experts committed to guiding your healthcare journey.
            </div>
          </div>
        </div>

        {/* <div className="self-stretch px-2.5 py-10   justify-center items-center content-center gap-5 overflow-hidden flex-wrap grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4"
          > */}

        <div className="self-stretch px-2.5 py-10  gap-5 overflow-hidden justify-center items-center flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {doctors.map((doctor, index) => (
            <Link href={`/doctors/${doctor.slug}`} key={index}>
              <div
                key={index}
                className="relative flex-1 min-w-[250px] lg:h-[500px] h-80 rounded-3xl overflow-hidden group transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl cursor-pointer "
              >
                {/* Background Image using Next.js Image */}
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/50 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 w-full p-5 z-30">
                  <div className="text-black-50 text-xl lg:text-3xl font-medium">
                    {doctor.name}{" "}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
