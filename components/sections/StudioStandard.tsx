"use client";

import { motion } from "motion/react";
import { MessageSquareCode, ShieldCheck, Target, CalendarCheck2 } from "lucide-react";

const PRINCIPLES = [
  {
    icon: <MessageSquareCode size={24} className="text-[#0D4A3A]" />,
    num: "01",
    title: "Direct Builder Access",
    subtitle: "Talk directly to engineers",
    body: "No account managers or lost-in-translation meetings. You communicate directly with the developers writing your code for faster answers, rapid revisions, and immediate technical clarity.",
  },
  {
    icon: <ShieldCheck size={24} className="text-[#0D4A3A]" />,
    num: "02",
    title: "100% In-House Team",
    subtitle: "Zero third-party outsourcing",
    body: "Every design layout, database schema, and frontend component is crafted in Mumbai. We never hand off your project to anonymous subcontractors. We own the quality from start to finish.",
  },
  {
    icon: <Target size={24} className="text-[#0D4A3A]" />,
    num: "03",
    title: "Capped Project Roster",
    subtitle: "Senior attention on every build",
    body: "We deliberately limit our client capacity to just 2–3 active builds at any time. This protects our code quality, ensures prompt delivery, and guarantees senior-level focus on your brand.",
  },
  {
    icon: <CalendarCheck2 size={24} className="text-[#0D4A3A]" />,
    num: "04",
    title: "Transparent Milestones",
    subtitle: "Weekly live staging links",
    body: "We establish clear technical milestones and weekly live links so you can test your product as it's being developed. No unexpected scope changes, no hidden surprise invoices.",
  },
];

export default function StudioStandard() {
  return (
    <section
      id="studio-standard"
      className="bg-[#F7F5F0] py-16 md:py-24 px-4 md:px-10 border-b border-[#DCD9D0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            How We Operate
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#121211] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for founders who value{" "}
            <span className="text-[#0D4A3A] italic">craft & honesty</span>.
          </h2>
          <p
            className="text-base text-[#5A5852] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Traditional agencies add layers of managers and markups. We keep our studio lean,
            transparent, and focused strictly on high-performance execution.
          </p>
        </div>

        {/* 4 Clean Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#DCD9D0] p-6 md:p-8 flex flex-col justify-between hover:border-[#0D4A3A] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-[#F7F5F0] border border-[#DCD9D0] group-hover:bg-[#0D4A3A]/5 transition-colors">
                    {p.icon}
                  </div>
                  <span
                    className="text-xs font-mono font-medium text-[#5A5852]"
                  >
                    {p.num}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-[#121211] mb-1 group-hover:text-[#0D4A3A] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs text-[#0D4A3A] font-medium uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.subtitle}
                </p>

                <p
                  className="text-sm text-[#5A5852] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCD9D0] flex items-center justify-between text-xs text-[#5A5852]">
                <span className="font-mono">STANDARD 0{idx + 1}</span>
                <span className="text-[#0D4A3A] font-medium">Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
