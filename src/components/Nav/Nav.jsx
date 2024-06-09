import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-12 text-white">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="skills">Skill</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
