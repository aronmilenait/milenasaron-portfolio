import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gradient-to-b from-pink-500 to-pink-400 text-pink-50 py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex-grow">
          <div className="ml-4 hidden md:block" id="header-text">
            <motion.h1
              className="text-xl md:text-xl font-bold whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
            >
              Milena Sol Aron
            </motion.h1>
            <motion.p
              className="text-lg md:text-lg whitespace-nowrap text-pink-100 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 80,
              }}
            >
              Full Stack & Web Developer
            </motion.p>
          </div>
        </div>
        <div className="mr-4 md:hidden flex-grow-0 flex justify-center">
          <button
            onClick={toggleMenu}
            className="hover:text-pink-950 focus:outline-none text-pink-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`w-full ${
            isOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:justify-end`}
        >
          <ul className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg md:text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white font-medium hover:text-pink-100 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
