"use client";

import { scrollToSection, scrollToTop } from "@/lib/lenis";
import { ArrowUp, Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "About Studio", id: "manifesto" },
  { label: "How We Work", id: "studio-standard" },
  { label: "Services", id: "capabilities" },
  { label: "Our Portfolio", id: "selected-builds" },
  { label: "Process & FAQ", id: "commission" },
];

export default function Colophon() {
  return (
    <footer className="bg-[#F7F5F0] border-t border-[#DCD9D0] pt-14 pb-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DCD9D0]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <h3
              className="text-xl font-bold text-[#121211] tracking-tight mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              DigitalGrowth Studio
            </h3>
            <p className="text-xs text-[#0D4A3A] font-semibold mb-3">
              Founder-Led Web Engineering · Mumbai, India
            </p>
            <p className="text-xs md:text-sm text-[#5A5852] leading-relaxed max-w-sm mb-6">
              Building high-performance websites, e-commerce storefronts, and custom web applications
              directly with the developers. Zero agency middlemen.
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono text-[#121211]">
              <a
                href="mailto:hello@digitalgrowth.in"
                className="flex items-center gap-2 hover:text-[#0D4A3A] transition-colors"
              >
                <Mail size={14} className="text-[#0D4A3A]" />
                <span>hello@digitalgrowth.in</span>
              </a>
              <a
                href="tel:+918237742040"
                className="flex items-center gap-2 hover:text-[#0D4A3A] transition-colors"
              >
                <Phone size={14} className="text-[#0D4A3A]" />
                <span>+91 82377 42040</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs md:text-sm text-[#5A5852] hover:text-[#0D4A3A] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider block mb-4">
                Core Capabilities
              </span>
              <ul className="text-xs text-[#5A5852] flex flex-col gap-2">
                <li>• Custom Next.js & React Web Development</li>
                <li>• E-Commerce Storefronts & Stripe Integration</li>
                <li>• Web Applications, Dashboards & AI Tools</li>
                <li>• Technical SEO & Core Web Vitals Optimization</li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start flex items-center gap-2 px-4 py-2 bg-white border border-[#DCD9D0] hover:border-[#121211] text-xs font-medium text-[#121211] transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A5852] gap-3">
          <p>© {new Date().getFullYear()} DigitalGrowth Studio. All rights reserved.</p>
          <p className="font-mono text-[11px]">Crafted with Next.js & React in Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
