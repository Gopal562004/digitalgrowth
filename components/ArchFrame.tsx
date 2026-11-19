"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { scrollToTop, scrollToSection } from "@/lib/lenis";
import CommandPalette from "./CommandPalette";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";

const NAV_LINKS = [
  { id: "manifesto", label: "About" },
  { id: "studio-standard", label: "How We Work" },
  { id: "capabilities", label: "Services" },
  { id: "selected-builds", label: "Our Work" },
  { id: "commission", label: "Process & FAQ" },
];

export default function ArchFrame() {
  const [activeSection, setActiveSection] = useState(0);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionEls = NAV_LINKS.map((s) => document.getElementById(s.id));
      let active = 0;
      sectionEls.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          active = i;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 80);
  };

  return (
    <>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* ── Top Fixed Navigation Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-4 pointer-events-none">
        <nav
          className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-300 border border-[#DCD9D0] bg-[#F7F5F0]/95 backdrop-blur-md px-4 md:px-6 py-3 flex items-center justify-between ${
            scrolled ? "shadow-sm" : ""
          }`}
        >
          {/* Brand Logo & Location */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="text-left group flex items-center gap-2"
            >
              <span
                className="text-base md:text-lg font-bold tracking-tight text-[#121211] group-hover:text-[#0D4A3A] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DigitalGrowth
              </span>
              <span className="hidden sm:inline-block text-[11px] text-[#5A5852] font-normal pl-1 border-l border-[#DCD9D0]">
                Mumbai
              </span>
            </button>

            {/* Availability status badge */}
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-[#DCD9D0]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span
                className="text-[11px] text-[#5A5852] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Open for Q4/Q1 Projects
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-[13px] font-medium transition-colors hover:text-[#0D4A3A] relative py-1 ${
                  activeSection === idx ? "text-[#0D4A3A]" : "text-[#5A5852]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                {activeSection === idx && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0D4A3A]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick studio search button */}
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[#DCD9D0] bg-white text-[12px] text-[#5A5852] hover:text-[#121211] hover:border-[#121211] transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
              title="Open search palette"
            >
              <Search size={13} strokeWidth={1.5} />
              <span>Search</span>
              <kbd className="text-[10px] bg-[#F7F5F0] px-1.5 py-0.5 rounded border border-[#DCD9D0] text-[#5A5852]">
                ⌘K
              </kbd>
            </button>

            {/* Primary High-Converting CTA Button */}
            <button
              onClick={() => navigateTo("commission")}
              className="flex items-center gap-1.5 bg-[#0D4A3A] text-white hover:bg-[#121211] px-4 py-2 text-[12px] md:text-[13px] font-medium transition-colors duration-200 shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border border-[#DCD9D0] bg-white text-[#121211] hover:bg-[#F7F5F0] transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-3 right-3 bg-[#F7F5F0] border border-[#DCD9D0] shadow-xl z-40 p-5 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className="flex items-center justify-between py-3 px-2 border-b border-[#DCD9D0] text-left text-[15px] font-medium text-[#121211] hover:text-[#0D4A3A] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span>{link.label}</span>
                    <span className="text-[11px] text-[#5A5852] font-mono">0{idx + 1}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#DCD9D0] flex flex-col gap-3">
                <button
                  onClick={() => navigateTo("commission")}
                  className="w-full bg-[#0D4A3A] text-white py-3 text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#121211] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="flex items-center justify-between text-[12px] text-[#5A5852] pt-2 px-1 font-mono">
                  <a href="tel:+918237742040" className="hover:text-[#0D4A3A]">
                    +91 82377 42040
                  </a>
                  <a href="mailto:hello@digitalgrowth.in" className="hover:text-[#0D4A3A]">
                    hello@digitalgrowth.in
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
