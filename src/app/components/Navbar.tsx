import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-5 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="text-xl lg:text-2xl font-bold font-ai text-gradient hover:cursor-pointer">Your Daily Chinese | <span className="text-white/80">Coming Soon!</span></p>
      </div>
    </nav>
  );
};

export default Navbar;
