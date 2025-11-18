import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/Logos/Anupaam___Gupta-removebg-preview.png";

function Headernew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero", offset: -80 },
    { name: "About", to: "about", offset: -80 },
    { name: "Experience", to: "experience", offset: -80 },
    { name: "Education", to: "education", offset: -80 },
    { name: "Skills", to: "skills", offset: -80 },
    { name: "Projects", to: "projects", offset: -80 },
    { name: "Contact", to: "contact", offset: -80 },
  ];

  return (
    <header
      className="fixed  top-0 left-0 right-0 z-50 bg-[#0c0c0c] border-b border-white/10 transition-all duration-300"
      //   className={`fixed top-0 left-0 right-0 z-50 duration-300

      //     ${isScrolled ? "" : "bg-transparent"}

      //   `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 bg">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer flex items-center space-x-2 group bg"
            >
              <img
                src={logo}
                alt="Anupam Gupta"
                className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105 bg-white rounded-full"
              />
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl lg:text-2xl">
                  Anupam
                </span>
                <span className="text-[#feb901] font-bold text-xl lg:text-2xl ml-1">
                  Gupta
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                className="text-white/90 hover:text-[#feb901] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer relative group"
                activeClass="text-[#feb901]"
                spy={true}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#feb901] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/anupamc2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#feb901] to-[#ffa500] text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#feb901]/25 transform hover:scale-105 cursor-pointer"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  className="text-white/90 hover:text-[#feb901] px-4 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
                  activeClass="text-[#feb901] bg-white/5"
                  spy={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block w-full text-center bg-gradient-to-r from-[#feb901] to-[#ffa500] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headernew;
