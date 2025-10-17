import React from "react";
import { AuroraText } from "./ui/aurora-text";
import { Particles } from "@/components/ui/particles";
import { ShinyButton } from "@/components/ui/shiny-button"

const Header = () => {
  return (
    <div className="main-header relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* 🔹 Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles />
      </div>

      {/* 🔸 Foreground Content */}
      <div className="header-data relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-white py-20 sm:py-28 md:py-32">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
          Discover, Compare & Subscribe to the Best
          <br className="hidden md:inline" />
          <AuroraText>Tools in One Place</AuroraText>
        </h1>

        <h4 className="text-center mt-6 sm:mt-8 text-base sm:text-lg text-[#AFAFAF] font-semibold">
          Your one-stop marketplace for all types of SaaS products — save time,
          find the right tool, and grow faster.
        </h4>

        <div>
      
         <ShinyButton 
         className="mt-10 mx-auto flex items-center text-white justify-center px-6 py-3 bg-gradient-to-r rounded-full text-lg font-semibold transition-colors "
         >Get Started</ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
