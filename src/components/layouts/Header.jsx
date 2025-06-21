import React from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume/CV" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  return (
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
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  isActive
                    ? "bg-highlight text-main shadow-lg"
                    : "text-light dark:text-highlight hover:bg-highlight hover:text-main"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
