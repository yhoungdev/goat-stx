
import React from "react";
import Header from "./header";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/headerImage.jpeg)" }}
    >
      {/* Ensure the header is above other content */}
      <div className="relative z-20">
        <Header />
      </div>
      <div className="bg-[linear-gradient(179deg, #000000b5, #000000c7)] h-full z-10">
        {/* Adding an overlay with a lower z-index to ensure content stays behind the header */}
        <div className="absolute inset-0 bg-black bg-opacity-90 z-0"></div>
        <div className="flex md:w-[800px] mx-auto flex-col justify-start h-[90vh] items-center px-4 md:px-8 pt-4 md:pt-8 relative z-10">
          <h1 className="hero-text my-[2em] title_element text-[5em] text-center md:text-[90px] font-bold mb-4 leading-snug">
            MEME FINANCE LAYER OF BITCOIN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
