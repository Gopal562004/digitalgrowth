"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import ProjectDossier from "@/components/ProjectDossier";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";

type Filter = "all" | "website" | "ecommerce" | "platform";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "website", label: "Websites" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "platform", label: "Web Apps & AI" },
];

function ProjectCard({ project }: { project: Project }) {
  const [dossierOpen, setDossierOpen] = useState(false);

  return (
    <>
      <ProjectDossier
        project={project}
        open={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />

      <div className="bg-white border border-[#DCD9D0] flex flex-col hover:border-[#0D4A3A] transition-all duration-300 shadow-sm group">
        {/* Real Project Photo Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#121211]/5 border-b border-[#DCD9D0]">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3 bg-[#F7F5F0]/95 backdrop-blur-sm border border-[#DCD9D0] px-2.5 py-1 text-[11px] font-mono uppercase text-[#121211] font-medium">
            {project.category}
          </div>

          {/* Quick Overlay Action */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#0D4A3A] hover:text-white text-[#121211] text-xs font-medium px-4 py-2 flex items-center gap-1.5 transition-colors shadow"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
            <button
              onClick={() => setDossierOpen(true)}
              className="bg-[#0D4A3A] hover:bg-[#121211] text-white text-xs font-medium px-4 py-2 flex items-center gap-1.5 transition-colors shadow"
            >
              <span>Tech Specs</span>
              <Layers size={13} />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#5A5852] font-mono mb-1.5">
              <span>{project.client}</span>
              <span className="text-[#0D4A3A] font-semibold">{project.index}</span>
            </div>

            <h3
              className="text-lg md:text-xl font-bold text-[#121211] leading-snug group-hover:text-[#0D4A3A] transition-colors mb-1.5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h3>

            <p className="text-xs font-medium text-[#0D4A3A] mb-3">
              {project.tagline}
            </p>

            <p className="text-xs text-[#5A5852] leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>
          </div>

          {/* Technologies & Action Footer */}
          <div className="pt-4 border-t border-[#DCD9D0]">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#F7F5F0] border border-[#DCD9D0] text-[10px] font-mono text-[#5A5852]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setDossierOpen(true)}
                className="text-xs font-medium text-[#121211] hover:text-[#0D4A3A] flex items-center gap-1 transition-colors"
              >
                <span>View System Architecture</span>
                <ArrowUpRight size={13} />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0D4A3A] hover:underline flex items-center gap-1"
                >
                  <span>Visit Site</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SelectedBuilds() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section
      id="selected-builds"
      className="bg-[#F7F5F0] py-16 md:py-24 px-4 md:px-10 border-b border-[#DCD9D0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#DCD9D0]">
          <div>
            <span
              className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Selected Portfolio
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#121211] leading-tight tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Real builds crafted for{" "}
              <span className="text-[#0D4A3A] italic">real clients</span>.
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#DCD9D0] self-start md:self-auto">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === f.key
                    ? "bg-[#0D4A3A] text-white"
                    : "text-[#5A5852] hover:text-[#121211]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Responsive Concise Project Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 bg-white border border-[#DCD9D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#121211]">
              Have a custom web project or e-commerce store in mind?
            </h4>
            <p className="text-xs text-[#5A5852] mt-0.5">
              We provide fixed timelines and transparent milestone pricing before any contract.
            </p>
          </div>
          <a
            href="#commission"
            className="bg-[#0D4A3A] hover:bg-[#121211] text-white text-xs font-medium px-5 py-2.5 shrink-0 transition-colors flex items-center gap-1.5"
          >
            <span>Request a Fixed Quote</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
