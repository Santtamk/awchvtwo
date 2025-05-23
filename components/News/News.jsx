import React from "react";
import { NewsCard } from "./NewsCard";

const newsItems = [
  {
    title: "What to Expect During Pregnancy",
    description:
      "From trimester milestones to emotional ups and downs — here's a guide to help you feel informed, prepared, and supported every step of the way.",
    image: "/News/pregnant-woman-sits-couch-with-blue-pillows.jpg",
  },
  {
    title: "Why Vaccines Matter",
    description:
      "Vaccines don’t just protect individuals — they safeguard entire communities. Learn how timely immunization can make all the difference.",
    image:
      "/News/power-prevention-how-routine-screenings-vaccinations-can-save-lives.jpg",
  },
  {
    title: "Family Health: Building Healthy Habits Together",
    description:
      "Practical tips to encourage well-being across generations from kids to grandparents.",
    image: "/News/families-with-young-children.jpg",
  },
];

const News = () => {
  return (
    <div className="self-stretch p-12 bg-black-50 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:px-25">
      <div className="flex flex-col justify-start items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold font-sora tracking-wide">
              Latest Health News and Tips
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-500 text-lg lg:text-2xl font-normal font-['Switzer_Variable']">
              Stay informed with curated articles that help you live better, eat
              healthier, and manage your well-being proactively.
            </div>
          </div>
        </div>
        {/* <div className="self-stretch p-2.5 inline-flex justify-center items-start gap-5 overflow-hidden flex-wrap"> */}
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
