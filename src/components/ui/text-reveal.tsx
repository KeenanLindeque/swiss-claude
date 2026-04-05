"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Component = "p",
}: TextRevealProps) {
  const MotionComponent = motion.create(Component);

  return (
    <div className="overflow-hidden">
      <MotionComponent
        className={cn("opacity-0", className)}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </MotionComponent>
    </div>
  );
}

interface TextFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function TextFade({
  children,
  className,
  delay = 0,
  direction = "up",
}: TextFadeProps) {
  const directionMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  return (
    <motion.div
      className={cn("opacity-0", className)}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
