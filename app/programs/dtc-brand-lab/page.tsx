"use client"

import React from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Building2,
  Boxes,
  Store,
  Megaphone,
  TrendingUp,
  Layers,
  Users2,
  Gauge,
  Clock,
  MapPin,
  Calendar,
  Trophy,
  Handshake,
  ShoppingBag,
  BadgeCheck,
  Shirt,
  Sparkle,
  UtensilsCrossed,
  Cpu,
  Scale,
  Briefcase,
  Network,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { partnerPeople, partnerLogos } from "@/data/partners"

/* ═══════════════════════════════════════════════════════════════════════
   DATA — edit these arrays to update the page
═══════════════════════════════════════════════════════════════════════ */

const APPLY_URL = "https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"

const heroStats = [
  { value: "12", label: "week program" },
  { value: "6–10", label: "brands per cohort" },
  { value: "$0", label: "cost to founders" },
  { value: "1", label: "investor showcase" },
]

// Five-stage flow: one practical step at a time toward U.S. market entry
const flowStages = [
  { icon: Building2, title: "U.S. Entity", description: "Set up to sell in the United States." },
  { icon: Boxes, title: "Supply Chain", description: "Build supply chain and logistics." },
  { icon: Store, title: "Sales Channels", description: "Open TikTok Shop, Amazon, and retail." },
  { icon: Megaphone, title: "Marketing", description: "Run content, creators, and paid growth." },
  { icon: TrendingUp, title: "Raise Capital", description: "Prepare to raise and present publicly." },
]

const benefits = [
  {
    icon: Layers,
    title: "Practical & Sequential",
    description: "One focused module per week that builds toward market entry.",
  },
  {
    icon: Users2,
    title: "Expert-Led",
    description: "Top operators, investors, and advisors from the Sunstone network teach and mentor.",
  },
  {
    icon: Gauge,
    title: "Built to Accelerate",
    description: "Tools, templates, and office hours every week to help you move faster and with confidence.",
  },
]

// "Why now" — the rise of social commerce (illustrative U.S. social commerce sales, $B)
const whyNowStats = [
  { value: "$1.2T", label: "Projected global social commerce sales by 2025" },
  { value: "3×", label: "Social commerce growing ~3× faster than traditional e-commerce" },
  { value: "#1", label: "TikTok Shop among the fastest-growing U.S. sales channels" },
]

const socialCommerceGrowth = [
  { year: "2021", value: 37 },
  { year: "2022", value: 46 },
  { year: "2023", value: 67 },
  { year: "2024", value: 90 },
  { year: "2025", value: 110 },
]

// Cohort profile — categories we back
const cohortCategories = [
  { icon: Shirt, label: "Fashion & Apparel" },
  { icon: Sparkle, label: "Beauty & Personal Care" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Cpu, label: "Consumer Electronics" },
]

const cohortCriteria = [
  { number: "01", title: "Consumer brand", description: "You are building a consumer brand preparing to sell in the United States." },
  { number: "02", title: "Market-ready", description: "You have early revenue or a product that is ready for the market." },
  { number: "03", title: "All-in for 12 weeks", description: "You can commit to the 12 weeks in person in Los Angeles." },
  { number: "04", title: "Ready to raise", description: "You are preparing to raise capital and present at the showcase." },
]

// 3×3 curriculum — what the 12 weeks cover
const modules = [
  { number: 1, icon: Sparkles, title: "Brand & Story", description: "Positioning and founder narrative" },
  { number: 2, icon: Boxes, title: "Supply Chain", description: "Sourcing, sampling, and logistics" },
  { number: 3, icon: Store, title: "Sales Channels", description: "TikTok Shop, Amazon, and retail" },
  { number: 4, icon: Megaphone, title: "Marketing", description: "Content, creators, paid growth" },
  { number: 5, icon: TrendingUp, title: "Capital", description: "Unit economics and investor prep" },
  { number: 6, icon: Scale, title: "Legal", description: "U.S. entity, IP, and contracts" },
  { number: 7, icon: Briefcase, title: "Back Office", description: "Tax, banking, HR, and tools" },
  { number: 8, icon: Network, title: "Ecosystem", description: "Government and local network" },
  { number: 9, icon: Trophy, title: "Showcases", description: "Office hours through Demo Day" },
]

