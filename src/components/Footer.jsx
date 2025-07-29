import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 bg-black-100 text-white">
      <p className="text-[16px] mb-3 font-medium"></p>

      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/abhiram-t-78463731a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300 text-[24px]"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Abhi-sys511"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300 text-[24px]"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
