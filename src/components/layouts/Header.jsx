import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-main dark:bg-dark text-light dark:text-highlight shadow-xl sticky top-0 z-50 border-b-2 border-b-gray-200/60 dark:border-b-gray-700/60"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex items-center"
        >
          <motion.span
            className="text-2xl font-extrabold tracking-tight text-light dark:text-highlight drop-shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Achmad Choerul R.
          </motion.span>
        </motion.div>
        <motion.nav
          className="flex space-x-2 md:space-x-6 bg-white/10 dark:bg-dark/30 rounded-full px-4 py-2 shadow-md backdrop-blur"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          {navLinks.map((link, i) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  isActive
                    ? "bg-highlight text-main shadow-lg"
                    : "text-light dark:text-highlight hover:bg-highlight hover:text-main"
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.5 + i * 0.07,
                  duration: 0.4,
                }}
              >
                {link.label}
              </motion.a>
            );
          })}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
