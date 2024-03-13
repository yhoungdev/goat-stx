//@ts-nocheck
import React, { useState } from "react";
import { FaBars, FaDiscord, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isSidebarOpen ? 0 : "-100%",
    width: "60%",
    height: "100%",
    backgroundColor: "gray",
    transition: "left 0.3s ease",
    padding: "1rem",
    boxSizing: "border-box",
    zIndex: 1000,
  };

  return (
    <>
      <header className="bg-cover bg-center p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo.png" alt="Logo" width={"65"} />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="/roadmap"
              className="text-white px-4 py-2 hover:underline title_element default-text text-3xl"
            >
              Road Map
            </a>
            <a
              href="/utility"
              className="text-white px-4 py-2 hover:underline title_element default-text text-3xl"
            >
              Token Utility
            </a>
          </div>
          <div className="hidden md:flex justify-center w-full md:w-auto items-center">
            <a
              href="https://tinyurl.com/GoatCoinSTXdiscord"
              className="text-white px-2"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://twitter.com/GoatCoinSTX"
              className="text-white px-2"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <div
            onClick={toggleSidebar}
            className="bg-[#0c2f07] h-[50px] w-[50px] flex justify-center items-center rounded-full cursor-pointer md:hidden"
          >
            <FaBars color="white" />
          </div>
        </nav>
      </header>

      <div style={sidebarStyle}>
        <a href="/roadmap" className="block py-2 text-white">
          Road Map
        </a>
        <a href="/utility" className="block py-2 text-white">
          Token Utility
        </a>
        <a
          href="https://tinyurl.com/GoatCoinSTXdiscord"
          className="block py-2 text-white"
        >
          Discord
        </a>
        <a
          href="https://twitter.com/GoatCoinSTX"
          className="block py-2 text-white"
        >
          Twitter
        </a>

        <div className="text-right">
          <button onClick={toggleSidebar} className="text-white">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
