import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-2.5 justify-between items-center gap-2  md:pt-4 md:px-7 lg:p-5 lg:px-25">
      <Link href="/" className="cursor-pointer">
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

      <ul className="list-none flex gap-1 items-center justify-center md:gap-7">
        <Link
          className="text-white bg-primary-800 font-medium rounded-4xl text-[0.9375rem] py-[0.75rem] cursor-pointer
 px-[0.9375rem] flex gap-[0.3125rem] items-center justify-center md:py-[1.125rem] md:px-[1.75rem] hover:bg-primary-900 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 text-base lg:text-xl"
          href="tel:+917872227333"
        >
          <div className="size-4 lg:size-5 relative">
            <Image
              src="/call.png"
              alt="Calendar"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority={false}
              loading="lazy"
            />
          </div>
          <div className="">+91 787-222-7333</div>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
