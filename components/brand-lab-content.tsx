"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Scale,
  Factory,
  BookOpen,
  Briefcase,
  Megaphone,
  ShoppingCart,
  Bot,
  Store,
  TrendingUp,
  UtensilsCrossed,
  HeartPulse,
  Shirt,
  Cpu,
  DollarSign,
  Users,
  Package,
  Rocket,
  ChevronDown,
  Gift,
  PiggyBank,
  Video,
  Handshake,
  CalendarClock,
  Building2,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnerPeopleGrid } from "@/components/partner-people-grid"
import { PartnerLogoWall } from "@/components/partner-logo-wall"

/* ───────────────────────── Data (edit here to update the page) ───────────────────────── */

// Placeholder — replace with the live cohort application URL.
const APPLICATION_LINK = "https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"

const heroStats = [
  { value: "12", label: "weeks" },
  { value: "9", label: "program modules" },
  { value: "Sept 2026", label: "inaugural cohort" },
]

const fiveStages = [
  { number: "1", title: "Set Up", covers: ["Legal & entity", "Banking & tax", "Market readiness"] },
  { number: "2", title: "Launch Channels", covers: ["DTC & marketplaces", "Social commerce", "Retail entry"] },
  { number: "3", title: "Build Growth", covers: ["Marketing & creators", "Community", "Performance"] },
  { number: "4", title: "Prepare Capital", covers: ["Financial setup", "Investor prep", "Capital access"] },
  { number: "5", title: "Showcase", covers: ["Demo Day", "LA Tech Week", "Ecosystem exposure"] },
]

const benefitCards = [
  { icon: DollarSign, title: "Capital", description: "Up to $100K in funding opportunities" },
  { icon: Package, title: "Resources", description: "Access to 30+ partners and world-class tools" },
  { icon: Users, title: "Community", description: "A thriving network of founders, operators, and experts" },
]

const differentiators = [
  {
    icon: BookOpen,
    title: "Practical & Sequential",
    description: "One focused module per week that builds toward market entry.",
  },
  {
    icon: Users,
    title: "Expert-Led",
    description: "Top operators, investors, and advisors from the Sunstone network teach and mentor.",
  },
  {
    icon: Rocket,
    title: "Built to Accelerate",
    description: "Tools, templates, and office hours every week to help you move faster and with confidence.",
  },
]

const whyNowStats = [
  { value: "$21.0T", label: "U.S. consumer spending", source: "Bureau of Economic Analysis, 2025" },
  { value: "$15.1B", label: "TikTok Shop U.S. sales, up 68% in one year", source: "Momentum Works, 2025" },
  { value: "108M", label: "Americans bought through social platforms in 2025", source: "eMarketer, 2025" },
]

// U.S. social commerce sales, in $ billions. Refresh annually.
const socialCommerceData = [
  { year: "2022", value: 29.6 },
  { year: "2023", value: 39.0 },
  { year: "2024", value: 55.8 },
  { year: "2025", value: 77.6 },
  { year: "2026", value: 101.7 },
  { year: "2027", value: 126.9 },
]

const focusCategories = [
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: HeartPulse, label: "Wellness & Personal Care" },
  { icon: Shirt, label: "Apparel" },
  { icon: Cpu, label: "Consumer Electronics" },
]

const selectionCriteria = [
  {
    number: "01",
    title: "Consumer Focus",
    description: "Differentiated products with a clear customer and strong brand potential.",
  },
  {
    number: "02",
    title: "Market Signal",
    description: "Existing sales, customer traction, retail validation, or credible demand.",
  },
  {
    number: "03",
    title: "U.S. Readiness",
    description: "A defined goal to launch, expand, or accelerate growth in the U.S.",
  },
  {
    number: "04",
    title: "Founder Commitment",
    description: "Leadership ready to participate actively throughout the 12-week program.",
  },
]

const modules = [
  { number: "01", icon: Scale, title: "Legal & Compliance", description: "Expert-led legal and compliance essentials" },
  { number: "02", icon: Factory, title: "Supply Chain & Manufacturing", description: "Global sourcing and production strategy" },
  { number: "03", icon: BookOpen, title: "Brand & Brand Story", description: "Founder narrative and brand identity" },
  { number: "04", icon: Briefcase, title: "Back Office", description: "Tax, HR, and banking foundations" },
  { number: "05", icon: Megaphone, title: "Marketing", description: "Content, creators, and performance growth" },
  { number: "06", icon: ShoppingCart, title: "Sales Channel", description: "E-commerce, TikTok Shop, and Amazon" },
  { number: "07", icon: Bot, title: "AI Agent & AI Support", description: "Agentic AI for brand operations" },
  { number: "08", icon: Store, title: "Retail Channel", description: "Wholesale and retail expansion" },
  { number: "09", icon: TrendingUp, title: "Capital Readiness", description: "Fundraising, pitching, and financial planning" },
]

