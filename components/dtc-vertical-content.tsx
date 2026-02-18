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
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const verticals = [
  { name: "Fashion", shape: "circle" as const, fill: "bg-pink-400", bg: "bg-pink-50 dark:bg-pink-950/30", text: "text-pink-600 dark:text-pink-400", border: "border-pink-200 dark:border-pink-800/40", accent: "hover:border-pink-300 dark:hover:border-pink-700" },
  { name: "Beauty", shape: "diamond" as const, fill: "bg-violet-400", bg: "bg-violet-50 dark:bg-violet-950/30", text: "text-violet-600 dark:text-violet-400", border: "border-violet-200 dark:border-violet-800/40", accent: "hover:border-violet-300 dark:hover:border-violet-700" },
  { name: "Consumer Electronics", shape: "square" as const, fill: "bg-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800/40", accent: "hover:border-blue-300 dark:hover:border-blue-700" },
  { name: "Wellness", shape: "pill" as const, fill: "bg-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800/40", accent: "hover:border-emerald-300 dark:hover:border-emerald-700" },
  { name: "Food & Beverage", shape: "triangle" as const, fill: "bg-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800/40", accent: "hover:border-amber-300 dark:hover:border-amber-700" },
  { name: "Lifestyle", shape: "hexagon" as const, fill: "bg-slate-400", bg: "bg-slate-50 dark:bg-slate-900/50", text: "text-slate-600 dark:text-slate-400", border: "border-slate-200 dark:border-slate-800/40", accent: "hover:border-slate-300 dark:hover:border-slate-700" },
]

function ShapeIcon({ shape, fill }: { shape: string; fill: string }) {
  switch (shape) {
    case "circle":
      return <div className={`h-4 w-4 rounded-full ${fill}`} />
    case "diamond":
      return <div className={`h-3.5 w-3.5 rotate-45 rounded-sm ${fill}`} />
    case "square":
      return <div className={`h-3.5 w-3.5 rounded-md ${fill}`} />
    case "pill":
      return <div className={`h-3 w-5 rounded-full ${fill}`} />
    case "triangle":
      return <div className={`h-4 w-4 ${fill}`} style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
    case "hexagon":
      return <div className={`h-4 w-4 ${fill}`} style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
    default:
      return <div className={`h-4 w-4 rounded-full ${fill}`} />
  }
}

const pillars = [
  {
    icon: DollarSign,
    title: "Capital",
    amount: "$250K - $1M",
    description:
      "Financial support to fuel your brand's next stage of growth at pre-seed and seed.",
  },
  {
    icon: Users,
    title: "Connection",
    amount: "120+",
    description:
      "A curated network of operators, advisors, and partners who've built iconic consumer brands.",
  },
  {
    icon: Package,
    title: "Resource",
    amount: "End-to-End",
    description:
      "Go-to-market strategy, e-commerce tools, and hands-on growth support from day one.",
  },
  {
    icon: TrendingUp,
    title: "Focused Vertical",
    amount: "6 Sectors",
    description:
      "Deep industry expertise where the next iconic consumer brands are being built.",
  },
]

const founderTraits = [
  "Pre-seed or seed stage startups",
  "Looking for $250K - $1M in capital support",
  "Building in consumer verticals (Fashion, Beauty, Electronics, Wellness, F&B, etc.)",
  "Ambitious and mission-driven",
  "Strong understanding of DTC landscape",
  "Ready to scale and build an iconic brand",
]

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description: "Fill out a short form about your brand, vision, and traction. Takes less than 5 minutes.",
    icon: Target,
  },
  {
    number: "02",
    title: "Meet the Team",
    description: "Selected founders are invited to an introductory conversation with our investment team.",
    icon: Users,
  },
  {
    number: "03",
    title: "Get Backed",
    description: "Receive capital, resources, and join a community of ambitious consumer brand builders.",
    icon: Zap,
  },
]

