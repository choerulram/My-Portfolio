import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume/CV" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// Variants for staggered animation
const navVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.5,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-main dark:bg-dark text-light dark:text-highlight shadow-xl sticky top-0 z-50 border-b-2 border-b-gray-200/60 dark:border-b-gray-700/60"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ x: -40, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex items-center"
        >
          <motion.span
            className="text-2xl font-extrabold tracking-tight text-light dark:text-highlight drop-shadow-[0_2px_16px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_2px_16px_rgba(0,255,255,0.5)] relative"
            initial={{ opacity: 0, x: -20, scale: 0.95, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 16px #fff, 0px 0px 32px #00eaff",
            }}
          >
            Achmad Choerul R.
          </motion.span>
        </motion.div>
        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex space-x-2 md:space-x-6 bg-white/10 dark:bg-dark/30 rounded-full px-4 py-2 shadow-md backdrop-blur"
          variants={navVariants}
          initial="hidden"
          animate="show"
        >
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <motion.a
                key={link.href}
                href={link.href}
                variants={linkVariants}
                className={`relative px-3 py-1 rounded-full font-medium transition focus:outline-none group overflow-hidden text-base ${
                  isActive
                    ? "bg-highlight text-main shadow-lg"
                    : "text-light dark:text-highlight hover:bg-highlight hover:text-main"
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Underline/Highlight Animation */}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-3 right-3 bottom-1 h-[3px] rounded-full bg-highlight/80 group-hover:bg-highlight/90 ${
                    isActive ? "" : "opacity-0 group-hover:opacity-100"
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            );
          })}
        </motion.nav>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-highlight"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Buka menu navigasi"
          >
            <span className="sr-only">Buka menu</span>
            <svg
              className="w-7 h-7 text-highlight"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex md:hidden">
            <nav className="ml-auto w-64 bg-dark text-highlight shadow-2xl h-full flex flex-col py-8 px-6 animate-slideInRight">
              <button
                className="self-end mb-8 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-highlight"
                onClick={() => setMobileOpen(false)}
                aria-label="Tutup menu"
              >
                <svg
                  className="w-7 h-7 text-highlight"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== "/" &&
                    location.pathname.startsWith(link.href));
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block w-full px-4 py-3 rounded-lg font-semibold text-lg mb-2 transition-all focus:outline-none focus:ring-2 focus:ring-highlight ${
                      isActive
                        ? "bg-highlight text-main shadow"
                        : "text-highlight hover:bg-highlight/20"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
