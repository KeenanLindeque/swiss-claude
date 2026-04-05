"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Star } from "lucide-react";
import { TextFade } from "@/components/ui/text-reveal";
import { GoldSeparator } from "@/components/ui/gold-separator";
import { Spotlight } from "@/components/ui/spotlight";

const recognitionLevels = [
  {
    title: "Verified Quality",
    icon: CheckCircle,
    description:
      "Meets established benchmarks for service quality and operational competence.",
    accent: "from-snow/8 to-snow/[0.01]",
    borderAccent: "hover:border-snow/10",
    iconColor: "text-silver-dark/60",
  },
  {
    title: "Commended Excellence",
    icon: Star,
    description:
      "Demonstrates superior service delivery with consistent attention to guest experience.",
    accent: "from-silver/10 to-silver/[0.02]",
    borderAccent: "hover:border-silver/15",
    iconColor: "text-silver/70",
  },
  {
    title: "Distinguished Hospitality",
    icon: Shield,
    description:
      "Exemplifies the highest standard of hospitality integrity and guest experience performance.",
    accent: "from-silver/15 to-silver/[0.03]",
    borderAccent: "hover:border-silver/25",
    iconColor: "text-snow",
  },
];

const recognitionAttributes = [
  "Assessment-based",
  "Time-bound",
  "Independently reviewed",
  "Free from commercial influence",
];

const qualifyBenefits = [
  "Official recognition certificate",
  "Digital quality seal",
  "Public listing on SwissHospitality.com",
];

export function Recognition() {
  return (
    <section id="recognition" className="relative py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(218,220,226,0.02)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <TextFade delay={0}>
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-silver/50">
              Recognition Program
            </span>
          </TextFade>

          <TextFade delay={0.1}>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-snow sm:text-5xl lg:text-6xl">
              Recognition Earned
              <br />
              <span className="font-extralight text-silver">
                Through Assessment
              </span>
            </h2>
          </TextFade>

          <GoldSeparator className="mt-8" width="80px" />

          <TextFade delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-relaxed text-snow/45">
              The Swiss Hospitality Recognition Program acknowledges hotels that
              demonstrate measurable excellence in service quality and
              operational integrity.
            </p>
          </TextFade>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {recognitionLevels.map((level, i) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`group relative overflow-hidden rounded-sm border border-white/[0.04] bg-bg-card/50 p-8 opacity-0 transition-[border-color,background-color] duration-700 ${level.borderAccent} sm:p-10`}
            >
              <Spotlight size={250} />
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${level.accent}`}
              />

              <div className="relative z-10">
                <level.icon
                  className={`mb-6 h-8 w-8 ${level.iconColor} transition-all duration-500 group-hover:scale-110`}
                  strokeWidth={1}
                />

                <h3 className="mb-3 text-xl font-light text-snow">
                  {level.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-snow/40">
                  {level.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-sm border border-white/[0.04] bg-bg-card/30 p-8 opacity-0 sm:p-10"
          >
            <p className="mb-6 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
              Recognition Is
            </p>
            <div className="grid gap-3">
              {recognitionAttributes.map((attr) => (
                <div key={attr} className="flex items-center gap-3">
                  <div className="h-1 w-1 rotate-45 bg-silver/30" />
                  <span className="text-sm font-light text-snow/55">
                    {attr}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-sm border border-white/[0.04] bg-bg-card/30 p-8 opacity-0 sm:p-10"
          >
            <p className="mb-6 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
              Hotels That Qualify Receive
            </p>
            <div className="grid gap-3">
              {qualifyBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-silver/30" />
                  <span className="text-sm font-light text-snow/55">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/[0.04] pt-6">
              <p className="text-xs font-light italic text-snow/30">
                Recognition reflects verified performance, not sponsorship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
