import React from "react";

const Information = () => {
  return (
    <div className="bg-brown-800  px-3 text-white text-center py-12 min-h-screen flex flex-col justify-center w-full md:w-[800px] mx-auto">
      <h2
        className="text-3xl lg:text-5xl text-center font-bold mb-[1.5em] title_element default-text"
        data-aos="fade-up"
      >
        CRYPTO MEME RAMPAGE STARTS TODAY!
      </h2>

      <div
        className=" flex items-center mx-auto p-6 rounded-lg shadow-lg w-full md:w-[900px] h-[350px] md:h-[500px] text-center"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "center",
          backgroundPosition: "center",
          backgroundImage: "url(/bg/cat.jpeg)",
        }}
      >
        <div></div>
      </div>
    </div>
  );
};

export default Information;
