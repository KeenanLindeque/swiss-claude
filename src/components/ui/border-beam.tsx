"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#dadce2",
  colorTo = "#f3f3f5",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        className
      )}
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          maskClip: "padding-box, border-box",
          maskComposite: "intersect",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)",
          backgroundImage: `conic-gradient(from calc(var(--start, 0) * 1turn), ${colorFrom}, ${colorTo}, transparent 20%)`,
          animation: `border-beam-spin var(--duration) linear infinite var(--delay)`,
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes border-beam-spin {
          from { --start: 0; }
          to { --start: 1; }
        }
        @property --start {
          syntax: '<number>';
          initial-value: 0;
          inherits: false;
        }
      `}</style>
    </div>
  );
}
