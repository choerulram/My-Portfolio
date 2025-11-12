import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-main dark:bg-dark text-light dark:text-highlight py-6 shadow-inner border-t border-highlight/30">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-base gap-2 px-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <span className="font-semibold">
            &copy; {new Date().getFullYear()} Achmad Choerul Ramdhani
          </span>
        </div>
        {/* Social Links: horizontal on desktop, horizontal/vertical wrap on mobile */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 md:gap-6 w-full md:w-auto">
          <a
            href="https://github.com/choerulram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-base md:text-xl flex items-center gap-1"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg md:text-xl" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/achmad-choerul-ramdhani-0b237b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-base md:text-xl flex items-center gap-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg md:text-xl" /> LinkedIn
          </a>
          <a
            href="mailto:achmadchoerul12345@gmail.com"
            className="hover:text-secondary transition text-base md:text-xl flex items-center gap-1"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg md:text-xl" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
