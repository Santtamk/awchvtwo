"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoUrls = ["/videos/sample_video.mp4", "/videos/sample_video2.mp4"];

export default function NewVideo() {
  //   const videoRefs = useRef([]);
  //   const [playingIndex, setPlayingIndex] = useState(null);

  //   const togglePlay = () => {
  //     const video = videoRefs.current[index];
  //     if (!video) return;

  //     // Pause all other videos before playing new one
  //     videoRefs.current.forEach((v, i) => {
  //       if (v && i !== index) {
  //         v.pause();
  //       }
  //     });

  //     if (video.paused) {
  //       video.play();
  //       setPlayingIndex(index);
  //     } else {
  //       video.pause();
  //       setPlayingIndex(null);
  //     }
  //   };

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [fade, setFade] = useState(true);

  const playCurrentVideo = () => {
    if (videoRef.current) {
      videoRef.current.load(); // reset
      // videoRef.current.play(); // autoplay
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
      // videoRef.current.play();
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
    <div className="w-full px-4 py-12 bg-black-50 flex justify-center items-center">
      <Swiper
        navigation
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#95065e",
        }}
        className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden text-primary-900"
      >
        {videoUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <video
                key={currentIndex}
                ref={videoRef}
                // ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                playsInline
                muted
              >
                <source
                  // src={url}
                  src={videoUrls[currentIndex]}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Button */}
              <button
                onClick={() => togglePlay(index)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full"
              >
                {/* <Image
                  src={
                    playingIndex === index
                      ? "/pause_icon.png"
                      : "/playButton.svg"
                  }
                  alt="Play/Pause"
                  width={30}
                  height={30}
                /> */}
                <Image
                  src={isPlaying ? "/pause_icon.png" : "/playButton.svg"}
                  alt="Play/Pause"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
