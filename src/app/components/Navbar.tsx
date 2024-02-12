import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";

const Navbar = () => {
  // const size = 20;

  return (
    <nav className="sticky top-0 z-50 p-5 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          {/* <Image
            src={Logo}
            alt="ydc logo"
            className="rounded-full opacity-70 inline"
            width={size}
            height={size}
          /> */}
          <h3 className="text-xl lg:text-2xl font-bold font-ai text-gradient hover:cursor-pointer inline-block">
            Your Daily Chinese |{" "}
            <span className="text-white/80">Coming Soon!</span>
          </h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
