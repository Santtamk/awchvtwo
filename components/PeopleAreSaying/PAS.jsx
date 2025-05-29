"use client";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    image: "/PAS/image.webp",
    name: "Dianne Russell",
    feedback:
      "The doctors at AWCH are knowledgeable, attentive, and genuinely care about your well-being. I felt heard and supported throughout my treatment.",
  },
  {
    image: "/PAS/image2.webp",
    name: "Ralph Edwards",
    feedback:
      "The doctors at AWCH are knowledgeable, attentive, and genuinely care about your well-being. I felt heard and supported throughout my treatment.",
  },
  {
    image: "/PAS/image3.webp",
    name: "Jenny Wilson",
    feedback:
      "The doctors at AWCH are knowledgeable, attentive, and genuinely care about your well-being. I felt heard and supported throughout my treatment.",
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
        <h2 className="text-black-950 text-4xl lg:text-5xl font-bold font-sora tracking-wide">
          What people says about us
        </h2>
        <p className="text-black-700 text-lg lg:text-2xl font-normal font-['Switzer_Variable']">
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
            <p className="text-black-700 text-2xl lg:text-3xl font-medium font-['Switzer_Variable']">
              {current.feedback}
            </p>
            <h3 className="text-primary-700 text-lg lg:text-2xl font-medium font-['Switzer_Variable']">
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
          />
        </button>
      </div>
    </div>
  );
};

export default PAS;
