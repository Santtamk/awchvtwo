import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-2.5 justify-between items-center gap-2  md:pt-4 md:px-7 lg:p-5 lg:px-25">
      <Link
        href="/"
        className="cursor-pointer flex justify-center items-center  p-2 md:p-0 lg:pb-4 content-center"
      >
        <div className="list-none flex flex-col gap-[1rem] justify-center items-center">
          <div className="w-[4.25rem] h-[0.8125rem] md:w-[9.4375rem] md:h-[1.875rem]">
            <Image
              src="/nav_image.webp"
              alt="navbar_logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              // priority={true}
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
      </Link>

      <ul className="list-none flex flex-col md:flex-row gap-2 md:gap-7 items-center justify-center">
        <Link
          className="text-white bg-primary-800 font-medium rounded-4xl text-sm py-2.5 cursor-pointer px-4 flex gap-1.5 items-center justify-center md:py-4.5 md:px-7 hover:bg-primary-900 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 md:text-base lg:text-xl order-1 md:order-2 w-full md:w-auto"
          href="tel:+917872227333"
        >
          <div className="size-4 lg:size-5 relative">
            <Image
              src="/call.png"
              alt="Call"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority={false}
              loading="lazy"
            />
          </div>
          <div>+91 787-222-7333</div>
        </Link>
        <Link
            href="/rate-chart"
            className="text-primary-800 border-2 border-primary-800 font-semibold text-sm py-2 px-4 rounded-4xl hover:bg-primary-800 hover:text-white transition-all duration-300 order-2 md:order-1 w-full md:w-auto text-center md:border-0 md:bg-transparent md:hover:bg-transparent md:hover:text-primary-900 md:text-base lg:text-xl"
        >
            Rate Chart
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
