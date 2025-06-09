import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

const NAV_ITEMS = ["home", "about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    NAV_ITEMS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 bg-darkCard/50 w-full z-50 transition-transform duration-300
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
        ${scrollDirection === "up" ? "bg-white/10 backdrop-blur-md" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Vijay Kumar
        </h1>

        
        <nav className="hidden md:flex space-x-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize relative transition-colors duration-300 ${
                activeSection === item ? "text-purple-400" : "text-white hover:text-purple-400"
              }`}
            >
              {item}
              {activeSection === item && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-400"
                />
              )}
            </a>
          ))}
        </nav>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black/50 bg-opacity-80 px-4 py-2 space-y-2 text-white">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block capitalize ${
                activeSection === item ? "text-purple-400" : "hover:text-purple-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
