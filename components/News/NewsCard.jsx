import Image from "next/image";

export const NewsCard = ({ title, description, image }) => (
  <div className="flex-1 self-stretch bg-black-50 rounded-3xl outline-1 outline-black-100 inline-flex flex-col justify-start items-center overflow-hidden group transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl">
    <img
      className="self-stretch h-72 relative object-cover"
      src={image}
      alt={title}
    />
    <div className="self-stretch flex-1 p-5 flex flex-col  justify-start lg:justify-between items-start overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-950 text-3xl font-medium font-['Switzer_Variable']">
            {title}
          </div>
        </div>
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch justify-start text-black-700 text-base lg:text-xl font-normal font-['Switzer_Variable']">
            {description}
          </div>
        </div>
      </div>
      <div className=" px-3.5 py-3 lg:px-7 lg:py-4 bg-primary-800 rounded-[32px] inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer">
        <div className="text-white text-base lg:text-xl font-medium font-['Switzer_Variable']">
          Read More
        </div>
        <div className="size-4 lg:size-6 relative">
          <Image
            alt="arrow_outward"
            src="/arrow_outward.svg"
            width={24}
            height={24}
            className="w-6 h-6 aspect-square"
          />
        </div>
      </div>
    </div>
  </div>
);
