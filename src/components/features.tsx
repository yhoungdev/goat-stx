import React from "react";

const Feature = () => {
  return (
    <div className="bg-brown-600 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h2
        className="text-5xl md:text-8xl text-white mb-6 title_element default-text"
        data-aos="fade-up"
      >
        GAME FEATURES
      </h2>
      <p className="text-lg text-gray-200 mb-12" data-aos="fade-up">
        Here's the breakdown of the next meme-styled gaming mona lisa
      </p>
      <div className="" data-aos="fade-up">
        <div className="flex gap-4 flex-col md:flex-row">
          <div
            className=" p-6 rounded-lg shadow-md w-[80vw] h-[350px] md:w-[600px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/4.jpeg)",
            }}
          ></div>
          <div
            className="bg-black p-6 rounded-lg shadow-md w-[80vw] h-[350px] md:w-[300px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/4.jpeg)",
            }}
          ></div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row-reverse my-8">
          <div
            className="bg-blue-300 p-6 rounded-lg shadow-md w-[80vw] h-[350px] md:w-[600px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/6.jpeg)",
            }}
          ></div>
          <div
            className="bg-black p-6 rounded-lg shadow-md w-[80vw] h-[350px] md:w-[300px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/7.jpeg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
