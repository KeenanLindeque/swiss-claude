"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function ShimmerButton({
  children,
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-sm px-8 py-3",
        "border border-silver/25 bg-snow/[0.04] backdrop-blur-sm",
        "text-sm font-light tracking-[0.2em] uppercase text-snow",
        "transition-all duration-500",
        "hover:border-silver/50 hover:bg-snow/[0.08] hover:shadow-[0_0_30px_rgba(218,220,226,0.06)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