const formatItems = [
  { icon: Video, title: "Online classes", description: "Core modules delivered live, one focused module per week." },
  { icon: Briefcase, title: "Workshops", description: "Working sessions with partner operators on specific problems in your business." },
  { icon: Users, title: "Weekly 1:1 office hours", description: "Every week, every founder. Dedicated time with a partner or mentor matched to your category." },
  { icon: Building2, title: "In-person programming", description: "Cohort events, Southern California tech weeks, and the investor showcase. Attending in person is strongly encouraged." },
  { icon: TrendingUp, title: "Investor readiness preparation", description: "Direct coaching from leading VCs and investment firms ahead of the December showcase." },
  { icon: Handshake, title: "Partner network access", description: "Introductions across 30+ partners spanning legal, supply chain, platform, marketing, retail, and capital." },
]

const timelineNodes = [
  { number: "01", timing: "Now", milestone: "Applications open", detail: "Rolling review through the summer" },
  { number: "02", timing: "September", milestone: "Cohort kickoff", detail: "6–10 brands begin the 12 weeks in Los Angeles" },
  {
    number: "03",
    timing: "October",
    milestone: "Southern California Tech Weeks",
    detail: "LA Tech Week (Oct 12–18), OC Tech Week, Glendale Tech Week, and more — cohort and partners visible citywide",
  },
  { number: "04", timing: "December", milestone: "Investor Showcase", detail: "Public finale with investor judging" },
]

const socalStats = [
  { value: "$1.1T+", label: "LA metro GDP, the 3rd largest metro economy in the world", source: "BEA, 2024" },
  { value: "#1", label: "U.S. apparel and fashion manufacturing hub", source: "BLS, 2024" },
  { value: "~1/3", label: "of U.S. container imports enter through the Ports of LA and Long Beach", source: "2024" },
  { value: "$320M+", label: "venture capital into creator-founded LA startups", source: "LA Business Journal, 2025" },
]

const svicStats = [
  { value: "100+", label: "events hosted" },
  { value: "80+", label: "pitch sessions" },
  { value: "50K+", label: "community reach" },
  { value: "100+", label: "portfolio companies" },
]

const faqs = [
  { q: "Is there really no cost?", a: "Yes. There is no program fee and no required equity." },
  { q: "Do I have to take investment?", a: "No, and it does not affect selection." },
  {
    q: "Can I apply if I'm above $200K GMV?",
    a: "Yes. Under $200K is preferred, but stronger brands are welcome to apply.",
  },
  {
    q: "What if my brand is pre-revenue?",
    a: "Ideation-stage brands are eligible. Criterion 02 (Market Signal) can be met by credible demand, not only sales.",
  },
  {
    q: "Can international founders apply?",
    a: "Yes — the cohort is U.S.-based and international.",
  },
]

/* ───────────────────────── Component ───────────────────────── */

