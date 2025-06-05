import Image from "next/image";
import React from "react";

const doctors = [
  {
    name: "Evelyn Wright, M.D.",
    bgGradient: "from-black/0 to-black/30",
    image: "/Doctors/Doctor1.webp",
  },
  {
    name: "Blake Shaw, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor2.webp",
  },
  {
    name: "Jenna Cadwell, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor3.webp",
  },
  {
    name: "David Wayne, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor4.webp",
  },
];

const OurDoctors = () => {
  return (
    <div
      className="self-stretch p-12  inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:px-25"
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

        <div className="self-stretch px-2.5 py-10  justify-center items-start gap-5 overflow-hidden flex-wrap grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            // <div
            //   key={index}
            //   className="relative flex-1 min-w-[250px] lg:h-[500px] h-80 rounded-3xl overflow-hidden group transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl"
            // >
            //   {/* Background Image */}
            //   <div
            //     className="absolute inset-0 bg-cover bg-center"
            //     style={{
            //       backgroundImage: `linear-gradient(to bottom left, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${doctor.image})`,
            //     }}
            //   ></div>

            //   {/* Gradient Overlay */}
            //   <div
            //     className={`absolute inset-0 bg-gradient-to-bl ${doctor.bgGradient}`}
            //   ></div>

            //   <div className="absolute bottom-0 w-full p-5 z-10">
            //     <div className="text-black-50 text-xl lg:text-3xl font-medium ">
            //       {doctor.name}
            //     </div>
            //   </div>
            // </div>
            <div
              key={index}
              className="relative flex-1 min-w-[250px] lg:h-[500px] h-80 rounded-3xl overflow-hidden group transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl"
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
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className={`absolute inset-0 ${doctor.bgGradient} z-20`} />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-5 z-30">
                <div className="text-black-50 text-xl lg:text-3xl font-medium">
                  {doctor.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
