import React from "react";
import ServiceCard from "./ServiceCard";

const section1 = [
  {
    title: "General Medicine & Family Care",

    image: "/Services/section1/General.webp",
  },
  {
    title: "Specialist Consultations",

    image: "/Services/section1/Specialist.webp",
  },
  {
    title: "Diagnostics & Lab Services",

    image: "/Services/section1/Diagnostics.webp",
  },
];

const section2 = [
  {
    title: "Women’s health",

    image: "/Services/section2/happy-woman-standing-showing-biceps.webp",
  },
  {
    title: "Child Health",

    image:
      "/Services/section2/pediatric-doctor-comforting-child-patient-checkup-warm-colorful-clinic.webp",
  },
];

const CoreServices = () => {
  return (
    <div className="self-stretch p-12  inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
      <div className=" flex flex-col justify-start items-center gap-3">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold tracking-wide">
              Our Core Services
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-500 text-lg lg:text-2xl font-normal">
              Our healthcare offerings are built around the needs of modern
              individuals and families. From diagnostics to preventive programs,
              we provide comprehensive care for every stage of life.
            </div>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {section1.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {section2.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
