import React from "react";
import Button from "./micro/button";

const ActivitySection = () => {
  return (
    <section className=" text-white py-[9em] md:py-5 px-4 md:px-8">
      <div className="h-[90vh] items-center flex ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-bold uppercase title_element default-text">
              New Activity
            </h2>

            <p className="text-3xl font-semibold title_element shadow-lg  secondary-effect ">
              $450,000 Drop on Memefi Discord: Join Now!
            </p>
            <p>
              We've just launched an NFT Giveaway Campaign on our Discord.
              Completing a simple task will get you Royale Tickets that can win
              Elite and Royale NFTs with $MEMEFI token drops.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full mr-4"></span>
                Get Level 10 in Discord
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full mr-4"></span>
                Invite Friends
              </li>
            </ul>
            <Button className="">Join Discord</Button>
          </div>
          <div
            className="md:flex md:justify-end  bg-black h-[400px] rounded-lg"
            data-aos="fade-up"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