const formatDetails = [
  { icon: Clock, label: "Duration", value: "12 weeks, one module per week" },
  { icon: MapPin, label: "Location", value: "In person in Los Angeles" },
  { icon: Users2, label: "Cohort size", value: "6 to 10 consumer brands" },
  { icon: Handshake, label: "Support", value: "Weekly office hours with expert mentors" },
  { icon: Trophy, label: "Finale", value: "Public investor showcase" },
]

// Four-node timeline — when it runs
const timeline = [
  { number: "01", when: "Now", title: "Partner conversations", description: "Founding partner terms agreed over the summer" },
  { number: "02", when: "September", title: "Cohort kickoff", description: "6 to 10 brands begin the 12 weeks in Los Angeles" },
  { number: "03", when: "October", title: "LA Tech Week", description: "Cohort and partners visible citywide, Oct 12 to 18" },
  { number: "04", when: "December", title: "Investor Showcase", description: "Public finale with investor judging" },
]

const fundingCards = [
  {
    icon: BadgeCheck,
    eyebrow: "Program cost",
    value: "$0",
    title: "The program is free",
    description:
      "The full 12 weeks — every module, mentor, and office hour — are free for accepted brands. No fees and no equity taken to participate.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Capital access",
    value: "$10K–$1M",
    title: "Meet aligned investors",
    description:
      "The program ends with an investor showcase where brands present publicly. Select brands may be considered for investment from the Sunstone network.",
  },
]

// Regional stats — why Southern California
const regionalStats = [
  { value: "$1.1T+", label: "LA metro GDP, the 3rd largest metro economy in the world", source: "BEA, 2024" },
  { value: "#1", label: "U.S. apparel and fashion manufacturing hub", source: "BLS, 2024" },
  { value: "~1/3", label: "of U.S. container imports enter through the Ports of LA and Long Beach", source: "2024" },
  { value: "$320M+", label: "venture capital into creator-founded LA startups", source: "LA Business Journal, 2025" },
]

const faqs = [
  {
    q: "How much does the program cost?",
    a: "Nothing. The 12-week program is free for accepted brands, and we do not take equity to participate.",
  },
  {
    q: "Where and when does it run?",
    a: "In person in Los Angeles. The first cohort runs September to December 2026.",
  },
  {
    q: "Who should apply?",
    a: "Consumer brands preparing to sell in the United States. We accept 6 to 10 brands per cohort.",
  },
  {
    q: "What does each week cover?",
    a: "One practical step at a time — U.S. entity, supply chain and logistics, sales channels such as TikTok Shop and Amazon, marketing, and preparing to raise capital.",
  },
  {
    q: "What happens at the end?",
    a: "The program ends with a public investor showcase where the brands present to investors and the wider Sunstone network.",
  },
]

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════ */

