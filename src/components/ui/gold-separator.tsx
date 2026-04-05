"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  width?: string;
}

export function GoldSeparator({ className, width = "120px" }: SeparatorProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-0"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </div>
  );
}

export function GoldDiamond({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent to-silver/50 opacity-0"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.div
        className="h-2 w-2 rotate-45 border border-silver/50 opacity-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        className="h-px bg-gradient-to-l from-transparent to-silver/50 opacity-0"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </div>
  );
}
