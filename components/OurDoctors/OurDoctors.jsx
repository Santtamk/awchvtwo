import React from "react";

const doctors = [
  {
    name: "Evelyn Wright, M.D.",
    bgGradient: "from-black/0 to-black/30",
    image: "/Doctors/Doctor1.png",
  },
  {
    name: "Blake Shaw, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor2.png",
  },
  {
    name: "Jenna Cadwell, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor3.png",
  },
  {
    name: "David Wayne, M.D.",
    bgGradient: "from-black/5 to-black/20",
    image: "/Doctors/Doctor4.png",
  },
];

const OurDoctors = () => {
  return (
    <div className="self-stretch p-12 bg-black-50 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:px-25">
      <div className="flex flex-col justify-start items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold font-sora tracking-wide">
              Meet Our Doctors
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-500 text-lg lg:text-2xl font-normal font-['Switzer_Variable']">
              Our medical team combines experience, empathy, and excellence.
              Meet the experts committed to guiding your healthcare journey.
            </div>
          </div>
        </div>

        <div className="self-stretch p-2.5  justify-center items-start gap-5 overflow-hidden flex-wrap grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            // <div
            //   key={index}
            //   className={`flex-1 min-w-[250px] lg:h-[500px] h-80 bg-gradient-to-bl ${doctor.bgGradient} rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden`}
            //   style={{
            //     backgroundImage: `url(${doctor.image})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //   }}
            // >
            <div
              key={index}
              className="relative flex-1 min-w-[250px] lg:h-[500px] h-80 rounded-3xl overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${doctor.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-bl ${doctor.bgGradient}`}
              ></div>

              {/* <div className="self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden z-10">
                <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <div className="self-stretch justify-start text-black-50  text-xl lg:text-3xl font-medium font-['Switzer_Variable']">
                    {doctor.name}
                  </div>
                </div>
              </div> */}
              <div className="absolute bottom-0 w-full p-5 z-10">
                <div className="text-black-50 text-xl lg:text-3xl font-medium font-['Switzer_Variable']">
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
