import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" bg-cover bg-center p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <span className=" md:block  font-bold title_element  text-3xl default-text default-text">
            GOATSTX
          </span> */}
          <a href="/">
            <img src="/logo.png" width={"65"} />
          </a>
        </div>
        {/* <div className=" hidden md:flex items-center none">

          <a
              href="/roadmap"
              className="text-white px-4 py-2 hover:underline title_element  default-text text-3xl"
          >
            Road Map
          </a>
        
        </div> */}
        <div className="flex justify-center w-full md:w-auto items-center">
          <a
            href="/roadmap"
            className="text-white px-4 py-2 hover:underline title_element  default-text text-3xl"
          >
            Road Map
          </a>
          {/* Insert actual links to your social media */}
          <a
            href="https://tinyurl.com/GoatCoinSTXdiscord"
            className="text-white px-2"
          >
            <FaDiscord size={24} />
          </a>
          <a href="https://twitter.com/GoatCoinSTX" className="text-white px-2">
            <FaTwitter size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
