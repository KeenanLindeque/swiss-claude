"use client";

import { motion } from "framer-motion";
import {
  Eye,
  ClipboardCheck,
  Shield,
  CheckCircle,
  Star,
  Compass,
  BarChart3,
  TrendingUp,
  Globe,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── palette ─── */
const gold = {
  base: "#c9a96e",
  light: "#dfc38d",
  dark: "#a68a4e",
};
const warmWhite = "#f0ece4";
const bgDark = "#0c0c0c";
const bgCard = "#141414";

/* ─── helpers ─── */
function Fade({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`opacity-0 ${className ?? ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Sep({ width = "80px" }: { width?: string }) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="opacity-0"
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent, ${gold.base}, transparent)`,
        }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </div>
  );
}

function Diamond() {
  return (
    <div className="flex items-center justify-center gap-4">
      <motion.div
        className="opacity-0"
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent, ${gold.base}99)`,
        }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="opacity-0"
        style={{
          width: 8,
          height: 8,
          transform: "rotate(45deg)",
          border: `1px solid ${gold.base}99`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        className="opacity-0"
        style={{
          height: 1,
          background: `linear-gradient(to left, transparent, ${gold.base}99)`,
        }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

/* ─── NAV ─── */
const navLinks = [
  { label: "Services", href: "#op-services" },
  { label: "Recognition", href: "#op-recognition" },
  { label: "Advisory", href: "#op-advisory" },
  { label: "Insights", href: "#op-insights" },
  { label: "Contact", href: "#op-contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="opacity-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background .7s, border-color .7s",
          background: scrolled ? "rgba(12,12,12,.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? `1px solid ${gold.base}18` : "1px solid transparent",
        }}
      >
        <nav
          style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px" }}
          className="flex items-center justify-between lg:px-12"
        >
          <a href="#" className="group flex items-center gap-3">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                border: `1px solid ${gold.base}66`,
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 18,
                  color: gold.base,
                }}
              >
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: warmWhite,
                }}
              >
                Swiss
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 300,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: `${gold.base}b3`,
                }}
              >
                Hospitality
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: `${warmWhite}b3`,
                  transition: "color .3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = warmWhite)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${warmWhite}b3`)
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            style={{ color: `${warmWhite}b3` }}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: `${bgDark}fa`,
            backdropFilter: "blur(48px)",
          }}
          className="flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
            style={{ color: `${warmWhite}b3` }}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: `${warmWhite}cc`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: bgDark }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${gold.base}0f 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, ${gold.base}0a 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 1,
            background: `linear-gradient(to right, transparent, ${gold.base}33, transparent)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 opacity-0"
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 300,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: `${gold.base}cc`,
            }}
          >
            Independent Quality Assessment
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: warmWhite,
            }}
          >
            Swiss
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: gold.base,
            }}
          >
            Hospitality
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-10 opacity-0"
        >
          <Diamond />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="opacity-0"
          style={{
            margin: "40px auto 0",
            maxWidth: 640,
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            letterSpacing: "0.03em",
            color: `${warmWhite}99`,
          }}
        >
          Delivering independent quality assessment, experience auditing,
          recognition, and hospitality intelligence for hotels and operators
          worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="opacity-0"
          style={{
            margin: "16px auto 0",
            maxWidth: 520,
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.7,
            color: `${warmWhite}66`,
          }}
        >
          We evaluate what truly defines excellence: service integrity,
          operational discipline, and guest experience performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center"
        >
          <a
            href="#op-services"
            style={{
              padding: "12px 32px",
              border: `1px solid ${gold.base}4d`,
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: warmWhite,
              background: `${gold.base}14`,
              transition: "all .5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${gold.base}99`;
              e.currentTarget.style.boxShadow = `0 0 30px ${gold.base}26`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${gold.base}4d`;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Discover Our Services
          </a>
          <a
            href="#op-contact"
            style={{
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: `${warmWhite}80`,
              transition: "color .3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = `${gold.base}cc`)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${warmWhite}80`)}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: `${warmWhite}4d` }}>
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background: `linear-gradient(to bottom, ${gold.base}66, transparent)`,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── SERVICE CARD ─── */
function ServiceCard({
  number,
  title,
  subtitle,
  description,
  items,
  deliverable,
  Icon,
  index,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  deliverable: { title: string; items: string[] };
  Icon: React.ElementType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative opacity-0"
    >
      <div
        style={{
          border: `1px solid rgba(255,255,255,0.04)`,
          background: `${bgCard}80`,
          borderRadius: 2,
          padding: "clamp(32px, 4vw, 48px)",
          transition: "border-color .7s, background .7s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${gold.base}26`;
          e.currentTarget.style.background = `${bgCard}cc`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
          e.currentTarget.style.background = `${bgCard}80`;
        }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 300, color: `${gold.base}4d` }}>
            {number}
          </span>
          <div style={{ width: 1, height: 32, background: `${gold.base}26` }} />
          <Icon style={{ width: 20, height: 20, color: `${gold.base}80` }} />
        </div>

        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.25rem, 3vw, 1.875rem)", fontWeight: 300, color: warmWhite, marginBottom: 8 }}>
          {title}
        </h3>
        <p style={{ fontSize: 12, fontWeight: 300, fontStyle: "italic", letterSpacing: "0.15em", color: `${gold.base}99`, marginBottom: 24 }}>
          {subtitle}
        </p>
        <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}80`, marginBottom: 32 }}>
          {description}
        </p>

        <div className="mb-8">
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 16 }}>
            We Assess
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div style={{ width: 4, height: 4, marginTop: 6, transform: "rotate(45deg)", background: `${gold.base}66`, flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}99` }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 32 }}>
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 16 }}>
            {deliverable.title}
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {deliverable.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div style={{ width: 4, height: 4, marginTop: 6, borderRadius: "50%", background: `${gold.base}4d`, flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}80` }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── SERVICES ─── */
function Services() {
  return (
    <section id="op-services" style={{ padding: "128px 0", position: "relative" }}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <Fade><span style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.5em", textTransform: "uppercase", color: `${gold.base}99` }}>What We Do</span></Fade>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 300, color: warmWhite, marginTop: 24 }}>Our Services</h2></Fade>
          <div className="mt-8"><Sep /></div>
          <Fade delay={0.3}><p style={{ margin: "32px auto 0", maxWidth: 640, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}80` }}>Swiss Hospitality Company delivers independent quality assessment, experience auditing, recognition, and hospitality intelligence for hotels and operators worldwide.</p></Fade>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <ServiceCard number="01" title="Mystery Guest Experience Audits" subtitle="Discreet. Independent. Measured." description="Our mystery guest program evaluates the complete guest journey through anonymous, on-site assessments conducted by trained hospitality professionals." items={["Pre-arrival communication","Arrival and check-in experience","Service behavior and responsiveness","F&B execution","Housekeeping standards","Complaint handling and recovery","Departure experience"]} deliverable={{ title: "Deliverable — Confidential Performance Report", items: ["Scored performance indicators","Behavioral observations","Service gap analysis","Strategic recommendations"] }} Icon={Eye} index={0} />
          <ServiceCard number="02" title="Quality & Operational Audits" subtitle="Where Standards Meet Execution." description="Our Quality Audit evaluates alignment between brand promise, operational implementation, leadership oversight, and frontline consistency." items={["SOP compliance","Service culture maturity","Cross-department coordination","Staff capability and preparedness","Quality governance systems"]} deliverable={{ title: "Deliverable — Structured Audit Report", items: ["Performance strengths","Critical gaps","Risk indicators","Strategic improvement roadmap"] }} Icon={ClipboardCheck} index={1} />
        </div>
      </div>
    </section>
  );
}

