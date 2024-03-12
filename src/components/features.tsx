import React from "react";

const Feature = () => {
  return (
    <div className="bg-brown-600 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h2
        className="text-5xl md:text-8xl text-white mb-6 title_element default-text"
        data-aos="fade-up"
      >
        PROJECT UTILITY
      </h2>
      {/* <p className="text-lg text-gray-200 mb-12" data-aos="fade-up">
        Here's the breakdown of the next meme-styled gaming mona lisa
      </p> */}
      <div className="" data-aos="fade-up">
        <div className="flex gap-4 flex-col md:flex-row">
          <div
            className=" text-white  rounded-lg shadow-md w-[80vw] h-[350px] md:w-[500px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/6.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "rgb(0 0 0 / 91%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h1 className="text-bold title_element text-4xl">
                  Full scale meme launchpad
                </h1>
                <p className="1em">
                  create, launch and bootstrap meme projects with no extra line
                  of codes
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[400px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/7.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "rgb(0 0 0 / 91%)",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div>
                <h1 className="text-bold default_text title_element text-4xl">
                  First meme staking protocol on bitcoin{" "}
                </h1>
                <p className="1em">stake meme tokens earn rewards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row-reverse my-8">
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[600px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/4.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  mx-auto"
              style={{
                background: "rgb(0 0 0 / 91%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="w-full">
                <h1 className="text-bold title_element text-4xl">
                  Anti rug liquidity locker
                </h1>
                <p className="my-4">
                  projects and meme developers lock liquidity, creating a more
                  secured meme ecosystem
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[400px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/3.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "rgb(0 0 0 / 91%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="text-center w-full">
                <h1 className="text-bold title_element text-4xl">Meme Dex </h1>
                <p className="1em">Trade meme tokens pairs with ease</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
