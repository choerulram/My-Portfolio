import React from "react";

const Header = () => (
  <header className="bg-main dark:bg-dark text-light dark:text-highlight shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="flex items-center space-x-3">
        <img
          src="/profile.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-highlight shadow"
        />
        <span className="text-2xl font-extrabold tracking-tight text-light dark:text-highlight drop-shadow">
          Nama Anda
        </span>
      </div>
      <nav className="flex space-x-2 md:space-x-6 bg-white/10 dark:bg-dark/30 rounded-full px-4 py-2 shadow-md backdrop-blur">
        <a
          href="/"
          className="px-3 py-1 rounded-full font-medium text-light dark:text-highlight hover:bg-highlight hover:text-main transition"
        >
          Home
        </a>
        <a
          href="/about"
          className="px-3 py-1 rounded-full font-medium text-light dark:text-highlight hover:bg-highlight hover:text-main transition"
        >
          About
        </a>
        <a
          href="/projects"
          className="px-3 py-1 rounded-full font-medium text-light dark:text-highlight hover:bg-highlight hover:text-main transition"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="px-3 py-1 rounded-full font-medium text-light dark:text-highlight hover:bg-highlight hover:text-main transition"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
