import React from "react";
import Header from "../header";
import Footer from "../footer";
const UtilitiesPage  = () => {
  return (
    <>
      <Header />
      {/* Adjusted the section for full height and flex centering */}
      <section className="text-white flex justify-center items-center min-h-screen">
        <div className="max-w-2xl px-4 md:px-8 text-center  space-y-6">
          {/* Text centering adjustments */}
          <h2 className="text-5xl md:text-7xl font-bold uppercase title_element default-text">
            TOKEN UTILITY
          </h2>
          <p>
            The $Goat project is an innovative meme finance ecosystem on
            Bitcoin's Stacks, designed to offer secure, inclusive, and
            easy-to-launch solutions for meme communities.
          </p>
  
        </div>
      </section>

      <div className="mb-[5em]">
        
      </div>
      <Footer />
    </>
  );
};

export default UtilitiesPage;