/* ─── RECOGNITION ─── */
const recLevels = [
  { title: "Verified Quality", Icon: CheckCircle, desc: "Meets established benchmarks for service quality and operational competence.", iconColor: `${warmWhite}80` },
  { title: "Commended Excellence", Icon: Star, desc: "Demonstrates superior service delivery with consistent attention to guest experience.", iconColor: `${gold.base}99` },
  { title: "Distinguished Hospitality", Icon: Shield, desc: "Exemplifies the highest standard of hospitality integrity and guest experience performance.", iconColor: gold.base },
];

function Recognition() {
  return (
    <section id="op-recognition" style={{ padding: "128px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${gold.base}1a, transparent)` }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <Fade><span style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.5em", textTransform: "uppercase", color: `${gold.base}99` }}>Recognition Program</span></Fade>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 300, color: warmWhite, marginTop: 24 }}>Recognition Earned<br /><span style={{ fontStyle: "italic", color: gold.base }}>Through Assessment</span></h2></Fade>
          <div className="mt-8"><Sep /></div>
          <Fade delay={0.3}><p style={{ margin: "32px auto 0", maxWidth: 640, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}80` }}>The Swiss Hospitality Recognition Program acknowledges hotels that demonstrate measurable excellence in service quality and operational integrity.</p></Fade>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {recLevels.map((l, i) => (
            <motion.div key={l.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.15 }} className="opacity-0" style={{ border: "1px solid rgba(255,255,255,0.04)", background: `${bgCard}80`, borderRadius: 2, padding: "clamp(32px, 4vw, 40px)" }}>
              <l.Icon style={{ width: 32, height: 32, color: l.iconColor, marginBottom: 24 }} strokeWidth={1} />
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 300, color: warmWhite, marginBottom: 12 }}>{l.title}</h3>
              <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}73` }}>{l.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="opacity-0" style={{ border: "1px solid rgba(255,255,255,0.04)", background: `${bgCard}4d`, borderRadius: 2, padding: "clamp(32px, 4vw, 40px)" }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 24 }}>Recognition Is</p>
            {["Assessment-based","Time-bound","Independently reviewed","Free from commercial influence"].map((a) => (
              <div key={a} className="flex items-center gap-3 mb-3"><div style={{ width: 4, height: 4, transform: "rotate(45deg)", background: `${gold.base}66` }} /><span style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}99` }}>{a}</span></div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }} className="opacity-0" style={{ border: "1px solid rgba(255,255,255,0.04)", background: `${bgCard}4d`, borderRadius: 2, padding: "clamp(32px, 4vw, 40px)" }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 24 }}>Hotels That Qualify Receive</p>
            {["Official recognition certificate","Digital quality seal","Public listing on SwissHospitality.com"].map((b) => (
              <div key={b} className="flex items-center gap-3 mb-3"><div style={{ width: 4, height: 4, borderRadius: "50%", background: `${gold.base}66` }} /><span style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}99` }}>{b}</span></div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 32, paddingTop: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 300, fontStyle: "italic", color: `${warmWhite}59` }}>Recognition reflects verified performance, not sponsorship.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── ADVISORY ─── */
