"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ShoppingCart, Search, Smartphone, Gauge, LifeBuoy, ArrowUpRight, Check } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";

const SERVICES = [
  {
    id: "web-dev",
    icon: <Globe size={22} className="text-[#0D4A3A]" />,
    num: "01",
    title: "Custom Web Development",
    subtitle: "Brand Websites & Corporate Platforms",
    description:
      "Bespoke websites built with Next.js and React. No off-the-shelf templates or sluggish page builders—custom crafted for speed, elegance, and conversion.",
    deliverables: [
      "100% custom UI design & typography",
      "Next.js App Router for sub-second page loads",
      "Fully responsive across phone, tablet & desktop",
      "Interactive micro-animations & smooth scrolling",
      "Easy content management integration",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart size={22} className="text-[#0D4A3A]" />,
    num: "02",
    title: "E-Commerce Storefronts",
    subtitle: "High-Speed Online Shopping",
    description:
      "Tailored e-commerce stores designed to turn visitors into paying customers with fast product browsing, dynamic filtering, and effortless checkout.",
    deliverables: [
      "Fast product search & category filtering",
      "Stripe, Razorpay & UPI payment gateways",
      "Real-time inventory and stock guard",
      "Customer accounts, carts & order tracking",
      "Mobile-optimized checkout flow",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe / Razorpay"],
  },
  {
    id: "web-apps",
    icon: <Smartphone size={22} className="text-[#0D4A3A]" />,
    num: "03",
    title: "Custom Web Applications",
    subtitle: "Dashboards, Portals & AI Tools",
    description:
      "Specialized web software, customer portals, internal management dashboards, and AI-enabled workflows tailored to your operational needs.",
    deliverables: [
      "Role-based authentication & permissions",
      "Interactive data charts & real-time analytics",
      "API integrations with third-party software",
      "AI workflows (Gemini / OpenAI assistants)",
      "Secure cloud database architecture",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AI APIs"],
  },
  {
    id: "seo",
    icon: <Search size={22} className="text-[#0D4A3A]" />,
    num: "04",
    title: "Technical & Local SEO",
    subtitle: "Higher Google Search Rankings",
    description:
      "Built-in search engine optimization from day one. We ensure your website ranks for local Mumbai queries and target industry keywords.",
    deliverables: [
      "Semantic HTML & Schema.org rich snippets",
      "Google Search Console & Analytics setup",
      "XML sitemaps, robots.txt & canonical tags",
      "Keyword-targeted page architecture",
      "Local SEO markup for Mumbai & regional reach",
    ],
    tech: ["Schema Markup", "Search Console", "Google Analytics"],
  },
  {
    id: "performance",
    icon: <Gauge size={22} className="text-[#0D4A3A]" />,
    num: "05",
    title: "Speed & Performance Tuning",
    subtitle: "Core Web Vitals Optimization",
    description:
      "Slow websites lose sales. We fine-tune images, scripts, and server caching to achieve 90+ scores on Google Lighthouse and instant page transitions.",
    deliverables: [
      "Sub-second Largest Contentful Paint (LCP)",
      "Next-gen WebP/AVIF image compression",
      "Bundle size reduction & code splitting",
      "Global CDN edge caching configuration",
      "Zero layout shifts for a polished feel",
    ],
    tech: ["Lighthouse 90+", "WebP / AVIF", "Edge CDN"],
  },
  {
    id: "maintenance",
    icon: <LifeBuoy size={22} className="text-[#0D4A3A]" />,
    num: "06",
    title: "Website Care & Support",
    subtitle: "Ongoing Security & Updates",
    description:
      "Peace of mind post-launch. We provide regular security patches, software updates, uptime monitoring, and fast technical fixes whenever you need them.",
    deliverables: [
      "24/7 uptime & performance monitoring",
      "Regular dependency & security patches",
      "Content updates & minor feature tweaks",
      "Scheduled backups and disaster recovery",
      "Direct developer support on WhatsApp / email",
    ],
    tech: ["Uptime Monitoring", "Cloud Backups", "SLA Support"],
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section
      id="capabilities"
      className="bg-[#F7F5F0] py-16 md:py-24 px-4 md:px-10 border-b border-[#DCD9D0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What We Build
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#121211] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering capabilities tailored for{" "}
            <span className="text-[#0D4A3A] italic">real business growth</span>.
          </h2>
          <p
            className="text-base text-[#5A5852] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From bespoke brand websites to full-scale e-commerce stores and custom web platforms,
            we craft high-performance digital products that convert visitors into clients.
          </p>
        </div>

        {/* ── Services Layout: Interactive Selector + Detailed Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Service List Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`text-left p-4 md:p-5 border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-[#0D4A3A] shadow-sm"
                      : "bg-[#F7F5F0] border-[#DCD9D0] hover:bg-white hover:border-[#5A5852]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 border transition-colors ${
                        isSelected
                          ? "bg-[#0D4A3A]/10 border-[#0D4A3A]"
                          : "bg-white border-[#DCD9D0] group-hover:border-[#5A5852]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-[#0D4A3A]" : "text-[#121211]"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#5A5852] mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono font-medium transition-colors ${
                      isSelected ? "text-[#0D4A3A]" : "text-[#5A5852]"
                    }`}
                  >
                    {service.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Service Detail Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#DCD9D0] p-6 md:p-10 shadow-sm"
              >
                <div className="flex items-center justify-between pb-6 border-b border-[#DCD9D0] mb-6">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-1">
                      Service {activeService.num}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-[#121211]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {activeService.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-[#F7F5F0] border border-[#DCD9D0]">
                    {activeService.icon}
                  </div>
                </div>

                <p
                  className="text-base text-[#5A5852] leading-relaxed mb-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {activeService.description}
                </p>

                <h4
                  className="text-xs font-semibold text-[#121211] uppercase tracking-wider mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Key Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="p-1 bg-[#0D4A3A]/10 text-[#0D4A3A] mt-0.5 shrink-0">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs text-[#121211] leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#DCD9D0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-[#5A5852] mr-2">Technologies:</span>
                    {activeService.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#F7F5F0] border border-[#DCD9D0] text-[11px] font-mono text-[#121211]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection("commission")}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#0D4A3A] hover:text-[#121211] group transition-colors"
                  >
                    <span>Request a quote for this</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
