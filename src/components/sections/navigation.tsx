"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Recognition", href: "#recognition" },
  { label: "Advisory", href: "#advisory" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 opacity-0 transition-[background-color,border-color] duration-700",
          scrolled
            ? "bg-bg-dark/80 backdrop-blur-xl border-b border-silver/8"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#" className="group flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Swiss Hospitality"
              width={140}
              height={41}
              className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-light tracking-[0.2em] uppercase text-snow/60 transition-colors duration-300 hover:text-snow"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-silver/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-snow/60 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-dark/98 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-snow/60"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm font-light tracking-[0.3em] uppercase text-snow/70 transition-colors hover:text-snow"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
