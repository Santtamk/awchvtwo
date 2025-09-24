"use client";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    image: "/PAS/testimonial1.webp",
    name: "Sarla Devi",
    feedback: `I am so grateful for the care I received at AWCH hospital. The doctors and nurses took such wonderful care of me.
I feel great now, and the service here is truly excellent. I would wholeheartedly recommend AWCH to anyone in need of medical help.`,
  },
  {
    image: "/PAS/testimonial2.webp",
    name: "Anita Kumari",
    feedback: `When my son was sick, we were so worried, but the team at AWCH was a godsend. I want to express my sincere thanks to all the doctors and the entire nursing staff for the care, devotion and patience displayed during the course of his treatment. Thank you, AWCH team, for making this a positive experience.`,
  },
  {
    image: "/PAS/testimonial3.webp",
    name: "Priya Sharma",
    feedback: `I was a patient at AWCH hospital. The service here is truly excellent. The nurses and staff were all wonderful, and their kindness made my experience great. I am very happy and would highly recommend AWCH to everyone.`,
  },
];

const PAS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const current = testimonials[currentIndex];

  const prev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300); // Duration of the fade transition
  };

  const next = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center content-center gap-4 lg:gap-6  px-4 lg:px-25 py-10">
      {/* Header texts */}
      <div className="flex flex-col items-center gap-3 lg:gap-5  text-center">
        <h2 className="text-black-950 text-4xl lg:text-5xl font-bold  tracking-tight">
          What people says about us
        </h2>
        <p className="text-black-700 text-lg lg:text-2xl font-normal">
          Real stories from those whose lives have been touched by our care.
        </p>
      </div>

      {/* Carousel area */}
      <div className="flex flex-row justify-center items-center content-center gap-2 lg:gap-4 overflow-hidden w-full ">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="p-3.5 lg:p-5 bg-primary-800 rounded-full flex justify-center items-center shrink-0 transition-transform  rotate-180 cursor-pointer hover:bg-primary-900"
          aria-label="Previous testimonial"
        >
          <Image
            src="/arrow_right.svg"
            alt="arrow left"
            width={24}
            height={24}
            priority={false}
            loading="lazy"
          />
        </button>

        {/* Testimonial content */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-5 flex-1 overflow-hidden transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          key={currentIndex} // re-mount for transition on change
        >
          <img
            src={current.image}
            alt={current.name}
            className="rounded-3xl max-w-[200px] lg:max-w-[300px] object-cover"
          />
          <div className="flex flex-col gap-3 max-w-lg ">
            <p className="text-black-700 text-xl lg:text-2xl font-medium">
              {current.feedback}
            </p>
            <h3 className="text-primary-700 text-lg lg:text-2xl font-medium">
              {current.name}
            </h3>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="p-3.5 lg:p-5 bg-primary-800 hover:bg-primary-900 rounded-full flex justify-center items-center shrink-0 transition-transform  cursor-pointer"
          aria-label="Next testimonial"
        >
          <Image
            src="/arrow_right.svg"
            alt="arrow right"
            width={24}
            height={24}
            priority={false}
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default PAS;