export function DtcVerticalContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen" ref={containerRef}>

        {/* ===== HERO HEADER ===== */}
        <header className="relative overflow-hidden border-b border-border px-6 pt-28 pb-16 lg:pt-32 lg:pb-20">
          {/* Subtle accent glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[hsl(var(--warm))]/[0.04] blur-[80px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-3 w-3" />
                DTC Vertical
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Now Accepting Applications
              </span>
            </div>

            <h1
              className="reveal font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
              }}
            >
              {"Build the Next "}
              <span className="text-shimmer">Iconic Brand</span>
            </h1>
            <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {"We partner with ambitious consumer founders at the earliest stages. Capital, connections, and deep DTC expertise to help you scale from day one."}
            </p>

            {/* Hero CTA + stats */}
            <div className="reveal mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-foreground/10"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{"Takes < 5 minutes"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* ===== HIGHLIGHT STRIP ===== */}
        <div className="border-b border-border bg-card/60 px-6 py-6">
          <div className="reveal mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-y-4 gap-x-8">
            {[
              { label: "Capital Range", value: "$250K - $1M" },
              { label: "Stage Focus", value: "Pre-Seed & Seed" },
              { label: "Portfolio", value: "120+ Companies" },
              { label: "Deployed", value: "$50M+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ARTICLE BODY ===== */}
        <div className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">

            {/* --- WHAT WE PROVIDE --- */}
            <section className="reveal mb-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Support</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What We Provide
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Comprehensive support across four key pillars, designed to give consumer founders an unfair advantage.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/[0.06] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <pillar.icon className="h-5 w-5" />
                        </div>
                        <span className="font-display text-lg font-bold tracking-tight text-primary/80">
                          {pillar.amount}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- FOCUS VERTICALS --- */}
            <section className="reveal mb-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[hsl(var(--warm))]/10 text-[hsl(var(--warm))]">
                  <Target className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--warm))]">Focus Areas</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Where We Invest
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We back consumer brands across these categories, partnering
                with founders who are redefining how people shop, eat, and live.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {verticals.map((vertical, i) => (
                  <div
                    key={vertical.name}
                    className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-3.5 rounded-2xl border ${vertical.border} ${vertical.bg} p-4 transition-all duration-300 ${vertical.accent} hover:shadow-sm`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border ${vertical.border} bg-background`}
                    >
                      <ShapeIcon shape={vertical.shape} fill={vertical.fill} />
                    </span>
                    <span className={`text-sm font-semibold ${vertical.text}`}>
                      {vertical.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- HOW IT WORKS --- */}
            <section className="reveal mb-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Process</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How It Works
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                From application to partnership in three simple steps.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className={`reveal reveal-delay-${i + 1} group relative flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-foreground text-background font-display text-lg font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <step.icon className="hidden h-5 w-5 flex-shrink-0 text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary sm:block" />
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- WHO WE'RE LOOKING FOR --- */}
            <section className="reveal mb-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Ideal Fit</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {"Who We're Looking For"}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
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
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- APPLY CTA --- */}
            <section className="reveal mb-8">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-8 text-center sm:p-12">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/20 blur-[80px]" />
                  <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[hsl(var(--warm))]/15 blur-[80px]" />
                </div>

                <div className="relative z-10">
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-background/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-background/70">
                    <Sparkles className="h-3 w-3" />
                    Applications Open
                  </span>

                  <h2 className="font-display text-3xl font-bold tracking-tight text-background sm:text-4xl">
                    {"Ready to Build Something "}
                    <span className="text-shimmer">Iconic?</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-background/60">
                    Join 120+ companies already backed by Sunstone. We review
                    all submissions and reach out if there is a potential fit.
                  </p>

                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                    <a
                      href="https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                    >
                      Submit Application
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="mailto:community@sunstoneinvestment.com"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-background/20 bg-transparent px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:border-background/40 hover:bg-background/5"
                    >
                      Contact Us
                    </a>
                  </div>

                  <p className="mt-8 text-sm text-background/40">
                    {"Questions? Reach us at "}
                    <a
                      href="mailto:community@sunstoneinvestment.com"
                      className="text-background/60 underline underline-offset-4 transition-colors hover:text-background/80"
                    >
                      community@sunstoneinvestment.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
