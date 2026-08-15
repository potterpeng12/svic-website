"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Search,
  FlaskConical,
  Hammer,
  Rocket,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Megaphone,
  Package,
  BarChart3,
  Palette,
  ShoppingBag,
  LineChart,
  Handshake,
  Calendar,
  Plus,
  Minus,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { partners } from "@/data/partners"

const APPLY_URL = "https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"

/* ─── Data ─── */

const heroStats = [
  { value: "12", label: "Weeks" },
  { value: "$0", label: "Cost & Equity" },
  { value: "5", label: "Verticals" },
  { value: "1:1", label: "Mentorship" },
]

const stages = [
  {
    icon: Search,
    title: "Discover",
    description: "Sharpen your brand thesis, positioning, and the customer you are truly building for.",
  },
  {
    icon: FlaskConical,
    title: "Validate",
    description: "Pressure-test demand with real experiments before you spend a dollar on inventory.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Stand up your storefront, supply chain, and brand system with hands-on partner support.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Go to market with a paid-acquisition and content engine designed for first traction.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Turn early signal into repeatable growth and a fundable, investor-ready story.",
  },
]

const marketData = [
  { year: "2020", value: 111 },
  { year: "2021", value: 129 },
  { year: "2022", value: 155 },
  { year: "2023", value: 187 },
  { year: "2024", value: 213 },
  { year: "2025", value: 243 },
]

const cohortTraits = [
  "Pre-seed to early-revenue consumer founders",
  "Building in Fashion, Beauty, Electronics, Food & Beverage, or Lifestyle",
  "Based in or connected to Southern California",
  "Coachable, mission-driven, and ready to move fast",
  "Committed to the full 12-week cohort",
]

const curriculum = [
  { icon: Target, title: "Brand Strategy", description: "Positioning, mission, and the story that makes you unmistakable." },
  { icon: Palette, title: "Identity & Design", description: "Visual identity, packaging, and a system that scales." },
  { icon: Users, title: "Audience & Community", description: "Find, grow, and keep the customers who love you." },
  { icon: ShoppingBag, title: "E-commerce Infrastructure", description: "Storefront, payments, and fulfillment that just work." },
  { icon: Megaphone, title: "Growth Marketing", description: "Paid, organic, and content engines built for first traction." },
  { icon: Package, title: "Supply & Ops", description: "Sourcing, inventory, and margins that keep you healthy." },
  { icon: LineChart, title: "Metrics & Finance", description: "Unit economics, dashboards, and the numbers investors ask for." },
  { icon: DollarSign, title: "Fundraising", description: "Get investor-ready and understand what capital fits your brand." },
  { icon: Handshake, title: "Partnerships", description: "Retail, collabs, and the relationships that unlock scale." },
]

const timeline = [
  { step: "01", title: "Apply", description: "Submit a short application about your brand and vision. Under 5 minutes." },
  { step: "02", title: "Interview", description: "Selected founders meet the Brand Lab team for a quick conversation." },
  { step: "03", title: "Onboard", description: "Get matched with mentors, tools, and your cohort resources." },
  { step: "04", title: "Cohort Begins", description: "Kick off 12 weeks of curriculum, workshops, and hands-on building." },
]

const regionStats = [
  { value: "24M+", label: "People across Southern California" },
  { value: "$1.4T", label: "Regional GDP — a top-tier global economy" },
  { value: "#1", label: "U.S. region for consumer & lifestyle brands" },
]

const faqs = [
  {
    q: "Is the Brand Lab really free?",
    a: "Yes. The Brand Lab is 100% free and we take no equity. Our goal is to strengthen Southern California's consumer ecosystem by helping founders build durable brands.",
  },
  {
    q: "How much time does it require?",
    a: "Plan for roughly 6–8 hours per week across live workshops, mentor sessions, and building time over the 12-week cohort.",
  },
  {
    q: "Do I need revenue or a product to apply?",
    a: "No. We accept founders from pre-idea validation through early revenue. What matters most is commitment and a clear consumer focus.",
  },
  {
    q: "Will the program help me raise capital?",
    a: "The curriculum makes you investor-ready and, for the right brands, opens pathways to Sunstone's capital and partner network. Participation is not a guarantee of funding.",
  },
  {
    q: "Does it have to be in person?",
    a: "The Brand Lab is built for Southern California founders with a blend of in-person sessions and remote-friendly workshops.",
  },
]

