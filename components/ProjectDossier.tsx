"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { type Project } from "@/lib/projects";
import { useEffect } from "react";

interface ProjectDossierProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDossier({ project, open, onClose }: ProjectDossierProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide-Over Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-[620px] bg-white z-[91] overflow-y-auto shadow-2xl border-l border-[#DCD9D0]"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md flex items-center justify-between px-6 py-4 z-10 border-b border-[#DCD9D0]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-[#0D4A3A]">
                  PROJECT {project.index}
                </span>
                <span className="text-[#DCD9D0]">•</span>
                <span className="text-xs font-medium text-[#5A5852] uppercase">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0D4A3A] text-white text-xs font-medium hover:bg-[#121211] transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 text-[#5A5852] hover:text-[#121211] hover:bg-[#F7F5F0] transition-colors"
                  aria-label="Close drawer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex flex-col gap-8">
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden border border-[#DCD9D0] bg-[#F7F5F0]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Title & Client */}
              <div>
                <span className="text-xs text-[#0D4A3A] font-medium uppercase tracking-wider block mb-1">
                  Client: {project.client}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#121211] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-[#0D4A3A] mb-4">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#5A5852] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider block mb-3">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#F7F5F0] border border-[#DCD9D0] text-xs font-mono text-[#121211]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Architecture */}
              <div className="pt-6 border-t border-[#DCD9D0]">
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-[#0D4A3A]" />
                  <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider">
                    System Architecture
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-[#0D4A3A] font-semibold mt-0.5 shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="text-xs md:text-sm text-[#121211] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Decisions */}
              <div className="pt-6 border-t border-[#DCD9D0]">
                <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider block mb-4">
                  Engineering Decisions & Highlights
                </span>
                <ul className="flex flex-col gap-3">
                  {project.engineeringDecisions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ChevronRight size={14} className="text-[#0D4A3A] mt-0.5 shrink-0" />
                      <span className="text-xs md:text-sm text-[#5A5852] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Modules */}
              <div className="pt-6 border-t border-[#DCD9D0]">
                <span className="text-xs font-semibold text-[#121211] uppercase tracking-wider block mb-3">
                  Key Modules Included
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.coreModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 bg-[#F7F5F0] border border-[#DCD9D0] text-xs font-medium text-[#121211]"
                    >
                      <CheckCircle2 size={13} className="text-[#0D4A3A] shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Inquiry Footer in Drawer */}
              <div className="p-5 bg-[#F7F5F0] border border-[#DCD9D0] mt-2 flex flex-col gap-3">
                <h4 className="text-sm font-bold text-[#121211]">
                  Want a similar architecture for your product?
                </h4>
                <p className="text-xs text-[#5A5852]">
                  We can discuss your custom requirements and give you a fixed quote.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    document.getElementById("commission")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#0D4A3A] hover:bg-[#121211] text-white text-xs font-medium py-2.5 px-4 text-center transition-colors"
                >
                  Contact Us About a Similar Build →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
