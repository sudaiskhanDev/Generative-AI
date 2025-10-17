import React from "react";
import { AuroraText } from "./ui/aurora-text";
import { Particles } from "@/components/ui/particles";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Highlighter } from "@/components/ui/highlighter";

const Header = () => {
  return (
    <div
      className="
        main-header
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* 🌌 Background Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles />
      </div>

      {/* ✨ Foreground Content */}
      <div
        className="
          header-data
          relative
          z-10
          mx-auto
          max-w-4xl
          px-4
          sm:px-6
          lg:px-8
          text-white
          py-20
          sm:py-28
          md:py-32
        "
      >
        {/* 🧭 Main Heading */}
        <h1
          className="
            font-bold
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            leading-tight
            text-center
          "
        >
          Discover, Compare & Subscribe to the Best
          <br className="hidden md:inline" />
          <AuroraText>Tools in One Place</AuroraText>
        </h1>

        {/* 📝 Subheading with Highlighter Effect */}
        <p
          className="
            text-center
            mt-6
            sm:mt-8
            text-base
            sm:text-lg
            text-white
            font-semibold
          "
        >
          Your one-stop{" "}
          <Highlighter action="underline" color="#FF9800">
            marketplace
          </Highlighter>{" "}
          for all types of{" "}
          <Highlighter action="highlight" color="#87CEFA">
            SaaS products
          </Highlighter>{" "}
          — save time, find the right tool, and grow faster.
        </p>

        {/* 🚀 CTA Button */}
        <div className="flex justify-center">
          <ShinyButton
            className="
              mt-10
              flex
              items-center
              justify-center
              px-6
              py-3
              text-lg
              font-semibold
              text-white
              rounded-full
              bg-gradient-to-r
              transition-colors
            "
          >
            Get Started
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
