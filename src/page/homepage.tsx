import React from "react";

import Hero from "../components/hero";
import ActivitySection from "../components/activitySection";
import Feature from "../components/features";
import Ownership from "../components/ownership";
import Footer from "../components/footer";
import Information from "../components/information";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ActivitySection />
      <Feature />
      <Information />
      <Footer />
    </div>
  );
};

export default Homepage;
