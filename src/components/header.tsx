import React from "react";
import Button from "./micro/button";

const Header = () => {
  return (
    <header className=" bg-cover bg-center p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <span className=" md:block  font-bold title_element  text-3xl default-text default-text">
            GOATSTX
          </span> */}
          <img src="/logo.png" width={"65"} />
        </div>
        {/* <div className=" hidden md:flex items-center none">
     
          <a
            href="/about-us"
            className="text-black px-4 py-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="/gameflow"
            className="text-black px-4 py-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          >
            GameFlow
          </a>
          <a
            href="/roadmap"
            className="text-black px-4 py-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          >
            Roadmap
          </a>
          <a
            href="/whitepaper"
            className="text-black px-4 py-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          >
            Whitepaper
          </a>
        </div> */}
        <div className="flex items-center">
          {/* <Button>Connect Wallet</Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
