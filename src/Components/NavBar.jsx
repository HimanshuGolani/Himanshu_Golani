import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <h4 className="text-3xl">HG</h4>
      </div>

      <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className="p-2 rounded-full hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-700 transition duration-300"
          href="https://www.linkedin.com/in/himanshu-golani-15a588261"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="p-2 rounded-full hover:bg-white hover:shadow-lg hover:shadow-white transition duration-300 group"
          href="https://github.com/HimanshuGolani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="group-hover:text-black transition duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
