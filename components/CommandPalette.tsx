"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "cmdk";
import { scrollToSection, scrollToTop } from "@/lib/lenis";
import { toast } from "sonner";
import { Mail, Phone, ArrowUpRight, Search } from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const SECTIONS = [
  { id: "manifesto", label: "About Studio", desc: "Our ethos & builder team" },
  { id: "studio-standard", label: "How We Work", desc: "Direct access & in-house team" },
  { id: "capabilities", label: "Our Services", desc: "Web, e-commerce & app dev" },
  { id: "selected-builds", label: "Selected Portfolio", desc: "Recent client builds & live demos" },
  { id: "commission", label: "Start a Project", desc: "Inquiry form & process FAQ" },
];

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");

  const handleSection = useCallback(
    (id: string) => {
      onClose();
      setTimeout(() => {
        if (id === "top") scrollToTop();
        else scrollToSection(id);
      }, 150);
    },
    [onClose]
  );

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("hello@digitalgrowth.in");
    toast.success("Email copied: hello@digitalgrowth.in");
    onClose();
  }, [onClose]);

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText("+918237742040");
    toast.success("Phone copied: +91 82377 42040");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[540px] z-[101] px-4"
          >
            <div
              className="bg-white border border-[#DCD9D0] shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#DCD9D0] bg-[#F7F5F0]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#121211]">
                  <Search size={14} className="text-[#0D4A3A]" />
                  <span>Studio Quick Navigation</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-xs text-[#5A5852] hover:text-[#121211] font-mono"
                >
                  [ESC]
                </button>
              </div>

              <Command label="Navigation" shouldFilter={false} loop>
                <CommandInput
                  placeholder="Type to search sections, services, or actions..."
                  value={search}
                  onValueChange={setSearch}
                  className="w-full px-4 py-3.5 text-sm outline-none border-b border-[#DCD9D0] text-[#121211] placeholder:text-[#5A5852]"
                />
                <CommandList className="max-h-[320px] overflow-y-auto p-2">
                  <CommandEmpty className="p-4 text-xs text-[#5A5852] text-center">
                    No matching results found.
                  </CommandEmpty>

                  <CommandGroup heading="SECTIONS" className="text-[10px] font-mono text-[#5A5852] uppercase px-2 py-1">
                    {SECTIONS.filter(
                      (s) =>
                        !search ||
                        s.label.toLowerCase().includes(search.toLowerCase()) ||
                        s.desc.toLowerCase().includes(search.toLowerCase())
                    ).map((section) => (
                      <CommandItem
                        key={section.id}
                        value={section.id}
                        onSelect={() => handleSection(section.id)}
                        className="px-3 py-2.5 my-0.5 rounded cursor-pointer flex items-center justify-between text-sm text-[#121211] hover:bg-[#0D4A3A]/10 hover:text-[#0D4A3A] transition-colors"
                      >
                        <span className="font-medium">{section.label}</span>
                        <span className="text-xs text-[#5A5852]">{section.desc}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>

                  <CommandGroup heading="DIRECT ACTIONS" className="text-[10px] font-mono text-[#5A5852] uppercase px-2 pt-3 pb-1">
                    <CommandItem
                      value="copy-email"
                      onSelect={handleCopyEmail}
                      className="px-3 py-2.5 my-0.5 rounded cursor-pointer flex items-center gap-2.5 text-sm text-[#121211] hover:bg-[#0D4A3A]/10 hover:text-[#0D4A3A] transition-colors"
                    >
                      <Mail size={14} className="text-[#0D4A3A]" />
                      <span>Copy Email (hello@digitalgrowth.in)</span>
                    </CommandItem>
                    <CommandItem
                      value="copy-phone"
                      onSelect={handleCopyPhone}
                      className="px-3 py-2.5 my-0.5 rounded cursor-pointer flex items-center gap-2.5 text-sm text-[#121211] hover:bg-[#0D4A3A]/10 hover:text-[#0D4A3A] transition-colors"
                    >
                      <Phone size={14} className="text-[#0D4A3A]" />
                      <span>Copy Phone (+91 82377 42040)</span>
                    </CommandItem>
                    <CommandItem
                      value="initiate-project"
                      onSelect={() => handleSection("commission")}
                      className="px-3 py-2.5 my-0.5 rounded cursor-pointer flex items-center gap-2.5 text-sm font-semibold text-[#0D4A3A] hover:bg-[#0D4A3A]/15 transition-colors"
                    >
                      <ArrowUpRight size={15} />
                      <span>Start a Project Brief →</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
