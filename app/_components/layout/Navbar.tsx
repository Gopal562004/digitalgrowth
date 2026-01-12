"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../../_components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Get all sections
      const sections = Array.from(
        document.querySelectorAll("section[id]")
      ) as HTMLElement[];

      if (sections.length === 0) return;

      const scrollPos = window.scrollY + 100;

      // Find active section
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection =
            sectionId === "home"
              ? "Home"
              : sectionId === "services"
              ? "Services"
              : sectionId === "why-us"
              ? "Why Us"
              : sectionId === "projects"
              ? "Projects"
              : sectionId === "process"
              ? "Process"
              : "Contact";
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (name: string) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold"
              onClick={() => handleNavClick("Home")}
            >
              <span className="text-blue-700">Digital</span>
              <span className="text-emerald-600">Growth</span>
            </a>
            <div className="ml-3 hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">
                Trusted Partner
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                onClick={() => handleNavClick(link.name)}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="block w-4 h-0.5 bg-blue-600 mx-auto mt-1 rounded-full"></span>
                )}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button
                variant="primary"
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => handleNavClick("Contact")}
              >
                Start Project
              </Button>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <div className="text-xs text-gray-500">Call us today</div>
              <div className="text-sm font-semibold text-gray-800">
                +91 82377 42040
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-lg transition-all duration-200 ${
              isOpen ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-fadeIn">
            <div className="container-custom py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeLink === link.name
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                    onClick={() => handleNavClick(link.name)}
                  >
                    <span className="font-medium">{link.name}</span>
                    {activeLink === link.name && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-500">Ready to grow?</div>
                  <div className="text-lg font-bold text-gray-900 mt-1">
                    Let&apos;s talk!
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    href="#contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    onClick={() => handleNavClick("Contact")}
                  >
                    Start Free Consultation
                  </Button>
                  <div className="text-center">
                    <a
                      href="tel:5551234567"
                      className="inline-block text-sm font-semibold text-gray-800 hover:text-blue-700"
                    >
                      +91 82377 42040
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
