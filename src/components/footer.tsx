import React from "react";
import { FaDiscord, FaTwitter, FaMediumM } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className=" text-white p-4 flex flex-col md:flex-row justify-between items-center container mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <img src="/logo.png" width={"65"} />
      </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full md:w-auto">
        <a
          href="/about"
          className="text-white px-4 py-2 hover:underline title_element default-text text-3xl"
        >
          ABOUT US
        </a>
        <a
          href="/gameflow"
          className="text-white px-4 py-2 hover:underline title_element  default-text text-3xl"
        >
          GAMEFLOW
        </a>
      </div>
      <div className="flex justify-center w-full md:w-auto">
        {/* Insert actual links to your social media */}
        <a href="https://discord.com" className="text-white px-2">
          <FaDiscord size={24} />
        </a>
        <a href="https://twitter.com" className="text-white px-2">
          <FaTwitter size={24} />
        </a>
        <a href="https://medium.com" className="text-white px-2">
          <FaMediumM size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
