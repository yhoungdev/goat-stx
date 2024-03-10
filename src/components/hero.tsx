import React from "react";
import Header from "./header";
import Button from "./micro/button";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/headerImage.jpeg)" }}
    >
    <div className="bg-[linear-gradient(179deg, #000000b5, #000000c7)] h-full">
    <Header />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 "></div>
      <div className="flex md:w-[800px] mx-auto flex-col justify-center  h-[90vh] items-center px-4 md:px-8">
        <h1 className=" shadow-effect stroke_element default-text  title_element stroke text-[5em] text-center md:text-[90px]  font-bold text-white mb-4 leading-snug">
          MEME FINANCE LAYER OF BITCOIN
        </h1>
        {/* <p className="hidden text-center  title_element default-text md:block text-3xl lg:text-2xl text-white mb-8">
        Go wild in a land of pure chaotic fun: rampage, loot & fight
        </p> */}
        {/* <Button className={""}>Start Playing</Button> */}
      </div>
    </div>
    </div>
  );
};

export default Hero;
