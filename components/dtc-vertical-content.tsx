"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  DollarSign,
  Users,
  Package,
  TrendingUp,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Clock,
  Zap,
  Target,
  Shirt,
  Cpu,
  UtensilsCrossed,
  Home,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/* ─── Data ─── */

const pillars = [
  {
    icon: DollarSign,
    title: "Capital",
    amount: "$50K – $1M",
    description:
      "Fuel for your next chapter — whether that's finding product-market fit, building a team, or scaling what's working.",
  },
  {
    icon: Users,
    title: "Connection",
    amount: "120+ Partners",
    description:
      "A curated network of operators, advisors, and partners who've scaled iconic consumer brands.",
  },
  {
    icon: Package,
    title: "Resources",
    amount: "End-to-End",
    description:
      "Go-to-market strategy, e-commerce infrastructure, and hands-on growth support from day one.",
  },
  {
    icon: TrendingUp,
    title: "Focused Verticals",
    amount: "6 Sectors",
    description:
      "Deep industry expertise across the categories where next-generation brands are being built.",
  },
]

const verticals = [
  { label: "Fashion & Apparel", Icon: Shirt },
  { label: "Beauty & Personal Care", Icon: Sparkles },
  { label: "Consumer Electronics", Icon: Cpu },
  { label: "Food & Beverage", Icon: UtensilsCrossed },
  { label: "Lifestyle & Home", Icon: Home },
]

const founderTraits = [
  "Seeking $250K – $1M in capital support",
  "Building in consumer verticals (Fashion, Beauty, Electronics, Food & Beverage, Lifestyle)",
  "Innovative, mission-driven founders",
  "Strong understanding of the DTC landscape",
  "Ready to scale and build an iconic brand",
]

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit a short application about your brand, vision, and traction. Takes less than 5 minutes.",
  },
  {
    number: "02",
    title: "Meet",
    description:
      "Selected founders are invited to an introductory conversation with our investment team.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Receive capital, resources, and join a community of dedicated consumer brand builders.",
  },
]

/* ─── Photo assignments ─── */
const HERO_IMG = "/images/sunstone-collage-dtc.jpg"
const ABOUT_IMG = "/images/dtc_imgs/DSC08196.JPG"
const MOSAIC_IMGS = [
  "/images/dtc_imgs/DSC08200.JPG",
  "/images/dtc_imgs/DSC08240.JPG",
  "/images/dtc_imgs/DSC08312.JPG",
]
const CRITERIA_IMG = "/images/dtc_imgs/DSC08334.JPG"

/* ─── Component ─── */

