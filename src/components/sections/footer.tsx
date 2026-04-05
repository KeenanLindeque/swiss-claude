"use client";

import Image from "next/image";
import { GoldDiamond } from "@/components/ui/gold-separator";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/[0.04] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(15,35,71,0.15)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Swiss Hospitality"
                width={160}
                height={47}
                className="h-10 w-auto"
              />
            </div>

            <p className="max-w-sm text-sm font-light leading-relaxed text-snow/35">
              Independent quality assessment, experience auditing, recognition,
              and hospitality intelligence for hotels and operators worldwide.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
              Services
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Mystery Audits",
                "Quality Audits",
                "Recognition Program",
                "Executive Advisory",
                "Industry Insights",
              ].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="text-sm font-light text-snow/35 transition-colors duration-300 hover:text-snow/60"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-medium tracking-[0.3em] uppercase text-silver/40">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@swisshospitality.com"
                className="text-sm font-light text-snow/35 transition-colors duration-300 hover:text-snow/60"
              >
                info@swisshospitality.com
              </a>
              <p className="text-sm font-light text-snow/25">
                Zurich, Switzerland
              </p>
            </div>
          </div>
        </div>

        <GoldDiamond className="my-16" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[10px] font-light tracking-[0.15em] text-snow/20">
            &copy; {new Date().getFullYear()} Swiss Hospitality Company. All
            rights reserved.
          </p>
          <p className="text-[10px] font-light italic tracking-wide text-snow/15">
            Recognition reflects verified performance, not sponsorship.
          </p>
        </div>
      </div>
    </footer>
  );
}
