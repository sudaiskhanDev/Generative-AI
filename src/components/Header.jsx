import React from "react";
import { AuroraText } from "@/components/ui/aurora-text"
const Header = () => {
  return (

    
    <div className="main-header min-h-screen flex items-center">
      <div className="header-data mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-white py-20 sm:py-28 md:py-32">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
          Discover, Compare & Subscribe to the Best
          <br  /> 
          <AuroraText> 
          Tools in One Place
          </AuroraText>
        </h1>

        <h4 className="text-center mt-6 sm:mt-8 text-base sm:text-lg text-[#AFAFAF] font-semibold">
          Your one-stop marketplace for all types of SaaS products — save time,
          find the right tool, and grow faster.
        </h4>

        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            aria-label="Get Started"
            className="group relative overflow-hidden cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-500 text-white font-medium"
          >
            <div className="relative overflow-hidden h-6 sm:h-7">
              <span className="transform transition-transform duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                Get Started
              </span>
              <span className="absolute top-7 left-0 transform transition-all duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Get Started
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
