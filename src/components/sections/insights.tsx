"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Globe, Lightbulb } from "lucide-react";
import { TextFade } from "@/components/ui/text-reveal";
import { GoldSeparator } from "@/components/ui/gold-separator";
import { Spotlight } from "@/components/ui/spotlight";

const insightCategories = [
  {
    title: "Service Quality Trends",
    icon: TrendingUp,
    description:
      "Tracking evolving standards across global hospitality markets.",
  },
  {
    title: "Operational Signals",
    icon: BarChart3,
    description:
      "Performance indicators drawn from structured field assessments.",
  },
  {
    title: "Excellence Case Studies",
    icon: Lightbulb,
    description:
      "Hospitality excellence case observations from verified evaluations.",
  },
  {
    title: "Market Patterns",
    icon: Globe,
    description:
      "Emerging patterns and shifts across international hospitality sectors.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(218,220,226,0.02)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <TextFade delay={0}>
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-silver/50">
              05 — Intelligence
            </span>
          </TextFade>

          <TextFade delay={0.1}>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-snow sm:text-5xl lg:text-6xl">
              Industry Insights &
              <br />
              <span className="font-extralight text-silver">
                Service Intelligence
              </span>
            </h2>
          </TextFade>

          <GoldSeparator className="mt-8" width="80px" />

          <TextFade delay={0.3}>
            <p className="mx-auto mt-8 max-w-md text-xs font-light italic tracking-wide text-silver/45">
              Observations from the Field.
            </p>
          </TextFade>

          <TextFade delay={0.4}>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-snow/45">
              Swiss Hospitality publishes independent insights based on
              assessment observations and industry research, informed by
              structured evaluation and professional analysis.
            </p>
          </TextFade>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {insightCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-sm border border-white/[0.04] bg-bg-card/40 p-7 opacity-0 transition-[border-color,background-color] duration-700 hover:border-silver/10 hover:bg-bg-card/60"
            >
              <Spotlight size={200} />

              <div className="relative z-10">
                <category.icon
                  className="mb-5 h-6 w-6 text-silver/35 transition-all duration-500 group-hover:text-silver/60"
                  strokeWidth={1}
                />

                <h3 className="mb-3 text-lg font-light text-snow">
                  {category.title}
                </h3>

                <p className="text-xs font-light leading-relaxed text-snow/35">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
