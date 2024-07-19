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
          href="https://www.linkedin.com/in/himanshu-golani-15a588261"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/HimanshuGolani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
