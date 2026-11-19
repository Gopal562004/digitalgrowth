"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function scrollToSection(id: string) {
  if (!lenisInstance) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) lenisInstance.scrollTo(el, { duration: 1.4 });
}

export function scrollToTop() {
  if (!lenisInstance) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  lenisInstance.scrollTo(0, { duration: 1.6 });
}
