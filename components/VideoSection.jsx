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
    <div className="w-full self-stretch py-12 px-3  inline-flex flex-row justify-center items-center gap-1 lg:gap-3 overflow-hidden lg:px-25 ">
      {/* Left arrow */}
      <button
        className="
         p-2.5 lg:p-5 bg-primary-800 rounded-full inline-flex flex-col justify-center items-center  overflow-hidden content-center cursor-pointer "
        onClick={handlePrev}
      >
        <Image src="/arrow_left.svg" alt="arrow" width={24} height={24} />
      </button>

      {/* Video area */}

      <video
        key={currentIndex}
        controls
        className="w-full h-[21.875rem] lg:h-auto rounded-[32px] object-cover"
      >
        <source src={videoUrls[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Right arrow */}
      <button
        className=" 
         p-2.5 lg:p-5 bg-primary-800 rounded-full inline-flex flex-col justify-center items-center content-center overflow-hidden cursor-pointer"
        onClick={handleNext}
      >
        <Image src="/arrow_right.svg" alt="arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default VideoSection101;