export function DtcVerticalContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar darkHero />
      <main className="relative min-h-screen" ref={containerRef}>

        {/* ════════════════════════════════════════════════════════════
            1. HERO — cinematic full-viewport
        ════════════════════════════════════════════════════════════ */}
        <header className="relative flex min-h-[85vh] items-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Sunstone DTC Founders"
              className="h-full w-full object-cover"
            />
            {/* Rich gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 via-[#0a0a1a]/60 to-[#0a0a1a]/30" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-10 lg:pb-24">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Sparkles className="h-3 w-3" />
                DTC Vertical
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Now Accepting Applications
              </span>
            </div>

            <h1
              className="reveal max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              {"Build the Next "}
              <span className="text-shimmer">Great Brand</span>
            </h1>

            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
              We work alongside consumer founders in the early stages, providing aligned capital, industry relationships, and experienced DTC insight to support thoughtful growth from the start.
            </p>

            {/* Hero CTA */}
            <div className="reveal mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Clock className="h-4 w-4" />
                <span>{"Takes < 5 minutes"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════════════════════════
            2. ABOUT THE PROGRAM — Z-pattern (text left, image right)
        ════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="reveal mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                About the Program
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Sunstone DTC Initiative
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                The Sunstone DTC Initiative is where consumer founders find their footing, their community, and their next move.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Southern California is one of the most diverse and under-leveraged innovation regions in the world. Through our DTC-focused efforts, we're committed to helping dedicated consumer founders access the capital, talent, and infrastructure needed to build the next generation of iconic brands.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["#DTCFounders", "#EcosystemBuilder", "#SoCalInnovation"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-foreground/5">
                <img
                  src={ABOUT_IMG}
                  alt="Sunstone Demo Day"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/10 bg-primary/[0.03]" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            4. WHAT WE PROVIDE — 4-pillar grid, wider
        ════════════════════════════════════════════════════════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center mb-10">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Our Support
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Provide
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Comprehensive support across four key pillars, designed to give consumer founders an unfair advantage.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-primary/30 transition-colors duration-300 group-hover:bg-primary" />

                  <div className="relative">
                    <span className="block font-display text-3xl font-bold tracking-tight text-foreground mb-1">
                      {pillar.amount}
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground/80 mb-3">
                      {pillar.title}
                    </h3>
                    <div className="h-px w-8 bg-border mb-3 transition-colors duration-300 group-hover:bg-primary/30" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            5. FULL-WIDTH PHOTO MOSAIC
        ════════════════════════════════════════════════════════════ */}
        <section className="reveal overflow-hidden">
          <div className="grid grid-cols-3 gap-0.5">
            {MOSAIC_IMGS.map((src, i) => (
              <div key={i} className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={src}
                  alt={`Sunstone community event ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            6. FOCUS VERTICALS — clean grid
        ════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center mb-10">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--warm,271_81%_56%))]">
                <Target className="h-3.5 w-3.5" />
                Focus Areas
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Where We Invest
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                We back consumer brands across these categories, partnering with founders who are redefining how people shop, eat, and live.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center">
              {verticals.map((vertical, i) => (
                <div
                  key={vertical.label}
                  className={`reveal reveal-delay-${(i % 3) + 1} group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 lg:w-44`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <vertical.Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 leading-tight">
                    {vertical.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            7. HOW IT WORKS — horizontal timeline-style steps
        ════════════════════════════════════════════════════════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center mb-10">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Zap className="h-3.5 w-3.5" />
                Process
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                From application to partnership in three simple steps.
              </p>
            </div>

            {/* Timeline steps */}
            <div className="grid gap-10 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} group relative`}
                >
                  {/* Dashed connector line (not on last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[calc(100%_-_1rem)] top-4 hidden h-px w-[calc(100%_-_2rem)] border-t border-dashed border-border sm:block" />
                  )}
                  <div className="relative">
                    {/* Step badge + title inline */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold tabular-nums text-primary">
                        {step.number}
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground pl-11">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            8. WHO WE'RE LOOKING FOR — Z-pattern reversed (image left, text right)
        ════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="reveal mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-foreground/5">
                <img
                  src={CRITERIA_IMG}
                  alt="Sunstone community"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]" />
            </div>

            {/* Text + criteria */}
            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Ideal Fit
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"Who We're Looking For"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {"We partner with ambitious founders building the next generation of consumer brands."}
              </p>

              <ul className="mt-8 space-y-3">
                {founderTraits.map((trait, i) => (
                  <li
                    key={i}
                    className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]`}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {trait}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            9. FINAL CTA — premium dark block
        ════════════════════════════════════════════════════════════ */}
        <section className="reveal px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a1a] p-10 text-center sm:p-16 lg:p-20">
              {/* Background photo with heavy overlay */}
              <div className="absolute inset-0">
                <img
                  src="/images/dtc_imgs/DSC08209.JPG"
                  alt=""
                  className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]/90" />
              </div>

              {/* Glow effects */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
              </div>

              <div className="relative z-10">
                <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60">
                  <Sparkles className="h-3 w-3" />
                  Applications Open
                </span>

                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {"Ready to Build Something "}
                  <span className="text-shimmer">Great?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/50 lg:text-lg">
                  Join 120+ companies already backed by Sunstone. We review all
                  submissions and reach out if there is a potential fit.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                  <a
                    href="https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
                  >
                    Submit Application
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-10 py-4 text-base font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                  >
                    Contact Us
                  </a>
                </div>

                <p className="mt-10 text-sm text-white/30">
                  {"Questions? Reach us at "}
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="text-white/50 underline underline-offset-4 transition-colors hover:text-white/70"
                  >
                    community@sunstoneinvestment.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
