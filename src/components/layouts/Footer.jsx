import React from "react";

const Footer = () => (
  <footer className="bg-main dark:bg-dark text-light dark:text-highlight py-6 mt-10 shadow-inner border-t border-highlight/30">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm gap-2">
      <div className="flex items-center space-x-2">
        <img
          src="/profile.jpg"
          alt="Logo"
          className="w-7 h-7 rounded-full border-2 border-highlight shadow"
        />
        <span className="font-semibold">
          &copy; {new Date().getFullYear()} Nama Anda
        </span>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:email@domain.com"
          className="hover:text-secondary transition"
        >
          Email
        </a>
      </div>
      <span className="opacity-70">All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