export default function DtcBrandLabPage() {
  const containerRef = useReveal()
  const maxGrowth = Math.max(...socialCommerceGrowth.map((d) => d.value))

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen" ref={containerRef}>

        {/* ═══════════ 1. HERO ═══════════ */}
        <header className="relative overflow-hidden px-6 pb-16 pt-36 sm:px-10 lg:pb-24 lg:pt-44">
          <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[hsl(var(--warm)/0.12)] blur-3xl" />

          <div className="mx-auto max-w-6xl">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                <Sparkles className="h-3 w-3" />
                Sunstone DTC Brand Lab
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                First cohort: Sep–Dec 2026
              </span>
            </div>

            <h1 className="reveal max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              {"We compress a brand's first year in America into "}
              <span className="text-primary italic">12 weeks.</span>
            </h1>

            <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl text-pretty">
              A free, 12-week, in-person program in Los Angeles for 6 to 10 consumer brands preparing to sell in the United States.
            </p>

            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-9 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/20 hover:bg-accent"
              >
                See the Curriculum
              </a>
            </div>

            {/* Stat strip */}
            <div className="reveal reveal-delay-2 mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-card px-6 py-6 text-center">
                  <div className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ═══════════ 2. PROGRAM OVERVIEW ═══════════ */}
        <section className="border-t border-border px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-14 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                The Program
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Why Sunstone Brand Lab?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
                Each week covers one practical step: setting up a U.S. entity, building supply chain and logistics, opening sales channels such as TikTok Shop and Amazon, running marketing, and preparing to raise capital. Experts from the Sunstone network teach each module and hold weekly office hours. The program ends with an investor showcase where the brands present publicly.
              </p>
            </div>

            {/* Five-stage horizontal flow */}
            <div className="reveal relative mb-16">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {flowStages.map((stage, i) => (
                  <div key={stage.title} className="relative flex flex-col">
                    {/* connector arrow */}
                    {i < flowStages.length - 1 && (
                      <div className="absolute right-[-14px] top-7 hidden text-border lg:block">
                        <ArrowUpRight className="h-5 w-5 rotate-45" />
                      </div>
                    )}
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                          <stage.icon className="h-5 w-5" />
                        </span>
                        <span className="font-display text-xs font-bold tabular-nums text-muted-foreground/60">
                          {`0${i + 1}`}
                        </span>
                      </div>
                      <h3 className="font-display text-sm font-bold text-foreground">{stage.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Three benefit cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 3. WHY NOW ═══════════ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                Why Now
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Social commerce is reshaping how brands launch.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
                Consumers now discover and buy inside the feed. Brands that master social channels early capture outsized growth — and that is exactly where the 12 weeks are pointed.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Three stat cards */}
              <div className="reveal grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {whyNowStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="reveal reveal-delay-1 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-1 font-display text-base font-bold text-foreground">
                  U.S. social commerce sales
                </div>
                <p className="mb-6 text-xs text-muted-foreground">Sales in $ billions — illustrative</p>
                <div className="flex h-56 items-end justify-between gap-3 sm:gap-4">
                  {socialCommerceGrowth.map((d, i) => (
                    <div key={d.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <span className="font-display text-xs font-bold tabular-nums text-foreground">
                        {`$${d.value}B`}
                      </span>
                      <div
                        className={`reveal-scale reveal-delay-${i + 1} w-full rounded-t-lg bg-primary transition-all duration-500`}
                        style={{ height: `${(d.value / maxGrowth) * 100}%`, minHeight: "8px" }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">{d.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ 4. COHORT PROFILE ═══════════ */}
        <section className="border-t border-border px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Users2 className="h-3.5 w-3.5" />
                The Cohort
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Who the program is for
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
                We back consumer brands across the categories where next-generation brands are being built, and select founders ready to move fast.
              </p>
            </div>

            {/* 4-category grid */}
            <div className="reveal mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {cohortCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-foreground">{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Four numbered criteria cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cohortCriteria.map((c, i) => (
                <div
                  key={c.number}
                  className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-2xl border border-border bg-card p-6`}
                >
                  <span className="font-display text-4xl font-bold tabular-nums text-primary/15">{c.number}</span>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 5. CURRICULUM (3×3) ═══════════ */}
        <section id="curriculum" className="scroll-mt-24 border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Layers className="h-3.5 w-3.5" />
                The Curriculum
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                What the 12 weeks cover
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
                Partners headline the module closest to their business and hold office hours with every brand.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <div
                  key={m.number}
                  className={`reveal reveal-delay-${(i % 3) + 1} group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5`}
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs font-bold tabular-nums text-muted-foreground/50">
                        {`0${m.number}`}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground">{m.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 6. PROGRAM FORMAT + FREE CALLOUT ═══════════ */}
        <section className="border-t border-border px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="reveal">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Clock className="h-3.5 w-3.5" />
                Program Format
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                How it runs
              </h2>
              <ul className="mt-8 space-y-3">
                {formatDetails.map((detail) => (
                  <li
                    key={detail.label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <detail.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-foreground">{detail.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free callout */}
            <div className="reveal reveal-delay-1 relative overflow-hidden rounded-3xl border border-primary/20 bg-primary p-10 text-primary-foreground sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  No cost. No equity.
                </span>
                <div className="mt-6 font-display text-6xl font-bold tracking-tight sm:text-7xl">Free</div>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-primary-foreground/85">
                  The program is free for accepted brands. Every module, mentor, and weekly office hour is included at no cost — and we take no equity to participate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ 7. TIMELINE ═══════════ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-14 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Calendar className="h-3.5 w-3.5" />
                When It Runs
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                First cohort: September to December 2026
              </h2>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* horizontal line */}
              <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
              {timeline.map((node, i) => (
                <div key={node.number} className={`reveal reveal-delay-${i + 1} relative`}>
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-xs font-bold tabular-nums text-primary">
                    {node.number}
                  </span>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">{node.when}</div>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground">{node.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{node.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-10 text-sm italic text-muted-foreground">
              Partners who join before kickoff are recognized as founding partners of the first cohort.
            </p>
          </div>
        </section>

        {/* ═══════════ 8. FUNDING ═══════════ */}
        <section className="border-t border-border px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                Funding
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Free to join, built to raise
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {fundingCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card p-8 sm:p-10`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {card.eyebrow}
                  </div>
                  <div className="mt-1 font-display text-5xl font-bold tracking-tight text-foreground">
                    {card.value}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-8 rounded-xl border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Disclaimer:</strong> Participation in the program is free and non-dilutive. The program does not guarantee investment. Any capital is offered separately and is subject to independent diligence, eligibility, and terms. Figures shown are illustrative.
            </p>
          </div>
        </section>

        {/* ═══════════ 9. REGIONAL STATS ═══════════ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <MapPin className="h-3.5 w-3.5" />
                Why Southern California
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                The region already has every piece a consumer brand needs
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {regionalStats.map((stat, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border border-border bg-card p-6`}
                >
                  <div className="font-display text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{stat.label}</p>
                  <p className="mt-4 text-xs text-muted-foreground/70">{stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 10. PARTNERS ═══════════ */}
        <section className="border-t border-border px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Handshake className="h-3.5 w-3.5" />
                Mentors & Partners
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Taught by the Sunstone network
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
                Top operators, investors, and advisors teach the modules and mentor every brand through Demo Day.
              </p>
            </div>

            {/* People grid */}
            <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {partnerPeople.map((person, i) => (
                <div
                  key={person.name}
                  className={`reveal reveal-delay-${(i % 4) + 1} group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 font-display text-lg font-bold text-white">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <h3 className="mt-4 font-display text-sm font-bold text-foreground">{person.name}</h3>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{person.role}</p>
                  <p className="mt-0.5 text-xs font-medium text-primary">{person.company}</p>
                </div>
              ))}
            </div>

            {/* Logo wall */}
            <div className="reveal">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                  In good company
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
                {partnerLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className="font-display text-base font-bold text-muted-foreground/50 transition-colors hover:text-foreground sm:text-lg"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ 11. CLOSING CTA + FAQ ═══════════ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal overflow-hidden rounded-3xl border border-primary/20 bg-primary p-10 text-center text-primary-foreground sm:p-16">
              <ShoppingBag className="mx-auto mb-6 h-10 w-10 opacity-80" />
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Build your brand&apos;s first year in America in 12 weeks.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 text-pretty">
                Applications are open for the first cohort. The program is free — apply in a few minutes.
              </p>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-9 py-4 text-base font-semibold text-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* FAQ */}
            <div className="reveal mx-auto mt-16 max-w-3xl">
              <h3 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently asked questions
              </h3>
              <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="last:border-b-0">
                    <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
