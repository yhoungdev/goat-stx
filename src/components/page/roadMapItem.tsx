import React from 'react';

const RoadmapItem = ({ title, imageSrc }) => (
  <div className="flex flex-col items-center p-4 bg-[#091813] w-full md:w-[400px] border-l-8 border-white py-[5em]">
    <h3 className="text-white text-lg font-semibold  ">{title}</h3>
  </div>
);


const ROADMAP = ["Full scale meme launchpad" , "First meme staking protocol on bitcoin" , "Anti rug liquidity locker" , "Meme Dex"]

const RoadmapData = () => {
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap  items-stretch gap-8 md:gap-[2em]">
          {
            ROADMAP.map(( _ , key) => <RoadmapItem key={key} title={_} imageSrc="/path-to-your-image.png" />)
          }
       
        </div>
      </div>
    </div>
  );
};

export default RoadmapData;
