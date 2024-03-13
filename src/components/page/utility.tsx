import React from "react";
import Header from "../header";
import Footer from "../footer";
import Ownership from "../ownership";
const UtilitiesPage = () => {
  return (
    <>
      <Header />
      {/* Adjusted the section for full height and flex centering */}

      <div className="mb-[5em]">
        <Ownership />
      </div>
      <Footer />
    </>
  );
};

export default UtilitiesPage;
