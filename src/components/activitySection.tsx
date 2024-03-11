import React from "react";
import Button from "./micro/button";

const ActivitySection = () => {
  return (
    <section className=" text-white py-[9em] md:py-5 px-4 md:px-8">
      <div className="h-[90vh] items-center flex ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-bold uppercase title_element default-text">
              ABOUT $GOAT
            </h2>

            {/* <p className="text-3xl font-semibold title_element shadow-lg  secondary-effect ">
              $450,000 Drop on Memefi Discord: Join Now!
            </p> */}
            <p>
              The $Goat is a meme finance layer on bitcoin, focused on creating
              an Healthy, secured and all inclusive meme ecosystem on the
              leading bitcoin layer 2 (stacks), our goal is to bring instant
              utility and ease of launch to meme communities building on
              bitcoin.
            </p>
            {/* <ul className="space-y-4">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full mr-4"></span>
                Get Level 10 in Discord
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full mr-4"></span>
                Invite Friends
              </li>
            </ul> */}
            <Button className="">Join Discord</Button>
          </div>
          <div
            className="md:flex md:justify-end  bg-black h-[400px] rounded-lg"
            data-aos="fade-up"
            style={{
              backgroundImage: "url(/headerImage.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
