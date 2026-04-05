"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { TextFade } from "@/components/ui/text-reveal";
import { GoldSeparator } from "@/components/ui/gold-separator";
import { Spotlight } from "@/components/ui/spotlight";

const advisoryItems = [
  "Executive debrief discussions",
  "Service design refinement",
  "Leadership alignment insights",
  "Service recovery strategy input",
];

export function Advisory() {
  return (
    <section id="advisory" className="relative py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <TextFade delay={0}>
              <span className="text-[10px] font-light tracking-[0.5em] uppercase text-silver/50">
                04 — Advisory
              </span>
            </TextFade>

            <TextFade delay={0.1}>
              <h2 className="mt-6 text-4xl font-light tracking-tight text-snow sm:text-5xl">
                Executive Quality
                <br />
                <span className="font-extralight text-silver">Advisory</span>
              </h2>
            </TextFade>

            <GoldSeparator className="mt-6" width="60px" />

            <TextFade delay={0.3}>
              <p className="mt-8 text-sm font-light italic tracking-wide text-silver/45">
                Targeted Strategic Guidance.
              </p>
            </TextFade>

            <TextFade delay={0.4}>
              <p className="mt-4 text-sm font-light leading-relaxed text-snow/45">
                Following audits or assessments, Swiss Hospitality offers
                selective advisory sessions for executive teams.
              </p>
            </TextFade>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative overflow-hidden rounded-sm border border-white/[0.04] bg-bg-card/50 p-8 opacity-0 transition-[border-color] duration-700 hover:border-silver/10 sm:p-10"
          >
            <Spotlight size={300} />

            <div className="relative z-10">
              <Compass
                className="mb-8 h-8 w-8 text-silver/35 transition-colors duration-500 group-hover:text-silver/60"
                strokeWidth={1}
              />

              <p className="mb-6 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
                Includes
              </p>

              <div className="grid gap-4">
                {advisoryItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 opacity-0"
                  >
                    <div className="h-px w-6 bg-silver/15" />
                    <span className="text-sm font-light text-snow/55">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/[0.04] pt-8">
                <p className="text-xs font-light leading-relaxed text-snow/30">
                  We do not provide long-term consultancy retainers.
                </p>
                <p className="mt-2 text-xs font-light italic text-silver/35">
                  Our role is diagnostic clarity and strategic direction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