/* ─── Photo assignments ─── */
const HERO_IMG = "/images/sunstone-collage-dtc.jpg"
const FORMAT_IMG = "/images/dtc_imgs/DSC08196.JPG"
const COHORT_IMG = "/images/dtc_imgs/DSC08334.JPG"
const GALLERY_IMGS = [
  "/images/dtc_imgs/DSC08200.JPG",
  "/images/dtc_imgs/DSC08240.JPG",
  "/images/dtc_imgs/DSC08312.JPG",
]

/* ─── FAQ item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-foreground">{q}</span>
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-foreground/60">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="animate-expand px-6 pb-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ─── Component ─── */

export function BrandLabContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)
  const maxMarket = Math.max(...marketData.map((d) => d.value))

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar darkHero />
      <main className="relative min-h-screen" ref={containerRef}>
        {/* ════════ 1. HERO ════════ */}
        <header className="relative flex min-h-[92vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="Sunstone DTC founders" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/70 to-[#0a0a1a]/30" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-32 sm:px-10 lg:pb-20">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Free 12-Week Program
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Applications Open
              </span>
            </div>

            <h1
              className="reveal max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              {"The DTC "}
              <span className="text-shimmer">Brand Lab</span>
            </h1>

            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
              A free 12-week incubator for early-stage consumer founders. Real curriculum, expert
              partners, and a community built to help you launch and scale an iconic brand — at no
              cost and no equity.
            </p>

            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                How It Works
              </a>
            </div>

            {/* Stat strip */}
            <div className="reveal mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-[#0a0a1a]/40 px-5 py-6 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ════════ 2. PROGRAM OVERVIEW — 5-stage flow ════════ */}
        <section id="program" className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                The Journey
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From Idea to Iconic Brand
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Twelve weeks structured around five stages, each with hands-on workshops, mentor
                sessions, and clear milestones.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {stages.map((stage, i) => (
                <div
                  key={stage.title}
                  className={`reveal reveal-delay-${i + 1} group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <stage.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold tabular-nums text-foreground/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                  {i < stages.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 3. WHY NOW — stats + bar chart ════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--warm))]">
                <TrendingUp className="h-3.5 w-3.5" />
                Why Now
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Consumer Is Being Rebuilt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Direct-to-consumer sales in the U.S. have more than doubled in five years. The tools
                to launch a brand have never been cheaper — but the founders who win are the ones
                with strategy, community, and the right partners around them.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {"That's exactly what the Brand Lab is built to provide."}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: "2x", l: "DTC sales growth since 2020" },
                  { v: "$243B", l: "U.S. DTC e-commerce in 2025" },
                  { v: "5", l: "Verticals we focus on" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSS bar chart */}
            <div className="reveal reveal-delay-2 rounded-2xl border border-border bg-card p-7">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  U.S. DTC E-Commerce Sales
                </h3>
                <span className="text-xs font-medium text-muted-foreground">USD, billions</span>
              </div>
              <div className="flex h-56 items-end justify-between gap-3">
                {marketData.map((d, i) => (
                  <div key={d.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <span className="text-xs font-semibold tabular-nums text-foreground/70">
                      {d.value}
                    </span>
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-primary/60 to-primary transition-all duration-1000 ease-out"
                      style={{
                        height: loaded ? `${(d.value / maxMarket) * 82}%` : "0%",
                        transitionDelay: `${i * 90}ms`,
                      }}
                    />
                    <span className="text-xs font-medium text-muted-foreground">{d.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 4. COHORT PROFILE ════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-foreground/5">
                <img
                  src={COHORT_IMG || "/placeholder.svg"}
                  alt="Sunstone founder community"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Who We Select
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for Consumer Founders
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We look for coachable, mission-driven founders ready to put in the work over a focused
                12-week sprint.
              </p>
              <ul className="mt-8 space-y-3">
                {cohortTraits.map((trait, i) => (
                  <li
                    key={trait}
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

        {/* ════════ 5. CURRICULUM — 3×3 grid ════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <BarChart3 className="h-3.5 w-3.5" />
                Curriculum
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything You Need to Build
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Nine practical modules covering the full journey from brand strategy to fundraising.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {curriculum.map((mod, i) => (
                <div
                  key={mod.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <mod.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 6. PROGRAM FORMAT — with free callout ════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Clock className="h-3.5 w-3.5" />
                The Format
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Twelve Focused Weeks
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Live workshops, 1:1 mentorship, and hands-on building — a blend of in-person sessions
                and remote-friendly work designed to fit around a founder&apos;s schedule.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { t: "Weekly workshops", d: "Led by operators who have scaled real consumer brands." },
                  { t: "1:1 mentorship", d: "Matched advisors who know your vertical inside out." },
                  { t: "Partner tools & credits", d: "Access to the same perks our portfolio companies use." },
                ].map((row) => (
                  <div key={row.t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{row.t}</div>
                      <div className="text-sm text-muted-foreground">{row.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free callout */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 font-display text-lg font-bold text-emerald-600">
                  $0
                </div>
                <p className="text-sm leading-relaxed text-foreground">
                  <span className="font-semibold">100% free, no equity.</span> We invest in the
                  ecosystem — not your cap table.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-foreground/5">
                <img
                  src={FORMAT_IMG || "/placeholder.svg"}
                  alt="Founder workshop session"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/10 bg-primary/[0.03]" />
            </div>
          </div>
        </section>

        {/* ════════ 7. TIMELINE — 4 nodes ════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Calendar className="h-3.5 w-3.5" />
                Getting In
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From Application to Cohort
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A simple, four-step path to your seat in the Brand Lab.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((node, i) => (
                <div key={node.step} className={`reveal reveal-delay-${i + 1} relative`}>
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[calc(100%_-_1rem)] top-4 hidden h-px w-[calc(100%_-_2rem)] border-t border-dashed border-border lg:block" />
                  )}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold tabular-nums text-primary">
                      {node.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">{node.title}</h3>
                  </div>
                  <p className="pl-11 text-sm leading-relaxed text-muted-foreground">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 8. FUNDING ════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--warm))]">
                    <DollarSign className="h-3.5 w-3.5" />
                    Beyond the Program
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    A Pathway to Capital
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                    The Brand Lab makes you investor-ready. For standout brands, it opens the door to
                    Sunstone&apos;s DTC investment track — aligned early-stage capital and a network of
                    partners who have scaled iconic consumer companies.
                  </p>
                  <a
                    href="/apply"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                  >
                    Explore the DTC Investment Track
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-background p-7 text-center">
                  <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                    $10K–$1M
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Potential aligned capital for brands that graduate into the investment track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 9. REGIONAL STATS ════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Target className="h-3.5 w-3.5" />
                Rooted in Southern California
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One of the World&apos;s Great Consumer Markets
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {regionStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-8 text-center`}
                >
                  <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ Community gallery band ════════ */}
        <section className="reveal overflow-hidden">
          <div className="grid grid-cols-3 gap-0.5">
            {GALLERY_IMGS.map((src, i) => (
              <div key={src} className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Sunstone community event ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* ════════ 10. PARTNERS — grid + logo wall ════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Handshake className="h-3.5 w-3.5" />
                Partners
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Backed by an Ecosystem
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Brand Lab founders tap into the same tools, credits, and expertise trusted by the
                Sunstone portfolio.
              </p>
            </div>

            <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="max-h-12 w-auto max-w-[70%] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 11. CLOSING CTA ════════ */}
        <section className="reveal px-6 pb-20 sm:px-10 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a1a] p-10 text-center sm:p-16 lg:p-20">
              <div className="absolute inset-0">
                <img
                  src="/images/dtc_imgs/DSC08209.JPG"
                  alt=""
                  className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]/90" />
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
              </div>

              <div className="relative z-10">
                <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60">
                  <Sparkles className="h-3 w-3" />
                  Applications Open
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {"Your Brand Starts "}
                  <span className="text-shimmer">Here</span>
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/50 lg:text-lg">
                  Join a free 12-week cohort built to help you launch, grow, and fund the next great
                  consumer brand. No cost. No equity. Just momentum.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
                  >
                    Apply to the Brand Lab
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-10 py-4 text-base font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="px-6 pb-24 sm:px-10 lg:pb-32">
          <div className="mx-auto max-w-3xl">
            <div className="reveal mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                FAQ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Questions, Answered
              </h2>
            </div>
            <div className="reveal space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
