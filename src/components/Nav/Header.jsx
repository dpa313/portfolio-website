import React, { useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="lg:max-w-[80%] mx-auto py-5">
        <div className=" flex items-center justify-between">
            <h3 className="text-4xl  font-bold text-primary">
              A<span className="inline-block rotate-180 text-white">A</span>
            </h3>
          <div className="px-5 hidden md:flex">
            <Nav isOpen={isOpen} />
          </div>
          <div className="md:hidden h-full">
            <div onClick={() => setIsOpen(!isOpen)}>
              <button className="text-2xl text-white">
                {isOpen ? <IoClose className="" /> : <LuMenu />}
              </button>
              <NavMobile isOpen={isOpen} />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
