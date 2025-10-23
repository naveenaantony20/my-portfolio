import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
          break;
        }
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? "bg-[#0B1120]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.span
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="font-extrabold text-sky-400 text-2xl tracking-wider cursor-pointer hover:text-purple-400 transition-all"
        >
          NA
        </motion.span>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative transition-colors duration-300 group ${
                    activeSection === id
                      ? "text-sky-400"
                      : "text-gray-300 hover:text-sky-400"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-sky-400 to-purple-400 transition-all duration-300 ${
                      activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <div
          className="sm:hidden text-gray-300 hover:text-sky-400 cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sm:hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-3 text-gray-300"
        >
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className="block py-1 hover:text-sky-400"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