export function BrandLabContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const maxChart = Math.max(...socialCommerceData.map((d) => d.value))

  return (
    <>
      <Navbar darkHero />
      <main className="relative min-h-screen" ref={containerRef}>
        {/* ══ 1. HERO ══ */}
        <header className="relative overflow-hidden bg-[#0a0a1a] pb-20 pt-32 sm:pt-40">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
            <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-[hsl(36,100%,60%)]/15 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <p
              className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(36,100%,65%)]"
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s 0.1s" }}
            >
              Inaugural Cohort · September–December 2026
            </p>

            <h1
              className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              Sunstone DTC <span className="text-shimmer">Brand Lab</span>
            </h1>

            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-xl">
              A 12-week platform that equips global consumer brands to successfully launch, scale, and
              raise in the U.S.
            </p>

            <p className="reveal mt-8 max-w-3xl border-l-2 border-primary/60 pl-5 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              We compress a brand&apos;s first year in America into 12 weeks.
            </p>

            {/* Stat strip */}
            <div className="reveal mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={APPLICATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                See the Curriculum
              </a>
            </div>

            {/* Free badge */}
            <div className="reveal mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              No program fee · No equity required
            </div>
          </div>
        </header>

        {/* ══ 2. WHAT BRAND LAB IS ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                The Program
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Brand Lab Is
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                A 12-week platform that equips global consumer brands to successfully launch, scale, and
                raise in the U.S.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Each week covers one practical step: setting up a U.S. entity, building supply chain and
                logistics, opening sales channels such as TikTok Shop and Amazon, running marketing, and
                preparing to raise capital. Experts from the Sunstone network teach each module and hold
                weekly office hours. The program ends with an investor showcase where the brands present
                publicly.
              </p>
            </div>

            {/* Five-stage flow */}
            <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {fiveStages.map((stage, i) => (
                <React.Fragment key={stage.number}>
                  <div
                    className={`reveal reveal-delay-${i + 1} flex-1 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5`}
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                        {stage.number}
                      </span>
                      <h3 className="font-display text-sm font-bold text-foreground">{stage.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {stage.covers.map((c) => (
                        <li key={c} className="text-xs leading-relaxed text-muted-foreground">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < fiveStages.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-muted-foreground/40 lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Benefit cards */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {benefitCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 rounded-2xl border border-border bg-muted/30 p-6`}
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="reveal mt-12 text-center font-display text-xl font-medium text-foreground sm:text-2xl">
              Vetted brands. Expert partners. Proven process.
            </p>

            {/* Differentiators */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. WHY NOW ══ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                Why Now
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                American consumers are adopting new brands through new channels.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {whyNowStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-7`}
                >
                  <div className="font-display text-4xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">{stat.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground/70">{stat.source}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="reveal mt-8 rounded-2xl border border-border bg-card p-7 sm:p-9">
              <h3 className="font-display text-lg font-bold text-foreground">
                U.S. social commerce sales, in $ billions
              </h3>
              <div className="mt-8 flex items-end justify-between gap-3 sm:gap-6" style={{ height: 220 }}>
                {socialCommerceData.map((d, i) => (
                  <div key={d.year} className="flex flex-1 flex-col items-center justify-end gap-2">
                    <span className="font-display text-xs font-bold tabular-nums text-foreground sm:text-sm">
                      {d.value}
                    </span>
                    <div
                      className={`reveal reveal-delay-${(i % 6) + 1} w-full rounded-t-lg bg-gradient-to-t from-primary to-purple-400 transition-all duration-500 hover:opacity-90`}
                      style={{ height: `${(d.value / maxChart) * 170}px` }}
                    />
                    <span className="text-xs font-medium text-muted-foreground tabular-nums">{d.year}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground/70">
                Sales across all social platforms, crossing $100B for the first time in 2026. Source:
                eMarketer.
              </p>
            </div>

            <p className="reveal mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              Distribution is now won on attention, not shelf space. Great products still lose when the
              brand can&apos;t build narrative, creator operations, and channel strategy fast enough. That
              gap is what these 12 weeks close.
            </p>
          </div>
        </section>

        {/* ══ 4. WHO WE SELECT ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Users className="h-3.5 w-3.5" />
                The Cohort
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Select
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                A focused cohort of 6–10 U.S.-based and international consumer brands ready to launch,
                scale, and raise capital in the U.S.
              </p>
            </div>

            {/* Big number */}
            <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.06] to-transparent p-8 text-center sm:p-12">
              <div className="font-display text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                6–10 selected brands
              </div>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                Small by design. Every company receives hands-on support and direct partner access.
              </p>
            </div>

            {/* Focus categories */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {focusCategories.map((cat, i) => (
                <div
                  key={cat.label}
                  className={`reveal reveal-delay-${i + 1} group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold leading-tight text-foreground/80">{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Selection criteria */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {selectionCriteria.map((c, i) => (
                <div
                  key={c.number}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-6`}
                >
                  <span className="font-display text-sm font-bold tabular-nums text-primary/60">
                    {c.number}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>

            {/* Stage note */}
            <div className="reveal mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Stage</p>
                <p className="mt-2 text-base font-medium text-foreground">Ideation through Seed</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Traction</p>
                <p className="mt-2 text-base font-medium text-foreground">
                  Under $200K GMV preferred. Above that is still welcome to apply.
                </p>
              </div>
            </div>

            <p className="reveal mt-8 text-center text-sm text-muted-foreground">
              Every company is screened for program fit, market readiness, and growth potential.
            </p>
          </div>
        </section>

        {/* ══ 5. CURRICULUM ══ */}
        <section id="curriculum" className="scroll-mt-24 border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                The Curriculum
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                9 Modules. One Complete Brand-Building System.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <div
                  key={m.number}
                  className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-2xl font-bold tabular-nums text-border transition-colors group-hover:text-primary/30">
                      {m.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-10 text-center text-sm text-muted-foreground">
              Partners headline the module closest to their business and hold office hours with every brand.
            </p>
          </div>
        </section>

        {/* ══ 6. HOW IT RUNS ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <CalendarClock className="h-3.5 w-3.5" />
                Format
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How the Program Works
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">
                Hybrid — online instruction, in-person moments in Los Angeles
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {formatItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 rounded-2xl border border-border bg-card p-6`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free callout */}
            <div className="reveal mt-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center sm:p-12">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                The Brand Lab is free to join.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                No program fee. No required equity. We measure ourselves on whether your brand grows —
                that&apos;s the entire model.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 7. TIMELINE ══ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <CalendarClock className="h-3.5 w-3.5" />
                Timeline
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Inaugural Cohort: September to December 2026
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {timelineNodes.map((node, i) => (
                <div key={node.number} className={`reveal reveal-delay-${i + 1} relative`}>
                  {i < timelineNodes.length - 1 && (
                    <div className="absolute left-[calc(2rem)] top-4 hidden h-px w-[calc(100%-1rem)] border-t border-dashed border-border lg:block" />
                  )}
                  <div className="relative">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-xs font-bold tabular-nums text-primary">
                      {node.number}
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      {node.timing}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-foreground">{node.milestone}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{node.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. FUNDING OPTIONS ══ */}
        <section className="relative overflow-hidden bg-[#0a0a1a] px-6 py-24 sm:px-10 lg:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[hsl(36,100%,60%)]/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(36,100%,65%)]">
                <PiggyBank className="h-3.5 w-3.5" />
                Funding
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Two Ways to Fund Your Growth
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg">
                Brand Lab founders have access to up to $100K in funding opportunities through two
                separate tracks. Both are optional and run independently from cohort admission.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                { icon: TrendingUp, title: "Equity Program", tk: "check size, stage, structure, and how to apply" },
                { icon: Gift, title: "Grant Program", tk: "grant amount, eligibility, and process" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="reveal group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-3 text-sm text-white/50">
                    TK — {card.tk}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal mx-auto mt-8 max-w-3xl rounded-2xl border border-[hsl(36,100%,60%)]/30 bg-[hsl(36,100%,60%)]/10 px-6 py-5 text-center">
              <p className="text-sm leading-relaxed text-[hsl(36,100%,80%)]">
                Participation in either funding program is entirely optional. Choosing not to apply to
                either has <span className="font-bold text-white">no effect</span> on your selection into
                the Brand Lab.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 9. WHY SOUTHERN CALIFORNIA ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Building2 className="h-3.5 w-3.5" />
                Why Southern California
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The region already has every piece a consumer brand needs
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {socalStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-7`}
                >
                  <div className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">{stat.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground/70">{stat.source}</p>
                </div>
              ))}
            </div>

            {/* SVIC credibility */}
            <div className="reveal mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:grid-cols-4">
              {svicStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 10. PARTNERS ══ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Handshake className="h-3.5 w-3.5" />
                Partners
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partners Already in the Brand Lab
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Confirmed partners contributing expertise, market access, and hands-on support to the
                Brand Lab cohort.
              </p>
            </div>

            <div className="mt-14">
              <PartnerPeopleGrid />
            </div>

            <div className="mt-16">
              <PartnerLogoWall />
            </div>

            <div className="reveal mt-10 text-center">
              <a
                href="/#team"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                Interested in partnering?
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ══ 11. APPLY ══ */}
        <section className="px-6 py-24 sm:px-10 lg:py-32">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Rocket className="h-3.5 w-3.5" />
              Apply
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Apply to the Inaugural Cohort
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Applications for the September 2026 cohort are open. The program is free to join and reviewed
              on a rolling basis.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={APPLICATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/25"
              >
                Start Your Application
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions? Contact{" "}
              <a href="mailto:potter.peng@sunstoneinvestment.com" className="font-medium text-primary hover:underline">
                potter.peng@sunstoneinvestment.com
              </a>{" "}
              or{" "}
              <a href="mailto:angie.zuo@sunstoneinvestment.com" className="font-medium text-primary hover:underline">
                angie.zuo@sunstoneinvestment.com
              </a>
            </p>
          </div>
        </section>

        {/* ══ 12. FAQ ══ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="reveal mb-10 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={i}
                    className="reveal overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold text-foreground">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
