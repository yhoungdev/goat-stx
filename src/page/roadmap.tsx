import React from "react";
import Button from "../components/micro/button";
import Header from "../components/header";
import RoadmapData from "../components/page/roadMapItem";
import Footer from "../components/footer";

const Roadmap = () => {
  return (
    <>
      <Header />
      {/* Adjusted the section for full height and flex centering */}
      <section className="text-white flex justify-center items-center min-h-screen">
        <div className="max-w-2xl px-4 md:px-8 text-center  space-y-6">
          {/* Text centering adjustments */}
          <h2 className="text-5xl md:text-7xl font-bold uppercase title_element default-text">
            GOATSTX ROADMAP
          </h2>
          <p>
            The $Goat project is an innovative meme finance ecosystem on
            Bitcoin's Stacks, designed to offer secure, inclusive, and
            easy-to-launch solutions for meme communities.
          </p>
          <Button>Luanch App</Button>
        </div>
      </section>

      <div className="mb-[5em]">
        <RoadmapData />
      </div>
      <Footer />
    </>
  );
};

export default Roadmap;
