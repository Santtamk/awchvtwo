import Image from "next/image";
import React from "react";

const aboutUsCards = [
  {
    title: "Primary Care, Redefined",
    description:
      "From everyday check-ups to long-term care, our doctors are here to provide personalized support that prioritizes your health.",
    icon: "/aboutUs/Stethoscope.svg",
  },
  {
    title: "Your Health, Our Priority",
    description:
      "We combine modern technology with heartfelt care to offer healthcare that fits around your life—not the other way around. Every treatment, visit, and conversation is thoughtfully designed with you and your family in mind.",
    icon: "/aboutUs/Heart-Medical.svg",
  },
  {
    title: "Expertise You Can Trust",
    description:
      "Our trusted doctors and specialists listen closely and care deeply— crafting accurate diagnoses and personalized treatment plans that support your health journey at every stage.",
    icon: "/aboutUs/User-Doctor.svg",
  },
  {
    title: "Accessible. Affordable. Reliable.",
    description:
      "Our services are thoughtfully designed to be flexible and affordable, ensuring that quality care is always accessible without compromise.",
    icon: "/aboutUs/Bed.svg",
  },
];

const AboutUs = () => {
  return (
    <div className="self-stretch p-12  inline-flex flex-col justify-start items-center gap-5 overflow-hidden lg:px-25">
      <div className=" flex flex-col justify-center items-center">
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold tracking-tight">
              About Us
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-700  text-lg lg:text-2xl font-normal ">
              At AWCH, we care for every woman and child like family.
              <br />
              Rooted in compassion and powered by modern medicine, we combine
              expert care with a personal touch. Whether you're expecting a
              baby, raising one, or navigating your own health journey, our
              dedicated team is here—making quality healthcare accessible,
              respectful, and close to home.
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 inline-flex justify-center items-center gap-5 overflow-hidden flex-col lg:flex-row">
          <div className="self-stretch px-2.5 py-10 inline-flex justify-center items-center gap-5 overflow-hidden flex-col lg:flex-row flex-wrap">
            {aboutUsCards.map((card, idx) => (
              <div
                key={idx}
                className="flex-1 self-stretch p-5 bg-black-50 rounded-[32px]  outline-1 outline-offset-[-1px] outline-black-100 inline-flex flex-col justify-start items-start gap-3 overflow-hidden hover:shadow-xl group transition-transform duration-500 hover:scale-[1.015]"
              >
                <div className="size- p-5 bg-primary-800 rounded-[50px] flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                  {card.icon && (
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                      className="w-6 h-6 lg:w-7 lg:h-7"
                      priority={false}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="self-stretch justify-start text-primary-700 text-lg lg:text-2xl font-medium ">
                      {card.title}
                    </div>
                  </div>
                  <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="self-stretch justify-start text-black-700 text-base lg:text-xl font-normal ">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
