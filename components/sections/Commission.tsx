"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Mail, Phone, Clock, MapPin, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  brief: z.string().min(10, "Please provide a brief description of your project"),
  scope: z.array(z.string()).min(1, "Please select at least one service"),
});

type FormData = z.infer<typeof schema>;

const SCOPE_OPTIONS = [
  "Custom Website",
  "E-Commerce Store",
  "Web App / Dashboard",
  "SEO & Performance",
  "Maintenance & Redesign",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Requirements",
    desc: "A focused 20-minute discussion to understand your business objectives, target audience, and feature list.",
  },
  {
    num: "02",
    title: "Fixed Scope & Milestone Quote",
    desc: "We deliver a comprehensive proposal with clear technical deliverables, a guaranteed timeline, and fixed pricing.",
  },
  {
    num: "03",
    title: "Weekly Sprints & Staging Links",
    desc: "Iterative development with live preview links every week. You test genuine progress as it's built.",
  },
];

const FAQ = [
  {
    q: "Who owns the intellectual property and code?",
    a: "You own 100% of all code, assets, design files, and database schemas upon project completion. We transfer full Git repository access with zero licensing fees or lock-ins.",
  },
  {
    q: "How are payment milestones structured?",
    a: "We work on transparent milestone payments: 40% upon scope sign-off, 40% upon staging review approval, and 20% upon production deployment. You never pay before seeing tangible progress.",
  },
  {
    q: "How fast can you deliver a project?",
    a: "A typical custom marketing website takes 2–3 weeks. E-commerce platforms and web applications take 3–6 weeks depending on feature complexity. We commit to a realistic launch date before starting.",
  },
  {
    q: "Do you offer post-launch support and hosting maintenance?",
    a: "Yes. Every build includes 30 days of complimentary post-launch support. Afterward, we offer flexible monthly maintenance retainers for security updates, backups, and feature enhancements.",
  },
  {
    q: "Can you redesign or speed up our existing website?",
    a: "Absolutely. We regularly audit existing websites, re-architect them on modern stacks like Next.js, and optimize their Core Web Vitals to achieve sub-second page loads.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#DCD9D0]" onClick={() => setOpen(!open)}>
      <button className="w-full flex items-start justify-between py-4 text-left gap-4 cursor-pointer hover:text-[#0D4A3A] transition-colors">
        <span
          className="text-sm md:text-base text-[#121211] font-semibold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown size={16} className="text-[#5A5852]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-xs md:text-sm text-[#5A5852] leading-relaxed pb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Commission() {
  const [selectedScope, setSelectedScope] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { scope: [] },
  });

  const toggleScope = (option: string) => {
    const next = selectedScope.includes(option)
      ? selectedScope.filter((s) => s !== option)
      : [...selectedScope, option];
    setSelectedScope(next);
    setValue("scope", next);
  };

  const onSubmit = async (_data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    reset();
    setSelectedScope([]);
    toast.success("Thank you! We will review your brief and reply within 4 business hours.");
  };

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
      id="commission"
      className="bg-[#F7F5F0] py-16 md:py-24 px-4 md:px-10 border-b border-[#DCD9D0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span
            className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start Your Project
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#121211] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s build something{" "}
            <span className="text-[#0D4A3A] italic">exceptional together</span>.
          </h2>
          <p
            className="text-base text-[#5A5852] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tell us about your project requirements. We review every inquiry directly with our
            lead engineers and respond within 4 business hours with an honest assessment and quote.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pb-12 border-b border-[#DCD9D0]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-[#DCD9D0] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#0D4A3A] block mb-2">
                  PHASE {step.num}
                </span>
                <h3
                  className="text-lg font-bold text-[#121211] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[#5A5852] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form & Direct Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[#DCD9D0]">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCD9D0] p-6 md:p-10 shadow-sm">
            <h3
              className="text-xl md:text-2xl font-bold text-[#121211] mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Tell us about your build
            </h3>
            <p className="text-xs md:text-sm text-[#5A5852] mb-6">
              Fill in your details below. No spam, no aggressive sales follow-ups—just a straightforward conversation with builders.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#0D4A3A]/5 border border-[#0D4A3A]">
                <CheckCircle size={36} className="text-[#0D4A3A] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#121211] mb-1">
                  Inquiry Received!
                </h4>
                <p className="text-xs text-[#5A5852] mb-4">
                  Our engineering team is reviewing your project details. We will respond within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#0D4A3A] font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#121211] uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("name")}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#F7F5F0] border border-[#DCD9D0] px-4 py-2.5 text-sm text-[#121211] outline-none focus:border-[#0D4A3A] focus:bg-white transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#121211] uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="rahul@company.com"
                      className="w-full bg-[#F7F5F0] border border-[#DCD9D0] px-4 py-2.5 text-sm text-[#121211] outline-none focus:border-[#0D4A3A] focus:bg-white transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#121211] uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F7F5F0] border border-[#DCD9D0] px-4 py-2.5 text-sm text-[#121211] outline-none focus:border-[#0D4A3A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-xs font-semibold text-[#121211] uppercase tracking-wider mb-2">
                    What are you looking to build? *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SCOPE_OPTIONS.map((opt) => {
                      const active = selectedScope.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleScope(opt)}
                          className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                            active
                              ? "bg-[#0D4A3A] text-white border-[#0D4A3A]"
                              : "bg-[#F7F5F0] text-[#121211] border-[#DCD9D0] hover:border-[#121211]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {errors.scope && (
                    <p className="text-xs text-red-600 mt-1">{errors.scope.message}</p>
                  )}
                </div>

                {/* Brief */}
                <div>
                  <label className="block text-xs font-semibold text-[#121211] uppercase tracking-wider mb-2">
                    Project Details & Goals *
                  </label>
                  <textarea
                    {...register("brief")}
                    rows={4}
                    placeholder="Tell us what you're building, target timeline, any existing website links, or key features you need..."
                    className="w-full bg-[#F7F5F0] border border-[#DCD9D0] p-4 text-sm text-[#121211] outline-none focus:border-[#0D4A3A] focus:bg-white transition-all resize-none"
                  />
                  {errors.brief && (
                    <p className="text-xs text-red-600 mt-1">{errors.brief.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0D4A3A] hover:bg-[#121211] text-white py-3.5 text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <span>{submitting ? "Sending Your Inquiry..." : "Submit Project Inquiry"}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[#DCD9D0] p-6 md:p-8">
              <span className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-4">
                Direct Contact
              </span>

              <div className="flex flex-col gap-4">
                <button
                  onClick={copyPhone}
                  className="flex items-start gap-3 text-left group p-2 hover:bg-[#F7F5F0] transition-colors"
                >
                  <div className="p-2 bg-[#F7F5F0] group-hover:bg-white border border-[#DCD9D0]">
                    <Phone size={16} className="text-[#0D4A3A]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A5852] block">Call / WhatsApp</span>
                    <span className="text-sm font-bold text-[#121211] group-hover:text-[#0D4A3A] font-mono">
                      +91 82377 42040
                    </span>
                  </div>
                </button>

                <button
                  onClick={copyEmail}
                  className="flex items-start gap-3 text-left group p-2 hover:bg-[#F7F5F0] transition-colors"
                >
                  <div className="p-2 bg-[#F7F5F0] group-hover:bg-white border border-[#DCD9D0]">
                    <Mail size={16} className="text-[#0D4A3A]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A5852] block">Email Us</span>
                    <span className="text-sm font-bold text-[#121211] group-hover:text-[#0D4A3A] font-mono">
                      hello@digitalgrowth.in
                    </span>
                  </div>
                </button>

                <div className="flex items-start gap-3 p-2">
                  <div className="p-2 bg-[#F7F5F0] border border-[#DCD9D0]">
                    <Clock size={16} className="text-[#0D4A3A]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A5852] block">Studio Hours</span>
                    <span className="text-xs font-medium text-[#121211]">
                      Mon – Fri: 09:00 – 18:00 IST
                    </span>
                    <span className="text-[11px] text-[#5A5852] block mt-0.5">
                      Average response: Under 4 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2">
                  <div className="p-2 bg-[#F7F5F0] border border-[#DCD9D0]">
                    <MapPin size={16} className="text-[#0D4A3A]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A5852] block">Studio Location</span>
                    <span className="text-xs font-medium text-[#121211]">
                      Mumbai, Maharashtra, India
                    </span>
                    <span className="text-[11px] text-[#5A5852] block mt-0.5">
                      Working with clients worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 bg-white border border-[#0D4A3A]/40 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#121211]">
                  Current Availability: Q4 / Q1 Roster
                </p>
                <p className="text-[11px] text-[#5A5852]">
                  We are currently scheduling 2 new builds starting this month.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <span
              className="text-xs font-semibold text-[#0D4A3A] uppercase tracking-wider block mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Frequently Asked Questions
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-[#121211]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Everything you need to know before we build.
            </h3>
          </div>

          <div className="max-w-3xl">
            {FAQ.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
            <div className="border-t border-[#DCD9D0]" />
          </div>
        </div>
      </div>
    </section>
  );
}
