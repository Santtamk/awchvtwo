import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-2.5 justify-between items-center gap-2  md:pt-5 md:px-7 lg:p-5 lg:px-25">
      <ul className="list-none flex flex-col gap-[1rem] ">
        <li>
          <div className="w-[4.25rem] h-[0.8125rem] md:w-[9.4375rem] md:h-[1.875rem]">
            <Image
              src="/nav_image.webp"
              alt="navbar_logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </li>
        <li>
          <div>
            <p className="text-primary-700 font-normal text-[0.312rem] font-switzer md:text-[0.8125rem] md:font-normal">
              Compassion, Care, Commitment
            </p>
          </div>
        </li>
      </ul>

      <ul className="list-none flex gap-1 items-center justify-center md:gap-7">
        <li
          className="text-primary-800 hidden md:block text-[0.9375rem]  font-switzer md:text-[1.375rem] md:font-medium cursor-pointer
"
        >
          Our Doctors
        </li>
        <li>
          <button
            className="text-white bg-primary-800 font-medium rounded-4xl text-[0.9375rem] py-[0.75rem] cursor-pointer
 px-[0.9375rem] font-switzer flex gap-[0.3125rem] items-center justify-center md:py-[1.125rem] md:px-[1.75rem] "
          >
            <div className="">Call to Book a Session</div>
            <div className="w-[0.9375rem] h-[0.9375rem]">
              <Image
                src="/call.png"
                alt="call_logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
