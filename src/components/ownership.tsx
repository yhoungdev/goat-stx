import React, { Fragment } from "react";
import { ROADMAPDATA } from "../data/roadmapData";

const Ownership = () => {
  return (
    <div className="bg-brown-800 px-3 text-white text-center py-12 min-h-screen flex flex-col justify-center">
      <h2
        className="text-5xl lg:text-8xl font-bold mb-4 title_element default-text"
        data-aos="fade-up"
      >
        ROADMAP
      </h2>
      {/* <p className="mb-8  text-md md:text-xl" data-aos="fade-up">
        Get your rewards Sky-High by becoming an all-powerful memelord
      </p> */}
      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4">
        {ROADMAPDATA.map(({ title, content }, index) => (
          <Fragment>
            <div
              key={index}
              className="bg-[#040404fc] flex items-center p-6 rounded-lg shadow-lg w-full md:w-[300px] h-[250px] text-center"
            >
              <div>
                <h1 className="text-4xl  title_element">{title}</h1>
                <p className="my-3">{content}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ownership;