function Advisory() {
  const items = ["Executive debrief discussions","Service design refinement","Leadership alignment insights","Service recovery strategy input"];
  return (
    <section id="op-advisory" style={{ padding: "128px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${gold.base}1a, transparent)` }} />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Fade><span style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.5em", textTransform: "uppercase", color: `${gold.base}99` }}>04 — Advisory</span></Fade>
            <Fade delay={0.1}><h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: warmWhite, marginTop: 24 }}>Executive Quality<br /><span style={{ fontStyle: "italic", color: gold.base }}>Advisory</span></h2></Fade>
            <div className="mt-6"><Sep width="60px" /></div>
            <Fade delay={0.3}><p style={{ marginTop: 32, fontSize: 14, fontWeight: 300, fontStyle: "italic", letterSpacing: "0.05em", color: `${gold.base}73` }}>Targeted Strategic Guidance.</p></Fade>
            <Fade delay={0.4}><p style={{ marginTop: 16, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}80` }}>Following audits or assessments, Swiss Hospitality offers selective advisory sessions for executive teams.</p></Fade>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 }} className="opacity-0" style={{ border: "1px solid rgba(255,255,255,0.04)", background: `${bgCard}80`, borderRadius: 2, padding: "clamp(32px, 4vw, 40px)" }}>
            <Compass style={{ width: 32, height: 32, color: `${gold.base}66`, marginBottom: 32 }} strokeWidth={1} />
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 24 }}>Includes</p>
            {items.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} className="flex items-center gap-4 mb-4 opacity-0">
                <div style={{ width: 24, height: 1, background: `${gold.base}33` }} />
                <span style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}8c` }}>{item}</span>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 40, paddingTop: 32 }}>
              <p style={{ fontSize: 12, fontWeight: 300, color: `${warmWhite}59` }}>We do not provide long-term consultancy retainers.</p>
              <p style={{ fontSize: 12, fontWeight: 300, fontStyle: "italic", color: `${gold.base}66`, marginTop: 8 }}>Our role is diagnostic clarity and strategic direction.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── INSIGHTS ─── */
