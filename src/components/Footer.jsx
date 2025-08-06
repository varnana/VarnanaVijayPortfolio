import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterWithDetails = () => {
  return (
    <div className="w-full bg-black-100 text-white flex flex-col items-center justify-center py-10">
      
      {/* Personal Details Section - Centered */}
      <div className="text-center text-[16px] leading-relaxed mb-6 space-y-2">
        <p> Address:   Wackenmühl straße 16, 67655 Kiaserslautern</p>
        <p> Date Of Birth:   31 January 1997</p>
        <p> Nationality:   Indian</p>
        <p> Mobile:   +49 1782036414</p>
         <p>
    Email:{" "}
    <a
      href="mailto:varnanavijay@gmail.com"
      className="text-blue-400 hover:underline"
    >
      varnanavijay@gmail.com
    </a>
  </p>
  <p>Visa Status: Aufenthaltserlaubnis mit Arbeitsberechtigung</p>
</div>

      {/* Footer Section */}
      <footer className="w-full flex flex-col items-center justify-center">
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/varnanavijay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-[24px]"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/varnana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300 text-[24px]"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithDetails;
