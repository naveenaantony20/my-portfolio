import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust based on navbar height

      // detect active section
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }

      // navbar background change on scroll
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 border-b border-white/5 transition-all duration-300 ${
        isScrolled ? "bg-[#0B1120]/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* logo */}
        <span className="font-bold text-sky-400 text-xl tracking-wider hover:text-purple-400 transition-all cursor-pointer">
          NA
        </span>

        {/* nav links */}
        <ul className="hidden sm:flex gap-8 text-gray-300 font-medium">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors duration-200 ${
                    activeSection === id
                      ? "text-sky-400 border-b-2 border-sky-400 pb-1"
                      : "hover:text-sky-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* mobile hamburger */}
        <div className="sm:hidden text-gray-400 hover:text-sky-400 cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}