const insightItems = [
  { title: "Service Quality Trends", Icon: TrendingUp, desc: "Tracking evolving standards across global hospitality markets." },
  { title: "Operational Signals", Icon: BarChart3, desc: "Performance indicators drawn from structured field assessments." },
  { title: "Excellence Case Studies", Icon: Lightbulb, desc: "Hospitality excellence case observations from verified evaluations." },
  { title: "Market Patterns", Icon: Globe, desc: "Emerging patterns and shifts across international hospitality sectors." },
];

function Insights() {
  return (
    <section id="op-insights" style={{ padding: "128px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${gold.base}1a, transparent)` }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <Fade><span style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.5em", textTransform: "uppercase", color: `${gold.base}99` }}>05 — Intelligence</span></Fade>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 300, color: warmWhite, marginTop: 24 }}>Industry Insights &<br /><span style={{ fontStyle: "italic", color: gold.base }}>Service Intelligence</span></h2></Fade>
          <div className="mt-8"><Sep /></div>
          <Fade delay={0.3}><p style={{ margin: "32px auto 0", maxWidth: 400, fontSize: 12, fontWeight: 300, fontStyle: "italic", letterSpacing: "0.05em", color: `${gold.base}73` }}>Observations from the Field.</p></Fade>
          <Fade delay={0.4}><p style={{ margin: "16px auto 0", maxWidth: 640, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}80` }}>Swiss Hospitality publishes independent insights based on assessment observations and industry research, informed by structured evaluation and professional analysis.</p></Fade>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {insightItems.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="opacity-0" style={{ border: "1px solid rgba(255,255,255,0.04)", background: `${bgCard}66`, borderRadius: 2, padding: 28, transition: "border-color .7s, background .7s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${gold.base}26`; e.currentTarget.style.background = `${bgCard}99`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.background = `${bgCard}66`; }}>
              <c.Icon style={{ width: 24, height: 24, color: `${gold.base}66`, marginBottom: 20 }} strokeWidth={1} />
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 300, color: warmWhite, marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}66` }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer id="op-contact" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "96px 0", position: "relative" }}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div style={{ width: 40, height: 40, border: `1px solid ${gold.base}4d`, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 500, color: gold.base }}>S</span>
              </div>
              <div className="flex flex-col">
                <span style={{ fontSize: 14, fontWeight: 300, letterSpacing: "0.3em", textTransform: "uppercase", color: warmWhite }}>Swiss Hospitality</span>
                <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: `${gold.base}80` }}>Company</span>
              </div>
            </div>
            <p style={{ maxWidth: 384, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: `${warmWhite}66` }}>Independent quality assessment, experience auditing, recognition, and hospitality intelligence for hotels and operators worldwide.</p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 24 }}>Services</p>
            {["Mystery Audits","Quality Audits","Recognition Program","Executive Advisory","Industry Insights"].map((s) => (
              <a key={s} href="#op-services" style={{ display: "block", fontSize: 14, fontWeight: 300, color: `${warmWhite}66`, marginBottom: 12 }}>{s}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${gold.base}80`, marginBottom: 24 }}>Contact</p>
            <a href="mailto:info@swisshospitality.com" style={{ display: "block", fontSize: 14, fontWeight: 300, color: `${warmWhite}66`, marginBottom: 12 }}>info@swisshospitality.com</a>
            <p style={{ fontSize: 14, fontWeight: 300, color: `${warmWhite}4d` }}>Zurich, Switzerland</p>
          </div>
        </div>
        <div className="my-16"><Diamond /></div>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.15em", color: `${warmWhite}40` }}>&copy; {new Date().getFullYear()} Swiss Hospitality Company. All rights reserved.</p>
          <p style={{ fontSize: 10, fontWeight: 300, fontStyle: "italic", letterSpacing: "0.05em", color: `${warmWhite}33` }}>Recognition reflects verified performance, not sponsorship.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function OnepromptPage() {
  return (
    <div
      style={{
        background: bgDark,
        color: warmWhite,
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Hero />
      <Services />
      <Recognition />
      <Advisory />
      <Insights />
      <Footer />
    </div>
  );
}
