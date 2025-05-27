"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const videoUrls = ["/videos/sample_video.mp4", "/videos/sample_video2.mp4"];

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [fade, setFade] = useState(true);

  const playCurrentVideo = () => {
    if (videoRef.current) {
      videoRef.current.load(); // reset
      videoRef.current.play(); // autoplay
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setFade(false); // start fade-out
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % videoUrls.length;
      setCurrentIndex(nextIndex);
      setFade(true); // fade back in
    }, 300); // match transition duration
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      const prevIndex =
        (currentIndex - 1 + videoUrls.length) % videoUrls.length;
      setCurrentIndex(prevIndex);
      setFade(true);
    }, 300);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    playCurrentVideo(); // autoplay on change
  }, [currentIndex]);

  return (
    <div className="w-full self-stretch p-12  inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:px-25 ">
      <div className=" inline-flex justify-center items-center gap-5">
        {/* Left arrow */}
        <button
          className="cursor-pointer
 p-3.5 lg:p-5 bg-primary-800 rounded-full inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          onClick={handlePrev}
        >
          <Image
            src="/arrow_left.svg"
            alt="arrow"
            width={24}
            height={24}
            className="w-6 h-6 "
          />
        </button>

        {/* Video area */}

        <div className="w-full max-w-6xl mx-auto px-4 ">
          {/* <div
            className="relative w-auto  bg-black-200 rounded-[32px] inline-flex flex-col justify-center items-center overflow-hidden cursor-pointer max-w-5xl   

          "
          > */}
          <div className="relative w-full max-w-6xl mx-auto aspect-video sm:aspect-video h-[250px] sm:h-auto rounded-[16px] overflow-hidden">
            <video
              key={currentIndex}
              ref={videoRef}
              className={` object-cover transition-opacity duration-300 rounded-[32px] ${
                fade ? "opacity-100" : "opacity-0"
              } object-cover`}
              playsInline
            >
              <source src={videoUrls[currentIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Custom Play/Pause Button */}
            <button
              onClick={() => togglePlay(index)}
              className=" cursor-pointer
 absolute flex justify-center items-center content-center  cursor-pointer  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full"
            >
              <Image
                src={isPlaying ? "/pause_icon.png" : "/playButton.svg"}
                alt="Play/Pause"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
        {/* Right arrow */}
        <button
          className=" cursor-pointer
 p-3.5 lg:p-5 bg-primary-800 rounded-full inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          onClick={handleNext}
        >
          <Image
            src="/arrow_right.svg"
            alt="arrow"
            width={24}
            height={24}
            className="w-6 h-6 "
          />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
