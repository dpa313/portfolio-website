import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
const NavMobile = ({ isOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "right-0 h-full" : "-right-full"
      } md:hidden w-[70vw] fixed top-0 -z-10  transition-all duration-500 ease-in-out h-[100vh]  bg-primary`}
    >
      <ul className=" flex flex-col items-center gap-y-5 h-full justify-start pt-32 text-white">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skill</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <div className="flex gap-3 items-center text-lg">
          <FaFacebook className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
