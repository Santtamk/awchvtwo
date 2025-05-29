"use client";

import Image from "next/image";
import React, { useState } from "react";

const videoUrls = ["/videos/sample_video.mp4", "/videos/sample_video01.mp4"];

const VideoSection101 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videoUrls.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="w-full py-8 px-4 lg:px-25 flex flex-row justify-center items-center gap-2 overflow-x-hidden">
      {/* Left arrow */}
      <button
        className="p-[0.9375rem] bg-primary-800 rounded-full flex justify-center items-center shrink-0 cursor-pointer hover:bg-primary-900 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 rotate-180"
        onClick={handlePrev}
      >
        <Image src="/arrow_right.svg" alt="arrow left" width={24} height={24} />
      </button>

      {/* Video */}
      <div className="flex-1">
        <video
          key={currentIndex}
          controls
          className="w-full h-[21.875rem] lg:h-auto rounded-2xl object-cover"
        >
          <source src={videoUrls[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right arrow */}
      <button
        className="p-[0.9375rem] bg-primary-800 rounded-full flex justify-center items-center shrink-0 hover:bg-primary-900 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 cursor-pointer "
        onClick={handleNext}
      >
        <Image
          src="/arrow_right.svg"
          alt="arrow right"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default VideoSection101;
