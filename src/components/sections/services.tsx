"use client";

import { motion } from "framer-motion";
import { Eye, ClipboardCheck, type LucideIcon } from "lucide-react";
import { TextFade } from "@/components/ui/text-reveal";
import { GoldSeparator } from "@/components/ui/gold-separator";
import { Spotlight } from "@/components/ui/spotlight";

interface ServiceCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  deliverable?: {
    title: string;
    items: string[];
  };
  icon: LucideIcon;
  index: number;
}

function ServiceCard({
  number,
  title,
  subtitle,
  description,
  items,
  deliverable,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative opacity-0"
    >
      <div className="relative overflow-hidden rounded-sm border border-white/[0.04] bg-bg-card/50 p-8 transition-all duration-700 hover:border-silver/10 hover:bg-bg-card/80 sm:p-10 lg:p-12">
        <Spotlight size={300} />

        <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-silver/[0.02] to-transparent" />

        <div className="relative z-10">
          <div className="mb-8 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extralight tracking-tight text-silver/25">
                {number}
              </span>
              <div className="h-8 w-px bg-silver/10" />
              <Icon className="h-5 w-5 text-silver/40 transition-colors duration-500 group-hover:text-silver/70" />
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-light tracking-tight text-snow sm:text-3xl">
            {title}
          </h3>

          <p className="mb-6 text-xs font-light italic tracking-[0.15em] text-silver/50">
            {subtitle}
          </p>

          <p className="mb-8 text-sm font-light leading-relaxed text-snow/45">
            {description}
          </p>

          <div className="mb-8">
            <p className="mb-4 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
              We Assess
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-silver/30" />
                  <span className="text-sm font-light text-snow/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {deliverable && (
            <div className="border-t border-white/[0.04] pt-8">
              <p className="mb-4 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
                {deliverable.title}
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {deliverable.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-silver/25" />
                    <span className="text-sm font-light text-snow/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const services: ServiceCardProps[] = [
  {
    number: "01",
    title: "Mystery Guest Experience Audits",
    subtitle: "Discreet. Independent. Measured.",
    description:
      "Our mystery guest program evaluates the complete guest journey through anonymous, on-site assessments conducted by trained hospitality professionals.",
    items: [
      "Pre-arrival communication",
      "Arrival and check-in experience",
      "Service behavior and responsiveness",
      "F&B execution",
      "Housekeeping standards",
      "Complaint handling and recovery",
      "Departure experience",
    ],
    deliverable: {
      title: "Deliverable — Confidential Performance Report",
      items: [
        "Scored performance indicators",
        "Behavioral observations",
        "Service gap analysis",
        "Strategic recommendations",
      ],
    },
    icon: Eye,
    index: 0,
  },
  {
    number: "02",
    title: "Quality & Operational Audits",
    subtitle: "Where Standards Meet Execution.",
    description:
      "Our Quality Audit evaluates alignment between brand promise, operational implementation, leadership oversight, and frontline consistency.",
    items: [
      "SOP compliance",
      "Service culture maturity",
      "Cross-department coordination",
      "Staff capability and preparedness",
      "Quality governance systems",
    ],
    deliverable: {
      title: "Deliverable — Structured Audit Report",
      items: [
        "Performance strengths",
        "Critical gaps",
        "Risk indicators",
        "Strategic improvement roadmap",
      ],
    },
    icon: ClipboardCheck,
    index: 1,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(218,220,226,0.02)_0%,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <TextFade delay={0}>
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-silver/50">
              What We Do
            </span>
          </TextFade>

          <TextFade delay={0.1}>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-snow sm:text-5xl lg:text-6xl">
              Our Services
            </h2>
          </TextFade>

          <GoldSeparator className="mt-8" width="80px" />

          <TextFade delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-relaxed text-snow/45">
              Swiss Hospitality Company delivers independent quality assessment,
              experience auditing, recognition, and hospitality intelligence for
              hotels and operators worldwide.
            </p>
          </TextFade>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
