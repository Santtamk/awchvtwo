import React from "react";

const Example22 = () => {
  return (
    <div>
      <div className="self-stretch h-80 bg-gradient-to-bl from-black/0 to-black/30 rounded-3xl flex flex-col justify-end items-start overflow-hidden">
        <div className="self-stretch p-5 flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch justify-start text-Black-50 text-3xl font-medium font-['Switzer_Variable']">
              General Medicine & Family Care
            </div>
          </div>
          <div className="size- px-3.5 py-3 bg-white/30 rounded-[32px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-white text-base font-medium font-['Switzer_Variable']">
              Read More
            </div>
            <div className="size-4 relative">
              <div className="size-4 left-0 top-0 absolute bg-zinc-300" />
              <div className="size-2.5 left-[3.75px] top-[3.75px] absolute bg-Black-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example22;
