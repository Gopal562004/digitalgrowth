"use client";

import { motion } from "motion/react";
import { toast } from "sonner";
import { Mail, Phone, ArrowUpRight, ArrowDown, CheckCircle2, Zap, Users2, ShieldCheck } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";

export default function Manifesto() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@digitalgrowth.in");
    toast.success("Email copied: hello@digitalgrowth.in");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+918237742040");
    toast.success("Phone copied: +91 82377 42040");
  };

  return (
    <section
      id="manifesto"
      className="relative min-h-[92vh] bg-[#F7F5F0] flex flex-col justify-between pt-24 md:pt-28 pb-12 px-4 md:px-10 border-b border-[#DCD9D0]"
    >
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#DCD9D0]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0D4A3A]" />
          <span
            className="text-[12px] font-medium text-[#121211] tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            DigitalGrowth Studio — Mumbai, India
          </span>
        </div>

        <div className="flex items-center gap-4 text-[12px] text-[#5A5852]">
          <span className="hidden sm:inline">100% In-House Development</span>
          <span className="hidden sm:inline text-[#DCD9D0]">•</span>
          <span className="hidden md:inline">Zero Account Manager Middlemen</span>
          <span className="hidden md:inline text-[#DCD9D0]">•</span>
          <a
            href="tel:+918237742040"
            className="hover:text-[#0D4A3A] font-medium text-[#121211] transition-colors"
          >
            +91 82377 42040
          </a>
        </div>
      </div>

      {/* Main Hero Headline & Direct Proposition */}
      <div className="my-auto py-10 md:py-14 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCD9D0] text-[#0D4A3A] text-xs font-semibold mb-6 uppercase tracking-wider"
        >
          <span>Engineering Studio for Founders & Growing Brands</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.4rem,6vw,5.2rem)] font-bold text-[#121211] leading-[1.08] tracking-[-0.035em] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          We build fast websites, online stores & web apps that{" "}
          <span className="text-[#0D4A3A] underline decoration-[#0D4A3A]/30 underline-offset-8">
            grow your business
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-[#5A5852] leading-relaxed max-w-3xl mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Work directly with the developers writing your code. No confusing agency
          jargon, no endless telephone games, and no outsourcing. Just clean
          engineering, high-converting design, and dependable delivery.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollToSection("commission")}
            className="flex items-center gap-2 bg-[#0D4A3A] hover:bg-[#121211] text-white px-6 py-3.5 text-sm font-medium transition-colors shadow-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            onClick={() => scrollToSection("selected-builds")}
            className="flex items-center gap-2 bg-white hover:bg-[#F7F5F0] border border-[#121211] text-[#121211] px-6 py-3.5 text-sm font-medium transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>View Our Work</span>
            <ArrowDown size={15} />
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3 mt-2 sm:mt-0 sm:pl-3 sm:border-l border-[#DCD9D0]">
            <button
              onClick={copyEmail}
              className="text-xs text-[#5A5852] hover:text-[#0D4A3A] underline underline-offset-4 transition-colors"
              title="Click to copy email"
            >
              hello@digitalgrowth.in
            </button>
            <span className="text-[#DCD9D0]">•</span>
            <a
              href="tel:+918237742040"
              className="text-xs text-[#5A5852] hover:text-[#0D4A3A] underline underline-offset-4 transition-colors"
            >
              +91 82377 42040
            </a>
          </div>
        </motion.div>
      </div>

      {/* 4 Bottom Value Highlights (Transparent, clear business reasons) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#DCD9D0]"
      >
        <div className="flex items-start gap-3">
          <Users2 size={18} className="text-[#0D4A3A] mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-[#121211] mb-1">Direct Developer Access</h4>
            <p className="text-xs text-[#5A5852] leading-relaxed">
              Communicate directly with the engineers coding your website.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Zap size={18} className="text-[#0D4A3A] mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-[#121211] mb-1">Sub-Second Speed</h4>
            <p className="text-xs text-[#5A5852] leading-relaxed">
              Ultra-fast load times optimized for higher Google search rankings.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck size={18} className="text-[#0D4A3A] mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-[#121211] mb-1">100% In-House Team</h4>
            <p className="text-xs text-[#5A5852] leading-relaxed">
              Every interface and database is crafted in Mumbai. No outsourcing.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#0D4A3A] mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-[#121211] mb-1">Milestone Approvals</h4>
            <p className="text-xs text-[#5A5852] leading-relaxed">
              Weekly live preview links so you see genuine progress as it happens.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
